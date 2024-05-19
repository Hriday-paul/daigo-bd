import EmptyData from '@/components/Ui/EmptyData/EmptyData';
import React from 'react';
import { FaUserNurse } from 'react-icons/fa6';

const Profile = () => {
    return (
        <div>
            <div className="bg-[#262522] rounded-md p-2 mb-5 flex gap-x-3 items-center">
                <span className="p-2 bg-gradient-to-r from-[#14022b] to-[#1c043d] inline-block rounded-sm">
                    <FaUserNurse className="text-xl text-white "></FaUserNurse>
                </span>
                <h4 className="text-xl font-medium font-serif text-white">Profile</h4>
            </div>
            <EmptyData />
        </div>
    );
};

export default Profile;