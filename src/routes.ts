import React, { lazy } from 'react'

import ReceiptIcon from '@mui/icons-material/Receipt'
import AppsIcon from '@mui/icons-material/Apps'
import SettingsIcon from '@mui/icons-material/Settings'

export interface RouteLink {
  title: string
  url: string
  external?: boolean
  path?: string
  exact?: boolean
}

export type Routes = Record<
  string,
  {
    title: string
    Icon: React.ReactNode
    links: RouteLink[]
  }
>

export const Routes: Routes = {
  GettingStarted: {
    title: 'Getting Started',
    Icon: ReceiptIcon,
    links: [
      {
        title: 'Pikaso',
        url: '/getting-started/pikaso'
      },
      {
        title: 'Installation',
        url: '/getting-started/installation'
      },
      {
        title: 'Usage',
        url: '/getting-started/usage'
      },
      {
        title: 'Configuration',
        url: '/getting-started/configuration'
      },
      {
        external: true,
        title: 'Api Reference',
        url: '/api/classes/Pikaso.html'
      }
    ]
  },
  Core: {
    title: 'Core Components',
    Icon: AppsIcon,
    links: [
      {
        title: 'Background',
        url: '/core/background'
      },
      {
        title: 'Shapes',
        path: '/core/shapes/:shape?',
        url: '/core/shapes',
        exact: false
      },
      {
        title: 'Image',
        url: '/core/image'
      },
      {
        title: 'Label',
        url: '/core/label'
      },
      {
        title: 'Groups',
        url: '/core/groups'
      },
      {
        title: 'Drawing',
        url: '/core/drawing'
      },
      {
        title: 'Snap To Grid',
        url: '/core/snap-grid'
      },
      {
        title: 'Measurement Tag',
        url: '/core/measurement-tag'
      },
      {
        title: 'Cropper',
        url: '/core/cropper'
      },
      {
        title: 'Flip',
        url: '/core/flip'
      },
      {
        title: 'Rotation',
        url: '/core/rotation'
      },
      {
        title: 'History (Undo/Redo)',
        url: '/core/history'
      },
      {
        title: 'Import / Export',
        url: '/core/import-export'
      },
      {
        title: 'Selection',
        url: '/core/selection'
      },
      {
        title: 'Events',
        url: '/core/events'
      },
      {
        title: 'Filters',
        url: '/core/filters'
      }
    ]
  },
  Advanced: {
    title: 'Advanced',
    Icon: SettingsIcon,
    links: [
      {
        title: 'Create Custom Shapes',
        url: '/advanced/create-custom-shapes'
      },
      {
        title: 'Create Custom Filter',
        url: '/advanced/create-custom-filters'
      }
      // {
      //   title: 'Crop Transformer Auto Color',
      //   url: '/tutorials/crop-transformer-auto-color'
      // },
      // {
      //   title: 'Face Detector Cropping',
      //   url: '/tutorials/crop-face-detect'
      // }
    ]
  },
  Utilities: {
    title: 'Utilities',
    Icon: SettingsIcon,
    links: [
      {
        title: 'create-image-from-url',
        url: '/utilities/create-image-from-url'
      },
      {
        title: 'degree-to-radian',
        url: '/utilities/degree-to-radian'
      },
      {
        title: 'get-center-point',
        url: '/utilities/get-center-point'
      },
      {
        title: 'get-points-distance',
        url: '/utilities/get-points-distance'
      },
      {
        title: 'get-rotated-point',
        url: '/utilities/get-rotated-point'
      },
      {
        title: 'html-to-text',
        url: '/utilities/html-to-text'
      },
      {
        title: 'image-to-url',
        url: '/utilities/image-to-url'
      },
      {
        title: 'merge-settings',
        url: '/utilities/merge-settings'
      },
      {
        title: 'omit',
        url: '/utilities/omit'
      },
      {
        title: 'rotate-around-center',
        url: '/utilities/rotate-around-center'
      }
    ]
  }
}

export const RouterComponents = Object.values(Routes).flatMap(section =>
  section.links.map(item => {
    const [directoryId, pageId] = item.url.substring(1).split('/')

    return {
      url: item.path ?? item.url,
      exact: item.exact ?? true,
      external: item.external ?? false,
      Component: lazy(
        () =>
          import(
            `../src/pages/${normalizePathName(directoryId)}/${normalizePathName(
              pageId
            )}`
          )
      )
    }
  })
)

function normalizePathName(name: string): string {
  return name
    .split('-')
    .map(part =>
      (part.charAt(0).toUpperCase() + part.substring(1)).replaceAll('-', '')
    )
    .join('')
}
