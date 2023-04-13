import React from "react";
import { Async } from "react-async";
 
const forResults=()=>
 fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json());
 
const FetchAwait = () => (


  <Async promiseFn={forResults}>
    {({ data, error, isLoading }) => {
      if (isLoading) return "Loading...";
      if (error) return ` ${error.message}`;
      if (data)
        return (
          <div>
            <h2>React Async - Users</h2>
            {data.map(el => (
              <li>
                {el.name} --- {el.email}
              </li>
            ))}
          </div>
        );
      return null;
    }}
  </Async>
);
