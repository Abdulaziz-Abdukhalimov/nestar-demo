import { Box, Container, Stack } from "@mui/material";

export default function Home() {
  return (
    <>
      <Stack sx={{ background: "#304835", color: "white" }}>Header</Stack>
      <Container>
        <Stack flexDirection={"column"}>
          <Box>Popular Properties</Box>
          <Box>Top Agents</Box>
          <Box>Top Properties</Box>
          <Box>Top Events</Box>
        </Stack>
      </Container>
      <Stack sx={{ background: "#304835", color: "white" }}>FOOTER</Stack>
    </>
  );
}
