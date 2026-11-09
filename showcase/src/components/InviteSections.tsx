import { calendarUrl, wedding } from "../data/wedding";
import { useCountdown } from "../hooks/useCountdown";

type Props = { classPrefix?: string };

export function InviteSections({ classPrefix = "inv" }: Props) {
  const cd = useCountdown(wedding.countdownAt);
  const p = classPrefix;

  return (
    <>
      <section className={`${p}-sheet ${p}-arch`}>
        <p className={`${p}-om`}>॥ श्री गणेशाय नमः ॥</p>
        <p className={`${p}-shlok`}>
          वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।
          <br />
          निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥
        </p>
        <p className={`${p}-eyebrow`}>With the grace of Almighty</p>
        <p className={`${p}-hosts`}>{wedding.hostsEn}</p>
        <p className={`${p}-hosts-hi`}>{wedding.hostsHi}</p>
        <p className={`${p}-lead`}>
          request the pleasure of your company at the wedding of their son
        </p>
        <h2 className={`${p}-names`}>
          {wedding.couple.groom}
          <em>with</em>
          {wedding.couple.bride}
        </h2>
        <p className={`${p}-bride-of`}>{wedding.brideParents}</p>
        <div className={`${p}-clock`}>
          <div>
            <b>{cd.days}</b>
            <i>Days</i>
          </div>
          <div>
            <b>{cd.hours}</b>
            <i>Hours</i>
          </div>
          <div>
            <b>{cd.mins}</b>
            <i>Min</i>
          </div>
          <div>
            <b>{cd.secs}</b>
            <i>Sec</i>
          </div>
        </div>
        <p className={`${p}-kin`}>
          {cd.done ? "The baraat is on its way" : wedding.countdownLabel}
        </p>
        <p className={`${p}-wish`}>{wedding.wishes.afterInvite}</p>
      </section>

      <section className={`${p}-sheet`}>
        <figure className={`${p}-divine`}>
          <img src={wedding.assets.radhaKrishna} alt="" loading="lazy" />
        </figure>
        <p className={`${p}-divine-cap`}>राधे कृष्ण</p>
        <p className={`${p}-eyebrow`}>Golden Moments</p>
        <h2 className={`${p}-title`}>शुभ मुहूर्त</h2>
        <p className={`${p}-day`}>{wedding.date}</p>
        <div className={`${p}-moments`}>
          {wedding.events.map((ev) => (
            <article key={ev.id} className={`${p}-moment`}>
              <p className={`${p}-moment-label`}>{ev.label}</p>
              <h3>{ev.hindi}</h3>
              <p className={`${p}-moment-time`}>{ev.time}</p>
              <p className={`${p}-moment-where`}>{ev.where}</p>
              <div className={`${p}-links`}>
                <a href={ev.map} target="_blank" rel="noreferrer">
                  Map
                </a>
                <a href={calendarUrl(ev.cal)} target="_blank" rel="noreferrer">
                  Calendar
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className={`${p}-wish`}>{wedding.wishes.afterEvents}</p>
      </section>

      <section className={`${p}-sheet`}>
        <p className={`${p}-eyebrow`}>R.S.V.P.</p>
        <p className={`${p}-rsvp-hi`}>आपकी प्रतीक्षा में</p>
        <div className={`${p}-call`}>
          {wedding.contacts.map((c) => (
            <a key={c.phone} href={`tel:+91${c.phone}`}>
              <b>{c.name}</b>
              <span>{c.display}</span>
            </a>
          ))}
        </div>
        <p className={`${p}-elders`}>
          {wedding.elders.map((e, i) => (
            <span key={e}>
              {e}
              {i < wedding.elders.length - 1 ? " · " : ""}
            </span>
          ))}
        </p>
        <div className={`${p}-manuhar`}>
          <small>बाल मनुहार</small>
          <p>मेरे चाचू की शादी में ज़रूर आना</p>
          <b>Aariv Malhan</b>
        </div>
        <p className={`${p}-wish`}>{wedding.wishes.afterRsvp}</p>
      </section>

      <footer className={`${p}-end`}>
        <p className={`${p}-eyebrow`}>With best compliments from</p>
        <p className={`${p}-family`}>{wedding.familyLine}</p>
        <p className={`${p}-closing`}>{wedding.wishes.footer}</p>
        <p className={`${p}-sign`}>
          {wedding.couple.groom} &amp; {wedding.couple.bride}
        </p>
      </footer>
    </>
  );
}
