import { Box, Grid, GridSize, Typography, useTheme } from "@mui/material";

function BmiPractices(props: {
  value: GridSize;
  img: string;
  heading: string;
  content: string;
}) {
  const colorTheme = useTheme();
  const { status } = colorTheme;
  const { gunMetal, darkElectricBlue } = status;

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
          color={gunMetal}
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
          color={darkElectricBlue}
        >
          {props.content}
        </Typography>
      </Box>
    </Grid>
  );
}

export default BmiPractices;
