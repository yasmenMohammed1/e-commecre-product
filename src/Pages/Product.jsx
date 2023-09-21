import React, { Component } from "react";

import ProductCard from "../utils/Componants/ProductCard";
import { AiTwotoneStar } from "react-icons/ai";

import { colors, siziesArr, srcArr } from "../utils/Constants/productContent";

import mainImg from "../utils/Images/main-product-main.png";

import heart from "../utils/Images/heart-icon.png";
import video from "../utils/Images/video-icon.png";
import share from "../utils/Images/share-icon.png";

import rotate from "../utils/Images/rotate.png";

import "../utils/Style/product.scss";
import ProductsMayLikeYou from "../utils/Componants/ProductsMayLikeYou";
export class Product extends Component {
  rate = 3;
  constructor(props) {
    super(props);
    this.state = {
      mainImage: mainImg,
      rotation: 0,
      size: siziesArr[0],

      color: colors[0],
      count: 1,
    };
    this.rotate = this.rotate.bind(this);
    this.changeColor = this.changeColor.bind(this);

    this.changeImage = this.changeImage.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  changeColor(color) {
    this.setState((prevState) => ({ ...prevState, color }));
  }
  rotate() {
    let newRotation = this.state.rotation + 180;
    if (newRotation >= 360) {
      newRotation = -360;
    }
    this.setState((prevState) => ({
      ...prevState,
      rotation: newRotation,
    }));
  }

  changeImage(src) {
    this.setState((prevState) => ({ ...prevState, mainImage: src }));
  }

  changeSize(size) {
    this.setState((prevState) => ({ ...prevState, size: size }));
  }

  increment() {
    this.setState((prevState) => {
      return { ...prevState, count: prevState.count + 1 };
    });
  }

  decrement() {
    this.setState((prevState) => ({
      ...prevState,
      count: prevState.count - 1,
    }));
  }
  render() {
    const { setCart } = this.props;
    return (
      <div>
        <div className="header-title">
          <p>Home / All rugs / Kilim & tulu / Name of product</p>
        </div>

        <div className="product-card">
          <div className="product-image-slider">
            {srcArr.map((img) => (
              <ProductCard
                imageSrc={img}
                imageAlt={"alt"}
                changeImage={() => {
                  this.changeImage(img);
                }}
              />
            ))}
          </div>
          <div className="product-main-image">
            <ProductCard
              isMain
              inlineStyle={{ transform: `rotate(${this.state.rotation}deg)` }}
              imageSrc={this.state.mainImage}
              imageAlt={"alt"}
            />
          </div>
          <div className="product-details">
            <div className="product-title">
              <div>
                <p> </p>
                <div>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <AiTwotoneStar
                      fill={this.rate >= num ? "#feb801" : "inherit"}
                    />
                  ))}
                </div>
              </div>
              <img
                onClick={this.rotate}
                src={rotate}
                alt="rotate image 360deg"
              />
            </div>
            <div className="row">
              <p>3000 EP</p>
              <p className="text-underlined">3560 EGP</p>
            </div>
            <p className="product-description">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley
            </p>
            <div className="choices-section">
              <p>Size</p>

              {siziesArr.map((element) => (
                <button
                  onClick={() => this.changeSize(element)}
                  className={`size-btn ${
                    this.state.size === element ? "selected" : ""
                  }`}
                >
                  {element}
                </button>
              ))}
            </div>
            <div className="choices-section">
              <p>Color</p>

              {colors.map((color) => (
                <button
                  style={{ backgroundColor: color }}
                  onClick={() => this.changeColor(color)}
                  className={`size-btn color-btn ${
                    this.state.color === color ? "selected" : ""
                  }`}
                ></button>
              ))}
            </div>
            <div className=" actions-btns">
              <div className="product-count">
                <button onClick={this.increment}>+ </button>
                {this.state.count}
                <button
                  onClick={this.decrement}
                  disabled={this.state.count === 1}
                >
                  -
                </button>
              </div>
              <button
                onClick={() => {
                  console.log(this.state.count);
                  for (let index = 0; index < this.state.count; index++) {
                    setCart({
                      ...this.state,
                      name: "f3553es",
                      image: this.state.mainImage,
                    });
                  }
                }}
                className="add-to-cart"
              >
                buy now
              </button>
            </div>
            <div className=" actions-btns multiple">
              <div className="action-section">
                <img alt="favorite-icon" src={heart} />
                <p>add to wishlist</p>
              </div>
              <div className="action-section">
                <img alt="video-icon" src={video} />
                <p>video call</p>
              </div>
              <div className="action-section">
                <img alt="share-icon" className="share-icon" src={share} />
                <p>share</p>
              </div>
            </div>
          </div>
        </div>

        <ProductsMayLikeYou setCart={setCart} />
      </div>
    );
  }
}

export default Product;
