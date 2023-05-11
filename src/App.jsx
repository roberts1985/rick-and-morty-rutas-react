import { Routes, Route, Link, useParams } from 'react-router-dom'
import CharacterDetail from './pages/CharacterDetail'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header/Header'


function App() {
  
  return (
    <>
      <Header /> 
      {/* <Personajes data={character} /> */}
      <Routes>
        <Route path='/' element = {<Home  />} />
        <Route path='/:id' element={<CharacterDetail />} /> 
      </Routes> 
    </>
  )
}

export default App
