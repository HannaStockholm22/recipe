import ls from "./Search.module.css";

export const Search = ({keys,val}) => {
  console.log("Allkey=",keys);
  console.log("AllValues=",val);
  const eachOption = keys.map((e,index) => {
    console.log("e=",keys[index],"=",e); 
    console.log("arr=",val[e]); 
    const eachValue= val[e].map((elem)=> <option  className="forValue" value={elem}> {elem} </option>)
     return (
       <select className={ls.item} name={e} id={e}>
         <option className={ls.forValue} value="">All {e} </option>
          {eachValue}
      </select>
    ); 
  }); 

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
