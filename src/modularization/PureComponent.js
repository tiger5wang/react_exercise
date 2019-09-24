import React, { Component } from 'react';


class PureComponent extends Component {

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
                    <Comment key={index} data={item}/>
                ))

                }
            </div>
        )
    }


}

export default PureComponent;



class Comment extends Component {
    // 需要注意的是 只要父组件重新 render了，重新传入了props， 不管props有没有改变，都会重新 render
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
}
