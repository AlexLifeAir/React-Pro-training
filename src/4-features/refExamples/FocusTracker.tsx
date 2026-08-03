import { useRef } from "react";

import type { FocusEvent } from "react";

export const FocusTracker = () => {
  const firstInputRef = useRef<HTMLInputElement>(null);
  const secondInputRef = useRef<HTMLInputElement>(null);
  const focusTransitionsRef = useRef(0);

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    if (event.relatedTarget) {
      focusTransitionsRef.current += 1;
      console.log(
        `Переходов фокуса между полями: ${focusTransitionsRef.current}`,
      );
    }
  };

  const handleFocusFirst = () => {
    firstInputRef.current?.focus();
  };

  return (
    <div>
      <h2>FocusTracker</h2>
      <input
        ref={firstInputRef}
        type="text"
        placeholder="Первое поле"
        onFocus={handleFocus}
      />
      <input
        ref={secondInputRef}
        type="text"
        placeholder="Второе поле"
        onFocus={handleFocus}
      />
      <button type="button" onClick={handleFocusFirst}>
        Сфокусировать на первом
      </button>
    </div>
  );
};
