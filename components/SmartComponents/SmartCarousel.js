import React, { Component } from "react";

import Swiper from "react-id-swiper";
import SmartCard from "./SmartCard";

import { Card, CardPrimaryAction, CardMedia } from "@rmwc/card";

import { Typography } from "@rmwc/typography";

import { PageConsumer } from "../Page";

export default class SmartCarousel extends Component {
  render() {
    const params = {
      spaceBetween: 30,
      slidesPerView: "auto"
    };

    const specs = [
      ...Object.keys(this.props.cardsOptions).map(arrKey => {
        if (arrKey === this.props.cards.card_1.customProperties.key) {
          // console.log(this.props.cardsOptions[arrKey]);
          return this.props.cardsOptions[arrKey];
        }
        return;
      })
    ][0];
    console.log(specs);

    return (
      <PageConsumer>
        {({ playingRadio, showPlayingRadioUrl }) => (
          <Swiper
            containerClass="swiper-container swiper-container-horizontal mm-swiper-custom"
            // rebuildOnUpdate
            shouldSwiperUpdate
            {...params}
            style={{ width: "80%" }}
          >
            {this.props.cards.card_1.objArr.map((card, index) => (
              //   <SmartCard key={card.title} data={card} />
              <Card
                key={card.title}
                style={{
                  //   width: "400px",
                  boxShadow: "none",
                  position: "relative",
                  ...specs
                }}
                onClick={e => {
                  e.preventDefault();
                  showPlayingRadioUrl(card.radioUrl);
                }}
              >
                <CardPrimaryAction>
                  <CardMedia
                    sixteenByNine
                    style={{
                      backgroundImage: `url(${card.imgUrl})`
                    }}
                  />
                  <Typography use="headline6" tag="h3">
                    {card.title}
                  </Typography>
                  <Typography
                    use="body1"
                    tag="div"
                    theme="text-secondary-on-background"
                    style={{ color: "#80828a" }}
                  >
                    {card.subTitle}
                  </Typography>
                </CardPrimaryAction>
              </Card>
            ))}
            {/* {this.props.children} */}
          </Swiper>
        )}
      </PageConsumer>
    );
  }
}
