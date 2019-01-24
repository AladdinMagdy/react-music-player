import React, { Component } from "react";

import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardAction,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from "@rmwc/card";

import { Typography } from "@rmwc/typography";

export default class SmartCard extends Component {
  render() {
    return (
      <Card style={{ width: "50rem", boxShadow: "none" }}>
        <CardPrimaryAction>
          <CardMedia
            sixteenByNine
            style={{
              backgroundImage:
                "url(https://material-components-web.appspot.com/images/16-9.jpg)"
            }}
          />
          <div style={{ padding: "0 1rem 1rem 1rem" }}>
            <Typography use="headline6" tag="h2">
              Our Changing Planet
            </Typography>
            <Typography
              use="subtitle2"
              tag="h3"
              theme="text-secondary-on-background"
              style={{ marginTop: "-1rem" }}
            >
              by Kurt Wagner
            </Typography>
            <Typography
              use="body1"
              tag="div"
              theme="text-secondary-on-background"
            >
              Visit ten places on our planet that are undergoing the biggest
              changes today.
            </Typography>
          </div>
        </CardPrimaryAction>
      </Card>
    );
  }
}
