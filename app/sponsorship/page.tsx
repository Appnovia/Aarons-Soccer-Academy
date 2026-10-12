import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChartNoAxesCombined,
  Handshake,
  Megaphone,
  Trophy,
} from "lucide-react";
import Navbar from "../../components/navbar";
import SiteFooter from "../../components/site-footer";

const reasons = [
  {
    icon: Trophy,
    title: "Impact Lives",
    text: "Help young people gain skills, confidence and opportunities.",
  },
  {
    icon: Megaphone,
    title: "Brand Visibility",
    text: "Showcase your commitment to youth development and community growth.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Long-Term Value",
    text: "Support the next generation of football talent and future leaders.",
  },
];

const opportunities = [
  {
    icon: Trophy,
    title: "Team Sponsorship",
    text: "Support a team kit, travel and tournament participation.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Facility Support",
    text: "Help improve training grounds, equipment and facilities.",
  },
  {
    icon: Megaphone,
    title: "Program Sponsorship",
    text: "Fund coaching, education and life skills programs.",
  },
  {
    icon: Handshake,
    title: "Corporate Partnership",
    text: "Custom packages to fit your brand and goals.",
  },
];

export default function SponsorshipPage() {
  return (
    <>
      <Navbar />
      <main className="sponsorship-page">
        <section className="sponsorship-hero">
          <Image
            src="/sponsorship/sponsorship-hero.jpg"
            alt="Football training at Aaron's Soccer Academy"
            fill
            priority
            sizes="100vw"
          />
          <div className="sponsorship-hero__overlay" />
          <div className="sponsorship-hero__content">
            <p className="eyebrow">Sponsorship</p>
            <h1>Partner with Aaron&apos;s Soccer Academy</h1>
            <p>Invest in young talent. Build a stronger future.</p>
            <Link className="sponsorship-hero__button" href="#opportunities">
              Become a sponsor <ArrowRight size={17} />
            </Link>
          </div>
        </section>

        <section
          className="sponsor-reasons"
          aria-labelledby="sponsor-reasons-title"
        >
          <div className="sponsorship-section-heading">
            <p className="eyebrow">Why sponsor?</p>
            <h2 id="sponsor-reasons-title">Make a lasting impact</h2>
          </div>
          <div className="sponsor-reasons__grid">
            {reasons.map(({ icon: Icon, title, text }) => (
              <article className="sponsor-reason" key={title}>
                <Icon size={40} strokeWidth={1.6} />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="sponsor-opportunities"
          id="opportunities"
          aria-labelledby="opportunities-title"
        >
          <div className="sponsorship-section-heading">
            <p className="eyebrow">Sponsorship opportunities</p>
            <h2 id="opportunities-title">Choose your way to support</h2>
          </div>
          <div className="sponsor-opportunities__grid">
            {opportunities.map(({ icon: Icon, title, text }) => (
              <article className="sponsor-opportunity" key={title}>
                <Icon size={35} strokeWidth={1.7} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <a
            className="sponsor-opportunities__button"
            href="mailto:aaronsdevelopmentfoundation@gmail.com?subject=Sponsorship%20Enquiry"
          >
            Become a Sponsor <ArrowRight size={17} />
          </a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
