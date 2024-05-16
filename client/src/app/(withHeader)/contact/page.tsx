import Image from 'next/image';
import React from 'react';
import { MdPhoneCallback } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { GiSmartphone } from "react-icons/gi";

const contact = () => {
    return (
        <div className=" bg-[#1D232A]">
            <div className="relative">
                <Image className="w-full h-[35vh] md:h-[55vh] lg:h-[60vh] brightness-50" src={`https://res.cloudinary.com/devlj6p7h/image/upload/v1710565625/test/qqwid0ueckoamuakbhag.jpg`} height={200} width={500} alt="banner image" />
                <span className="absolute bottom-0 left-0 h-[calc(40vh-104px)] md:h-[calc(55vh-128px)] lg:h-[calc(60vh-152px)] w-full flex justify-center items-center">
                    <h2 className="text-center text-white text-xl md:text-3xl lg:text-5xl font-medium font-sans uppercase">{"Contact"}</h2>
                </span>
            </div>
            <section className="mb-32 max-w-6xl mx-auto px-5 lg:px-0 pt-5 md:pt-10 lg:pt-14 pb-10 md:pb-20 lg:pb-32">
                <div id="map" className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                        width="100%" height="480" loading="lazy"></iframe>
                </div>
                <div className="container px-6 md:px-12">
                    <div
                        className="block rounded-lg bg-[#222830] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-700">
                        <div className="flex flex-wrap">
                            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                                <form>
                                    <div className="relative mb-6" data-te-input-wrapper-init>
                                        <input type="text"
                                            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                                            id="exampleInput90" />
                                        <label
                                            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-300 transition-all duration-200 ease-out peer-focus:-translate-y-[0.5rem] peer-focus:scale-[0.8] peer-focus:text-gray-300 peer-focus:bg-teal-700 peer-focus:pt-0 peer-focus:px-2 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                                            htmlFor="exampleInput90">Name
                                        </label>
                                    </div>
                                    <div className="relative mb-6" data-te-input-wrapper-init>
                                        <input type="email"
                                            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                                            id="exampleInput91" />
                                        <label
                                            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-300 transition-all duration-200 ease-out peer-focus:-translate-y-[0.5rem] peer-focus:scale-[0.8] peer-focus:text-gray-300 peer-focus:bg-teal-700 peer-focus:pt-0 peer-focus:px-2 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                                            htmlFor="exampleInput91">Email address
                                        </label>
                                    </div>
                                    <div className="relative mb-6" data-te-input-wrapper-init>
                                        <textarea
                                            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                                            id="message" rows={3}></textarea>
                                       <label
                                            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-300 transition-all duration-200 ease-out peer-focus:-translate-y-[0.5rem] peer-focus:scale-[0.8] peer-focus:text-gray-300 peer-focus:bg-teal-700 peer-focus:pt-0 peer-focus:px-2 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                                            htmlFor="message">Messaage
                                        </label>
                                    </div>
                                    <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                                        <input
                                            className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent "
                                            type="checkbox" value="" id="exampleCheck96" defaultChecked />
                                        <label className="inline-block pl-[0.15rem] hover:cursor-pointer" htmlFor="exampleCheck96">
                                            Send me a copy of this message
                                        </label>
                                    </div>
                                    <button type="button"
                                        className="mb-6 w-full rounded bg-teal-600 text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal lg:mb-0">
                                        Send
                                    </button>
                                </form>
                            </div>
                            

                            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                                <div className="flex flex-wrap">
                                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                                        <div className="flex items-start">
                                            <div className="shrink-0">
                                                <div className="inline-block rounded-md bg-teal-600 p-4 text-primary">
                                                    <MdPhoneCallback className='text-xl test-white'/>
                                                </div>
                                            </div>
                                            <div className="ml-6 grow">
                                                <p className="mb-2 font-bold ">
                                                    Technical support
                                                </p>
                                                <p className="text-sm text-neutral-300">
                                                    example@gmail.com
                                                </p>
                                                <p className="text-sm text-neutral-300">
                                                    +8801892814892
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                                        <div className="flex items-start">
                                            <div className="srink-0">
                                                <div className="inline-block rounded-md bg-teal-600 p-4">
                                                    <FaRegAddressCard className='text-xl text-white' />
                                                </div>
                                            </div>
                                            <div className="ml-6 grow">
                                                <p className="mb-2 font-bold ">
                                                    Address
                                                </p>
                                                <p className="text-sm text-neutral-300">
                                                    Nimsar, Cumilla, <br />
                                                    Bangladesh <br />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
                                        <div className="align-start flex">
                                            <div className="shrink-0">
                                                <div className="inline-block rounded-md bg-teal-600 p-4 text-primary">
                                                    <TbDeviceLandlinePhone className='text-xl text-white' />

                                                </div>
                                            </div>
                                            <div className="ml-6 grow">
                                                <p className="mb-2 font-bold ">Land Line</p>
                                                <p className="text-neutral-300"> +8801892-814892
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
                                        <div className="align-start flex">
                                            <div className="shrink-0">
                                                <div className="inline-block rounded-md bg-teal-600 p-4 text-primary">
                                                    <GiSmartphone className='text-xl text-white' />
                                                </div>
                                            </div>
                                            <div className="ml-6 grow">
                                                <p className="mb-2 font-bold ">Mobile</p>
                                                <p className="text-neutral-300"> +8801892-814892
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default contact;