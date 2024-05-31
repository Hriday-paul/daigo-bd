'use client'

import ClientError from "@/components/Ui/ClientError/ClientError";
import ClientLoading from "@/components/Ui/ClientLoading/ClientLoading";
import EmptyData from "@/components/Ui/EmptyData/EmptyData";
import { useGetReservationQuery } from "@/lib/features/Api/Api";
import { Spin } from "antd";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { CiViewList } from "react-icons/ci";
import { FcCancel } from "react-icons/fc";
import { TiTick } from "react-icons/ti";
import { LoadingOutlined } from '@ant-design/icons';
import ChangeStatus from "./ChangeStatus";

const Reservation = () => {
    const { data: userData } = useSession();
    const [type, setType] = useState('all');
    const { data, isLoading, isError, error } = useGetReservationQuery({ email: userData?.user?.email || '', type });

    const changeResurvType = (e : React.ChangeEvent<HTMLSelectElement>)=>{
        setType(e.target.value);
    }

    return (
        <div>
            <div className="bg-[#262522] rounded-md p-2 mb-5 flex gap-x-3 items-center">
                <span className="p-2 bg-gradient-to-r from-[#14022b] to-[#1c043d] inline-block rounded-sm">
                    <CiViewList className="text-xl text-white "></CiViewList>
                </span>
                <h4 className="text-xl font-medium font-serif text-gray-200">Reservation</h4>
            </div>

            {

            }

            {
                isLoading ? <ClientLoading /> : isError ? <ClientError /> :
                    <div>
                        <div className="text-right my-3">
                            <select onChange={changeResurvType} className="px-3 py-1 rounded-md text-white outline-0 bg-[#262522]">
                                <option value="all">All</option>
                                <option value="pending">Pending</option>
                                <option value="complete">Complete</option>
                                <option value="cencel">Cencel</option>
                            </select>
                        </div>
                        {data && data?.length <= 0 ? <EmptyData /> :
                            <div>
                                <div className="overflow-x-auto bg-[#262522]">
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
                                                <th>Status</th>
                                                <th>Change Status</th>
                                                {/* <th>Delete</th> */}

                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-300">

                                            {
                                                data?.map((reservation) => {
                                                    return <tr key={reservation?._id} className="border-[#494846]">

                                                        <td>
                                                            {reservation?.name}
                                                        </td>
                                                        <td>
                                                            {reservation?.phone}
                                                        </td>
                                                        <td>
                                                            {reservation?.testDetails[0]?.name}
                                                        </td>
                                                        <td>
                                                            {reservation?.testDetails[0]?.price}
                                                        </td>
                                                        <td>

                                                            {new Date(reservation?.testDetails[0]?.testDate).getDate() + '-' + (new Date(reservation?.testDetails[0]?.testDate).getMonth() + 1) + '-' + new Date(reservation?.testDetails[0]?.testDate).getFullYear()}
                                                        </td>
                                                        <td>
                                                            {reservation?.age}
                                                        </td>
                                                        <td>
                                                            {reservation?.blood}
                                                        </td>
                                                        <td>
                                                            {reservation.report === 'pending' && <div className="mx-auto">
                                                                <Spin indicator={
                                                                    <LoadingOutlined style={{ color: '#4096FF', fontSize: 14, }} spin />} />
                                                            </div>}


                                                            {reservation.report === 'complete' && <TiTick className="text-green-500 text-lg" />}

                                                            {reservation.report === 'cencel' && <FcCancel className="text-base " />}
                                                        </td>

                                                        <td>
                                                            <ChangeStatus patientId={reservation?._id} status={reservation?.report} admin={userData?.user?.email || ''}></ChangeStatus>
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
        </div >
    );
};

export default Reservation;