import ls from "./AntdSearch.module.css";
import { Select } from "antd";

export const AntdSearch = ({ oneKey,ind,valArrForOneKey,updateUserChoise}) => {

  const handleChange = (value) => {
    console.log(`Selected: ${value} `);
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
      value={undefined}
     
      bordered={false}
      placeholder={activePlaceholder}
      dropdownStyle={{ maxHeight: 300, overflow: 'auto'}}
      onChange={handleChange}
      options={options}
      showSearch={true}
      
        />
  );
};

