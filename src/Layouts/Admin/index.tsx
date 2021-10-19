import { UserOutlined } from "@ant-design/icons";

import NavHeader from "Components/NavHeader";
import NavFooter from "Components/NavFooter";
import SiderBar from "Components/SiderBar";
import { Layout, Breadcrumb } from "antd";
import "./style.css";

import { FooterSubData } from "Components/NavFooter";
import { Item, SubItem } from "Components/SiderBar";
import React, { Component } from "react";
const { Content } = Layout;

const linkes: FooterSubData[] = [
  {
    title: "title1",
    subTitle: "subTitle",
    link: "link",
  },
  {
    title: "title2",
    subTitle: "subTitle",
    link: "link",
  },
];

const sitem: SubItem[] = [
  {
    key: "1",
    title: "subitem1",
  },
  {
    key: "2",
    title: "subitem2",
  },
  {
    key: "3",
    title: "subitem3",
  },
];

const menuItemDatas: Item[] = [
  {
    key: "sub1",
    title: "sub1 title",
    icon: UserOutlined,
    subItem: sitem,
  },
];

class AdminLayout extends Component {
  render() {
    return (
      <div>
        <NavHeader title="adminHome" />
        <div className="content">
          <SiderBar items={menuItemDatas} />
          <div style={{ padding: "0 24px 24px" }} className="page-content">
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>any</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {this.props.children}
            </Content>
          </div>
        </div>
        <NavFooter title="Community" links={linkes} />
      </div>
    );
  }
}

export default AdminLayout;
