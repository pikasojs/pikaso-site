import { useTitle } from 'react-use'
import raw from 'raw.macro'

import { Markdown } from 'src/components/Markdown'
import { ReleaseBanner } from 'src/components/ReleaseBanner'

const doc = raw('./doc.md')

export default function CreateCustomShapes() {
  useTitle('Pikaso | Advanced | NodeJs')

  return (
    <div>
      <ReleaseBanner text="New as of v2.7.0" />
      <Markdown>{doc}</Markdown>
    </div>
  )
}
