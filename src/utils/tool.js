//随机数
export function randomNum(min, max) {
    return parseInt(Math.random() * (max - min + 1) + min);
};
//随机颜色
export function randomColor(min, max) {
    const r = randomNum(min, max);
    const g = randomNum(min, max);
    const b = randomNum(min, max);
    return `rgb(${r},${g},${b})`;
};