import { useEffect, useState } from 'react'
import { useDeepCompareEffect, useDebounce } from 'react-use'
import { defaultTransformerSettings } from 'pikaso'
import type { CropperOptions } from 'pikaso'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  Chip,
  Divider,
  FormControlLabel,
  TextField,
  Typography
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import usePikaso from 'src/hooks/use-pikaso'
import { CodeHighlighter } from 'src/components/CodeHighlighter'

import { ColorPicker } from 'src/components/ColorPicker'

import { RangeSlider } from 'src/components/RangeSlider'

import { BasePopover } from 'src/components/BasePopover'

import { CropperType } from './CropperType'

export function Playground() {
  const [ref, editor] = usePikaso()
  const [config, setConfig] = useState<Partial<CropperOptions>>({
    transformer: defaultTransformerSettings,
    circular: false,
    fixed: false,
    keepRatio: true,
    aspectRatio: 1,
    minWidth: 100,
    minHeight: 100,
    marginRatio: 1.1,
    overlay: {
      color: '#262626',
      opacity: 0.5
    },
    guides: {
      show: true,
      count: 3,
      color: '#eee',
      width: 2,
      dash: [15, 10, 15]
    }
  })
  const [debouncedConfig, setDebouncedConfig] = useState(config)

  const [,/* cancel */] = useDebounce(
    () => {
      setDebouncedConfig(config)
    },
    200,
    [config]
  )

  const updateConfig = (config: Partial<CropperOptions>) => {
    setConfig(state => ({
      ...state,
      ...config
    }))
  }

  useDeepCompareEffect(() => {
    editor?.cropper.stop()
    editor?.cropper.start(config)
  }, [debouncedConfig])

  useEffect(() => {
    const run = async () => {
      if (editor) {
        await editor.loadFromUrl(
          'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1738&q=80'
        )
        editor.cropper.start(config)
      }
    }

    run()
  }, [editor])

  const code = `editor.cropper.start(${JSON.stringify(config, null, 2)})`

  return (
    <>
      <div
        ref={ref}
        style={{
          margin: '0 auto',
          width: '600px',
          height: '400px'
        }}
      />

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">General Settings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box display="flex" alignItems="center" mb={2}>
            <CropperType config={config} onChange={updateConfig} />

            <VerticalDivider />

            <FormControlLabel
              control={
                <Checkbox
                  checked={config.keepRatio}
                  onChange={(_, checked: boolean) => {
                    updateConfig({ keepRatio: checked })
                  }}
                />
              }
              label="Keep Ratio"
            />

            <VerticalDivider />

            <RangeSlider
              title="Margin Ratio"
              defaultValue={config.marginRatio!}
              SliderProps={{
                min: 0,
                max: 5
              }}
              onChange={value => {
                setConfig({
                  ...config,
                  marginRatio: value as number
                })
              }}
            />

            <VerticalDivider />

            {config.circular === false && (
              <RangeSlider
                title="Aspect Ratio"
                defaultValue={config.aspectRatio!}
                valueLabelFormat={(val: number | number[]) =>
                  val < 0 ? `0.${-val}` : val.toString()
                }
                SliderProps={{
                  min: -9,
                  max: 10
                }}
                onChange={value => {
                  const val = value as number

                  setConfig({
                    ...config,
                    aspectRatio: val < 0 ? Number((-val / 10).toFixed(2)) : val
                  })
                }}
              />
            )}
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Overlay Settings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box display="flex" alignItems="center" mb={2}>
            <ColorPicker
              title="Overlay Color"
              defaultColor={config.overlay!.color!}
              onChange={color =>
                setConfig({
                  ...config,
                  overlay: {
                    ...config.overlay,
                    color
                  }
                })
              }
            />
            <VerticalDivider />

            <RangeSlider
              title="Overlay Opacity"
              defaultValue={config.overlay!.opacity!}
              SliderProps={{
                min: 0,
                max: 1,
                step: 0.1
              }}
              onChange={value =>
                setConfig({
                  ...config,
                  overlay: {
                    ...config.overlay,
                    opacity: value as number
                  }
                })
              }
            />
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Transformer Settings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box display="flex" alignItems="center" flexWrap="wrap" mb={2}>
            <ColorPicker
              title="Stroke Color"
              defaultColor={config.transformer?.borderStroke!}
              onChange={color =>
                setConfig({
                  ...config,
                  transformer: {
                    ...config.transformer,
                    borderStroke: color
                  }
                })
              }
            />
            <RangeSlider
              title="Stroke Width"
              defaultValue={config.transformer?.borderStrokeWidth!}
              SliderProps={{
                min: 3,
                max: 20,
                step: 1
              }}
              onChange={value =>
                setConfig({
                  ...config,
                  transformer: {
                    ...config.transformer,
                    borderStrokeWidth: value as number
                  }
                })
              }
            />
            <VerticalDivider />
            <ColorPicker
              title="Anchor Color"
              defaultColor={config.transformer?.anchorFill!}
              onChange={color =>
                setConfig({
                  ...config,
                  transformer: {
                    ...config.transformer,
                    anchorFill: color
                  }
                })
              }
            />

            <ColorPicker
              title="Anchor Stroke Color"
              defaultColor={config.transformer?.anchorStroke!}
              onChange={color =>
                setConfig({
                  ...config,
                  transformer: {
                    ...config.transformer,
                    anchorStroke: color
                  }
                })
              }
            />

            <RangeSlider
              title="Anchor Radius"
              defaultValue={config.transformer?.anchorCornerRadius!}
              SliderProps={{
                min: 0,
                max: 50,
                step: 1
              }}
              onChange={value =>
                setConfig({
                  ...config,
                  transformer: {
                    ...config.transformer,
                    anchorCornerRadius: value as number
                  }
                })
              }
            />

            <RangeSlider
              title="Anchor Stroke Width"
              defaultValue={config.transformer?.anchorStrokeWidth!}
              SliderProps={{
                min: 0,
                max: 50,
                step: 1
              }}
              onChange={value =>
                setConfig({
                  ...config,
                  transformer: {
                    ...config.transformer,
                    anchorStrokeWidth: value as number
                  }
                })
              }
            />

            <RangeSlider
              title="Anchor Size"
              defaultValue={config.transformer?.anchorSize!}
              SliderProps={{
                min: 1,
                max: 50,
                step: 1
              }}
              onChange={value =>
                setConfig({
                  ...config,
                  transformer: {
                    ...config.transformer,
                    anchorSize: value as number
                  }
                })
              }
            />

            <VerticalDivider />

            <BasePopover
              buttonRenderer={({ id, isOpen }) => (
                <Chip
                  aria-describedby={id}
                  size="medium"
                  label={<strong>Dash Lines</strong>}
                  variant="outlined"
                  color="info"
                  sx={{
                    cursor: 'pointer',
                    borderColor: isOpen ? 'primary.main' : 'info',
                    color: isOpen ? 'primary.main' : 'info'
                  }}
                />
              )}
            >
              <TextField
                value={config.transformer?.borderDash || ''}
                onChange={e =>
                  setConfig({
                    ...config,
                    transformer: {
                      ...config.transformer,
                      borderDash: e.target.value.trim().split(',').map(Number)
                    }
                  })
                }
              />
            </BasePopover>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Guide Line Settings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box display="flex" alignItems="center" mb={2}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={config.guides?.show}
                  onChange={(_, checked: boolean) => {
                    updateConfig({
                      ...config,
                      guides: {
                        ...config.guides,
                        show: checked
                      }
                    })
                  }}
                />
              }
              label="Show Guid Lines"
            />

            <VerticalDivider />

            <RangeSlider
              title="Lines Count"
              defaultValue={config.guides!.count!}
              SliderProps={{
                min: 3,
                max: 20,
                step: 1
              }}
              onChange={value =>
                setConfig({
                  ...config,
                  guides: {
                    ...config.guides,
                    count: value as number
                  }
                })
              }
            />

            <VerticalDivider />

            <RangeSlider
              title="Lines Width"
              defaultValue={config.guides!.width!}
              SliderProps={{
                min: 1,
                max: 20,
                step: 1
              }}
              onChange={value =>
                setConfig({
                  ...config,
                  guides: {
                    ...config.guides,
                    width: value as number
                  }
                })
              }
            />
            <VerticalDivider />

            <ColorPicker
              title="Lines Color"
              defaultColor={config.guides!.color!}
              onChange={color =>
                setConfig({
                  ...config,
                  guides: {
                    ...config.guides,
                    color
                  }
                })
              }
            />

            <VerticalDivider />
            <BasePopover
              buttonRenderer={({ id, isOpen }) => (
                <Chip
                  aria-describedby={id}
                  size="medium"
                  label={<strong>Dash Lines</strong>}
                  variant="outlined"
                  color="info"
                  sx={{
                    cursor: 'pointer',
                    borderColor: isOpen ? 'primary.main' : 'info',
                    color: isOpen ? 'primary.main' : 'info'
                  }}
                />
              )}
            >
              <TextField
                value={config.guides?.dash || ''}
                onChange={e =>
                  setConfig({
                    ...config,
                    guides: {
                      ...config.guides,
                      dash: e.target.value.trim().split(',').map(Number)
                    }
                  })
                }
              />
            </BasePopover>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Divider sx={{ my: 4 }} />

      <CodeHighlighter language="typescript">{code}</CodeHighlighter>
    </>
  )
}

const VerticalDivider = () => (
  <Divider orientation="vertical" sx={{ mx: 2, height: '16px' }} />
)
