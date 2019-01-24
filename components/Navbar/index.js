import React, { Component } from "react";
import Link from "../Link";
import "./Navbar.scss";

export default class Navbar extends Component {
  render() {
    return (
      <div className="mm-navbar">
        <Link href="/">
          <img
            src="/static/img/aHR0cHM6Ly9zdGFnaW5nLXN0cnVjdHVyZS5tb25kaWFtZWRpYS5jb20vdjAvYXBpL2ltYWdlLzViOWZhZjI3M2M1NjMwMjI1OWIwMzEwNV84Yjg3NzgxMDFhMzdjNDc5MzQwNWQ4MWUxNjFjNTA5Yi9pbWFnZS5qcGVnO2NhNzhmOTJkMGU0ZQ==.png"
            alt=""
          />
        </Link>
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
