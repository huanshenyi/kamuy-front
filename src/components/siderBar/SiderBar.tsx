import { Layout, Menu } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import styles from "./SiderBar.module.css";

const { SubMenu } = Menu;
const { Sider } = Layout;

export interface MenuItemDatas {
  items: Item[];
}

export interface Item {
  key: string | number;
  title: string;
  subItem: SubItem[];
  icon?: any;
}

export interface SubItem {
  key: string | number;
  title: string;
}

const SiderBar: React.FunctionComponent<MenuItemDatas> = (props) => {
  const { items, ...others } = props;
  return (
    <div className="page-sider-bar">
      <Sider width={200} className={styles["site-layout-background-sider-bar"]}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          {items.map((item, index) => {
            return (
              <SubMenu key={item.key} icon={<item.icon />} title={item.title}>
                {item.subItem.map((item1, index1) => {
                  return <Menu.Item key={item1.key}>{item1.title}</Menu.Item>;
                })}
              </SubMenu>
            );
          })}
          <SubMenu key="sub2" icon={<UserOutlined />} title="subnav 1">
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    </div>
  );
};

export default SiderBar;
