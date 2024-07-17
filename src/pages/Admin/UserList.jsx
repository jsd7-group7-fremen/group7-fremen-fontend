import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { Link } from "react-router-dom";

function UserList() {
  const [allChecked, setAllChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});
  const [allUsers, setAllUsers] = useState([]);

  const handleAllChecked = (event) => {
    const isChecked = event.target.checked;
    setAllChecked(isChecked);
    const newCheckedItems = {};
    allUsers.forEach((item) => {
      newCheckedItems[item._id] = isChecked;
    });
    setCheckedItems(newCheckedItems);
  };

  const handleItemChecked = (event, _id) => {
    const isChecked = event.target.checked;
    setCheckedItems({
      ...checkedItems,
      [_id]: isChecked,
    });
  };

  // const handleEdit = (_id) => {
  //   console.log("Edit item with _id:", _id);
  //   // Implement edit functionality here
  // };

  const handleDelete = async (_id) => {
    console.log("Delete item with _id:", _id);
    try {
      const response = await axiosInstance.delete("/users/" + _id);
      console.log("response del =>", response);
      console.log("Delete success");
    } catch (error) {
      console.log("An unexpected error occurred. Please try again.");
    }
  };

  const getAllUsers = async () => {
    try {
      const response = await axiosInstance.get("/users");
      if (response.data) {
        setAllUsers(response.data);
      }
    } catch (error) {
      console.log("An unexpected error occurred. Please try again.");
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="overflow-x-auto flex-[4_0_0%]">
      <table className="table">
        <thead>
          <tr>
            <th>
              <label>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={allChecked}
                  onChange={handleAllChecked}
                />
              </label>
            </th>
            <th> </th>
            <th>User</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((item, index) => (
            <tr key={item._id}>
              <th>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={checkedItems[item._id] || false}
                    onChange={(e) => handleItemChecked(e, item._id)}
                  />
                </label>
              </th>
              <td>
                <div>{index}</div>
              </td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{item.fullName}</div>
                  </div>
                </div>
              </td>
              <td>{item.email}</td>
              <td>{item.userStatus}</td>
              <th>
                <Link to={`profile/${item._id}`}>View</Link>
                {/* <button
                  className="btn btn-ghost btn-xs"
                  onClick={() => handleEdit(item._id)}
                >
                  edit
                </button> */}
                <button
                  className="btn btn-ghost btn-xs"
                  onClick={() => handleDelete(item._id)}
                >
                  delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
}

export default UserList;
