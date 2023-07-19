import { FormControl, InputAdornment, TextField } from "@mui/material";

function InputText(props: { measure: string, label: string }) {
  function onChange(evt: { target: { value: any; }; }) {
    console.log(evt.target.value);
  }
  return (
    <FormControl fullWidth variant="filled">
      <TextField
        label={props.label}
        variant={"outlined"}
        onChange={onChange}
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
