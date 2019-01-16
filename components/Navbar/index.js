import React, { Component } from "react";
import Link from "../Link";
import "./Navbar.scss";

export default class Navbar extends Component {
  render() {
    return (
      <div className="mm-navbar">
        <Link activeClassName="active" href="/">
          <a>home</a>
        </Link>
        <br />
        <Link activeClassName="active" href="/about">
          <a>about</a>
        </Link>
      </div>
    );
  }
}
