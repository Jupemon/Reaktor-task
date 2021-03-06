import React, { Component } from 'react';
import { Button, Col, Row, Container } from 'react-bootstrap';
import Product from './Product/Product';





class Renderer extends Component {
    constructor(props) {

        super(props)

        const { products, amountToRender } = props

        this.state = {
            amount : amountToRender,
            rendered : products.slice(0, amountToRender)
        }
    }

    renderMoreProducts = () => {

        const { products, amountToRender } = this.props

        let { rendered, amount } = this.state
        
        rendered = rendered.concat(products.slice(amount, amount + amountToRender))

        amount += amountToRender

        this.setState({rendered, amount})


    }

    componentDidUpdate(prevProps) {

        const { products, amountToRender } = this.props

        if (prevProps.products !== this.props.products) { 

            this.setState({rendered : products.slice(0, amountToRender)})

        }
      }
    

    render() {

        const { rendered } = this.state
        
        return ( 
            <Container>
                <Row>
                    {rendered.map(i => {return <Col key={i.id}><Product checkAvailability={this.props.checkAvailability} data={i}/></Col>})}
                </Row>
                <Row>
                    <Button onClick={() => {this.renderMoreProducts()}} variant="secondary" size="lg" block>
                    Load more...
                    </Button>
                </Row>
            </Container>
        );
    }
}
 
export default Renderer;

