import { Drawer } from "antd";
import Link from "next/link";
import { useState } from "react";
import { FaRegRectangleList, FaUserDoctor } from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineContactSupport } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";


const MobileNav = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <RiMenu3Fill onClick={() => setOpen(true)} className="text-white text-2xl md:text-3xl lg:hidden"></RiMenu3Fill>

            <Drawer style={{ backgroundColor: '#1A1917', color: 'white' }} width={320} onClose={() => setOpen(false)} open={open} placement='left'>
                <ul className="flex flex-col gap-8">
                    <li className='text-lg font-medium font-sans relative group'>
                        <Link href='/' onClick={() => setOpen(false)} className="flex flex-row gap-x-2 items-center">
                            <IoHomeOutline className="text-[#00C4CC] text-base"></IoHomeOutline>
                            <h4>Home</h4>
                        </Link>
                        <span className='absolute left-0 -bottom-2 h-0.5 w-0 group-hover:w-full bg-[#00C4CC] duration-200'></span>
                    </li>

                    <li className='text-lg font-medium font-sans relative group'>
                        <Link href='/tests' onClick={() => setOpen(false)} className="flex flex-row gap-x-2 items-center">
                            <FaRegRectangleList className="text-[#00C4CC] text-base"></FaRegRectangleList>
                            <h4>All Test</h4>
                        </Link>
                        <span className='absolute left-0 -bottom-2 h-0.5 w-0 group-hover:w-full bg-[#00C4CC] duration-200'></span>
                    </li>
                    <li className='text-lg font-medium font-sans relative group'>
                        <Link href='/doctors' onClick={() => setOpen(false)} className="flex flex-row gap-x-2 items-center">
                            <FaUserDoctor className="text-[#00C4CC] text-base"></FaUserDoctor>
                            <h4>Doctors</h4>
                        </Link>
                        <span className='absolute left-0 -bottom-2 h-0.5 w-0 group-hover:w-full bg-[#00C4CC] duration-200'></span>
                    </li>

                    <li className='text-lg font-medium font-sans relative group'>
                        <Link href='/gallery' onClick={() => setOpen(false)} className="flex flex-row gap-x-2 items-center">
                            <GrGallery className="text-[#00C4CC] text-base"></GrGallery>
                            <h4>Gallery</h4>
                        </Link>
                        <span className='absolute left-0 -bottom-2 h-0.5 w-0 group-hover:w-full bg-[#00C4CC] duration-200'></span>
                    </li>

                    

                    <li className='text-lg font-medium font-sans relative group'>
                        <Link href='/contact' onClick={() => setOpen(false)} className="flex flex-row gap-x-2 items-center">
                            <MdOutlineContactSupport className="text-[#00C4CC] text-lg"></MdOutlineContactSupport>
                            <h4>Contact</h4>
                        </Link>
                        <span className='absolute left-0 -bottom-2 h-0.5 w-0 group-hover:w-full bg-[#00C4CC] duration-200'></span>
                    </li>


                </ul>
            </Drawer>
        </div>
    );
};

export default MobileNav;