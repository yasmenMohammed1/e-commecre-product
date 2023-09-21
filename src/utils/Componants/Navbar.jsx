import React, { Component } from "react";

export class Navbar extends Component {
  navbarItems = [
    "products",
    "Best Seller",
    "New Arrival",
    "About Us",
    "Contact Us",
  ];
  render() {
    return (
      <div className="navbar ">
        <img src="/images/AlignLeftText.png" alt="menu icon" />
        <img src="/images/logo.png" alt="logo" />
        <div className="navbar-items  ">
          {this.navbarItems.map((navbarItem) => (
            <a key={navbarItem} href={navbarItem}>
              {navbarItem}
            </a>
          ))}
        </div>
        <div className="col-md-3 icons-bar">
          <img src="/images/search.png" alt="search icon" />
          <img src="/images/cart.png" alt="cart icon" />
          <img src="/images/profile.png" alt="profile avatar" />
        </div>
      </div>
    );
  }
}

export default Navbar;
