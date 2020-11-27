import NavBar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Renderer from './Components/Renderer/Renderer';
import { Jumbotron } from 'react-bootstrap';

class App extends Component {
  state = {
    message : "Pick something",
    availability : [],
    selected : null,
    products : []
  }

  extractAvailability = (string) => { // Extract & return availability data from a chaotic string

    
    if (string.includes(">INSTOCK<")) {
      return "In stock"
    }
    if (string.includes(">OUTOFSTOCK<")) {
      return "Out of stock"
    }
    if (string.includes(">LESSTHAN10<")) {
      return "Less than 10"
    }
    else {
      return "NAN"
    }
  }


  checkAvailability = async (manufacturer, id) => { // Called by product, return availability data of a product

    try {

      let { availability } = this.state

      if (availability.find(i => i.manufacturer === manufacturer) === undefined) { // Check if data already fetched
  
        const response = await fetch(`https://bad-api-assignment.reaktor.com/availability/${manufacturer}`)
  
        const data = await response.json()
  
        availability.push({
          manufacturer : manufacturer,
          products : data.response
        })
  
        this.setState({ availability : availability })
      }
  
  
      const searchMe = availability.find(o => o.manufacturer === manufacturer)
  
      const availabilityData = searchMe.products.find(i => i.id === id.toUpperCase())
  
      return this.extractAvailability(availabilityData.DATAPAYLOAD)
    }
    
    catch {
      return "Failed to fetch data"
    }
    
  }
  
  fetchProducts = async (category) => { // Fetch & get products

    try {
      let { products, selected } = this.state

      if (products.find(p => p.category === category) === undefined) { // Check if data is already fetched
  
        const response = await fetch(`https://bad-api-assignment.reaktor.com/products/${category}`)
  
        const items = await response.json()
    
        products.push({
          category : category, 
          items : items
        })
    
      }
  
      selected = products.findIndex(i => i.category === category) // Shows current Products
  
      this.setState({products : products, selected : selected})
    }

    catch {
      this.setState({message : "Could not Connect to API"})
    }

  }
  
  render() { 
    const {selected, products, message} = this.state

    if (products.length <= 0) {
      return (<div>
      <NavBar fetchProducts={this.fetchProducts}/>
      <Jumbotron fluid>
        <h1>{message}</h1>
      </Jumbotron>
        
      </div>)
    }

    else {
      return ( 
      <div>
        <NavBar fetchProducts={this.fetchProducts}/>
        <div style={{marginBottom:"30px"}}></div>
        <Renderer checkAvailability={this.checkAvailability} products={products[selected].items} amountToRender={10}/>
      </div>
      );
    }

  }
}

export default App;
