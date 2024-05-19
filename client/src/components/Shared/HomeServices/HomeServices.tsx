import ServiceCard from "@/components/Ui/ServiceCard/ServiceCard";
import Image from "next/image";
import { MdOutlineBloodtype } from "react-icons/md";
import { TbDental } from "react-icons/tb";
import { GiKneeCap } from "react-icons/gi";

const HomeServices = () => {
    return (
        // <div className="bg-[url('https://clinika.modeltheme.com/wp-content/uploads/2020/09/Clinika-Service_bg-scaled.jpg?id=21458')] bg-cover bg-center pt-14 pb-20">
        <div className="bg-[#070806] pt-10 pb-20">
            <div  className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-10">
                <div>
                    <div data-aos="fade-up" data-aos-duration="1500" className="flex flex-col justify-center mx-auto items-center my-10 md:my-12 lg:my-16">
                        <span className="text-xs text-teal-500 px-2 py-1 bg-white/15 rounded-full font-medium">why choose us</span>
                        <h2 className="flex-none block mx-2 px-4 py-2.5 text-3xl md:text-4xl lg:text-5xl leading-none text-white font-bold font-unbounded text-center mt-0">
                            Why we are your best <br /> choice
                        </h2>

                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1500" className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <div>
                        <ServiceCard title='Blood Tests' details="We test the patient's blood with modern and new equipment.">
                            <div>
                                <MdOutlineBloodtype className="text-teal-500 text-7xl p-3 rounded-3xl border border-teal-500" />
                            </div>
                        </ServiceCard>
                    </div>
                    <ServiceCard title='Teeth Whitening' details='We provide dental treatment to patients by skilled doctors.'>
                        <div>
                            <TbDental className="text-teal-500 text-7xl p-3 rounded-3xl border border-teal-500" />
                        </div>
                    </ServiceCard>
                    <ServiceCard title='Cripple treatment' details='We treat disabled patients with modern equipment and skilled doctors.'>
                        <div>
                            <GiKneeCap className="text-teal-500 text-7xl p-3 rounded-3xl border border-teal-500" />
                        </div>
                    </ServiceCard>
                </div>
            </div>
        </div>
    );
};

export default HomeServices;