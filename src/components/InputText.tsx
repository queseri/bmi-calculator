import { FormControl, InputAdornment, TextField } from "@mui/material";

function InputText(props: { measure: string }) {
  return (
    <FormControl fullWidth variant="filled">
      <TextField
        label="height"
        variant={"outlined"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">{props.measure}</InputAdornment>
          ),
        }}
      />
    </FormControl>
  );
}

export default InputText;
