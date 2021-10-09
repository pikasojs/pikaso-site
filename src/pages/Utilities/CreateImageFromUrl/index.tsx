import { useTitle } from 'react-use'

import { Markdown } from 'src/components/Markdown'

export default function CreateImageFromUrl() {
  useTitle('Pikaso | Utilities | createImageFromUrl')

  return (
    <Markdown>
      {() => `
        # [createImageFromUrl](/api/index.html#createImageFromUrl)

        The helper function gets a url and download and  that to an Image.
        
        ~~~ts
          function createImageFromUrl(url: string): Promise<Konva.Image>
        ~~~
      `}
    </Markdown>
  )
}
