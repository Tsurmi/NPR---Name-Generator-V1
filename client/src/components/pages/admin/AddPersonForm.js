import React from 'react'
import TextField from 'material-ui/TextField'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const propTypes = {
  onFirstNameChanged: PropTypes.func.isRequired,
  onLastNameChanged: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
}

const styles = {
  input: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    margin: 10,
    width: '45vw',
    height: '45vw'
  },
  textField: {
    width: 300
  },
  img: {
    width: '25vw'
  }
}

const enhancer = injectSheet(styles)

const AddPersonForm = props => {
  const { classes } = props
  return (
    <div>
      <h1>Add A Person</h1>
      <div>
        <div className={classes.container}>
          <img className={classes.img} src='http://cdn.embed.ly/providers/logos/npr.png' />
          <form className={classes.input}>
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
          </form>
        </div>
      </div>
    </div>
  )
}

AddPersonForm.propTypes = propTypes

export default enhancer(AddPersonForm)
