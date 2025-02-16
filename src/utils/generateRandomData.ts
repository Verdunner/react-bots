export default function generateRandomData() {
    const result: { date: string; value: number }[] = [];
    const dates = [
        '21.04',
        '22.04',
        '23.04',
        '24.04',
        '25.04',
        '26.04',
        '27.04',
    ];

    const getRandomValue = () =>
        Math.floor(Math.random() * (1300 - 700 + 1)) + 700;

    dates.forEach((date) => {
        const count = date === '21.04' || date === '27.04' ? 3 : 6;
        for (let i = 0; i < count; i++) {
            result.push({ date, value: getRandomValue() });
        }
    });

    return result;
}
