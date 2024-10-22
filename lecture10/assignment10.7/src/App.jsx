import './App.css'
import { Outlet } from "react-router-dom"
import NavBar from './NavBar'

const App = () => {
  return (
    <>
    <div>
      <h1>Song book</h1>
      <div className="columnContainer">
        <NavBar />
        <div className="rightColumn">
          <Outlet />
        </div>
      </div>
    </div>
    </>
  )
}

export default App