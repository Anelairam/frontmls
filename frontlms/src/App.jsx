import './App.css'
import LoginButton from './components/organisms/login.jsx'
import LogoutButton from './components/organisms/logout.jsx'


const App = () =>{
  return(
    <div>
      <h1>Learning Management System</h1>
      <LoginButton />
      <LogoutButton/>
    </div>
  )
}

export default App
