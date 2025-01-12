import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete user!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleMakeAdmin = (id) => {
    //  /users/admin/
    console.log(id);
  };

  return (
    <div>
      <div className="flex justify-evenly mb-9">
        <h2 className="text-4xl">All Users</h2>
        <h2 className="text-4xl">Total Users: {users.length}</h2>
      </div>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-black/5">
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn bg-orange-400  btn-xs "
                    >
                      <FaUsers
                        className="text-white hover:text-black text-xl tooltip"
                        data-tip="hello"
                      />
                    </button>
                  </td>
                  <th>
                    <button
                      onClick={() => handleDeleteUser(user._id)}
                      className="btn btn-ghost btn-xs "
                    >
                      <FaTrashAlt
                        className="text-red-800 text-xl tooltip"
                        data-tip="hello"
                      />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
