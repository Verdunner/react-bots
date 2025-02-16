export const timeRanges = ['24h', '7 days', '30 days', 'All time'];

export const timeRangesMapped: Record<string, string> = {
    '24h': '24h',
    '7 days': '7d',
    '30 days': '30d',
    'All time': 'all_time',
};

export const botSlots = [
    'orange_bot',
    'empty_slot',
    'blue_bot',
    'green_bot',
    'yellow_bot',
    'red_bot',
];

export const botTitles: Record<string, string> = {
    yellow_bot: 'Megabot',
    white_bot: 'Defence',
    green_bot: 'Defence',
    red_bot: 'Attack',
    blue_bot: 'Balance',
    orange_bot: 'Attack',
};
