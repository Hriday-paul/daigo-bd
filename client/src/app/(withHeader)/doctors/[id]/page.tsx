
import PageTopUi from '@/components/Shared/PageTopUi/PageTopUi';
import { breadcrumbType } from '@/components/Ui/BreadCrumb/BreadCrumb';
import UseDoctorDetails from '@/components/Utils/UseDoctorDetails';
import Image from 'next/image';
import React from 'react';
import { FaRegListAlt } from "react-icons/fa";
import { MdAvTimer } from "react-icons/md";
import { MdOutlineSocialDistance } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { TbCalendarUser } from 'react-icons/tb';
import { IoLocationOutline } from 'react-icons/io5';
import { LuPhoneCall } from "react-icons/lu";
import Certificate from '@/components/Ui/Certificate/Certificate';
import { MdHistoryEdu } from "react-icons/md";
import { Metadata, ResolvingMetadata } from 'next';

const breadCrumbItems: breadcrumbType[] = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: "Doctors",
        link: '/doctors',
    },
    {
        title: "Details",
        link: '/',
        active: true
    },
]

export async function generateMetadata({ params }: { params: { id: string } }, parent: ResolvingMetadata
): Promise<Metadata> {
    const details = await UseDoctorDetails(params.id);
    return {
        title: details?.name,
        description: details?.details,
    }
}

