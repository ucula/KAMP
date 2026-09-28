import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function AppGuidePage() {
  return (
    <Box component="main" sx={{ maxWidth: 896, mx: "auto", px: 3, py: 8 }}>
      <Typography component="h1" sx={{ color: "#070d22", fontSize: 36, fontWeight: 700 }}>App Guide</Typography>
      <Typography component="p" sx={{ color: "#455671", mt: 2 }}>
        Application guide content is coming soon.
      </Typography>
    </Box>
  );
}
