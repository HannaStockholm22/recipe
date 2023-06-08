import ls from "./SearchByOne.module.css";

export const SearchByOne = ({oneKey,valArrForOneKey}) => {
  
  const eachValue = valArrForOneKey.map((elem)=> <option  value={elem}  > {elem} </option>);  

    return ( 
      <select className={ls.item} name={oneKey} id={oneKey}>
        <option  value="">All {oneKey} </option>
         {eachValue}
      </select>
   ); 
  
}
