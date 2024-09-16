import Image from 'next/image';
import React from 'react';

const deshboardload = () => {
    return (
        <div>
            <div className='min-h-screen flex justify-center items-center bg-[#070806]'>
                <Image src='https://res.cloudinary.com/devlj6p7h/image/upload/v1716365162/samples/qjvrzuqjp0sorgjmexim.gif' height={200} width={200} alt='loading'></Image>
            </div>
        </div>
    );
};

export default deshboardload;