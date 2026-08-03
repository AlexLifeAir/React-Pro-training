import { useEffect, useRef } from "react";

export const WebSocketLogger = () => {

    const socketRef = useRef<WebSocket | null>(null);
    const connectCountRef = useRef(0);

    useEffect(() => {
        const socket = new WebSocket("wss://echo.websocket.org");
        socketRef.current = socket
        
        socket.onopen = () => {
            console.log("WebSocket соединен")
            connectCountRef.current += 1;
        }
        socket.onmessage = (event) => console.log("Получено от сервера:", event.data);

        return () => {
            socketRef.current?.close()
        }
    }, [])

    return (
        <>
        <h1>WebSocketLogger</h1>
        </>)
};