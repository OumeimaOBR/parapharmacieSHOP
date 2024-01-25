import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addToCart,clearCart,decreaseCart,getTotals,removeFromCart,} from "../components/store/features/cartSlice";
export default function Cart() {

 
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);


  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Panier vide </p>
          <div className="start-shopping">
          </div>
        </div>
      ) : (
        <div>
           <div className="cart-items" >
            {cart.cartItems &&
              cart.cartItems.map((cartItem) => (
                <div className="cart-item" key={cartItem.id} style={{}}>
                  <div className="cart-product" >
                      <img src={cartItem.cover} alt={cartItem.cover} style={{border:'solid gray 1px'}}/>
                      <div style={{width:'100%'}}>
                      <div onClick={() => handleRemoveFromCart(cartItem)} style={{paddingLeft:'200px',  marginTop:'-15px', cursor:'pointer'}}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                          </svg>
                        </div>
                        <h5>{cartItem.name}</h5>
                        <div style={{display:'flex', position:'relative'}}>
                          <h5>{cartItem.cartQuantity} X </h5>
                          <h5 style={{marginLeft:'10px'}}>{cartItem.price} DT </h5>
                        </div>
                        <div className="cart-product-total-price">
                          <h5>
                            {cartItem.price * cartItem.cartQuantity} DT
                          </h5>
                  </div>
                      </div>
                  </div>
                  <div className="cart-product-quantity">
                    <button onClick={() => handleDecreaseCart(cartItem)}>
                      -
                    </button>
                    <div className="count">{cartItem.cartQuantity}</div>
                    <button onClick={() => handleAddToCart(cartItem)}>+</button>
                  </div>
                </div>
              ))}
      </div>
      <div className="cart-summary">
            <button className="clear-btn" onClick={() => handleClearCart()}>
              Clear Cart
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">{cart.cartTotalAmount} DT</span>
              </div>
            </div>
          </div>
        </div>
      )  
      }
    </div>
  )
}
