import Image from "next/image";


const ServiceCard = ({title, details, children}: {title : string; details : string; children : React.ReactNode}) => {
    return (
        <div>
            <div className="px-6 py-8 text-center bg-white rounded-lg lg:mt-0 xl:px-10">
                <div className="space-y-4 xl:space-y-6 flex flex-row lg:flex-col items-center">
                    <div className="mx-auto rounded-full h-20 lg:h-24 w-20 lg:w-24 relative order-2 lg:order-1">
                        {children}
                    </div>
                    <div className="space-y-2 order-1 lg:order-2 mr-5 lg:mr-0">
                        <div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
                            <h3 className="text-black text-xl font-bold">{title}</h3>
                            <p className="text-gray-700 text-base">{details}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;