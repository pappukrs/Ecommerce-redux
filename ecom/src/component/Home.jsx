import axios from "axios";
import React from "react";
export const Home = () => {

    const[products,setProducts]=React.useState({
        loading:false,
        error:false,
        data:
    });

    React.useEffect(() => {
      axios({
        method:"get",
        url:"https://localhost:8080/products"
      }).then(res=>setProducts(res.data))
      .catch(err=>)
    
      
    }, [])
  return <div>Home</div>;
};
