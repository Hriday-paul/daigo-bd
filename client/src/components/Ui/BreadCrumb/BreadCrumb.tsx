import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa6";

export interface breadcrumbType { title: string; link: string, active?: boolean }


const BreadCrumb = ({ breadCrumbItems }: { breadCrumbItems: breadcrumbType[] }) => {
    return (
        <ol className="flex flex-row items-center">
            {
                breadCrumbItems?.map((item, indx) => {
                    return <li key={item?.link} className="text-white">
                        {
                            item?.active ? <h3 className="text-gray-300 text-sm md:text-lg">{item?.title}</h3> : <Link href={item?.link} className="text-white text-sm md:text-lg">{item?.title}</Link>
                        }
                        {
                            !(breadCrumbItems.length - 1 == indx) && <FaAngleLeft className="mx-1 inline text-sm md:text-lg" />
                        }
                    </li>
                })
            }
        </ol>
    );
};

export default BreadCrumb;