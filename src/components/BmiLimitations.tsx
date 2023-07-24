import { Box, Grid, Paper, Typography } from "@mui/material";

function BmiLimitations(props: {
  content: string;
  title: string;
  img: string;
}) {
  return (
    <Grid item sm={6} md={4} padding={"1rem"}>
      <Paper elevation={6} sx={{ padding: "1rem", height: "100%" }}>
        <Box
          display={"flex"}
          justifyContent={"flex-start"}
          fontWeight={600}
          alignItems={"center"}
          gap={"1rem"}
        >
          <img src={props.img} alt="" />
          <Typography variant="h3" fontSize={"1.25rem"}>
            {" "}
            {props.title}
          </Typography>
        </Box>
        <Typography variant="body1" textAlign={"left"} marginY={"1.5rem"}>
          {props.content}
        </Typography>
      </Paper>
    </Grid>
  );
}

export default BmiLimitations;
