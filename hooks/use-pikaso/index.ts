import { useRef, useState } from 'react'

import { useEffectOnce } from 'react-use'

import Pikaso from 'pikaso'

export function usePikaso(options: any = {}): [typeof ref, Pikaso] {
  const [editor, setEditor] = useState<Pikaso | null>(null)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffectOnce(() => {
    const editor = new Pikaso({
      container: ref.current,
      ...options
    })

    setEditor(editor)
  })

  return [ref, editor]
}
