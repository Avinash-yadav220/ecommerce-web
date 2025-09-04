



import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const OrdersPage = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user) return;  // Wait for user info to be available

    if (user.role === "admin") {
      const fetchOrders = async () => {
        try {
          const token = localStorage.getItem("token");
          const response = await axios.get("http://localhost:5000/api/orders/all", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setOrders(response.data);
          setLoading(false);
        } catch (err) {
          setError("Failed to load orders.");
          setLoading(false);
        }
      };
      fetchOrders();
    } else {
      setLoading(false);
      setError("Access Denied. Admins only.");
    }
  }, [user]);

  if (!user) return <p>Loading user info...</p>;
  if (loading) return <p>Loading orders...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>All Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order._id} style={{ marginBottom: "1rem" }}>
              <strong>User:</strong> {order.userId?.name || "Unknown"} <br />
              <strong>Total:</strong> ₹{order.totalAmount} <br />
              <strong>Date:</strong> {new Date(order.createdAt).toLocaleString()} <br />
              <strong>Items:</strong>
              <ul>
                {order.Items.map((item) => (
                  <li key={item.productId._id}>
                    {item.name} - Quantity: {item.quantity}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrdersPage;
