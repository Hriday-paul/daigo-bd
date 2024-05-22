import Image from "next/image";
import Link from "next/link";
import { TbCalendarUser } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";


const cardDoctor =  ({ image, title, name, id, services, location }: { image: string, title: string, name: string, id: string, services: string[], location: string }) => {
    const top_serverice = services.slice(0, 2);
    return (
        <div data-aos="fade-up" data-aos-duration="1500" className="border border-gray-800 group bg-[#0C0D0B] lg:w-1/4 md:w-1/3 w-full">
            <Link href={`/doctors/${id}`} className="relative ">
                <Image src={image} height={200} width={200} className="h-72 md:h-44 xl:h-48 w-full mb-3 group-hover:brightness-75" alt="doctor-photo" />
            </Link>
            <div className="p-5 pb-0 flex flex-col justify-center relative">
                <div className="relative mb-7">
                    <div className="mb-4 flex flex-row items-center gap-1 flex-wrap">
                        {
                            top_serverice?.map((service, indx) => {
                                return <h2 key={service + indx} className="text-xs text-white font-normal border border-teal-200 p-1.5 inline rounded-md">{service}</h2>
                            })
                        }
                    </div>

                    <Link href={`/doctors/${id}`} className="text-lg text-gray-300 font-unbounded font-bold hover:text-teal-500 line-clamp-1 flex-shrink">{name}</Link>

                    <div className="flex flex-row gap-x-2 items-center mt-2">
                        <TbCalendarUser className="text-lg text-teal-500 -mt-1" />
                        <h4 className="text-sm text-gray-300 font-normal mb-1">{title}</h4>
                    </div>
                    <div className="flex flex-row gap-x-2 items-center mt-1">
                        <IoLocationOutline className="text-lg text-teal-500 -mt-1" />
                        <h4 className="text-sm text-gray-300  font-normal mb-1">{location}</h4>
                    </div>
                </div>

                <div className="mx-auto absolute bottom-0 left-0 w-full flex justify-center">
                    <Link href={`/doctors/${id}`} className="px-8 py-[1px] h-0 overflow-hidden bg-teal-500 text-white text-xs duration-100 ease-linear bottom-0 group-hover:py-1 group-hover:h-full ">More</Link>
                </div>
            </div>
        </div>
    );
};

export default cardDoctor;