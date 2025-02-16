import { timeRangesMapped } from '@/constants/constants';
import jsonData from '@/constants/data.min.json';
const { bots } = jsonData;

export const getBotProfit = (
    name: string,
    currentTimeRange: string
): number | string => {
    const bot = bots.find((bot) => bot.name === name);
    if (!bot) return '';

    const key = timeRangesMapped[currentTimeRange];
    const value = key ? bot[key as keyof typeof bot] : null;

    return typeof value === 'number' ? value : '';
};
