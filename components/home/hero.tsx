import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { HeroActions } from "./hero-actions";

export function Hero() {
  return (
    <Box component="main" sx={{ alignItems: "center", background: "linear-gradient(135deg, #f7f4f6 0%, #fafbfe 78%)", borderBottom: "5px solid #6757e8", display: "flex", justifyContent: "center", minHeight: "calc(100svh - 120px)", px: 3, py: 10, textAlign: "center" }}>
      <Box sx={{ maxWidth: 900, mx: "auto" }}>
        <Typography component="h1" sx={{ color: "#070d22", fontSize: "clamp(2.75rem, 5vw, 3.75rem)", fontWeight: 800, letterSpacing: "-0.055em", lineHeight: 0.99 }}>
          Where Wisdom Empowers
          <Box component="span" sx={{ background: "linear-gradient(90deg, #8f1b22, #de1643)", backgroundClip: "text", color: "transparent", display: "block" }}>
            Potential
          </Box>
        </Typography>
        <Typography component="p" sx={{ color: "#455671", fontSize: { xs: 18, sm: 19 }, lineHeight: 1.45, maxWidth: 670, mt: 3, mx: "auto" }}>
          Elevate your technical caliber with KAMP 5 Engineering. Streamlined
          interview preparation, specialized curriculum, and proven pathways into
          leading engineering industries.
        </Typography>
        <HeroActions />
      </Box>
    </Box>
  );
}
