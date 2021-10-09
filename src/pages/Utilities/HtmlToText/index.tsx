import { useTitle } from 'react-use'

import { Markdown } from 'src/components/Markdown'

export default function HtmlToText() {
  useTitle('Pikaso | Utilities | convertHtmlToText')

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
