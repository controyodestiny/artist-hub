import React, { useState } from 'react';
import { useStore } from '../state/store';

function Gate({ children, roles }){
  const user = useStore(s=>s.user);
  if(!user) return <p>Please log in.</p>;
  if(roles && !roles.includes(user.role)) return <p>Insufficient permissions.</p>;
  return children;
}

export default function Admin(){
  const data = useStore(s=>s.data);
  const isArtistAdmin = useStore(s=>s.isArtistAdmin);
  const user = useStore(s=>s.user);
  const [draft, setDraft] = useState({ title:'', artistId:data.artists[0]?.id, description:'' });

  return (
    <div className="container">
      <h2>Admin</h2>

      <Gate roles={['artist','superadmin']}>
        <div className="card">
          <h3>Create Song (Demo)</h3>
          <label>Artist</label>
          <select value={draft.artistId} onChange={e=>setDraft({...draft, artistId:e.target.value})}>
            {data.artists.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}
          </select>
          <div className="space"></div>
          <input className="input" placeholder="Title" value={draft.title} onChange={e=>setDraft({...draft, title:e.target.value})}/>
          <div className="space"></div>
          <textarea className="input" rows="4" placeholder="Description" value={draft.description} onChange={e=>setDraft({...draft, description:e.target.value})}></textarea>
          <div className="space"></div>
          <button className="btn primary" onClick={()=>alert('In production, submit to API / moderation flow.')}>Submit for Review</button>
          <small className="muted"><br/>* Demo only — this screen shows rough layout & role-gating.</small>
        </div>

        {user?.role==='superadmin' && (
          <div className="card">
            <h3>Super Admin — Moderation Queue</h3>
            <p className="muted">Approve songs, posts, products, and events here.</p>
            <button className="btn">Approve</button> <button className="btn danger">Reject</button>
          </div>
        )}

        {user && (
          <div className="card">
            <h3>Your Artist Access</h3>
            <ul>
              {data.artists.map(a => (
                <li key={a.id}>
                  {a.name} — {isArtistAdmin(a.id) ? <span className="badge">Admin</span> : <span className="muted">view only</span>}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Gate>
    </div>
  )
}
