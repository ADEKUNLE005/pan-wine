import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CartNavbar.css";
import Button from "../../../Button/Button";
import { Link } from "react-router-dom";
import {
  addToCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../../../store/cartSlice";
function CartNavbar() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
  const handleRemoveFromCart = (cartItems) => {
    dispatch(removeFromCart(cartItems));
  };

  const handleaddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handlDecreaseCart = (item) => {
    dispatch(decreaseCart(item));
  };

  return (
    <div className="cc-container">
      {cart.cartItems.length === 0 ? (
        <div>
          <Cnav />
          <div className="c-tt">
            <p className="ca-p1">Your Shopping Cart is Empty</p>
            <p className="ca-p2">
              Explore our product page to add item(s) to your cart
            </p>
            <Link to={"/result"}>
              <Button title={"Explore Products"} btnClass={"ca-btn"} />
            </Link>
          </div>
        </div>
      ) : (
        <div className="cc-container">
          <p className="ca-p1">Shopping Cart</p>

          <div className="cb-container">
            <div className="title"></div>
            <div className="price"></div>
            <div className="qty"></div>
            <div className="total"></div>
          </div>
          <div className="cb-box1">
            <p className="cb-p1">Your Cart</p>
            <div className="cb-ibox">
              <div className="cb-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="24"
                  viewBox="0 0 28 24"
                  fill="none"
                >
                  <path
                    d="M26.8951 17.0145H8.30855L9.24178 15.2027L24.7477 15.1759C25.2721 15.1759 25.7215 14.8189 25.8152 14.325L27.9625 2.86798C28.0187 2.5675 27.9345 2.25809 27.7285 2.02306C27.6266 1.90739 27.4997 1.81421 27.3563 1.74999C27.2129 1.68578 27.0566 1.65206 26.8982 1.65117L7.17244 1.58869L7.0039 0.833023C6.89778 0.35106 6.44209 0 5.92398 0H1.10177C0.809564 0 0.529324 0.110646 0.322702 0.307598C0.116079 0.504549 0 0.771673 0 1.0502C0 1.32874 0.116079 1.59586 0.322702 1.79281C0.529324 1.98976 0.809564 2.10041 1.10177 2.10041H5.03132L5.76792 5.43845L7.58132 13.8074L5.24668 17.4399C5.12544 17.5959 5.05242 17.7811 5.03587 17.9746C5.01932 18.1681 5.05991 18.3621 5.15305 18.5348C5.34032 18.8888 5.71798 19.1119 6.13622 19.1119H8.09631C7.67844 19.641 7.45274 20.2854 7.45335 20.9476C7.45335 22.6315 8.88909 24 10.6557 24C12.4222 24 13.858 22.6315 13.858 20.9476C13.858 20.2841 13.627 19.6385 13.215 19.1119H18.2432C17.8254 19.641 17.5997 20.2854 17.6003 20.9476C17.6003 22.6315 19.036 24 20.8026 24C22.5692 24 24.0049 22.6315 24.0049 20.9476C24.0049 20.2841 23.7739 19.6385 23.3619 19.1119H26.8982C27.5037 19.1119 28 18.6419 28 18.0617C27.9982 17.7835 27.881 17.5172 27.674 17.321C27.467 17.1248 27.187 17.0147 26.8951 17.0145ZM7.63126 3.65935L25.6029 3.71588L23.8426 13.1112L9.72556 13.135L7.63126 3.65935ZM10.6557 21.8877C10.1126 21.8877 9.66938 21.4652 9.66938 20.9476C9.66938 20.4299 10.1126 20.0074 10.6557 20.0074C11.1988 20.0074 11.642 20.4299 11.642 20.9476C11.642 21.1969 11.538 21.436 11.3531 21.6123C11.1681 21.7886 10.9172 21.8877 10.6557 21.8877ZM20.8026 21.8877C20.2595 21.8877 19.8163 21.4652 19.8163 20.9476C19.8163 20.4299 20.2595 20.0074 20.8026 20.0074C21.3457 20.0074 21.7889 20.4299 21.7889 20.9476C21.7889 21.1969 21.685 21.436 21.5 21.6123C21.315 21.7886 21.0642 21.8877 20.8026 21.8877Z"
                    fill="#411530"
                  />
                </svg>
              </div>
              <div className="cb-iconp">2</div>
            </div>
          </div>
          <div className="cb-box2">
            <div className="cb-box2a">
              <p className="cb-p3">PRODUCTS</p>
            </div>
            <div className="cb-box2a">
              <p className="cb-p3">PRICE</p>
              <p className="cb-p3">QUANTITY</p>
              <p className="cb-p3">TOTAL</p>
            </div>
          </div>

          <div className="cb-wbox">
            {cart.cartItems?.map((cartItems) => (
              <div className="cb-box3" key={cartItems.id}>
                <div className="cb-box3a">
                  <img src={cartItems.image} alt="wine" className="cb-img" />
                  <p className="cb-p4">Amarone: Red Wine </p>
                  <p
                    className="cb-p4"
                    onClick={() => handleRemoveFromCart(cartItems)}
                  >
                    remove
                  </p>
                </div>
                <div className="cb-box3b">
                  <div className="cb-p4">$1200</div>
                  <div className="cb-plusbox">
                    <div
                      className="change-quantity"
                      onClick={() => handlDecreaseCart(cartItems)}
                    >
                      -
                    </div>

                    <div className="cb-mon">
                      <p className="mmm">{cartItems.cartQuantity}</p>
                    </div>
                    <div
                      className="change-quantity"
                      onClick={() => handleaddToCart(cartItems)}
                    >
                      +
                    </div>
                  </div>
                  <p className="cb-p4" id="cd-p5">
                    ${cartItems.amount * cartItems.cartQuantity}
                  </p>
                </div>
              </div>
            ))}

            <>
              <div className="cb-box4">
                <p className="cb-p3">DELIVERY</p>
                <p className="cb-p3" id="cd-p5">
                  $200
                </p>
              </div>
              <div className="cb-box4">
                <p className="cb-p3">GRAND TOTAL</p>
                <p className="cb-p3" id="cd-p5">
                  ${cart.cartTotalAmount}
                </p>
              </div>
              <Link to={"/result"} className="l-btn">
                <Button title={"Explore Products"} btnClass={"ca-bn"} />
              </Link>
              <Link to={"/shipping"} className="cb-l">
                <Button title={"SUBMIT ORDER"} btnClass={"cb-btn"} />
              </Link>
            </>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartNavbar;

export function Cnav() {
  return (
    <div className="cnav-main">
      <p className="cnav-p1">PanWines</p>
      <div className="cnav-box1">
        <p className="cnav-p2">Home</p>
        <p className="cnav-p2">Product</p>
        <div className="scart-box">
          <p className="cnav-p2">Shopping cart</p>
          <div className="s-cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="28"
              viewBox="0 0 32 28"
              fill="none"
            >
              <path
                d="M30.7373 19.8503H9.49549L10.562 17.7365L28.2831 17.7052C28.8824 17.7052 29.3961 17.2887 29.5031 16.7125L31.9572 3.34598C32.0214 2.99541 31.9251 2.63444 31.6897 2.36023C31.5733 2.22528 31.4282 2.11658 31.2643 2.04166C31.1005 1.96674 30.9219 1.9274 30.7408 1.92637L8.19708 1.85348L8.00446 0.971861C7.88318 0.40957 7.36239 0 6.77026 0H1.25917C0.925216 0 0.604942 0.129087 0.368802 0.358864C0.132662 0.588641 0 0.900285 0 1.22524C0 1.55019 0.132662 1.86184 0.368802 2.09161C0.604942 2.32139 0.925216 2.45048 1.25917 2.45048H5.75008L6.59191 6.34486L8.66436 16.1086L5.99621 20.3466C5.85765 20.5286 5.77419 20.7446 5.75528 20.9704C5.73637 21.1961 5.78276 21.4225 5.8892 21.6239C6.10322 22.0369 6.53483 22.2973 7.01282 22.2973H9.25293C8.77536 22.9145 8.51742 23.6662 8.51812 24.4388C8.51812 26.4034 10.159 28 12.1779 28C14.1969 28 15.8377 26.4034 15.8377 24.4388C15.8377 23.6648 15.5737 22.9116 15.1029 22.2973H20.8494C20.3718 22.9145 20.1139 23.6662 20.1146 24.4388C20.1146 26.4034 21.7554 28 23.7744 28C25.7933 28 27.4342 26.4034 27.4342 24.4388C27.4342 23.6648 27.1702 22.9116 26.6994 22.2973H30.7408C31.4328 22.2973 32 21.7489 32 21.072C31.9979 20.7474 31.864 20.4368 31.6274 20.2079C31.3909 19.979 31.0709 19.8504 30.7373 19.8503ZM8.72144 4.26925L29.2605 4.33519L27.2487 15.2964L11.1149 15.3242L8.72144 4.26925ZM12.1779 25.5356C11.5572 25.5356 11.0507 25.0428 11.0507 24.4388C11.0507 23.8349 11.5572 23.342 12.1779 23.342C12.7986 23.342 13.3051 23.8349 13.3051 24.4388C13.3051 24.7297 13.1863 25.0087 12.9749 25.2144C12.7636 25.4201 12.4769 25.5356 12.1779 25.5356ZM23.7744 25.5356C23.1537 25.5356 22.6472 25.0428 22.6472 24.4388C22.6472 23.8349 23.1537 23.342 23.7744 23.342C24.3951 23.342 24.9016 23.8349 24.9016 24.4388C24.9016 24.7297 24.7828 25.0087 24.5714 25.2144C24.36 25.4201 24.0733 25.5356 23.7744 25.5356Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="cart-p">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.091 10.1817C19.091 11.5319 18.5546 12.8268 17.5999 13.7815C16.6452 14.7363 15.3503 15.2726 14.0001 15.2726C12.6499 15.2726 11.355 14.7363 10.4003 13.7815C9.44554 12.8268 8.90918 11.5319 8.90918 10.1817C8.90918 8.83154 9.44554 7.53664 10.4003 6.58191C11.355 5.62718 12.6499 5.09082 14.0001 5.09082C15.3503 5.09082 16.6452 5.62718 17.5999 6.58191C18.5546 7.53664 19.091 8.83154 19.091 10.1817ZM16.5455 10.1817C16.5455 10.8568 16.2774 11.5043 15.8 11.9816C15.3226 12.459 14.6752 12.7272 14.0001 12.7272C13.325 12.7272 12.6775 12.459 12.2002 11.9816C11.7228 11.5043 11.4546 10.8568 11.4546 10.1817C11.4546 9.50663 11.7228 8.85919 12.2002 8.38182C12.6775 7.90446 13.325 7.63627 14.0001 7.63627C14.6752 7.63627 15.3226 7.90446 15.8 8.38182C16.2774 8.85919 16.5455 9.50663 16.5455 10.1817Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14 0C6.26818 0 0 6.26818 0 14C0 21.7318 6.26818 28 14 28C21.7318 28 28 21.7318 28 14C28 6.26818 21.7318 0 14 0ZM2.54545 14C2.54545 16.66 3.45291 19.1087 4.97382 21.0535C6.04193 19.6508 7.41987 18.514 9.00001 17.732C10.5801 16.95 12.3197 16.5439 14.0827 16.5455C15.823 16.5438 17.5406 16.9394 19.1048 17.7021C20.669 18.4648 22.0385 19.5744 23.1089 20.9465C24.2117 19.5002 24.9542 17.8121 25.275 16.0218C25.5958 14.2316 25.4856 12.3907 24.9537 10.6514C24.4218 8.91219 23.4834 7.32461 22.2161 6.02005C20.9488 4.71549 19.389 3.73146 17.6659 3.14937C15.9428 2.56729 14.1059 2.40389 12.3071 2.67269C10.5083 2.94149 8.79937 3.63477 7.32171 4.69516C5.84404 5.75555 4.64012 7.15256 3.80956 8.77061C2.97901 10.3887 2.54568 12.1812 2.54545 14ZM14 25.4545C11.3705 25.4585 8.82034 24.5539 6.78109 22.8938C7.60191 21.7188 8.69443 20.7594 9.9657 20.0972C11.237 19.4351 12.6494 19.0899 14.0827 19.0909C15.4982 19.0898 16.8935 19.4264 18.1528 20.0727C19.4121 20.7191 20.499 21.6565 21.3233 22.8073C19.2682 24.5213 16.676 25.4583 14 25.4545Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}
