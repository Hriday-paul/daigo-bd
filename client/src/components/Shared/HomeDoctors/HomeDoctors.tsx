import Image from "next/image";


const HomeDoctors = () => {
    return (
        <div className="bg-[#1D232A]">
            <div className="max-w-7xl px-4 md:px-6 lg:px-12">
                <div className="relative h-96 w-80">
                    <Image fill={true} src='https://i.ibb.co/DGfkhG0/Clinika-member-4-removebg-preview.png' alt="doctor"></Image>
                </div>
            </div>
        </div>
    );
};

export default HomeDoctors;