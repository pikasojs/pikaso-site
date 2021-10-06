import { Markdown } from 'src/components/Markdown'

export default function HtmlToText() {
  return (
    <Markdown>
      {() => `
        # [convertHtmlToText](/api/index.html#convertHtmlToText)

        Converts given HTML to the plain text.

        ~~~ts
        function convertHtmlToText(html = ''): string
        ~~~
      `}
    </Markdown>
  )
}
