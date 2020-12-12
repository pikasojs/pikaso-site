export const codes = `
editor.board.background.fill('rgba(0, 0, 0, 0.5)')

await editor.loadFromUrl('/wallpaper.jpeg')
const photo = await editor.shapes.image.insert('/guys.png')

photo.update(
  {
    x: 50,
    y: 120,
    width: 900,
    height: 600
  },
  { duration: 0.5 }
)

editor.board.background.fill('rgba(255, 0, 255, 0.1)')

const heading = editor.shapes.label.insert({
  container: {
    x: 550,
    y: 100,
    rotation: -2
  },
  tag: {},
  text: {
    text: 'Looking for a great canvas image editor?',
    fontSize: 60,
    fill: 'gold',
    lineHeight: 1.2,
    fontFamily: 'Luckiest Guy'
  }
})

photo.update(
  {
    x: -105,
    y: 320
  },
  { duration: 0.5 }
)

heading.update(
  {
    x: 640,
    y: 320
  },
  { duration: 0.5 }
)

editor.shapes.label.insert({
  container: {
    x: 660,
    y: 460,
    rotation: -2
  },
  tag: {},
  text: {
    text: 'Pikaso is here!',
    fontSize: 60,
    fill: '#fff',
    lineHeight: 1.5,
    fontFamily: 'Passion One'
  }
})

const logo = await editor.shapes.image.insert('/logo.svg', {
  width: 100,
  height: 100,
  x: 760,
  y: 700
})

logo.addFilter({
  name: 'Invert'
})

const rect = editor.shapes.rect.insert({
  x: 480,
  y: 350,
  width: 1000,
  height: 200,
  fill: 'tomato',
  rotation: -2
})

rect.node.moveToBottom()
rect.node.moveUp()
rect.node.moveUp()
editor.board.draw()

logo.update(
  {
    x: 1270,
    y: 770,
    opacity: 0.2
  },
  { duration: 0.5 }
)
logo.node.moveToTop()
editor.board.draw()

const triangle = editor.shapes.triangle.insert({
  x: 100,
  y: 100,
  radius: 200,
  fill: 'gold'
})
triangle.update({
  rotation: -45,
  x: 0,
  y: -50
})

editor.shapes.line.insert({
  points: [-10, 115, 115, -10],
  strokeWidth: 5,
  stroke: '#fff'
})

editor.shapes.line.insert({
  points: [-10, 130, 130, -10],
  strokeWidth: 3,
  stroke: '#fff'
})
`
