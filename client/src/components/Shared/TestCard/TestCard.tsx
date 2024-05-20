import { testType } from "@/app/(withHeader)/tests/page";
import Image from "next/image";
import Link from "next/link";
import { GrLinkNext } from "react-icons/gr";


const TestCard = ({test} : {test : testType}) => {
    return (
        <div data-aos="fade-up" data-aos-duration="1500">
            <div className="bg-[#0C0D0B] flex flex-col rounded-lg w-full border border-gray-700 p-7">
                
                <Image src={test?.photo} alt="test image" height={200} width={200} className="min-h-52 w-full h-56"></Image>
                <div className="pt-5 space-y-2 md:space-y-3 flex flex-col ">
                    <span >
                        <h3 className="text-gray-100 text-2xl lg:text-3xl font-sansline-clamp-1 font-unbounded font-medium">{test?.name}</h3>
                    </span>

                    <p className="text-gray-300 text-sm lg:text-base line-clamp-4 flex-shrink ">{test?.details}</p>

                    <div className="flex justify-between">
                        <Link href={`/tests/${test._id}`} className="flex flex-row items-center gap-x-1 group">
                            <h4 className="text-teal-500 text-base  inline">Read More</h4>
                            <GrLinkNext className="text-teal-500 text-lg group-hover:translate-x-2 duration-150 cursor-pointer " />
                        </Link>

                        <p className="text-right text-gray-300">{new Date(test?.testDate).getDate() + '-' + (new Date(test?.testDate).getMonth() + 1) + '-' + new Date(test?.testDate).getFullYear()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestCard;