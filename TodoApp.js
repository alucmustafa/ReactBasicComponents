
import './App.css';
import { useEffect,useState } from 'react';

function App() {

  const [text,setText]= useState("");
  
  const [message,setMessage]= useState([])

console.log(text,"text");

 const  onchangeFun=(e)=>{
setText(e.target.value);
 }
const messagerFunc=()=>{
  setMessage(prev=>[...prev,text]);//Burada ...prev ile tüm veriyi çekip üzerine text ile ekleme yaptık..
  setText('')
}
const messageDelete=()=>{
setMessage(prev=>prev.slice(0,-1));
}

console.log(message,"message");
  return (
    <>
    <div style={{ marginTop:"150px", display :"flex",justifyContent:"center",alignItems:"center"}}>
          <input value={text} onChange={onchangeFun} type="text" placeholder='ekle'/>
          <button onClick={messagerFunc}>Ekle</button>
          <button onClick={messageDelete}>Sil</button> 
    </div>
      
       {
        message?.map((msg,i)=>(
          <div key={i}style={{ display :"flex",justifyContent:"center",alignItems:"center"}}>{msg}</div>
        ))
       }
   </>
  );
}

export default App;
