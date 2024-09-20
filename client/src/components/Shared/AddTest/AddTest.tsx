'use client'
import UploadFile from '@/components/Utils/UploadFile';
import { useAddTestMutation } from '@/lib/features/Api/Api';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { ImSpinner6 } from 'react-icons/im';

type testType = {
    name: string,
    price: string,
    slot: string,
    testDate: Date,
    photo: File[],
    details: string
}


const AddTest = () => {
    const { data: userData } = useSession();
    const [insertTest, { isError, isLoading, isSuccess, error }] = useAddTestMutation();
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<testType>();

    const handleAddTest: SubmitHandler<testType> = (testData) => {
        setLoading(true);
        UploadFile(testData.photo[0])
            .then((response) => response.json())
            .then((data) => {
                const photo = data.secure_url;
                insertTest({ ...testData, price: parseInt(testData?.price), slot: parseInt(testData?.slot), photo, testDate: new Date(testData.testDate).getTime(), email: userData?.user?.email || '' })
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
                toast.error('Photo upload failed, try again !');
            })
    };

    if (isError) {
        console.log(error);
        toast.error('Something wents wrong, try again !')
    }
    if (isSuccess) {
        toast.success('Test added successfully.')
    }

    return (
        <div>
            <div className="py-10">
                <div className="max-w-2xl shadow-xl bg-[#1B1A18] rounded-md mx-auto p-10">
                    <form className="space-y-5" onSubmit={handleSubmit(handleAddTest)}>
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Test Name<span className="text-red-500">*</span></label>

                            <input id='name' type="text" className={`rounded-md px-2 outline-none py-1 bg-[#302E2B] text-gray-300 shadow-inner h-10 w-full text-sm ${errors.name ? 'border border-red-500' : 'border-0'}`} {...register("name", { required: true })} />
                            {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
                        </div>
                        <div>
                            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-300">Price<span className="text-red-500">*</span></label>

                            <input id='price' type="number" className={`rounded-md px-2 outline-none py-1 bg-[#302E2B] text-gray-300 shadow-inner h-10 w-full text-sm ${errors.price ? 'border border-red-500' : 'border-0'}`} {...register("price", { required: true, pattern : {value : /^[1-9]+$/, message : 'use positive number'},  min : {value : 100, message : 'use minimum price 100'}, max : {value : 50000, message : 'use max price 50000'}})} />
                            {errors.price && <p className="text-red-500 text-sm">{errors?.price?.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="slot" className="block mb-2 text-sm font-medium text-gray-300">Total Slot<span className="text-red-500">*</span></label>

                            <input id='slot' type="number" className={`rounded-md px-2 outline-none py-1 bg-[#302E2B] text-gray-300 shadow-inner h-10 w-full text-sm ${errors.slot ? 'border border-red-500' : 'border-0'}`} {...register("slot", { required: true, pattern : {value : /^[1-9]+$/, message : 'use positive number'},  min : {value : 1, message : 'use minimum slot 1'}, max : {value : 500, message : 'use max slot 500'}})} />

                            {errors.slot && <p className="text-red-500 text-sm">{errors?.slot?.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="testDate" className="block mb-2 text-sm font-medium text-gray-300">Test Date<span className="text-red-500">*</span></label>
                            <input type="date" id="testDate" className={`bg-[#302E2B] p-2 rounded-md text-gray-300 w-full ${errors.testDate ? 'border border-red-500' : 'border-0'}`} {...register("testDate", { required: true })} />
                            {errors.testDate && <p className="text-red-500 text-sm">Date is required</p>}
                        </div>

                        <div>
                            <label htmlFor="testDetails" className="block mb-2 text-sm font-medium text-gray-300">Test Details<span className="text-red-500">*</span></label>

                            <textarea id='testDetails' rows={5} className={`rounded-md px-2 outline-none py-1 bg-[#302E2B] text-gray-300 shadow-inner w-full text-sm ${errors.details ? 'border border-red-500' : 'border-0'}`}  {...register("details", { required: {value : true, message : 'Details is required'}, minLength : {value : 20, message : 'use minimum 20 character'}})} />
                            {errors.details && <p className="text-red-500 text-sm">{errors?.details?.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-300">Image<span className="text-red-500">*</span></label>

                            <input type="file" id="image" className={`file-input file-input-bordered bg-[#302E2B] text-gray-300 w-full ${errors.photo ? 'border border-red-500' : 'border-0'}`} {...register("photo", { required: true })} />
                            {errors.photo && <p className="text-red-500 text-sm">Photo is required</p>}
                        </div>
                        <div className="col-span-1 md:col-span-2 my-2">
                            <button disabled={isLoading || loading} type="submit" className="btn w-full bg-teal-500 text-white hover:bg-teal-600 border-0 outline-0">
                                {
                                    (isLoading || loading) && <ImSpinner6 className="text-white text-lg animate-spin" />
                                }
                                Add test
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTest;