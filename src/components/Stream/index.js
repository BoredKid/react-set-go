import React from 'react';
import ReactTwitchEmbedVideo from 'react-twitch-embed-video';

const Stream = () => {
  return (
    <div className="streamContainer">
      <ReactTwitchEmbedVideo className="stream" channel="boredashellkid" theme="dark" height="80%" width="90%" />
    </div>
  );
};

export default Stream;
