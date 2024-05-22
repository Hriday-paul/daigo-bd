import CardDoctor from '@/components/Shared/DoctorCard/DoctorAllCard';
import { doctor } from '@/components/Shared/HomeDoctors/HomeDoctors';
import PageTopUi from '@/components/Shared/PageTopUi/PageTopUi';
import { breadcrumbType } from '@/components/Ui/BreadCrumb/BreadCrumb';
import UseGetAllDoctors from '@/components/Utils/UseGetAllDoctors';
import { Metadata } from 'next';
import React from 'react';

const breadCrumbItems: breadcrumbType[] = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: "Doctors",
        link: '/doctors',
        active: true
    }
];



export const metadata: Metadata = {
    title: 'Our Doctors',
    description: 'Your beauty journey starts here, with us. At our daigo-bd clinic, we believe that beauty comes from within, and we’re here to help you unlock your true potential.',
}

const Doctors = async () => {
    const doctors: doctor[] = await UseGetAllDoctors();

    return (
        <div className='bg-[#070806]'>
            <PageTopUi breadCrumbItems={breadCrumbItems}>
                {"Doctor's List"}
            </PageTopUi>
            <div className="max-w-6xl mx-auto px-5 lg:px-0 pt-5 md:pt-10 lg:pt-14 pb-10 md:pb-20 lg:pb-32">
                <div data-aos='fade-down' data-aos-duration='1500' className="pt-10 md:pt-16 lg:pt-20 pb-10 md:pb-14 lg:pb-16 space-y-7 md:w-4/5 lg:w-2/3 mx-auto">
                    <h1 className="text-teal-500 font-medium text-3xl lg:text-5xl text-center font-unbounded">Our All Doctors</h1>
                    <p className="text-center text-gray-300 text-sm md:text-lg font-unbounded">At our plastic surgery clinic, we believe that beauty comes from within, and we’re here to help you unlock your true potential.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-y-5 md:gap-x-8 mx-auto px-5 xl:px-0">
                    
                    {
                        doctors?.map((doctor) => {
                            return <CardDoctor key={doctor._id} title={doctor.title} image={doctor.photo} name={doctor.name} id={doctor._id} services={doctor.services} location={doctor.location} />
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Doctors;