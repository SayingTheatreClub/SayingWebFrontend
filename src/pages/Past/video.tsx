import React, { FC } from "react";

export type pastVideo = { name: string; url: string };

interface VideoDisplayerProps {
  mainVideo: string;
  videos: Array<pastVideo>;
}

export const VideoDisplayer: FC<VideoDisplayerProps> = (props) => {
  const { videos } = props;
  return (
    <div className="video-displayer-wrapper">
      <iframe
        src="https://www.youtube.com/embed/hhGodhDvVCk"
        scrolling="no"
        title="rose"
        className="video-displayer-main"
      />
      <div className="video-displayer-right">
        {videos.map((item) => (
          <div>
            <div>{item.name}</div>
            <iframe
              src="https://www.youtube.com/embed/hhGodhDvVCk"
              scrolling="no"
              title="rose"
              width="139"
              height="110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
