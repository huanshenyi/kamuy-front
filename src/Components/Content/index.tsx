import { Layout, Breadcrumb } from "antd";
import "./style.css";
const { Content } = Layout;

const PageContent = () => {
  return (
    <div style={{ padding: "0 24px 24px" }} className="page-content">
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        Content
      </Content>
    </div>
  );
};

export default PageContent;
