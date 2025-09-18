import { Box, Typography } from "@mui/material";

export default function Header({ title }) {
  return (
    <Box
      sx={{
        minHeight: "20vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h3">{title}</Typography>
    </Box>
  );
}
