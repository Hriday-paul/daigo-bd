import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import toast from "react-hot-toast";
import { handleBookAppoinment } from "./Action";
import { ImSpinner2 } from "react-icons/im";

type Inputs = {
    name: string;
    age: number;
    phone: string;
    blood: string | null;
}

const AppoinmentForm = ({ testId }: { testId: string }) => {
    const { status, data } = useSession();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>();

    const handleCreat: SubmitHandler<Inputs> = async (formData) => {

        try {
            if (status == 'unauthenticated') {
                router.push('/login');
            }
            const date = `${new Date().getFullYear()}-${(new Date().getMonth() + 1)}-${new Date().getDate()}`;
            setIsLoading(true);
            
            const response : any = await handleBookAppoinment({ ...formData, bookedDate: date, testId, email: data?.user?.email });

            if (response?.upsertedCount >= 1) {
                toast.success('Test Booked Complete');
            }
            else {
                toast.error("You already booked, don't try !")
            }
            reset();
        }
        catch (err) {
            console.log(err);
            toast.error("Error found !")
        }
        finally{
            setIsLoading(false)
        }
    };


    return (
        <div>
            <form onSubmit={handleSubmit(handleCreat)} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-400">Patient name <span className="text-red-500">*</span></label>
                    <input id="name" type="text" placeholder="name..." className={`w-full py-2 px-3 rounded-lg bg-gray-800 text-gray-300 border outline-0 ${errors.name ? 'border border-red-500' : 'border border-gray-600 focus:border-blue-500'}`} {...register("name", { required: true })} />
                    {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
                </div>
                <div>
                    <label htmlFor="age" className="block mb-1 text-sm font-medium text-gray-400">patient Age <span className="text-red-500">*</span></label>
                    <input id="age" type="number" placeholder="age..." className={`w-full py-2 px-3 rounded-lg bg-gray-800 text-gray-300 border outline-0 ${errors.age ? ' border-red-500' : ' border-gray-600 focus:border-blue-500'}`}  {...register("age", { required: {value : true, message : 'Age is required'}, pattern : {value : /^(0|[1-9]\d*)(\.\d+)?$/, message : 'invalid age'}, min : {value : 10, message : 'min age is 10'}, max : {value : 70, message : 'max age is 70'} })} />
                    {errors.age && <p className="text-red-500 text-sm">{errors?.age?.message}</p>}
                </div>

                <div>
                    <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-400">Contact number  <span className="text-red-500">*</span></label>
                    <input id="phone" type="number" placeholder="phone..." className={`w-full py-2 px-3 rounded-lg bg-gray-800 text-gray-300 border outline-0 ${errors.phone ? ' border-red-500' : ' border-gray-600 focus:border-blue-500'}`}  {...register("phone", { required: {value : true, message : 'phone number required'}, pattern : {value : /^(\+?88)?01\d{9}$/, message : 'invalid phone number'} })} />
                    {errors.phone && <p className="text-red-500 text-sm">{errors?.phone?.message}</p>}
                </div>

                <div>
                    <label htmlFor="blood" className="block mb-1 text-sm font-medium text-gray-400">Blood  <span className="text-red-500">*</span></label>

                    <select id="blood" className={`w-full py-2 px-3 rounded-lg bg-gray-800 text-gray-300 border outline-0 ${errors.blood ? ' border-red-500' : ' border-gray-600 focus:border-blue-500'}`} {...register("blood", { required: true })}>

                        <option value="null">{"Don't Know"}</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                    </select>
                    {errors.blood && <p className="text-red-500 text-sm">Blood is required</p>}
                </div>


                <div className="col-span-1 md:col-span-2 my-2">
                    <button type="submit" disabled={isLoading} className="btn btn-info w-full bg-blue-500 text-white hover:bg-blue-600 flex justify-center items-center gap-x-1 disabled:cursor-not-allowed disabled:opacity-80">
                        {isLoading && <ImSpinner2 className="text-lg text-white animate-spin"/>}
                        Book Now
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AppoinmentForm;