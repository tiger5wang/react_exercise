import React from 'react';


class Son extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            number: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            number: nextProps.number
        })
    }

    componentDidMount() {
        this.setState({
            number: this.props.number
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        // if(nextProps.number === this.props.number) {
        //     return false
        // }
        if(nextState.number ===  this.state.number) {
            return false
        }
        return true
    }
    render(){
        const {index,number,handleClick} = this.props
        //在每次渲染子组件时，打印该子组件的数字内容
        console.log(number);
        return (
            <div>
                <h1 onClick ={() => handleClick(index)}>{this.state.number}</h1>
                {/*<h1 onClick ={() => handleClick(index)}>{number}</h1>*/}
            </div>
        )
    }
}


class Father extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            numberArray:[0,1,2]
        }
    }
    //点击后使numberArray中数组下标为index的数字值加一，重渲染对应的Son组件
    handleClick = (index) => {
        let preNumberArray = this.state.numberArray
        preNumberArray[index] += 1;
        this.setState({
            numberArray:preNumberArray
        })
    }
    render(){
        return(<div style ={{margin:30}}>{
            this.state.numberArray.map(
                (number,key) => {
                    return <Son
                        key = {key}
                        index = {key}
                        number ={number}
                        handleClick ={this.handleClick}/>
                }
            )
        }
        </div>)
    }
}
export default Father

