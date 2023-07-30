import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";

import "./App.css";
import { Box, Container, Grid, Typography } from "@mui/material";
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
import { leftPattern } from "./styles/Styles";
import Hero from "./components/Hero";
import SelectMethod from "./components/SelectMethod";

function App() {
  const [method, setMethod] = useState("metric");

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const getMetricTotal = JSON.parse(localStorage.getItem("metric")!);
  const [bmiMetric, setBmiMetric] = useState(
    getMetricTotal !== null && getMetricTotal.total !== null
      ? Number(getMetricTotal.total)
      : 0
  );

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const getImperialTotal = JSON.parse(localStorage.getItem("imperial")!);
  const [bmiImperial, setBmiImperial] = useState(
    getImperialTotal !== null && getImperialTotal.total !== null
      ? Number(getImperialTotal.total)
      : 0
  );

  const [message, setMessage] = useState("");
  const [minWeight, setMinWeight] = useState(0);
  const [maxWeight, setMaxWeight] = useState(0);

  const colorTheme = useTheme();
  const { status } = colorTheme;
  const { pureWhite, gunMetal, darkElectricBlue } = status;

  const handleChangeMethod = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMethod((event.target as HTMLInputElement).value);
  };
 
  function title1() {
    if (method === "metric") {
      if (isNaN(bmiMetric) || bmiMetric === 0) {
        return "";
      } else {
        return "Your BMI is...";
      }
    } else {
      if (isNaN(bmiImperial) || bmiImperial === 0) {
        return "";
      } else {
        return "Your BMI is...";
      }
    }
  }

  function title2() {
    if (method === "metric") {
      if (isNaN(bmiMetric) || bmiMetric === 0) {
        return "Welcome";
      } else {
        return bmiMetric.toString();
      }
    } else {
      if (isNaN(bmiImperial) || bmiImperial === 0) {
        return "Welcome";
      } else {
        return bmiImperial.toString();
      }
    }
  }

  // calculate min weight and max weight for a healthy body based on range and height

  useEffect(() => {
    if (method === "metric") {
      if (bmiMetric < 18.5) {
        setMessage("Underweight");
      } else if (bmiMetric >= 18.5 && bmiMetric < 24.9) {
        setMessage("Healthy weight");
      } else if (bmiMetric >= 24.9 && bmiMetric < 29.9) {
        setMessage("Overweight");
      } else {
        setMessage("Obese");
      }
    } else {
      if (bmiImperial < 18.5) {
        setMessage("Underweight");
      } else if (bmiImperial >= 18.5 && bmiImperial < 24.9) {
        setMessage("Healthy weight");
      } else if (bmiImperial >= 24.9 && bmiImperial < 29.9) {
        setMessage("Overweight");
      } else {
        setMessage("Obese");
      }
    }
  }, [bmiMetric, bmiImperial, message, method]);

  return (
    <Container sx={{ paddingInline: "1.5rem", paddingBlockEnd: "2.5rem" }}>
      <Header />

      {/* MAIN START */}
      <Box component={"main"}>
        <Grid container justifyContent={"center"} alignItems={"center"}>
          {/* GRID ITEM 1 */}
          <Hero />
          {/* FORM WEIGHT AND HEIGHT RADIOS */}
          {/* GRID ITEM 2 */}
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
              margin={"40px auto"}
              padding={"16px"}
              boxShadow={"16px 32px 56px 0px rgba(143, 174, 207, 0.25)"}
              sx={{
                background: "#FFF",
              }}
            >
              {/* Select measurement method - imperial or metric (radio buttons) */}
              <SelectMethod
                method={method}
                handleChangeMethod={handleChangeMethod}
              />

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
                  color={colorTheme.status.pureWhite}
                  fontWeight={600}
                  fontSize={"1rem"}
                  display={"flex"}
                  flexDirection={"column"}
                >
                  {title1()}
                  <Typography
                    component="span"
                    fontSize={{
                      xs: "3rem",
                      lg: "4rem",
                    }}
                    lineHeight={1.1}
                    fontWeight={600}
                    paddingBottom={".5rem"}
                    paddingTop={".5rem"}
                  >
                    {title2()}
                  </Typography>
                </Typography>
                {method === "metric" ? (
                  bmiMetric === 0 || isNaN(bmiMetric) ? (
                    <Typography variant="body1" gutterBottom color={pureWhite}>
                      Enter your height and weight and you'll see your BMI
                      result here
                    </Typography>
                  ) : (
                    <Typography variant="body1" gutterBottom color={pureWhite}>
                      Your BMI suggests you're {message}. Your ideal weight is
                      between {minWeight.toFixed(2)} kgs -{" "}
                      {maxWeight.toFixed(2)} kgs.
                    </Typography>
                  )
                ) : bmiImperial === 0 || isNaN(bmiImperial) ? (
                  <Typography variant="body1" gutterBottom color={pureWhite}>
                    Enter your height and weight and you'll see your BMI result
                    here
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
          paddingY={"8rem"}
          position={"relative"}
          sx={leftPattern}
        >
          <Grid item sm={6}>
            <img src={ManEating} alt="man eating with sticks" />
          </Grid>

          <Grid
            item
            sm={6}
            paddingX={{
              sm: "2rem",
              lg: "3.5rem",
            }}
          >
            <Typography
              variant="h2"
              gutterBottom
              color={gunMetal}
              fontSize={{ xs: "2rem", lg: "3rem" }}
              fontWeight={600}
              paddingY={"2rem"}
              textAlign={"left"}
            >
              What does your BMI result mean?
            </Typography>
            <Typography
              variant="body1"
              color={darkElectricBlue}
              textAlign={"left"}
            >
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
        <Grid
          container
          spacing={4}
          width={"100%"}
          marginLeft={0}
          sx={{
            background:
              "var(--gradient-1, linear-gradient(315deg, #D6E6FE 0%, rgba(214, 252, 254, 0.25%) 100%))",
          }}
        >
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
          marginX={"auto"}
          marginY={{
            xs: "2.5rem",
            sm: "3rem",
            md: "4rem",
            lg: "6rem",
          }}
        >
          <Grid
            item
            xs={12}
            md={7}
            paddingY={"2.5rem"}
            paddingTop={0}
            paddingRight={{
              lg: "6rem",
            }}
          >
            <Typography
              variant="h2"
              color={gunMetal}
              fontSize={"2rem"}
              fontWeight={600}
              textAlign={{
                md: "left",
              }}
              gutterBottom
            >
              Limitations of BMI
            </Typography>
            <Typography
              color={darkElectricBlue}
              textAlign={{
                md: "left",
              }}
            >
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
            alignItems={"baseline"}
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
