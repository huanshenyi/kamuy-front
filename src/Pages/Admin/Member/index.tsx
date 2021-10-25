import { useContext } from "react";
import { appContext } from "AppState";

const AdminMember: React.FC = () => {
  const value = useContext(appContext);
  return (
    <div>
      member
      <p>{value.username}</p>
    </div>
  );
};

export default AdminMember;
