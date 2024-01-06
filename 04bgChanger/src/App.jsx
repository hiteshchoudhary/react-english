import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [color, setColor] = useState('olive')
  // function changeColor(color) {
  //   setColor(color)
  // }

  return (
    //<div className='w-full h-screen duration-200 ' style={{backgroundColor: color}}>
  // return (
  //   <div className='w-full h-screen duration-200 ' style={{backgroundColor: color}}> changed code below
    //the w-full utility class is used to set the width of an element to 100% of its containing element 
    //but thats not there that is zero so the width of it has set to zero so the color is not visible to use
      <div className='w-screen h-screen duration-200 ' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
          onClick={() => setColor('red')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{backgroundColor: 'red'}}
          >Red</button>
          <button
          onClick={() => setColor('green')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{backgroundColor: 'green'}}
          >Green</button>
          
          </div>
      </div>
    </div>
  )
}
export default App
