import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import MenuItme from './pages/menuConfig/index';
const { Header, Content, Footer } = Layout;
export default class Admin extends React.Component {
    render() {
        return (
            <Layout className="layout">
                <Header>
                    <div className="logo">
                        <img src="/assets/logo-ant.svg" alt="" />
                        <h1>Imooc MS</h1>
                        <MenuItme />
                    </div>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-content">
                        {this.props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>

        );
    }
}