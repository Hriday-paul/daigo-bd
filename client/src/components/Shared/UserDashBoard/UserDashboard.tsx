'use client'
import logo from '@/images/logo.png'
import { IoIosNotificationsOutline } from "react-icons/io";
import { Badge } from "antd";
import { ReactNode, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiUser, CiViewList } from "react-icons/ci";
import { HiLogout } from "react-icons/hi";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiMenu3Fill } from "react-icons/ri";
import { GiTireIronCross } from "react-icons/gi";
import { ImProfile } from "react-icons/im";
import { MdChecklist } from "react-icons/md";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';

const UserDashboard = ({ children }: { children: ReactNode }) => {
    const { status, data } = useSession();
    const { user: userInfo } = data || {};
    const pathname = usePathname();
    const [slide, setSlide] = useState(false);
    const [showDropDown, setShowDropDown] = useState(false);

    return (
        <div>
            <nav className="bg-gradient-to-r from-[#181716] to-[#070806] px-4">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                    <Link href='/' className="flex items-center py-2">

                        <Image className="h-12 md:h-16 w-14 md:w-20" src={logo} height={200} width={200} alt="logo" placeholder='blur' />
                        <span className="self-center text-xl md:text-2xl text-white font-semibold font-mono whitespace-nowrap uppercase">Medicare</span>
                    </Link>

                    <div className="items-center justify-between flex md:order-1" id="navbar-user">
                        <ul className="flex items-center font-medium rounded-lg space-x-4 md:space-x-8">
                            <li>
                                <Badge count={5} color="rgb(45, 183, 245)" >
                                    <IoIosNotificationsOutline className="text-2xl md:text-2xl text-white"></IoIosNotificationsOutline>
                                </Badge>

                            </li>
                            <li className="flex items-center justify-center">

                                <div className="relative flex items-center cursor-pointer" onClick={() => setShowDropDown(!showDropDown)}>
                                    <p className="text-white font-sans text-base md:text-lg ml-1">Profile</p>
                                    <RiArrowDropDownLine className={showDropDown ? 'text-3xl text-white -ml-1 rotate-180 duration-100' : 'text-3xl text-white -ml-1 duration-100'}></RiArrowDropDownLine>
                                    <span className={showDropDown ? 'absolute top-12 right-0 block' : 'absolute top-12 right-0 hidden'}>
                                        <ul className="w-36 bg-gray-700 border shadow-md text-gray-200">
                                            <li className="hover:bg-gray-100 hover:text-black duration-200 p-2 cursor-pointer flex gap-x-1 items-center">
                                                <CiUser></CiUser><p className="text-sm font-sans">My Profile</p>
                                            </li>
                                            <li onClick={() => signOut()} className="hover:bg-gray-100 hover:text-black duration-200 p-2 cursor-pointer flex gap-x-1 items-center">
                                                <HiLogout></HiLogout><p className="text-sm font-sans">Logout</p>
                                            </li>
                                        </ul>
                                    </span>
                                </div>
                            </li>
                            <li className='lg:hidden'>
                                <div>
                                    {
                                        !slide && <RiMenu3Fill onClick={() => setSlide(true)} className='text-2xl text-white'></RiMenu3Fill>
                                    }
                                    {
                                        slide && <GiTireIronCross className='text-white' onClick={() => setSlide(false)}></GiTireIronCross>
                                    }

                                </div>
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>

            <div className="flex flex-row">
                <div className="w-80 bg-gradient-to-br from-[#0e0d0c] to-[#070806] h-[calc(100vh-80px)] hidden lg:block">
                    <div className="flex gap-x-2 items-center p-2 bg-[#131412]">
                        {userInfo && <Image height={200} width={200} className="h-12 w-auto rounded-full" src={userInfo?.image !== '' ? `${userInfo?.image}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUDOlaA7x6auc_yDvEigMgyktyrJBM34AFOaauo6-qXD5zg_vpZlZk9offXf9PMLdA0Lw&usqp=CAU"} alt="img" />}


                        <span className="truncate">
                            <h3 className="text-base font-medium font-unbounded text-white truncate">{userInfo?.name}</h3>
                            <p className="truncate text-white text-sm">{userInfo?.email}</p>
                        </span>
                    </div>
                    <div className="px-2">
                        <h2 className="text-lg font-medium text-white font-serif p-5 pb-0">Main</h2>

                        <Link href="/dashboard" className={pathname == '/dashboard' ? "w-full text-white my-5 flex flex-row justify-start items-center p-3 bg-[#131412] hover:bg-[#131412] duration-100 rounded-sm shadow-xl" : "w-full my-5 flex flex-row items-center justify-start p-3 bg-transparent hover:bg-[#131412] duration-100 rounded-sm"} >
                            <LuLayoutDashboard className="text-white text-2xl mr-2"></LuLayoutDashboard>
                            <h4 className="text-lg text-white font-serif font-medium">Dashboard</h4>
                        </Link>

                        <Link href="/dashboard/myAppoinments" className={pathname == '/dashboard/myAppoinments' ? "w-full text-white my-5 flex flex-row justify-start items-center p-3 bg-[#131412] hover:bg-[#131412] duration-100 rounded-sm shadow-xl" : "w-full my-5 flex flex-row items-center justify-start p-3 bg-transparent hover:bg-[#131412] duration-100 rounded-sm"} >
                            <CiViewList className="text-white text-2xl mr-2"></CiViewList>
                            <h4 className="text-lg text-white font-serif font-medium">Appoinments</h4>
                        </Link>

                        <Link href="/dashboard/result" className={pathname == '/dashboard/result' ? "w-full text-white my-5 flex flex-row justify-start items-center p-3 bg-[#131412] hover:bg-[#131412] duration-100 rounded-sm shadow-xl" : "w-full my-5 flex flex-row items-center justify-start p-3 bg-transparent hover:bg-[#131412] duration-100 rounded-sm"} >
                            <MdChecklist className="text-white text-2xl mr-2"></MdChecklist>
                            <h4 className="text-lg text-white font-serif font-medium">Test Result</h4>
                        </Link>
                        <Link href="/dashboard/profile" className={pathname == '/dashboard/profile' ? "w-full text-white my-5 flex flex-row justify-start items-center p-3 bg-[#131412] hover:bg-[#131412] duration-100 rounded-sm shadow-xl" : "w-full my-5 flex flex-row items-center justify-start p-3 bg-transparent hover:bg-[#131412] duration-100 rounded-sm"} >
                            <ImProfile className="text-white text-2xl mr-2"></ImProfile>
                            <h4 className="text-lg text-white font-serif font-medium">My Profile</h4>
                        </Link>
                    </div>
                </div>

                {/* mobile device */}
                <div className={`w-2/3 md:w-1/3 bg-gradient-to-br lg:hidden from-[#21201E] to-[#1a1917] h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] absolute top-[64px] md:top-[80px] z-50 left-0 ${slide ? "translate-x-0" : "-translate-x-[750px]"} duration-300`}>
                    <div className="flex gap-x-2 items-center p-2 bg-[#444341]">
                        {userInfo && <Image height={200} width={200} className="h-12 w-auto rounded-full" src={userInfo?.image !== '' ? `${userInfo?.image}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUDOlaA7x6auc_yDvEigMgyktyrJBM34AFOaauo6-qXD5zg_vpZlZk9offXf9PMLdA0Lw&usqp=CAU"} alt="img" />}

                        <span className="truncate">
                            <h3 className="text-base font-medium font-unbounded text-white truncate">{userInfo?.name}</h3>
                            <p className="truncate text-white text-sm">{userInfo?.email}</p>
                        </span>
                    </div>

                    <div className="px-2">
                        <h2 className="text-lg font-medium text-white font-serif p-5 pb-0">Main</h2>
                        <Link href="/dashboard" onClick={() => setSlide(false)} className={pathname == '/dashboard' ? "w-full text-white my-5 flex flex-row justify-start items-center p-3 bg-[#131412] hover:bg-[#131412] duration-100 rounded-sm shadow-xl" : "w-full my-5 flex flex-row items-center justify-start p-3 bg-transparent hover:bg-[#131412] duration-100 rounded-sm"} >
                            <LuLayoutDashboard className="text-white text-2xl mr-2"></LuLayoutDashboard>
                            <h4 className="text-lg text-white font-serif font-medium">Dashboard</h4>
                        </Link>
                        <Link href="/dashboard/myAppoinments" onClick={()=>setSlide(false)}  className={pathname == '/dashboard/myAppoinments' ? "w-full text-white my-5 flex flex-row justify-start items-center p-3 bg-[#131412] hover:bg-[#131412] duration-100 rounded-sm shadow-xl" : "w-full my-5 flex flex-row items-center justify-start p-3 bg-transparent hover:bg-[#131412] duration-100 rounded-sm"} >
                            <CiViewList className="text-white text-2xl mr-2"></CiViewList>
                            <h4 className="text-lg text-white font-serif font-medium">Appoinments</h4>
                        </Link>

                        <Link href="/dashboard/result" onClick={()=>setSlide(false)}  className={pathname == '/dashboard/result' ? "w-full text-white my-5 flex flex-row justify-start items-center p-3 bg-[#131412] hover:bg-[#131412] duration-100 rounded-sm shadow-xl" : "w-full my-5 flex flex-row items-center justify-start p-3 bg-transparent hover:bg-[#131412] duration-100 rounded-sm"} >
                            <MdChecklist className="text-white text-2xl mr-2"></MdChecklist>
                            <h4 className="text-lg text-white font-serif font-medium">Test Result</h4>
                        </Link>
                        <Link href="/dashboard/profile" onClick={()=>setSlide(false)} className={pathname == '/dashboard/profile' ? "w-full text-white my-5 flex flex-row justify-start items-center p-3 bg-[#131412] hover:bg-[#131412] duration-100 rounded-sm shadow-xl" : "w-full my-5 flex flex-row items-center justify-start p-3 bg-transparent hover:bg-[#131412] duration-100 rounded-sm"} >
                            <ImProfile className="text-white text-2xl mr-2"></ImProfile>
                            <h4 className="text-lg text-white font-serif font-medium">My Profile</h4>
                        </Link>
                    </div>
                </div>

                <div className="w-full bg-[#302E2B] h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] p-4 md:p-8 lg:p-10 overflow-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;