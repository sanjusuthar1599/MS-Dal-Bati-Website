
// // eslint-disable-next-line no-unused-vars
// import React, { useContext } from "react";
// import "./Cart.css";
// // import { StoreContexts } from "../../component/context/storecontext";
// import { StoreContext } from "../../component/context/storecontext";

// const Cart = () => {
//   const values = useContext(StoreContext);

//   const { food_list, cartItem, addToCart, removeFromCart } = values;

//   return (
//     <div className="cart">
//       <div className="cart-items">
//         <div className="cart-items-title">
//             <span>Image</span>
//             <span>Title</span>
//             <span>Price</span>
//             <span>Quantity</span>
//             <span>Total</span>
//             <span>Remove</span>
//         </div>
//         <hr />

//         {food_list.map((item) => {
//           if (cartItem[item._id] > 0) {
//             return (
//               <div key={item._id} className="cart-item">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="cart-item-image"
//                 />
//                 <span>{item.name}</span>
//                 <span>${item.price}</span>
//                 <span>{cartItem[item._id]}</span>
//                 <span>${item.price * cartItem[item._id]}</span>
//                 <button onClick={() => removeFromCart(item._id)}>X</button>
//               </div>
//             );
//           }
//           return null;
//         })}
//       </div>

//       <div className="cart-button">
//         <div className="cart-total">
//           <h2>Cart Totals</h2>
//           <div>
//             <div className="cart-totle-details">
//               <p>Subtotal</p>
//               <p>{0}</p>
//             </div>
//             <hr />
//             <div className="cart-totle-details">
//               <p>Delivery Fee</p>
//               <p>{2}</p>
//             </div>
//             <hr />
//             <div className="cart-totle-details">
//               <p>Total</p>
//               <p>{0}</p>
//             </div>
//           </div>
//           <button>PROCEED TO CHECKOUT</button>
//         </div>
//         <div className="cart-promocode">
//           <div>
//             <p>if you have a promo code, Enter it here</p>
//             <div className="cart-promocode-input">
//               <input type="text" placeholder="promo code" />
//               <button>Submit</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;



import React, { useContext } from "react";
import "./Cart.css";
 import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../component/context/storecontext";

const Cart = () => {
  const values = useContext(StoreContext);
  const { food_list, cartItem, removeFromCart, getTotalCartAmount } = values;

  // total of itams order in sum //

  // const getSubtotal = () => {
  //   return food_list.reduce((acc, item) => {
  //     return acc + (cartItem[item._id] ? item.price * cartItem[item._id] : 0);
  //   }, 0);
  // };

  // const subtotal = getSubtotal();
  // const deliveryFee = 2;
  // const total = subtotal + deliveryFee;

// navigation use//

const navigate = useNavigate();


  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <span>Image</span>
          <span>Title</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Total</span>
          <span>Remove</span>
        </div>
        <hr />

        {food_list.map((item) => {
          if (cartItem[item._id] > 0) {
            return (
              <div key={item._id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
                <span>{cartItem[item._id]}</span>
                <span>${(item.price * cartItem[item._id]).toFixed(2)}</span>
                <span className="remove-item"onClick={() => removeFromCart(item._id)}>X</span>
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="cart-button">

        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 :2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ?0: getTotalCartAmount(2)+2}</b>
            </div>
          </div>
          <button onClick={() => navigate('/Order')}>PROCEED TO CHECKOUT</button>
        </div>


        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
