
import ls from "./Main.module.css";

import { Search } from "../Search/Search";
import { Result } from "../Result/Result";

export const Main = ({updateBasket}) => {
 /* let ingredientsSet = new Set();
  let nameSet = new Set();*/
  const valuesArr={
    Category:['soup','garnish','dessert','dough','fish','meat','fowl','salad','drink'],
    Area:['Italy','China','Ukraine','NoName'],
    Ingredients:['aggs','milk','salt','tomato','paprika','cucumber', 'olive oil'],
    Name:['Mimoza','Caesar salad','Greek salad','Mohito'],
  };
  let  keyArr=Object.keys(valuesArr);
 
  return (
    <div className={ls.inner}>
       <Search  keyArr={keyArr} valArr={valuesArr} />
       <Result updateBasket={updateBasket}/>  
       
    </div>
  );
};