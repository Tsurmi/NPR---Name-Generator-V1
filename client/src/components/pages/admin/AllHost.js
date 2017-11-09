import React from 'react'
import injectSheet from 'react-jss'
import HostCard from './host/HostCard'
import {withRouter} from 'react-router-dom'
import * as AppPropTypes from '../../../lib/propTypes'
import PropTypes from 'prop-types'

const propTypes = {
  hostData: AppPropTypes.hostData,
  classes: PropTypes.object.isRequired
}

const styles = {
  hostCardContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: '20px',
    width: '100%',
    justifyContent: 'center'
  },
  hostCardCard: {
    width: '25%',
    margin: '1%'
  },
  mainDiv: {
    height: 800,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: 'url("https://media.istockphoto.com/vectors/professional-radio-station-studio-vector-id527667268?k=6&m=527667268&s=612x612&w=0&h=xh8A-nZCfU_ZCpKhv5NvWClO5LxaKs6A3oVMUvH4RJo=")',
    position: 'relative',
    justifyContent: 'center'
  },
  heroTitle: {
    fontSize: '4em',
    color: 'yellow',
    fontFamily: 'Bookman',
    textShadow: '1px 1px 2px black'
  },
  heroButton: {
    width: '25%'
  },
  heroSubTitle: {
    fontSize: '2em',
    color: 'yellow',
    fontFamily: 'Bookman',
    textShadow: '1px 1px 2px black'
  }
}

const enhancer = injectSheet(styles)

const AllHost = ({ hostData, classes }) => {
  return (
    <div>
      <div className={classes.mainDiv}>
        <h1 className={classes.heroTitle}> Host Directory </h1>
        <h3 className={classes.heroSubTitle}>Here is the list of all the hosts</h3>
      </div>
      <div className={classes.hostCardContainer} >
        {
          hostData && hostData.hosts && hostData.hosts.length > 0
            ? hostData.hosts.map(host =>
              <div className={classes.hostCardCard}>
                <HostCard
                  key={host._id}
                  host={host}
                  onDelete={() => hostData.deleteHost(host._id)}
                />
              </div>
            ) : <h1> No Host Available </h1>
        }
      </div>
    </div>
  )
}

AllHost.propTypes = propTypes

export default enhancer(withRouter(AllHost))
