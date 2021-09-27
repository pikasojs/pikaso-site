import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography
} from '@mui/material'
import { Link } from 'react-router-dom'

import { CodeHighlighter } from 'src/components/CodeHighlighter'

import { EditorShape } from './EditorShape'

const codes = {
  circle: `editor.shapes.circle.insert({
    radius: 100,
    x: 170,
    y: 150,
    fill: 'tomato'
  })`,
  rect: `editor.shapes.rect.insert({
    width: 150,
    height: 150,
    x: 100,
    y: 100,
    fill: 'purple'
  })`,
  ellipse: `editor.shapes.ellipse.insert({
    radiusX: 120,
    radiusY: 80,
    x: 170,
    y: 150,
    fill: 'khaki'
  })`,
  triangle: `editor.shapes.triangle.insert({
    radius: 120,
    x: 170,
    y: 160,
    fill: 'orange'
  })`,
  polygon: `editor.shapes.polygon.insert({
    radius: 110,
    x: 170,
    y: 150,
    sides: 7,
    fill: 'greenyellow'
  })`,
  line: `editor.shapes.line.insert({
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
  })`,
  arrow: ` editor.shapes.arrow.insert({
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
  })`
}
export default function Shapes() {
  return (
    <>
      <Box display="flex" justifyContent="space-between" flexWrap="wrap">
        <Card sx={{ width: '100%', mb: 4 }}>
          <div>
            <EditorShape
              onLoad={editor =>
                editor.shapes.circle.insert({
                  radius: 100,
                  x: editor.board.stage.width() / 2,
                  y: 150,
                  fill: 'tomato'
                })
              }
            />
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Circle
            </Typography>

            <CodeHighlighter showLineNumbers={false} language="typescript">
              {codes.circle}
            </CodeHighlighter>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              target="_blank"
              color="primary"
              variant="contained"
              href="/api/classes/CircleDrawer.html#insert"
            >
              Api Reference
            </Button>
            <Button
              size="small"
              component={Link}
              color="primary"
              variant="contained"
              to="/core/shapes/methods?shape=circle"
            >
              Circle Methods
            </Button>
            <Button
              size="small"
              target="_blank"
              variant="outlined"
              href="https://konvajs.org/api/Konva.Circle.html"
            >
              Configurations Reference
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ width: '100%', mb: 4 }}>
          <div>
            <EditorShape
              onLoad={editor =>
                editor.shapes.rect.insert({
                  width: 150,
                  height: 150,
                  x: editor.board.stage.width() / 2 - 75,
                  y: 100,
                  fill: 'purple'
                })
              }
            />
          </div>

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Rectangle
            </Typography>

            <CodeHighlighter showLineNumbers={false} language="typescript">
              {codes.rect}
            </CodeHighlighter>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              target="_blank"
              color="primary"
              variant="contained"
              href="/api/classes/RectDrawer.html#insert"
            >
              Api Reference
            </Button>
            <Button
              size="small"
              component={Link}
              color="primary"
              variant="contained"
              to="/core/shapes/methods?shape=rectangle"
            >
              Rectangle Methods
            </Button>
            <Button
              size="small"
              target="_blank"
              variant="outlined"
              href="https://konvajs.org/api/Konva.Rect.html"
            >
              Configurations Reference
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ width: '100%', mb: 4 }}>
          <div>
            <EditorShape
              onLoad={editor =>
                editor.shapes.ellipse.insert({
                  radiusX: 120,
                  radiusY: 80,
                  x: editor.board.stage.width() / 2,
                  y: 150,
                  fill: '#262626'
                })
              }
            />
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Ellipse
            </Typography>
            <CodeHighlighter showLineNumbers={false} language="typescript">
              {codes.ellipse}
            </CodeHighlighter>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              target="_blank"
              color="primary"
              variant="contained"
              href="/api/classes/EllipseDrawer.html#insert"
            >
              Api Reference
            </Button>
            <Button
              size="small"
              component={Link}
              color="primary"
              variant="contained"
              to="/core/shapes/methods?shape=ellipse"
            >
              Ellipse Methods
            </Button>
            <Button
              size="small"
              target="_blank"
              variant="outlined"
              href="https://konvajs.org/api/Konva.Ellipse.html"
            >
              Configurations Reference
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ width: '100%', mb: 4 }}>
          <div>
            <EditorShape
              onLoad={editor =>
                editor.shapes.triangle.insert({
                  radius: 120,
                  x: editor.board.stage.width() / 2,
                  y: 160,
                  fill: 'orange'
                })
              }
            />
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Triangle
            </Typography>
            <CodeHighlighter showLineNumbers={false} language="typescript">
              {codes.triangle}
            </CodeHighlighter>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              target="_blank"
              color="primary"
              variant="contained"
              href="/api/classes/TriangleDrawer.html#insert"
            >
              Api Reference
            </Button>
            <Button
              size="small"
              component={Link}
              color="primary"
              variant="contained"
              to="/core/shapes/methods?shape=triangle"
            >
              Triangle Methods
            </Button>
            <Button
              size="small"
              target="_blank"
              variant="outlined"
              href="https://konvajs.org/api/Konva.RegularPolygon.html"
            >
              Configurations Reference
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ width: '100%', mb: 4 }}>
          <div>
            <EditorShape
              onLoad={editor =>
                editor.shapes.polygon.insert({
                  radius: 110,
                  x: editor.board.stage.width() / 2,
                  y: 150,
                  sides: 7,
                  fill: 'greenyellow'
                })
              }
            />
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Polygon
            </Typography>
            <CodeHighlighter showLineNumbers={false} language="typescript">
              {codes.polygon}
            </CodeHighlighter>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              target="_blank"
              color="primary"
              variant="contained"
              href="/api/classes/PolygonDrawer.html#insert"
            >
              Api Reference
            </Button>
            <Button
              size="small"
              component={Link}
              color="primary"
              variant="contained"
              to="/core/shapes/methods?shape=polygon"
            >
              Polygon Methods
            </Button>
            <Button
              size="small"
              target="_blank"
              variant="outlined"
              href="https://konvajs.org/api/Konva.RegularPolygon.html"
            >
              Configurations Reference
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ width: '100%', mb: 4 }}>
          <div>
            <EditorShape
              onLoad={editor => {
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
              }}
            />
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Line
            </Typography>
            <CodeHighlighter showLineNumbers={false} language="typescript">
              {codes.line}
            </CodeHighlighter>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              target="_blank"
              color="primary"
              variant="contained"
              href="/api/classes/LineDrawer.html#insert"
            >
              Api Reference
            </Button>
            <Button
              size="small"
              component={Link}
              color="primary"
              variant="contained"
              to="/core/shapes/methods?shape=line"
            >
              Line Methods
            </Button>
            <Button
              size="small"
              target="_blank"
              variant="outlined"
              href="https://konvajs.org/api/Konva.Line.html"
            >
              Configurations Reference
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ width: '100%', mb: 4 }}>
          <div>
            <EditorShape
              onLoad={editor => {
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
              }}
            />
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Arrow
            </Typography>
            <CodeHighlighter showLineNumbers={false} language="typescript">
              {codes.arrow}
            </CodeHighlighter>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              target="_blank"
              color="primary"
              variant="contained"
              href="/api/classes/ArrowDrawer.html#insert"
            >
              Api Reference
            </Button>
            <Button
              size="small"
              component={Link}
              color="primary"
              variant="contained"
              to="/core/shapes/methods?shape=arrow"
            >
              Arrow Methods
            </Button>
            <Button
              size="small"
              target="_blank"
              variant="outlined"
              href="https://konvajs.org/api/Konva.Arrow.html"
            >
              Configurations Reference
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  )
}
