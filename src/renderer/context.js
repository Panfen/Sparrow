import { createSVGElement, mount } from './utils';

export function createContext(width, height) {
  // 创建画布svg节点，并且设置宽高
  const svg = createSVGElement('svg');
  svg.setAttribute('width', width);
  svg.setAttribute('height', height);
  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);

  // 创建挂载g节点，并且把该g节点挂载到svg节点上
  const g = createSVGElement('g');
  mount(svg, g);

  // 返回节点
  return {
    node: svg,
    group: g,
  };
}
