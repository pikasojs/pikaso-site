import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Stack,
  Slider,
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { Pikaso } from 'pikaso'
import { useRef } from 'react'

import { CodeHighlighter } from 'src/components/CodeHighlighter'
import { Markdown } from 'src/components/Markdown'
import { getRandomColor } from 'src/utils/get-random-color'

import { EditorRef, EditorShape } from './EditorShape'
import {
  ShowHideCode,
  DeleteUndeleteDestoryCode,
  FlipCode,
  SelectionCode,
  RotationCode,
  UpdateCode,
  AnimateCode,
  FilterCode
} from './ShapeModels/sampleCodes'

interface Props {
  type: string
  codes: Record<string, string>
  insertFn: (edior: Pikaso) => void
}

export function ShapeModel({ type, codes, insertFn }: Props) {
  const showHideRef = useRef<EditorRef | null>(null)
  const deleteUndeleteRef = useRef<EditorRef | null>(null)
  const flipRef = useRef<EditorRef | null>(null)
  const selectionRef = useRef<EditorRef | null>(null)
  const rotationRef = useRef<EditorRef | null>(null)
  const updateRef = useRef<EditorRef | null>(null)
  const animateRef = useRef<EditorRef | null>(null)
  const filterRef = useRef<EditorRef | null>(null)

  const handleToggleShowHide = () => {
    const shape = showHideRef.current?.editor?.board.shapes.find(() => true)

    if (shape?.isVisible) {
      shape?.deselect()
      shape.hide()
    } else {
      shape?.select()
      shape?.show()
    }
  }

  const handleDeleteUndelete = () => {
    const shape = deleteUndeleteRef.current?.editor?.board?.shapes.find(
      () => true
    )

    if (shape?.isDeleted) {
      shape.undelete()
    } else {
      shape?.delete()
    }
  }

  const handleDestroy = () => {
    const shape = deleteUndeleteRef.current?.editor?.board?.shapes.find(
      () => true
    )

    shape?.deselect()
    shape?.destroy()
  }

  const flipX = () => {
    const shape = flipRef?.current?.editor?.board?.shapes.find(() => true)

    shape?.flipX()
  }

  const flipY = () => {
    const shape = flipRef?.current?.editor?.board?.shapes.find(() => true)

    shape?.flipY()
  }

  const select = () => {
    const shape = selectionRef?.current?.editor?.board?.shapes.find(() => true)

    shape?.select()
  }

  const deselect = () => {
    const shape = selectionRef?.current?.editor?.board?.shapes.find(() => true)

    shape?.deselect()
  }

  const rotate = (event: Event, newValue: number | number[]) => {
    const shape = rotationRef?.current?.editor?.board?.shapes.find(() => true)

    shape?.rotate(newValue as number)
  }

  const handleUpdateAttributes = () => {
    const shape = updateRef?.current?.editor?.board?.shapes.find(() => true)

    shape?.update({
      x: Math.random() * (400 - 100) + 100,
      y: Math.random() * (100 - 50) + 100,
      radius: Math.random() * (100 - 30) + 30,
      fill: getRandomColor(),
      stroke: getRandomColor()
    })
  }

  const handleAnimateAttributes = () => {
    const shape = animateRef?.current?.editor?.board?.shapes.find(() => true)

    try {
      shape?.to({
        duration: 0.5,
        x: Math.random() * (400 - 100) + 100,
        y: Math.random() * (100 - 50) + 100,
        radius: Math.random() * (100 - 30) + 30,
        fill: getRandomColor(),
        stroke: getRandomColor()
      })
    } catch (e) {
      console.log(e)
    }
  }

  const handleAddFilter = () => {
    const shape = filterRef?.current?.editor?.board?.shapes.find(() => true)

    shape?.addFilter({
      name: 'Sepia'
    })
  }

  const handleRemoveFilter = () => {
    const shape = filterRef?.current?.editor?.board?.shapes.find(() => true)

    shape?.removeFilter({ name: 'Sepia' })
  }

  return (
    <div>
      <Markdown>
        {() => `
        # [${type} Model](/api/classes/${type}Model.html)
      `}
      </Markdown>

      <Card sx={{ mb: 4 }}>
        <EditorShape onLoad={insertFn} />
        <CardContent>
          <Markdown>
            {() => `
                ## [Insert](/api/classes/${type}Drawer.html#insert)

                Creates a new shape and insert that into the [Board](/api/classes/Board.html)
              `}
          </Markdown>

          <CodeHighlighter language="typescript">
            {codes.insert}
          </CodeHighlighter>
        </CardContent>
      </Card>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" sx={{ width: '30%', flexShrink: 0 }}>
            Show & Hide
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Card sx={{ mb: 4 }}>
            <EditorShape editorRef={showHideRef} onLoad={insertFn} />
            <CardActions sx={{ justifyContent: 'flex-end' }}>
              <Button
                color="primary"
                variant="contained"
                onClick={handleToggleShowHide}
              >
                Toggle Show/Hide
              </Button>
            </CardActions>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                <Markdown>
                  {() =>
                    `[Show](/api/classes/${type}Model.html#show) and [Hide](/api/classes/${type}Model.html#hide)`
                  }
                </Markdown>
              </Typography>

              <CodeHighlighter language="typescript">
                {ShowHideCode}
              </CodeHighlighter>
            </CardContent>
          </Card>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" sx={{ width: '30%', flexShrink: 0 }}>
            Delete & Undelete
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Card sx={{ mb: 4 }}>
            <EditorShape onLoad={insertFn} editorRef={deleteUndeleteRef} />
            <CardActions sx={{ justifyContent: 'flex-end' }}>
              <Button
                color="primary"
                variant="contained"
                onClick={handleDeleteUndelete}
              >
                Delete / Undelete
              </Button>

              <Button
                color="primary"
                variant="contained"
                onClick={handleDestroy}
              >
                Destroy
              </Button>
            </CardActions>

            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                <Markdown>
                  {() =>
                    `[Delete](/api/classes/${type}Model.html#delete) and [Undelete](/api/classes/${type}Model.html#undelete)`
                  }
                </Markdown>
              </Typography>

              <CodeHighlighter language="typescript">
                {DeleteUndeleteDestoryCode}
              </CodeHighlighter>
            </CardContent>
          </Card>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" sx={{ width: '30%', flexShrink: 0 }}>
            Flip
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Card sx={{ mb: 4 }}>
            <EditorShape onLoad={insertFn} editorRef={flipRef} />
            <CardActions sx={{ justifyContent: 'flex-end' }}>
              <Button color="primary" variant="contained" onClick={flipX}>
                Flip X (Horizontally)
              </Button>

              <Button color="primary" variant="contained" onClick={flipY}>
                Flip Y (Vertically)
              </Button>
            </CardActions>

            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                <Markdown>
                  {() =>
                    `[flipX](/api/classes/${type}Model.html#flipX) and [flipY](/api/classes/${type}Model.html#flipY)`
                  }
                </Markdown>
              </Typography>

              <CodeHighlighter language="typescript">
                {FlipCode}
              </CodeHighlighter>
            </CardContent>
          </Card>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" sx={{ width: '30%', flexShrink: 0 }}>
            Select & Deselect
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Card sx={{ mb: 4 }}>
            <EditorShape onLoad={insertFn} editorRef={selectionRef} />
            <CardActions sx={{ justifyContent: 'flex-end' }}>
              <Button color="primary" variant="contained" onClick={select}>
                Select
              </Button>

              <Button color="primary" variant="contained" onClick={deselect}>
                Deselect
              </Button>
            </CardActions>

            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                <Markdown>
                  {() =>
                    `[Select](/api/classes/${type}Model.html#select) and [Deselect](/api/classes/${type}Model.html#deselect)`
                  }
                </Markdown>
              </Typography>

              <CodeHighlighter language="typescript">
                {SelectionCode}
              </CodeHighlighter>
            </CardContent>
          </Card>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" sx={{ width: '30%', flexShrink: 0 }}>
            Rotate
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Card sx={{ mb: 4 }}>
            <EditorShape onLoad={insertFn} editorRef={rotationRef} />
            <CardActions sx={{ justifyContent: 'flex-end' }}>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                width="300px"
              >
                <Box mr={0.5}>-360</Box>
                <Slider
                  min={-360}
                  max={360}
                  defaultValue={0}
                  onChange={rotate}
                />
                <Box ml={0.5}>+360</Box>
              </Stack>
            </CardActions>

            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                <Markdown>
                  {() => `[Rotate](/api/classes/${type}Model.html#rotate)`}
                </Markdown>
              </Typography>

              <CodeHighlighter language="typescript">
                {RotationCode}
              </CodeHighlighter>
            </CardContent>
          </Card>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" sx={{ width: '30%', flexShrink: 0 }}>
            Update
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Card sx={{ mb: 4 }}>
            <EditorShape onLoad={insertFn} editorRef={updateRef} />
            <CardActions sx={{ justifyContent: 'flex-end' }}>
              <Button
                color="primary"
                variant="contained"
                onClick={handleUpdateAttributes}
              >
                Update Attributes
              </Button>
            </CardActions>

            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                <Markdown>
                  {() => `[Update](/api/classes/${type}Model.html#update)`}
                </Markdown>
              </Typography>
              <Box my={2}>
                <a
                  href="https://konvajs.org/api/Konva.Shape.html"
                  target="_blank"
                >
                  Attributes Documentation
                </a>
              </Box>

              <CodeHighlighter language="typescript">
                {UpdateCode}
              </CodeHighlighter>
            </CardContent>
          </Card>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" sx={{ width: '30%', flexShrink: 0 }}>
            Animate
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Card sx={{ mb: 4 }}>
            <EditorShape onLoad={insertFn} editorRef={animateRef} />
            <CardActions sx={{ justifyContent: 'flex-end' }}>
              <Button
                color="primary"
                variant="contained"
                onClick={handleAnimateAttributes}
              >
                Animate Attributes
              </Button>
            </CardActions>

            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                <Markdown>
                  {() => `[Animate](/api/classes/${type}Model.html#to)`}
                </Markdown>
              </Typography>
              <Box my={2}>
                <a
                  href="https://konvajs.org/api/Konva.Shape.html"
                  target="_blank"
                >
                  Attributes Documentation
                </a>
              </Box>

              <CodeHighlighter language="typescript">
                {AnimateCode}
              </CodeHighlighter>
            </CardContent>
          </Card>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" sx={{ width: '30%', flexShrink: 0 }}>
            Filters
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Card sx={{ mb: 4 }}>
            <EditorShape onLoad={insertFn} editorRef={filterRef} />
            <CardActions sx={{ justifyContent: 'flex-end' }}>
              <Button
                color="primary"
                variant="contained"
                onClick={handleAddFilter}
              >
                Add Filter
              </Button>

              <Button
                color="primary"
                variant="contained"
                onClick={handleRemoveFilter}
              >
                Remove Filter
              </Button>
            </CardActions>

            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                <Markdown>
                  {() =>
                    `[addFilter](/api/classes/${type}Model.html#addFilter) and [removeFilter](/api/classes/${type}Model.html#removeFilter)`
                  }
                </Markdown>
              </Typography>

              <CodeHighlighter language="typescript">
                {FilterCode}
              </CodeHighlighter>
            </CardContent>
          </Card>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
