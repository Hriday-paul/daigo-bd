import Image from "next/image";
import { AiTwotoneExperiment } from "react-icons/ai";
import { BsHourglassBottom } from "react-icons/bs";

const Dedication = () => {
    return (
        <div className="bg-[#1E5E5E] px-0 lg:px-10 xl:px-16 py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                    <div className="col-span-2">
                        <div className="relative h-96 w-full md:w-80 lg:h-full lg:w-auto mx-auto">
                            <Image fill={true} src='https://cliniq.bold-themes.com/futuristic/wp-content/uploads/sites/5/2021/10/inner_image_home_03-01.png' alt="image"></Image>
                        </div>
                    </div>
                    <div className="col-span-3 p-5 md:p-8 lg:p-10 xl:p-20">
                        <h3 className="text-sky-500 font-medium text-base">Top-ranked team of medical specialist</h3>
                        <h2 className="text-3xl lg:text-2xl xl:text-3xl text-white font-bold">We are dedicated to providing the highest level of medicine along with friendly, compassionate service.</h2>

                        <div className="mt-5 flex flex-col md:flex-row gap-5">
                            <div className="p-8 lg:p-5 xl:p-8 bg-white/30 w-full md:w-1/2 rounded-lg shadow-lg">
                                <AiTwotoneExperiment className="text-7xl lg:text-5xl xl:text-7xl text-sky-500 my-1 md:my-3 xl:my-5" />
                                <h3 className="text-white text-2xl font-bold font-sans mb-3 xl:mb-5">Experience</h3>
                                <p className="text-white text-sm font-sans">A community in which our vision is to all people achieve their full potential for health and well-being across complexity the lifespan.</p>
                            </div>
                            
                            <div className="p-8 lg:p-5 xl:p-8 bg-white/30 w-full md:w-1/2 rounded-lg shadow-lg">
                                <BsHourglassBottom className="text-7xl lg:text-5xl xl:text-7xl text-sky-500 my-1 md:my-3 xl:my-5" />
                                <h3 className="text-white text-2xl font-bold font-sans mb-3 xl:mb-5">Experience</h3>
                                <p className="text-white text-sm font-sans">We care for the whole person, see the complexity of each person’s life, and believe that addressing a broad range of needs is the best.</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dedication;