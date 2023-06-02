import ls from "./Category.module.css";

import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { MdSoupKitchen } from "react-icons/md";
import { TbSalad } from "react-icons/tb";
import { BiDish } from "react-icons/bi";



export const Category = () => {
  return (
    <div className={ls.list}>
 
        <div className={ls.item}>
          <MdSoupKitchen  />
          <h4 className={ls.title}>Soup</h4>
        </div>
     
     
        <div className={ls.item}>
          <TbSalad  />
          <h4 className={ls.title}>Salad</h4>
        </div>
    
   
        <div className={ls.item}>
          <BiDish />
          <h4 className={ls.title}>Hot dish</h4>
        </div>
    
    </div>
  );
};
