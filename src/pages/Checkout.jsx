import React, { useState } from 'react';
import { useStore } from '../state/store';
import { money } from '../utils/format';

export default function Checkout(){
  const { cart, clearCart } = useStore();
  const [info, setInfo] = useState({ name:'', email:'', phone:'', method:'card' });
  const total = cart.reduce((a,b)=>a + b.price * b.qty, 0);

  const pay = () => {
    alert('Demo checkout complete! In production, integrate Stripe/Paystack/Flutterwave/M-Pesa here.');
    clearCart();
  };

  return (
    <div className="container">
      <h2>Checkout</h2>
      <div className="grid cols-2">
        <div className="card">
          <h3>Contact</h3>
          <input className="input" placeholder="Full Name" value={info.name} onChange={e=>setInfo({...info, name:e.target.value})}/>
          <div className="space"></div>
          <input className="input" placeholder="Email" value={info.email} onChange={e=>setInfo({...info, email:e.target.value})}/>
          <div className="space"></div>
          <input className="input" placeholder="Phone" value={info.phone} onChange={e=>setInfo({...info, phone:e.target.value})}/>
          <div className="space"></div>
          <label>Payment Method</label>
          <select value={info.method} onChange={e=>setInfo({...info, method:e.target.value})}>
            <option value="card">Card</option>
            <option value="mobile">Mobile Money</option>
            <option value="paypal">PayPal</option>
          </select>
          <div className="space"></div>
          <button className="btn primary" onClick={pay}>Pay {money(total)}</button>
          <small className="muted"><br/>* Demo only — no real charges.</small>
        </div>
        <div className="card">
          <h3>Order Summary</h3>
          {cart.map(i=> (
            <div key={i.key} className="flex" style={{justifyContent:'space-between'}}>
              <div>{i.name} {i.variant ? <small className="muted">({i.variant})</small> : null} × {i.qty}</div>
              <div>{money(i.price*i.qty)}</div>
            </div>
          ))}
          <hr/>
          <div className="flex" style={{justifyContent:'space-between'}}>
            <strong>Total</strong> <strong>{money(total)}</strong>
          </div>
        </div>
      </div>
    </div>
  )
}
