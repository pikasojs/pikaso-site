import { Markdown } from 'src/components/Markdown'

export default function GetRotatedPoint() {
  return (
    <Markdown>
      {() => `
        # [getPointsDistance](/api/index.html#getPointsDistance)

        Calculates new position of the given point after rotating around the given angle.

        [More Info](https://drive.google.com/file/d/1yhi1vG9a_U0rPpz57jWEi8DQJemrtjr9/view?usp=sharing)

        ~~~ts
        getRotatedPoint(point: Point, angle: number): Point
        ~~~
      `}
    </Markdown>
  )
}
