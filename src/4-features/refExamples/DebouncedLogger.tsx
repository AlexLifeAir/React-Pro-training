import { useEffect, useRef } from "react";

export const DebouncedLogger = () => {
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
            console.log(inputRef.current?.value);
        }, 1000);
    }
    useEffect(() => {
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [])


    return (
        <>
            <h1>DebouncedLogger</h1>
            <input ref={inputRef} type="text" onChange={handleChange} />
        </>)
};