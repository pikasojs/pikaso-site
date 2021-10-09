import { Suspense, useState } from 'react'

import {
  Box,
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Drawer
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Redirect, Route, Switch } from 'react-router'

import { useEffectOnce } from 'react-use'

import { LayoutDrawer } from './LayoutDrawer'
import { RouterComponents } from '../../routes'

const drawerWidth = 300

export function AppLayout() {
  const [pageTitle, setPageTitle] = useState('Pikaso - Documentation')
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleToggleDrawer = () => setMobileOpen(state => !state)

  useEffectOnce(() => {
    const observer = new MutationObserver(mutations => {
      setPageTitle(
        mutations[0].target.textContent?.replaceAll('|', ' — ') || ''
      )
    })

    observer.observe(document.querySelector('title')!, {
      subtree: true,
      characterData: true,
      childList: true
    })

    return () => {
      observer.disconnect()
    }
  })

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open Drawer"
            edge="start"
            onClick={handleToggleDrawer}
            sx={{
              mr: 2,
              display: { sm: 'none' }
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {pageTitle}
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 }
        }}
      >
        <Drawer
          container={window.document.body}
          variant="temporary"
          open={mobileOpen}
          onClose={handleToggleDrawer}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: {
              xs: 'block',
              sm: 'none'
            },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}
        >
          <LayoutDrawer />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: {
              xs: 'none',
              sm: 'block'
            },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}
          open
        >
          <LayoutDrawer />
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <div className="main-container">
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/">
                <Redirect to="/getting-started/pikaso" />
              </Route>

              {RouterComponents.map(({ Component, url, exact }, index) => (
                <Route
                  key={index}
                  exact={exact}
                  path={url}
                  component={Component}
                />
              ))}
            </Switch>
          </Suspense>

          <div
            id="cusdis_thread"
            data-host="https://cusdis.com"
            data-app-id="19d38444-d808-440f-80aa-88c9f1758a77"
            data-page-id="{{ PAGE_ID }}"
            data-page-url="{{ PAGE_URL }}"
            data-page-title="{{ PAGE_TITLE }}"
          ></div>
        </div>
      </Box>
    </Box>
  )
}
