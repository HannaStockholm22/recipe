import { useState } from "react";
import ls from "./Header.module.css";
import { Divider, Button, Modal, Space, Table, Typography } from "antd";

export const Header = ({ counter, basket }) => {
  const [open, setOpen] = useState(false);
  const { Title } = Typography;
  const basketArray = []
  let i = 0;
  basket?.forEach((value) => {
    basketArray[i] = value;
    i++
  });
  console.log(basketArray);

  const columns = [
    {
      title: "Photo",
      dataIndex: "photoMeal",
    },
    {
      title: "Name",
      dataIndex: "nameMeal",
    },
  ];

  
 

  const handleCancel = () => {
    setOpen(false);
  };

  const showBasket = () => {
    console.log("Open Basket");
    setOpen(true);
  };

  return (
    <div className="container">
      <div className={ls.top}>
        <a className={ls.logo} href="#">
          <img className={ls.img} src="images/logo.svg" alt="logo" />
        </a>
        <a className={ls.logo} href="#">
          <p className={ls.title}> My recipes</p>
        </a>
        <button className={ls.book} onClick={showBasket}>
          <img className={ls.img} src="images/book.svg" alt="book" />
          <span className={ls.inbook}>{counter}</span>
        </button>
      </div>
      <Modal
        title={
          <Title level={3} style={{ color: "rgb(81, 66, 43)" }}>
            Your Choice is
          </Title>
        }
        open={open}
        width={1200}
        height={700}
        onCancel={handleCancel}
        footer={null}
      >
        <Space>
          <Table
            columns={columns}
            dataSource={basketArray}
            bordered
            size="small"
            pagination={false}
          />
        </Space>
      </Modal>
    </div>
  );
};
