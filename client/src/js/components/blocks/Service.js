/*
*   Program : pi-web-admin-panel
*   File    : Service react component
*   Author  : Jonny Hofmann
*/

import React, {Component} from 'react'
import './Service.css'

class Service extends Component {
  constructor() {
    super()
  }

  render() {
    this.socket = this.props.socket
    this.socket.emit("service")
    return <div className="Service">
              <p>service</p>
            </div>
  }
}

export default Service
