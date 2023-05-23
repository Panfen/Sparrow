function transform(type, transformer) {
  transformer.type = () => type;
  return transformer;
}

export function translate(tx = 0, ty = 0) {
  return transform('translate', ([px, py]) => [px + tx, py + ty]);
}

export function scale(sx = 1, sy = 1) {
  return transform('scale', ([px, py]) => [px * sx, py * sy]);
}

// 坐标反转
export function reflect() {
  return transform('reflect', scale(-1, -1));
}

export function reflectX() {
  return transform('reflectX', scale(-1, 1));
}

export function reflectY() {
  return transform('reflectY', scale(1, -1));
}

// 转置（交换x y）
export function transpose() {
  return transform('transpose', ([px, py]) => [py, px]);
}

// 极坐标 转 直角坐标
export function polar() {
  return transform('polar', ([theta, radius]) => {
    const x = radius * Math.cos(theta);
    const y = radius * Math.sin(theta);
    return [x, y];
  });
}
