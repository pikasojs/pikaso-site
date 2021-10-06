# [Import](/api/classes/Import.html) / [Export](/api/classes/Export.html)
        
A [board workspace](/api/classes/Board.html) can be [exported](/api/classes/Export.html) as an [image](/api/classes/Export.html#toImage) or a [JSON](https://en.wikipedia.org/wiki/JSON) file.

After [exporting](/api/classes/Export.html#toJson) the json, it is possible to [import](/api/classes/Import.html#json) it.

This is very useful when it's necessary to store current state of the board in a database or import ready templates into that.


```js
// export to image
editor.export.toImage({
  /* export config */
})

// export to json
editor.export.toJson()

// export to json format
editor.load('<json string>') // or editor.import.json('<parsed json>')
```