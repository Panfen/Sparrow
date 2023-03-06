import { normalize } from './utils';

/**
 * 线性映射
 * - domain: 数据域（输入范围）
 * - range: 目标域（输出范围）
 * - interpolate: 插值函数
 */
export function createLinear({
  domain: [d0, d1],
  range: [r0, r1],
  interpolate = interpolateNumber,
}) {
  return (x) => {
    const t = normalize(x, d0, d1);
    // 默认使用线性的数值插值器
    // 如果是颜色可以使用颜色插值器
    return interpolate(t, r0, r1);
  };
}

/**
 * 数值插值器
 */
export function interpolateNumber(t, start, stop) {
  return start + (stop - start) * t;
}

/**
 * 颜色插值器
 * r|g|b 3颜色通道分别做数值插值
 */
export function interpolateColor(t, start, stop) {
  const r = interpolateNumber(t, start[0], stop[0]);
  const g = interpolateNumber(t, start[1], stop[1]);
  const b = interpolateNumber(t, start[2], stop[2]);
  return `rgb(${r}, ${g}, ${b})`;
}
