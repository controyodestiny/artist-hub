import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../state/store';
import { money } from '../utils/format';

export default function Cart(){
  const { cart, removeFromCart, updateQty } = useStore();
  const total = cart.reduce((a,b)=>a + b.price * b.qty, 0);
  return (
    <div className="container">
      <h2>Your Cart</h2>
      {cart.length===0 ? (
        <p>Cart is empty. <Link to="/store">Browse the store</Link></p>
      ) : (
        <>
          <table className="table">
            <thead><tr><th>Item</th><th>Type</th><th>Qty</th><th>Price</th><th>Total</th><th></th></tr></thead>
            <tbody>
              {cart.map(i=> (
                <tr key={i.key}>
                  <td>{i.name} {i.variant ? <small className="muted">({i.variant})</small> : null}</td>
                  <td><small className="muted">{i.type}</small></td>
                  <td>
                    <input className="input" type="number" value={i.qty} min="1" onChange={e=>updateQty(i.key, Number(e.target.value))} style={{width:80}}/>
                  </td>
                  <td>{money(i.price)}</td>
                  <td>{money(i.price*i.qty)}</td>
                  <td><button className="btn danger" onClick={()=>removeFromCart(i.key)}>Remove</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="space"></div>
          <h3>Total: {money(total)}</h3>
          <Link className="btn primary" to="/checkout">Checkout</Link>
        </>
      )}
    </div>
  )
}
