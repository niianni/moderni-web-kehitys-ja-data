import PropTypes from 'prop-types';
import { useState } from 'react';


const AddContact = ({contacts, setContacts, switchRightColumn}) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [website, setWebsite] = useState('');
    const [notes, setNotes] = useState('');
    
    const handleSave = () => {
        setContacts([...contacts, {name, phone, email, address, website, notes}]);
        switchRightColumn("landing");
    };

    const handleCancel = () => {
      switchRightColumn("landing");
    }
  
    return (
    <>
    <div className="addContact">
      <h1>Add a contact</h1>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)}></input>
        <label htmlFor="email">Email address</label>
        <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)}></input>
        <label htmlFor="phone">Phone number</label>
        <input type="text" id="phone" name="phone" value={phone} onChange={e => setPhone(e.target.value)}></input>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" name="address" value={address} onChange={e => setAddress(e.target.value)}></input>
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" value={website} onChange={e => setWebsite(e.target.value)}></input>
        <label htmlFor="notes">Notes</label>
        <textarea id="notes" name="notes" value={notes} onChange={e => setNotes(e.target.value)} rows={3} cols={50}></textarea>
        
      </div>
      <button onClick={handleSave}>Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
    </>
  )
}

export default AddContact;

AddContact.propTypes = {
    contacts: PropTypes.array,
    setContacts: PropTypes.func,
    switchRightColumn: PropTypes.func
  }