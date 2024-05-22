import UploadFile from "@/components/Utils/UploadFile";
import { useUpdateReservationMutation } from "@/lib/features/Api/Api";
import { Button, Modal, Tooltip } from "antd";
import { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { CiEdit } from "react-icons/ci";
import { ImSpinner6 } from "react-icons/im";

type input = {
    report: string,
    reportFile?: File[]
}

const ChangeStatus = ({ patientId, status, admin }: { patientId: string, status: string, admin: string }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [update, { isError, isLoading, isSuccess, error }] = useUpdateReservationMutation();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<input>();

    const changeStus_AddResult: SubmitHandler<input> = (updateddata) => {
        const { report, reportFile } = updateddata;
        if (report === 'complete') {
            if (reportFile) {
                if (reportFile.length <= 0) {
                    toast.error('You must add a pdf result')
                }
                else {
                    UploadFile(reportFile[0])
                        .then((response) => response.json())
                        .then((data) => {
                            const fileUrl = data.secure_url;
                            update({ email: admin, patientId, report: 'complete', reportFile: fileUrl })
                        })
                        .catch(() => {
                            toast.error('File upload failed, try again !')
                        })
                }

            }
            else {
                toast.error('You must add a pdf result')
            }
        }
        else {
            update({ email: admin, patientId, report, reportFile: '' })
        }
    }

    if (isError) {
        console.log(error);
        toast.error('Status change failed, try again !');
    }

    useMemo(() => {
        if (isSuccess) {
            toast.success('Status update successfully');
        }
    }, [isSuccess]);

    return (
        <div>
            <Tooltip title={`Change status & add result`}>
                <Button onClick={() => setIsModalOpen(true)}
                    style={{ backgroundColor: '#515150', color: '#F4F4F4', border: 0 }}
                    type="primary"
                    icon={<CiEdit />}
                >
                </Button>
            </Tooltip>

            <Modal
                title="Add New Book"
                style={{ backgroundColor: '#111827' }}
                open={isModalOpen}
                onOk={() => setIsModalOpen(false)}
                onCancel={() => setIsModalOpen(false)}
                okButtonProps={{ style: { display: 'none' } }}
                centered>

                <form onSubmit={handleSubmit(changeStus_AddResult)} >
                    <div>
                        <label htmlFor="report" className="block mb-1 text-sm font-medium text-gray-400">Status<span className="text-red-500">*</span></label>

                        <select defaultValue={status} id="report" className={`w-full py-2 px-3 rounded-lg bg-gray-800 text-gray-300 border outline-0 ${errors.report ? ' border-red-500' : ' border-gray-600 focus:border-blue-500'}`} {...register("report", { required: true })}>
                            <option value="pending">Pending</option>
                            <option value="complete">Complete</option>
                            <option value="cencel">Cencel</option>
                        </select>
                        {errors.report && <p className="text-red-500 text-sm">Status is required</p>}
                    </div>



                    <div className="my-4">
                        <label htmlFor="report" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Report File<span className="text-red-500">*</span></label>

                        <input type="file" id="report" className={`file-input file-input-bordered bg-[#302E2B] dark:text-white w-full ${errors.reportFile ? 'border border-red-500' : 'border-0'}`} {...register("reportFile")} />
                        {errors.reportFile && <p className="text-red-500 text-sm">Report file is required</p>}
                    </div>

                    <div className="col-span-1 md:col-span-2 my-2">
                        <button disabled={isLoading} type="submit" className="btn btn-sm w-full bg-teal-500 text-white hover:bg-teal-600 border-0 outline-0">
                            {
                                (isLoading) && <ImSpinner6 className="text-white text-lg animate-spin" />
                            }
                            Update status
                        </button>
                    </div>

                </form>

            </Modal>
        </div>
    );
};

export default ChangeStatus;