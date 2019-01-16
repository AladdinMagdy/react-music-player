import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardAction,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from "@rmwc/card";

// import { Typography } from "@rmwc/typography";
import SmartTypography from "./SmartTypography";
import SmartCardMedia from "./SmartCardMedia";

import React, { Component } from "react";

export default class index extends Component {
  state = {
    template: "smart-card",
    children: [
      {
        template: "cardPrimaryAction",
        children: [
          {
            template: "cardMedia",
            data: {
              imageUrl:
                "https://material-components-web.appspot.com/images/16-9.jpg",
              ratio: "sixteenByNine"
            }
          },
          {
            template: "typography",
            data: { text: "Our Changing Planet", use: "headline6", tag: "h2" }
          },
          {
            template: "typography",
            data: { text: "Our Changing Planet", use: "headline6", tag: "h2" }
          }
        ]
      },
      {
        template: "cardActions",
        children: [
          {
            template: "cardActionButtons",
            children: [
              {
                template: "cardAction",
                data: {
                  type: "text",
                  text: "Read"
                }
              },
              {
                template: "cardAction",
                data: {
                  type: "text",
                  text: "Bookmark"
                }
              }
            ]
          },
          {
            template: "cardActionIcons",
            children: [
              {
                template: "cardAction",
                data: {
                  type: "icon",
                  currentState: "favorite",
                  toggledState: "favorite_border"
                }
              },
              {
                template: "cardAction",
                data: {
                  type: "icon",
                  currentState: "share"
                }
              },
              {
                template: "cardAction",
                data: {
                  type: "icon",
                  currentState: "more_vert"
                }
              }
            ]
          }
        ]
      }
    ]
  };

  render() {
    const sampleTypo = {
      template: "typography",
      data: { text: "Our Changing Planet", use: "headline6", tag: "h2" }
    };
    const sampleCardMedia = {
      template: "cardMedia",
      data: {
        imageUrl: "https://material-components-web.appspot.com/images/16-9.jpg",
        ratio: "sixteenByNine"
      }
    };
    const samplePrimaryActions = {
      template: "cardPrimaryAction",
      children: [
        {
          template: "cardMedia",
          data: {
            imageUrl:
              "https://material-components-web.appspot.com/images/16-9.jpg",
            ratio: "sixteenByNine"
          }
        },
        {
          template: "typography",
          data: { text: "Our Changing Planet", use: "headline6", tag: "h2" }
        },
        {
          template: "typography",
          data: { text: "Our Changing Planet", use: "headline6", tag: "h2" }
        }
      ]
    };
    return (
      <div>
        <Card style={{ width: "21rem" }}>
          <CardPrimaryAction>
            <SmartCardMedia data={sampleCardMedia.data} />
            <div style={{ padding: "0 1rem 1rem 1rem" }}>
              <SmartTypography data={sampleTypo.data} />
            </div>
          </CardPrimaryAction>
          <CardActions>
            <CardActionButtons>
              <CardAction>Read</CardAction>
              <CardAction>Bookmark</CardAction>
            </CardActionButtons>
            <CardActionIcons>
              <CardAction onIcon="favorite" icon="favorite_border" />
              <CardAction icon="share" />
              <CardAction icon="more_vert" />
            </CardActionIcons>
          </CardActions>
        </Card>
      </div>
    );
  }
}
