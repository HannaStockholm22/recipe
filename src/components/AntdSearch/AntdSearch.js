import ls from "./AntdSearch.module.css";
import { Select } from "antd";

export const AntdSearch = ({ oneKey,ind,valArrForOneKey,updateUserChoise,value}) => {

  const handleChange = (value) => {
    updateUserChoise(value, ind, oneKey);
  };

  const activePlaceholder = oneKey;
  const options = [];
  if (valArrForOneKey) {
    valArrForOneKey.map((elem, index) => {
      options.push({
        value: elem,
        label: elem,
      });
    });
  }

  return (
    <Select
      className={ls.forSelect}
      value={value}
      bordered={false}
      placeholder={activePlaceholder}
      dropdownStyle={{ maxHeight: 300, overflow: 'auto'}}
      onChange={handleChange}
      options={options}
      showSearch={true}
    />
  );
};

