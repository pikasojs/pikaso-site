import { useTitle } from 'react-use'

import { Markdown } from 'src/components/Markdown'

export default function DegreeToRadian() {
  useTitle('Pikaso | Utilities | convertDegreeToRadian')

  return (
    <Markdown>
      {() => `
        # [convertDegreeToRadian](/api/index.html#convertDegreeToRadian)

        The helper function converts degree value to radian.

        radian = (degree * PI) / 180
        ~~~ts
        function convertDegreeToRadian(degree: number): number
        ~~~
      `}
    </Markdown>
  )
}
