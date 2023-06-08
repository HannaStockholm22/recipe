import ls from "./ModalWin.module.css";
import { Divider, Button, Modal, Space, Table, Typography } from "antd";

export const ModalWin = ({ item, onClickDelete, open, handleCancel }) => {
  const { Title, Text } = Typography;
  const columns = [
    {
      title: "Name",
      dataIndex: "nameIngr",
    },
    {
      title: "Measure",
      dataIndex: "measureIngr",
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
    <Modal
      title={
        <Title level={2} style={{ color: "rgb(81, 66, 43)" }}>
          {item.name}
        </Title>
      }
      open={open}
      onCancel={handleCancel}
      width={1200}
      height={700}
      footer={null}
    >
      <Divider>Recipe</Divider>
      <Space direction="vertical">
        <div>
          <img className={ls.modImg} src={item.pathImg} alt="photo" />

          {item.instrStr ? (
            <>
              <Title level={3}>Instruction</Title> <Text>{item.instrStr}</Text>
            </>
          ) : (
            ""
          )}
        </div>
        {item.instrObj ? (
          <>
            <Title level={3}>Instruction</Title>
            <Table
              columns={columns2}
              dataSource={item.instrObj}
              bordered
              size="small"
              pagination={false}
            />
          </>
        ) : (
          ""
        )}
        <div>
          <Title level={3}>Ingredients</Title>
          <Table
            columns={columns}
            dataSource={item.ingradArray}
            bordered
            size="small"
            pagination={false}
          />
        </div>
      </Space>
      <div className={ls.modBottom}>
        <Button type="text" className={ls.modBtn} onClick={onClickDelete}>
          Delete from the Book
        </Button>
      </div>
    </Modal>
  );
};
