import { useEffect, useRef, useState } from "react";

export const PreviousInput = () => {
  const [value, setValue] = useState("");
  const previousValueRef = useRef("");
  const displayRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (displayRef.current) {
      displayRef.current.textContent = `Предыдущее значение: ${previousValueRef.current}`;
    }
    previousValueRef.current = value;
  }, [value]);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <h3 ref={displayRef}>Предыдущее значение: </h3>
    </div>
  );
};
