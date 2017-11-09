import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

const propTypes = {
  classes: PropTypes.object.isRequired
}

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 200
  }
}

function SimpleMediaCard (props) {
  const { classes } = props
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image='http://mediad.publicbroadcasting.net/p/newnprdsblog/files/styles/medium/public/201611/circ-logo-2016-01.png'
          title='NPR'
        />
        <CardContent>
          <Typography type='headline' component='h2'>
            NPR Host
          </Typography>
          <Typography component='p'>
            Dairy or Non-Dairy
          </Typography>
          <Typography component='p'>
            Sweet or Not-Sweet
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense color='primary'>
            Share
          </Button>
          <Button dense color='primary'>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

SimpleMediaCard.propTypes = propTypes

export default withStyles(styles)(SimpleMediaCard)
