export default function formatBalance(balance: number) {
    const str = String(balance);
    return str.slice(0, -3) + ' ' + str.slice(-3);
}
