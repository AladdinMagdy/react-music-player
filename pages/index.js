import React, { Component } from "react";
import SmartComponents from "../components/SmartComponents";

export default class index extends Component {
  render() {
    return (
      <div className="home-page">
        <div className="smartComponents">
          <SmartComponents />
        </div>
      </div>
    );
  }
}
