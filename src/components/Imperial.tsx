import { Box, Grid } from "@mui/material";
import InputText from "./InputText";

function Imperial() {
  return (
    <Box component={Grid} container rowGap={2}>
      <Grid container columnGap={2} flexDirection={"row"} flexWrap={"nowrap"}>
        <InputText measure="ft" label="height" />
        <InputText measure="in" label="height"/>
      </Grid>
      <Grid container columnGap={2} flexDirection={"row"} flexWrap={"nowrap"}>
        <InputText measure="st" label="weight"/>
        <InputText measure="lbs" label="weight"/>
      </Grid>
    </Box>
  );
}

export default Imperial;
