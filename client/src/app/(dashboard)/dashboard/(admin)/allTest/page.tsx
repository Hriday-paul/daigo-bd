
import Private from '@/Provider/Private';
import AllTest from '@/components/Shared/AdminDashboard/AllTest/AllTest';
import React from 'react';

const AllTestPage = () => {
    return (
        <div>
            <Private>
                <AllTest />
            </Private>
        </div>
    );
};

export default AllTestPage;