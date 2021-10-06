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
        fillLinearGradientStartPoint: { x: -50, y: -50 },
        fillLinearGradientEndPoint: { x: 50, y: 50 },
        fillLinearGradientColorStops: [0, 'tomato', 1, 'red']
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
        fillLinearGradientStartPoint: { x: -150, y: -150 },
        fillLinearGradientEndPoint: { x: 150, y: 150 },
        fillLinearGradientColorStops: [0, 'purple', 1, 'yellow']
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
        fillLinearGradientStartPoint: { x: -150, y: -150 },
        fillLinearGradientEndPoint: { x: 150, y: 150 },
        fillLinearGradientColorStops: [0, '#262626', 1, 'olive']
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
        fillLinearGradientStartPoint: { x: -150, y: -150 },
        fillLinearGradientEndPoint: { x: 150, y: 150 },
        fillLinearGradientColorStops: [0, 'orange', 1, 'yellow']
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
        sides: 5,
        fillLinearGradientStartPoint: { x: -150, y: -150 },
        fillLinearGradientEndPoint: { x: 150, y: 150 },
        fillLinearGradientColorStops: [0, 'greenyellow', 1, 'olive']
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
  },
  {
    title: 'Text',
    Component: lazy(() => import(`./ShapeModels/Text`)),
    insert: (editor: Pikaso) => {
      editor.shapes.text.insert({
        text: 'Pikaso is Great!!!',
        x: 40,
        y: 100,
        fontSize: 35,
        fill: 'purple'
      })
    }
  },
  {
    title: 'Label',
    url: '/core/label',
    insert: (editor: Pikaso) => {
      editor.shapes.label.insert({
        container: {
          x: 40,
          y: 100
        },
        tag: {
          fill: '#262626'
        },
        text: {
          text: 'Pikaso Rocks',
          fill: '#00ff00',
          fontSize: 40
        }
      })
    }
  },
  {
    title: 'Image',
    url: '/core/image',
    insert: (editor: Pikaso) => {
      editor.shapes.image.insert('/logo.svg', {
        x: 120,
        y: 70
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
          # [Shapes](/api/classes/ShapeModel.html)
          Pikaso comes with a few built-in shapes but it's possible to extend [Shape Drawer](/api/classes/ShapeDrawer.html) and [Shape Model](/api/classes/ShapeModel.html) to develop custom shapes.

          [Background](/core/background), [Image](/core/image) and [Text](/core/text) are also considered as [Shape Model](/api/classes/ShapeModel.html), inheriting all of its methods and properties.
        `}
          </Markdown>

          <Box display="flex" flexWrap="wrap">
            {ShapesList.map((shape, index) => (
              <Card key={index} sx={{ width: '32%', mb: 1, mx: 0.5 }}>
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
                    to={
                      shape.url || `/core/shapes/${shape.title.toLowerCase()}`
                    }
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
          {ShapesList.filter(({ Component }) => !!Component).map(
            ({ title, Component }) => (
              <Route
                key={title}
                exact
                path={`/core/shapes/${title.toLowerCase()}`}
                component={Component}
              />
            )
          )}
        </Switch>
      </Suspense>
    </div>
  )
}
