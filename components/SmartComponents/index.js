import SmartCarousel from "./SmartCarousel";
import SmartCard from "./SmartCard";

import React, { Component } from "react";

export default class index extends Component {
  state = {
    smart_card_key: {
      option_1: {
        width: "400px",
        // width: "100px",
        padding: "5px"
        // padding: "2px"
      },
      option_2: {
        width: "300px-500px-70px",
        padding: "2px-5px-7px"
      }
    },

    cards: {
      card_1: {
        customProperties: {
          key: "option_1"
        },
        objArr: [
          {
            template: "smart-card",
            imgUrl: "/static/img/1.jpg",
            title: "Radio 702",
            subTitle:
              "Radio 702 is a Talk format radio station broadcasting from Johannesburg, So…",
            radioUrl: "http://18973.live.streamtheworld.com/FM702_SC",
            currentState: "stopped"
          },
          {
            template: "smart-card",
            imgUrl: "/static/img/2.jpg",
            title: "Kaya FM",
            subTitle:
              "Kaya FM was launched in August 1997, and was one of the first frequencies t…",
            radioUrl: "http://iceant.antfarm.co.za:8000/Kaya_MP3",
            currentState: "stopped"
          },
          {
            template: "smart-card",
            imgUrl: "/static/img/3.jpg",
            title: "KFM",
            subTitle:
              "KFM radio is an Adult Contemporary radio station broadcasting from Cape To…"
          },
          {
            template: "smart-card",
            imgUrl: "/static/img/4.jpg",
            title: "947",
            subTitle:
              "947 is a Contemporary radio station broadcasting from Johannesburg, South…"
          },
          {
            template: "smart-card",
            imgUrl: "/static/img/5.jpg",
            title: "Cape Talk",
            subTitle:
              "Cape Talk is a News/Talk format radio station based in Cape Town, South Afri…"
          },
          {
            template: "smart-card",
            imgUrl: "/static/img/6.jpg",
            title: "Jacaranda FM",
            subTitle:
              "Jacaranda FM is the biggest independent radio station in South Africa. It broa…"
          },
          {
            template: "smart-card",
            imgUrl: "/static/img/7.jpg",
            title: "East Coast Radio",
            subTitle:
              "With over 1.6 million listeners in KZN, East Coast Radio truly is the province's…"
          }
        ]
      }
    }
  };

  render() {
    return (
      <SmartCarousel
        cards={this.state.cards}
        cardsOptions={this.state.smart_card_key}
      >
        {/* {this.state.cards.map((card, index) => (
            <SmartCard key={card.title} data={card} />
          ))} */}
      </SmartCarousel>
    );
  }
}
