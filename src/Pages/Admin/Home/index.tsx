import { Layout } from "antd";

import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

import NavHeader from "Components/NavHeader";
import NavFooter from "Components/NavFooter";
import SiderBar from "Components/SiderBar";
import PageContent from "Components/Content";
import "./style.css";

import { FooterSubData } from "Components/NavFooter";
import { Item, SubItem } from "Components/SiderBar";

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

const AdminHome = () => {
  return (
    <div>
      <NavHeader title="adminHome" />
      <div className="content">
        <SiderBar items={menuItemDatas} />
        <PageContent />
      </div>
      <NavFooter title="Community" links={linkes} />
    </div>
  );
};

export default AdminHome;
