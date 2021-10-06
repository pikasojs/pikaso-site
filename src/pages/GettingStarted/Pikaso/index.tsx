import { useState } from 'react'
import { useEffectOnce, useTitle } from 'react-use'
import axios from 'axios'

import { Markdown } from 'src/components/Markdown'

export default function PikasoStart() {
  useTitle('Pikaso | Start')
  const [doc, setDoc] = useState('')

  useEffectOnce(() => {
    axios
      .get(
        `https://raw.githubusercontent.com/pikasojs/pikaso/master/README.md?rand=${Math.random()}`
      )
      .then(({ data }) => {
        setDoc(data)
      })
  })

  return (
    <div>
      <Markdown>{doc}</Markdown>
    </div>
  )
}
