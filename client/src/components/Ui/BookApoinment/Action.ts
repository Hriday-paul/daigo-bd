'use server'

import { revalidateTag } from "next/cache";

type paramTypes = {
    name: string;
    age: number;
    phone: string;
    blood: string | null;
    bookedDate: string,
    testId: string,
    email: string | null | undefined
}

export const handleBookAppoinment = async (data: paramTypes) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/addReservation`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }
    revalidateTag(data?.testId)
    const json = await response.json();
    return json;
}