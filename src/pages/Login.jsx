import React, { useState } from 'react';
import { useStore } from '../state/store';
import { useNavigate } from 'react-router-dom';

export default function Login(){
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('fan');
  const login = useStore(s=>s.login);
  const nav = useNavigate();

  const submit = () => {
    login({ email, name, role });
    nav('/admin');
  };

  return (
    <div className="container">
      <h2>Login (Demo)</h2>
      <div className="grid cols-2">
        <div className="card">
          <input className="input" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
          <div className="space"></div>
          <input className="input" placeholder="Name" value={name} onChange={e=>setName(e.target.value)}/>
          <div className="space"></div>
          <label>Role</label>
          <select value={role} onChange={e=>setRole(e.target.value)}>
            <option value="fan">Fan</option>
            <option value="artist">Artist Admin</option>
            <option value="superadmin">Super Admin</option>
          </select>
          <div className="space"></div>
          <button className="btn primary" onClick={submit}>Continue</button>
          <small className="muted"><br/>* Demo auth — add real auth (OAuth, magic links, etc.) for production.</small>
        </div>
        <div className="card">
          <h3>Tips</h3>
          <p>To see artist admin features, log in with an email that matches an artist's admin list from the mock data (e.g., <code>artist.rania@example.com</code>).</p>
        </div>
      </div>
    </div>
  )
}
