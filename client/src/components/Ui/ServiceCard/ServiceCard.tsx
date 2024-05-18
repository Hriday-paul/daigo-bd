import Image from "next/image";


const ServiceCard = ({title, details, children}: {title : string; details : string; children : React.ReactNode}) => {
    return (
        <div>
            <div className="px-6 py-8 text-center bg-transparent border border-gray-800 rounded-2xl lg:mt-0 xl:px-10">
                <div className="space-y-4 xl:space-y-6 flex flex-col items-center">
                    {children}
                    <div className="space-y-2 order-1 lg:order-2 mr-5 lg:mr-0">
                        <div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
                            <h3 className="text-white text-xl font-bold">{title}</h3>
                            <p className="text-gray-200 text-base">{details}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;