import DoctorCard from "@/components/Ui/DoctorCard/DoctorCard";
import Link from "next/link";
import { FaUserDoctor } from "react-icons/fa6";

const HomeDoctors = () => {
    return (
        <div className="bg-[#070806] pt-5 pb-20">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-10">
                <div>
                    <div className="py-10 md:py-12 lg:py-16">
                        {/* <h2 className="text-left py-2.5 text-3xl md:text-4xl lg:text-5xl leading-none text-white font-bold font-unbounded mt-0">
                            Our Best Doctors
                        </h2>
                        <span className="flex-grow block border-t border-gray-300 w-14" aria-hidden="true" role="presentation"></span> */}
                        <div className="flex flex-row flex-nowrap items-center flex-none w-4/5 md:w-1/2">
                            <h2 className="text-left py-2.5 text-3xl md:text-4xl lg:text-5xl leading-none text-white font-bold font-unbounded mt-0 mr-5">
                                Our Best Doctors
                            </h2>
                            <span className="flex-grow mt-1 block border-t border-teal-500 w-5" aria-hidden="true"></span>
                        </div>
                        <p className="text-white">The Backbone of our Clinic</p>

                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="col-span-2 grid cols-1 md:grid-cols-3 gap-8">
                        <DoctorCard />
                        <DoctorCard />
                        <DoctorCard />
                    </div>
                    <div className="col-span-1 flex flex-col gap-y-5 lg:gap-y-0">
                        <div className="flex flex-row flex-nowrap items-center flex-none">
                            <h3 className="text-xl text-white font-unbounded font-medium mr-5">MODERN EQUIPMENT</h3>
                            <span className="flex-grow block border-t border-gray-300 w-14" aria-hidden="true" role="presentation"></span>
                        </div>
                        <div className="grow flex align-baseline items-center ">
                            <p className="text-gray-200 font-unbounded text-base text-justify">Personalized patient care is what sets Medicus Medical Center apart. When you visit one of our four San Francisco campus locations you can expect to receive world class care. Expert physician specialists and caring clinical staff provide you with an exceptional patient care is what sets Medicus Medical Center apart health care experience.</p>
                        </div>
                        <Link href='/doctors' className="inline-flex items-center h-10 overflow-hidden text-white bg-teal-500 rounded w-full flex-none">
                            <button
                                className="inline-flex items-center justify-center w-10 h-10 bg-teal-700 transition-color hover:bg-teal-800 focus:outline-none focus:ring"
                                type="button"
                            >
                                <FaUserDoctor className="text-xl" />
                            </button>
                            <span className="px-5 py-1.5 text-[12px] font-medium text-center">
                                See All Doctors
                            </span>
                        </Link>
                    </div>
                </div>


            </div>
        </div >
    );
};

export default HomeDoctors;