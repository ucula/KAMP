import Link from "next/link";
import { ArrowUpRight, MessageCircle, ScanSearch, UsersRound } from "lucide-react";
import { CandidateGallery } from "./candidate-gallery";
import styles from "../inner.module.css";

const guidance = [
  { icon: ScanSearch, title: "Know your story", body: "Choose a few real moments that show what you tried, learned, and would do differently." },
  { icon: MessageCircle, title: "Speak with clarity", body: "Answer the question directly, then use a specific example to give it shape." },
  { icon: UsersRound, title: "Make it a conversation", body: "Listen carefully and ask thoughtful questions about the people and the program." },
];

export default function InterviewPrepPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section className={styles.hero} aria-labelledby="interview-title">
          <p className={styles.eyebrow}>KAMP6 ENGINEERING / INTERVIEW PREP</p>
          <h1 id="interview-title">A conversation about <em>potential.</em></h1>
          <p className={styles.lead}>Prepare to share your curiosity, your experiences, and the direction you hope to explore. The guide below gives you a place to start.</p>
        </section>

        <section className={styles.section} aria-labelledby="pair-title">
          <div className={styles.sectionHeader}><p>01 / MEET THE PEOPLE</p><h2 id="pair-title">Get to know your interview pair.</h2><span>Official interviewer portraits and introductions will be added when provided.</span></div>
          <div className={styles.pairGrid}>
            <div><span>INTERVIEW PAIR / 01</span><div className={styles.pairPortrait} aria-hidden="true">✳</div><h3>Profile coming soon</h3></div>
            <div><span>INTERVIEW PAIR / 02</span><div className={styles.pairPortrait} aria-hidden="true">✳</div><h3>Profile coming soon</h3></div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="interview-guide-title">
          <div className={styles.sectionHeader}><p>02 / INTERVIEW GUIDE</p><h2 id="interview-guide-title">Show how you think.</h2><span>Use these tips to prepare a thoughtful conversation.</span></div>
          <div className={styles.valueGrid}>
            {guidance.map(({ icon: Icon, title, body }) => <article className={styles.valueCard} key={title}><Icon size={31} strokeWidth={1.7} aria-hidden="true" /><h3>{title}</h3><p>{body}</p></article>)}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="candidate-title">
          <div className={styles.sectionHeader}><p>03 / OUR CANDIDATES</p><h2 id="candidate-title">Get to know the people.</h2><span>Tap a card to preview the candidate profile layout. Official information is still pending.</span></div>
          <CandidateGallery />
        </section>

        <section className={styles.nextPanel}><div><p>BACK / APP GUIDE</p><h2>Prepare your application story.</h2></div><Link href="/app-guide">VIEW APP GUIDE <ArrowUpRight size={20} aria-hidden="true" /></Link></section>
      </div>
    </main>
  );
}
