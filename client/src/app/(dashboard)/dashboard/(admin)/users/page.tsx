import Private from '@/Provider/Private';
import AllUsers from '@/components/Shared/AdminDashboard/AllUsers/AllUsers';
import React from 'react';

const Allusers = () => {
    return (
        <div>
            <Private>
                <AllUsers />
            </Private>
        </div>
    );
};

export default Allusers;