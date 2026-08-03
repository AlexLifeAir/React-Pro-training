import { useEffect, useRef } from 'react';

interface ClickData {
    startTime: number | null;
    clickCount: number;
}

export const ClickTimer = () => {
    const clickDataRef = useRef<ClickData>({
        startTime: null,
        clickCount: 0,
       });

       const count = useRef(0);
       useEffect(() => {
        console.log(`отрендерился: ${count.current} раз(а)`);
      });

    const handleClick = () => {
        const currentTime = Date.now();
        clickDataRef.current.clickCount += 1;

        if (clickDataRef.current.startTime === null) {
            clickDataRef.current.startTime = currentTime;
            console.log('Первый клик зафиксирован.');
        } else {
            const timeDifference = currentTime - clickDataRef.current.startTime;
            console.log(`Разница с первым кликом: ${timeDifference} мс`);
        }

        console.log(`Общее количество кликов: ${clickDataRef.current.clickCount}`);
    };

    return (
        <>
            <h1>Таймер кликов</h1>
            <button onClick={handleClick}>
                Кликни меня
            </button>
        </>
    );
};
