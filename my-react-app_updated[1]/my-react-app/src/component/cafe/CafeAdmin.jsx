import React, { useState, useEffect } from "react";
import "./Cafe.css";
import { sampleMenu, sampleOrders } from "./data.js";

function CafeAdmin() {
  const [menu, setMenu] = useState([]);
  const [orders, setOrders] = useState([]);
  const [view, setView] = useState("menu");

  useEffect(() => {
    setMenu(sampleMenu);
    setOrders(sampleOrders);
  }, []);

  const toggleAvailability = (id) => {
    setMenu((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, available: !item.available } : item
      )
    );
  };

  const changeStatus = (id, status) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, status } : o))
    );
  };

  const totalRevenue = orders
    .filter((o) => o.status === "completed")
    .reduce((sum, o) => sum + o.total, 0);

  return (
    <div className="container py-5 cafe-page">
      <h2 className="text-center cafe-heading">☕ Admin Dashboard</h2>

      <div className="text-center mb-4">
        <button
          className={`btn me-2 ${view === "menu" ? "btn-cafe" : "btn-outline-cafe"}`}
          onClick={() => setView("menu")}
        >
          Menu
        </button>
        <button
          className={`btn me-2 ${view === "orders" ? "btn-cafe" : "btn-outline-cafe"}`}
          onClick={() => setView("orders")}
        >
          Orders
        </button>
        <button
          className={`btn ${view === "analytics" ? "btn-cafe" : "btn-outline-cafe"}`}
          onClick={() => setView("analytics")}
        >
          Analytics
        </button>
      </div>

      {view === "menu" && (
        <div className="row g-4">
          {menu.map((item) => (
            <div className="col-md-4" key={item.id}>
              <div className="card shadow-sm border-0 cafe-card">
                <img
                  src={item.image}
                  alt={item.name}
                  className="card-img-top rounded-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5>{item.name}</h5>
                  <p className="text-muted small mb-1">{item.category}</p>
                  <p className="fw-bold mb-2">₹{item.price}</p>
                  <button
                    className={`btn btn-sm ${
                      item.available ? "btn-success" : "btn-danger"
                    }`}
                    onClick={() => toggleAvailability(item.id)}
                  >
                    {item.available ? "Available" : "Unavailable"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {view === "orders" && (
        <div className="table-responsive">
          <table className="table table-striped align-middle">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Status</th>
                <th>Change</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id}>
                  <td>{o.id}</td>
                  <td>{o.customer}</td>
                  <td>₹{o.total}</td>
                  <td>{o.status}</td>
                  <td>
                    <select
                      className="form-select form-select-sm"
                      value={o.status}
                      onChange={(e) => changeStatus(o.id, e.target.value)}
                    >
                      <option value="pending">Pending</option>
                      <option value="in_progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {view === "analytics" && (
        <div className="text-center">
          <h5>Total Completed Orders: {orders.filter((o) => o.status === "completed").length}</h5>
          <h5>Total Revenue: ₹{totalRevenue}</h5>
          <p className="text-muted mt-2">Connect this to FastAPI analytics later.</p>
        </div>
      )}
    </div>
  );
}

export default CafeAdmin;
