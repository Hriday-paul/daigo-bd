import Image from "next/image";
import Link from "next/link";


const DoctorCard = () => {
    return (
        <div className="border border-gray-800 group bg-[#0C0D0B]">
            <div className="relative ">
                <Image src="https://demo2.themewarrior.com/hospitalplus/wp-content/uploads/sites/22/2016/04/veronica-400x400.jpg" height={200} width={200} className="h-auto md:h-44 w-full mb-3 group-hover:brightness-75" alt="doctor-photo" />
            </div>
            <div className="p-5 pb-0 flex flex-col justify-center relative">
                <div className="relative mb-7">
                    <h2 className="text-xl text-white font-unbounded font-bold text-center">Surgery</h2>
                    <h4 className="text-base text-gray-300 font-unbounded font-normal text-center mb-1">Dr. John Manios</h4>
                </div>

                <div className="mx-auto absolute bottom-0 left-0 w-full flex justify-center">
                    <Link href='/' className="px-8 py-[1px] h-0 overflow-hidden bg-teal-500 text-white text-xs duration-100 ease-linear bottom-0 group-hover:py-1 group-hover:h-full ">More</Link>
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;