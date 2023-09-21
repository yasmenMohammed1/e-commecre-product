import React, { Component } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import ProductCartCard from "./ProductCartCard";

import "../Style/cart.scss";
export class Cart extends Component {
  render() {
    const { cart, removeFromCart, closeCartMenu } = this.props;
    return (
      <div className="open-cart">
        <IoMdArrowDropup fill="white" className="arrow-cart" />
        <div className="cart-container">
          <section className="cart-title">
            <h4>Cart Count ({cart.length})</h4>
            <RxCross2
              onClick={() => {
                closeCartMenu();
              }}
            />
          </section>
          {cart.map((item, index) => (
            <ProductCartCard
              removeFromCart={removeFromCart}
              index={index}
              item={item}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Cart;
