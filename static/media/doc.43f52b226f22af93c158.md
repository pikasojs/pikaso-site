# Measurement Tag
        
Pikso has a built-in measurement tag helper that will display the size of a shape when drawing or transforming.

The style of the tag can be customized in any way you want. 

By default, this feature is disabled, but it can be enabled during initial configurations.

```ts
// it is only possible to enable measurement tags when creating the canvas editor
new Pikaso({
  /* other configurations */
  measurement: {
    margin: 20,
    background: {
      cornerRadius: 5,
      fill: 'purple'
    },
    text: {
      fill: '#fff',
      padding: 5,
      fontSize: 14,
      fontStyle: 'bold'
    }
  }
```