import { SearchByOne } from "../SearchByOne/SearchByOne";
import ls from "./Search.module.css";

export const Search = ({keyArr,valArr}) => {
  console.log(" In Search Component");
  console.log("Allkey=",keyArr);
  console.log("AllValues=",valArr);
  const eachOption = keyArr.map((e) =>  <SearchByOne oneKey={e} valArrForOneKey={valArr[e]}/>); 

  return (
    <div className={ls.inner}>
      <div className="container">
        <div className={ls.options}>
            {eachOption}
            <button className={ls.btnShow}> Show </button>
        </div>
      </div>
    </div>
  );
};
