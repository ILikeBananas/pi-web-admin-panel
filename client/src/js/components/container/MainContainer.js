import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import ServiceContainer from './ServiceContainer.js'

// Main container holding the whole application
class MainContainer extends Component {
  constructor() {
    super()
  }

  render() {
    return    <div>
                <ServiceContainer/>
              </div>
  }
}

export default MainContainer
ReactDOM.render(<MainContainer/>, document.getElementById('app'))
