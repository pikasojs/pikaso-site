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
import { Route, Switch } from 'react-router'

import { LayoutDrawer } from './LayoutDrawer'
import { RouterComponents } from '../../routes'

const drawerWidth = 260

export function AppLayout() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleToggleDrawer = () => setMobileOpen(state => !state)

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
            Pikaso - Documentation
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
      </Box>
    </Box>
  )
}
