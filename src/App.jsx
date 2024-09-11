import React, { useEffect, useState } from 'react';
import './App.css';

function App(){
  const[darkmode, setdarkmode] = useState('light')

  useEffect(() => {
    const initializeTheme = () =>{   
    const underZone = window.matchMedia("(max-width:768px)").matches
    const mode = localStorage.getItem('theme') || 'light'

    if(underZone){
      setdarkmode(mode)
    }else{
      setdarkmode('light')
    }
  }

  initializeTheme()

  return() => window.addEventListener('scroll', initializeTheme)
  }, [])

  const toggleTheme = () => {
    const themechanger = darkmode === 'light' ? 'dark' : 'light';
    setdarkmode(themechanger)
    localStorage.setItem('theme', themechanger)
  }
  return(
    <div className={`App ${darkmode}-mode`}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quae atque modi eum pariatur ipsa totam temporibus dolor eos beatae, blanditiis assumenda in labore, distinctio laboriosam sequi asperiores, ducimus quisquam!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam doloremque nostrum tempora quae est cum perferendis eveniet perspiciatis eligendi fuga quisquam, voluptas nam libero? Debitis dignissimos tenetur adipisci maxime optio.</p>
    </div>
  )
}

export default App;
