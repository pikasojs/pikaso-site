import raw from 'raw.macro'

import { useTitle } from 'react-use'

import { Markdown } from 'src/components/Markdown'

import { LoadFromFile } from './LoadFromFile'
import { LoadFromUrl } from './LoadFromUrl'
import { FillBackground } from './FillBackground'

const doc = raw('./doc.md')

export default function Background() {
  useTitle('Pikaso | Core Components | Background')
  return (
    <>
      <Markdown>{doc}</Markdown>

      <LoadFromUrl />
      <LoadFromFile />
      <FillBackground />
    </>
  )
}
