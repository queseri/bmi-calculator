import {
  Box,
  FormControl,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
// import InputText from "./InputText";
import { useEffect, useState } from "react";

interface Imperial {
  feet: number;
  inch: number;
  stone: number;
  pounds: number;
  total: number;
}

function Imperial(props: {
  setBmiImperial: (arg0: () => number) => void;
  setMinWeight: (arg0: () => number) => void;
  setMaxWeight: (arg0: () => number) => void;
}) {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const getImperialTotal = JSON.parse(localStorage.getItem("imperial")!);
  const initialBmi: Imperial = {
    feet: getImperialTotal ? Number(getImperialTotal.feet) : 0,
    inch: getImperialTotal !== null ? Number(getImperialTotal.inch) : 0,
    stone: getImperialTotal !== null ? Number(getImperialTotal.stone) : 0,
    pounds: getImperialTotal !== null ? Number(getImperialTotal.pounds) : 0,
    total: getImperialTotal !== null ? Number(getImperialTotal.total) : 0,
  };
  const [currentBmi, setCurrentBmi] = useState(initialBmi);
  // 1 ft is equal to 12 in
  // st = stone , lb = pound , oz = ounce
  // 1 st = 14 lb
  // 1 lb = 16 oz

  // When using English measurements,
  // ounces (oz) and fractions must be changed to decimal values.
  // Then, calculate BMI by dividing weight in pounds (lb)
  // by height in inches (in) squared and multiplying by a conversion factor of 703.
  // Formula: weight (lb) / [height (in)]2 x 703
  // Formula: weight (lb) / height (in) / height (in) * 703

  // STEP 1: convert ft to in - multiply feet by 12.
  // STEP 2: add the value from STEP 1 to the value that is in inches by default
  // STEP 3: convert stone (st) to pound (lb) - multiply st by 14
  // STEP 4: add the value from STEP 3 to the value that is in pounds by default
  // STEP 5: apply Formula: weight (lb) / height (in) / height (in) * 703

  function onChange(evt: { target: { name: string; value: string } }) {
    const { name, value } = evt.target;
    setCurrentBmi({
      ...currentBmi,
      [name]: value,
    });
    props.setBmiImperial(() => total);
    console.log(name, value);
  }

  const { feet, inch, pounds, stone, total } = currentBmi;

  useEffect(() => {
    const totalHeightInch = Number(feet) * 12 + Number(inch);
    const totalWeightPounds = Number(stone) * 14 + Number(pounds);
    console.log(`stones : ${stone} , pounds: ${pounds}`);
    console.log(
      `total weight pounds: ${stone} * 14 + ${pounds}: ${totalWeightPounds}`
    );
    console.log(`feet: ${feet} , inch: ${inch}`);
    console.log(
      `total height inches: ${feet} * 12 + ${inch}: ${totalHeightInch}`
    );
    setCurrentBmi({
      ...currentBmi,
      total: Number(
        ((totalWeightPounds / totalHeightInch / totalHeightInch) * 703).toFixed(
          2
        )
      ),
    });

    props.setBmiImperial(() => total);
    localStorage.setItem("imperial", JSON.stringify({ ...currentBmi }));
    props.setMinWeight(() => (18.5 / 703) * totalHeightInch * totalHeightInch);
    props.setMaxWeight(() => (24.9 / 703) * totalHeightInch * totalHeightInch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [feet, inch, pounds, stone, total]);

  return (
    <Box component={Grid} container rowGap={2}>
      <Grid
        container
        columnGap={2}
        flexDirection={"row"}
        flexWrap={"nowrap"}
        marginBottom={"1rem"}
        marginTop={"1rem"}
      >
        {/* <InputText measure="ft" label="height" /> */}
        <FormControl fullWidth variant="filled">
          <TextField
            label={"Height"}
            variant={"outlined"}
            onChange={onChange}
            name={"feet"}
            value={feet}
            InputLabelProps={{
              style: { fontSize: "1.5rem", fontWeight: 400 },
            }}
            InputProps={{
              style: { fontSize: "1.5rem", fontWeight: 600 },
              endAdornment: (
                <InputAdornment
                  position="end"
                  sx={{
                    ".MuiTypography-root": {
                      fontSize: "1.5rem",
                      fontWeight: 600,
                    },
                  }}
                >
                  {"ft"}
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
        {/* <InputText measure="in" label="height" /> */}
        <FormControl fullWidth variant="filled">
          <TextField
            label={"Height"}
            variant={"outlined"}
            onChange={onChange}
            name={"inch"}
            value={inch}
            InputLabelProps={{
              style: { fontSize: "1.5rem", fontWeight: 400 },
            }}
            InputProps={{
              style: { fontSize: "1.5rem", fontWeight: 600 },
              endAdornment: (
                <InputAdornment
                  position="end"
                  sx={{
                    ".MuiTypography-root": {
                      fontSize: "1.5rem",
                      fontWeight: 600,
                    },
                  }}
                >
                  {"in"}
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
      </Grid>
      <Grid container columnGap={2} flexDirection={"row"} flexWrap={"nowrap"}>
        {/*  <InputText measure="st" label="weight" /> */}
        <FormControl fullWidth variant="filled">
          <TextField
            label={"Weight"}
            variant={"outlined"}
            onChange={onChange}
            name={"stone"}
            value={stone}
            InputLabelProps={{
              style: { fontSize: "1.5rem", fontWeight: 400 },
            }}
            InputProps={{
              style: { fontSize: "1.5rem", fontWeight: 600 },
              endAdornment: (
                <InputAdornment
                  position="end"
                  sx={{
                    ".MuiTypography-root": {
                      fontSize: "1.5rem",
                      fontWeight: 600,
                    },
                  }}
                >
                  {"st"}
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
        {/* <InputText measure="lbs" label="weight" /> */}
        <FormControl fullWidth variant="filled">
          <TextField
            label={"Weight"}
            variant={"outlined"}
            onChange={onChange}
            name={"pounds"}
            value={pounds}
            InputLabelProps={{
              style: { fontSize: "1.5rem", fontWeight: 400 },
            }}
            InputProps={{
              style: { fontSize: "1.5rem", fontWeight: 600 },
              endAdornment: (
                <InputAdornment
                  position="end"
                  sx={{
                    ".MuiTypography-root": {
                      fontSize: "1.5rem",
                      fontWeight: 600,
                    },
                  }}
                >
                  {"lbs"}
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
      </Grid>
    </Box>
  );
}

export default Imperial;
