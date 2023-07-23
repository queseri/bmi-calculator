import {
  Box,
  FormControl,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";

interface Metric {
  weight: number;
  height: number;
  total: number;
}

function Metric(props: { setBmi: (arg0: () => number) => void; bmi: number }) {
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
      [name]: Number(value),
    });
    props.setBmi(() => total);
  }

  const { weight, height, total } = currentBmi;

  useEffect(() => {
    setCurrentBmi({
      ...currentBmi,
      total: Number(((weight / height / height) * 10000).toFixed(2)),
    });
    props.setBmi(() => total);
    localStorage.setItem("metric", JSON.stringify({ ...currentBmi }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weight, height, total]);

  console.log(total);
  return (
    <Grid
      container
      spacing={2}
      flexDirection={"column"}
      flexWrap={"nowrap"}
      marginBottom={"1rem"}
      marginTop={"1rem"}
    >
      <Box component={Grid} item xs={12}>
        {/* <InputText measure="cm" label="height" /> */}

        <FormControl fullWidth variant="filled">
          <TextField
            id="height"
            type="text"
            label={"height"}
            name="height"
            variant={"outlined"}
            onChange={onChange}
            value={height}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">{"cm"}</InputAdornment>
              ),
            }}
          />
        </FormControl>
      </Box>

      <Box component={Grid} item xs={12}>
        <FormControl fullWidth variant="filled">
          <TextField
            id="weight"
            type="text"
            label={"weight"}
            name="weight"
            variant={"outlined"}
            onChange={onChange}
            value={weight}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">{"kg"}</InputAdornment>
              ),
            }}
          />
        </FormControl>
      </Box>
    </Grid>
  );
}

export default Metric;
