import './App.css'
import LoginButton from './components/organisms/login.jsx'
import LogoutButton from './components/organisms/logout.jsx'
import { Profile } from './components/templates/Profile.jsx'


const App = () =>{
  return(
    <div>
      <h1>You said Greek</h1>
      <LoginButton />
      <LogoutButton/>
      <Profile />
    </div>
  )
}

export default App
