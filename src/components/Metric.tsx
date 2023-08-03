import {
  Box,
  FormControl,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { bmiCalculator } from "../utils/bmiCalculator";

interface Metric {
  weight: number;
  height: number;
  total: number;
}

function Metric(props: {
  setBmiMetric: (arg0: () => number) => void;
  setMinWeight: (arg0: () => number) => void;
  setMaxWeight: (arg0: () => number) => void;
}) {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const getMetricTotal = JSON.parse(localStorage.getItem("metric")!);
  const initialBmi: Metric = {
    weight: getMetricTotal !== null ? Number(getMetricTotal.weight) : 0,
    height: getMetricTotal !== null ? Number(getMetricTotal.height) : 0,
    total: getMetricTotal !== null ? Number(getMetricTotal.total) : 0,
  };

  const [currentBmi, setCurrentBmi] = useState(initialBmi);

  function onChange(evt: { target: { name: string; value: string } }) {
    const { name, value } = evt.target;
    setCurrentBmi({
      ...currentBmi,
      [name]: value,
    });
    // props.setBmiMetric(() => total);
  }

  const { weight, height, total } = currentBmi;

  // minWeight = 18.5 / 10000 * height * height
  // maxWeight = 24.9 / 10000 * height * height

  useEffect(() => {
    setCurrentBmi({
      ...currentBmi,
      // total: Number(((weight / height / height) * 10000).toFixed(2)),
      total: Number(bmiCalculator(weight, height, 10000).toFixed(2)),
    });
    props.setBmiMetric(() => total);
    localStorage.setItem("metric", JSON.stringify({ ...currentBmi }));
    props.setMinWeight(() => (18.5 / 10000) * height * height);
    props.setMaxWeight(() => (24.9 / 10000) * height * height);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weight, height, total]);

  //  console.log(total);
  return (
    <Grid container spacing={2}>
      <Box component={Grid} item xs={12} sm={6}>
        <FormControl fullWidth variant="filled">
          <TextField
            id="height"
            type="text"
            label={"Height"}
            name="height"
            variant={"outlined"}
            onChange={onChange}
            value={height}
            InputLabelProps={{
              style: { fontSize: "0.875rem", fontWeight: 400, lineHeight: 1.5 },
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
                  {"cm"}
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
      </Box>

      <Box component={Grid} item xs={12} sm={6}>
        <FormControl fullWidth variant="filled">
          <TextField
            id="weight"
            type="text"
            label={"Weight"}
            name="weight"
            variant={"outlined"}
            onChange={onChange}
            value={weight}
            InputLabelProps={{
              style: { fontSize: "0.875rem", fontWeight: 400, lineHeight: 1.5 },
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
                  {"kg"}
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
      </Box>
    </Grid>
  );
}

export default Metric;
