import { useEffect } from "react";
import { Link } from "react-router-dom";
import { InviteSections } from "../components/InviteSections";
import { wedding } from "../data/wedding";
import { useMusic } from "../hooks/useMusic";
import "./saffron.css";

export function SaffronInvite() {
  const music = useMusic(wedding.assets.song);

  useEffect(() => {
    music.play();
  }, [music]);

  return (
    <div className="saf-root">
      <div className="saf-petals" aria-hidden />
      <Link className="saf-back" to="/">
        ← All designs
      </Link>
      <button
        type="button"
        className="saf-music"
        aria-label="Music"
        onClick={music.toggle}
      />
      <header className="saf-hero">
        <div className="saf-hero-card">
          <img src={wedding.assets.ganesha} alt="" />
          <span className="saf-chip">शुभ विवाह</span>
          <h1>
            {wedding.couple.groom} &amp; {wedding.couple.bride}
          </h1>
          <p className="sub">{wedding.date}</p>
          <p className="sub" style={{ marginTop: "0.5rem" }}>
            Lunch 11 AM · Baraat 4 PM
          </p>
        </div>
      </header>
      <div className="saf-body">
        <InviteSections classPrefix="saf" />
      </div>
    </div>
  );
}
