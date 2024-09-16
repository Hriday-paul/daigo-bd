import UserDashboard from '@/components/Shared/UserDashBoard/UserDashboard';
import React from 'react';

const DashBoardLayout = ({children} : {children : React.ReactNode}) => {
    return (
        <div>
            <UserDashboard>
                {children}
            </UserDashboard>
        </div>
    );
};

export default DashBoardLayout;