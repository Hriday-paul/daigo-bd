import React from 'react';
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { AuthOptions } from '@/components/Utils/AuthOptions';
import UseVerifyadmin from '@/components/Utils/UseVerifyadmin';
import AdminDashboard from '@/components/Shared/AdminDashboard/AdminDashboard';
import UserDashboard from '@/components/Shared/UserDashBoard/UserDashboard';

const dashboardLayoutRout = async ({ children }: { children: React.ReactNode }) => {
    const session = await getServerSession(AuthOptions);
    const { user } = session || {};
    if (!user) {
        redirect('/login');
    } else if (user.email) {
        const adminVerifyData = await UseVerifyadmin(user.email) as { admin: boolean };
        return (
            <div>
                {
                    adminVerifyData.admin ? <AdminDashboard>{children}</AdminDashboard> : <UserDashboard>{children} </UserDashboard>
                }
            </div>
        );
    } else {
        redirect('/login');
    }
};

export default dashboardLayoutRout;