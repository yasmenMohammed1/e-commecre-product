import React, { Component } from "react";
import "../utils/Style/fallback.scss";
export class FallBack extends Component {
  render() {
    const { percent } = this.props;
    return (
      <div className="fallback-container">
        <img src="./images/div-logo.png" alt="logo" />
        <div className="progress">
          <div className="progress__bar" style={{ width: `${percent}%` }}></div>
        </div>
      </div>
    );
  }
}

export default FallBack;
