import React from 'react';
import { useStore } from '../state/store';

export default function Profile(){
  const user = useStore(s=>s.user);
  if(!user) return <div className="container"><p>Please log in.</p></div>;
  return (
    <div className="container">
      <h2>Your Profile</h2>
      <div className="card">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
      </div>
    </div>
  )
}
