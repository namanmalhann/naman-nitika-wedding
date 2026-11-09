import { useEffect } from "react";
import { Link } from "react-router-dom";
import { InviteSections } from "../components/InviteSections";
import { wedding } from "../data/wedding";
import { useMusic } from "../hooks/useMusic";
import "./aurora.css";

export function AuroraInvite() {
  const music = useMusic(wedding.assets.song);

  useEffect(() => {
    music.play();
  }, [music]);

  return (
    <div className="aur-root">
      <div className="aur-mesh" aria-hidden />
      <Link className="aur-back" to="/">
        ← All designs
      </Link>
      <button
        type="button"
        className="aur-music"
        aria-label="Music"
        onClick={music.toggle}
      />
      <div className="aur-stage">
        <section className="aur-glass aur-hero">
          <img src={wedding.assets.ganesha} alt="" />
          <p className="aur-eyebrow">Digital invitation</p>
          <h1>
            {wedding.couple.groom}
            <br />
            {wedding.couple.bride}
          </h1>
          <div className="line" />
          <p>{wedding.date}</p>
        </section>
        <InviteSections classPrefix="aur" />
      </div>
    </div>
  );
}
