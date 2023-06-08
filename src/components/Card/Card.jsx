import ls from "./Card.module.css";
import { ModalWin } from "../ModalWin/ModalWin";
import { Divider, Button, Typography } from "antd";
import { useState } from "react";

export const Card = ({ item,index,deleteItem }) => {

  const [open, setOpen] = useState(false);

  const handleCancel = () => {
    setOpen(false);
  };
  const showModal = () => {
    setOpen(true);
  };
  const onClickDelete = () => {
    setOpen(false);
    deleteItem(index);
  };

  const { Text } = Typography;
  return (
    <div className={ls.inner}>
      <Divider>
        <Text style={{ width: 230 }} ellipsis={{ tooltip: true }}>
          {item.name}
        </Text>
      </Divider>
      <img className={ls.img} src={item.pathImg} alt="photo" />
      <p>ID{item.idMeal}</p>
      <Button type="text" block onClick={showModal}>
        Show more information
      </Button>
      <ModalWin
        item={item}
        onClickDelete={onClickDelete}
        open={open}
        handleCancel={handleCancel}
      />
    </div>
  );
};
