import React, { useState, useEffect } from "react";
import "./Cafe.css";
import { sampleMenu } from "./data.js";

function CafeCustomer() {
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState({});
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    setMenu(sampleMenu);
  }, []);

  const addToCart = (id) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id) => {
    const newCart = { ...cart };
    delete newCart[id];
    setCart(newCart);
  };

  const total = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = menu.find((m) => m.id === id);
    return sum + (item ? item.price * qty : 0);
  }, 0);

  return (
    <div className="cafe-page container py-5">
      <h2 className="text-center mb-4 cafe-heading">☕ Café Menu</h2>

      <div className="row g-4">
        {menu.map((item) => (
          <div className="col-md-4" key={item.id}>
            <div className="card shadow-sm border-0 cafe-card h-100">
              <img
                src={item.image}
                alt={item.name}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.name}</h5>
                <p className="text-muted small mb-1">{item.category}</p>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <span className="fw-bold">₹{item.price}</span>
                  <button
                    className="btn btn-sm btn-cafe"
                    onClick={() => addToCart(item.id)}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating cart button */}
      <button
        className="btn btn-warning position-fixed bottom-0 end-0 m-4 shadow"
        onClick={() => setShowCart(true)}
      >
        🛒 Cart ({Object.values(cart).reduce((a, b) => a + b, 0)})
      </button>

      {/* Cart modal */}
      {showCart && (
        <div className="cart-overlay">
          <div className="cart-modal">
            <h4>Your Cart</h4>
            <hr />
            {Object.keys(cart).length === 0 ? (
              <p>No items added</p>
            ) : (
              <ul className="list-group mb-3">
                {Object.entries(cart).map(([id, qty]) => {
                  const item = menu.find((m) => m.id === id);
                  return (
                    <li
                      key={id}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      {item.name} × {qty}
                      <div>
                        <span>₹{item.price * qty}</span>
                        <button
                          className="btn btn-sm btn-outline-danger ms-3"
                          onClick={() => removeFromCart(id)}
                        >
                          ✕
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
            <div className="d-flex justify-content-between fw-bold">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
            <div className="text-end mt-3">
              <button
                className="btn btn-secondary me-2"
                onClick={() => setShowCart(false)}
              >
                Close
              </button>
              <button
                className="btn btn-cafe"
                onClick={() => alert("Order placed successfully!")}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CafeCustomer;
