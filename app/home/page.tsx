import { Activity } from "@/components/home/activity";
import { Intro } from "@/components/home/intro";
import { Kamp } from "@/components/home/kamp";
import { Mission } from "@/components/home/mission";
import { Mentors } from "@/components/home/mentors";
import { Organizations } from "@/components/home/organizations";
import { SocialMedia } from "@/components/home/social-media";
import { HomeFooter } from "@/components/home/home-footer";

export default function HomePage() {
  return (
    <main className="bg-white font-[Arial,Helvetica,sans-serif] text-[#211a1b]">
      <Intro />
      <Kamp />
      <Mission />
      <Activity />

      <Mentors />
      <Organizations />
      <SocialMedia />

      <HomeFooter />
    </main>
  );
}
