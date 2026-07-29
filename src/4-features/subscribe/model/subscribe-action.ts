export type SubscribeStep = 1 | 2;

export type SubscribeStatus = "idle" | "error" | "success";

export type SubscribeState = {
  step: SubscribeStep;
  email: string;
  status: SubscribeStatus;
  message: string | null;
};

export const initialSubscribeState: SubscribeState = {
  step: 1,
  email: "",
  status: "idle",
  message: null,
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const isValidEmail = (email: string) =>
  email.includes("@") && email.indexOf("@") < email.lastIndexOf(".");

export async function subscribeAction(
  prevState: SubscribeState,
  formData: FormData,
): Promise<SubscribeState> {
  const intent = String(formData.get("intent") ?? "");

  await delay(900);

  if (intent === "email") {
    const email = String(formData.get("email") ?? "").trim();

    if (!email) {
      return {
        step: 1,
        email: "",
        status: "error",
        message: "Укажите email",
      };
    }

    if (!isValidEmail(email)) {
      return {
        step: 1,
        email,
        status: "error",
        message: "Некорректный email",
      };
    }

    return {
      step: 2,
      email,
      status: "idle",
      message: null,
    };
  }

  if (intent === "confirm") {
    if (!prevState.email) {
      return {
        step: 1,
        email: "",
        status: "error",
        message: "Укажите email",
      };
    }

    return {
      step: 2,
      email: prevState.email,
      status: "success",
      message: `Подписка оформлена на ${prevState.email}`,
    };
  }

  if (intent === "back") {
    return {
      step: 1,
      email: prevState.email,
      status: "idle",
      message: null,
    };
  }

  return prevState;
}
