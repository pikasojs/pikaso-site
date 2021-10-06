import { Markdown } from 'src/components/Markdown'

export default function Omit() {
  return (
    <Markdown>
      {() => `
        # [omit](/api/index.html#omit)

        This helper function creates an object composed of the own and inherited enumerable property paths of object that are not omitted.

        ~~~ts
        function omit(object: object, keys: string[]): object
        ~~~
      `}
    </Markdown>
  )
}
