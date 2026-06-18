import React from "react";
import { FaTrash } from "react-icons/fa";

const Cart = ({ cart, setCart }) => {

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      className="py-5"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom,#fff8f5,#ffffff)"
      }}
    >
      <div className="container">
        <h1 className="text-center fw-bold text-danger mb-5 py-5">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <div className="text-center">
            <h3>Your Cart Is Empty 😔</h3>
          </div>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="card border-0 shadow mb-4"
                style={{ borderRadius: "20px" }}
              >
                <div className="row g-0 align-items-center p-3">

                  <div className="col-md-3 text-center">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="img-fluid"
                      style={{
                        height: "140px",
                        width: "140px",
                        objectFit: "cover",
                        borderRadius: "15px",
                      }}
                    />
                  </div>

                  <div className="col-md-5">
                    <h4>{item.name}</h4>
                    <h5 className="text-danger">
                      Rs. {item.price}
                    </h5>
                  </div>

                  <div className="col-md-2 text-center">
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      <button
                        className="btn btn-outline-danger"
                        onClick={() =>
                          decreaseQty(item.id)
                        }
                      >
                        -
                      </button>

                      <span className="fw-bold fs-5">
                        {item.quantity}
                      </span>

                      <button
                        className="btn btn-outline-danger"
                        onClick={() =>
                          increaseQty(item.id)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="col-md-1 text-center">
                    <h5>
                      Rs.
                      {item.price * item.quantity}
                    </h5>
                  </div>

                  <div className="col-md-1 text-center">
                    <button
                      className="btn btn-danger"
                      onClick={() =>
                        removeItem(item.id)
                      }
                    >
                      <FaTrash />
                    </button>
                  </div>

                </div>
              </div>
            ))}

            <div className="card border-0 shadow p-4 mt-4">
              <h3 className="text-end">
                Total:
                <span className="text-danger">
                  {" "}
                  Rs. {total}
                </span>
              </h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;