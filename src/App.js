import axios from 'axios';
import { useEffect, useState } from 'react';
import { Contxt } from './Components/Context';
import Body from './Components/Body';
import Chart from './Components/Chart'
import './App.css'

function App() {
const [loading, setloading] = useState(true)
  

  let deta=Contxt()
  console.log(deta.data)
  

  useEffect(() => {
    const get= async()=>{
    let res = await axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=12.9762&lon=77.6033&exclude=hourly,minutely,alerts&units=metric&appid=e86b454d14a437ecddee3f23628ee2aa')
      deta.setcr(await res.data.current)
    let data= await res.data.daily
      deta.set(await data)
      setloading(false)
  }
  get()
  }, [])

  if(loading) return <h1>loading</h1>


  return (
    <div  >
      <Body/>
      <Chart/>
    </div>
  );
}

export default App;
