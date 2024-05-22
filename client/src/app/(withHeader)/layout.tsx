import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import { Toaster } from "react-hot-toast";


const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navbar />
            <Toaster position="top-right" reverseOrder={false}/>
            {children}
            <Footer />
        </div>
    );
};

export default layout;