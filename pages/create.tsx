import { Box, Button, Link, Typography } from "@mui/material";
import NextLink from "next/link";

export default function Home() {
  return (
    <>
      <Box sx={{ p: 2, pb: 0 }}>
        <Typography variant="h1" gutterBottom>
          DFAL
        </Typography>
        <Typography variant="h2">Create game</Typography>
        <NextLink href="/">Back</NextLink>
      </Box>
    </>
  );
}
