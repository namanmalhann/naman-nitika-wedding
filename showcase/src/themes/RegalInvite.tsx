import { useState } from "react";
import { Link } from "react-router-dom";
import { InviteSections } from "../components/InviteSections";
import { wedding } from "../data/wedding";
import { useMusic } from "../hooks/useMusic";
import "./regal.css";

export function RegalInvite() {
  const [revealed, setRevealed] = useState(false);
  const music = useMusic(wedding.assets.song);

  const reveal = () => {
    setRevealed(true);
    music.play();
  };

  return (
    <div className="reg-root">
      <div className="reg-frame" aria-hidden />
      <Link className="reg-back" to="/">
        ← All designs
      </Link>
      <button
        type="button"
        className="reg-music"
        aria-label="Music"
        onClick={music.toggle}
      />
      <div className="reg-wrap">
        <div className="reg-crown">
          <img src={wedding.assets.ganesha} alt="" />
          <p className="reg-om">श्री गणेशाय नमः</p>
          <h1>
            {wedding.couple.groom}
            <span>weds</span>
            {wedding.couple.bride}
          </h1>
          <p>{wedding.dateShort}</p>
        </div>
        {!revealed ? (
          <button type="button" className="reg-open" onClick={reveal}>
            Unveil the royal invitation
          </button>
        ) : (
          <InviteSections classPrefix="reg" />
        )}
      </div>
    </div>
  );
}
