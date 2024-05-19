'use client'

import { useUserDashboardDataQuery } from "@/lib/features/Api/Api";
import { useSession } from "next-auth/react";
import { MdOutlineFiberSmartRecord, MdProductionQuantityLimits } from "react-icons/md";
import CountUp from 'react-countup';

const UserHome = () => {
    const { data: sessionData, status } = useSession();
    const userEmail = sessionData?.user?.email || '';

    const { data: dashboardData, isLoading, isError } = useUserDashboardDataQuery({ email: userEmail });

    return (
        <div className="p-4 md:pt-16 pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-0 md:gap-x-4 gap-y-8 lg:gap-y-14 mx-auto">


                <div className="bg-[#1A1917] p-5 lg:p-7 flex flex-row justify-between items-center shadow-xl w-full rounded-xl h-28 lg:h-36 border-b-4 border-sky-500 mx-auto">
                    <div className='bg-sky-500 p-5 lg:p-8 rounded-md -mt-20 lg:-mt-24 shadow-lg'>
                        <MdOutlineFiberSmartRecord className='text-4xl lg:text-5xl text-white'></MdOutlineFiberSmartRecord>
                    </div>
                    <div>
                        <h3 className='text-lg text-slate-200 font-medium'>Total Result</h3>
                        <div className='flex flex-row gap-x-2 items-center'>
                            <MdOutlineFiberSmartRecord className='text-lg text-white'></MdOutlineFiberSmartRecord>
                            <div className='flex flex-row gap-x-2 items-center'>
                                <h4 className='text-2xl font-bold text-gray-200'>
                                    {
                                        <CountUp delay={1} duration={6} end={dashboardData?.reserveResult || 4} enableScrollSpy={true} scrollSpyOnce={true} />
                                    }
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#1A1917] p-5 md:p-7 flex flex-row justify-between items-center shadow-xl w-full rounded-xl h-28 lg:h-36 border-b-4 border-indigo-800 mx-auto">
                    <div className='bg-indigo-800 p-5 lg:p-8 rounded-md -mt-20 lg:-mt-24 shadow-lg'>
                        <MdProductionQuantityLimits className='text-4xl lg:text-5xl text-white'></MdProductionQuantityLimits>
                    </div>
                    <div>
                        <h3 className='text-lg text-slate-200 font-medium'>Total Reservation</h3>
                        <div className='flex flex-row gap-x-2 items-center'>
                            <h4 className='text-2xl font-bold text-gray-200'>
                                {
                                    <CountUp delay={1} duration={6} end={dashboardData?.totalAppoinments || 5} enableScrollSpy={true} scrollSpyOnce={true} />
                                }
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className={`bg-white p-4 shadow-2xl my-5 lg:my-8 rounded-2xl mx-auto`}>
                <DataChart></DataChart>
            </div> */}
        </div>
    );
};

export default UserHome;