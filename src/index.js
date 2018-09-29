import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Bar from './components/Bar'

import getHours from './utils/hours'

import styles from './styles.css'

export default class TOU extends Component {
  static propTypes = {
    date: PropTypes.string
  }

  render() {
    let { date } = this.props

    return (
      <div className={styles.tou}>
        {getHours(date).map((period, hour) => (
          <Bar peak={period} hour={hour + 1} key={hour} />
        ))}
      </div>
    )
  }
}
