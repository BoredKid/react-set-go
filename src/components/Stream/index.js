import React from 'react';
import ReactTwitchEmbedVideo from 'react-twitch-embed-video';

const TWITCH_HEIGHT = window.innerHeight * 0.8;
const TWITCH_WIDTH = window.innerWidth - 20;

const Stream = () => {
  return (
    <div className="streamContainer">
      <ReactTwitchEmbedVideo
        className="stream"
        channel="boredashellkid"
        theme="dark"
        height={TWITCH_HEIGHT}
        width={TWITCH_WIDTH}
      />
    </div>
  );
};

export default Stream;
