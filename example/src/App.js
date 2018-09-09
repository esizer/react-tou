import React, { Component } from 'react'

import TOU from 'react-tou'

export default class App extends Component {
  render () {
    return (
      <div>
        <TOU />
        <TOU date="2018-09-03" />
      </div>
    )
  }
}
