const data = [
  {
    name: 'questions',
    value: 17
  },
  {
    name: 'schools',
    value: 25
  },
  {
    name: 'philosophers',
    value: 35
  },
]

// 初始化布局
const chartWidth = 480
const chartHeight = 300
const margin = 15

const containerWidth = chartWidth + margin * 2
const containerHeight = chartHeight + margin * 2


// 取数据
const names = Array.from(data, (d) => d.name)
const values = Array.from(data, (d) => d.value)
const indices = Array.from(data, (_, i) => i)

const step = chartWidth / names.length
const barWidth = step * 0.8
const xs = Array.from(indices, (i) => i * step)

const y = chartHeight // 因为所有条底部对齐，即图标的高度


/**
 * 映射
 */
const vmax = Math.max(...values)
const barHeights = Array.from(values, (v) => chartHeight * (v / vmax))

const colors = ["#5B8FF9", "#61DDAA", "#65789B"]

/**
 * 绘图
 */

function createSVGElement(type) {
  return document.createElementNS('http://www.w3.org/2000/svg', type)
}

const svg = document.getElementById('container')
svg.setAttribute('width', containerWidth)
svg.setAttribute('height', containerHeight)
svg.setAttribute('viewBox', [0, 0, containerWidth, containerHeight])

const g = createSVGElement('g')
g.setAttribute('transform', `translate(${margin}, ${margin})`)
svg.appendChild(g)

for (const index of indices) {
  // 提取需要绘制的属性
  const color = colors[index]
  const x = xs[index]
  const barHeight = barHeights[index]
  const value = values[index]

  // 绘制条
  const rect = createSVGElement('rect')
  rect.setAttribute("x", x)
  rect.setAttribute("y", y - barHeight)
  rect.setAttribute("fill", color)
  rect.setAttribute("width", barWidth)
  rect.setAttribute("height", barHeight)
  g.appendChild(rect)

  // 绘制值
  const text = createSVGElement("text")
  text.textContent = value
  text.setAttribute("text-anchor", "middle")
  text.setAttribute("fill", "white")
  text.setAttribute("font-family", "PingFangSC-Regular, sans-serif")
  text.setAttribute('font-size', 25)
  text.setAttribute("alignment-baseline", "middle")
  text.setAttribute("x", x + barWidth / 2)
  text.setAttribute("y", y - barHeight / 2)

  g.appendChild(text)
}
