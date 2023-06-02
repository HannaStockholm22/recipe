
import ls from "./AntdSearch.module.css";
import { Select} from 'antd';

export const AntdSearch = ({oneKey,ind,valArrForOneKey,updateUserChoise}) => {

    const handleChange = (value) => {
        console.log(`Selected: ${value} `);
        updateUserChoise(value,ind,oneKey);
      };

    const activePlaceholder=oneKey;
    const options = [];
    if (valArrForOneKey) {
    valArrForOneKey.map((elem,index) => { 
      options.push({
        value: elem,
        label: elem,     
      });  
    });  
   } 


  return (
          <Select
          className={ls.forSelect}
          bordered={false}
          placeholder={activePlaceholder}
          onChange={handleChange}
          options={options}
        />
        
   );
};
