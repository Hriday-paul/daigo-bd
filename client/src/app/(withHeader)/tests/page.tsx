import PageTopUi from '@/components/Shared/PageTopUi/PageTopUi';
import TestCard from '@/components/Shared/TestCard/TestCard';
import UseGEtAllTest from '@/components/Utils/UseGEtAllTest';
import React from 'react';
import type { Metadata } from 'next'
import { breadcrumbType } from '@/components/Ui/BreadCrumb/BreadCrumb';

export interface testType {
    _id: string;
    name: string;
    price: number;
    slot: number;
    testDate: number;
    details: string;
    photo: string;
}

export const metadata: Metadata = {
    title: 'All tests',
    description: 'Your beauty journey starts here, with us. At our plastic surgery clinic, we believe that beauty comes from within, and we’re here to help you unlock your true potential.',
}

const breadCrumbItems: breadcrumbType[] = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: "All test",
        link: '/tests',
        active: true
    }
]

const AllTest = async () => {
    const tests = await UseGEtAllTest() as testType[];

    return (
        <div className='bg-[#070806]'>
            <PageTopUi breadCrumbItems={breadCrumbItems}>
                {"All Test's"}
            </PageTopUi>
            <div className="max-w-6xl mx-auto px-5 lg:px-0 pt-5 md:pt-10 lg:pt-14 pb-10 md:pb-20 lg:pb-32">
                <div data-aos='fade-down' data-aos-duration='1500' className="pt-10 md:pt-16 lg:pt-20 pb-10 md:pb-14 lg:pb-16 space-y-7 md:w-4/5 lg:w-2/3 mx-auto">
                    <h1 className="text-teal-500 font-medium text-3xl lg:text-5xl text-center font-unbounded">Your beauty journey starts here, with us</h1>
                    <p className="text-center text-gray-300 text-sm md:text-lg font-unbounded">At our plastic surgery clinic, we believe that beauty comes from within, and we’re here to help you unlock your true potential.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 md:gap-x-8 mx-auto">
                    {
                        tests?.map((test) => {
                            return <TestCard test={test} key={test._id} />
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default AllTest;