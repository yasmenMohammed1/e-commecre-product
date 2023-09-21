import React, { Component } from "react";

export class ProductCard extends Component {
  render() {
    const { imageSrc, imageAlt, isMain, changeImage, inlineStyle } = this.props;
    return (
      <div
        className={isMain ? "main-image-container" : ""}
        onClick={changeImage}
      >
        <img
          style={inlineStyle}
          className="product-image"
          src={imageSrc}
          alt={imageAlt}
        />
      </div>
    );
  }
}

export default ProductCard;
