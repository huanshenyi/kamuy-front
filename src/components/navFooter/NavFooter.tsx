import { Row, Col } from "antd";
import styles from "./NavFooter.module.css";

export interface FooterData {
  title: string;
  links: FooterSubData[];
}

export interface FooterSubData {
  title: string;
  icon?: string;
  subTitle: string;
  link: string;
}

const NavFooter: React.FunctionComponent<FooterData> = (props) => {
  const { title, links } = props;
  return (
    <div className={styles["nav-footer"]}>
      <Row>
        <Col className="gutter-row" span={6}>
          <div>{title}</div>
          {links.map((item, index) => {
            return (
              <div key={index}>
                {item.icon}
                {item.title}
                <span>-{item.subTitle}</span>
              </div>
            );
          })}
        </Col>
        <Col className="gutter-row" span={18}></Col>
      </Row>
    </div>
  );
};

export default NavFooter;
