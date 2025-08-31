export const money = (n, currency='UGX') => {
  if (typeof n !== 'number') n = Number(n||0);
  try{
    return new Intl.NumberFormat(undefined,{style:'currency', currency}).format(n);
  }catch(e){
    return `${currency} ${n.toLocaleString()}`;
  }
};
export const slug = (s) => (s||'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
