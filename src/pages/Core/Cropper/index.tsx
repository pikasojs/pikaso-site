import { Box } from '@mui/material'
import { useTitle } from 'react-use'

import { Markdown } from 'src/components/Markdown'

import { Playground } from './Playground'

export default function Cropper() {
  useTitle('Pikaso | Core Components | Cropper')

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

      <Playground />
    </>
  )
}
