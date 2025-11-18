import './App.css'
import {Router, Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './views/home'
import Login from './views/login'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}