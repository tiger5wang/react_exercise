import React, { Component } from 'react';
// import Button from 'antd/lib/button'
// import 'antd/dist/antd.css'
import { Button } from 'antd'
import PureComponent from "./modularization/PureComponent";

export default class ExerciseHome extends Component {

    render() {
        return (
            <div>
                {/*<Button type={'primary'}>按钮</Button>*/}
                <PureComponent/>
            </div>
        )
    }


}