import { TextField, type TextFieldProps } from "@mui/material";
import { memo } from "react";

export const Input = memo(function Input(props: TextFieldProps) {
  return <TextField {...props} />;
});
