import { Form, Input, Button } from "antd";
import { UserOutlined, LockFilled } from "@ant-design/icons";
import styles from "./style.module.css";

interface UserData {
  username: string;
  password: string;
}

const LoginPage = () => {
  const onFinish = (values: UserData) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className={styles.loginPage}>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "usernameを入力してください!" }]}
        >
          <Input placeholder="Username" prefix={<UserOutlined />} />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "passwordを入力してください!" }]}
        >
          <Input.Password placeholder="password" prefix={<LockFilled />} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            ログイン
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
