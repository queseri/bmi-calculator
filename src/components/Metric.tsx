import { Box, FormControl, Grid } from "@mui/material";
import InputText from "./InputText";

function Metric() {
  return (
    <Grid container columnGap={2} flexDirection={"row"} flexWrap={"nowrap"}>
      <Box component={Grid} item xs={6}>
        <InputText measure="cm" label="height" />
      </Box>
      <Box component={Grid} item xs={6}>
        <FormControl fullWidth variant="standard">
          <InputText measure="kg" label="weight" />
        </FormControl>
      </Box>
    </Grid>
  );
}

export default Metric;
