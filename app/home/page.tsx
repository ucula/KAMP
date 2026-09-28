import Box from "@mui/material/Box";

import { Activity } from "@/components/home/activity";
import { Intro } from "@/components/home/intro";
import { Kamp } from "@/components/home/kamp";
import { Mission } from "@/components/home/mission";

export default function HomePage() {
  return (
    <Box component="main">
      <Intro />
      <Kamp />
      <Mission />
      <Activity />
    </Box>
  );
}
