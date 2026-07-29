import { zodResolver } from "@hookform/resolvers/zod";
import type { ButtonProps } from "@mui/material";
import { useCallback, type SubmitEventHandler } from "react";
import { useForm } from "react-hook-form";
import {
  registerSchema,
  SocialLinksFields,
  type RegisterFormValues,
} from "features/register";
import { SubscribeWizard } from "features/subscribe";
import { Form, type FormInputConfig } from "widgets/form";
import styles from "./MainPage.module.css";

type FormButtonProps = ButtonProps & {
  id?: string;
  title?: string;
};

const formInputs: FormInputConfig<RegisterFormValues>[] = [
  {
    name: "username",
    label: "Имя пользователя",
    variant: "outlined",
    fullWidth: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    variant: "outlined",
    fullWidth: true,
  },
  {
    name: "password",
    label: "Пароль",
    type: "password",
    variant: "outlined",
    fullWidth: true,
  },
  {
    name: "confirmPassword",
    label: "Подтверждение пароля",
    type: "password",
    variant: "outlined",
    fullWidth: true,
  },
];

const formButton: FormButtonProps[] = [
  {
    id: "submit",
    title: "Отправить",
    variant: "contained",
    type: "submit",
  },
];

const registerResolver = zodResolver(registerSchema);

const registerDefaultValues: RegisterFormValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  socialLinks: [{ url: "" }],
};

export const MainPage = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: registerResolver,
    defaultValues: registerDefaultValues,
  });

  const onSubmit = useCallback((data: RegisterFormValues) => {
    console.log(data);
  }, []);

  const onFormSubmit = useCallback<SubmitEventHandler<HTMLFormElement>>(
    (event) => {
      void handleSubmit(onSubmit)(event);
    },
    [handleSubmit, onSubmit],
  );

  return (
    <section className={styles.page}>
      <div className={styles.layout}>
        <div className={styles.panel}>
          <h1 className={styles.title}>Регистрация</h1>
          <Form
            inputs={formInputs}
            button={formButton}
            register={register}
            errors={errors}
            onSubmit={onFormSubmit}
          >
            <SocialLinksFields
              control={control}
              register={register}
              errors={errors}
            />
          </Form>
        </div>

        <div className={styles.panel}>
          <SubscribeWizard />
        </div>
      </div>
    </section>
  );
};
