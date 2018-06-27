import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import './checkout.css'

class Checkout extends Component {
    constructor() {
        super();
        this.state = {
            redirect: false,
            price: 2500
        }
        this.onToken=this.onToken.bind(this);
    }
    
    componentDidMount() {
        window.scrollTo( 0, 0 )

    //     let amount = this.props.location.query.quantity

    //     if( amount < 15 )
    //         amount *= 1200
    //     else
    //         amount *= 900

    //     this.setState({
    //         price: amount
    //     })
     }

    // onPurchaseConfirmation() {
    //     axios.put( '/api/update_paid/' + this.props.location.query.userId )
    // }

    onToken = (token) => {
        token.card = void 0;
        axios.post('/api/payment', { token, amount: this.state.price*100 /* the amount actually charged*/ } ).then(response => {
            // this.onPurchaseConfirmation();
            this.setState({
                redirect: true
            })
            alert('Thanks for your purchase')
        });
    }

    render() {

        if( this.state.redirect )
            return <Redirect to='/tours' />

        return(
            <div className='checkout-body'>

                <h2>Your total is ${this.state.price / 100}.00</h2>

                <StripeCheckout
                    token={this.onToken}
                    stripeKey={ 'pk_test_UNR6SFhiq5AXu77sYepjv3xa' }
                    amount={this.state.price} // The amount displayed at the bottom of the payment form
                />

            </div>
        )
    }
}

export default Checkout;