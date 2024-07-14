import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";

function OrderList() {
  const [allChecked, setAllChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});
  const [allOrders, setallOrders] = useState([]);

  const handleAllChecked = (event) => {
    const isChecked = event.target.checked;
    setAllChecked(isChecked);
    const newCheckedItems = {};
    allOrders.forEach((item) => {
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

  const handleDelete = (_id) => {
    console.log("Delete item with _id:", _id);
    // Implement delete functionality here
  };

  const getallOrders = async () => {
    try {
      const response = await axiosInstance.get("/order");
      if (response.data) {
        setallOrders(response.data);
      }
      console.log(response);
      console.log(response.data);
      console.log(response.data._id);
    } catch (error) {
      console.log("An unexpected error occurred. Please try again.");
    }
  };

  useEffect(() => {
    getallOrders();
  }, []);

  return (
    <div className="overflow-x-auto flex-[4_0_0%]">
      <table className="table">
        {/* head */}
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
            <th>UserID</th>
            <th>Product</th>
            <th>Purchase Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allOrders.map((item, index) => (
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
              <td>{item._id}</td>
              {/* <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={item.img} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{item.fullName}</div>
                    <div className="text-sm opacity-50">{item.country}</div> 
                  </div>
                </div>
              </td> */}
              <td>
                {item.products.productId}
                {/* <br />
                <span className="badge badge-ghost badge-sm">{item.email}</span> */}
              </td>
              <td>{item.purchaseDate}</td>
              <th>
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
        {/* foot */}
        <tfoot></tfoot>
      </table>
    </div>
  );
}

export default OrderList;
