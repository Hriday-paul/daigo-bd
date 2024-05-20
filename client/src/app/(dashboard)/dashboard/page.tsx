import Private from '@/Provider/Private';
import AdminHome from '@/components/Shared/AdminDashboard/AdminHome/AdminHome';
import UserHome from '@/components/Shared/UserDashBoard/UserHome/UserHome';
import { AuthOptions } from '@/components/Utils/AuthOptions';
import UseVerifyadmin from '@/components/Utils/UseVerifyadmin';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';

const dashboardPage = async () => {
    const session = await getServerSession(AuthOptions);
    const { user } = session || {};
    if (!user) {
        redirect('/login');
    } else if (user.email) {
        const adminVerifyData = await UseVerifyadmin(user.email) as { admin: boolean };
        return (
            <div>
                {
                    adminVerifyData.admin ? <Private>
                        <AdminHome></AdminHome>
                    </Private> :
                        <Private>
                            <UserHome></UserHome>
                        </Private>
                }
            </div>
        );
    } else {
        redirect('/login');
    }
};

export default dashboardPage;