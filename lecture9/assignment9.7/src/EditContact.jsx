import PropTypes from 'prop-types';
import { useState } from 'react';

const EditContact = ({contacts, contact, setContacts, switchRightColumn}) => {
    const [name, setName] = useState(`${contact.name}`);
    const [phone, setPhone] = useState(`${contact.phone}`);
    const [email, setEmail] = useState(`${contact.email}`);
    const [address, setAddress] = useState(`${contact.address}`);
    const [website, setWebsite] = useState(`${contact.website}`);
    const [notes, setNotes] = useState(`${contact.notes}`);
    
    const handleSave = () => {
      const newContactList = contacts.map(person => {
        if (person === contact) {
          return ({name, phone, email, address, website, notes});
        } else {
          return person;
        }
      });
      setContacts(newContactList);
      switchRightColumn("landing");
    };

    const handleCancel = () => {
        switchRightColumn("landing");
    }
    return (
        <>
        <div className="editContact">
          <h1>Edit Contact</h1>
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

export default EditContact;

EditContact.propTypes = {
    contacts: PropTypes.array,
    contact: PropTypes.object,
    setContacts: PropTypes.func,
    switchRightColumn: PropTypes.func
  }