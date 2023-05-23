/**
 * Ordinal 比例尺的值域和定义域都是序数，主要用于将序数属性映射为同为序数属性的视觉属性，比如颜色，形状等
 */

export function createOrdinal({ domain, range }) {
  const indexMap = new Map(domain.map((d, i) => [d, i]));
  return (x) => {
    const index = indexMap.get(x);
    return range[index % range.length];
  };
}
