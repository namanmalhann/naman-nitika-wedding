import { useState } from "react";
import { Link } from "react-router-dom";
import { InviteSections } from "../components/InviteSections";
import { wedding } from "../data/wedding";
import { useMusic } from "../hooks/useMusic";
import "./velvet.css";

export function VelvetInvite() {
  const [open, setOpen] = useState(false);
  const music = useMusic(wedding.assets.song);

  const onOpen = () => {
    setOpen(true);
    music.play();
  };

  return (
    <div className={`vel-root${open ? " is-open" : ""}`}>
      <div className="vel-glow" aria-hidden />
      <Link className="vel-back" to="/">
        ← All designs
      </Link>
      <button
        type="button"
        className="vel-music"
        aria-label="Music"
        onClick={music.toggle}
      />
      <div className="vel-veil">
        <div className="vel-door l" aria-hidden />
        <div className="vel-door r" aria-hidden />
        <button type="button" className="vel-cover" onClick={onOpen}>
          <p className="vel-om">॥ श्री गणेशाय नमः ॥</p>
          <div className="vel-ganesh">
            <img src={wedding.assets.ganesha} alt="" />
          </div>
          <p className="vel-om">शुभ विवाह</p>
          <h1>
            {wedding.couple.groom}
            <em>weds</em>
            {wedding.couple.bride}
          </h1>
          <p className="date">{wedding.dateShort}</p>
          <p style={{ marginTop: "0.8rem", fontSize: "0.65rem", letterSpacing: "0.3em", color: "#8d3d4c" }}>
            TAP TO OPEN
          </p>
        </button>
      </div>
      <main className="vel-story">
        <InviteSections classPrefix="vel" />
      </main>
    </div>
  );
}
