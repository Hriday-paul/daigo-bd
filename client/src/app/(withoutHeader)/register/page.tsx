import { MdPhoneCallback } from "react-icons/md";

const page = () => {
    return (
        <div>
            This is a register page.
            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                <div className="flex flex-wrap">
                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                        <div className="flex items-start">
                            <div className="shrink-0">
                                <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                                    <MdPhoneCallback />
                                </div>
                            </div>
                            <div className="ml-6 grow">
                                <p className="mb-2 font-bold ">
                                    Technical support
                                </p>
                                <p className="text-sm text-neutral-500">
                                    example@gmail.com
                                </p>
                                <p className="text-sm text-neutral-500">
                                    1-600-890-4567
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                        <div className="flex items-start">
                            <div className="srink-0">
                                <div className="inline-block rounded-md bg-sky-200 p-4"><MdPhoneCallback />
                                </div>
                            </div>
                            <div className="ml-6 grow">
                                <p className="mb-2 font-bold ">
                                    Address
                                </p>
                                <p className="text-sm text-neutral-500">
                                    abcd, <br />
                                    xyz <br />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
                        <div className="align-start flex">
                            <div className="shrink-0">
                                <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                                    <MdPhoneCallback />

                                </div>
                            </div>
                            <div className="ml-6 grow">
                                <p className="mb-2 font-bold ">Land Line</p>
                                <p className="text-neutral-500"> (0421) 431 2030
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
                        <div className="align-start flex">
                            <div className="shrink-0">
                                <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                                    <MdPhoneCallback />
                                </div>
                            </div>
                            <div className="ml-6 grow">
                                <p className="mb-2 font-bold ">Mobile</p>
                                <p className="text-neutral-500"> +91 123456789
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;