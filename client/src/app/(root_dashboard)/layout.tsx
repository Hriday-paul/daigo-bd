import { Toaster } from "react-hot-toast";

const Dashboardlayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Toaster />
            {children}
        </div>
    );
};

export default Dashboardlayout;