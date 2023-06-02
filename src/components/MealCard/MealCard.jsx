import ls from "./MealCard.module.css";
import { Divider, Button, Modal, Space, Table} from "antd";
import { useState } from "react";

export const MealCard = ({ name, pic, id, api1, updateBasket }) => {
  const [forId, setForId] = useState("1");
  const [open, setOpen] = useState(false);

  const showModal = () => {
    console.log("MORE INFO");
    getDataSearch(forApi1Search[2].name + id, api1 + forApi1Search[2].str + id);
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  const handleOk = () => {
    setOpen(false);
  };

  const forApi1Search = [
    { name: "firstLetter", str: "search.php?f=" },
    { name: "byName", str: "search.php?s=" },
    { name: "byId", str: "lookup.php?i=" },
  ];

  const IngrArray = [];

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

  for (let i = 1; i <= 20; i++) {
    const keyForName = "strIngredient" + i;
    const keyForMeasure = "strMeasure" + i;
    if (forId[keyForName]) {
      IngrArray.push({
        key: i,
        nameIngr: forId[keyForName],
        measureIngr: forId[keyForMeasure],
      });
    }
  }

  console.log("IngArr", IngrArray);

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
        <Divider> {name} </Divider>
        <img src={pic} alt="photo" />
        <p>ID{id}</p>
        <Button type="text" block onClick={showModal}>
          Show more information
        </Button>

        <Modal
          title="More information"
          open={open}
          onCancel={handleCancel}
          onOk={handleOk}
          width={1200}
          height={700}
        >
          <Divider> {name} </Divider>
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
              <Table columns={columns} dataSource={IngrArray} bordered />
            </div>
          </Space>
        
          <Button type="text" block >
            Save
          </Button>
        </Modal>
      </div>
    </div>
  );
};
