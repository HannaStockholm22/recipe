import ls from "./MealCard.module.css";
import { Divider, Button, Modal, Space, Table, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";

export const MealCard = ({ name, pic, id, api1, updateBasket }) => {
  const [forId, setForId] = useState("1");
  const [open, setOpen] = useState(false);
  const { Text, Title } = Typography;

  const forApi1Search = [
    { name: "firstLetter", str: "search.php?f=" },
    { name: "byName", str: "search.php?s=" },
    { name: "byId", str: "lookup.php?i=" },
  ];
  const theMealApi=api1 + forApi1Search[2].str + id;
  const theMealLS=forApi1Search[2].name + id;

  const ingrArray = []; 
  for (let i = 1; i <= 20; i++) {
    const keyForName = "strIngredient" + i;
    const keyForMeasure = "strMeasure" + i;
    if (forId[keyForName]) {
      ingrArray.push({
        key: i,
        nameIngr: forId[keyForName],
        measureIngr: forId[keyForMeasure],
      });
    }
  }

  const showModal = () => {
    console.log("MORE INFO");
    getDataSearch(theMealLS,theMealApi);
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  const handleOk = () => {
    setOpen(false);
    updateBasket(theMealLS,theMealApi);
  };

  const getDataSearch = async (inData, api) => {
    const check = localStorage.getItem(inData);
    if (check) {
      setForId(JSON.parse(check)[0]);
    } else {
      const response = await fetch(api);
      if (response.ok) {
        const jsonData = await response.json();
        const elemData = jsonData.meals;
        console.log("elemData=", elemData);
        localStorage.setItem(inData, JSON.stringify(elemData));
        setForId(elemData[0]);
        console.log("respons=", response.ok, "  status=", response.status);
      } else {
        alert(" Error HTTP:", response.status);
      }
    }
  };


  const columns = [
    {
      title: "Name",
      dataIndex: "nameIngr",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Measure",
      dataIndex: "measureIngr",
    },
  ];
  

  return (
    <div>
      <div className={ls.inner}>
        <Divider>
          <Text style={{ width: 230 }} ellipsis={{ tooltip: true }}>
            {name}
          </Text>
        </Divider>
        <img src={pic} alt="photo" />
        <p>ID{id}</p>
        <Button type="text" block onClick={showModal}>
          Show more information
        </Button>

        <Modal
          title={
            <Space className={ls.modTitle}>
              <Title level={3} style={{ color: "rgb(81, 66, 43)" }}>{name}</Title>
              <Button className={ls.modBtnOk} onClick={handleOk}>
                Add
                <PlusOutlined />
              </Button>
            </Space>
          }
          open={open}
          onCancel={handleCancel}
          onOk={handleOk}
          okText={ <Space> Add<PlusOutlined /></Space>}
          width={1200}
          height={700}
          okButtonProps={{
            style: {
              border: "1px solid rgb(48, 39, 39)",
              backgroundColor: "blanchedalmond",
              color: "rgb(81, 66, 43)",
            },
          }}
        >
          <Divider>Recipe</Divider>
          <Space direction="vertical">
            <div>
              <img className={ls.modImg} src={forId.strMealThumb} alt="photo" />
              <div>
                <h3>Instruction</h3>
                {forId.strInstructions}
              </div>
            </div>

            <div>
              <h3>Ingredients</h3>
              <Table
                columns={columns}
                dataSource={ingrArray}
                bordered
                size="small"
                pagination={false}
              />
            </div>
          </Space>
        </Modal>
      </div>
    </div>
  );
};
