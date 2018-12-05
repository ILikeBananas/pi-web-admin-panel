/*
*   Program : pi-web-admin-panel
*   Class   : Main container react component
*   Author  : Jonny Hofmann
*/

import React, {Component}   from 'react'
import ReactDOM             from 'react-dom'
import openSocket           from 'socket.io-client'

import ServiceContainer     from './ServiceContainer.js'
import Header               from '../blocks/Header.js'

// Main container holding the whole application
class MainContainer extends Component {
  constructor() {
    super()
    this.socket = openSocket('localhost:8080')
    document.title = "Pi web admin panel"
  }

  render() {
    return    <div>
                <ServiceContainer socket={this.socket}/>
              </div>
  }
}

export default MainContainer
ReactDOM.render(<MainContainer/>, document.getElementById('app'))
