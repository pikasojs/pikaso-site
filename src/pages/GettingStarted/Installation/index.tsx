import raw from 'raw.macro'
import { useTitle } from 'react-use'

import { Markdown } from 'src/components/Markdown'

const doc = raw('./doc.md')

export default function Installation() {
  useTitle('Pikaso | Installation')

  return (
    <div>
      <Markdown>{doc}</Markdown>
    </div>
  )
}
