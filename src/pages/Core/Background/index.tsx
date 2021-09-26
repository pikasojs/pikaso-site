import { Box } from '@mui/material'

import { Markdown } from 'src/components/Markdown'

import { LoadFromFile } from './LoadFromFile'
import { LoadFromUrl } from './LoadFromUrl'

export default function Background() {
  return (
    <>
      <Markdown>
        {() => `
        # Background
        
        ### API Reference
        **[classes/Background.html](/api/classes/Background.html)**

        ### Usage
      `}
      </Markdown>

      <Box my={10}>
        <LoadFromUrl />
      </Box>

      <Box my={10}>
        <LoadFromFile />
      </Box>
    </>
  )
}
