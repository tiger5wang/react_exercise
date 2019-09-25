import React, { Component } from 'react';


export default class PureComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        // 要注意的是只要进行的setState,不管值有没有改变都会重新render
        setInterval(() => {
            this.setState({
                comments: [
                    {body:"reactisverygood",author:"facebook"},
                    {body:"vueisverygood",author:"youyuxi"}
                ]
            })
        }, 1000)
    }

    render() {
        const { comments } = this.state;
        return(
            <div>
                {comments.map((item, index) => (
                    <Comment key={index} {...item}/>
                ))
                }
            </div>
        )
    }

}





/*class Comment extends Component {
    // 需要注意的是 只要父组件重新 render了，重新传入了props， 不管props跟之前的想比有没有改变，都会重新 render
    // 所以这里需要优化性能

    // 性能优化 一：
    shouldComponentUpdate(nextProps) {
        if(nextProps.data.body === this.props.data.body && nextProps.data.author === this.props.data.author) {
            return false
        }
    }

    render() {
        console.log('comment')
        return(
            <div>
                <p>信息：{this.props.data.body}</p>
                <p>留言人： ----{this.props.data.author}</p>
            </div>
        )
    }
}*/

// 性能优化二：
// 使用 React.PureComponent ,注意这个进行的是浅比较，props只有是值类型或者只有一层的引用类型时才可以，如果引用类型内还嵌套了引用类型，则会判断为ture（因为他们的地址不相同），还会继续 render
/*class Comment extends React.PureComponent {
    // 需要注意的是 只要父组件重新 render了，重新传入了props， 不管props跟之前的想比有没有改变，都会重新 render
    // 所以这里需要优化性能

    render() {
        console.log('comment')
        return(
            <div>
                <p>信息：{this.props.body}</p>
                <p>留言人： ----{this.props.author}</p>
            </div>
        )
    }
}*/


// 性能优化三：
// 使用React.memo 高阶组件封装, 注意此处也是进行的浅比较
const Comment = React.memo((props) => {
    console.log('comment');
    return(
        <div>
            <p>信息：{props.body}</p>
            <p>留言人： ----{props.author}</p>
        </div>
    )
})

