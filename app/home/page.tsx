import Image from "next/image";
import Link from "next/link";
import { HeartHandshake, Lightbulb, UsersRound } from "lucide-react";
import { HeroCarousel } from "./hero-carousel";
import styles from "./home.module.css";

const missions = [
  { icon: Lightbulb, title: "Wisdom & Knowledge Platform", description: "A place to share insight, experience, and ideas across generations." },
  { icon: UsersRound, title: "Build a New Generation of Leaders", description: "Support curious engineers as they find their direction and grow." },
  { icon: HeartHandshake, title: "Pay It Forward Community", description: "Pass on what we learn and make room for the next generation." },
];

const activities = [
  { number: "01", title: "Mentoring", description: "Learn through conversations with people who have already travelled the road ahead.", image: "/kamp6/hero-mentoring.png", alt: "Illustrative mentorship conversation" },
  { number: "02", title: "Mentor Spotlight", description: "Get to know the people, choices, and stories behind their work.", image: "/kamp6/hero-collaboration.png", alt: "Illustrative engineering group conversation" },
  { number: "03", title: "Wisdom on the Road", description: "Step beyond the classroom and see engineering in the wider world.", image: "/kamp6/hero-workshop.png", alt: "Illustrative engineering workshop" },
  { number: "04", title: "KAMP Learning Space", description: "A welcoming space to explore ideas, ask questions, and learn together.", image: "/kamp6/hero-collaboration.png", alt: "Illustrative collaborative learning session" },
  { number: "05", title: "Workshop", description: "Turn curiosity into practice through hands-on learning.", image: "/kamp6/hero-workshop.png", alt: "Illustrative hands-on engineering activity" },
];

