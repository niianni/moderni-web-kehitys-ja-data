import './App.css'
import { Outlet, Link } from 'react-router-dom'

function App() {

  return (
    <>
      <div className="app">
        <h1>Microsoft Adventureworks database app</h1>
        <nav className="navBar">
            <Link to={'/customers'} className="navItem">Customers</Link>
            <Link to={'/products'} className="navItem">Products</Link>
        </nav>
        <div className="outletContainer">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
