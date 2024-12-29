import { useState } from 'react'
import './App.css'

function App() {
  const [background, setbackground] = useState("#ffffff");
  function handle(){
    setbackground(getRandomHexColor());
  }
  function getRandomHexColor() { 
    const hexCharacters = '0123456789ABCDEF'; 
    let color = '#'; 
    for (let i = 0; i < 6; i++) 
      { color += hexCharacters[Math.floor(Math.random() * 16)]; 
      } 
    return color;
    }
  return (
    <>
      <div className='w-[100vw] h-[100vh] flex justify-center items-center' style={{backgroundColor:background}}>
         <button className='bg-green-600 p-4 rounded-xl text-white hover:bg-green-700' onClick={handle}>Change BackGround</button>
      </div>
    </>
  )
}

export default App
