import React from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from '../state/store';
import TicketCard from '../components/TicketCard';

export default function EventDetail(){
  const { id } = useParams();
  const data = useStore(s=>s.data);
  const ev = data.events.find(e=>e.id===id);
  if(!ev) return <div className="container"><h2>Event not found</h2></div>;
  return (
    <div className="container">
      <div className="grid cols-2">
        <img src={ev.image} alt={ev.title} style={{width:'100%', borderRadius:16}}/>
        <div>
          <h1>{ev.title}</h1>
          <p className="muted">{new Date(ev.date).toLocaleString()} — {ev.venue} — {ev.city}</p>
          <div className="grid cols-2">
            {ev.tickets.map(t => <TicketCard key={t.id} event={ev} ticket={t} />)}
          </div>
        </div>
      </div>
    </div>
  )
}
