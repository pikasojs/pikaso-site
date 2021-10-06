import { Markdown } from 'src/components/Markdown'

export default function GetCenterPoint() {
  return (
    <Markdown>
      {() => `
        # [getRotateCenterPoint](/api/index.html#getRotateCenterPoint)

        The helper function calculates the center point of the given input point based on the given angle in radian.

        ~~~ts
        function getRotateCenterPoint({ x, y }: Point, radian: number): Point
        ~~~
      `}
    </Markdown>
  )
}
