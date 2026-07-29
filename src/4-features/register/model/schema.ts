import { z } from "zod";

export const registerSchema = z
  .object({
    username: z.string().trim().min(1, "Обязательное поле"),
    email: z
      .string()
      .trim()
      .min(1, "Обязательное поле")
      .refine((value) => value.includes("@"), {
        message: "Email должен содержать @",
      }),
    password: z
      .string()
      .min(1, "Обязательное поле")
      .min(6, "Пароль — минимум 6 символов"),
    confirmPassword: z.string().min(1, "Обязательное поле"),
    socialLinks: z.array(
      z.object({
        url: z.string().url("Некорректный URL"),
      }),
    ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли должны совпадать",
    path: ["confirmPassword"],
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;
