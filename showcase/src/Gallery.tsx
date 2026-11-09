import { Link } from "react-router-dom";
import "./gallery.css";

const designs = [
  {
    id: "velvet",
    name: "Velvet Arch",
    tag: "Dark wine · temple doors · gold seal",
    mood: "Cinematic opening card",
  },
  {
    id: "saffron",
    name: "Saffron Garden",
    tag: "Ivory · marigold · fresh daylight",
    mood: "Soft & welcoming",
  },
  {
    id: "regal",
    name: "Midnight Regal",
    tag: "Navy · copper frame · royal reveal",
    mood: "Grand & formal",
  },
  {
    id: "aurora",
    name: "Aurora Glass",
    tag: "Gradient mesh · glass cards · glow",
    mood: "Modern & dreamy",
  },
] as const;

export function Gallery() {
  return (
    <div className="gal">
      <header className="gal-head">
        <p className="gal-om">॥ श्री गणेशाय नमः ॥</p>
        <h1>
          Naman <span>weds</span> Nitika
        </h1>
        <p className="gal-sub">Choose one of four invitation experiences</p>
        <p className="gal-date">Thursday, 3 December 2026 · Lunch 11 AM · Baraat 4 PM</p>
      </header>
      <section className="gal-grid">
        {designs.map((d, i) => (
          <Link key={d.id} className={`gal-card gal-${d.id}`} to={`/${d.id}`}>
            <span className="gal-num">0{i + 1}</span>
            <h2>{d.name}</h2>
            <p>{d.tag}</p>
            <small>{d.mood}</small>
            <span className="gal-cta">Open design →</span>
          </Link>
        ))}
      </section>
      <p className="gal-note">
        Classic single-page version:{" "}
        <a href={`${import.meta.env.BASE_URL}classic/index.html`}>Velvet (HTML)</a>
      </p>
    </div>
  );
}
