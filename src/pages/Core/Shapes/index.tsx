import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography
} from '@mui/material'
import { Pikaso } from 'pikaso'
import { lazy, Suspense } from 'react'
import { useParams, Switch, Route, Link } from 'react-router-dom'

import { Markdown } from 'src/components/Markdown'

import { EditorShape } from './EditorShape'

export const ShapesList = [
  {
    title: 'Circle',
    Component: lazy(() => import(`./ShapeModels/Circle`)),
    insert: (editor: Pikaso) =>
      editor.shapes.circle.insert({
        radius: 100,
        x: editor.board.stage.width() / 2,
        y: 150,
        fill: 'tomato'
      })
  },
  {
    title: 'Rect',
    Component: lazy(() => import(`./ShapeModels/Rect`)),
    insert: (editor: Pikaso) =>
      editor.shapes.rect.insert({
        width: 150,
        height: 150,
        x: editor.board.stage.width() / 2 - 75,
        y: 100,
        fill: 'purple'
      })
  },
  {
    title: 'Ellipse',
    Component: lazy(() => import(`./ShapeModels/Ellipse`)),
    insert: (editor: Pikaso) =>
      editor.shapes.ellipse.insert({
        radiusX: 120,
        radiusY: 80,
        x: editor.board.stage.width() / 2,
        y: 150,
        fill: '#262626'
      })
  },
  {
    title: 'Triangle',
    Component: lazy(() => import(`./ShapeModels/Triangle`)),
    insert: (editor: Pikaso) =>
      editor.shapes.triangle.insert({
        radius: 120,
        x: editor.board.stage.width() / 2,
        y: 160,
        fill: 'orange'
      })
  },
  {
    title: 'Polygon',
    Component: lazy(() => import(`./ShapeModels/Polygon`)),
    insert: (editor: Pikaso) =>
      editor.shapes.polygon.insert({
        radius: 110,
        x: editor.board.stage.width() / 2,
        y: 150,
        sides: 7,
        fill: 'greenyellow'
      })
  },
  {
    title: 'Line',
    Component: lazy(() => import(`./ShapeModels/Line`)),
    insert: (editor: Pikaso) => {
      editor.shapes.line.insert({
        points: [50, 50, 300, 50],
        stroke: 'blue',
        strokeWidth: 10
      })

      editor.shapes.line.insert({
        points: [50, 130, 300, 130],
        stroke: 'purple',
        strokeWidth: 15,
        lineCap: 'round',
        lineJoin: 'round',
        dash: [29, 20, 0.001, 20]
      })

      editor.shapes.line.insert({
        points: [50, 200, 80, 230, 160, 210, 180, 250],
        stroke: 'tomato',
        strokeWidth: 10,
        lineJoin: 'round'
      })
    }
  },
  {
    title: 'Arrow',
    Component: lazy(() => import(`./ShapeModels/Arrow`)),
    insert: (editor: Pikaso) => {
      editor.shapes.arrow.insert({
        points: [50, 50, 300, 50],
        stroke: 'blue',
        strokeWidth: 10
      })

      editor.shapes.arrow.insert({
        points: [50, 130, 300, 130],
        stroke: 'purple',
        strokeWidth: 15,
        lineCap: 'round',
        lineJoin: 'round',
        dash: [29, 20, 0.001, 20]
      })

      editor.shapes.arrow.insert({
        points: [50, 200, 80, 230, 160, 210, 180, 250],
        stroke: 'tomato',
        strokeWidth: 10,
        lineJoin: 'round'
      })
    }
  }
]

export default function Shapes() {
  const { shape: selectedShape } = useParams<{
    shape?: string
  }>()

  return (
    <div>
      {!selectedShape && (
        <>
          <Markdown>
            {() => `
          # Shapes
          Pikaso comes with a few built-in shapes but it's possible to extend [Shape Drawer](/api/classes/ShapeDrawer.html) and [Shape Model](/api/classes/ShapeModel.html) to develop custom shapes
        `}
          </Markdown>

          <Box display="flex" justifyContent="space-between" flexWrap="wrap">
            {ShapesList.map((shape, index) => (
              <Card key={index} sx={{ width: '32%', mb: 4 }}>
                <EditorShape onLoad={shape.insert} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {shape.title}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    component={Link}
                    to={`/core/shapes/${shape.title.toLowerCase()}`}
                  >
                    Learn more
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Box>
        </>
      )}

      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {ShapesList.map(({ title, Component }) => (
            <Route
              key={title}
              exact
              path={`/core/shapes/${title.toLowerCase()}`}
              component={Component}
            />
          ))}
        </Switch>
      </Suspense>
    </div>
  )
}
