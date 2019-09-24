/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/


import React, { Component } from 'react';
import ExerciseHome from './ExerciseHome'

// 函数式组件，如果一个组件只根据 props 来渲染页面，没有内部的 state 状态，则最好的方法就是使用函数组件的形式实现，并且工作中应尽可能还函数形式封装小功能的组件，这样可以高复用组件，避免重复 render 等
function Welcome(props) {
  return(
    <div>{props.name}, 欢迎来到React</div>
  )
}


export default class App extends Component {
  render() {
    return (
      <div style={{padding: 12}}>
        <h1>react 练习</h1>
        <Welcome name={'tom'}/>
        <ExerciseHome/>
      </div>
    )
  }
}
