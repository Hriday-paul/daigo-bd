import UploadFile from "@/components/Utils/UploadFile";
import { useUpdateTestMutation } from "@/lib/features/Api/Api";
import { Button, Drawer, Tooltip } from "antd";
import { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { CiEdit } from "react-icons/ci";
import { ImSpinner6 } from "react-icons/im";

type testType = {
    name: string,
    price: number,
    slot: number,
    testDate: number,
    photo: string,
    details: string,
    _id: string
}

type receiveType = {
    name: string,
    price: string,
    slot: string,
    testDate: Date,
    photo: File[],
    details: string
}

const TestUpdateDrawer = ({ test, admin }: { test: testType, admin: string }) => {
    const [update, { isLoading, isError, isSuccess, error }] = useUpdateTestMutation();
    const [open, setOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<receiveType>();

    const handleUpdateTest: SubmitHandler<receiveType> = (testData) => {
        setLoading(true);
        if (testData.photo.length > 0) {
            UploadFile(testData.photo[0])
                .then((response) => response.json())
                .then((data) => {
                    const photo = data.secure_url;
                    update({ id: test._id, ...testData, price: parseInt(testData?.price), slot: parseInt(testData?.slot), photo, testDate: new Date(testData.testDate).getTime(), email: admin })
                    setLoading(false);
                })
                .catch(() => {
                    toast.error('Photo upload failed, try again !');
                    setLoading(false);
                })
        }
        else {
            update({ id: test._id, ...testData, price: parseInt(testData?.price), slot: parseInt(testData?.slot), photo: test.photo, testDate: new Date(testData.testDate).getTime(), email: admin })
            setLoading(false);
        }
    }

    if (isError) {
        toast.error('Update failed, try again')
        console.log(error);
    }

    useMemo(() => {
        if (isSuccess) {
            toast.success('Test update successfully');
        }
    }, [isSuccess]);


    return (
        <div>
            <Tooltip title={`Edit test`}>
                <Button
                    style={{ backgroundColor: '#515150', color: '#F4F4F4', border: 0 }}
                    type="primary"
                    icon={<CiEdit />}
                    onClick={() => setOpen(true)}
                >
                </Button>
            </Tooltip>
            <Drawer style={{ backgroundColor: '#1A1917', color: 'white' }} width={600} title="Update Test" onClose={() => setOpen(false)} open={open}>

                <div>
                    <div className="max-w-2xl rounded-md mx-auto px-10">
                        <form className="space-y-5" onSubmit={handleSubmit(handleUpdateTest)}>
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Test Name<span className="text-red-500">*</span></label>

                                <input id='name' type="text" className={`rounded-md px-2 outline-none py-1 bg-[#302E2B] dark:text-white shadow-inner h-10 w-full text-sm ${errors.name ? 'border border-red-500' : 'border-0'}`} {...register("name", { required: true })} defaultValue={test?.name} />
                                {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
                            </div>
                            <div>
                                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price<span className="text-red-500">*</span></label>

                                <input id='price' type="number" className={`rounded-md px-2 outline-none py-1 bg-[#302E2B] dark:text-white shadow-inner h-10 w-full text-sm ${errors.price ? 'border border-red-500' : 'border-0'}`} {...register("price", { required: true })} defaultValue={test?.price.toString()} />
                                {errors.price && <p className="text-red-500 text-sm">Price is required</p>}
                            </div>
                            <div>
                                <label htmlFor="slot" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Total Slot<span className="text-red-500">*</span></label>

                                <input id='slot' type="number" className={`rounded-md px-2 outline-none py-1 bg-[#302E2B] dark:text-white shadow-inner h-10 w-full text-sm ${errors.slot ? 'border border-red-500' : 'border-0'}`} {...register("slot", { required: true })} defaultValue={test?.slot.toString()} />
                                {errors.slot && <p className="text-red-500 text-sm">Slot is required</p>}
                            </div>
                            <div>
                                <label htmlFor="testDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Test Date<span className="text-red-500">*</span></label>
                                <input type="date" id="testDate" className={`bg-[#302E2B] p-2 rounded-md w-full ${errors.testDate ? 'border border-red-500' : 'border-0'}`} {...register("testDate", { required: true })}
                                    defaultValue={(new Date(test?.testDate).toISOString().split('T')[0])}
                                />
                                {errors.testDate && <p className="text-red-500 text-sm">Date is required</p>}
                            </div>


                            <div>
                                <label htmlFor="testDetails" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Test Details<span className="text-red-500">*</span></label>

                                <textarea id='testDetails' rows={5} className={`rounded-md px-2 outline-none py-2 bg-[#302E2B] dark:text-white shadow-inner w-full text-sm ${errors.details ? 'border border-red-500' : 'border-0'}`}  {...register("details", { required: true })} defaultValue={test?.details} />
                                {errors.details && <p className="text-red-500 text-sm">Details is required</p>}
                            </div>

                            <div>
                                <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image<span className="text-red-500">*</span></label>

                                <input type="file" id="image" className={`file-input file-input-bordered bg-[#302E2B] dark:text-white w-full`} {...register("photo")} />

                            </div>
                            <div className="col-span-1 md:col-span-2 my-2">
                                <button disabled={isLoading || loading} type="submit" className="btn w-full bg-teal-500 text-white hover:bg-teal-600 border-0 outline-0">
                                    {
                                        (isLoading || loading) && <ImSpinner6 className="text-white text-lg animate-spin" />
                                    }
                                    Update Test
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Drawer>

        </div>

    );
};

export default TestUpdateDrawer;