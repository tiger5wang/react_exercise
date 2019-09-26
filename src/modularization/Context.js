/**
 * 组件跨层级通信 context
 * */

import React, {Component, useContext } from 'react';
const MyContext = React.createContext();
const { Provider, Consumer }  = MyContext;

{/*消费上下文 方式一 Consumer 方法 ：*/}
function Child(props) {
    // console.log(props)
    return(
        <h3>child1: {props.intro}</h3>
    )
}

{/*消费上下文 方式二 静态 contextType 方法：*/}
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

{/*消费上下文 方式三： hook useContext 方法：*/}
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
                {/*提供上下文，
                注意必须使用 Provider 组件来提供上下文， 无论使用哪种方式*/}
                <Provider value={{intro: '简介'}}>
                    {/*消费上下文 方式一：*/}
                    <Consumer>
                        {/*注意此方式必须由 Consumer 接收 Provider 提供的内容，然后传递给要接收的组件
                        *接收的方式就是用这种函数传参的形式*/}
                        {value => <Child {...value}/>}
                    </Consumer>

                    {/*消费上下文 方式二：*/}
                    <Child2/>

                    {/*消费上下文 方式三：*/}
                    <Child3/>
                </Provider>
            </div>
        )
    }
}

