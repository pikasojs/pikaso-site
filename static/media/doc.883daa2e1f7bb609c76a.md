# Create Custom Filter

In addition to the full set of built-in filters, Pikaso also allows the creation or reuse of custom canvas filters and allows the merging of multiple filters into one.

Canvas filters are offered by several open source projects such as [silvia-odwyer/pixels.js](https://github.com/silvia-odwyer/pixels.js) and [arahaya/ImageFilters.js](https://github.com/arahaya/ImageFilters.js).  

Also check [https://www.html5rocks.com/en/tutorials/canvas/imagefilters/](https://www.html5rocks.com/en/tutorials/canvas/imagefilters/)


```ts
// pixels.js example 
const shape = editor.shapes.image.insert('<URL>')

shape.addFilter({
  customFn: imageData => PixelsJS.filterImgData(imageData, '<Filter Name>')
})

// custom filter
shape.addFilter({
  customFn: imageData => {
    const d = imageData.data

    for (let i = 0; i < d.length; i += 4) {
      const r = d[i]
      const g = d[i+1]
      const b = d[i+2]
      const v = 0.2126 * r + 0.7152 * g + 0.0722 * b
      d[i] = d[i+1] = d[i+2] = v
    }
  }
})

```