import { useState } from 'react'
import './App.css'
import ContactsList from './ContactsList'
import ShowInfo from './ShowInfo'
import AddContact from './AddContact'
import EditContact from './EditContact'

const App = () => {
  const [contacts, setContacts] = useState([
    {name: "Emma Example", phone: "040 124 3456", email: "emma@gmail.com", address: "Nice street 123", website: "", notes: ""},
    {name: "Emil Example", phone: "050 123 4568", email: "eemil@hotmail.com", address: "", website: "", notes: "I am looking for new friends"},
    {name: "Edward Example", phone: "050 864 8895", email: "", address: "", website: "www.mywebsite.com", notes: ""},
  ]);
  const [currentPerson, setCurrentPerson] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [rightColumn, setRightColumn] = useState("landing");

  let filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(searchTerm.toLowerCase()));


  const removeContact = (toBeRemoved) => {
    const newlist = contacts.filter(contact => contact.name !== toBeRemoved.name);
    setContacts(newlist);
    setCurrentPerson(null);
  };

  const switchRightColumn = (page) => setRightColumn(page);

  const changeCurrentPerson = (newPerson) => {
    setCurrentPerson(newPerson);
  };

  return (
    <><div className="container">
        <div className="leftColumn">
        <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
          <ContactsList contacts={filteredContacts} switchRightColumn={switchRightColumn} changeCurrentPerson={changeCurrentPerson}/>
        </div>
        <div className="rightColumn">
          <div>
            {rightColumn === "landing" && <h1>Contact manager</h1>}
          </div>
          <div>
            {rightColumn === "info" && <ShowInfo contact={currentPerson} remove={removeContact} switchRightColumn={switchRightColumn}/>}
          </div>
          <div>
            {rightColumn === "add" && <AddContact contacts={contacts} setContacts={setContacts} switchRightColumn={switchRightColumn}/>}
          </div>
          <div>
            {rightColumn === "edit" && <EditContact contacts={contacts} contact={currentPerson} setContacts={setContacts} switchRightColumn={switchRightColumn}/>}
          </div>
        </div>
    </div>
    </>
  )
}

export default App
