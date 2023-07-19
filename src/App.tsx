import { useState } from "react";
import "./App.css";
import {
  Box,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
// import { css } from "@emotion/react";
import Logo from "./assets/images/logo.svg";
import Metric from "./components/Metric";
import Imperial from "./components/Imperial";
import ManEating from "./assets/images/image-man-eating.webp";
import Eating from "./assets/images/icon-eating.svg";
import Exercising from "./assets/images/icon-exercise.svg";
import Sleep from "./assets/images/icon-sleep.svg";
import Gender from "./assets/images/icon-gender.svg";
import Age from "./assets/images/icon-age.svg";
import Muscle from "./assets/images/icon-muscle.svg";
import Pregnancy from "./assets/images/icon-pregnancy.svg";
import Race from "./assets/images/icon-race.svg";

function App() {
  const [value, setValue] = useState("metric");
  //  const [weight, setWeight] = useState(0);
  // const [height, setHeight] = useState(0);
  // const [bmi, setBmi] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    if (value === "metric") {
      // setHeight(() => 165 / 100);
    }
  };

  return (
    <Container>
      {/* HEADER START */}
      <Box component={"header"}>
        <Grid container justifyContent={"center"} alignItems={"center"}>
          <Grid item component={"a"} href="/">
            <img className="logo" src={Logo} alt="Bmi" />
          </Grid>
        </Grid>

        <Grid container justifyContent={"center"} alignItems={"center"}>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              zIndex: 2,
              "&::before": {
                position: "absolute",
                content: '""',
                top: 0,
                left: 0,
                width: {
                  xs: "100%",
                  md: "65%",
                },
                height: "100%",
                // backgroundColor: "#D6E5FC",
                zIndex: -1,
                borderRadius: "0px 0px 35px 35px",
                // border: "1px solid #000",
                background:
                  "linear-gradient(315deg, #D6E5FC 0%, rgba(214, 252, 254, 0.00) 100%)",
              },
            }}
          >
            <Typography
              variant="h1"
              gutterBottom
              sx={{
                fontSize: "3rem",
                color: "hsla(215, 31%, 21%, 1)",
                fontWeight: 600,
                lineHeight: 1.1,
              }}
            >
              Body Mass Index Calculator
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                color: "hsla(215, 17%, 44%, 1)",
                lineHeight: 1.5,
              }}
            >
              Better understand your weight in relation to your height using our
              body mass index (BM) calculator. While BMI is not the sole
              determinant of a healthy weight, it offers a valuable starting
              point to evaluate your overall health and well-being.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              zIndex: 2,
            }}
          >
            <Box
              component={"form"}
              noValidate
              sx={{
                borderRadius: "16px",
                background: "#FFF",
                margin: "24px auto",
                padding: "16px",
                boxShadow: "16px 32px 56px 0px rgba(143, 174, 207, 0.25)",
              }}
            >
              <FormControl fullWidth>
                <FormLabel
                  id="measurement"
                  aria-hidden={true}
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: "hsla(215, 31%, 21%, 1)",
                  }}
                >
                  Enter your details below
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="measurement"
                  defaultValue={value}
                  value={value}
                  onChange={handleChange}
                  name="measurement-group"
                >
                  <FormControlLabel
                    sx={{
                      flex: "1 1",
                      "& .MuiFormControlLabel-label": {
                        fontWeight: 600,
                      },
                    }}
                    value="metric"
                    control={<Radio />}
                    label="Metric"
                  />
                  <FormControlLabel
                    sx={{
                      flex: "1 1",
                      "& .MuiFormControlLabel-label": {
                        fontWeight: 600,
                      },
                    }}
                    value="imperial"
                    control={<Radio />}
                    label="Imperial"
                  />
                </RadioGroup>
              </FormControl>
              {value === "metric" ? <Metric /> : <Imperial />}
              <Box>
                <Typography
                  variant="h2"
                  gutterBottom
                  sx={{
                    fontSize: "2rem",
                    fontWeight: 600,
                  }}
                >
                  Your BMI is...
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Your BMI suggests you're Your ideal weight is between What
                  your BMI result means
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* HEADER END */}
      {/* MAIN START */}
      <Box component={"main"}>
        <Paper elevation={0}>
          <img src={ManEating} alt="man eating with sticks" />
          <Box>
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontSize: "2rem",
                fontWeight: 600,
              }}
            >
              What does your BMI result mean?
            </Typography>
            <Typography variant="body1">
              {" "}
              A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
              Maintaining a healthy weight may lower your chances of
              experiencing health issues later on, such as obesity and type 2
              diabetes. Aim for a nutritious diet with reduced fat and sugar
              content, incorporating ample fruits and vegetables. Additionally,
              strive for regular physical activity, ideally about 30 minutes
              daily for five days a week.
            </Typography>
          </Box>
        </Paper>
        <Grid container spacing={4}>
          <Grid item>
            <img src={Eating} alt="" />
            <Typography variant="h3"> Healthy eating</Typography>
            <Typography variant="body1">
              {" "}
              Healthy eating promotes weight control, disease prevention, better
              digestion, immunity, mental clarity, and mood.
            </Typography>
          </Grid>
          <Grid item>
            <img src={Exercising} alt="" />
            <Typography variant="h3">Regular exercise</Typography>
            <Typography variant="body1">
              Exercise improves fitness, aids weight control, elevates mood, and
              reduces disease risk, fostering wellness and longevity.
            </Typography>
          </Grid>
          <Grid item>
            <img src={Sleep} alt="" />
            <Typography variant="h3">Adequate sleep </Typography>
            <Typography variant="body1">
              {" "}
              Sleep enhances mental clarity, emotional stability, and physical
              wellness, promoting overall restoration and rejuvenation.
            </Typography>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item>
            <Typography variant="h2">Limitations of BMI</Typography>
            <Typography>
              Although BMI is often a practical indicator of healthy weight, it
              is not suited for every person. Specific groups should carefully
              consider their BMI outcomes, and in certain cases, the measurement
              may not be beneficial to use.
            </Typography>
          </Grid>
          <Grid container>
            <Grid item>
              <Paper elevation={3}>
                <img src={Gender} alt="" />
                <Typography variant="h3"> Gender</Typography>
                <Typography variant="body1">
                  The development and body fat composition of girls and boys
                  vary with age. Consequently, a child's age and gender are
                  considered when evaluating their BMI.
                </Typography>
              </Paper>
            </Grid>
            <Grid item>
              <Paper elevation={3}>
                <img src={Age} alt="" />
                <Typography variant="h3">Age </Typography>
                <Typography variant="body1">
                  In aging individuals, increased body fat and muscle loss may
                  cause BMI to underestimate body fat content.
                </Typography>
              </Paper>
            </Grid>
            <Grid item>
              <Paper elevation={3}>
                <img src={Muscle} alt="" />
                <Typography variant="h3">Muscle</Typography>
                <Typography variant="body1">
                  {" "}
                  BMI may misclassify muscular individuals as overweight or
                  obese, as it doesn't differentiate muscle from fat.
                </Typography>
              </Paper>
            </Grid>
            <Grid item>
              <Paper elevation={3}>
                <img src={Pregnancy} alt="" />
                <Typography variant="h3">Pregnancy</Typography>
                <Typography variant="body1">
                  Expectant mothers experience weight gain due to their growing
                  baby. Maintaining a healthy pre-pregnancy BMI is advisable to
                  minimise health risks for both mother and child.
                </Typography>
              </Paper>
            </Grid>
            <Grid item>
              <Paper elevation={3}>
                <img src={Race} alt="" />
                <Typography variant="h3"> Race </Typography>
                <Typography variant="body1">
                  Certain health concerns may affect individuals of some Black
                  and Asian origins at lower BMIs than others. To learn more, it
                  is advised to discuss this with your GP or practice nurse.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {/* MAIN END */}
    </Container>
  );
}

export default App;
