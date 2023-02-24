// 创建SVG元素
export function createSVGElement(type) {
  return document.createElementNS('http://www.w3.org/2000/svg', type);
}

// 将child节点挂载到parent节点上面
export function mount(parent, child) {
  if (parent) {
    parent.appendChild(child);
  }
}

export function applyAttributes(element, attributes) {
  for (const [key, value] of Object.entries(attributes)) {
    // 把类似 strokeWidth 的属性转换成 stroke-width 的形式
    const kebabCaseKey = key.replace(/[A-Z]/g, (d) => `-${d.toLocaleLowerCase()}`);
    element.setAttribute(kebabCaseKey, value);
  }
}

export function applyTransform(element, transform) {
  const oldTransform = element.getAttribute('transform') || '';
  // 将新的变换插到旧的变换之后
  element.setAttribute('transform', `${oldTransform ? `${oldTransform} ` : ''}${transform}`);
}
