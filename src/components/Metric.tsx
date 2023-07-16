import {
  Box,
  FormControl,
  Grid,
} from "@mui/material";
import InputText from "./InputText";

function Metric() {
  return (
    <Grid container columnGap={2} flexDirection={"row"} flexWrap={"nowrap"}>
      <Box component={Grid} xs={6}>
        <InputText measure="cm" />
      </Box>
      <Box component={Grid} xs={6}>
        <FormControl fullWidth variant="standard">
          <InputText measure="kg" />
        </FormControl>
      </Box>
    </Grid>
  );
}

export default Metric;
