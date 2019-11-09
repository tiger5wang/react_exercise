/**
 * 组件跨层级通信 context
 * */

// import React, {Component, useContext } from 'react';
// const MyContext = React.createContext();
// const { Provider, Consumer }  = MyContext;

/*{/!*消费上下文 方式一 Consumer 方法 ：*!/}
function Child(props) {
    // console.log(props)
    return(
        <h3>child1: {props.intro}</h3>
    )
}

{/!*消费上下文 方式二 静态 contextType 方法：*!/}
class Child2 extends Component {
    static contextType = MyContext;
    render() {
        return(
            <div>
                child2: {this.context.intro}
            </div>
        )
    }
}

{/!*消费上下文 方式三： hook useContext 方法：*!/}
function Child3() {
    const ctx = useContext(MyContext);
    return(
        <h3>child3: {ctx.intro}</h3>
    )
}

export default class Context extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                {/!*提供上下文，
                注意必须使用 Provider 组件来提供上下文， 无论使用哪种方式*!/}
                <Provider value={{intro: '简介'}}>
                    {/!*消费上下文 方式一：*!/}
                    <Consumer>
                        {/!*注意此方式必须由 Consumer 接收 Provider 提供的内容，然后传递给要接收的组件
                        *接收的方式就是用这种函数传参的形式*!/}
                        {value => <Child {...value}/>}
                    </Consumer>

                    {/!*消费上下文 方式二：*!/}
                    <Child2/>

                    {/!*消费上下文 方式三：*!/}
                    <Child3/>
                </Provider>
            </div>
        )
    }
}*/

import React, { Component, useContext } from 'react';
import ContextChild2 from './ContextChild';
import ContextChild3 from './ContextChild';
import global  from './Global';

const MyContext = React.createContext();
const { Provider, Consumer } = MyContext;

global.MyContext = MyContext;

function Child1(props) {
    return(
        <div>
            {props.name}:
            <ul>
                <li>{props.intro}</li>
            </ul>
        </div>
    )
}

class Child2 extends Component {
    static contextType = global.MyContext;
    render() {
        return(
            <div>
                {this.context.name}:
                <ul>
                    <li>{this.context.intro}</li>
                </ul>
            </div>
        )
    }
}

function Child3(props) {
    const ctx = useContext(MyContext);
    return(
        <div>
            {ctx.name}
            <ul>
                <li>{ctx.intro}</li>
            </ul>
        </div>
    )
}

export default class Context extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                {/*提供上下文，必须要使用 Provider 组件包起来提供上下文，以供子组件使用*/}
                <Provider value={{name: '课程名称',intro: '课程简介'}}>
                    {/*第一种方式*/}
                    {/*<Consumer>*/}
                        {/*{value => <Child1 {...value}/>}*/}
                    {/*</Consumer>*/}

                    {/*第二种方式*/}
                    <Child2/>
                    <ContextChild2/>

                    {/*第三种方式*/}
                    {/*<Child3/>*/}
                    {/*<ContextChild3/>*/}
                </Provider>
            </div>
        )
    }
}