import React, { useState } from 'react';
import { useStore } from '../state/store';
import { money } from '../utils/format';

export default function ProductCard({product}){
  const addToCart = useStore(s=>s.addToCart);
  const [variant, setVariant] = useState(product.options?.[0] || '');
  return (
    <div className="card">
      <img alt={product.name} src={product.image} style={{width:'100%', borderRadius:12}}/>
      <h3>{product.name}</h3>
      <div className="flex" style={{justifyContent:'space-between'}}>
        <span className="badge">{money(product.price)}</span>
        {product.options?.length>0 && (
          <select value={variant} onChange={e=>setVariant(e.target.value)}>
            {product.options.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
        )}
      </div>
      <div className="space"></div>
      <button className="btn primary" onClick={()=>addToCart({type:'product', id:product.id, name:product.name, price:product.price, variant})}>Add to Cart</button>
    </div>
  )
}
