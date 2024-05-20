import Private from '@/Provider/Private';
import TestResult from '@/components/Shared/UserDashBoard/TestResult/TestResult';
import React from 'react';

const ResultPage = () => {
    return (
        <div>
            <Private><TestResult /></Private>
        </div>
    );
};

export default ResultPage;