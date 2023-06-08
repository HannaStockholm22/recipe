import ls from "./Book.module.css";
import { Space } from "antd";
import { NavLink } from "react-router-dom";
import { RollbackOutlined } from "@ant-design/icons";
import { Card } from "../Card/Card";

export const Book = ({ basket, deleteItem }) => {
  const basketEachEl = basket.map((item, index) => {
    return (
      <Space key={index} className={ls.block}>
        <Space wrap>
          <Card item={item} index={index} deleteItem={deleteItem} />
        </Space>
      </Space>
    );
  });

  return (
    <div className={ls.book}>
      <div className={ls.top}>
        <button className={ls.btn}>
          <NavLink to="../fromAPI1">
            Back to Search
            <RollbackOutlined />
          </NavLink>
        </button>
      </div>
      {basketEachEl}
    </div>
  );
};
