
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

const ContactsList = ({contacts, switchRightColumn, changeCurrentPerson}) => {
    
    let allContacts = contacts.map(person => {
        return (
            <div key={v4()}>
              <p onClick={ () => {
              changeCurrentPerson(person);
              switchRightColumn("info");
              }}>{person.name}</p>
            </div>
        );
    });

    return (
      <>
        <div key={v4()} className="contactsList">
          <div>{allContacts}</div>
          <button onClick={() => switchRightColumn("add")}>Add contact</button>
        </div>
      </>
    );
}

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.array,
  switchRightColumn: PropTypes.func,
  changeCurrentPerson: PropTypes.func,
}
