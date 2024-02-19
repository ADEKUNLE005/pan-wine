import React from "react";

import { useDispatch} from "react-redux";
import  { addToCart, decreaseCart } from "../../store/cartSlice";
import { Link } from "react-router-dom";

export function EventCard({
  image,
  amount,
  title,
  description,
  qty,
  ite,
  dat,
}) {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  const handlDecreaseCart = (item) => {
    dispatch(decreaseCart(item));
  };

  return (
    <div className="events-card-main">
      <img src={image} alt="Event displayed" className="event-image" />
      <div className="events-card-box1">
        <div className="b1-inner1">
          <p className="card-p1">{title}</p>
          <p className="card-p2">{description}</p>
        </div>

        <button onClick={() => handleAddToCart(ite)} className="add-c">
          <Link to={"/shoppinga"} className="cl-l">
            Add To Cart
          </Link>
        </button>
      </div>
      <div className="events-card-box2">
        <div className="counter">
          <div className="minus" onClick={() => handlDecreaseCart(ite)} >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 12H19"
                stroke="#411530"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div>
              <div >{qty}</div>
          </div>
          <div className="plus" onClick={() => handleAddToCart(ite)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 5V19M5 12H19"
                stroke="#411530"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="price">
          <div className="naira">₦</div>
          <div className="naira">
            <div>{amount}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ...


