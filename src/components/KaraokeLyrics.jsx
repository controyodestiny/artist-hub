import React, { useEffect, useMemo, useRef, useState } from 'react';

function parseLRC(lrc){
  // returns [{t: seconds, text}...]
  const lines = (lrc||'').split(/\n+/).map(l=>l.trim()).filter(Boolean);
  const out = [];
  for(const line of lines){
    const m = line.match(/^\[(\d+):(\d+\.?\d*)\]\s*(.*)$/);
    if(m){
      const min = parseInt(m[1],10); const sec = parseFloat(m[2]);
      out.push({ t: min*60 + sec, text: m[3] });
    }else{
      out.push({ t: out.length?out[out.length-1].t+3:0, text: line });
    }
  }
  return out.sort((a,b)=>a.t-b.t);
}

export default function KaraokeLyrics({lrc, autoStart=true}){
  const items = useMemo(()=>parseLRC(lrc),[lrc]);
  const [t, setT] = useState(0);
  const timerRef = useRef(null);

  useEffect(()=>{
    if(!autoStart) return;
    timerRef.current = setInterval(()=> setT(v=>v+0.25), 250);
    return ()=> clearInterval(timerRef.current);
  },[autoStart]);

  const activeIndex = items.findIndex((it, idx)=> t>=it.t && (idx===items.length-1 || t<items[idx+1].t));
  return (
    <div className="karaoke">
      {items.map((it, i)=>(
        <div key={i}><span className={i===activeIndex? 'on':''}>{it.text}</span></div>
      ))}
      <div className="space"></div>
      <button className="btn" onClick={()=>setT(0)}>Restart</button>
    </div>
  )
}
