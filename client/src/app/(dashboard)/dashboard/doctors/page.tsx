import Private from "@/Provider/Private";
import AdminDoctors from "@/components/Shared/AdminDashboard/AdminDoctors/AdminDoctors";

const doctos = () => {
    return (
        <div>
            <Private>
                <AdminDoctors />
            </Private>
        </div>
    );
};

export default doctos;