import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useStore } from '../state/store';
import KaraokeLyrics from '../components/KaraokeLyrics';

export default function SongDetail(){
  const { id } = useParams();
  const data = useStore(s=>s.data);
  const song = data.releases.find(r=>r.id===id);
  const artist = song ? data.artists.find(a=>a.id===song.artistId) : null;

  if(!song) return <div className="container"><h2>Song not found</h2></div>;

  return (
    <div className="container">
      <div className="grid cols-2">
        <div>
          <img src={song.cover} alt={song.title} style={{width:'100%', borderRadius:16}}/>
        </div>
        <div>
          <h1>{song.title}</h1>
          {artist && <Link to={`/artists/${artist.id}`} className="badge">{artist.name}</Link>}
          <p className="muted">{song.description}</p>
          <div className="flex">
            {song.links?.spotify && <a className="btn" href={song.links.spotify} target="_blank" rel="noreferrer">Listen on Spotify</a>}
            {song.links?.apple && <a className="btn" href={song.links.apple} target="_blank" rel="noreferrer">Apple Music</a>}
            {song.links?.youtube && <a className="btn" href={song.links.youtube} target="_blank" rel="noreferrer">YouTube</a>}
          </div>
          <div className="space"></div>
          <h3>Credits</h3>
          <ul>
            {song.credits?.map((c,i)=>(<li key={i}><small className="muted">{c.role} — </small>{c.name}</li>))}
          </ul>
        </div>
      </div>

      <div className="space"></div>
      <h2>Interactive Lyrics</h2>
      <KaraokeLyrics lrc={song.lrc} />

      {song.cause && (
        <div className="space"></div>,
        <div className="card">
          <h3>Cause: {song.cause.title}</h3>
          <p className="muted">{song.cause.description}</p>
          <a className="btn" href={song.cause.link} target="_blank" rel="noreferrer">Learn More</a>
          <Link to="/donations" className="btn primary">Donate</Link>
        </div>
      )}
    </div>
  )
}
