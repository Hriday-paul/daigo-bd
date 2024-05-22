'use client'

import ClientError from "@/components/Ui/ClientError/ClientError";
import ClientLoading from "@/components/Ui/ClientLoading/ClientLoading";
import EmptyData from "@/components/Ui/EmptyData/EmptyData";
import { useGetAllDoctorsQuery } from "@/lib/features/Api/Api";
import Image from "next/image";
import Link from "next/link";
import { CiViewList } from "react-icons/ci";
import { PiStudentDuotone } from "react-icons/pi";

const AdminDoctors = () => {
    const { isLoading, isError, data: doctors } = useGetAllDoctorsQuery({});

    return (
        <div>
            <div>
                <div className="bg-[#262522] rounded-md p-2 mb-5 flex gap-x-3 items-center">
                    <span className="p-2 bg-gradient-to-r from-[#14022b] to-[#1c043d] inline-block rounded-sm">
                        <CiViewList className="text-xl text-white "></CiViewList>
                    </span>
                    <h4 className="text-xl font-medium font-serif text-gray-200">Doctors</h4>
                </div>

                {

                }

                {
                    isLoading ? <ClientLoading /> : isError ? <ClientError /> :
                        <div>
                            <div className="text-right my-3">
                                <select className="px-3 py-1 rounded-md text-white outline-0 bg-[#262522]">
                                    <option value="all">All</option>
                                    <option value="pending">Pending</option>
                                    <option value="complete">Complete</option>
                                    <option value="cencel">Cencel</option>
                                </select>
                            </div>
                            {doctors && doctors?.length <= 0 ? <EmptyData /> :
                                <div>
                                    <div className="overflow-x-auto bg-[#262522] table-scroll">
                                        <table className="table">
                                            {/* head */}
                                            <thead>
                                                <tr className="border-[#494846] text-gray-200">
                                                    <th>Photo</th>
                                                    <th>Name</th>
                                                    <th>Title</th>
                                                    <th>Location</th>
                                                    <th>Contact</th>
                                                    <th>Availabe</th>
                                                    <th>Educatiion</th>
                                                    <th>Certificate</th>
                                                    <th>Service</th>

                                                    {/* <th>Delete</th> */}

                                                </tr>
                                            </thead>
                                            <tbody className="text-gray-300">

                                                {
                                                    doctors?.map((doctor) => {
                                                        return <tr key={doctor?._id} className="border-[#494846]">

                                                            <td>
                                                                <Link href={`/doctor/${doctor?._id}`}>
                                                                    <div className="flex items-center gap-3">
                                                                        <div className="avatar">
                                                                            <div className="w-12 h-12">

                                                                                <Image height={200} width={200} className="h-12 rounded-md w-auto" src={doctor?.photo !== '' ? `${doctor?.photo}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUDOlaA7x6auc_yDvEigMgyktyrJBM34AFOaauo6-qXD5zg_vpZlZk9offXf9PMLdA0Lw&usqp=CAU"} alt="img" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </td>

                                                            <td className="min-w-32">
                                                                <Link href={`/doctor/${doctor?._id}`}>{doctor?.name}</Link>
                                                            </td>
                                                            <td>
                                                                {doctor?.title}
                                                            </td>
                                                            <td>
                                                                {doctor?.location}
                                                            </td>
                                                            <td className="min-w-32">
                                                                {doctor?.contact}
                                                            </td>
                                                            <td>
                                                                <ul className="mt-8 space-y-3 font-medium min-w-32">
                                                                    {
                                                                        doctor?.isActive ? doctor?.available?.map((day) => {

                                                                            return <li key={day._id} className="flex items-start lg:col-span-1">
                                                                                <div className="flex-shrink-0">
                                                                                    <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                                                                                        <path fillRule="evenodd"
                                                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                                                            clip-rule="evenodd"></path>
                                                                                    </svg>
                                                                                </div>

                                                                                <div className="ml-3 leading-5">
                                                                                    <h6 className="inline mr-1">{day?.day}</h6>
                                                                                    <p>{day?.time}</p>
                                                                                </div>
                                                                            </li>
                                                                        }) : <p className="text-sm text-red-400">Doctor not avaiable</p>
                                                                    }
                                                                </ul>
                                                            </td>
                                                            <td className="min-w-72">
                                                                {
                                                                    doctor?.education?.map((edu) => {
                                                                        return <div key={edu._id}>
                                                                            <div
                                                                                className="flex border border-gray-700 items-center rounded-md cursor-pointer transition duration-500 shadow-sm min-w-52 pl-1">
                                                                                <div className="shrink-0">
                                                                                    <PiStudentDuotone className="text-teal-500 text-2xl" />
                                                                                </div>
                                                                                <div className="p-2">
                                                                                    <p className="font-semibold text-sm">{edu?.degre}</p>
                                                                                    <span className="text-gray-400 text-xs">{edu?.institute_name}</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    })
                                                                }
                                                            </td>

                                                            <td>
                                                                <div className="grid grid-cols-2 items-center gap-x-1 min-w-28">
                                                                    {
                                                                        doctor?.certificate?.map((certi) => {
                                                                            return (
                                                                                <div key={certi} className="flex items-center gap-3">
                                                                                    <div className="avatar">
                                                                                        <div className="w-12 h-12">
                                                                                            <Image height={200} width={200} className="h-12 rounded-md w-auto" src={certi} alt="img" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            )
                                                                        })
                                                                    }
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="flex flex-row gap-1 min-w-40 flex-wrap">
                                                                    {
                                                                        doctor?.services?.map((service, indx) => {
                                                                            return <p key={service + indx} className="p-1.5 bg-white/5 border border-gray-800 text-gray-200 rounded-full text-xs">{service}</p>
                                                                        })
                                                                    }
                                                                </div>
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
        </div>
    );
};

export default AdminDoctors;