import PropTypes from 'prop-types';


const ShowInfo = ({contact, remove, switchRightColumn}) => {
  return (
    <>
    <div className="showInfo">
      <h1>{contact.name}</h1>
      <div>
        {contact.phone !== "" && <p><span className="italic">Phone:</span> {contact.phone}</p>}
      </div>
      <div>
        {contact.email !== "" && <p><span className="italic">Email:</span> {contact.email}</p>}
      </div>
      <div>
        {contact.address !== "" && <p><span className="italic">Address:</span> {contact.address}</p>}
      </div>
        {contact.website !== "" && <p><span className="italic">Website:</span> {contact.website}</p>}
        {contact.notes !== "" && <p><span className="italic">Notes:</span> {contact.notes}</p>}
      
      <button onClick={() => {
        remove(contact);
        switchRightColumn("landing");
      }}>Remove</button> 
      <button onClick={() => switchRightColumn("edit")}>Edit</button>
    </div>
    </>
  )
}

export default ShowInfo;

ShowInfo.propTypes = {
    contact: PropTypes.object,
    remove: PropTypes.func,
    switchRightColumn: PropTypes.func
  }