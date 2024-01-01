import React, { Component } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { colors, siziesArr } from "../Constants/productContent";
export class ProductCartCard extends Component {
  render() {
    const { item, index, removeFromCart } = this.props;
    return (
      <div className="product-cart-card">
        <div>
          <img
            className="product-image"
            width={" 85px"}
            height={"98px"}
            src={item.image}
            alt={item.name}
          />
        </div>
        <div className="product-details">
          <h4>{item.name}</h4>
          <p>size:{item.size ? item.size : siziesArr[0]}</p>
          <p>color:{item.color ? item.color : colors[0]}</p>
          <p className="price">{item.price}</p>
        </div>

        <RiDeleteBin6Line
          onClick={() => removeFromCart(item, index)}
          className="delete-icon"
          fill="red"
        />
      </div>
    );
  }
}

export default ProductCartCard;
