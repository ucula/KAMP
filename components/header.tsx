import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";

const links = [
  { href: "/home", label: "Home" },
  { href: "/app-guide", label: "AppGuide" },
  { href: "/interview", label: "InterviewPrep" },
];

export function Header({ activeHref }: { activeHref?: string }) {
  return (
    <AppBar
      component="header"
      position="static"
      elevation={0}
      sx={{ bgcolor: "white", color: "#34435c" }}
    >
      <Toolbar
        component="nav"
        aria-label="Main navigation"
        sx={{
          justifyContent: "center",
          gap: { xs: 1, sm: 3 },
          minHeight: "120px !important",
          px: 2,
        }}
      >
        {links.map(({ href, label }) => (
          <Button
            key={href}
            href={href}
            color="inherit"
            aria-current={href === activeHref ? "page" : undefined}
            sx={{
              color: href === activeHref ? "#981b23" : "#000309",
              fontSize: 20,
              fontWeight: 800,
              minWidth: "auto",
              px: 5,
              textDecoration: href === activeHref ? "underline" : "none",
              textDecorationColor: "#981b23",
              textUnderlineOffset: "8px",
              textTransform: "none",
              "&:hover": { bgcolor: "transparent", color: "#981b23", textDecoration: href === activeHref ? "underline" : "none" },
            }}
          >
            {label}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}
