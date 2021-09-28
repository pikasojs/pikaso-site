import {
  Box,
  Divider,
  List,
  ListItem,
  Toolbar,
  Typography
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Link, useLocation } from 'react-router-dom'
import type { Theme } from '@mui/material'
import cn from 'classnames'

import { Routes } from '../../routes'

const useStyles = makeStyles(
  (theme: Theme) => ({
    container: {
      color: '#fff',
      padding: theme.spacing(1),
      backgroundColor: theme.palette.primary.dark
    },
    logo: {
      width: theme.spacing(6),
      height: theme.spacing(6),
      margin: '0 auto'
    },
    listItemLink: {
      color: '#fff',
      textDecoration: 'none',
      paddingLeft: theme.spacing(1.5)
    },
    listItem: {
      padding: theme.spacing(0.25, 2),
      '&.active a': {
        color: 'yellow',
        fontWeight: 600,
        borderLeft: '3px solid yellow',
        paddingLeft: theme.spacing(1)
      }
    },
    sectionTitle: {
      ...theme.typography.body1,
      color: theme.palette.secondary.main
    }
  }),
  {
    name: 'LayoutDrawer'
  }
)

export function LayoutDrawer() {
  const classes = useStyles()
  const { pathname } = useLocation()

  return (
    <div>
      <Toolbar>
        <img className={classes.logo} src="/logo.svg" alt="Pikaso" />
      </Toolbar>

      <Divider />

      <div className={classes.container}>
        {Object.values(Routes).map(({ Icon, ...section }) => {
          return (
            <div key={section.title}>
              <Box my={1.5} pl={1}>
                <Typography className={classes.sectionTitle}>
                  <strong>{section.title}</strong>
                </Typography>
              </Box>

              <List>
                {section.links.map(link => (
                  <ListItem
                    className={cn(classes.listItem, {
                      active: pathname.startsWith(link.url)
                    })}
                    key={link.title}
                  >
                    <Link className={cn(classes.listItemLink)} to={link.url}>
                      {link.title}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </div>
          )
        })}
      </div>
    </div>
  )
}