const DoctorDetails = async ({ params }: { params: { id: string } }) => {
    const details = await UseDoctorDetails(params.id);

    return (
        <div className='bg-[#070806]'>
            <PageTopUi breadCrumbItems={breadCrumbItems}>
                {"Details"}
            </PageTopUi>
            <div className='max-w-6xl mx-auto px-4 py-10'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-0 lg:gap-x-8 gap-y-8 lg:gap-y-8'>
                    <div className='col-span-2'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-5 gap-y-5 md:gap-y-5' data-aos='fade-right' data-aos-duration='1500'>
                            <div className="rounded-sm col-span-2 md:col-span-1">
                                <Image src={details?.photo || ''} height={200} width={200} className='w-full h-full rounded-md' alt='test image'></Image>
                            </div>
                            <div className='p-3 col-span-2 md:col-span-1'>
                                <h2 className="text-sm text-gray-200 font-normal border border-gray-700 p-2 inline rounded-md">{details?.title}</h2>
                                <h3 className="text-2xl text-gray-300 font-unbounded font-bold hover:text-teal-500 duration-150 my-4">{details?.name}</h3>

                                <div className="flex flex-row gap-x-2 items-center mt-2">
                                    <TbCalendarUser className="text-lg text-teal-500 -mt-1" />
                                    <h4 className="text-base text-gray-300 font-normal mb-1">{details?.title}</h4>
                                </div>
                                <div className="flex flex-row gap-x-2 items-center mt-1 pb-5 border-b border-gray-700">
                                    <IoLocationOutline className="text-lg text-teal-500 -mt-1" />
                                    <h4 className="text-base text-gray-300  font-normal mb-1">{details?.location}</h4>
                                </div>

                                <div className='pt-5'>
                                    <div>
                                        <div className="flex flex-row gap-x-2 items-center mt-2">
                                            <LuPhoneCall className="text-4xl text-teal-500 " />
                                            <span className='flex flex-col'>
                                                <h6 className='text-gray-400 text-base font-medium'>Contact Now</h6>
                                                <h4 className="text-base font-unbounded text-gray-300 font-normal mb-1">{details?.contact}</h4>
                                            </span>
                                        </div>
                                    </div>

                                    <div className='flex flex-row items-center flex-wrap gap-3 mt-5'>

                                        <a href={details?.social[0].facebook} target='_blank'
                                            className="mb-2 inline-block rounded-full bg-white/10 hover:bg-white/15 duration-150 p-2 font-medium uppercase leading-normal text-white">
                                            <span className="">
                                                <FaFacebookF className='text-base' />
                                            </span>
                                        </a>
                                        <a href={details?.social[0].linkedin} target='_blank'
                                            className="mb-2 inline-block rounded-full bg-white/10 hover:bg-white/15 duration-150 p-2 font-medium uppercase leading-normal text-white">
                                            <span className="">
                                                <FaLinkedinIn className='text-base' />
                                            </span>
                                        </a>
                                        <a href={details?.social[0].instagram} target='_blank'
                                            className="mb-2 inline-block rounded-full bg-white/10 hover:bg-white/15 duration-150 p-2 text-xs font-medium uppercase leading-normal text-white">
                                            <span className="">
                                                <FaInstagram className='text-base' />
                                            </span>
                                        </a>
                                    </div>
                                    
                                </div>

                            </div>
                            <div className='col-span-2'>
                                <div className='flex items-center gap-x-2 my-5' data-aos="fade-right" data-aos-duration='1200'>
                                    <h4 className='text-teal-500 text-3xl font-unbounded inline-block '>About Me</h4>
                                    <span className="mt-1 block border-t border-teal-500 w-16" aria-hidden="true"></span>
                                </div>
                                <p data-aos="fade-up" data-aos-duration='1200' className='basis-full text-gray-300 text-base text-justify mb-10'>{details?.details}</p>

                                <div className='flex items-center gap-x-2 my-5' data-aos="fade-right" data-aos-duration='1200'>
                                    <h4 className='text-teal-500 text-3xl font-unbounded inline-block '>Education</h4>
                                    <span className="mt-1 block border-t border-teal-500 w-16" aria-hidden="true"></span>
                                </div>
                                <div className='grid grid-cols-2 justify-between items-center gap-y-8 mb-10'  >
                                    {
                                        details?.education?.map((edu) => {
                                            return <div key={edu._id} className='flex gap-x-3 flex-row items-center'>
                                                <div className='bg-teal-500 p-3 rounded-full'>
                                                    <MdHistoryEdu className='text-white text-2xl' />
                                                </div>
                                                <div>
                                                    <h5 className='text-gray-200 text-lg'>{edu.degre}</h5>
                                                    <h5 className='text-gray-400 text-base'>{edu.location}</h5>
                                                </div>
                                            </div>
                                        })
                                    }
                                </div>

                                {
                                    Array.isArray(details?.certificate) ? details?.certificate.length > 0 ? <div>
                                        <div className='flex items-center gap-x-2 my-5' data-aos="fade-right" data-aos-duration='1200'>
                                            <h4 className='text-teal-500 text-3xl font-unbounded inline-block '>Certificate</h4>
                                            <span className="mt-1 block border-t border-teal-500 w-16" aria-hidden="true"></span>
                                        </div>
                                        <div data-aos='fade-top' data-aos-duration='1500'>
                                            <div className='flex flex-col md:flex-row md:flex-wrap gap-3 justify-center'>
                                                {
                                                    details?.certificate?.map((certific, indx) => {
                                                        return <div key={certific + indx} className="rounded-sm h-full w-auto mx-auto md:mx-0">
                                                            {/* <Image src={certific} height={200} width={200} className='w-auto h-full' alt='certificate'></Image> */}
                                                            <Certificate img={certific} />
                                                        </div>
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div> : <></> : <></>
                                }
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1' data-aos="zoom-in-up" data-aos-duration='1200'>
                        <div className='p-5 bg-[#131412] border border-gray-800 mb-5'>
                            <span className='flex items-center flex-row gap-x-2 mb-5 border-b border-teal-500 pb-3'>
                                <FaRegListAlt className='text-lg text-teal-500' />
                                <h4 className='text-base text-gray-200 font-unbounded'>Service</h4>
                            </span>
                            <div className="mb-4 flex flex-row items-center gap-2 flex-wrap">
                                {
                                    details?.services?.map((service, indx) => {
                                        return <h2 key={service + indx} className="text-sm text-gray-200 font-normal border border-gray-700 p-2 inline rounded-md">{service}</h2>
                                    })
                                }
                            </div>
                            <span className='flex items-center flex-row gap-x-2 mb-5 border-b border-teal-500 pb-3'>
                                <MdAvTimer className='text-xl text-teal-500' />
                                <h4 className='text-base text-gray-200 font-unbounded'>Available</h4>
                            </span>
                            <ul className="mb-4 flex flex-col gap-2">
                                {
                                    details?.available?.map((avail, indx) => {
                                        return <ol key={avail._id} className="my-1 flex flex-row gap-x-2 items-center">
                                            <h5 className='text-sm text-gray-200 font-normal border border-gray-700 p-2 inline rounded-md'>{avail.day}</h5>
                                            <span className="mt-1 block border-t border-teal-500 w-5" aria-hidden="true"></span>
                                            <p className='text-sm text-gray-200'>{avail.time}</p>
                                        </ol>
                                    })
                                }
                            </ul>
                            <div>

                            </div>
                        </div>
                        <div className='p-5 bg-[#131412] border border-gray-800'>
                            <span className='flex items-center flex-row gap-x-2 mb-5 border-b border-teal-500 pb-3'>
                                <MdOutlineSocialDistance className='text-xl text-teal-500' />
                                <h4 className='text-base text-gray-200 font-unbounded'>Social Account</h4>
                            </span>
                            <div className='flex flex-row items-center flex-wrap gap-3'>

                                <a href={details?.social[0].facebook} target='_blank'
                                    className="mb-2 inline-block rounded-full bg-white/10 hover:bg-white/15 duration-150 p-3 text-xs font-medium uppercase leading-normal text-white">
                                    <span className="">
                                        <FaFacebookF className='text-lg' />
                                    </span>
                                </a>
                                <a href={details?.social[0].linkedin} target='_blank'
                                    className="mb-2 inline-block rounded-full bg-white/10 hover:bg-white/15 duration-150 p-3 text-xs font-medium uppercase leading-normal text-white">
                                    <span className="">
                                        <FaLinkedinIn className='text-lg' />
                                    </span>
                                </a>
                                <a href={details?.social[0].instagram} target='_blank'
                                    className="mb-2 inline-block rounded-full bg-white/10 hover:bg-white/15 duration-150 p-3 text-xs font-medium uppercase leading-normal text-white">
                                    <span className="">
                                        <FaInstagram className='text-lg' />
                                    </span>
                                </a>

                            </div>
                            {
                                !details?.isActive && <p className='text-sm text-red-400 mt-2'>This Doctor is not available.</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetails;