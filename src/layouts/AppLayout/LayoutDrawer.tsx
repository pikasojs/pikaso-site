import { Box, List, ListItem, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Link, useLocation } from 'react-router-dom'
import type { Theme } from '@mui/material'
import cn from 'classnames'

import { RouteLink, Routes } from '../../routes'

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
      margin: theme.spacing(1, 0, 2, 1.5)
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

  const isActiveLink = (link: RouteLink) => {
    return pathname.startsWith(link.url)
  }

  return (
    <div className={classes.container}>
      <img className={classes.logo} src="/logo.white.svg" alt="Pikaso" />

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
                    active: isActiveLink(link)
                  })}
                  key={link.title}
                >
                  {link.external ? (
                    <a
                      className={classes.listItemLink}
                      href={link.url}
                      target="_blank"
                    >
                      {link.title}
                    </a>
                  ) : (
                    <Link className={classes.listItemLink} to={link.url}>
                      {link.title}
                    </Link>
                  )}
                </ListItem>
              ))}
            </List>
          </div>
        )
      })}
    </div>
  )
}
