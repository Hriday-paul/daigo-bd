'use client'
import { Image } from 'antd';

const Certificate = ({ img }: { img: string }) => {
    return (
        <Image
            width={200}
            height={140}
            src={img}
            alt='certificate'
        />
    );
};

export default Certificate;