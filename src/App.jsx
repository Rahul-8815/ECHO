import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './components/Pages/HomePage/HomePage'
import ChatPage from './components/Pages/ChatPage/ChatPage'
import AIPage from './components/Pages/AIPage/AIPage'
import MoodPage from './components/Pages/MoodPage/MoodPage'
import LoginPage from './components/Pages/LoginPage/LoginPage'
import ProfilePage from './components/Pages/ProfilePage/ProfilePage'
import RelaxationRoom from './components/Pages/RelaxationRoom/RelaxationRoom'
import RegisterPage from './components/Pages/RegisterPage/RegisterPage'
import AboutPage from './components/Pages/About/AboutPage'



function App() {

  return (
    <Routes>
        <Route path='/' element = {<HomePage/>}/>
        <Route path='/chat' element = {<ChatPage/>}/>
        <Route path='/ai' element = {<AIPage/>}/>
        <Route path='/mood' element = {<MoodPage/>}/>
        <Route path='/Login' element = {<LoginPage/>}/>
        <Route path='/Profile' element = {<ProfilePage/>}/>
        <Route path='/relax' element = {<RelaxationRoom/>}/>
        <Route path='/register' element = {<RegisterPage/>}/>
        <Route path='/about' element = {<AboutPage/>}/>
    </Routes>
  )
}

export default App
