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
const canvas = document.getElementById('container')
canvas.style.width = containerWidth + 'px'
canvas.style.height = containerHeight + 'px'

canvas.width = containerWidth * 2
canvas.height = containerHeight * 2 // 2倍像素

const context = canvas.getContext('2d')
context.scale(2, 2) // 抵消宽高2倍的影响

context.translate(margin, margin)

for (const index of indices) {
  // 提取需要绘制的属性
  const color = colors[index]
  const x = xs[index]
  const barHeight = barHeights[index]
  const value = values[index]

  // 绘制条
  context.fillStyle = color
  context.fillRect(x, y - barHeight, barWidth, barHeight)

  // 绘制值
  context.textAlign = 'center'
  context.textBaseline = 'middle'
  context.fillStyle = 'white'
  context.font = "25px PingFangSC-Regular, sans-serif"
  context.fillText(value, x + barWidth / 2, y - barHeight / 2)
}

