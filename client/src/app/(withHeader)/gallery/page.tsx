import PageTopUi from '@/components/Shared/PageTopUi/PageTopUi';
import { breadcrumbType } from '@/components/Ui/BreadCrumb/BreadCrumb';
import Image from 'next/image';
import React from 'react';

const galleryList: string[] = ['https://res.cloudinary.com/devlj6p7h/image/upload/v1710704363/docs/shahojeylnqolgnpsw4t.png',
    'https://res.cloudinary.com/devlj6p7h/image/upload/v1710704367/docs/kudt8okdivus88if9kss.png',
    'https://res.cloudinary.com/devlj6p7h/image/upload/v1710704369/docs/q1yho6x6lnybelwxdd8j.png',
    'https://res.cloudinary.com/devlj6p7h/image/upload/v1710704366/docs/apjeqw0ycmwbdsufzogw.png',
    'https://res.cloudinary.com/devlj6p7h/image/upload/v1710704374/docs/wqgd8fwqeexyu0xeygv5.png',
    'https://res.cloudinary.com/devlj6p7h/image/upload/v1710704369/docs/x78gkk0c1j9uavzuuoth.png'];

const breadCrumbItems: breadcrumbType[] = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: "Gallery",
        link: '/gallery',
        active: true
    },
]


const gallery = async () => {

    return (
        <div className='bg-[#070806]'>
            <PageTopUi breadCrumbItems={breadCrumbItems}>
                {"Our Gallery"}
            </PageTopUi>
            <div className='max-w-6xl mx-auto p-5 lg:px-0 md:pt-5 pb-10 md:pb-20 lg:pb-32'>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5 justify-center items-center">
                    {
                        galleryList?.map((galleryImg) => {
                            return <Image key={galleryImg} src={galleryImg || ''} height={200} width={200} className='w-full h-full rounded-md hover:opacity-75' alt='test image'></Image>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default gallery;