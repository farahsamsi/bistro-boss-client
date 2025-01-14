import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../SharedComponents/SectionTitle";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const ManageItems = () => {
  const [menu] = useMenu();

  const handleDeleteItem = (item) => {
    console.log(item);
  };

  const handleUpdate = (item) => {
    console.log(item);
  };
  return (
    <div>
      <SectionTitle
        heading="manage all items"
        subHeading="Hurry Up!"
      ></SectionTitle>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-black/5">
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={item._id} className="hover">
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={item?.image} alt={item?.name} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item?.name}</td>
                  <td>{item?.price}</td>
                  <td>
                    <button
                      onClick={() => handleUpdate(item)}
                      className="btn bg-orange-400  btn-xs "
                    >
                      <FaEdit className="text-white hover:text-black text-xl " />
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="btn btn-ghost btn-xs "
                    >
                      <FaTrashAlt
                        className="text-red-800 text-xl tooltip"
                        data-tip="hello"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