export default function HomePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.container}>
          <p className={styles.eyebrow}>KASETSART ALUMNI MENTORSHIP PROGRAM <span>•</span> ENGINEERING 6</p>
          <h1 id="hero-title" className={styles.heroMark}>KAMP<span>6</span></h1>
          <div className={styles.heroBottom}>
            <h2>Where wisdom empowers <em>potential.</em></h2>
            <div className={styles.heroAside}>
              <p>A space where engineering experience, curiosity, and people come together to shape what comes next.</p>
              <Link className={styles.primaryButton} href="#about">DISCOVER KAMP6 <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <HeroCarousel />
          <div className={styles.heroIndex}><span>KAMP ENGINEERING 6</span><span>SCROLL TO EXPLORE ↓</span></div>
        </div>
      </section>

      <div className={styles.ticker} aria-hidden="true"><div>WISDOM <b>✳</b> POTENTIAL <b>✳</b> COMMUNITY <b>✳</b> KAMP6 ENGINEERING <b>✳</b> WISDOM <b>✳</b> POTENTIAL</div></div>

      <section className={styles.about} id="about" aria-labelledby="about-title">
        <div className={styles.container}>
          <p className={styles.sectionLabel}>01 <span>/</span> WHAT IS KAMP?</p>
          <div className={styles.aboutHeading}>
            <h2 id="about-title">A platform for <em>connection.</em></h2>
            <p>KAMP stands for Kasetsart Alumni Mentorship Program. It connects engineering alumni, learners, and partners so experience can move forward.</p>
          </div>
          <div className={styles.connectionDiagram} aria-label="KAMP6 connects engineering alumni, the university community, and organizations">
            <div><span>01 / COMMUNITY</span><strong>Engineering alumni</strong></div>
            <div className={styles.diagramCore}><span>THE CONNECTION</span><strong>KAMP<span>6</span></strong><small>Wisdom empowers potential</small></div>
            <div><span>02 / PARTNERS</span><strong>University & organizations</strong></div>
          </div>
          <p className={styles.diagramNote}>Connecting people and perspectives across education, business, and the public and private sectors.</p>
        </div>
      </section>

      <section className={styles.mission} id="mission" aria-labelledby="mission-title">
        <div className={styles.container}>
          <p className={styles.sectionLabel}>02 <span>/</span> OUR MISSION</p>
          <div className={styles.missionHeading}><h2 id="mission-title">What moves us <em>forward.</em></h2><p>Three ideas at the heart of KAMP6 Engineering.</p></div>
          <div className={styles.missionGrid}>
            {missions.map(({ icon: Icon, title, description }, index) => (
              <article className={styles.missionCard} key={title}>
                <div className={styles.missionCardTop}><Icon size={42} strokeWidth={1.5} aria-hidden="true" /><span>0{index + 1}</span></div>
                <h3>{title}</h3><p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.activities} id="activities" aria-labelledby="activities-title">
        <div className={styles.container}>
          <p className={styles.sectionLabel}>03 <span>/</span> OUR ACTIVITIES</p>
          <div className={styles.activitiesHeading}><h2 id="activities-title">Experience the <em>possibilities.</em></h2><p>Five ways to learn, connect, and grow.</p></div>
          <div className={styles.activityList}>
            {activities.map((activity) => (
              <article className={styles.activityRow} key={activity.number}>
                <div className={styles.activityCopy}><span>{activity.number} / 05</span><h3>{activity.title}</h3><p>{activity.description}</p></div>
                <div className={styles.activityImage}><Image src={activity.image} alt={activity.alt} fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: "cover" }} /></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.mentors} id="mentors" aria-labelledby="mentors-title">
        <div className={styles.container}>
          <p className={styles.sectionLabel}>04 <span>/</span> KAMP ENGINEERING 6 MENTORS</p>
          <div className={styles.mentorsHeading}><h2 id="mentors-title">People who help <em>light the way.</em></h2><p>Mentor profiles will be added when the program team shares the official portraits and details.</p></div>
          <div className={styles.mentorRail} aria-label="Mentor profile placeholders">
            {Array.from({ length: 12 }, (_, index) => (
              <div className={styles.mentorCard} key={index}><div className={styles.mentorPortrait}><span aria-hidden="true">✳</span></div><span>MENTOR {String(index + 1).padStart(2, "0")}</span><p>Profile coming soon</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.organizations} aria-labelledby="organizations-title">
        <div className={styles.container}>
          <p className={styles.sectionLabel}>05 <span>/</span> OUR MENTORS&apos; ORGANIZATIONS</p>
          <div className={styles.organizationsBody}><h2 id="organizations-title">Experience across <em>many worlds.</em></h2><p>Organization logos will appear here after the team confirms the mentor roster and brand assets.</p></div>
          <div className={styles.logoSlots} aria-hidden="true">{Array.from({ length: 8 }, (_, index) => <span key={index}>LOGO</span>)}</div>
        </div>
      </section>

      <section className={styles.social} aria-labelledby="social-title">
        <div className={styles.container}>
          <p className={styles.sectionLabel}>06 <span>/</span> SOCIAL MEDIA</p>
          <div className={styles.socialBody}><h2 id="social-title">Stay in the <em>loop.</em></h2><p>Official KAMP6 social channels will be linked here when the team shares them.</p></div>
          <div className={styles.socialGrid}><div>FACEBOOK <span>LINK COMING SOON ↗</span></div><div>INSTAGRAM <span>LINK COMING SOON ↗</span></div><div>LINE <span>LINK COMING SOON ↗</span></div></div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <p className={styles.footerEyebrow}>PAY IT FORWARD</p>
          <h2>What we learn today<br /><em>moves others tomorrow.</em></h2>
          <Link className={styles.primaryButton} href="/app-guide">EXPLORE THE APP GUIDE <span aria-hidden="true">↗</span></Link>
          <div className={styles.footerBottom}><Link href="/home" aria-label="KAMP6 home">KAMP<span>6</span></Link><p>Where wisdom empowers potential.</p></div>
        </div>
      </footer>
    </main>
  );
}
