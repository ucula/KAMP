import Link from "next/link";
import { ArrowUpRight, Compass, Heart, Lightbulb, Rocket } from "lucide-react";
import styles from "../inner.module.css";

const values = [
  { icon: Lightbulb, title: "Curiosity", body: "Eager to learn and explore real problems." },
  { icon: Rocket, title: "Initiative", body: "Takes action and follows through." },
  { icon: Compass, title: "Coachability", body: "Welcomes feedback with an open mind." },
  { icon: Heart, title: "Community", body: "Cares about lifting up peers and alumni." },
];

const prompts = [
  { number: "01", title: "Origin & Passion", question: "What sparked your engineering passion and challenged you most?", note: "Look for genuine curiosity and a real story of learning." },
  { number: "02", title: "Vision & Goals", question: "Where do you envision yourself in three years, and how can mentorship help?", note: "Think about your direction and what you hope to learn." },
  { number: "03", title: "Giving Back", question: "How do you plan to support your engineering peers?", note: "Show how you share ideas, care for others, or contribute." },
  { number: "04", title: "Video Pitch", question: "Share an engineering principle or idea you find genuinely exciting.", note: "Your interest matters more than polished production." },
];

export default function AppGuidePage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section className={styles.hero} aria-labelledby="guide-title">
          <p className={styles.eyebrow}>KAMP6 ENGINEERING / APP GUIDE</p>
          <h1 id="guide-title">Your story starts <em>here.</em></h1>
          <p className={styles.lead}>KAMP6 is interested in the person behind the grades: your curiosity, your willingness to learn, and how you hope to grow with others.</p>
        </section>

        <section className={styles.section} aria-labelledby="values-title">
          <div className={styles.sectionHeader}><p>01 / WHAT WE VALUE</p><h2 id="values-title">Who are we looking for?</h2><span>Potential and a desire to learn matter here.</span></div>
          <div className={styles.valueGrid}>
            {values.map(({ icon: Icon, title, body }) => <article className={styles.valueCard} key={title}><Icon size={31} strokeWidth={1.7} aria-hidden="true" /><h3>{title}</h3><p>{body}</p></article>)}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="prompts-title">
          <div className={styles.sectionHeader}><p>02 / APPLICATION BREAKDOWN</p><h2 id="prompts-title">Questions worth thinking through.</h2><span>Example prompts from the brief. The final wording may change.</span></div>
          <div className={styles.promptGrid}>
            {prompts.map(({ number, title, question, note }) => <article className={styles.promptCard} key={number}><span>{number}</span><h3>{title}</h3><blockquote>“{question}”</blockquote><p>{note}</p></article>)}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="materials-title">
          <div className={styles.sectionHeader}><p>03 / PREPARE YOUR MATERIALS</p><h2 id="materials-title">Make your thinking visible.</h2><span>The program team will confirm the exact submission requirements.</span></div>
          <div className={styles.materialGrid}>
            <article><span>01 / SOP</span><h3>Statement of Purpose</h3><p>Explain why this experience matters to you and what you want to learn.</p><small>Final question to be confirmed</small></article>
            <article><span>02 / ESSAY</span><h3>Your perspective</h3><p>Use specific experiences to show how you think, learn, and contribute.</p><small>Final questions to be confirmed</small></article>
            <article><span>03 / VIDEO</span><h3>Speak in your own voice</h3><p>Share an idea or experience you care about with clarity and sincerity.</p><small>Final video prompt to be confirmed</small></article>
          </div>
        </section>

        <section className={styles.nextPanel}><div><p>NEXT / INTERVIEW PREP</p><h2>Get ready for the conversation.</h2></div><Link href="/interview">VIEW INTERVIEW PREP <ArrowUpRight size={20} aria-hidden="true" /></Link></section>
      </div>
    </main>
  );
}
