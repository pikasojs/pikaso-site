## How to use

```js
import Pikaso from 'pikaso'

const editor = new Pikaso({
  container: document.getElementById('<YOUR_DIV_ID>')
})
```

### React

Using Pikaso in React is easy with the official hook

https://github.com/pikasojs/pikaso-react-hook   

---

Alternatively, you could write your own React code.

TypeScript Example:

```tsx
import { useRef, useState, useEffect, RefObject } from 'react'

import Pikaso, { Settings } from 'pikaso'

export default function usePikaso(
  options: Partial<Settings> = {}
): [RefObject<HTMLDivElement>, Pikaso | null] {
  const [instance, setInstance] = useState<Nullable<Pikaso>>(null)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const editor = new Pikaso({
      container: ref.current as HTMLDivElement,
      ...options
    })

    setInstance(editor)
  }, [])

  return [ref, instance]
}
```

JavaScript Example:
```jsx
import { useRef, useState, useEffect, RefObject } from 'react'

import Pikaso from 'pikaso'

export default function usePikaso(
  options = {}
) {
  const [instance, setInstance] = useState(null)
  const ref = useRef(null)

  useEffect(() => {
    const editor = new Pikaso({
      container: ref.current,
      ...options
    })

    setInstance(editor)
  }, [])

  return [ref, instance]
}
```

### Vue

[Pikaso Vue Example](https://codesandbox.io/s/vue3-example-o3cig)