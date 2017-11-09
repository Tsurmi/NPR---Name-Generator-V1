import React from 'react'
import TextField from 'material-ui/TextField'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import Card, { CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'

const propTypes = {
  onFirstNameChanged: PropTypes.func.isRequired,
  onLastNameChanged: PropTypes.func.isRequired,
  onImageChanged: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
}

const styles = {
  masterDiv: {
    display: 'flex',
    background: {
      image: 'url("http://i66.tinypic.com/xp3u5w.png")'
    },
    width: '100vw',
    height: '100vh',
    alignItems: 'center',
    marginBottom: '10px'
  },
  input: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    width: '45vw'
  },
  textField: {
    width: 300
  },
  img: {
    width: '25vw',
    margin: '5%'
  },
  card: {
    marginLeft: '40%',
    maxWidth: 355,
    height: 475,
    marginTop: 10,
    borderRadius: '25px'
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Merriweather',
    marginTop: '10%'
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 15,
    width: 80
  }
}

const enhancer = injectSheet(styles)

const AddPersonForm = props => {
  const { classes } = props
  return (
    <div className={classes.masterDiv}>
      <Card className={classes.card}>
        <div className={classes.container}>
          <h1 className={classes.header}>Add A Person</h1>
          <img className={classes.img} src='http://lightskinnededgirl.typepad.com/.a/6a00d8341c5e8f53ef01b8d28f1b04970c-500wi' />
          <CardContent className={classes.input}>
            <TextField
              id='firstName'
              label='First Name'
              className={classes.textField}
              onChange={props.onFirstNameChanged}
            />
            <TextField
              id='lastName'
              label='Last Name'
              className={classes.textField}
              onChange={props.onLastNameChanged}
            />
            <TextField
              id='Add Photo'
              label='Add Photo'
              className={classes.textField}
              onChange={props.onImageChanged}
            />
            <Button className={classes.button} raised onClick={(event) => props.onSubmit(event)} >Submit</Button>
          </CardContent>
        </div>
      </Card>
    </div>
  )
}

AddPersonForm.propTypes = propTypes

export default enhancer(AddPersonForm)
