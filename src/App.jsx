import { useState } from 'react'
import './App.css'

function App() {
  const [value, setvalue] = useState("");
  
  return (
    <>
      <div className='w-[100vw] h-[100vh] flex justify-center'>
          <div className='w-[50%] h-[10%] bg-blue-900 rounded-lg flex justify-between m-8'>
              <input type="text" className='m-3 w-[70%] p-3 border-none rounded-lg' placeholder='Enter ToDo'/>
              <button className='bg-green-500 m-3 w-[25%] text-center rounded-lg font-mono text-2xl' >Add</button>
          </div>


      </div>
    </>
  )
}

export default App
