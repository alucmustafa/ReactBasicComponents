
import './App.css';
import { useState,useEffect } from 'react';
import axios from 'axios';

function App() {
  const [county,setCounty] =useState([])
  useEffect(()=>{
const getCounty=async()=>{//async: verilerin içeriğinin gelebilmesi için kullanacağımız bir yöntem.
      const data=await axios.get('https://restcountries.com/v3.1/all');
      setCounty(data);
}
getCounty();

  },[])
  console.log(county,"ülkeler");
  return (
    <div className='Country'>

    {
            county?.data?.map((d,i) =>(
         <div style={{width:"150px",height:"50px",border:"2px solid black",borderRadius:"5px",background:"orange"}} key={i} > {d.name.common}</div>  
            ))
    }
    </div>
  );
}

export default App;
