import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../state/store';

export default function Events(){
  const events = useStore(s=>s.data.events);
  return (
    <div className="container">
      <h2>Events</h2>
      <div className="grid cols-2">
        {events.map(ev => (
          <Link key={ev.id} to={`/events/${ev.id}`} className="card">
            <img src={ev.image} alt={ev.title} style={{width:'100%', borderRadius:12}}/>
            <h3>{ev.title}</h3>
            <small className="muted">{new Date(ev.date).toLocaleString()} — {ev.city}</small>
          </Link>
        ))}
      </div>
    </div>
  )
}
