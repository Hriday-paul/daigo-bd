'use client'
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa6";

type Inputs = {
    email: string
    password: string
}

const LoginClient = () => {
    const session = useSession();
    const router = useRouter();
    const [formLoading, setFormLoading] = useState<boolean>(false);
    const { status } = session;

    useEffect(() => {
        if (status === "unauthenticated") {
            console.log("No JWT");
            console.log(status);

        } else if (status === "authenticated") {
            router.push('/dashboard')
        }
    }, [status, router]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const handleRegister: SubmitHandler<Inputs> = (data) => {
        setFormLoading(true)

        signIn("credentials", { email: data.email, password: data.password, redirect: false })
            .then(async ({ ok, error }: any) => {
                console.log(error, ok)
                if (error === null) {
                    router.push("/dashboard");
                }
                if (error) {
                    toast.error("Check Your Email Or Password");
                }
                setFormLoading(false);
            })
    }

    return (
        <div className="register flex justify-center items-center min-h-screen bg-[#070806]">
            {
                formLoading && <div className="absolute bg-white bg-opacity-60 z-10 h-full w-full flex items-center justify-center">
                    <div className="flex items-center">
                        <div className="border-gray-300 h-10 w-10 animate-spin rounded-full border-8 border-t-teal-600" />
                    </div>
                </div>
            }
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center w/1/2 lg:w-[768px] bg-[#131412] rounded-md">
                <div className="py-12">
                    <h1 className="text-center">Sign In</h1>
                    <div className="social-container flex flex-row justify-center gap-x-2 items-center">
                        <div onClick={() => signIn('google')} className="p-2.5 border border-teal-400 rounded-full cursor-pointer">
                            <FaGoogle className="text-xl text-white" />
                        </div>
                        <div onClick={() => signIn('google')} className="p-2.5 border border-teal-400 rounded-full cursor-pointer">
                            <FaGithub className="text-xl text-white" />
                        </div>

                    </div>
                    <form onSubmit={handleSubmit(handleRegister)}>
                        <span>or use your email for login</span>

                        <input type="email" placeholder="Email" {...register("email", { required: { value: true, message: 'email is required' }, pattern: { value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: 'invalid email address' } })} />
                        {errors.email && <p className="text-red-500 text-xs text-left">{errors?.email?.message}</p>}

                        <input type="password" placeholder="Password" {...register("password", { required: { value: true, message: 'Password is required' }, pattern: { value: /(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/, message: 'use minimum 1 capital, 1 number and 1 special character & 6 length' }, minLength: { value: 6, message: 'min length 6' } })} />
                        {errors.password && <p className="text-red-500 text-xs text-left">{errors?.password?.message}</p>}

                        <button className="mt-5">Sign In</button>
                    </form>
                </div>
                <div className="bg-teal-500 h-full hidden lg:block">
                    <div className="flex justify-center items-center h-full mx-auto">
                        <div className="mx-auto px-10 flex flex-col justify-center">
                            <h1 className="text-center text-white">Welcome Back!</h1>
                            <p className="text-center text-white font-medium text-sm leading-5 m-5">To keep connected with us please login with your personal info</p>
                            <div className="mx-auto">
                                <Link href='/register'>
                                    <button className="ghost" id="signIn">Sign Up</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginClient;