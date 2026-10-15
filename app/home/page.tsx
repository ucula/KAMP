import Link from "next/link";
import styles from "./home.module.css";

const principles = [
  ["01", "Learn from experience", "Discover practical lessons and fresh perspectives from people who have walked the path."],
  ["02", "Find your direction", "Explore possibilities in engineering and ask the questions that matter to you."],
  ["03", "Grow together", "Build meaningful connections with a community that shares your curiosity."],
];

const activities = [
  ["01", "Mentoring", "Learn through guidance and conversation."],
  ["02", "Mentor Spotlight", "Meet the people and stories behind the experience."],
  ["03", "Wisdom on the Road", "See engineering from a wider point of view."],
  ["04", "KAMP Learning Space", "Make room to explore, question, and grow."],
  ["05", "Workshop", "Turn curiosity into hands-on learning."],
];

export default function HomePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.container}>
          <p className={styles.eyebrow}>KAMP ENGINEERING <span>•</span> THE SIXTH CHAPTER</p>
          <h1 id="hero-title" className={styles.heroMark}>KAMP<span>6</span></h1>
          <div className={styles.heroBottom}>
            <h2>Where wisdom empowers <em>potential.</em></h2>
            <div className={styles.heroAside}>
              <p>A space to explore engineering, learn from experience, and take your next step with confidence.</p>
              <Link className={styles.primaryButton} href="#program">EXPLORE THE PROGRAM <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <div className={styles.heroIndex}><span>01 / 04</span><span>SCROLL TO EXPLORE ↓</span></div>
        </div>
      </section>
      <div className={styles.ticker} aria-hidden="true">
        <div>LEARN <b>✳</b> CONNECT <b>✳</b> GROW <b>✳</b> KAMP6 ENGINEERING <b>✳</b> LEARN <b>✳</b> CONNECT <b>✳</b> GROW</div>
      </div>
      <section className={styles.about} id="about" aria-labelledby="about-title">
        <div className={styles.container}>
          <p className={styles.sectionLabel}>01 <span>/</span> ABOUT KAMP6</p>
          <div className={styles.aboutHeading}>
            <h2 id="about-title">The next chapter <em>starts here.</em></h2>
            <p>KAMP6 Engineering brings learning, preparation, and meaningful connections into one place. It is built for people ready to discover what they can become.</p>
          </div>
          <div className={styles.principleGrid}>
            {principles.map(([number, title, body]) => (
              <article className={styles.principleCard} key={number}>
                <span>{number} /</span>
                <div><h3>{title}</h3><p>{body}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.program} id="program" aria-labelledby="program-title">
        <div className={styles.container}>
          <p className={styles.sectionLabel}>02 <span>/</span> THE KAMP6 EXPERIENCE</p>
          <div className={styles.programHeading}>
            <h2 id="program-title">Learn more.<br />Go further.</h2>
            <div>
              <p>From preparing your application to discovering real stories from engineering, every step is an opportunity to see a bigger picture.</p>
              <Link href="#activities">SEE OUR ACTIVITIES <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <div className={styles.programSteps}>
            <div><span>01 /</span><h3>Prepare</h3><p>Get familiar with the application journey and show your best self.</p></div>
            <div><span>02 /</span><h3>Experience</h3><p>Learn through activities, conversations, and new perspectives.</p></div>
            <div><span>03 /</span><h3>Connect</h3><p>Meet people who can help you imagine your next step.</p></div>
          </div>
        </div>
      </section>
      <section className={styles.activities} id="activities" aria-labelledby="activities-title">
        <div className={styles.container}>
          <p className={styles.sectionLabel}>03 <span>/</span> OUR ACTIVITIES</p>
          <h2 id="activities-title">Find your way <em>forward.</em></h2>
          <div className={styles.activityList}>
            {activities.map(([number, title, note]) => (
              <div className={styles.activityRow} key={number}>
                <span>{number}</span><h3>{title}</h3><p>{note}</p><span className={styles.activityArrow} aria-hidden="true">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p className={styles.footerEyebrow}>THE NEXT STEP IS YOURS</p>
          <h2>Ready to begin<br /><em>your journey?</em></h2>
          <Link className={styles.primaryButton} href="#about">DISCOVER KAMP6 <span aria-hidden="true">↗</span></Link>
          <div className={styles.footerBottom}><Link href="/home" aria-label="KAMP6 home">KAMP<span>6</span></Link><p>KAMP Engineering · Where wisdom empowers potential</p></div>
        </div>
      </footer>
    </main>
  );
}
