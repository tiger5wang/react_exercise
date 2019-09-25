/**
 * 混合/组合组件
 * */

import React, {Component} from 'react';
import {Button} from 'antd';

// 注意使用 混合/组合组件时，props.children 表示的是 任何符合要求的 JS表达式，包括 JSX，数组，函数等

function Dialog(props) {
    console.log(props)
    return (
        <div style={{border: '1px solid red', ...props.style}}>
            {props.children}
            {props.footer}
        </div>
    )
}

function getInfo(type) {
    return {name: 'react', intro: 'react 简介'}
}

function FunChild(props) {
    console.log(props);
    const info = getInfo(props.type);
    return props.children(info)
}

function FilterChild(props) {
    return (
        <div>
            {React.Children.map(props.children, child => {
                if (child.type === props.type) {
                    return child
                }
            })}
        </div>
    )
}

function RaidoGroup(props) {
    console.log(props)
    return (
        <div>
            {React.Children.map(props.children, child => {
                // vdom 不可以修改，需要克隆一个才可以更改， 所以下一行代码不正确
                // child.props.name = props.name
                // 需要使用React的cloneElement 方法克隆一个新的更改
                return React.cloneElement(child, {name: props.name,})
            })}
        </div>
    )
}

// 注意此处将props解构了
function Raido({children, ...rest}) {
    console.log('radio', rest)
    return (
        <div>
            <label htmlFor="">
                <input type="radio" {...rest} />
                {children}
            </label>
        </div>
    )
}


export default class Compositions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    render() {
        const footer = <Button onClick={() => alert('点击了')}>确定</Button>
        return (
            <div>
                {/*children为JSX表达式*/}
                <h3>children为JSX表达式</h3>
                <Dialog style={{border: '2px solid blue'}} footer={footer}>
                    <h3>React学习营</h3>
                    <ul>
                        <li>高阶组件</li>
                        <li>组合组件</li>
                        <li>hook</li>
                    </ul>
                </Dialog>
                {/*children为含函数表达式*/}
                <h3>children为含函数表达式</h3>
                <FunChild type={'name'}>
                    {({name, intro}) => (
                        <div>
                            {name}
                            <li>
                                {intro}
                            </li>
                        </div>
                    )}
                </FunChild>

                {/*过滤器*/}
                <h3>过滤器</h3>
                <FilterChild type={'h3'}>
                    <h3>React</h3>
                    <p>React 简介</p>
                    <h3>vue</h3>
                    <p>vue 简介</p>
                </FilterChild>


                <RaidoGroup name={'mvvm'}>
                    <Raido value={'react'}>React</Raido>
                    <Raido value={'vue'}>vue</Raido>
                    <Raido value={'angular'}>angular</Raido>
                </RaidoGroup>

            </div>
        )
    }


}

