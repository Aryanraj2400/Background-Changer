import { useState } from 'react';

function App() {
  const [color,setColor] = useState("black")

  return (
    <>
      <div className='w-full h-screen' style={{backgroundColor:color}}>
      <h1 className='text-white font-extrabold text-3xl py-4'><center>Background Color Changer</center></h1>
      <div className="flex flex-wrap justify-center gap-3 py-5 px-3">
        <div className="border-2 px-2 py-1 rounded-lg text-white"
        style={{backgroundColor:"red"}} ><button 
        onClick={()=>setColor("red")}>Red</button></div>
        <div className="border-2 px-2 py-1 rounded-lg text-white"
        style={{backgroundColor:"green"}} ><button
        onClick={()=>setColor("green")}>Green</button></div>
        <div className="border-2 px-2 py-1 rounded-lg text-white"
        style={{backgroundColor:"blue"}} ><button
        onClick={()=>setColor("blue")}>Blue</button></div>
        <div className="border-2 px-2 py-1 rounded-lg text-white"
        style={{backgroundColor:"orange"}} ><button
        onClick={()=>setColor("orange")}>Orange</button></div>
      </div>
      </div>
    </>
  )
}

export default App
