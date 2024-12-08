import { useState } from 'react'
import './App.css'
import AppColors from './theme/AppColors'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ backgroundColor: AppColors.greenPrimary }} className='size-full'>
      </div>
    </>
  )
}

export default App
