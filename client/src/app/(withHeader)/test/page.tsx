import Image from 'next/image';
import React from 'react';

const Test = () => {
    return (
        <div className='min-h-screen flex justify-center items-center bg-[#070806]'>
            <Image src='https://www.docsmart.in/_nuxt/img/loader.26e2ff2.gif' height={200} width={200} alt='loading'></Image>
        </div>
    );
};

export default Test;