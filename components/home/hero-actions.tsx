import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { ArrowRight } from "lucide-react";

export function HeroActions() {
  return (
    <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ alignItems: "center", justifyContent: "center", mt: 4.5 }}>
      <Button
        href="/app-guide"
        variant="contained"
        endIcon={<ArrowRight aria-hidden="true" size={18} />}
        sx={{ bgcolor: "#a11922", borderRadius: "12px", boxShadow: "0 8px 14px rgb(125 28 34 / 18%)", fontSize: 15, fontWeight: 600, minHeight: 50, minWidth: 211, px: 3, textTransform: "none", "&:hover": { bgcolor: "#85151d" } }}
      >
        Start Application
      </Button>
      <Button
        href="/app-guide"
        variant="outlined"
        sx={{ bgcolor: "white", borderColor: "#e1e7f0", borderRadius: "12px", boxShadow: "0 2px 3px rgb(28 42 65 / 5%)", color: "#34435c", fontSize: 15, fontWeight: 600, minHeight: 50, minWidth: 191, px: 3, textTransform: "none", "&:hover": { bgcolor: "#f8f9fc", borderColor: "#e1e7f0" } }}
      >
        Explore App Guide
      </Button>
    </Stack>
  );
}
