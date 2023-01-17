import { gql, useQuery } from "@apollo/client";
import {
  Box,
  Button,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import NextLink from "next/link";

const GET_GAMES = gql`
  query GetGames {
    games {
      id
      players {
        id
      }
    }
  }
`;

export default function Home() {
  const result = useQuery(GET_GAMES);

  console.log(result);

  const games = result.data?.games ?? [];

  return (
    <>
      <Box sx={{ p: 2, pb: 0 }}>
        <Typography variant="h1" gutterBottom>
          DFAL
        </Typography>
        <Typography variant="h2">Join game</Typography>
        <NextLink href="/">Back</NextLink>
        <List>
          {games.map((game) => {
            return (
              <ListItem key={game.id}>
                <ListItemText
                  primary={game.id}
                  secondary={game.players.length}
                />
              </ListItem>
            );
          })}
        </List>
      </Box>
    </>
  );
}
