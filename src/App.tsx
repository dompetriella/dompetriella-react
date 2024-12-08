import { useState } from 'react'
import './App.css'
import AppColors from './theme/AppColors'
import { useAppState } from './state/AppState';
import useWindowWidth from './hooks/useWindowWidth';

function App() {

  const lightModeState = useAppState((state) => state.lightMode);
  const isMobile: boolean = useWindowWidth() < 480;

  const backgroundColor = lightModeState ? AppColors.greenPrimary : AppColors.blackPrimary;


  return (
    <>
      <div style={{ backgroundColor: backgroundColor }} className='size-full flex flex-col  items-center relative'>
        <nav>
          <div className='absolute left-4 right-4 h-32 bottom-4 bg-green-950 '></div>
        </nav>
      </div>
    </>
  )
}

export default App
