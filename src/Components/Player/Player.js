import "./Player.css";
import song from "./mp3/Kanye West - Father Stretch My Hands Pt. 1.mp3";
import { useContext, useEffect, useRef } from "react";
import { Context } from "../../Context/Context";

const Player = () => {
  const { isPlaying, duration, setDuration } = useContext(Context);
  const audioPlayer = useRef();

  useEffect(() => {
    const audio = document.getElementById("audio");
    audio.volume = 0.1;
    isPlaying && audioPlayer.current.play();
  }, [isPlaying]);

  useEffect(() => {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    setDuration(progress);
    console.log(duration);
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  console.log(duration);

  return (
    <div className="player-wrapper">
      <audio src={song} ref={audioPlayer} id="audio" />
      <div className="progress" style={{ width: `${duration}%` }} />
    </div>
  );
};

export default Player;
