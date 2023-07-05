import { useState, useEffect } from "react"

const useWindowSize= ()=>{
    
const [size,setSize]=useState({width:'',heigth:''});


useEffect(()=>{

const handleResize=()=>{
setSize({width:window.innerWidth,heigth:window.innerHeight});//windowsun kendi komutları yardımıyla oluşturduk..
}
window.addEventListener("resize",handleResize)
handleResize();
return ()=>{window.removeEventListener("resize",handleResize)} //burada eklenen eventi silmemiz lazım ....
},[])
return size;
}

export default useWindowSize;