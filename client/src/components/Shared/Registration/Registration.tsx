'use client'

import { useCreatUserMutation } from "@/lib/features/Api/Api";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type Inputs = {
    name: string,
    email: string
    password: string
}

const Registration = () => {
    const session = useSession();
    const [creatUser, { isLoading, isError, isSuccess, error }] = useCreatUserMutation();
    const router = useRouter();
    const { status } = session;

    useEffect(() => {
        if (status === "unauthenticated") {
            console.log("No JWT");
            console.log(status);

        } else if (status === "authenticated") {
            void router.push('/login');
        }
    }, [status, router]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const handleRegister: SubmitHandler<Inputs> = (data) => {
        creatUser({
            ...data,
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUDOlaA7x6auc_yDvEigMgyktyrJBM34AFOaauo6-qXD5zg_vpZlZk9offXf9PMLdA0Lw&usqp=CAU',
            status: 'active'
        });
    };

    if (isError) {
        const errdata = error as { status: number | string; error?: string, data?: { msg: string } }
        if (errdata.status == 'FETCH_ERROR') {
            toast.error('Check your internet connection')
        }
        else if (errdata.status == 400) {
            toast.error(errdata?.data?.msg || 'Check your internet connection')
        }
        else toast.error('Something wrong, try again!')
    };

    if (isSuccess) {
        router.push('/login')
    }


    return (
        <div className="register flex justify-center items-center min-h-screen bg-[#070806]">
            {
                isLoading && <div className="absolute bg-white bg-opacity-60 z-10 h-full w-full flex items-center justify-center">
                    <div className="flex items-center">
                        <div className="border-gray-300 h-10 w-10 animate-spin rounded-full border-8 border-t-teal-600" />
                    </div>
                </div>
            }
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center w/1/2 lg:w-[768px] bg-[#131412] rounded-md">
                <div className="py-12">
                    <form onSubmit={handleSubmit(handleRegister)}>
                        <h1>Sign Up</h1>
                        <div className="social-container flex flex-row gap-x-2 items-center">
                            <div onClick={() => signIn('google')} className="p-2.5 border border-teal-400 rounded-full cursor-pointer">
                                <FaGoogle className="text-xl text-white" />
                            </div>
                            <div onClick={() => signIn('github')} className="p-2.5 border border-teal-400 rounded-full cursor-pointer">
                                <FaGithub className="text-xl text-white" />
                            </div>

                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" id="name" placeholder="Name" {...register("name", { required: true })} className="" />
                        {errors.name && <p className="text-red-500 text-xs text-left">Name is required</p>}
                        <input type="email" placeholder="Email" {...register("email", { required: true })} />
                        {errors.email && <p className="text-red-500 text-xs text-left">Email is required</p>}
                        <input type="password" placeholder="Password" {...register("password", { required: true, pattern: /(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/, minLength: 6 })} />
                        {errors.password && <p className="text-red-500 text-xs text-left">use minimum 1 capital, 1 number and 1 special character & 6 length</p>}
                        <button className="mt-5">Sign Up</button>
                    </form>
                </div>
                <div className="bg-teal-500 h-full hidden lg:block">
                    <div className="flex justify-center items-center h-full mx-auto">
                        <div className="mx-auto px-10 flex flex-col justify-center">
                            <h1 className="text-center text-white">Hello, Patient!</h1>
                            <p className="text-center text-white font-medium text-sm leading-5 m-5">Enter your personal details and start journey with us</p>
                            <div className="mx-auto">
                                <Link href='/login'><button className="ghost" id="signIn">Sign In</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default Registration;