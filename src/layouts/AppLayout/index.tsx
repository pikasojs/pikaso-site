import { Suspense, useEffect, useState } from 'react'
import {
  Box,
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Drawer
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Redirect, Route, Switch, useLocation } from 'react-router'
import { GitHub as GithubIcon } from '@mui/icons-material'
import { useEffectOnce } from 'react-use'
import { Giscus } from '@giscus/react'

import { PageLoading } from 'src/components/PageLoading'

import { LayoutDrawer } from './LayoutDrawer'
import { RouterComponents } from '../../routes'

const drawerWidth = 300

export function AppLayout() {
  const [pageTitle, setPageTitle] = useState('Pikaso - Documentation')
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const handleToggleDrawer = () => setMobileOpen(state => !state)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

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
        <Toolbar
          style={{
            backgroundColor: '#fff',
            color: '#262626',
            border: 'none',
            boxShadow: 'none'
          }}
        >
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
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            {pageTitle}
          </Typography>

          <Box display="flex" alignItems="center">
            <Box display="flex" alignItems="center" mr={1}>
              <img src="https://img.shields.io/npm/v/pikaso?label=Latest%20Version" />
            </Box>

            <Box display="flex" alignItems="center" mr={1}>
              <img src="https://img.shields.io/npm/dw/pikaso" />
            </Box>

            <Box display="flex" alignItems="center" mr={1}>
              <img src="https://github.com/pikasojs/pikaso/workflows/Test/Build/Publish/badge.svg" />
            </Box>

            <IconButton
              href="https://github.com/pikasojs/pikaso"
              target="_blank"
            >
              <GithubIcon />
            </IconButton>
          </Box>
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
          <Suspense fallback={<PageLoading />}>
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
        </div>

        <Box
          mt={15}
          px={2}
          py={2}
          sx={{
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        >
          <Giscus
            key={location.pathname}
            repo="pikasojs/pikaso"
            repoId="MDEwOlJlcG9zaXRvcnkzMTIzMjI5ODA="
            category="Documentation"
            categoryId="DIC_kwDOEp2rpM4B_Wuh"
            mapping="specific"
            term={location.pathname}
            reactionsEnabled="0"
            emitMetadata="0"
            theme="light"
          />
        </Box>
      </Box>
    </Box>
  )
}
