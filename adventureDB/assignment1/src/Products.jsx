import { products } from "./Service"
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

const Products = () => {
  const [product, setProduct] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [fetchProduct, setFetchProduct] = useState("");

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getProduct = async () => {
      const data = await axios.get(`https://adventureworksforbuuttiedu.azurewebsites.net/products/${fetchProduct}`)
      .then(response => response.data)
      .catch(err => console.log(`Product fetch unsuccessful. Error: err ${err}`))

      setProduct(data);
    }
    getProduct();
  }, [fetchProduct]);

  const openModal = (id) => {
    setFetchProduct(id);
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
    setProduct(null);
  }

  const productsToPrint = products.map(product => {
    if (product.Name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return (
        <div onClick={() => openModal(product.ProductID)} key={product.ProductID} className="product">
          <li key={product.ProductID}>
            {product.Name} {product.ProductNumber} {product.ListPrice} $
          </li>
        </div>
      )
    }
  });


  return (
    <>
      <h2>Products</h2>
        <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)}></input>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
          { product === null ? 
          "loading..." :
          <>
            <h3>Product info</h3>
            <p>Product name: {product.Name}</p>
            <p>Product number: {product.ProductNumber}</p>
            <p>Standard cost: {product.StandardCost} $</p>
            <p>List price: {product.ListPrice} $</p>
          </>
          }
        </Modal>
        <div className="productsList">
            {productsToPrint} 
        </div>
    </>
    )
}

export default Products