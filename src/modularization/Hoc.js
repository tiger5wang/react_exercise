/*
* 高阶组件
* */
import React, {Component} from 'react';

// 自定义高阶组件一，返回函数形式
const WithHoc = (Component) => {
    // 此处要注意 父组件 传过来的 props 不能丢掉
    console.log('WithHoc 高阶组件渲染了')
    return (props) => <Component {...props} intro={props.intro || '这是默认简介'}/>
};

// 自定义高阶组件二，返回组件形式
const WithComponent = (OldComponent) => {
    console.log('WithComponent 高阶组件渲染了');
    class WithComponent extends Component {
        render() {
            // console.log('WithComponent 高阶组件渲染了')
            return(
                <OldComponent {...this.props}/>
            )
        }
    }
    return WithComponent
};

// 始终要注意子组件为 函数形式 和 React.Component 形式的区别，函数形式 直接使用props,React.Component 需要使用 this.props


// 使用高阶组件正常形式
/*function Child(props) {
    return(
        <div>
            {props.name}
            <ul>
                <li>{props.intro}</li>
            </ul>
        </div>
    )
}
const HocChild = WithComponent(WithHoc(Child))*/


// 以下为高级组件的装饰器形式，
// 注意装饰的顺序是自下而上的，离class 近的先装饰，远的后装饰
@WithHoc
@WithComponent
class Child extends Component {
    render() {
        return(
            <div>
                {this.props.name}
                <ul>
                    <li>{this.props.intro}</li>
                </ul>
            </div>
        )
    }
}

export default class Hoc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: [
                {name: 'react', intro: 'react 简介'},
                {name: 'vue', intro: 'vue 简介'},
                {name: 'angular'},
            ]
        }
    }

    render() {
        const { project } = this.state;
        return (
            <div>
                {project.map((item) => (
                    <div key={item.name}>
                        {/*// 使用高阶组件正常形式*/}
                        {/*<HocChild key={item.name} {...item}/>*/}

                        {/*使用高阶组件 装饰器 形式*/}
                        <Child key={item.name} {...item}/>
                    </div>
                ))
                }
            </div>
        )
    }

}

