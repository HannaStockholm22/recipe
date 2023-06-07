import React, { useState } from "react";
import ls from "./OneSlide.module.css";
import {  Divider, Button, Modal, Space, Table, Typography } from "antd";
import { LikeOutlined, PlusOutlined } from "@ant-design/icons";

export const OneSlide = ({ elem, i }) => {
  const [open, setOpen] = useState(false);
  const dataInstruction = elem?.analyzedInstructions[0]?.steps.map((item, index) => ({
    key: index,
    num: item.number,
    step: item.step,
  }));

  const dataIngredients = elem.extendedIngredients.map((item, index) => ({
    key: index,
    name: item.name,
    measure: item.measures.metric.amount+" "+ item.measures.metric.unitShort 
  }));
  
 
  const { Title } = Typography;
  const showModal = () => {
    console.log("The meal was chosen", elem.id, i);
    console.log("Instr=",dataInstruction);
    console.log("Ingred=",dataIngredients);
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  const handleOk = () => {
    setOpen(false);
  };
  const columns1 = [
    {
      title: "name",
      dataIndex: "name",
    },
    {
      title: "measure",
      dataIndex: "measure",
    },
  ];
  const columns2 = [
    {
      title: "№",
      dataIndex: "num",
    },
    {
      title: "Step",
      dataIndex: "step",
    },
  ];

  return (
    <div className={ls.slide}>
      <div className={ls.card}>
        <div className={ls.card__text}>
          <button className={ls.card__btn} onClick={showModal}>
            {elem.title}
          </button>
        </div>
        <img className={ls.card__img} src={elem.image} alt="img_of_the_dish" />
      </div>
      <div className={ls.gradient}></div>

      <Modal
        title={
            <Space className={ls.modTitle}>
              <Title level={3} style={{ color: "rgb(81, 66, 43)" }}>{elem.title}</Title>
              <Button className={ls.modBtnOk} onClick={handleOk}>
                Add
                <PlusOutlined />
              </Button>
            </Space>
          }
        open={open}
        onCancel={handleCancel}
        onOk={handleOk}
        okText="Add"
        width={1200}
        height={700}
        footer={null}
      >
        <Divider>Recipe</Divider>
        <div>
          {elem.id}
          <span className={ls.forLike}>
            <LikeOutlined />
            {elem.healthScore}
          </span>
        </div>
        <Space direction="vertical">
          <img style={{ width: 280 }} src={elem.image} alt="img_of_the_dish" />
          <div>

          <Divider orientation="left"><h3>Ingredients</h3></Divider>
            <Table
              columns={columns1}
              dataSource={dataIngredients}
              bordered
              size="small"
              pagination={false}
            />
            <br/>
            <Divider orientation="left"><h3>Insruction</h3></Divider> 
            <Table
              columns={columns2}
              dataSource={dataInstruction}
              bordered
              size="small"
              pagination={false}
            />
          </div>
        </Space>
      </Modal>
    </div>
  );
};
