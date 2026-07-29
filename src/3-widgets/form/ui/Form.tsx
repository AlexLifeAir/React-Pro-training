import type { ButtonProps, TextFieldProps } from "@mui/material";
import {
  memo,
  useMemo,
  type ReactElement,
  type ReactNode,
  type SubmitEventHandler,
} from "react";
import type {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import { ButtonForm } from "shared/button-form";
import { Input } from "shared/input";
import styles from "./Form.module.css";

type FormButtonProps = ButtonProps & {
  id?: string;
  title?: string;
};

export type FormInputConfig<T extends FieldValues> = TextFieldProps & {
  name: Path<T>;
};

interface FormProps<T extends FieldValues> {
  inputs: FormInputConfig<T>[];
  button: FormButtonProps[];
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  onSubmit: SubmitEventHandler<HTMLFormElement>;
  children?: ReactNode;
}

interface FormFieldProps<T extends FieldValues> {
  name: Path<T>;
  inputProps: TextFieldProps;
  register: UseFormRegister<T>;
  errorMessage?: string;
}

type FormFieldComponent = <T extends FieldValues>(
  props: FormFieldProps<T>,
) => ReactElement;

const FormField = memo(function FormField<T extends FieldValues>({
  name,
  inputProps,
  register,
  errorMessage,
}: FormFieldProps<T>) {
  return (
    <Input
      className={styles.field}
      {...inputProps}
      {...register(name)}
      error={Boolean(errorMessage)}
      helperText={errorMessage}
    />
  );
}) as unknown as FormFieldComponent;

function FormComponent<T extends FieldValues>({
  inputs,
  button,
  register,
  errors,
  onSubmit,
  children,
}: FormProps<T>) {
  const fields = useMemo(
    () =>
      inputs.map((input) => {
        const { name, ...inputProps } = input;
        const message = errors[name]?.message;

        return {
          name,
          inputProps,
          errorMessage: typeof message === "string" ? message : undefined,
        };
      }),
    [inputs, errors],
  );

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      {fields.map(({ name, inputProps, errorMessage }) => (
        <FormField
          key={name}
          name={name}
          inputProps={inputProps}
          register={register}
          errorMessage={errorMessage}
        />
      ))}
      {children}
      {button.map((btn) => (
        <ButtonForm key={btn.id} {...btn} className={styles.submit} />
      ))}
    </form>
  );
}

type FormComponentType = <T extends FieldValues>(
  props: FormProps<T>,
) => ReactElement;

export const Form = memo(FormComponent) as unknown as FormComponentType;
