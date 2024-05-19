'use client'

import { useDeleteAppoinmentsMutation, useMyAppoinmentsQuery } from "@/lib/features/Api/Api";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { Button, Spin, Tooltip } from "antd"
import { TiTick } from "react-icons/ti"
import { FcCancel } from "react-icons/fc"
import { LoadingOutlined } from '@ant-design/icons';
import { CiViewList } from "react-icons/ci"
import { MdOutlineDelete } from "react-icons/md"
import toast, { Toaster } from "react-hot-toast"
import ClientLoading from "@/components/Ui/ClientLoading/ClientLoading";
import ClientError from "@/components/Ui/ClientError/ClientError";
import EmptyData from "@/components/Ui/EmptyData/EmptyData";
import Link from "next/link";

const AppoinMents = () => {
    const { data: sessionData, status } = useSession();
    const userEmail = sessionData?.user?.email || '';
    const [type, setType] = useState('all');
    const { data, isLoading, isError } = useMyAppoinmentsQuery({ email: userEmail, type });
    const [deleteAppoin, { isLoading: deleteLoading, isError: deletError, isSuccess: deleteSuccess }] = useDeleteAppoinmentsMutation();

    const changeResurvType = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setType(e.target.value);
    }

    const deleteAppoinment = (id: string) => {
        deleteAppoin(id)
    }

    // if(deleteSuccess){
    //     console.log(deleteSuccess);
    //     toast.success('Delete Successfully');
    // }

    console.log(data);

    return (
        <div>
            <div>
                <div className="bg-[#262522] rounded-md p-2 mb-5 flex gap-x-3 items-center">
                    <span className="p-2 bg-gradient-to-r from-[#14022b] to-[#1c043d] inline-block rounded-sm">
                        <CiViewList className="text-xl text-white "></CiViewList>
                    </span>
                    <h4 className="text-xl font-medium font-serif text-white">My Appoinments</h4>
                </div>

                {
                    (isLoading || deleteLoading) ? <ClientLoading /> : (isError || deletError) ? <ClientError /> :
                        <div>
                            <div className="text-right my-3">
                                <select onChange={changeResurvType} className="px-3 py-1 rounded-md text-white outline-0 bg-[#262522]">
                                    <option value="all">All</option>
                                    <option value="pending">Pending</option>
                                    <option value="complete">Complete</option>
                                    <option value="cencel">Cencel</option>
                                </select>
                            </div>
                            {
                                Array.isArray(data) && data.length <= 0 ? <EmptyData /> :
                                    <div>
                                        <div className="overflow-x-auto bg-[#262522] text-gray-300">
                                            <table className="table">
                                                {/* head */}
                                                <thead>
                                                    <tr className="border-[#494846] text-gray-200">
                                                        <th>Name</th>
                                                        <th>Phone</th>
                                                        <th>Test Name</th>
                                                        <th>Price</th>
                                                        <th>Date</th>
                                                        <th>Age</th>
                                                        <th>Blood</th>
                                                        <th>Details</th>
                                                        <th>Status</th>
                                                        <th>Delete</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {
                                                        Array.isArray(data) && data.length <= 0 ? <EmptyData /> : data?.map((appoinment) => {
                                                            return <tr key={appoinment?._id} className="border-[#494846]">

                                                                <td>
                                                                    {appoinment?.name}
                                                                </td>
                                                                <td>
                                                                    {appoinment?.phone}
                                                                </td>
                                                                <td>
                                                                    {appoinment?.testDetails[0]?.name}
                                                                </td>
                                                                <td>
                                                                    {appoinment?.testDetails[0]?.price}
                                                                </td>
                                                                <td>

                                                                    {new Date(appoinment?.testDetails[0]?.testDate).getDate() + '-' + (new Date(appoinment?.testDetails[0]?.testDate).getMonth() + 1) + '-' + new Date(appoinment?.testDetails[0]?.testDate).getFullYear()}
                                                                </td>
                                                                <td>
                                                                    {appoinment?.age}
                                                                </td>

                                                                <td>
                                                                    {appoinment?.blood}
                                                                </td>
                                                                <td>
                                                                    <Link className="text-sky-600" href={`/details/${appoinment?.testId}`}>See test details</Link>
                                                                </td>
                                                                <td>
                                                                    {appoinment.report === 'pending' && <div className="mx-auto">
                                                                        <Spin indicator={
                                                                            <LoadingOutlined style={{ color: '#4096FF', fontSize: 14, }} spin />} />
                                                                    </div>}


                                                                    {appoinment.report === 'complete' && <TiTick className="text-green-500 text-lg" />}

                                                                    {appoinment.report === 'cencel' && <FcCancel className="text-base " />}
                                                                </td>


                                                                <td>
                                                                    <Tooltip title={`delete`}>
                                                                        <Button
                                                                            style={{ backgroundColor: '#515150', boxShadow: '0', color: 'white', border: 0 }}
                                                                            type="primary"
                                                                            icon={<MdOutlineDelete />}
                                                                            onClick={() => deleteAppoinment(appoinment._id)}
                                                                        >
                                                                        </Button>
                                                                    </Tooltip>
                                                                </td>
                                                            </tr>
                                                        })
                                                    }


                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default AppoinMents;