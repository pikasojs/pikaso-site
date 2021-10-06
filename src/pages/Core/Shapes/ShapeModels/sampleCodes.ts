export const ShowHideCode = `const shape = /* insert or get shape */

// make shape hidden
shape.hide()

// make shape visible
shape.show()

// check shape visibility
const isVisible = shape.isVisible

// check shape invisibility
const isVisible = shape.isInvisible`

export const DeleteUndeleteDestoryCode = `const shape = /* insert or get shape */

// delete the shape
shape.delete()

// check is shape deleted
const isDeleted = shape.isDeleted

// undelete the shape
shape.undelete()

// destroy node of the shape
shape.destroy()`

export const FlipCode = `const shape = /* insert or get shape */

// flip horizontally
shape.flipX()

// flip vertically
shape.flipY()`

export const SelectionCode = `const shape = /* insert or get shape */

// select shape
shape.select()

// deselect shape
shape.deselect()`

export const RotationCode = `const shape = /* insert or get shape */

// rotate shape
shape.rotate(<Theta>)`

export const UpdateCode = `const shape = /* insert or get shape */

// update shape
shape.update({
  // list of attributes
})`

export const AnimateCode = `const shape = /* insert or get shape */

// animate shape
shape.to({
  duration: <seconds>,
  onFinish: () => {},
  onUpdate: () => {},
  // list of attributes
})`

export const FilterCode = `const shape = /* insert or get shape */

// add filter
shape.addFilter({
  name: '<Name>',
  options: {
    // values
  }
})

// remove filter
shape.removeFilter('<Name>')`
