import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form"
import toast from "react-hot-toast";

type Inputs = {
    name: string;
    age: number;
    phone: string;
    blood: string | null;
}

const AppoinmentForm = ({ testId }: { testId: string }) => {
    const { status, data } = useSession();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>();

    const handleCreat: SubmitHandler<Inputs> = async (formData) => {
        const loadingToastId = toast.loading('Test Booking pending...');
        try {
            if(status == 'unauthenticated'){
                router.push('/login');
            }
            const date = `${new Date().getFullYear()}-${(new Date().getMonth() + 1)}-${new Date().getDate()}`;
            const output: any = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/addReservation`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, bookedDate: date, testId, email: data?.user?.email }),
            });
            const response = await output.json();
            
            if (response?.upsertedCount >= 1) {
                toast.success('Test Booked Complete', { id: loadingToastId });
            }
            else {
                toast.error("You already booked, don't try !", { id: loadingToastId })
            }
            reset();
        }
        catch (err) {
            console.log(err);
            toast.error("Error found !", { id: loadingToastId })
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
                    <input id="age" type="number" placeholder="age..." className={`w-full py-2 px-3 rounded-lg bg-gray-800 text-gray-300 border outline-0 ${errors.age ? ' border-red-500' : ' border-gray-600 focus:border-blue-500'}`}  {...register("age", { required: true })} />
                    {errors.age && <p className="text-red-500 text-sm">Age is required</p>}
                </div>

                <div>
                    <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-400">Contact number  <span className="text-red-500">*</span></label>
                    <input id="phone" type="number" placeholder="phone..." className={`w-full py-2 px-3 rounded-lg bg-gray-800 text-gray-300 border outline-0 ${errors.phone ? ' border-red-500' : ' border-gray-600 focus:border-blue-500'}`}  {...register("phone", { required: true })} />
                    {errors.phone && <p className="text-red-500 text-sm">Phone is required</p>}
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
                    <button type="submit" className="btn btn-info w-full bg-blue-500 text-white hover:bg-blue-600">
                        Book Now

                    </button>
                </div>
            </form>
        </div>
    );
};

export default AppoinmentForm;