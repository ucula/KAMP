import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const activities = [
  "Mentoring",
  "Mentor Spotlight",
  "Wisdom on the Road",
  "KAMP Learning Space",
  "Workshop",
];

export function Activity() {
  return (
    <Box
      component="section"
      aria-labelledby="activities-title"
      sx={{ bgcolor: "white", py: { xs: 8, md: 12 } }}
    >
      <Container maxWidth="lg">
        <Typography
          id="activities-title"
          component="h2"
          sx={{
            color: "#070d22",
            fontSize: { xs: 32, md: 44 },
            fontWeight: 800,
            letterSpacing: "-0.05em",
            mb: { xs: 6, md: 8 },
          }}
        >
          Our Activities
        </Typography>
        <Box sx={{ display: "grid", gap: { xs: 6, md: 9 } }}>
          {activities.map((title, index) => (
            <Box
              key={title}
              sx={{
                alignItems: "center",
                display: "grid",
                gap: { xs: 3, md: 8 },
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "repeat(2, minmax(0, 1fr))",
                },
              }}
            >
              <Typography
                component="h3"
                sx={{
                  color: "#101827",
                  fontSize: { xs: 24, md: 30 },
                  fontWeight: 700,
                  gridColumn: { md: index % 2 === 0 ? 1 : 2 },
                  gridRow: { md: 1 },
                  letterSpacing: "-0.025em",
                  textAlign: { xs: "left", md: "center" },
                }}
              >
                {title}
              </Typography>
              <Box
                sx={{
                  alignItems: "center",
                  aspectRatio: { xs: "16 / 9", md: "5 / 2" },
                  bgcolor: "#f7f9fc",
                  border: "2px dashed #b7c3d2",
                  borderRadius: "12px",
                  display: "flex",
                  gridColumn: { md: index % 2 === 0 ? 2 : 1 },
                  gridRow: { md: 1 },
                  justifyContent: "center",
                  minHeight: 180,
                }}
              >
                <Typography
                  sx={{ color: "#74839a", fontSize: 15, fontWeight: 600 }}
                >
                  Image coming soon
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
