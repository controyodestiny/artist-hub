import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../state/store';

export default function Songs(){
  const songs = useStore(s=>s.data.releases);
  return (
    <div className="container">
      <h2>Songs</h2>
      <div className="grid cols-3">
        {songs.map(s => (
          <Link to={`/songs/${s.id}`} key={s.id} className="card">
            <img src={s.cover} alt={s.title} style={{width:'100%', borderRadius:12}}/>
            <h3>{s.title}</h3>
            <small className="muted">{s.description}</small>
          </Link>
        ))}
      </div>
    </div>
  )
}
