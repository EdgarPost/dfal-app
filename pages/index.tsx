import { gql, useQuery } from "@apollo/client";
import { Box, Button, Link, Typography } from "@mui/material";
import NextLink from "next/link";

const GET_CONFIG = gql`
  query {
    config {
      dimensions {
        id
        name
      }
    }
  }
`;

const GET_ME = gql`
  query {
    me {
      id
      name
    }
  }
`;

export default function Home() {
  const result = useQuery(GET_CONFIG);
  const config = result.data?.config ?? {};

  const meResult = useQuery(GET_ME);
  const me = meResult.data?.me ?? null;

  return (
    <>
      <Box sx={{ p: 2, pb: 0 }}>
        <Typography variant="h1" gutterBottom>
          DFAL
        </Typography>
        {me && <Typography gutterBottom>Welcome, {me.name}</Typography>}
        <Link component={NextLink} href="/join">
          <Button fullWidth variant="contained">
            Join game
          </Button>
        </Link>
      </Box>
      <Box sx={{ p: 2 }}>
        <Link component={NextLink} href="/create">
          <Button fullWidth variant="contained">
            Create game
          </Button>
        </Link>
      </Box>
      <Box sx={{ p: 2 }}>
        <pre>{JSON.stringify(config, null, 2)}</pre>
      </Box>
    </>
  );
}
