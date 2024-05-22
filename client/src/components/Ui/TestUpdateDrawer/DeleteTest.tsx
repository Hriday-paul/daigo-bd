import { useDeleteTestMutation } from "@/lib/features/Api/Api";
import { Button, Tooltip } from "antd";
import toast from "react-hot-toast";
import { MdOutlineDelete } from "react-icons/md";


const DeleteTest = ({ id, admin }: { id: string, admin: string }) => {
    const [deletionSend, { isLoading, isError, isSuccess, error }] = useDeleteTestMutation();

    const delateTest = (id: string) => {
        deletionSend({ email: admin, id: id })
    }

    if (isError) {
        console.log(error);
        toast.error('delete failed, try again')
    }
    if (isSuccess) {
        toast.success('Delete successfully');
    }


    return (
        <div>
            <Tooltip title={`Delete test`}>
                <Button
                    style={{ backgroundColor: '#515150', color: 'white', border: 0 }}
                    type="primary"
                    icon={<MdOutlineDelete />}
                    onClick={() => delateTest(id)}
                >
                </Button>
            </Tooltip>
        </div>
    );
};

export default DeleteTest;