import './App.css'
import {Router, Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './views/home'
import Login from './views/login'
import Dashboard from './views/dashboard'
import Users from './views/users'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/admin' element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path='users' element={<Users />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}