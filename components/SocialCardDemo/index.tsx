import React from 'react'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/vs-dark'

import { useDemoInstructions } from './use-demo-instruction'

import { codes } from './code'

import {
  Container,
  EditorContainer,
  CodesContainer,
  CodesHeader,
  CodesHeaderCircle
} from './styled'

export default function SocialCardDemo() {
  const [ref] = useDemoInstructions()

  return (
    <Container>
      <CodesContainer>
        <CodesHeader>
          <CodesHeaderCircle color="rgb(252, 96, 92)" />
          <CodesHeaderCircle color="rgb(253, 190, 65)" />
          <CodesHeaderCircle color="rgba(212, 213, 214)" />
        </CodesHeader>
        <SyntaxHighlighter language="typescript" style={prism}>
          {codes}
        </SyntaxHighlighter>
      </CodesContainer>
      <EditorContainer ref={ref} />
    </Container>
  )
}
