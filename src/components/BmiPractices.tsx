import { Box, Grid, GridSize, Typography } from "@mui/material";

function BmiPractices(props: {
  value: GridSize;
  img: string;
  heading: string;
  content: string;
}) {
  return (
    <Grid
      item
      md={props.value}
      sx={{
        display: "flex",
        gap: "2rem",
        flexDirection: {
          xs: "column",
          sm: "row",
          lg: "column",
        },
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <img src={props.img} alt="" />
      <Box>
        <Typography variant="h3" sx={{ textAlign: "left" }}>
          {props.heading}
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "left" }}>
          {props.content}
        </Typography>
      </Box>
    </Grid>
  );
}

export default BmiPractices;
