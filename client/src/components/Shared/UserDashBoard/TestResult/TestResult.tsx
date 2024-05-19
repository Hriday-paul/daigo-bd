'use client'

import ClientError from "@/components/Ui/ClientError/ClientError";
import ClientLoading from "@/components/Ui/ClientLoading/ClientLoading";
import DownLoadFile from "@/components/Ui/DownLoadFile/DownLoadFile";
import { useGetTestResultQuery } from "@/lib/features/Api/Api";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { CiViewList } from "react-icons/ci";


const TestResult = () => {
    const { data: sessionData } = useSession();
    const userEmail = sessionData?.user?.email || '';
    const { data, isLoading, isError } = useGetTestResultQuery({ email: userEmail });

    console.log(data, isError, isLoading);

    return (
        <div>
            <div className="bg-[#262522] rounded-md p-2 mb-5 flex gap-x-3 items-center">
                <span className="p-2 bg-gradient-to-r from-[#14022b] to-[#1c043d] inline-block rounded-sm">
                    <CiViewList className="text-xl text-white "></CiViewList>
                </span>
                <h4 className="text-xl font-medium font-serif text-white">Test Result</h4>
            </div>
            {
                isLoading ? <ClientLoading /> : isError ? <ClientError /> :
                    <div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-5 gap-y-5">
                            {
                                data?.map((appoinment) => {
                                    return <div key={appoinment._id} className="rounded-md">
                                        <div>
                                            <Image className="rounded-t-md w-full h-auto" src={appoinment?.testDetails[0]?.photo} height={200} width={200} alt="photo" />
                                        </div>
                                        <div className="p-5 bg-[#346E6E] rounded-b-md space-y-1">

                                            <h2 className="text-white text-2xl font-sans font-bold">{appoinment?.testDetails[0]?.name}</h2>
                                            <div className="flex justify-between items-center">
                                                <h2 className="text-gray-100 text-xl">{appoinment?.name}</h2>
                                                
                                                <DownLoadFile url={appoinment?.reportFile || ''} />

                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
            }
        </div>
    );
};

export default TestResult;