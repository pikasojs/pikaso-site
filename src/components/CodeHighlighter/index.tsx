import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark as theme } from 'react-syntax-highlighter/dist/esm/styles/prism'

//cb

import type { SyntaxHighlighterProps } from 'react-syntax-highlighter'

interface Props extends SyntaxHighlighterProps {
  children: string
}

export function CodeHighlighter({ children, ...props }: Props) {
  return (
    <SyntaxHighlighter style={theme} showLineNumbers wrapLongLines {...props}>
      {children}
    </SyntaxHighlighter>
  )
}
