import { Activity } from "@/components/home/activity";
import { Intro } from "@/components/home/intro";
import { Kamp } from "@/components/home/kamp";
import { Mission } from "@/components/home/mission";
import { MentorCommitment } from "@/components/home/mentor-commitment";
import { Mentors } from "@/components/home/mentors";
import { Organizations } from "@/components/home/organizations";
import { ProgramTimeline } from "@/components/home/program-timeline";
import { SocialMedia } from "@/components/home/social-media";
import { HomeFooter } from "@/components/home/home-footer";

export function HomeContent({ basePath = "" }: { basePath?: string }) {
  return (
    <main className="fluid-type bg-white font-[Arial,Helvetica,sans-serif] text-[#211a1b]">
      <Intro />
      <Kamp />
      <Mission />
      <MentorCommitment />
      <Activity />
      <ProgramTimeline />
      <Mentors />
      <Organizations />
      <SocialMedia />
      <HomeFooter basePath={basePath} />
    </main>
  );
}
