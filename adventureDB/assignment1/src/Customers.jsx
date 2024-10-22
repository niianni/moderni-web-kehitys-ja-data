import { customers } from "./Service"
import { useState, useEffect } from "react"
import Modal from "react-modal"
import axios from "axios"

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    color: '#392F5A',
    backgroundColor: "#FFF8F0",
    borderRadius: "10px",
    border: "solid 2px #392F5A",
  },
};

const Customers = () => {
  const [customer, setCustomer] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [fetchCustomer, setFetchCustomer] = useState("");

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getCustomer = async () => {
      console.log(fetchCustomer);
        const data = await axios.get(`https://adventureworksforbuuttiedu.azurewebsites.net/customers/${fetchCustomer}`)
        .then(response => {return response.data})
        .catch(err => console.log(`Customer fetch unsuccessful. Error: ${err}`));

        setCustomer(data);
    };
    getCustomer();
}, [fetchCustomer]);
  
  const openModal = (id) => {
    setFetchCustomer(id);
    setModalIsOpen(true);
  }
  
  const closeModal = () => {
    setModalIsOpen(false);
    setCustomer(null);
  }

  const customersToPrint = 
    customers.map(person => {
      let fullName = `${person.Title} ${person.FirstName} ${person.MiddleName} ${person.LastName}`;

      if (fullName.toLowerCase().includes(searchTerm.toLowerCase())) {
        return (
          <div key={person.CustomerId} onClick={() => openModal(person.CustomerId)} className="customer">
            <li>
              {person.Title} {person.FirstName} {person.LastName}
            </li>
          </div>
        )
      }
    });


  return (
    <>
      <h2>Customers</h2>
      <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)}></input>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
        { customer === null ? 
          "loading..." : 
          <>
            <h3>Customer info</h3>
            <p>Name: {customer.Title} {customer.FirstName} {customer.LastName}</p>
            <p>Company: {customer.CompanyName}</p>
            <p>Email: {customer.EmailAddress}</p>
            <p>Phone: {customer.Phone}</p>
          </>
        }
      </Modal>
      <div className="customerList">
        {customersToPrint} 
      </div>
    </>
    )
}

export default Customers
