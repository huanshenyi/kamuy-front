import { PageHeader, Button } from "antd";
import styles from "./NavHeader.module.css";

interface HeaderData {
  title: string;
  subTitle?: string;
  extras?: HTMLElement[];
}

export const NavHeader: React.FunctionComponent<HeaderData> = (props) => {
  const { title, subTitle, extras, ...others } = props;
  return (
    <div className={styles.header}>
      <PageHeader
        className={styles["page-header"]}
        onBack={() => null}
        title={title}
        subTitle={subTitle}
        extra={[
          <Button key="3">Operation</Button>,
          <Button key="2">Operation</Button>,
          <Button key="1" type="primary">
            Primary
          </Button>,
        ]}
      />
    </div>
  );
};
