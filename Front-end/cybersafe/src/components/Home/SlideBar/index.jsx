import React, { useState } from 'react';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import Style from '../SlideBar/SlideBar.module.css';
import logo from '../../../assets/logo.png'

const { Sider } = Layout;

const Index = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Sider
      collapsed={collapsed}
      onMouseEnter={() => setCollapsed(false)}
      onMouseLeave={() => setCollapsed(true)} 
      style={{
        backgroundColor: '#23888F', 
        height: '100vh',
        position: 'fixed', 
        left: 0,
        overflow: 'hidden', 
        transition: 'all 0.3s ease-in-out', 
      }}
      width={200} 
      collapsedWidth={80} 
    >
      <div  className={Style.bodyImg}><img  className={collapsed? Style.logoColapsed:Style.logoOpen} src={logo} alt="" /></div>
      {/* Menu principal */}
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{
          backgroundColor: '#23888F',
          color: '#fff', 
          border: 'none', 
        }}
        items={[
          {
            key: '1',
            icon: <UserOutlined style={{ color: '#000' }} />,
            label: !collapsed ? 'Diego' : null,
          },
        ]}
      />

      <div
        style={{
          position: 'absolute',
          bottom: 20, 
          width: '100%',
          textAlign: 'center',
        }}
      >
        <button
          className={Style.logout}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            color: '#fff',
            fontSize: '16px',
            cursor:'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px',
            width: '100%',
            transition: 'all 0.3s ease',
          }}
        >
          <LogoutOutlined style={{ fontSize: '24px', marginRight: !collapsed ? '8px' : '0' }} />
          {!collapsed && <span>Sair</span>} 
        </button>
      </div>
    </Sider>
  );
};

export default Index;

