'use client'

import ChartAdmin from "@/components/Ui/ChartAdmin/ChartAdmin";
import ClientError from "@/components/Ui/ClientError/ClientError";
import ClientLoading from "@/components/Ui/ClientLoading/ClientLoading";
import { useAdminDashboardDataQuery } from "@/lib/features/Api/Api";
import { useSession } from "next-auth/react";
import { useState } from "react";
import CountUp from 'react-countup';
import { CiViewList } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { MdOutlineFiberSmartRecord, MdProductionQuantityLimits } from "react-icons/md";

const AdminHome = () => {
    const { data } = useSession();
    const [prevDays, setPrevDays] = useState<number>(7);
    const { isLoading, isError, data: dashboardata, } = useAdminDashboardDataQuery({ email: data?.user?.email || '', prevdays: prevDays });

    const changePrevDays = (e : React.ChangeEvent<HTMLSelectElement>) => {
        setPrevDays(parseInt(e.target.value));
    }

    return (
        <div>
            {
                isLoading ? <ClientLoading /> : isError ? <ClientError /> :
                    <div className="p-4 md:pt-16 pt-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-0 md:gap-x-4 gap-y-8 lg:gap-y-14">


                            <div className="bg-[#1A1917] p-5 lg:p-7 flex flex-row justify-between items-center shadow-xl w-full rounded-xl h-28 lg:h-36 border-b-4 border-teal-500">
                                <div className='bg-teal-500 p-5 lg:p-8 rounded-md -mt-20 lg:-mt-24 shadow-2xl'>
                                    <FiUsers className='text-4xl lg:text-5xl text-white'></FiUsers>
                                </div>
                                <div>
                                    <h3 className='text-lg text-slate-200 font-medium'>Total Users</h3>
                                    <div className='flex flex-row gap-x-2 items-center'>
                                        <FiUsers className='text-lg text-gray-200'></FiUsers>
                                        <h4 className='text-2xl font-bold text-gray-200'>
                                            <CountUp delay={1} duration={6} end={dashboardata?.totalAppoinments || 0} enableScrollSpy={true} scrollSpyOnce={true} />

                                        </h4>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#1A1917] p-5 lg:p-7 flex flex-row justify-between items-center shadow-xl w-full rounded-xl h-28 lg:h-36 border-b-4 border-sky-500">
                                <div className='bg-sky-500 p-5 lg:p-8 rounded-md -mt-20 lg:-mt-24 shadow-2xl'>
                                    <MdOutlineFiberSmartRecord className='text-4xl lg:text-5xl text-white'></MdOutlineFiberSmartRecord>
                                </div>
                                <div>
                                    <h3 className='text-lg text-slate-200 font-medium'>Total test</h3>
                                    <div className='flex flex-row gap-x-2 items-center'>
                                        <MdOutlineFiberSmartRecord className='text-lg text-gray-200'></MdOutlineFiberSmartRecord>
                                        <div className='flex flex-row gap-x-2 items-center'>
                                            <h4 className='text-2xl font-bold text-gray-200'>
                                                {
                                                    <CountUp delay={1} duration={6} end={dashboardata?.totalTest || 0} enableScrollSpy={true} scrollSpyOnce={true} />
                                                }
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#1A1917] p-5 md:p-7 flex flex-row justify-between items-center shadow-xl w-full rounded-xl h-28 lg:h-36 border-b-4 border-indigo-800">
                                <div className='bg-indigo-800 p-5 lg:p-8 rounded-md -mt-20 lg:-mt-24 shadow-2xl'>
                                    <MdProductionQuantityLimits className='text-4xl lg:text-5xl text-white'></MdProductionQuantityLimits>
                                </div>
                                <div>
                                    <h3 className='text-lg text-slate-200 font-medium'>Total Booked</h3>
                                    <div className='flex flex-row gap-x-2 items-center'>
                                        <h4 className='text-2xl font-bold text-gray-200'>
                                            {
                                                <CountUp delay={1} duration={6} end={dashboardata?.totalAppoinments || 0} enableScrollSpy={true} scrollSpyOnce={true} />
                                            }
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            dashboardata?.chart && <div>
                                <div className="bg-[#262522] rounded-md p-2 mt-7 flex gap-x-3 items-center justify-between">
                                    <div className="flex flex-row gap-x-3 items-center">
                                        <span className="p-2 bg-gradient-to-r from-[#14022b] to-[#1c043d] inline-block rounded-sm">
                                            <CiViewList className="text-xl text-white "></CiViewList>
                                        </span>
                                        <h4 className="text-sm md:text-lg lg:text-xl font-medium font-serif text-gray-200">Resurvation History of previous some days.</h4>
                                    </div>
                                    <div className="text-right my-3">
                                        <select onChange={changePrevDays} className="px-3 py-1 rounded-md text-white outline-0 bg-[#141412]">
                                            <option value="7">7 Days</option>
                                            <option value="10">10 days</option>
                                            <option value="20">20 days</option>
                                            <option value="30">30 Days</option>
                                        </select>
                                    </div>
                                </div>


                                <div className={`bg-[#262522] p-4 shadow-2xl my-3 lg:my-5 rounded-2xl mx-auto`}>
                                    <ChartAdmin data={dashboardata?.chart} />
                                </div>
                            </div>
                        }
                    </div>
            }
        </div>
    );
};

export default AdminHome;