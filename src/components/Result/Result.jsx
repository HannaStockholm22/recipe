
import { MealCard } from "../MealCard/MealCard";
import ls from "./Result.module.css";
import { Divider, Space } from "antd";

export const Result = ({ updateBasket, newVal, findEl,api1 }) => {

  if (findEl) {
    const FindMeal = findEl.map((e) => {
      return (
        <Space className={ls.block}>
          <Space  wrap>
            <MealCard name={e.strMeal} pic={e.strMealThumb} id={e.idMeal} api1={api1} updateBasket={updateBasket}/>
          </Space>
        </Space>
      );
    }); 

    return (
      <div className={ls.inner}>
        <div className="container">
          <Divider>It is a result of searching {newVal} </Divider>
          {FindMeal}
        </div>
      </div>
    );
  }
};
