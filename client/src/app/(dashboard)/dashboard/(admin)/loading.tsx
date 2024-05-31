import Image from 'next/image';
import React from 'react';

const deshload = () => {
    return (
        <div className='min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] flex justify-center items-center bg-transparent'>
            <Image src='https://res.cloudinary.com/devlj6p7h/image/upload/v1716365162/samples/qjvrzuqjp0sorgjmexim.gif' height={150} width={150} alt='loading'></Image>
        </div>
    );
};

export default deshload;