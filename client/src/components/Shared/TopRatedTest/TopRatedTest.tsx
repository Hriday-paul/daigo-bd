import UseGEtAllTest from "@/components/Utils/UseGEtAllTest";
import TestCard from "../TestCard/TestCard";
import { testType } from "@/app/(withHeader)/tests/page";
import UseGetPopularTest from "@/components/Utils/UseGetPopularTest";


const TopRatedTest = async() => {
    const tests : testType[] = await UseGetPopularTest();
    return (
        <div className="bg-[#070806] pt-10 pb-20">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-10">
                <div>
                    <div data-aos="fade-up" data-aos-duration="1500" className="flex flex-col justify-center mx-auto items-center my-10 md:my-12 lg:my-16">
                        <span className="text-xs text-teal-500 px-2 py-1 bg-white/15 rounded-full font-medium">* Top Test</span>
                        <h2 className="flex-none block mx-2 px-4 py-2.5 text-3xl md:text-4xl lg:text-5xl leading-none text-white font-bold font-unbounded text-center mt-0">
                            Our Popular Booking <br /> Appoinment
                        </h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 md:gap-x-8 mx-auto">
                    {
                        tests?.map((test)=>{
                            return <TestCard test={test} key={test._id}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default TopRatedTest;