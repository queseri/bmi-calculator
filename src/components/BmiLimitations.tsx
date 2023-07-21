import { Box, Grid, Paper, Typography } from "@mui/material";

function BmiLimitations(props: {
  content: string;
  title: string;
  img: string;
}) {
  return (
    <Grid
      item
      sm={6}
      md={4}
      padding={"1rem"}
      sx={{
        "&:last-child": {
          justifySelf: "center",
          paddingBlock: "2rem",
        //  margin: "auto",
        },
        "&:nth-last-child(2)": {
          justifySelf: "center",
        //  margin: "auto",
        },
      }}
    >
      <Paper elevation={3} sx={{ padding: "1rem" }}>
        <Box
          display={"flex"}
          justifyContent={"flex-start"}
          fontWeight={600}
          alignItems={"center"}
        >
          <img src={props.img} alt="" />
          <Typography variant="h3" fontSize={"1.25rem"}>
            {" "}
            {props.title}
          </Typography>
        </Box>
        <Typography variant="body1" textAlign={"left"}>
          {props.content}
        </Typography>
      </Paper>
    </Grid>
  );
}

export default BmiLimitations;
