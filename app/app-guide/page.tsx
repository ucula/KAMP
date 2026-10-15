import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function AppGuidePage() {
  return (
    <Box component="main" sx={{ bgcolor: "#f9f6f4", minHeight: "calc(100svh - 92px)", px: 3, py: { xs: 10, md: 15 } }}>
      <Box sx={{ maxWidth: 1100, mx: "auto" }}>
        <Typography sx={{ color: "#b51625", fontSize: 12, fontWeight: 800, letterSpacing: "0.22em", mb: 5 }}>KAMP6 ENGINEERING / APP GUIDE</Typography>
        <Typography component="h1" sx={{ color: "#211a1b", fontSize: { xs: 54, md: 100 }, fontWeight: 800, letterSpacing: "-0.075em", lineHeight: 0.98, maxWidth: 850 }}>Your next step starts here<span style={{ color: "#b51625" }}>.</span></Typography>
        <Typography component="p" sx={{ color: "#605557", fontSize: { xs: 18, md: 22 }, lineHeight: 1.6, maxWidth: 610, mt: 5 }}>The KAMP6 application guide is coming soon. In the meantime, explore the program and its activities.</Typography>
        <Button href="/home#program" variant="contained" sx={{ bgcolor: "#b51625", borderRadius: 50, fontSize: 12, fontWeight: 800, letterSpacing: "0.08em", mt: 5, px: 4, py: 2, "&:hover": { bgcolor: "#8f101c" } }}>EXPLORE THE PROGRAM ↗</Button>
      </Box>
    </Box>
  );
}
