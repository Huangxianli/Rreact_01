// 应用根组件
import React, {Component} from 'react'
import {message} from 'antd'
import {BrowserRouter, HashRouter, Switch, Route} from "react-router-dom"

import Login from './views/login/login.jsx' 
import Admin from './views/admin/admin.jsx' 

class App extends Component {

  handleSubmit = e => {
    //阻止表单的提交
    e.preventDefault()
    alert("发送登录的ajax请求")
  }

  render (){
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Admin} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App