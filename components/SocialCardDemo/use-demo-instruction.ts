import { useEffect } from 'react'

import { usePikaso } from '../../hooks/use-pikaso'
import { useFonts } from '../../hooks/use-fonts'

import { delay } from '../../utils/delay'

const defaultDelayValue = 700

export function useDemoInstructions(): [typeof ref] {
  const [ref, editor] = usePikaso()
  useFonts()

  const code = async () => {
    editor.board.background.fill('rgba(0, 0, 0, 0.5)')
    await delay(defaultDelayValue)

    await editor.loadFromUrl('/images/demo-wallpaper-1.jpeg')
    await delay(defaultDelayValue)

    const photo = await editor.shapes.image.insert('/images/guys.png')
    await delay(defaultDelayValue)

    photo.select()
    photo.update(
      {
        x: 50,
        y: 120,
        width: 900,
        height: 600
      },
      { duration: 0.5 }
    )
    await delay(defaultDelayValue)
    photo.deselect()

    editor.board.background.fill('rgba(255, 0, 255, 0.1)')
    await delay(defaultDelayValue)

    const heading = editor.shapes.label.insert({
      container: {
        x: 550,
        y: 100,
        rotation: -2
      },
      tag: {},
      text: {
        text: 'Looking for a great\n canvas image editor?',
        fontSize: 60,
        fill: 'gold',
        lineHeight: 1.2,
        fontFamily: 'Luckiest Guy'
      }
    })
    await delay(defaultDelayValue)

    photo.select()
    photo.update(
      {
        x: -105,
        y: 320
      },
      { duration: 0.5 }
    )
    await delay(defaultDelayValue)
    photo.deselect()

    heading.select()
    heading.update(
      {
        y: 320
      },
      { duration: 0.5 }
    )
    await delay(defaultDelayValue)

    heading.update(
      {
        x: 640
      },
      { duration: 0.5 }
    )
    await delay(defaultDelayValue)
    heading.deselect()

    editor.shapes.label.insert({
      container: {
        x: 660,
        y: 460,
        rotation: -2
      },
      tag: {},
      text: {
        text: 'Try Pikaso!',
        fontSize: 60,
        fill: '#fff',
        lineHeight: 1.5,
        fontFamily: 'Passion One'
      }
    })
    await delay(defaultDelayValue)

    const logo = await editor.shapes.image.insert('/images/logo.svg', {
      width: 100,
      height: 100,
      x: 760,
      y: 700
    })
    await delay(defaultDelayValue)

    logo.select()
    logo.addFilter({
      name: 'Invert'
    })
    await delay(defaultDelayValue)
    logo.deselect()
    await delay(defaultDelayValue)

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
    await delay(defaultDelayValue)

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
    await delay(defaultDelayValue)

    const triangle = editor.shapes.triangle.insert({
      x: 100,
      y: 100,
      radius: 200,
      fill: 'gold'
    })
    await delay(defaultDelayValue)
    triangle.select()
    triangle.update({
      rotation: -45,
      x: 0,
      y: -50
    })
    await delay(defaultDelayValue)
    triangle.deselect()

    editor.shapes.line.insert({
      points: [-10, 115, 115, -10],
      strokeWidth: 5,
      stroke: '#fff'
    })
    await delay(defaultDelayValue)

    editor.shapes.line.insert({
      points: [-10, 130, 130, -10],
      strokeWidth: 3,
      stroke: '#fff'
    })
    await delay(defaultDelayValue)
  }

  useEffect(() => {
    if (!editor) {
      return
    }

    const start = async () => {
      await code()
    }

    start()
    // eslint-disable-next-line
  }, [editor])

  return [ref]
}
