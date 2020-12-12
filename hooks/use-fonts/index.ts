import { useEffectOnce } from 'react-use'

export function useFonts() {
  useEffectOnce(() => {
    const init = async () => {
      const WebFont = await import('webfontloader')

      WebFont.load({
        google: {
          families: ['Passion One', 'Luckiest Guy']
        }
      })
    }

    init()
  })

  return {}
}
