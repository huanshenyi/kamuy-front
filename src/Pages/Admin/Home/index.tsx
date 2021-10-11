import NavHeader from "Components/NavHeader";
import NavFooter from "Components/NavFooter";
import "./style.css";

import { FooterData, FooterSubData } from "Components/NavFooter";

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

const AdminHome = () => {
  return (
    <div>
      <NavHeader title="adminHome" />
      <NavFooter title="Community" links={linkes} />
    </div>
  );
};

export default AdminHome;
