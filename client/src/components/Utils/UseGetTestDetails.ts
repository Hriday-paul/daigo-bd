import { testType } from "@/app/(withHeader)/tests/page";

const useGetTestDetails = async (id: string): Promise<testType | null> => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/test/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data: testType = await response.json();
        return data;
    } catch (err) {
        console.error('Fetching error:', err);
        return null;
    }
};

export default useGetTestDetails;
