import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';
import MenuConfig from './menuConfig';
// import './index.less';
const SubMenu = Menu.SubMenu;
export default class NavLeft extends Component {
    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode
        })
    }
    //菜单渲染
    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )

            }
            return <Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
        })
    }
    render() {
        return (
            <Menu
                theme="dark"
                mode="horizontal"
            >
                {this.state.menuTreeNode}
            </Menu>
        )
    }
}