// Minimal mock data set to demonstrate functionality
export const artists = [
  {
    id: 'rania-l',
    name: 'Rania L',
    avatar: 'https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=400&auto=format&fit=crop',
    bio: 'High-pitch singer & rapper bringing hope and power.',
    socials: {
      instagram: 'https://instagram.com/rania',
      youtube: 'https://youtube.com/@rania',
      tiktok: 'https://tiktok.com/@rania'
    },
    team: ['Rania L (Vocalist)','Roshni L (Rap)','Robert L (Writer/Producer)'],
    adminEmails: ['artist.rania@example.com']
  },
  {
    id: 'roshni-l',
    name: 'Roshni L',
    avatar: 'https://images.unsplash.com/photo-1521334726092-b509a19597b1?q=80&w=400&auto=format&fit=crop',
    bio: 'Hard rap, bold truth, beats that move crowds.',
    socials: {
      instagram: 'https://instagram.com/roshni',
      youtube: 'https://youtube.com/@roshni'
    },
    team: ['Roshni L (Rap)','Rania L (Hooks)','Robert L (Writer/Producer)'],
    adminEmails: ['artist.roshni@example.com']
  }
];

export const releases = [
  {
    id: 'unstoppable',
    artistId: 'rania-l',
    title: 'Unstoppable',
    cover: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=800&auto=format&fit=crop',
    description: 'An anthem of courage and relentless momentum.',
    credits: [
      { role:'Writer', name:'Robert L' },
      { role:'Composer', name:'Robert L' },
      { role:'Vocals', name:'Rania L' },
    ],
    isrc: 'UG-AAA-25-00001',
    links: {
      spotify: 'https://open.spotify.com/track/xyz',
      apple: 'https://music.apple.com/album/xyz',
      youtube: 'https://youtu.be/xyz'
    },
    lrc: `[00:00.00] I am fire in the dark, I glow
[00:05.00] Every heartbeat saying go
[00:10.00] No fear, no doubt—this is my time
[00:15.00] I’m unstoppable, watch me rise`,
    lyrics: `I'm fire in the dark, I glow\nEvery heartbeat saying "go"\nNo fear, no doubt, this is my time\nI'm unstoppable—watch me rise`,
    cause: null
  },
  {
    id: 'break-the-silence',
    artistId: 'roshni-l',
    title: 'Break the Silence',
    cover: 'https://images.unsplash.com/photo-1519664824562-5f3d0de5a88c?q=80&w=800&auto=format&fit=crop',
    description: 'A campaign song against domestic violence—stand, speak, support.',
    credits: [
      { role:'Writer', name:'Robert L' },
      { role:'Composer', name:'Robert L' },
      { role:'Vocals', name:'Roshni L' },
    ],
    isrc: 'UG-AAA-25-00002',
    links: {
      spotify: 'https://open.spotify.com/track/abc',
      apple: 'https://music.apple.com/album/abc',
      youtube: 'https://youtu.be/abc'
    },
    lrc: `[00:00.00] Break the silence, raise your voice
[00:04.50] Every heart deserves a choice
[00:09.00] We stand together—strong and kind
[00:13.50] Love is louder every time`,
    lyrics: `Break the silence, raise your voice...`,
    cause: {
      title: 'Support Safe Homes',
      goal: 100000000, // UGX goal
      link: 'https://example.org/safe-homes',
      description: 'Donations fund shelters, counseling, and legal support.'
    }
  }
];

export const events = [
  {
    id: 'kampala-2025-05-20',
    title: 'Kampala Live — Unstoppable Night',
    artistId: 'rania-l',
    date: '2025-05-20T19:00:00+03:00',
    venue: 'Kampala Arena',
    city: 'Kampala, UG',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1000&auto=format&fit=crop',
    tickets: [
      { id:'ga', name:'General', price: 50000, remaining: 200 },
      { id:'vip', name:'VIP', price: 150000, remaining: 40 }
    ]
  },
  {
    id: 'virtual-2025-06-10',
    title: 'Virtual Meet & Greet',
    artistId: 'roshni-l',
    date: '2025-06-10T18:00:00+03:00',
    venue: 'Online',
    city: 'Global',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop',
    tickets: [
      { id:'std', name:'Standard', price: 30000, remaining: 500 },
      { id:'vip', name:'VIP + Shoutout', price: 90000, remaining: 80 }
    ]
  }
];

export const products = [
  { id:'tee-black', name:'Unstoppable Tee (Black)', price: 60000, image:'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop', options:['S','M','L','XL'] },
  { id:'cap', name:'Logo Cap', price: 45000, image:'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=800&auto=format&fit=crop', options:['One Size'] },
  { id:'poster', name:'Break the Silence Poster', price: 25000, image:'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=800&auto=format&fit=crop', options:['A2','A3'] }
];

export const donationPresets = [5000, 10000, 20000, 50000, 100000];

export const forums = [
  { id:'f-unstoppable', title:'Unstoppable Stories', description:'Share how this song pushed you forward.' },
  { id:'f-bts', title:'Break the Silence Support', description:'Resources, stories, and encouragement.' }
];
