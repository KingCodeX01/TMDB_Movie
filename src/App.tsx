import './App.css'
import { Footer } from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SinglePage from './pages/SinglePage';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/SinglePage/:id' element={<SinglePage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App