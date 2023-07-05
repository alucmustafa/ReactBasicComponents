
import './App.css';
import useWindowSize from './Hooks/useWindowSize';
import useAxios from './Hooks/useAxios'

function App() {
  const {width,heigth}= useWindowSize();
  const [results,error,loading]=useAxios(
    {
      method:'get', 
      url:'all'

    }
  );

  console.log(results,error,loading);
  return (
   <>
<div className={`${width<500? "bg-purple-500":"bg-blue-500"  }`}>
  width={width} ---heigth={heigth};
</div>
   </>
  );
}

export default App;
