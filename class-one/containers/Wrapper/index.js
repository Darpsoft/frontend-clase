import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
const { Header, Content, Footer } = Layout;

const Wrapper = ({ children }) => {
  return (
    <>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">LOGIN</Menu.Item>
            <Menu.Item key="2">REGISTER</Menu.Item>
          </Menu>
        </Header>
        <Content className="site-layout" style={{ padding: "0 50px", marginTop: 64 }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Login</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 380 }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </>
  );
};

export default Wrapper;
