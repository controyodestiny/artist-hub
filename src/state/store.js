import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { artists, releases, events, products, donationPresets, forums } from '../data/mock';

const base = (set, get) => ({
  user: null, // {email, name, role:'fan'|'artist'|'superadmin'}
  cart: [], // {id,type:'product'|'ticket'|'donation', name, price, qty, meta}
  favorites: { songs: [], artists: [] },
  data: { artists, releases, events, products, donationPresets, forums },

  login: (user) => set({ user }),
  logout: () => set({ user:null }),

  addToCart: (item) => set(state => {
    const key = `${item.type}:${item.id}:${item?.variant||''}`;
    const found = state.cart.find(i => i.key === key);
    if(found){
      return { cart: state.cart.map(i => i.key===key ? {...i, qty:i.qty+(item.qty||1)} : i ) };
    }
    return { cart: [...state.cart, {...item, key, qty: item.qty||1}] };
  }),
  removeFromCart: (key) => set(state => ({ cart: state.cart.filter(i=>i.key!==key) })),
  updateQty: (key, qty) => set(state => ({ cart: state.cart.map(i=>i.key===key?{...i, qty:Math.max(1,qty)}:i) })),
  clearCart: () => set({ cart: [] }),

  toggleFav: (target, id) => set(state => {
    const arr = new Set(state.favorites[target]);
    if(arr.has(id)) arr.delete(id); else arr.add(id);
    return { favorites: { ...state.favorites, [target]: Array.from(arr) } };
  }),

  isArtistAdmin: (artistId) => {
    const u = get().user;
    if(!u) return false;
    if(u.role === 'superadmin') return true;
    const artist = get().data.artists.find(a=>a.id===artistId);
    return !!artist?.adminEmails?.includes(u.email);
  }
});

export const useStore = create(
  devtools(persist(base, { name: 'artist-hub' }))
);
