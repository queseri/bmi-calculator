export const bgLayout = {
  zIndex: 2,
  "&::before": {
    position: "absolute",
    content: '""',
    top: 0,
    left: 0,
    borderBottom: {
      xs: "1px solid black",
      sm: "none",
    },
    width: {
      xs: "100%",
      md: "65%",
    },
    height: {
      xs: "100%",
      md: "100%",
    },

    zIndex: -1,
    borderRadius: "0px 0px 35px 35px",
    background:
      "linear-gradient(315deg, #D6E5FC 0%, rgba(214, 252, 254, 0.00) 100%)",
  },
};
