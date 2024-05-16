import ServiceCard from "@/components/Ui/ServiceCard/ServiceCard";
import Image from "next/image";


const HomeServices = () => {
    return (
        <div className="bg-[url('https://clinika.modeltheme.com/wp-content/uploads/2020/09/Clinika-Service_bg-scaled.jpg?id=21458')] bg-cover bg-center pt-14 pb-20">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-10">
                <div>
                    <div className="flex flex-row flex-nowrap justify-center mx-auto items-center my-8 w-1/3">
                        <span className="flex-grow block border-t-2 border-teal-600 w-10"></span>
                        <h2 className="flex-none block mx-2 px-4 py-2.5 text-4xl leading-none uppercase text-white font-bold">
                            Our services
                        </h2>
                        <span className="flex-grow block border-t-2 border-teal-600 w-10" aria-hidden="true" role="presentation"></span>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-5">
                    <div>
                        <ServiceCard title='Blood Tests' details='Bring to the table win-win survival strategies to ...'>
                            <Image fill={true} className="hover:scale-110 duration-200" src="https://clinika.modeltheme.com/wp-content/uploads/2020/05/clinika_medical-500x500.png" alt="blood avatar" />
                        </ServiceCard>
                    </div>
                    <ServiceCard title='Teeth Whitening' details='Capitalize on low hanging fruit to identify a ...'>
                        <Image fill={true} className="hover:scale-110 duration-200" src="https://clinika.modeltheme.com/wp-content/uploads/2020/05/Teeth-Whitening-500x500.png" alt="blood avatar" />
                    </ServiceCard>
                    <ServiceCard title='STD Examination' details='Taking seamless key indicators to the long tail. ...'>
                        <Image fill={true} className="hover:scale-110 duration-200" src="https://clinika.modeltheme.com/wp-content/uploads/2020/05/STD_Examination-500x500.png" alt="blood avatar" />
                    </ServiceCard>
                </div>
            </div>
        </div>
    );
};

export default HomeServices;