import { useEffect } from 'react'
import type { Pikaso } from 'pikaso'

import usePikaso from 'src/hooks/use-pikaso'

interface Props {
  onLoad: (editor: Pikaso) => void
}

export function EditorShape({ onLoad }: Props) {
  const [ref, editor] = usePikaso({
    transformer: {
      borderStroke: '#262626'
    }
  })

  useEffect(() => {
    editor && onLoad(editor)
  }, [editor])

  return (
    <div
      ref={ref}
      style={{
        margin: '0 auto',
        background: '#CBC3E3',
        width: '100%',
        height: '300px'
      }}
    />
  )
}
