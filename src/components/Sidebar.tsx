import * as React from 'react';
import {useState} from 'react';
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {Link} from 'dva/router';

const { Sider } = Layout;

const SiderBar = () => {
  const [collapsed, setCollapse] = useState(false)

  const onCollapse = collapsed => {
    setCollapse(collapsed);
  };

    return (
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} style={{ minHeight: '100vh' }}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <UserOutlined />
            <span>Index</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to='/products'></Link>
            <PieChartOutlined />
            <span>Products</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to='/todos'></Link>
            <DesktopOutlined />
            <span>Todos</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
}

export default SiderBar