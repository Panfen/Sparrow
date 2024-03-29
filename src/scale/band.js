/**
 * Band比例尺的值域为数值类型
 * step = bandWidth + padding(百分比)
 */

import { createOrdinal } from './ordinal';
import { band } from './utils';

export function createBand(options) {
  const { bandRange, bandWidth, step } = band(options);
  const scale = createOrdinal({ ...options, range: bandRange });

  scale.bandWidth = () => bandWidth;
  scale.step = () => step;

  return scale;
}
