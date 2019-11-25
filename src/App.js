// 应用根组件
import React, {Component} from 'react'
import {Button, message} from 'antd'
import {BrowserRouter, HashRouter} from "react-router-dom"

class App extends Component {

  handClick = () =>{
    message.success('成功了')
  }

  render (){
    return (
      <Button type='primary' onClick={this.handClick}>测试</Button>
    )
  }
}

export default App