import { ClickTimer, DebouncedLogger, FocusTracker, PreviousInput, WebSocketLogger } from "features/index";

export const MainPage = () => {
  return (
    <>
      <div>MainPage</div>
      <ClickTimer />
      <PreviousInput />
      <FocusTracker />
      <DebouncedLogger />
      <WebSocketLogger />
    </>
  );
};
