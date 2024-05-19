'use client'
// import aos styles
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos'

const ScrollAnim = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        AOS.init({});
    }, []);
    return (
        <div>
            {children}
        </div>
    );
};

export default ScrollAnim;