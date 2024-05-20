'use client'
import ClientLoading from "@/components/Ui/ClientLoading/ClientLoading";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


const Private = ({ children }: { children: React.ReactNode }) => {
    const { status, data } = useSession();
    const router = useRouter();
    if (status === 'loading') {
        return <ClientLoading />
    }
    else if (status === 'authenticated') {
        return children;
    }
    else {
        router.push('/login')
    }
};

export default Private;