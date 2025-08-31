import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useStore } from '../state/store';

export default function Navbar(){
  const cart = useStore(s=>s.cart);
  const user = useStore(s=>s.user);
  const logout = useStore(s=>s.logout);
  const count = cart.reduce((a,b)=>a+b.qty,0);
  return (
    <div className="nav">
      <div className="nav-inner container" style={{justifyContent:'space-between'}}>
        <Link to="/" className="brand"><span className="logo">AH</span> ArtistHub</Link>
        <div className="flex" style={{flexWrap:'wrap'}}>
          <NavLink to="/" className={({isActive})=> isActive?'active':''}>Home</NavLink>
          <NavLink to="/artists" className={({isActive})=> isActive?'active':''}>Artists</NavLink>
          <NavLink to="/songs" className={({isActive})=> isActive?'active':''}>Songs</NavLink>
          <NavLink to="/events" className={({isActive})=> isActive?'active':''}>Events</NavLink>
          <NavLink to="/store" className={({isActive})=> isActive?'active':''}>Store</NavLink>
          <NavLink to="/community" className={({isActive})=> isActive?'active':''}>Community</NavLink>
          <NavLink to="/donations" className={({isActive})=> isActive?'active':''}>Donations</NavLink>
          <NavLink to="/admin" className={({isActive})=> isActive?'active':''}>Admin</NavLink>
          <NavLink to="/cart" className={({isActive})=> isActive?'active':''}>Cart ({count})</NavLink>
        </div>
        <div className="flex">
          {user ? (
            <>
              <small>Hi, {user.name || user.email}</small>
              <button className="btn" onClick={logout}>Logout</button>
            </>
          ) : (
            <NavLink to="/login" className={({isActive})=> isActive?'active':''}>Login</NavLink>
          )}
        </div>
      </div>
    </div>
  )
}
