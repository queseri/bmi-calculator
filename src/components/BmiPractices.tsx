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
        <Typography
          variant="h3"
          color={"hsla(215, 31%, 21%, 1)"}
          textAlign={"left"}
          fontSize={"1.5rem"}
          fontWeight={600}
        >
          {props.heading}
        </Typography>
        <Typography
          variant="body1"
          textAlign={"left"}
          paddingY={"1.5rem"}
          color={"hsla(215, 17%, 44%, 1)"}
        >
          {props.content}
        </Typography>
      </Box>
    </Grid>
  );
}

export default BmiPractices;
