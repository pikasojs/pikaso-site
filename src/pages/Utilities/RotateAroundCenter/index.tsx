import { Markdown } from 'src/components/Markdown'

export default function RotateAroundCenter() {
  return (
    <Markdown>
      {() => `
        # [rotateAroundCenter](/api/index.html#rotateAroundCenter)

        Based on the angle given, this helper function rotates the given node around its center.

        ~~~ts
        rotateAroundCenter(node: Konva.Group | Konva.Shape | Konva.Layer | Konva.Stage, theta: number): void
        ~~~
      `}
    </Markdown>
  )
}
