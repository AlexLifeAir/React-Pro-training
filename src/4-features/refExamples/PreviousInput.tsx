import { useEffect, useRef, useState } from "react";

export const PreviousInput = () => {
  const [value, setValue] = useState("");
  const previousValueRef = useRef("");

  useEffect(() => {
    previousValueRef.current = value;
  }, [value]);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <h3>Предыдущее значение: {previousValueRef.current}</h3>
    </div>
  );
};
