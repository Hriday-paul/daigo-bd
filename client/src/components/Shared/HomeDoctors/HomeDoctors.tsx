import DoctorCard from "@/components/Shared/DoctorCard/DoctorCard";
import UsegetActiveDoctors from "@/components/Utils/UsegetActiveDoctors";
import Link from "next/link";
import { FaUserDoctor } from "react-icons/fa6";

export interface doctor {
    name: string,
    email: string,
    title: string,
    location: string,
    contact: string,
    social: any[],
    details: string,
    services: string[]
    certificate: string[],
    available: { _id: string; day: string, time: string }[],
    isActive: boolean,
    education: { _id : string, degre: string, institute_name: string, location: string, subject: string }[],
    photo: string,
    _id: string
}

const HomeDoctors = async () => {
    const doctors: doctor[] = await UsegetActiveDoctors();
    return (
        <div className="bg-[#070806] pt-8 pb-20">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-10">
                <div data-aos="fade-right" data-aos-duration="1200">
                    <div className="py-10 md:py-12 lg:py-16">

                        <div className="flex flex-row flex-nowrap items-center flex-none w-4/5 md:w-1/2">
                            <h2 className="text-left py-2.5 text-3xl md:text-4xl lg:text-5xl leading-none text-white font-bold font-unbounded mt-0 mr-5">
                                Our Best Doctors
                            </h2>
                            <span className="flex-grow mt-1 block border-t border-teal-500 w-5" aria-hidden="true"></span>
                        </div>
                        <p className="text-white">The Backbone of our Clinic</p>

                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 lg:gap-y-0 lg:gap-x-10">
                    <div data-aos="fade-up" data-aos-duration="1500" className="col-span-2 grid cols-1 md:grid-cols-3 gap-8">
                        {
                            doctors?.map((doctor) => {
                                return <DoctorCard key={doctor._id} title={doctor.title} image={doctor.photo} name={doctor.name} id={doctor._id} />
                            })
                        }

                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="1500" className="col-span-1 flex flex-col gap-y-5 lg:gap-y-0">
                        <div className="flex flex-row flex-nowrap items-center flex-none">
                            <h3 className="text-xl text-white font-unbounded font-medium mr-5">MODERN EQUIPMENT</h3>
                            <span className="flex-grow block border-t border-gray-300 w-14" aria-hidden="true" role="presentation"></span>
                        </div>
                        <div className="grow flex align-baseline items-center ">
                            <p className="text-gray-200 text-base text-justify">Personalized patient care is what sets Medicus Medical Center apart. When you visit one of our four San Francisco campus locations you can expect to receive world class care. Expert physician specialists and caring clinical staff provide you with an exceptional patient care is what sets Medicus Medical Center apart health care experience.</p>
                        </div>
                        <Link href='/doctors' className="inline-flex items-center h-10 overflow-hidden text-white bg-teal-500 rounded w-full flex-none">
                            <span
                                className="inline-flex items-center justify-center w-10 h-10 bg-teal-700 transition-color hover:bg-teal-800 focus:outline-none focus:ring"
                            >
                                <FaUserDoctor className="text-xl" />
                            </span>
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