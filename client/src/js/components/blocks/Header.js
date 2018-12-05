/*
*   Program : pi-web-admin-panel
*   File   : Header react component
*   Author  : Jonny Hofmann
*/

import React, {Component} from 'react'
import './Header.css'

class Header extends Component {
  constructor() {
    super()
  }

  render() {
    return  <div className="Header">
              <h1>PI web admin panel</h1>
            </div>
  }
}

export default Header
