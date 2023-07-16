import { Box, Grid } from "@mui/material";
import InputText from "./InputText";

function Imperial() {
  return (
    <Box component={Grid} container rowGap={2}>
      <Grid container columnGap={2} flexDirection={"row"} flexWrap={"nowrap"}>
        <InputText measure="ft" />
        <InputText measure="in" />
      </Grid>
      <Grid container columnGap={2} flexDirection={"row"} flexWrap={"nowrap"}>
        <InputText measure="st" />
        <InputText measure="lbs" />
      </Grid>
    </Box>
  );
}

export default Imperial;
