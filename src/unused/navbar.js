import React, { Component } from 'react';
import { Layout, Menu, Avatar } from 'antd';
import styled from 'styled-components';


const { Header } = Layout;
const StyledHeader = styled(Header)`
background: #303030!important;
display:flex;
font-family: 'Roboto';
.logo {
  width: 20%;
  display: flex;
  justify-content:flex-start;
  color: #f3f5fb;
  font-size: 20px;
  font-weight: 700;

}
.avatar-container {
display:flex;
flex-direction:column;
justify-content:center;
margin-right:20px;
}
.menu {
width:80%;
display: flex;
justify-content:flex-end;
background: #303030;
color: #f3f5fb;
letter-spacing: 0.015625em;
border-bottom: 0px;
}

`;
class Navbar extends Component {
  render() {
    return (
    <Layout>
    <StyledHeader className="header">
      <div className="logo">
      <span className="avatar-container">
       <Avatar style={{ color: '#fff', backgroundColor: '#424242' }}>JD</Avatar>
      </span>
      </div>
      <Menu
        mode="horizontal"
        style={{ lineHeight: '64px' }}
        className="menu"
      >
        <Menu.Item key="1">About</Menu.Item>
        <Menu.Item key="2">Projects</Menu.Item>
        <Menu.Item key="3">Contact</Menu.Item>
      </Menu>
    </StyledHeader>
  </Layout>
    );
  }
}

export default Navbar;