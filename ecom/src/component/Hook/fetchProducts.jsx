import axios from "axios";

export const useFetchProducts=() => {
    const[products,setProducts]=React.useState({
        loading:false,
        error:false,
        data:[]
    });



    setProducts(prev=>({
        ...prev,
        loading:true,
    }))
  axios({
    method:"get",
    url:"https://localhost:8080/products"
  }).then(res=>setProducts(prev=>({
    ...prev,
   loading:false,
   error:false,
   data:res.data

  })))
  .catch(err=>setProducts(prev=>({
    ...prev,
    loading:false,
    error:true
  })))

  
}
