import React, { Component } from "react";
// import MusicPlayer from "react-responsive-music-player";
import AudioPlayer from "react-h5-audio-player";
import Navbar from "../Navbar";

const PageContext = React.createContext();
export default class Page extends Component {
  state = {
    playingRadio: null
  };
  render() {
    return (
      <PageContext.Provider
        value={{
          playingRadio: this.state.playingRadio,
          showPlayingRadioUrl: radioUrl =>
            this.setState({
              playingRadio: radioUrl
            })
        }}
      >
        <div>
          <Navbar />
          {this.props.children}
          {/* <MusicPlayer /> */}
          <AudioPlayer
            autoPlay
            src={this.state.playingRadio || ""}
            onPlay={e => console.log("onPlay")}
            // other props here
          />
        </div>
      </PageContext.Provider>
    );
  }
}

const PageConsumer = PageContext.Consumer;
export { PageConsumer };
