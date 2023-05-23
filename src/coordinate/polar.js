import {
  translate, scale, reflectY, polar as polarT,
} from './transforms';
import { curry } from '../utils';

function coordinate(transformOptions, canvasOptions) {
  const { width, height } = canvasOptions;
  const {
    innerRadius, outerRadius, startAngle, endAngle,
  } = transformOptions;

  // 保证最后经过cartesian变换后是一个圆形，需要根据画布宽高去调整
  const aspect = width / height;
  const sx = aspect > 1 ? 1 / aspect : 1;
  const sy = aspect > 1 ? 1 : aspect;

  return [
    // 以画布中心沿着y方向旋转
    translate(0, -0.5),
    reflectY(),
    translate(0, 0.5),

    // 调整角度和半径范围
    scale(endAngle - startAngle, outerRadius - innerRadius),
    translate(startAngle, innerRadius),
    polarT(),

    // 改变大小内切画布
    scale(sx, sy),
    scale(0.5, 0.5),

    // 移动到画布中心
    translate(0.5, 0.5),
  ];
}

export const polar = curry(coordinate);
