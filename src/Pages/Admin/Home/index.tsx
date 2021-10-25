import React, { useState } from "react";

// アクセス数の表示

const AdminHome = () => {
  const [count, setCount] = useState<number>(0);
  const [loading, setLoging] = useState<boolean>(false);
  return (
    <div>
      <span>adminHome</span>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        クリック
      </button>
      {count}
    </div>
  );
};

export default AdminHome;
