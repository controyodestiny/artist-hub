import React, { useState } from 'react';
import { useStore } from '../state/store';
import { money } from '../utils/format';

export default function Donations(){
  const { releases, donationPresets } = useStore(s=>s.data);
  const addToCart = useStore(s=>s.addToCart);
  const songsWithCauses = releases.filter(r=>r.cause);
  const [amount, setAmount] = useState(donationPresets[0] || 5000);

  return (
    <div className="container">
      <h2>Donations & Causes</h2>
      <div className="grid cols-2">
        {songsWithCauses.map(s => (
          <div key={s.id} className="card">
            <img src={s.cover} alt={s.title} style={{width:'100%', borderRadius:12}}/>
            <h3>{s.title} — {s.cause.title}</h3>
            <p className="muted">{s.cause.description}</p>
            <a className="btn" href={s.cause.link} target="_blank" rel="noreferrer">Learn More</a>
            <div className="space"></div>
            <div className="flex">
              <select value={amount} onChange={e=>setAmount(Number(e.target.value))}>
                {donationPresets.map(p => <option key={p} value={p}>{money(p)}</option>)}
              </select>
              <button className="btn primary" onClick={()=>addToCart({type:'donation', id:`cause-${s.id}-${amount}`, name:`Donate to ${s.cause.title}`, price: amount})}>Donate {money(amount)}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
