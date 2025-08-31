import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../state/store';

export default function Artists(){
  const arts = useStore(s=>s.data.artists);
  return (
    <div className="container">
      <h2>Artists</h2>
      <div className="grid cols-3">
        {arts.map(a=> (
          <Link key={a.id} to={`/artists/${a.id}`} className="card">
            <img alt={a.name} src={a.avatar} style={{width:'100%', borderRadius:12}} />
            <h3>{a.name}</h3>
            <small className="muted">{a.bio}</small>
          </Link>
        ))}
      </div>
    </div>
  )
}
