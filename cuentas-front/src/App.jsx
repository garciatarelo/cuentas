import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemComponent from './components/itemComponent'
import Button from 'react-bootstrap/Button';

function App() {
  
  var x = 0

  //React Mooks - Ganchos de React
  let[contador, setContador] = useState(10)
  let[arr, setArr] = useState([])

  let clickButton=()=>{
    setContador(++contador)
    console.log(contador)
    let x = [...arr, contador]
    setArr(x)
  }

  return (
    <>
      <h1>Contador</h1>
      <p>{contador}</p>
      <Button variant="primary">Primary</Button>
      
      <button onClick={clickButton}>Aumentar</button>
      {arr.map((item) => (
        <ItemComponent key={item} />
      ))}
    </>
  )
}

export default App
