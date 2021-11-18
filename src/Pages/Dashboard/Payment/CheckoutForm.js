import { CircularProgress } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth'




const CheckoutForm = ({ appointment }) => {
  const { price, patientName , _id} = appointment
  const { user } = useAuth()
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [clientSecret, setClientSecret] = useState('')
  const [processing, setProcessing] = useState(false)

  useEffect(() => {
    fetch('http://localhost:5000/create-payment-intent', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ price })
    })
        .then(res => res.json())
        .then(data => setClientSecret(data.clientSecret));
}, [price]);


  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!stripe || !elements) {
      return
    }


    const card = elements.getElement(CardElement)

    if (card === null) {
      return
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    })
    setProcessing(true)
    if (error) {
      setError(error.message)
      setSuccess('')
    }
    else {
      setError('')
    }
    //============== payment intent==================
    const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: user.email
          },
        },
      },
    );

    if (intentError) {
      setError(intentError.message)
      setSuccess('')
    }
    else {
      setError('')
      setSuccess('Your payment prosseing successfully')
      console.log(paymentIntent)
      setProcessing(false)
      const payment = {
        amout: paymentIntent.amount,
        created: paymentIntent.created,
        last4: paymentMethod.card.last4,
        transaction: paymentIntent.client_secret.slice('_secret')[0]
      }
      const url = `http://localhost:5000/appointments/${_id}`
      fetch(url, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(payment)
      })

    }

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        {processing ? <CircularProgress></CircularProgress>
          :
          <button type="submit" disabled={!stripe || success}>
            Pay ${price}
          </button>}
        {
          error && <p style={{ color: 'red' }}>{error}</p>
        }
        {
          success && <p style={{ color: 'green' }}>{success}</p>
        }
      </form>
    </div>
  );
};

export default CheckoutForm;