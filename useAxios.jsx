import axios from "axios";
import { useEffect, useState } from "react";
//https://restcountries.com/v3.1/all
const  useAxios=(config)=>{

const [results,setResult]=useState([]);
const[error,SetError]=useState('');
const [loading,setLoading]=useState(true);
axios.defaults.baseURL='https://restcountries.com/v3.1/'
useEffect(()=>{

const fetchData=async ()=>{
await axios.request(config)
.then((res)=>setResult(res))
.catch((err)=>SetError(err))
.finally(()=>setLoading(false))
}

fetchData();
},[])


return [results,error,loading];
}

export default useAxios;