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
          sx={{ position: "relative", zIndex: 3 }}
          paddingY={{
            lg: "2.5rem",
          }}
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
