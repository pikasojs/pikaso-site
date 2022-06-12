import { makeStyles } from '@mui/styles'
import type { Theme } from '@mui/material'

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      borderLeft: '4px solid #d1f2a5',
      backgroundColor: '#effab4',
      marginBottom: theme.spacing(2),
      padding: theme.spacing(2, 1),
      fontWeight: 600
    }
  }),
  {
    name: 'ReleaseBanner'
  }
)

interface Props {
  text: string
}

export function ReleaseBanner({ text }: Props) {
  const classes = useStyles()
  return <div className={classes.root}>{text}</div>
}
