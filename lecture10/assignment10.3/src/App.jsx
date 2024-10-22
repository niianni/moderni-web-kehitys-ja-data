import './App.css'
import { Link, Outlet } from "react-router-dom"
import { contacts } from './contacts'

export default function App() {

  const allLinks = contacts.map(person => {
    return (
      <Link className="navItem" to={`/contact/${person.id}`} key={person.id}>{person.name}</Link>
    )
  })

  return (
    <>
    <div>
      <h1>Main page</h1>
      <p className="italic">Click name to show more info.</p>
      <nav className="navBar">
        {allLinks}
      </nav>
      <Outlet />
    </div>
    </>
  )
}

