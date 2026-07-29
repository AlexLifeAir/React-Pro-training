import { useActionState, memo } from "react";
import { Button } from "@mui/material";
import { Input } from "shared/input";
import {
  initialSubscribeState,
  subscribeAction,
} from "../model/subscribe-action";
import styles from "./SubscribeWizard.module.css";

export const SubscribeWizard = memo(function SubscribeWizard() {
  const [state, formAction, isPending] = useActionState(
    subscribeAction,
    initialSubscribeState,
  );

  return (
    <div className={styles.root}>
      <div className={styles.steps} aria-label="Шаги подписки">
        <span
          className={`${styles.step} ${state.step === 1 ? styles.active : ""}`}
        >
          1. Email
        </span>
        <span className={styles.divider} />
        <span
          className={`${styles.step} ${state.step === 2 ? styles.active : ""}`}
        >
          2. Подтверждение
        </span>
      </div>

      {state.step === 1 && (
        <form className={styles.form} action={formAction}>
          <input type="hidden" name="intent" value="email" />
          <h2 className={styles.title}>Подписка на новости</h2>
          <p className={styles.subtitle}>Шаг 1 — введите email</p>

          <Input
            name="email"
            type="email"
            label="Email"
            variant="outlined"
            fullWidth
            defaultValue={state.email}
            disabled={isPending}
            error={state.status === "error"}
            helperText={state.status === "error" ? state.message : undefined}
          />

          <Button
            type="submit"
            variant="contained"
            className={styles.submit}
            disabled={isPending}
          >
            {isPending ? "Проверяем..." : "Далее"}
          </Button>
        </form>
      )}

      {state.step === 2 && state.status !== "success" && (
        <form className={styles.form} action={formAction}>
          <h2 className={styles.title}>Подтверждение подписки</h2>
          <p className={styles.subtitle}>
            Шаг 2 — подтвердите подписку для{" "}
            <strong className={styles.email}>{state.email}</strong>
          </p>

          {state.status === "error" && state.message && (
            <p className={styles.error} role="alert">
              {state.message}
            </p>
          )}

          <div className={styles.actions}>
            <Button
              type="submit"
              name="intent"
              value="back"
              variant="outlined"
              className={styles.back}
              disabled={isPending}
            >
              Назад
            </Button>
            <Button
              type="submit"
              name="intent"
              value="confirm"
              variant="contained"
              className={styles.submit}
              disabled={isPending}
            >
              {isPending ? "Отправляем..." : "Подтвердить"}
            </Button>
          </div>
        </form>
      )}

      {state.status === "success" && (
        <div className={styles.success} role="status">
          <h2 className={styles.title}>Готово</h2>
          <p className={styles.successMessage}>{state.message}</p>
        </div>
      )}

      {isPending && (
        <p className={styles.pending} aria-live="polite">
          pending — отправка...
        </p>
      )}
    </div>
  );
});
