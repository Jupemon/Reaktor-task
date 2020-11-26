import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';


class Product extends Component {

  state = { 
    loading : false,
    availability : "Check availability"
  }

  handleClick = async (manufacturer, id) => {

    const { checkAvailability } = this.props

    this.setState({loading : true})

    const result = await checkAvailability(manufacturer, id)

    this.setState({availability : result})
  }

  render() { 
    const { availability, loading } = this.state
    const { name, id, color, manufacturer, price } = this.props.data
    return ( 
      <Card style={{ width: '18rem', margin:"auto", marginTop : "10px", marginBottom: "10px" }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Id : {id}</Card.Text>
        <Card.Text>manufacturer : {manufacturer}</Card.Text>
        <Card.Text>Color : {color}</Card.Text>
        <Card.Text>price : {price}</Card.Text>
        <Button disabled={loading} onClick={() => {this.handleClick(manufacturer, id)}}>{availability}</Button>
      </Card.Body>
    </Card>)
  }
}
 
export default Product;

