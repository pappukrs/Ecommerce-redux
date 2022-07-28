
import React from "react";
export const Home = () => {

   

    

    React.useEffect(() => {
       [])
  return(
    loading?<h2>...loading</h2>
    :error?<h2>Something Went Wrong</h2>
    :data.map(el=><div key={el.id}>{el.title}</div>)
    <div>Home</div>
  );
};
