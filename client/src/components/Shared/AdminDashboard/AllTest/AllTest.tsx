'use client'
import ClientError from '@/components/Ui/ClientError/ClientError';
import ClientLoading from '@/components/Ui/ClientLoading/ClientLoading';
import EmptyData from '@/components/Ui/EmptyData/EmptyData';
import DeleteTest from '@/components/Ui/TestUpdateDrawer/DeleteTest';
import TestUpdateDrawer from '@/components/Ui/TestUpdateDrawer/TestUpdateDrawer';
import { useGetAllTestsQuery } from '@/lib/features/Api/Api';
import { Modal } from 'antd';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useState } from 'react';
import { CiViewList } from 'react-icons/ci';

const AllTest = () => {
    const { data } = useSession();
    const { isLoading, isError, data: testdata } = useGetAllTestsQuery({ email: data?.user?.email || '' });
    const [isModal, setIsModal] = useState<{ isOpen: boolean; content: string }>({
        isOpen: false,
        content: ""
    });

    const cencelModal = () => {
        setIsModal({
            isOpen: false,
            content: ""
        })
    };


    return (
        <div>
            <div className="bg-[#262522] rounded-md p-2 mb-5 flex gap-x-3 items-center">
                <span className="p-2 bg-gradient-to-r from-[#14022b] to-[#1c043d] inline-block rounded-sm">
                    <CiViewList className="text-xl text-white "></CiViewList>
                </span>
                <h4 className="text-xl font-medium font-serif text-gray-200">All Test</h4>
            </div>

            <div>
                {
                    isLoading ? <ClientLoading /> : isError ? <ClientError /> :
                        <div>
                            {
                                !testdata ? <EmptyData /> :
                                    <div className="overflow-x-auto bg-[#262522] text-gray-300">
                                        <table className="table">
                                            {/* head */}
                                            <thead>
                                                <tr className="border-[#494846] text-gray-200">
                                                    <th>Photo</th>
                                                    <th>Name</th>
                                                    <th>Date</th>
                                                    <th>Slot</th>
                                                    <th>Details</th>
                                                    <th>Edit</th>
                                                    <th>Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* row 1 */}
                                                {
                                                    testdata?.map((test) => {
                                                        return <tr key={test?._id} className="border-[#494846]">
                                                            <td>
                                                                <div className="flex items-center gap-3">
                                                                    <div className="avatar">
                                                                        <div className="w-12 h-12">

                                                                            <Image height={200} width={200} className="h-12 rounded-md w-auto" src={test?.photo !== '' ? `${test.photo}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUDOlaA7x6auc_yDvEigMgyktyrJBM34AFOaauo6-qXD5zg_vpZlZk9offXf9PMLdA0Lw&usqp=CAU"} alt="img" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="font-serif">
                                                                {test?.name}
                                                            </td>
                                                            <td>
                                                                {new Date(test?.testDate).getDate() + '-' + (new Date(test?.testDate).getMonth() + 1) + '-' + new Date(test?.testDate).getFullYear()}
                                                            </td>
                                                            <td>
                                                                {test?.slot}
                                                            </td>
                                                            <td>
                                                                <p className="cursor-pointer font-serif hover:underline underline-offset-2" onClick={() => setIsModal({ isOpen: true, content: test?.details })}>Details</p>
                                                                {
                                                                    isModal.isOpen && <Modal
                                                                        title="Details"
                                                                        style={{ backgroundColor: 'black' }}
                                                                        open={isModal.isOpen}
                                                                        onOk={cencelModal}
                                                                        onCancel={cencelModal}
                                                                        okButtonProps={{ style: { display: 'none' } }}
                                                                        centered>

                                                                        <p className="font-sans">{isModal?.content}</p>

                                                                    </Modal>
                                                                }
                                                            </td>
                                                            <td>
                                                                <TestUpdateDrawer test={test}admin={data?.user?.email || ''}></TestUpdateDrawer>
                                                            </td>
                                                            <td>
                                                                <DeleteTest admin={data?.user?.email || ''} id={test?._id}/>
                                                            </td>

                                                        </tr>
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default AllTest;