import React from 'react';
import { useStore } from '../state/store';
import { money } from '../utils/format';

export default function TicketCard({event, ticket}){
  const addToCart = useStore(s=>s.addToCart);
  return (
    <div className="card">
      <h3>{ticket.name}</h3>
      <p className="muted">{event.title}</p>
      <div className="flex" style={{justifyContent:'space-between'}}>
        <span className="badge">{money(ticket.price)}</span>
        <small className="muted">{ticket.remaining} left</small>
      </div>
      <div className="space"></div>
      <button className="btn primary" onClick={()=>addToCart({type:'ticket', id:`${event.id}:${ticket.id}`, name:`${event.title} — ${ticket.name}`, price:ticket.price})}>Buy</button>
    </div>
  )
}
