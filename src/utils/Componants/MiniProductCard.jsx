import React, { Component } from "react";
import rotate from "../Images/rotate-icon.png";
import { AiTwotoneStar } from "react-icons/ai";
import heart from "../Images/heart-icon.png";
export class MiniProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rotation: 0,
    };
    this.rotate = this.rotate.bind(this);
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
  render() {
    const { item, setCart } = this.props;
    return (
      <div key={item.name} className="row-item">
        <div className="item-header">
          <img
            style={{ transform: `rotate(${this.state.rotation}deg)` }}
            src={item.image}
            alt="product"
            className="product-image"
          />
          <img
            onClick={this.rotate}
            className="rotate-icon"
            src={rotate}
            alt="rotate-icon"
          />
        </div>

        <div className="item-description">
          <p className="item-name">{item.name}</p>
          <p>{item.description}</p>
          <div>
            {[1, 2, 3, 4, 5].map((num) => (
              <AiTwotoneStar
                fontSize={20}
                fill={item.rate >= num ? "#feb801" : "inherit"}
              />
            ))}
          </div>
          <p className="item-price">{item.price}</p>
        </div>
        <div className="actions">
          <button className="add-to-cart" onClick={() => setCart(item)}>
            add to cart
          </button>
          <button className="favorite-btn">
            <img alt="heart-icon" src={heart} />
          </button>
        </div>
      </div>
    );
  }
}

export default MiniProductCard;
