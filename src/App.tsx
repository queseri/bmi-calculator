import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";

import "./App.css";
import {
  Box,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
// import { css } from "@emotion/react";
import RightPattern from "./assets/images/pattern-curved-line-right.svg";
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
import BmiPractices from "./components/BmiPractices";
import BmiLimitations from "./components/BmiLimitations";
import Header from "./components/Header";
import { bgLayout } from "./styles/Styles";

function App() {
  const [method, setMethod] = useState("metric");

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const getMetricTotal = JSON.parse(localStorage.getItem("metric")!);
  const [bmiMetric, setBmiMetric] = useState(
    getMetricTotal !== null && getMetricTotal.total !== null
      ? getMetricTotal.total
      : 0
  );

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const getImperialTotal = JSON.parse(localStorage.getItem("imperial")!);
  const [bmiImperial, setBmiImperial] = useState(
    getImperialTotal !== null && getImperialTotal.total !== null
      ? getImperialTotal.total
      : 0
  );

  const [message, setMessage] = useState("");
  const [minWeight, setMinWeight] = useState(0);
  const [maxWeight, setMaxWeight] = useState(0);

  const theme = useTheme();
  const { status } = theme;
  const { pureWhite, gunMetal, darkElectricBlue } = status;

  const handleChangeMethod = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMethod((event.target as HTMLInputElement).value);
  };

  // calculate min weight and max weight for a healthy body based on range and height

  useEffect(() => {
    if (bmiMetric < 18.5 || bmiImperial < 18.5) {
      setMessage("Underweight");
    } else if (
      (bmiMetric >= 18.5 && bmiMetric < 24.9) ||
      (bmiImperial >= 18.5 && bmiImperial < 24.9)
    ) {
      setMessage(" Healthy weight");
    } else if (
      (bmiMetric >= 24.9 && bmiMetric < 29.9) ||
      (bmiImperial >= 24.9 && bmiImperial < 29.9)
    ) {
      setMessage("Overweight");
    } else {
      setMessage("Obese");
    }
  }, [bmiMetric, bmiImperial]);

  return (
    <Container sx={{ paddingInline: "1.5rem", paddingBlockEnd: "2.5rem" }}>
      <Header />

      {/* MAIN START */}
      <Box component={"main"}>
        <Grid container justifyContent={"center"} alignItems={"center"}>
          <Grid item xs={12} md={6} sx={bgLayout}>
            <Typography
              variant="h1"
              gutterBottom
              fontSize={"3rem"}
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
              textAlign={{
                md: "start",
              }}
            >
              Better understand your weight in relation to your height using our
              body mass index (BM) calculator. While BMI is not the sole
              determinant of a healthy weight, it offers a valuable starting
              point to evaluate your overall health and well-being.
            </Typography>
          </Grid>

          {/* FORM WEIGHT AND HEIGHT RADIOS */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              zIndex: 2,
            }}
          >
            <Box
              component={"form"}
              noValidate
              borderRadius={"16px"}
              margin={"24px auto"}
              padding={"16px"}
              boxShadow={"16px 32px 56px 0px rgba(143, 174, 207, 0.25)"}
              sx={{
                background: "#FFF",
              }}
            >
              <FormControl fullWidth>
                <FormLabel
                  id="measurement"
                  aria-hidden={true}
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: { gunMetal },
                  }}
                >
                  Enter your details below
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="measurement"
                  defaultValue={method}
                  value={method}
                  onChange={handleChangeMethod}
                  name="measurement-group"
                  sx={{
                    marginBlock: "1rem",
                  }}
                >
                  {/* METRIC RADIO BUTTON */}
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
                  {/*IMPERIAL RADIO BUTTON */}
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

              {/* SELECT TEXTFIELD */}
              {method === "metric" ? (
                <Metric
                  setBmiMetric={setBmiMetric}
                  setMinWeight={setMinWeight}
                  setMaxWeight={setMaxWeight}
                />
              ) : (
                <Imperial
                  setBmiImperial={setBmiImperial}
                  setMinWeight={setMinWeight}
                  setMaxWeight={setMaxWeight}
                />
              )}

              <Box
                borderRadius={"16px"}
                textAlign={"left"}
                paddingX={"2rem"}
                paddingY={"1rem"}
                marginBottom={"2rem"}
                marginTop={"2rem"}
                sx={{
                  background:
                    "linear-gradient(90deg, #345FF6 0%, #587DFF 100%)",

                  borderBottomRightRadius: {
                    sm: "100px",
                  },
                  borderTopRightRadius: {
                    sm: "100px",
                  },
                }}
              >
                <Typography
                  variant="h2"
                  gutterBottom
                  color={theme.status.pureWhite}
                  fontWeight={600}
                  fontSize={"1rem"}
                  display={"flex"}
                  flexDirection={"column"}
                >
                  Your BMI is...
                  <Typography
                    component="span"
                    fontSize={"3rem"}
                    lineHeight={1.1}
                    fontWeight={600}
                    paddingBottom={".5rem"}
                    paddingTop={".5rem"}
                  >
                    {method === "metric"
                      ? isNaN(bmiMetric)
                        ? "0"
                        : bmiMetric.toString()
                      : isNaN(bmiImperial)
                      ? "0"
                      : bmiImperial.toString()}
                  </Typography>
                </Typography>
                {method === "metric" ? (
                  <Typography variant="body1" gutterBottom color={pureWhite}>
                    Your BMI suggests you're {message}. Your ideal weight is
                    between {minWeight.toFixed(2)} kgs - {maxWeight.toFixed(2)}{" "}
                    kgs.
                  </Typography>
                ) : (
                  <Typography variant="body1" gutterBottom color={pureWhite}>
                    Your BMI suggests you're {message}. Your ideal weight is
                    between {Math.floor(minWeight / 14)}st{" "}
                    {Math.floor(minWeight % 14)} lbs -{" "}
                    {Math.floor(maxWeight / 14)}st {Math.floor(maxWeight % 14)}
                    lbs.
                  </Typography>
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          paddingY={"2.5rem"}
        >
          <Grid item sm={6}>
            <img src={ManEating} alt="man eating with sticks" />
          </Grid>

          <Grid item sm={6}>
            <Typography
              variant="h2"
              gutterBottom
              color={gunMetal}
              fontSize={"2rem"}
              fontWeight={600}
              paddingY={"2rem"}
            >
              What does your BMI result mean?
            </Typography>
            <Typography variant="body1" color={darkElectricBlue}>
              {" "}
              A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
              Maintaining a healthy weight may lower your chances of
              experiencing health issues later on, such as obesity and type 2
              diabetes. Aim for a nutritious diet with reduced fat and sugar
              content, incorporating ample fruits and vegetables. Additionally,
              strive for regular physical activity, ideally about 30 minutes
              daily for five days a week.
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <BmiPractices
            value={4}
            img={Eating}
            heading="Healthy eating"
            content=" Healthy eating promotes weight control, disease prevention, better
              digestion, immunity, mental clarity, and mood."
          />
          <BmiPractices
            value={4}
            img={Exercising}
            heading="Regular exercise"
            content="Exercise improves fitness, aids weight control, elevates mood, and
              reduces disease risk, fostering wellness and longevity."
          />
          <BmiPractices
            value={4}
            img={Sleep}
            heading="Adequate sleep"
            content=" Sleep enhances mental clarity, emotional stability, and physical
              wellness, promoting overall restoration and rejuvenation."
          />
        </Grid>

        <Grid
          container
          spacing={2}
          justifyContent={"center"}
          alignItems={"stretch"}
          width={"100%"}
          margin={"auto"}
        >
          <Grid item xs={12} md={7} paddingY={"2.5rem"} paddingTop={0}>
            <Typography
              variant="h2"
              color={gunMetal}
              fontSize={"2rem"}
              fontWeight={600}
              gutterBottom
            >
              Limitations of BMI
            </Typography>
            <Typography color={darkElectricBlue}>
              Although BMI is often a practical indicator of healthy weight, it
              is not suited for every person. Specific groups should carefully
              consider their BMI outcomes, and in certain cases, the measurement
              may not be beneficial to use.
            </Typography>
          </Grid>
          <BmiLimitations
            img={Gender}
            title="Gender"
            content="The development and body fat composition of girls and boys vary
                with age. Consequently, a child's age and gender are considered
                when evaluating their BMI."
          />
          <Grid
            item
            md={4}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            <img src={RightPattern} alt="" />
          </Grid>
          <BmiLimitations
            content="In aging individuals, increased body fat and muscle loss may
                cause BMI to underestimate body fat content."
            title="Age"
            img={Age}
          />
          <BmiLimitations
            content="BMI may misclassify muscular individuals as overweight or obese,
                as it doesn't differentiate muscle from fat."
            title="Muscle"
            img={Muscle}
          />

          <BmiLimitations
            content="Expectant mothers experience weight gain due to their growing
                baby. Maintaining a healthy pre-pregnancy BMI is advisable to
                minimise health risks for both mother and child."
            title="Pregnancy"
            img={Pregnancy}
          />

          <BmiLimitations
            content="Certain health concerns may affect individuals of some Black and
                Asian origins at lower BMIs than others. To learn more, it is
                advised to discuss this with your GP or practice nurse."
            title="Race"
            img={Race}
          />
        </Grid>
      </Box>
      {/* MAIN END */}
    </Container>
  );
}

export default App;
