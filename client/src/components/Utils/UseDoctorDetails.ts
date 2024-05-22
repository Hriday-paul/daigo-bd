import { testType } from "@/app/(withHeader)/tests/page";
import { doctor } from "../Shared/HomeDoctors/HomeDoctors";

const UseDoctorDetails = async (id: string): Promise<doctor | null> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctors/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data: doctor = await response.json();
        return data;
    } catch (err) {
        console.error('Fetching error:', err);
        return null;
    }
};


export default UseDoctorDetails;