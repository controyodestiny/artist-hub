import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../state/store';
import { money } from '../utils/format';

export default function Home(){
  const data = useStore(s=>s.data);
  const featured = data.releases.slice(0,2);
  const upcoming = data.events.slice(0,2);
  return (
    <div>
      <div className="hero">
        <div className="container">
          <h1>Music. Community. Impact.</h1>
          <p>Discover songs and stories, join the fan community, grab tickets, and support causes you care about.</p>
          <div className="flex" style={{justifyContent:'center'}}>
            <Link className="btn primary" to="/songs">Explore Songs</Link>
            <Link className="btn" to="/events">Upcoming Events</Link>
          </div>
        </div>
      </div>

      <div className="container">
        <h2>Featured Songs</h2>
        <div className="grid cols-2">
          {featured.map(r => (
            <Link to={`/songs/${r.id}`} key={r.id} className="card">
              <img src={r.cover} alt={r.title} style={{width:'100%', borderRadius:12}}/>
              <h3>{r.title}</h3>
              <small className="muted">{r.description}</small>
            </Link>
          ))}
        </div>

        <div className="space"></div>
        <h2>Upcoming Events</h2>
        <div className="grid cols-2">
          {upcoming.map(e => (
            <Link to={`/events/${e.id}`} key={e.id} className="card">
              <img src={e.image} alt={e.title} style={{width:'100%', borderRadius:12}}/>
              <h3>{e.title}</h3>
              <small className="muted">{new Date(e.date).toLocaleString()}</small>
            </Link>
          ))}
        </div>

        <div className="space"></div>
        <div className="card">
          <h3>Are you an artist?</h3>
          <p>Claim your profile and manage releases, events, community and commerce from the Artist Admin.</p>
          <Link className="btn" to="/admin">Open Admin</Link>
        </div>
      </div>
    </div>
  )
}
