import React from 'react';
import { Row, Col } from 'antd';
export default class Common extends React.Component {
    render() {
        return (
            <div>
                <Row className="container">
                    {/* <Header /> */}
                </Row>
                <Row>
                    {this.props.children}
                </Row>
            </div>
        );
    }
}