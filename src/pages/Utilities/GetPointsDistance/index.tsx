import { useTitle } from 'react-use'

import { Markdown } from 'src/components/Markdown'

export default function GetPointsDistance() {
  useTitle('Pikaso | Utilities | getPointsDistance')

  return (
    <Markdown>
      {() => `
        # [getPointsDistance](/api/index.html#getPointsDistance)

        Helper function that calculates the distance between two given points.

        ~~~ts
        function getPointsDistance(p1: Point, p2: Point): number
        ~~~
      `}
    </Markdown>
  )
}
