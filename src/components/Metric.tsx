import { Box, FormControl, Grid } from "@mui/material";
import InputText from "./InputText";

function Metric() {
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
        <InputText measure="cm" label="height" />
      </Box>
      <Box component={Grid} item xs={12}>
        <FormControl fullWidth variant="standard">
          <InputText measure="kg" label="weight" />
        </FormControl>
      </Box>
    </Grid>
  );
}

export default Metric;
