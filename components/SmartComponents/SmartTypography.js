import React, { Component } from "react";

import { Typography } from "@rmwc/typography";

export default class SmartTypography extends Component {
  render() {
    // { text: "Our Changing Planet", use: "headline6", tag: "h2" }
    return (
      <Typography
        use={(this.props.data && this.props.data.use) || "body1"}
        tag={(this.props.data && this.props.data.tag) || "h2"}
      >
        {(this.props.data && this.props.data.text) || ""}
      </Typography>
    );
  }
}
