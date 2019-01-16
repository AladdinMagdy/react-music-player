import React, { Component } from "react";
// import MusicPlayer from "react-responsive-music-player";
import AudioPlayer from "react-h5-audio-player";
import Navbar from "../Navbar";

export default class Page extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>{this.props.children}</div>
        {/* <MusicPlayer /> */}
        <AudioPlayer
          autoPlay
          src="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"
          onPlay={e => console.log("onPlay")}
          // other props here
        />
      </div>
    );
  }
}
