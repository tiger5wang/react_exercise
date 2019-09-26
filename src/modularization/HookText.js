import React, { useState, useEffect } from 'react';

// 自定义 钩子 - Custom-Hook
// 自定义 hook 是一个函数，名称以“use” 开头， 内部可以使用其他 hook
const useProIntro = (param) => {
    const [obj, setObj] = useState({});
    useEffect(() => {
        setTimeout(() => {
            console.log('自定义钩子 - 调用api')
            setObj({intro: '课程简介'})
        }, 2000);
    }, []);
    return obj
};


export default function HookText() {

    // useState 状态钩子, 返回一个数组，
    // 第一个表示定义的变量(相当于state变量)，第二个表示要改变这个值的函数，相当于setState
    const [projects, setProjects] = useState(['react', 'vue', 'angular']);
    const [name, setName] = useState('选择课程');
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('');

    // 使用自定义钩子
    const proIntro = useProIntro('react');
    console.log('proIntro', proIntro)

    // 副作用钩子 useEffect,每次渲染时都执行，
    // 可以看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。
    // 可以接收两个参数，第一个参数是要执行的函数，第二个参数是一个数组，如果试一个空数组表示只执行一次，如果不是空数组，则数组中的值为限制条件，只有当数组中的值改变的时候才会执行函数
    //
    useEffect(() => {
        document.title = `${name}`
    });

    useEffect(() => {
        // 此处为调用api，可以传空数组，或者添加限制数据
        console.log('限制条件')
    }, [name]);

    return (
        <div>
            <div>
                您选择的课程是:{name}
            </div>
            <div>您供选择了{count}次</div>
            <ul>
                {projects.map((item) => (
                    <li key={item} onClick={() => {setName(item);setCount(count + 1)}}>{item}</li>
                ))}
            </ul>
            <p>
                <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
                <button onClick={() => {setProjects([...projects, inputValue]);setInputValue('')}}>添加课程</button>
            </p>

            <h3>以下展示自定义钩子函数返回信息</h3>
            <p>react</p>
            <p>{proIntro.intro ? proIntro.intro: 'loading'}</p>

        </div>
    )


}

