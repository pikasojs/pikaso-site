import { useTitle } from 'react-use'

import { Markdown } from 'src/components/Markdown'

export default function MergeSettings() {
  useTitle('Pikaso | Utilities | mergeSettings')

  return (
    <Markdown>
      {() => `
        # [mergeSettings](/api/index.html#mergeSettings)

        This helper function merges Pikaso default settings with the given settings.

        ~~~ts
        mergeSettings(settings: Settings): Settings
        ~~~
      `}
    </Markdown>
  )
}
