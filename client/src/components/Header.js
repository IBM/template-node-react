import React, { Component } from "react";
import "./patterns.scss";

class Header extends Component {
  render() {
    const { title, subtitle } = this.props;
    return (
      <div className="bx--row pattern-description">
        <div className="bx--col-xs-12">
          <h1 className="pattern-title">{title}</h1>
          <div
            data-notification
            className="bx--inline-notification bx--inline-notification--info"
            role="alert"
          >
            <div className="bx--inline-notification__details">
              <svg
                className="bx--inline-notification__icon"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm1-3V7H7v6h2zM8 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              </svg>
              <div className="bx--inline-notification__text-wrapper">
                <p className="bx--inline-notification__title">{""}</p>
                <p className="bx--inline-notification__subtitle">{subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
