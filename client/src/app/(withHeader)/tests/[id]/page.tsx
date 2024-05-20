import PageTopUi from '@/components/Shared/PageTopUi/PageTopUi';
import { breadcrumbType } from '@/components/Ui/BreadCrumb/BreadCrumb';
import UseGetTestDetails from '@/components/Utils/UseGetTestDetails';
import React from 'react';
import { testType } from '../page';
import Image from 'next/image';
import { Metadata, ResolvingMetadata } from 'next';
import BookApoinment from '@/components/Ui/BookApoinment/BookApoinment';

const breadCrumbItems: breadcrumbType[] = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: "All test",
        link: '/tests',
    },
    {
        title: "Details",
        link: '/',
        active: true
    },
]

export async function generateMetadata({ params }: { params: { id: string } }, parent: ResolvingMetadata
): Promise<Metadata> {
    const testData = await UseGetTestDetails(params.id) as testType;
    return {
        title: testData?.name,
        description: testData?.details,
    }
}

const TestDetails = async ({ params }: { params: { id: string } }) => {
    const testData = await UseGetTestDetails(params.id) as testType;

    return (
        <div className='bg-[#070806]'>
            <PageTopUi breadCrumbItems={breadCrumbItems}>
                {"Details"}
            </PageTopUi>
            <div>
                <div className="">
                    <div className="max-w-7xl mx-auto px-4 py-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 md:gap-x-5 items-center">
                            <div data-aos='fade-right' data-aos-duration='1500' className="p-5 border border-gray-600 rounded-sm">
                                {/* <img src={fetchingTest?.test?.photo} alt="" /> */}
                                <Image src={testData?.photo} height={200} width={200} className='w-full h-auto' alt='test image'></Image>
                            </div>
                            <div data-aos='zoom-in-left' data-aos-duration='1500' className="px-5 py-10 lg:p-10 space-y-5 ">
                                <h1 className="text-gray-200 text-3xl">{testData?.name}</h1>
                                <p className="text-gray-400">{testData?.details}</p>
                                <div className="text-gray-300 pl-5 flex justify-between items-center">
                                    <ul className="list-disc">
                                        <li>Test Date : {new Date(testData?.testDate).getDate() + '-' + (new Date(testData?.testDate).getMonth() + 1) + '-' + new Date(testData?.testDate).getFullYear()}</li>
                                        <li>Available Sit : {testData?.slot}</li>
                                        <li>Price : <p className="text-lg inline text-gray-100">{testData?.price} /=</p></li>
                                    </ul>

                                    <BookApoinment testId={testData?._id} />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestDetails;