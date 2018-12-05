/*
*   Program : pi-web-admin-panel
*   File    : Service container react component
*   Author  : Jonny Hofmann
*/

import React, {Component} from 'react'
import Service            from '../blocks/Service.js'
import './ServiceContainer.css'

class ServiceContainer extends Component {
  constructor() {
    super()

  }

  setServices(services) {
    for (let i = 0; i < services.length; i++) {

    }
  }
  render() {
    this.socket = this.props.socket
    this.socket.emit("ServiceContainer");
    return  (<div className='ServiceContainer'>
              <h1>ServiceContainer</h1>
              <Service socket={this.socket}/>
              <Service socket={this.socket}/>
              <Service socket={this.socket}/>
            </div>)
  }
}

export default ServiceContainer
