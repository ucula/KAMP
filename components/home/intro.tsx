import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { ArrowRight } from "lucide-react";

export function Intro() {
  return (
    <Box
      component="section"
      aria-labelledby="intro-title"
      sx={{
        alignItems: "center",
        background: "linear-gradient(135deg, #f7f4f6 0%, #fafbfe 78%)",
        // borderBottom: "5px solid #6757e8",
        display: "flex",
        justifyContent: "center",
        minHeight: "calc(100svh - 120px)",
        px: 3,
        py: 10,
        textAlign: "center",
      }}
    >
      <Box sx={{ maxWidth: 900, mx: "auto" }}>
        <Typography
          id="intro-title"
          component="h1"
          sx={{
            color: "#070d22",
            fontSize: "clamp(2.75rem, 5vw, 3.75rem)",
            fontWeight: 800,
            letterSpacing: "-0.055em",
            lineHeight: 0.99,
          }}
        >
          Where Wisdom Empowers
          <Box
            component="span"
            sx={{
              background: "linear-gradient(90deg, #8f1b22, #de1643)",
              backgroundClip: "text",
              color: "transparent",
              display: "block",
            }}
          >
            Potential
          </Box>
        </Typography>
        <Typography
          component="p"
          sx={{
            color: "#455671",
            fontSize: { xs: 18, sm: 19 },
            lineHeight: 1.45,
            maxWidth: 670,
            mt: 3,
            mx: "auto",
          }}
        >
          Elevate your technical caliber with KAMP 5 Engineering. Streamlined
          interview preparation, specialized curriculum, and proven pathways
          into leading engineering industries.
        </Typography>
        <HeroActions />
      </Box>
    </Box>
  );
}

function HeroActions() {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={2}
      sx={{ alignItems: "center", justifyContent: "center", mt: 4.5 }}
    >
      <Button
        href="/app-guide"
        variant="contained"
        endIcon={<ArrowRight aria-hidden="true" size={18} />}
        sx={{
          bgcolor: "#a11922",
          borderRadius: "12px",
          boxShadow: "0 8px 14px rgb(125 28 34 / 18%)",
          fontSize: 15,
          fontWeight: 600,
          minHeight: 50,
          minWidth: 211,
          px: 3,
          textTransform: "none",
          "&:hover": { bgcolor: "#85151d" },
        }}
      >
        Start Application
      </Button>
      <Button
        href="/app-guide"
        variant="outlined"
        sx={{
          bgcolor: "white",
          borderColor: "#e1e7f0",
          borderRadius: "12px",
          boxShadow: "0 2px 3px rgb(28 42 65 / 5%)",
          color: "#34435c",
          fontSize: 15,
          fontWeight: 600,
          minHeight: 50,
          minWidth: 191,
          px: 3,
          textTransform: "none",
          "&:hover": { bgcolor: "#f8f9fc", borderColor: "#e1e7f0" },
        }}
      >
        Explore App Guide
      </Button>
    </Stack>
  );
}
