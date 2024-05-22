import Image from "next/image";
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import BreadCrumb, { breadcrumbType } from "@/components/Ui/BreadCrumb/BreadCrumb";


const PageTopUi = ({ children, breadCrumbItems }: { children: React.ReactNode, breadCrumbItems: breadcrumbType[] }) => {
    return (
        <div>
            <div className="relative">
                <Image className="w-full h-[27vh] md:h-[40vh] lg:h-[60vh] brightness-50" src={`https://res.cloudinary.com/devlj6p7h/image/upload/v1710565625/test/qqwid0ueckoamuakbhag.jpg`} height={200} width={500} alt="banner image" />
                <span className="absolute bottom-0 left-0 h-[calc(40vh-150px)] md:h-[calc(55vh-140px)] lg:h-[calc(60vh-152px)] w-full flex justify-center items-center flex-col gap-y-0 md:gap-y-3 lg:gap-y-4">
                    <h2 className="text-center text-white text-2xl md:text-3xl lg:text-5xl font-medium font-sans uppercase">{children}</h2>
                    <BreadCrumb breadCrumbItems={breadCrumbItems}/>
                </span>
            </div>
        </div>
    );
};

export default PageTopUi;