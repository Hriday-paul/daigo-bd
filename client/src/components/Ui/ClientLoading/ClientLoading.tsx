import React from 'react';
import {PulseLoader} from 'react-spinners'

const ClientLoading = () => {
    return (
        <div>
            <div className="flex justify-center items-center min-h-80 w-full ">
                <div className="mx-auto">
                    <PulseLoader
                        color="#ffffff"
                        size={10}
                        speedMultiplier={0.8}
                    />
                </div>
            </div>
        </div>
    );
};

export default ClientLoading;