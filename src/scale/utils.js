/**
 * 域内归一化
 */
export function normalize(value, start, stop) {
  return (value - start) / (stop - start);
}

export function tickStep(min, max, count) {
  const e10 = Math.sqrt(50); // 7.07
  const e5 = Math.sqrt(10); // 3/16
  const e2 = Math.sqrt(2); // 1.41

  // 获取目标间隔 step0，设step0 = 10 ^ m
  const step0 = Math.abs(max - min) / Math.max(0, count);
  // 获得step1的初始值 = 10 ^ n < step0，其中n为满足条件的最大整数
  let step1 = 10 ** Math.floor(Math.log(step0) / Math.LN10);
  // 计算step1和step0的误差，error = 10 ^ m / 10 ^ n = 10 ^ (m - n)
  const error = step0 / step1;
  // 根据当前的误差改变step1的值，从而减少误差
  // 1. 当 m - n >= 0.85 = log(e10) 的时候，step1 * 10
  // 可以减少log(10) = 1 的误差
  if (error >= e10) step1 *= 10;
  // 2. 当 0.85 > m - n >= 0.5 = log(e5) 的时候，step1 * 5
  // 可以减少 log(5) = 0.7 的误差
  else if (error >= e5) step1 *= 5;
  // 3. 当 0.5 > m - n >= 0.15 = log(e2) 的时候，step1 * 2
  // 那么可以减少 log(2) = 0.3 的误差
  else if (error >= e2) step1 *= 2;
  // 4. 当 0.15 > m - n > 0 的时候，step1 * 1
  return step1;
}

export function ticks(min, max, count) {
  const step = tickStep(min, max, count);
  // 让start和stop都是step的整数倍，这样生成的ticks都是step的整数倍，增加可读性
  const start = Math.ceil(min / step);
  const stop = Math.floor(max / step);
  const n = Math.ceil(stop - start + 1);
}

export function nice(domain, interval) {

}
