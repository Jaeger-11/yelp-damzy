import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Campgrounds from './Pages/Campgrounds';
import Signup from './Pages/Signup'; 
import AddCampground from './Pages/AddCampground';
import AddComment from './Pages/AddComment';
import Campground from './Components/Campground';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/campgrounds' element={<Campgrounds/>} />
        <Route path='/campground' element={<Campground/>} />
        <Route path='/addcampground' element={<AddCampground/>} />
        <Route path='/addcomment' element={<AddComment/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
