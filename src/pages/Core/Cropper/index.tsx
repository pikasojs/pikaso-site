import { Box, Button } from '@mui/material'
import type { CropperOptions } from 'pikaso'
import { useEffect, useState } from 'react'

import { CodeHighlighter } from 'src/components/CodeHighlighter'
import { Markdown } from 'src/components/Markdown'
import usePikaso from 'src/hooks/use-pikaso'

export default function Cropper() {
  const [ref, editor] = usePikaso()

  const [isCropping, setIsCropping] = useState(false)
  const [config] = useState<Partial<CropperOptions>>({
    keepRatio: false,
    circular: true,
    transformer: {
      borderStroke: 'blue'
    }
  })

  useEffect(() => {
    editor && editor.loadFromUrl('https://source.unsplash.com/random')
  }, [editor])

  useEffect(() => {
    editor &&
      window.addEventListener('resize', () => {
        editor.board.rescale()
      })
  }, [editor])

  const handleCrop = () => {
    if (isCropping) {
      editor?.cropper.crop()
    } else {
      editor?.cropper.start(config)
    }

    setIsCropping(state => !state)
  }

  const code = `editor.cropper.start(${JSON.stringify(config, null, 4)})`

  return (
    <>
      <Box>
        <Markdown>
          {() => `
        # Cropper
        Cropper component offers different types of croppings that are **Flexible Rectangle Cropping**, **Flexible Circular Cropping**, **Fixed Rectangle Cropping** and **Fixed Circular Cropping**.

        All the cropping types are fully customizable.
        
        ### API Reference
        **[Cropper API Reference](/api/classes/Cropper.html)**

        ### Playground:
      `}
        </Markdown>
      </Box>

      <Box display="flex">
        <Box width="600px" height="500px">
          <div
            ref={ref}
            style={{
              background: '#ccc',
              width: '100%',
              height: '100%'
            }}
          />
        </Box>

        <Box flexGrow={1} ml={2}>
          <CodeHighlighter language="typescript">{code}</CodeHighlighter>
        </Box>
      </Box>

      <Box my={2}>
        <Button variant="contained" color="secondary" onClick={handleCrop}>
          {isCropping ? 'Crop Image!' : 'Display Cropper!'}
        </Button>
      </Box>
    </>
  )
}
