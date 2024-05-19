import Image from "next/image";
import { AiTwotoneExperiment } from "react-icons/ai";
import { BsHourglassBottom } from "react-icons/bs";

const Dedication = () => {
    return (
        <div className="bg-[#070806] px-4 lg:px-8 xl:px-10 pt-20 pb-10 lg:pt-24 lg:pb-12 xl:pt-32 xl:pb-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-8 lg:gap-y-0">
                    <div data-aos="fade-right" data-aos-duration='1500' className="col-span-2 order-2 lg:order-1">
                        <div className="relative h-96 w-full md:w-80 lg:h-full lg:w-auto mx-auto">
                            <Image fill={true} src='https://cliniq.bold-themes.com/futuristic/wp-content/uploads/sites/5/2021/10/inner_image_home_03-01.png' alt="image"></Image>
                        </div>
                    </div>
                    <div className="col-span-3 pt-8 md:p-8 lg:p-10 xl:p-20 order-1 lg:order-2">
                        <div data-aos='zoom-in-left' data-aos-duration='1000'>
                            <h3  className="text-teal-500 font-medium text-base font-unbounded">Top-ranked team of medical specialist</h3>
                            <h2 data-aos-duration='1000' className="text-xl lg:text-xl xl:text-2xl text-white font-bold font-unbounded mt-2 lg:mt-0">We are dedicated to providing the highest level of medicine along with friendly, compassionate service.</h2>
                        </div>

                        <div data-aos='fade-up' data-aos-duration='1500' className="mt-8 flex flex-col md:flex-row gap-5 lg:mt-5">
                            <div className="p-8 lg:p-5 xl:p-8 bg-[#131412] w-full md:w-1/2 rounded-lg shadow-lg">
                                <AiTwotoneExperiment className="text-7xl lg:text-5xl xl:text-7xl text-teal-500 my-2 lg:my-3" />
                                <h3 className="text-white text-2xl font-bold mb-3 xl:mb-5 font-unbounded">Experience</h3>
                                <p className="text-white text-sm ">A community in which our vision is to all people achieve their full potential for health and well-being across complexity the lifespan.</p>
                            </div>

                            <div className="p-8 lg:p-5 xl:p-8 bg-[#131412] w-full md:w-1/2 rounded-lg shadow-lg">
                                <BsHourglassBottom className="text-7xl lg:text-5xl xl:text-7xl text-teal-500 my-2 lg:my-3" />
                                <h3 className="text-white text-2xl font-bold font-unbounded mb-3 xl:mb-5">Dedication</h3>
                                <p className="text-white text-sm ">We care for the whole person, see the complexity of each person’s life, and believe that addressing a broad range of needs is the best.</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dedication;