import React, { useState } from 'react';
import { useStore } from '../state/store';

export default function Community(){
  const forums = useStore(s=>s.data.forums);
  const [post, setPost] = useState({ forumId: forums[0]?.id, title:'', body:'' });
  const [posts, setPosts] = useState([]);

  return (
    <div className="container">
      <h2>Fan Community</h2>
      <div className="grid cols-2">
        <div className="card">
          <h3>Start a Discussion</h3>
          <label>Forum</label>
          <select value={post.forumId} onChange={e=>setPost({...post, forumId:e.target.value})}>
            {forums.map(f => <option key={f.id} value={f.id}>{f.title}</option>)}
          </select>
          <div className="space"></div>
          <input className="input" placeholder="Title" value={post.title} onChange={e=>setPost({...post, title:e.target.value})}/>
          <div className="space"></div>
          <textarea className="input" rows="5" placeholder="Write something..." value={post.body} onChange={e=>setPost({...post, body:e.target.value})}></textarea>
          <div className="space"></div>
          <button className="btn primary" onClick={()=>{ if(!post.title) return; setPosts([{...post, id:Date.now()}, ...posts]); setPost({...post, title:'', body:''}); }}>Publish</button>
          <small className="muted"><br/>* Demo forum (local only). Add moderation & persistence in production.</small>
        </div>
        <div>
          <h3>Latest Posts</h3>
          {posts.length===0 && <p className="muted">No posts yet. Be the first!</p>}
          <div className="grid cols-1">
            {posts.map(p=> (
              <div key={p.id} className="card">
                <small className="badge">{forums.find(f=>f.id===p.forumId)?.title}</small>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
