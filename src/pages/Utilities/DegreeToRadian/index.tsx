import { Markdown } from 'src/components/Markdown'

export default function DegreeToRadian() {
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
