import { ForwardedRef, forwardRef, useEffect, useImperativeHandle } from 'react'
import type { Pikaso } from 'pikaso'

import usePikaso from 'src/hooks/use-pikaso'

export interface EditorRef {
  editor: Pikaso | null
}

interface Props {
  onLoad: (editor: Pikaso) => void
  editorRef?: ForwardedRef<EditorRef>
}

function Editor({ editorRef, onLoad }: Props) {
  const [ref, editor] = usePikaso({
    selection: {
      transformer: {
        borderStroke: '#262626',
        anchorFill: '#262626'
      }
    }
  })

  useEffect(() => {
    editor && onLoad(editor)
  }, [editor])

  useImperativeHandle(editorRef, () => ({
    editor
  }))

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

export const EditorShape = forwardRef((props: Props, ref) => {
  return <Editor {...props} />
})
