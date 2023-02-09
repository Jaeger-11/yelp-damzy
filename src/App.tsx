import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import Login from './Pages/Login'
import Campgrounds from './Pages/Campgrounds'
import Signup from './Pages/Signup'
import AddCampground from './Pages/AddCampground'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/campgrounds' element={<Campgrounds/>} />
        <Route path='/addcampground' element={<AddCampground/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
