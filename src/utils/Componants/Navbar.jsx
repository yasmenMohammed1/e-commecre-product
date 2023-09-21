import React, { Component } from "react";
import "../Style/navbar.scss";
import Cart from "./Cart";
export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCartOpen: false,
    };
    this.closeCartMenu = this.closeCartMenu.bind(this);
  }
  closeCartMenu() {
    this.setState((prevState) => ({
      isCartOpen: !prevState.isCartOpen,
    }));
  }
  navbarItems = [
    "products",
    "Best Seller",
    "New Arrival",
    "About Us",
    "Contact Us",
  ];
  render() {
    const { cart, removeFromCart } = this.props;
    return (
      <>
        <div className="navbar ">
          <img src="./images/AlignLeftText.png" alt="menu icon" />
          <img src="./images/logo.png" alt="logo" />
          <div className="navbar-items  ">
            {this.navbarItems.map((navbarItem) => (
              <a key={navbarItem} href={navbarItem}>
                {navbarItem}
              </a>
            ))}
          </div>
          <div className="col-md-3 icons-bar">
            <div>
              <img src="./images/search.png" alt="search icon" />
            </div>
            <div
              className="cart-icon"
              onClick={() => {
                this.setState((prevState) => ({
                  isCartOpen: !prevState.isCartOpen,
                }));
              }}
            >
              <p className="cart-count">{cart.length}</p>
              <img src="./images/cart.png" alt="cart icon" />
            </div>
            <div>
              <img src="./images/profile.png" alt="profile avatar" />
            </div>
          </div>
        </div>
        {this.state.isCartOpen && (
          <Cart
            closeCartMenu={this.closeCartMenu}
            removeFromCart={removeFromCart}
            cart={cart}
          />
        )}
      </>
    );
  }
}

export default Navbar;
