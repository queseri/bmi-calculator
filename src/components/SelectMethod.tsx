import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  useTheme,
} from "@mui/material";
import React from "react";

function SelectMethod(props: {
  method: string;
  handleChangeMethod: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => void;
}) {
  const colorTheme = useTheme();
  const { status } = colorTheme;
  const { gunMetal } = status;

  return (
    <FormControl fullWidth>
      <FormLabel
        id="measurement"
        aria-hidden={true}
        sx={{
          fontSize: "1.5rem",
          fontWeight: 600,
          color: { gunMetal },
        }}
      >
        Enter your details below
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="measurement"
        defaultValue={props.method}
        value={props.method}
        onChange={props.handleChangeMethod}
        name="measurement-group"
        sx={{
          marginBlock: "1rem",
        }}
      >
        {/* METRIC RADIO BUTTON */}
        <FormControlLabel
          sx={{
            flex: "1 1",
            "& .MuiFormControlLabel-label": {
              fontWeight: 600,
            },
          }}
          value="metric"
          control={<Radio />}
          label="Metric"
        />
        {/*IMPERIAL RADIO BUTTON */}
        <FormControlLabel
          sx={{
            flex: "1 1",
            "& .MuiFormControlLabel-label": {
              fontWeight: 600,
            },
          }}
          value="imperial"
          control={<Radio />}
          label="Imperial"
        />
      </RadioGroup>
    </FormControl>
  );
}

export default SelectMethod;
