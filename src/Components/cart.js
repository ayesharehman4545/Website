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
    (sum, item) =>
      sum +
      (Number(item.price) || 0) *
        (Number(item.quantity) || 1),
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

        <h1 className="text-center fw-bold text-danger mb-5 pt-5">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <div className="text-center py-5">
            <h3>Your Cart Is Empty 😔</h3>
          </div>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="card border-0 shadow-sm mb-4"
                style={{
                  borderRadius: "20px",
                  overflow: "hidden"
                }}
              >
                <div className="row align-items-center p-3">

                  <div className="col-lg-2 col-md-3 col-12 text-center mb-3 mb-md-0">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="img-fluid"
                      style={{
                        width: "120px",
                        height: "120px",
                        objectFit: "cover",
                        borderRadius: "15px"
                      }}
                    />
                  </div>

                  <div className="col-lg-4 col-md-4 col-12">
                    <h4 className="fw-bold">
                      {item.name}
                    </h4>

                   <h5 className="text-danger">
                     Rs. {item.price}
                        </h5>
                  </div>

                  <div className="col-lg-3 col-md-3 col-12 text-center my-3 my-md-0">
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

                  <div className="col-lg-2 col-md-1 col-6 text-center">
                    <h5 className="fw-bold text-dark">
                      Rs.{" "}
                      {(Number(item.price) || 0) *
                        item.quantity}
                    </h5>
                  </div>

                  <div className="col-lg-1 col-md-1 col-6 text-center">
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

            <div
              className="card border-0 shadow p-4 mt-4"
              style={{
                borderRadius: "20px"
              }}
            >
              <div className="d-flex justify-content-between align-items-center flex-wrap">

                <h3 className="fw-bold">
                  Total:
                  <span className="text-danger ms-2">
                    Rs. {total}
                  </span>
                </h3>

                <button
                  className="btn btn-danger px-4 py-2 mt-2 mt-md-0"
                  style={{
                    borderRadius: "30px",
                    fontWeight: "600"
                  }}
                >
                  Proceed To Checkout
                </button>

              </div>
            </div>

          </>
        )}
      </div>
    </div>
  );
};

export default Cart;