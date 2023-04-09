import { useEffect } from "react";

export const Popular = () => {
 useEffect(()=>{getPopular()},[]) 

const api2=`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_KEY_SPOON}&number=8`;

 const getPopular = async()=>{
   const  response= await fetch(api2);
   if (response.ok){ 
       const  jsonData = await response.json();
       console.log(jsonData);  
       console.log("respons=",response.ok,"  status=",response.status);
   } else{
    alert(" Error HTTP:", response.status)
   }
 } 


  return (
    <div >
     Popular
    </div>
  );
};