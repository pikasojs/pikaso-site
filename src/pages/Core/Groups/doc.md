# [Groups](/api/classes/Groups.html)

Shapes can be arranged into multiple groups using the [Groups](/api/classes/Groups.html).   

The class provides a variety of [API](/api/classes/Groups.html)s for working with groups.  

[Groups](/api/classes/Groups.html) inherit [ShapeModel](/api/classes/ShapeModel.html), so all method of [ShapeModel](/api/classes/ShapeModel.html) are accessible in [Groups](/api/classes/Groups.html)


```ts
const circle = editor.shape.circle.insert({
  // config
})

const rect = editor.shapes.rect.insert({
  // config
})

// In the following code, if the 'g1' group does not exist, it is created and the circle is added to it.
circle.group = 'g1'

// Adding the rect to 'g1' group as well
rect.group = 'g1'

// The 'group' getter returns the name of the shape's group
console.log(rect.group) // g1

// The hasGroup() method determines whether the shape belongs to a group
console.log(rect.hasGroup()) // true


// In addition to adding shapes to groups, there is another method
editor.board.groups.attach([circle, rect], 'g1')

// A shape can easily be removed from a group
circle.group = null

// It does the same thing, but is more useful when multiple shapes need to be detached
editor.board.groups.dettach([circle], 'g1')

// To create a new group
editor.board.groups.create('g2', {
  // config
})

// delete a group. This is possible to undo this action
editor.board.groups.delete('g1')

// undelete a group
editor.board.groups.undelete('g1')

// destroy method deletes the group with its shapes. This is not possible to undo the action
editor.board.groups.destroy('g1')

// ungroup method separates the shapes of the group and then deletes the group.
// This method doesn't work if the group is cached
editor.board.groups.ungroup('g1')

// The API provided the ability to group selected shapes
editor.board.selection.group('g1')
```