import { Button } from "@mui/material";
import { memo, useCallback } from "react";
import type {
  Control,
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";
import { useFieldArray } from "react-hook-form";
import { Input } from "shared/input";
import type { RegisterFormValues } from "../model/schema";
import styles from "./SocialLinksFields.module.css";

interface SocialLinksFieldsProps {
  control: Control<RegisterFormValues>;
  register: UseFormRegister<RegisterFormValues>;
  errors: FieldErrors<RegisterFormValues>;
}

interface SocialLinkRowProps {
  index: number;
  register: UseFormRegister<RegisterFormValues>;
  errorMessage?: string;
  onRemove: (index: number) => void;
}

const SocialLinkRow = memo(function SocialLinkRow({
  index,
  register,
  errorMessage,
  onRemove,
}: SocialLinkRowProps) {
  const handleRemove = useCallback(() => {
    onRemove(index);
  }, [onRemove, index]);

  return (
    <li className={styles.row}>
      <Input
        className={styles.field}
        label={`Ссылка ${index + 1}`}
        placeholder="https://github.com/username"
        variant="outlined"
        fullWidth
        {...register(`socialLinks.${index}.url`)}
        error={Boolean(errorMessage)}
        helperText={errorMessage}
      />
      <Button
        type="button"
        variant="outlined"
        color="inherit"
        className={styles.remove}
        onClick={handleRemove}
      >
        Удалить
      </Button>
    </li>
  );
});

export const SocialLinksFields = memo(function SocialLinksFields({
  control,
  register,
  errors,
}: SocialLinksFieldsProps) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "socialLinks",
  });

  const handleAppend = useCallback(() => {
    append({ url: "" });
  }, [append]);

  const handleRemove = useCallback(
    (index: number) => {
      remove(index);
    },
    [remove],
  );

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h2 className={styles.title}>Социальные ссылки</h2>
        <p className={styles.hint}>GitHub, GitVerse или другие профили</p>
      </div>

      <ul className={styles.list}>
        {fields.map((field, index) => {
          const message = errors.socialLinks?.[index]?.url?.message;

          return (
            <SocialLinkRow
              key={field.id}
              index={index}
              register={register}
              errorMessage={typeof message === "string" ? message : undefined}
              onRemove={handleRemove}
            />
          );
        })}
      </ul>

      <Button
        type="button"
        variant="outlined"
        className={styles.add}
        onClick={handleAppend}
      >
        Добавить ссылку
      </Button>
    </div>
  );
});
