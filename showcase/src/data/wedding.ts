export const wedding = {
  couple: { groom: "Naman", bride: "Nitika" },
  date: "Thursday, 3 December 2026",
  dateShort: "Thursday · 03 · 12 · 2026",
  hostsEn: "Smt. Kavita & Late Sh. Vijender Singh",
  hostsHi: "श्रीमती कविता एवं स्व. श्री विजेंदर सिंह",
  brideParents: "D/o Smt. Meenakshi & Sh. Rajesh Deshwal",
  countdownLabel: "until the baraat",
  countdownAt: "2026-12-03T16:00:00+05:30",
  wishes: {
    afterInvite:
      "Your presence will grace our home and bless this new beginning.",
    afterEvents:
      "We warmly invite you to join us and share in our joy on this auspicious day.",
    afterRsvp:
      "Your blessings and good wishes mean the world to us — please honour us with your company.",
    footer:
      "With love and gratitude, we look forward to celebrating with you.",
  },
  events: [
    {
      id: "lunch",
      label: "Lunch",
      hindi: "प्रीतिभोज",
      time: "11:00 AM",
      where: "At our residence · Arya Nagar, behind Kajaria Showroom, Tehsil Road, Jhajjar",
      map: "https://www.google.com/maps/search/?api=1&query=Kajaria%20Tiles%20Exclusive%20Showroom%20-%20Rajasthan%20Tiles%20%26%20Bath%20World%2C%20Old%20Tehsil%20Rd%2C%20Jhajjar%2C%20Haryana%20124103",
      cal: {
        text: "Naman weds Nitika — Lunch",
        dates: "20261203T053000Z/20261203T083000Z",
        location:
          "Arya Nagar, behind Kajaria Showroom, Tehsil Road, Jhajjar, Haryana 124103",
      },
    },
    {
      id: "baraat",
      label: "Departure of Baraat",
      hindi: "बारात प्रस्थान",
      time: "4:00 PM",
      where: "From Jhajjar to Naveen Garden, near Gohana Bypass, Sonipat",
      map: "https://www.google.com/maps/search/?api=1&query=Naveen%20Garden%20near%20Gohana%20Bypass%20Sonipat%20Haryana",
      cal: {
        text: "Naman weds Nitika — Baraat departure",
        dates: "20261203T103000Z/20261203T173000Z",
        location: "Naveen Garden, near Gohana Bypass, Sonipat, Haryana",
      },
    },
  ],
  contacts: [
    { name: "Mohit Malhan", phone: "8930097828", display: "89300 97828" },
    { name: "Virender Malhan", phone: "8588872738", display: "85888 72738" },
    { name: "Siddharth Malhan", phone: "9050555547", display: "90505 55547" },
    { name: "Naman Malhan", phone: "7206611897", display: "72066 11897" },
  ],
  elders: [
    "Sh. Gajraj Singh",
    "Sh. Mahender Singh",
    "Sh. Azad Singh",
    "Sh. Surender Singh",
    "Sh. Amit",
    "Sh. Ashish",
  ],
  familyLine: "All Malhan's Family",
  assets: {
    ganesha: `${import.meta.env.BASE_URL}assets/ganesha-card.jpg`,
    radhaKrishna: `${import.meta.env.BASE_URL}assets/radha-krishna.jpg`,
    song: `${import.meta.env.BASE_URL}assets/song.mp3`,
    bloom: `${import.meta.env.BASE_URL}assets/bloom.svg`,
    marigold: `${import.meta.env.BASE_URL}assets/marigold.svg`,
  },
} as const;

type Cal = {
  text: string;
  dates: string;
  location: string;
};

export function calendarUrl(cal: Cal) {
  const u = new URL("https://calendar.google.com/calendar/render");
  u.searchParams.set("action", "TEMPLATE");
  u.searchParams.set("text", cal.text);
  u.searchParams.set("dates", cal.dates);
  u.searchParams.set("location", cal.location);
  return u.toString();
}
