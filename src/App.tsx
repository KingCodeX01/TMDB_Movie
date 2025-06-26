// import { useState } from 'react'
import './App.css'
import Home from './pages/Home';
import SinglePage from './pages/SinglePage';
import { Routes, Route } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/SinglePage/:id' element={<SinglePage />} />
      </Routes>
    </>
  )
}

export default App
