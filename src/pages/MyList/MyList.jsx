import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../utils/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [userProducts, setUserProducts] = useState([]);

  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:5000/products?email=${user?.email}`)
        .then((res) => {
          setUserProducts(res?.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user]);

  const handleDelete = (productId) => {
    axios
      .delete(`http://localhost:5000/products/${productId}`)
      .then((res) => {
        console.log(res.data);
        setUserProducts(
          userProducts.filter((product) => product._id !== productId)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center my-6 px-2">
      <div className="relative overflow-x-auto w-full shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Item Name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Rating
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {userProducts.map((product) => (
              <tr
                key={product._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="md:px-6 py-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </td>
                <td className="px-6 py-4">{product?.name}</td>
                <td className="px-6 py-4">${product?.price}</td>
                <td className="px-6 py-4">{product?.rating}</td>
                <td className="px-6 py-4">
                  <Link
                    to={{
                      pathname: "/updateProduct",
                      state: { product },
                    }}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyList;
