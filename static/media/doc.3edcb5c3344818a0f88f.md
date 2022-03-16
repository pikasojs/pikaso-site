# [Rotation](/api/classes/Rotation.html)
        
Pikaso comes with [Transform](/api/classes/Rotation.html#transform) and [Straighten](/api/classes/Rotation.html#straighten) methods to rotate [Board](/api/classes/Board.html), [Background](/api/classes/Background.html) and [Shapes](/api/classes/ShapeModel.html)

The two methods of  [Transform](/api/classes/Rotation.html#transform) and [Straighten](/api/classes/Rotation.html#straighten) are fundamentally different.


[Transform](/api/classes/Rotation.html#transform) rotates the board and its shapes around their center with scaling and transforming while [Straighten](/api/classes/Rotation.html#straighten) rotates them around their center without transforming.


### Useful articles

[Rotation matrix](https://en.wikipedia.org/wiki/Rotation_matrix)

[Calculating the Size of a Rotated Image](https://iiif.io/api/annex/notes/rotation/)

[How Pikaso Transform is working](https://drive.google.com/file/d/1yhi1vG9a_U0rPpz57jWEi8DQJemrtjr9/view?usp=sharing)


```ts
// rotate and transform board
editor.rotation.transform(30)

// rotate without transforming
editor.rotation.straighten(-30)

// rotate a shape
const shape = editor.shapes.triangle.insert({ /* config */ })
shape.rotate(50)
```