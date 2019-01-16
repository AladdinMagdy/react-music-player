import React, { Component } from "react";
import SmartComponents from "../components/SmartComponents";
// import "../scss/styles.scss";
// import "../scss/MusicPlayer.css";
// import MusicPlayer from "react-responsive-music-player";

export default class index extends Component {
  render() {
    return (
      <div>
        <div>Home Page</div>
        <div className="smartComponents">
          <SmartComponents />
        </div>
        {/* <MusicPlayer /> */}
      </div>
    );
  }
}
