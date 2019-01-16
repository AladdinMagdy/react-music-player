import React, { Component } from "react";
import { CardMedia } from "@rmwc/card";

export default class SmartCardMedia extends Component {
  render() {
    return;
    <CardMedia
      sixteenByNine={
        this.props.data &&
        this.props.data.ratio &&
        this.props.data.ratio == "sixteenByNine"
      }
      style={{
        backgroundImage:
          "url(" + this.props.data && this.props.data.imageUrl + ")"
      }}
    />;
  }
}
