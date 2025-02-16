import React from 'react';
import { ReferenceLine } from 'recharts';

export const getVerticalLines = (data: { date: string; value: number }[]) => {
    return data.map((item, index) => {
        const dateStart = Number(item.date.slice(0, 2));
        let isVisible = false;

        // Формула для выравнивания вертикальных линий по оси X
        // Для дат 22-26 линии сдвинул динамически по индексу, чтобы они визуально совпадали с графиком
        if (dateStart >= 22 && dateStart <= 26) {
            isVisible = (index - 3) % 6 === dateStart - 21;
        }

        return (
            <ReferenceLine
                key={`${item.date}-${item.value}-${index}`}
                x={index}
                stroke="rgba(0, 105, 188, 0.2)"
                strokeDasharray="2 1"
                strokeOpacity={isVisible ? 1 : 0}
            />
        );
    });
};
