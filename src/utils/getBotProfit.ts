import { timeRangesMapped } from '@/constants/constants';
import jsonData from '@/constants/data.min.json';
const { bots } = jsonData;

export const getBotProfit = (
    name: string,
    currentTimeRange: string
): number => {
    const bot = bots.find((bot) => bot.name === name);
    if (!bot) return 0;

    const key = timeRangesMapped[currentTimeRange];
    const value = key ? bot[key as keyof typeof bot] : null;

    return typeof value === 'number' ? value : 0;
};
