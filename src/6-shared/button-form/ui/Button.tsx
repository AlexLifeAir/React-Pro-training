import { Button, type ButtonProps } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { memo } from "react";

type ButtonFormProps = ButtonProps & {
  title?: string;
};

export const ButtonForm = memo(function ButtonForm({
  variant,
  title,
  ...props
}: ButtonFormProps) {
  return (
    <Button variant={variant} endIcon={<SendIcon />} {...props}>
      {title}
    </Button>
  );
});
