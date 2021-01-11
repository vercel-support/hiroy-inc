import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';

// components.
import SafeHtml from '../components/SafeHtml';


type Link = {
  slug: string;
  name: string;
  link: string;
}

type Mp4 = {
  low: string;
  med: string;
  high: string;
}
type Ogg = {
  low: string;
}

interface Video {
  mp4: Mp4;
  ogg: Ogg;
}

export interface VideoProps {
  title: string;
  permalink: string;
  thumbnail: string;
  date: string;
  description: string;
  slides: string;
  speakers?: (Link)[] | null;
  event?: (Link)[] | null;
  language?: (Link)[] | null;
  tags?: (null)[] | null;
  category?: (Link)[] | null;
  year: Link;
  location: Link;
  producer?: (null)[] | null;
  video: Video;
}


const VideoPlayer : React.FC<VideoProps> = ({video, thumbnail, title, description}) => {
  const { mp4 } = video;
  const playerRef = useRef(null);

  useEffect(() => {
    const player = videojs(playerRef.current, 
      { 
        autoplay: false, 
        muted: true,
        controls: true,
        poster: thumbnail
      }, () => {
      player.src(mp4.med);
    });

    return () => {
      player.dispose();
    };
  }, []);

  return (
    <div className="flex flex-row items-stretch content-center video-wrapper mt-10 mb-10">
      <div className="w-1/4">
        <div data-vjs-player>
          <video ref={playerRef} className="video-js vjs-16-9" playsInline />
        </div>
      </div>
      <div className="w-3/4 pl-10 flex flex-col justify-center content-center">
        <div>
          <h4 className="font-bold text-xl">{title}</h4>
          <SafeHtml html={description} />
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer