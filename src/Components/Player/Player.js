import "./Player.css";
import song from "./mp3/Kanye West - Father Stretch My Hands Pt. 1.mp3";
import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../Context/Context";

const Player = () => {
  const { isPlaying } = useContext(Context);
  const audioPlayer = useRef();
  console.log(audioPlayer.volume);
  audioPlayer.volume = 0.5;

  console.log(audioPlayer.currentTime);

  useEffect(() => {
    isPlaying && audioPlayer.current.play();
  }, [isPlaying]);

  return (
    <div className="player-wrapper">
      <audio src={song} ref={audioPlayer} volume={0.3} />
      <div className="progress" />
    </div>
  );
};

export default Player;
