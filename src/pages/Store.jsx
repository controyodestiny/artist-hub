import React from 'react';
import ProductCard from '../components/ProductCard';
import { useStore } from '../state/store';

export default function Store(){
  const products = useStore(s=>s.data.products);
  return (
    <div className="container">
      <h2>Merch Store</h2>
      <div className="grid cols-3">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}
