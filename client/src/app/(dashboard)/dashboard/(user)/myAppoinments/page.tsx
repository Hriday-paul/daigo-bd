import Private from "@/Provider/Private";
import AppoinMents from "@/components/Shared/UserDashBoard/AppoinMents/AppoinMents";

const myAppoinmentsPage = () => {
    
    return (
        <div>
            <Private><AppoinMents /></Private>
        </div>
    );
};

export default myAppoinmentsPage;