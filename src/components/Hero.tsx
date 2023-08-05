import { Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function Hero() {
  const colorTheme = useTheme();
  const { status } = colorTheme;
  const { gunMetal, darkElectricBlue } = status;
  return (
    <Grid
      item
      xs={12}
      md={6}
      paddingRight={{
        lg: "1rem",
      }}
    >
      <Typography
        variant="h1"
        gutterBottom
        paddingRight={{
          lg: "3rem",
        }}
        fontSize={{
          xs: "3rem",
          lg: "4rem",
        }}
        fontWeight={600}
        lineHeight={1.1}
        color={gunMetal}
        textAlign={{
          md: "start",
        }}
      >
        Body Mass Index Calculator
      </Typography>
      <Typography
        variant="body1"
        lineHeight={1.5}
        color={darkElectricBlue}
        paddingRight={{
          lg: "6rem",
        }}
        textAlign={{
          md: "start",
        }}
      >
        Better understand your weight in relation to your height using our body
        mass index (BM) calculator. While BMI is not the sole determinant of a
        healthy weight, it offers a valuable starting point to evaluate your
        overall health and well-being.
      </Typography>
    </Grid>
  );
}

export default Hero;
