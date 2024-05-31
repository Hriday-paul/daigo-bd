import Private from '@/Provider/Private';
import Reservation from '@/components/Shared/AdminDashboard/Reservation/ReservationList';
import React from 'react';

const rereservation = () => {
    return (
        <div>
            <Private>
                <Reservation />
            </Private>
        </div>
    );
};

export default rereservation;