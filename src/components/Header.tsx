import { Box, Grid } from "@mui/material";
import Logo from "../assets/images/logo.svg";

function Header() {
  return (
    <Box component={"header"}>
      <Grid
        container
        justifyContent={{
          xs: "center",
          md: "flex-start",
        }}
        alignItems={"center"}
      >
        <Grid
          item
          component={"a"}
          href="/"
          paddingY={{
            xs: "1.5rem",
            lg: "2.5rem",
          }}
          position={"relative"}
          zIndex={3}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <img className="logo" src={Logo} alt="Body mass index" />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
