import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useStore } from '../state/store';

export default function ArtistDetail(){
  const { id } = useParams();
  const data = useStore(s=>s.data);
  const artist = data.artists.find(a=>a.id===id);
  const songs = data.releases.filter(r=>r.artistId===id);
  const events = data.events.filter(e=>e.artistId===id);

  if(!artist) return <div className="container"><h2>Artist not found</h2></div>;

  return (
    <div className="container">
      <div className="grid cols-2">
        <div>
          <img src={artist.avatar} alt={artist.name} style={{width:'100%', borderRadius:16}}/>
        </div>
        <div>
          <h1>{artist.name}</h1>
          <p className="muted">{artist.bio}</p>
          <div className="flex">
            {artist.socials?.instagram && <a className="btn" href={artist.socials.instagram} target="_blank" rel="noreferrer">Instagram</a>}
            {artist.socials?.youtube && <a className="btn" href={artist.socials.youtube} target="_blank" rel="noreferrer">YouTube</a>}
            {artist.socials?.tiktok && <a className="btn" href={artist.socials.tiktok} target="_blank" rel="noreferrer">TikTok</a>}
          </div>
        </div>
      </div>

      <div className="space"></div>
      <h2>Songs</h2>
      <div className="grid cols-3">
        {songs.map(s => (
          <Link key={s.id} to={`/songs/${s.id}`} className="card">
            <img src={s.cover} alt={s.title} style={{width:'100%', borderRadius:12}}/>
            <h3>{s.title}</h3>
            <small className="muted">{s.description}</small>
          </Link>
        ))}
      </div>

      <div className="space"></div>
      <h2>Events</h2>
      <div className="grid cols-2">
        {events.map(e => (
          <Link key={e.id} to={`/events/${e.id}`} className="card">
            <img src={e.image} alt={e.title} style={{width:'100%', borderRadius:12}}/>
            <h3>{e.title}</h3>
            <small className="muted">{new Date(e.date).toLocaleString()} — {e.city}</small>
          </Link>
        ))}
      </div>
    </div>
  )
}
