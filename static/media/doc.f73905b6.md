## Configuration

Pikaso supports global configuration settings across all components. 
It is possible to initialize the editor with predefined settings and later override them in each component.

### API Reference
**[interfaces/OptionalSettings.html](/api/interfaces/OptionalSettings.html)**

### Default Settings
```json
{
  disableCanvasContextMenu: true,
  containerClassName: 'pikaso',
  transformer: {
    borderDash: [15, 10],
    borderStroke: '#fff',
    borderStrokeWidth: 3,
    anchorSize: 15,
    anchorColor: '#fff',
    anchorStroke: '#fff',
    anchorBorderWidth: 1,
    anchorCornerRadius: 30
  },
  cropper: {
    transformer: {
      borderDash: [15, 10],
      borderStroke: '#fff',
      borderStrokeWidth: 3,
      anchorSize: 15,
      anchorColor: '#fff',
      anchorStroke: '#fff',
      anchorBorderWidth: 1,
      anchorCornerRadius: 30
    },
    circular: false,
    fixed: false,
    keepRatio: true,
    aspectRatio: 1,
    minWidth: 100,
    minHeight: 100,
    marginRatio: 1.1,
    overlay: {
      color: '#262626',
      opacity: 0.5
    },
    guides: {
      show: true,
      count: 3,
      color: '#fff',
      width: 1,
      dash: [15, 10]
    }
  },
  drawing: {
    keyboard: {
      cancelOnEscape: true
    }
  },
  selection: {
    interactive: true,
    keyboard: {
      enabled: true,
      movingSpaces: 5,
      map: {
        delete: ['Backspace', 'Delete'],
        moveLeft: ['ArrowLeft'],
        moveRight: ['ArrowRight'],
        moveUp: ['ArrowUp'],
        moveDown: ['ArrowDown'],
        deselect: ['Escape']
      }
    },
    transformer: {
      borderStroke: '#fff',
      borderStrokeWidth: 3,
      anchorSize: 15,
      anchorColor: '#fff',
      anchorStroke: '#fff',
      anchorBorderWidth: 1,
      anchorCornerRadius: 30
      borderDash: [0, 0]
    },
    zone: {
      fill: 'rgba(105, 105, 105, 0.7)',
      stroke: '#dbdbdb'
    }
  },
  history: {
    keyboard: {
      enabled: true
    }
  }
}
```

### How to use
```js
import Pikaso from 'pikaso'

const editor = new Pikaso({
  container: document.getElementById('<YOUR_DIV_ID>'),
  disableCanvasContextMenu: false,
  containerClassName: 'foo',
  selection: {
    interactive: false,
  },
  // rest of settings
})
```

### Overriding settings
```js
import Pikaso from 'pikaso'

const editor = new Pikaso({
  container: document.getElementById('<YOUR_DIV_ID>'),
  transformer: {
    borderStroke: 'green',
    borderStrokeWidth: 1
  }
})

editor.cropper.start({
  transformer: {
    borderStroke: 'yellow',
    borderStrokeWidth: 2
  }
})
```