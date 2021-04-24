import React, { Component } from 'react';
import https from '../../utils/Ajax'
import './index.scss';
export default class Home extends Component {

    componentDidMount() {
        this.handleClick()
    }

    handleClick = () => {
        https.postJosn(`https:www.baidu.com`, { userName: '12312312' }).then(data => {
            console.log(data, 'data')
        })
    }

    render() {
        return (
            <div className="home-wrap">
                欢迎学习IMooc后台管理系统课程
            </div>
        )
    }
}
