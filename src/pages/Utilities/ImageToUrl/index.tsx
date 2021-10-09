import { useTitle } from 'react-use'

import { Markdown } from 'src/components/Markdown'

export default function ImageToUrl() {
  useTitle('Pikaso | Utilities | imageToDataUrl')

  return (
    <Markdown>
      {() => `
        # [imageToDataUrl](/api/index.html#imageToDataUrl)

        As opposed to [createImageFromUrl](/utilities/create-image-from-url), this function converts the given file to a base64 URL.

        ~~~ts
        function imageToDataUrl(file: File): Promise<string>
        ~~~
      `}
    </Markdown>
  )
}
