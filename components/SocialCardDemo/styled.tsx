import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 80vh;
  margin: 3%;
`

export const EditorContainer = styled.div`
  max-width: 50%;
  background-color: #38a1cf;
  border-radius: 30px;
  position: relative;

  canvas {
    border-radius: 30px;
    transform: rotate(-3deg);
    transition: transform ease-in 0.2s;

    :hover {
      transform: rotate(0deg);
    }
  }
`

export const CodesContainer = styled.div`
  width: 50%;
  padding-right: 1%;

  pre {
    max-height: 76.5vh;
    margin: 0 !important;
    border-radius: 0 0 30px 30px !important;
  }
`

export const CodesHeader = styled.div`
  display: flex;
  align-items: center;
  background: rgb(50, 50, 50);
  color: #fff;
  border-radius: 30px 30px 0 0;
  height: 4vh;
  padding-left: 3%;
`

export const CodesHeaderCircle = styled.span<{
  color: string
}>`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 100%;
  background-color: ${props => props.color};
  margin-right: 10px;
`
