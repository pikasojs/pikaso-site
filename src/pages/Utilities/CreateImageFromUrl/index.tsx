import { Markdown } from 'src/components/Markdown'

export default function CreateImageFromUrl() {
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
