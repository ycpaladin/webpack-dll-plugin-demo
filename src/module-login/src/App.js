import React, {Component} from 'react'
import {Button} from 'antd'


class App extends Component {
  render () {
    return <Button onClick={() => {
      window.alert('@@@')
    }}>Hello, World!</Button>
    // return <div>Hello, world!</div>
  }
}

export default App
