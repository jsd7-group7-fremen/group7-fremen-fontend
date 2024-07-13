import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { Link } from "react-router-dom";

function ProductList() {
  const [allChecked, setAllChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});
  const [allProducts, setAllProducts] = useState([]);

  const handleAllChecked = (event) => {
    const isChecked = event.target.checked;
    setAllChecked(isChecked);
    const newCheckedItems = {};
    allProducts.forEach((item) => {
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

  //   const handleEdit = (_id) => {
  //     console.log("Edit item with _id:", _id);
  //     // Implement edit functionality here
  //   };

  const handleDelete = async (_id) => {
    console.log("Delete item with _id:", _id);
    try {
      const response = await axiosInstance.delete("/products/" + _id);
      console.log("response del =>", response);
      console.log("Delete success");
    } catch (error) {
      console.log("An unexpected error occurred. Please try again.");
    }
  };

  const getAllProducts = async () => {
    try {
      const response = await axiosInstance.get("/products");
      if (response.data) {
        setAllProducts(response.data.products);
      }
      console.log("response=>", response);
      console.log("response.data=>", response.data);
      console.log("response.data.products=>", response.data.products);
      //   console.log(
      //     "response.data.products=>",
      //     response.data.products.productImages.isometric
      //   );
    } catch (error) {
      console.log("An unexpected error occurred. Please try again.");
    }
  };

  useEffect(() => {
    getAllProducts();
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
            <th>Product</th>
            <th>Stock</th>
            <th>Status</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allProducts.map((item, index) => (
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
                        src={item.productImages.isometric}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{item.productName}</div>
                    {/* <div className="text-sm opacity-50">{item.country}</div> */}
                  </div>
                </div>
              </td>
              <td>
                {item.quantityInStock}
                {/* <br />
                <span className="badge badge-ghost badge-sm">{item.email}</span> */}
              </td>
              <td>{item.productStatus}</td>
              <td>{item.unitPrice}</td>
              <th>
                <Link
                  to={`edit/${item._id}`}
                  className="text-blue-500 hover:text-blue-700"
                >
                  edit
                </Link>
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

export default ProductList;
