import React from 'react'
import PropTypes from 'prop-types'

import BarCSS from './Bar.css'

class Hour extends React.Component {
    static propTypes = {
      hour: PropTypes.number,
      peak: PropTypes.string
    }

    render() {
      const { hour, peak } = this.props
      const classes = `${BarCSS.bar} ${BarCSS[peak]}`
      return (
        <div className={classes}>
          {hour}
        </div>
      )
    }
}

export default Hour
