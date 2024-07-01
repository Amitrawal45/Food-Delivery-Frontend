import React, { useContext, useEffect, useState } from "react";
import "./MyOrder.css";
import { StoreContext } from "../../context/storeContext";
import axios from "axios";
import { assets } from "../../assets/assets";

const MyOrder = () => {
  const { url, token } = useContext(StoreContext);

  const [data, setData] = useState([]);

  const fetchOrder = async () => {
    try {
      const response = await axios.post(
        `${url}/api/order/userorders`,
        {},
        { headers: { token } }
      );
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchOrder();
    }
  }, [token]);

  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      <div className="container">
        {data.map((order, index) => (
          <div className="my-orders-order" key={index}>
            <img src={assets.parcel_icon} alt="Parcel Icon" />
            <p>
              {order.items.map((item, itemIndex) => {
               if(itemIndex === order.items.length - 1) {
                return item.name+ " x "+item.quantity
               }
               else{
                return item.name+ " x "+item.quantity+" ,"
               }
              })}
            </p>
            <p>${order.amount}.00</p>
            <p>Items:{ order.items.length } </p>
            <p><span>&#x25cf;</span><b>{order.status}</b></p>
            <button onClick={fetchOrder}>Track Order</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrder;
