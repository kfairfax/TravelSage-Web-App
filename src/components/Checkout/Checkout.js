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
            price: 0
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        let amount = this.props.location.query.quantity
        // console.log(amount)
        this.setState({
            price: amount
        })
    }


    onToken = (token) => {
        token.card = void 0;
        axios.post('/api/payment', {
            token,
            amount: this.state.price
        }).then(response => {
            this.setState({
                redirect: true
            })
            alert('Thank you for your purchase!  Enjoy your trip!!!')
        });
    }

    render() {
        console.log(this.state);
        if (this.state.redirect)
            return <Redirect to='/profile' />

        return (
            <div className='checkout-body'>

                <h2>Your total is ${this.state.price}.00</h2>

                <StripeCheckout
                    token={this.onToken}
                    stripeKey={'pk_test_UNR6SFhiq5AXu77sYepjv3xa'}
                    amount={this.state.price * 100} />
            {/* // The amount displayed at the bottom of the payment form */}
            </div>
        )
    }
}

export default Checkout;