import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Bar from './components/Bar'

import getHours from './utils/hours'
import getSeason from './utils/seasons'

import styles from './styles.css'

export default class TOU extends Component {
  static propTypes = {
    date: PropTypes.string
  }

  render() {
    let { date } = this.props
    const season = getSeason(date)

    return (
      <div className={styles.tou}>
        {getHours(season).map((period, hour) => (
          <Bar peak={period} hour={hour + 1} key={hour} />
        ))}
      </div>
    )
  }
}
