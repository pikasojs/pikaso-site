import { useRef, useState, useEffect, RefObject } from 'react'

import { Pikaso } from 'pikaso'
import type { Settings } from 'pikaso'

export default function usePikaso(
  options: Partial<Settings> = {}
): [RefObject<HTMLDivElement>, Pikaso | null] {
  const [instance, setInstance] = useState<Pikaso | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const editor = new Pikaso({
      container: ref.current as HTMLDivElement,
      ...options
    })

    setInstance(editor)
  }, [])

  useEffect(() => {
    instance &&
      window.addEventListener('resize', () => {
        instance.board.rescale()
      })
  }, [instance])

  return [ref, instance]
}
