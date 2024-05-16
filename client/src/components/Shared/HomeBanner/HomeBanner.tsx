import Link from "next/link";
import { SiTicktick } from "react-icons/si";

const HomeBanner = () => {
    return (
        <div className="bg-[url('https://cliniq.bold-themes.com/futuristic/wp-content/uploads/sites/5/2021/10/background_home_04-02.jpg')] bg-cover bg-center py-10 flex items-center">
            <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20">
                <div className="md:w-3/5 lg:w-1/2 py-10">
                    <span className="text-base md:text-lg text-gray-800 font-bold">Medical Equipment</span>
                    <h2 className="text-white text-3xl md:text-4xl lg:text-6xl font-bold">Knee Replacement Implants</h2>
                    <p className="text-white test-sm font-medium my-5 lg:my-8">Knee replacement, or knee arthroplasty, treats damaged knee joints with metal or plastic implants. It’s a common procedure that’s very effective at reducing pain and stiffness from injury or arthritis.</p>

                    <ul className="flex flex-col gap-y-2 mb-5 lg:mb-8">
                        <li className="flex flex-row gap-x-2 items-center">
                            <SiTicktick className="text-white text-lg" />
                            <p className="text-white text-base font-bold">Pain Relief</p>
                        </li>
                        <li className="flex flex-row gap-x-2 items-center">
                            <SiTicktick className="text-white text-lg" />
                            <p className="text-white text-base font-bold">Improved mobility</p>
                        </li>
                        <li className="flex flex-row gap-x-2 items-center">
                            <SiTicktick className="text-white text-lg" />
                            <p className="text-white text-base font-bold">High success and satisfaction rates</p>
                        </li>
                    </ul>

                    <Link href='/allTest' className="group relative inline-flex border border-[#198D8D] focus:outline-none">
                        <span className="w-full inline-flex items-center justify-center self-stretch px-8 py-4 text-sm text-white text-center font-bold uppercase bg-[#198D8D] ring-1 ring-[#198D8D] ring-offset-1 ring-offset-[#198D8D] transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1">
                            Get Started
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;