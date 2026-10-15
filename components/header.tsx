import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const links = [
  { href: "/home", label: "Home" },
  { href: "/app-guide", label: "App Guide" },
  { href: "/interview", label: "Interview Prep" },
];

export function Header({ activeHref }: { activeHref?: string }) {
  return (
    <AppBar
      component="header"
      position="sticky"
      elevation={0}
      sx={{ bgcolor: "white", borderBottom: "1px solid #ece6e6", color: "#211a1b" }}
    >
      <Toolbar
        component="nav"
        aria-label="Main navigation"
        sx={{
          justifyContent: "space-between",
          gap: { xs: 2, md: 4 },
          minHeight: { xs: "76px !important", md: "92px !important" },
          maxWidth: 1440,
          mx: "auto",
          px: { xs: 2.5, md: 5 },
          width: "100%",
        }}
      >
        <Typography component="a" href="/home" aria-label="KAMP6 home" sx={{ color: "#211a1b", fontSize: { xs: 27, md: 32 }, fontWeight: 900, letterSpacing: "-0.09em", lineHeight: 1, textDecoration: "none", whiteSpace: "nowrap" }}>
          KAMP<Box component="span" sx={{ color: "#b51625" }}>6</Box>
        </Typography>
        <Box sx={{ alignItems: "center", display: "flex", gap: { xs: 0, md: 1 }, ml: "auto", minWidth: 0, overflowX: "auto", scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } }}>
          {links.map(({ href, label }) => (
          <Button
            key={href}
            href={href}
            color="inherit"
            aria-current={href === activeHref ? "page" : undefined}
            sx={{
              color: href === activeHref ? "#b51625" : "#3b3435",
              fontSize: { xs: 12, md: 13 },
              fontWeight: 700,
              minWidth: "auto",
              px: { xs: 1, md: 1.5 },
              whiteSpace: "nowrap",
              textTransform: "none",
              textDecoration: href === activeHref ? "underline" : "none",
              textDecorationColor: "#b51625",
              textUnderlineOffset: "7px",
              "&:hover": {
                bgcolor: "#fdf0f1",
                color: "#b51625",
              },
            }}
          >
            {label}
          </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
