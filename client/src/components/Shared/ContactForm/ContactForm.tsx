'use client'
import { useSendMailMutation } from "@/lib/features/Api/Api";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ImSpinner6 } from "react-icons/im";

export interface contactInput {
    subject: string,
    email: string
    message: string
}

const ContactForm = () => {
    const [sendMail, { isLoading, isError, isSuccess, error }] = useSendMailMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<contactInput>();

    const handleRegister: SubmitHandler<contactInput> = (data) => {
        sendMail(data);
    };

    if (isError) {
        console.log(error);
        toast.error('Email not sent, try again !')
    };

    if (isSuccess) {
        toast.success('Mail sent, our support member contact with you soon.')
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleRegister)}>
                <div className="relative mb-6" data-te-input-wrapper-init>
                    <input type="email"
                        className="peer block min-h-[auto] text-gray-200 w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                        id="exampleInput90" {...register("email", { required: true })} />
                    {errors.email && <p className="text-red-500 text-xs text-left">Email is required</p>}
                    <label
                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-300 transition-all duration-200 ease-out peer-focus:-translate-y-[0.5rem] peer-focus:scale-[0.8] peer-focus:text-gray-300 peer-focus:bg-teal-700 peer-focus:pt-0 peer-focus:px-2 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                        htmlFor="exampleInput90">Email
                    </label>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                    <input type="test"
                        className="peer block min-h-[auto] text-gray-200 w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                        id="exampleInput91" {...register("subject", { required: true })} />
                    {errors.subject && <p className="text-red-500 text-xs text-left">Subject is required</p>}
                    <label
                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-300 transition-all duration-200 ease-out peer-focus:-translate-y-[0.5rem] peer-focus:scale-[0.8] peer-focus:text-gray-300 peer-focus:bg-teal-700 peer-focus:pt-0 peer-focus:px-2 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                        htmlFor="exampleInput91">Subject
                    </label>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                    <textarea
                        className="peer block min-h-[auto] text-gray-200 w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-sm"
                        id="message" rows={3}{...register("message", { required: true })}>
                    </textarea>
                    {errors.message && <p className="text-red-500 text-xs text-left">Please, write a message</p>}
                    <label
                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-300 transition-all duration-200 ease-out peer-focus:-translate-y-[0.5rem] peer-focus:scale-[0.8] peer-focus:text-gray-300 peer-focus:bg-teal-700 peer-focus:pt-0 peer-focus:px-2 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                        htmlFor="message">Messaage
                    </label>
                </div>
                <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                    <input
                        className="relative float-left mt-[0.15rem] checked:bg-teal-500 checked:border-gray-300 mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent "
                        type="checkbox" value="" id="exampleCheck96" defaultChecked />
                    <label className="inline-block pl-[0.15rem] hover:cursor-pointer text-gray-200" htmlFor="exampleCheck96">
                        Send me a copy of this message
                    </label>
                </div>
                <button disabled={isLoading} className="p-2 bg-teal-500 text-white text-center w-full rounded-sm flex justify-center items-center gap-x-1">
                    {
                        isLoading && <ImSpinner6 className="text-white text-lg animate-spin"/>
                    }
                    <span>Send</span>
                </button>
            </form>
        </div>
    );
};

export default ContactForm;