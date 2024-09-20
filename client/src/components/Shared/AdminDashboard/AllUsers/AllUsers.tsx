'use client'
import ClientError from "@/components/Ui/ClientError/ClientError";
import ClientLoading from "@/components/Ui/ClientLoading/ClientLoading";
import { useAllUsersQuery } from "@/lib/features/Api/Api";
import { Button, Tooltip } from "antd";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { CiEdit } from "react-icons/ci";
import { LuUsers2 } from "react-icons/lu";


const AllUsers = () => {
    const { data } = useSession();
    const { isLoading, isError, data: users } = useAllUsersQuery({ email: data?.user?.email || '' });

    return (
        <div>
            <div className="bg-[#262522] rounded-md p-2 mb-5 flex gap-x-3 items-center">
                <span className="p-2 bg-gradient-to-r from-[#14022b] to-[#1c043d] inline-block rounded-sm">
                    <LuUsers2 className="text-xl text-white "></LuUsers2>
                </span>
                <h4 className="text-xl font-medium font-serif">All users</h4>
            </div>

            {
                isLoading ? <ClientLoading /> : isError ? <ClientError /> :
                    <div className="overflow-x-auto bg-[#262522]">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="border-[#494846] text-gray-200">
                                    <th>Photo</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                    <th>Set Status</th>
                                    {/* <th>Favorite Color</th>
                        <th></th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    users?.map((user) => {
                                        return <tr key={user?._id} className="border-[#494846]">
                                            <td >
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="rounded-full w-12 h-12">
                                                            
                                                            <Image height={200} width={200} className="h-12 w-auto rounded-full" src={user?.photo !== '' ? `${user?.photo}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUDOlaA7x6auc_yDvEigMgyktyrJBM34AFOaauo6-qXD5zg_vpZlZk9offXf9PMLdA0Lw&usqp=CAU"} alt="img" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-gray-300">
                                                {user?.name}
                                            </td>
                                            <td className="text-gray-300">
                                                {user?.email}
                                            </td>
                                            <td className="text-gray-300">
                                                {user?.status}
                                            </td>
                                            <td>
                                                <Tooltip title={`set ${user?.status == 'active' ? 'blocked' : 'active'} status`}>
                                                    <Button
                                                        style={{ backgroundColor: '#14022b', border: 0 }}
                                                        type="primary"
                                                        icon={<CiEdit />}

                                                    >
                                                    </Button>
                                                </Tooltip>
                                            </td>
                                        </tr>
                                    })
                                }


                            </tbody>
                        </table>
                    </div>
            }
        </div>
    );
};

export default AllUsers;