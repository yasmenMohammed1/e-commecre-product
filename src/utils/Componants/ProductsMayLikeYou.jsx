import React, { Component } from "react";
import "../Style/you-may-like.scss";
import { arrOfProducts } from "../Constants/arrayOfProducts";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import MiniProductCard from "./MiniProductCard";
export class ProductsMayLikeYou extends Component {
  slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 235;
  };

  slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 235;
  };
  render() {
    const { setCart } = this.props;
    return (
      <>
        <div className="trending">
          <div className="container">
            <div className="title-btns">
              <h3>you may also like</h3>
              <div className="btns">
                <button title="scroll left" onClick={this.slideLeft}>
                  <AiOutlineArrowLeft />
                </button>
                <button title="scroll right" onClick={this.slideRight}>
                  <AiOutlineArrowRight />
                </button>
              </div>
            </div>
            <div className="row-container" id="slider">
              {arrOfProducts.map((item) => (
                <MiniProductCard setCart={setCart} item={item} />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductsMayLikeYou;
