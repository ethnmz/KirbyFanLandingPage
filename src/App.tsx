import { useState } from 'react'

const KirbySVG = ({ size = 200, color = '#FF6BA8', blushColor = '#FF8EC0', eyeColor = '#1A0A2E' }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Body */}
    <ellipse cx="100" cy="115" rx="78" ry="70" fill={color} />
    {/* Head */}
    <circle cx="100" cy="90" r="72" fill={color} />
    {/* Mouth */}
    <ellipse cx="100" cy="108" rx="16" ry="10" fill={eyeColor} />
    <ellipse cx="100" cy="105" rx="13" ry="7" fill="#FF4D94" />
    {/* Left eye */}
    <ellipse cx="74" cy="78" rx="14" ry="16" fill={eyeColor} />
    <ellipse cx="74" cy="78" rx="9" ry="11" fill="#1A6BFF" />
    <circle cx="74" cy="78" r="5" fill={eyeColor} />
    <circle cx="77" cy="74" r="3" fill="white" />
    {/* Right eye */}
    <ellipse cx="126" cy="78" rx="14" ry="16" fill={eyeColor} />
    <ellipse cx="126" cy="78" rx="9" ry="11" fill="#1A6BFF" />
    <circle cx="126" cy="78" r="5" fill={eyeColor} />
    <circle cx="129" cy="74" r="3" fill="white" />
    {/* Left blush */}
    <ellipse cx="52" cy="96" rx="15" ry="10" fill={blushColor} opacity="0.6" />
    {/* Right blush */}
    <ellipse cx="148" cy="96" rx="15" ry="10" fill={blushColor} opacity="0.6" />
    {/* Left foot */}
    <ellipse cx="68" cy="178" rx="26" ry="14" fill={color} />
    <ellipse cx="68" cy="178" rx="20" ry="10" fill="#E5527A" />
    {/* Right foot */}
    <ellipse cx="132" cy="178" rx="26" ry="14" fill={color} />
    <ellipse cx="132" cy="178" rx="20" ry="10" fill="#E5527A" />
    {/* Left arm */}
    <ellipse cx="30" cy="118" rx="22" ry="15" fill={color} transform="rotate(-30 30 118)" />
    {/* Right arm */}
    <ellipse cx="170" cy="118" rx="22" ry="15" fill={color} transform="rotate(30 170 118)" />
  </svg>
)

const StarSVG = ({ size = 40, color = '#FFE566' }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 2L24.5 15.5H38.5L27.5 23.5L31.5 37L20 29L8.5 37L12.5 23.5L1.5 15.5H15.5L20 2Z" fill={color} />
  </svg>
)

const abilities = [
  { name: 'Fire', emoji: '🔥', color: 'from-orange-400 to-red-500', desc: 'Breathe scorching flames and scorch enemies to ashes!' },
  { name: 'Ice', emoji: '❄️', color: 'from-sky-300 to-blue-400', desc: 'Freeze foes solid with icy breath and slide attacks.' },
  { name: 'Sword', emoji: '⚔️', color: 'from-gray-300 to-slate-500', desc: 'Slash with a powerful blade and noble warrior grace.' },
  { name: 'Beam', emoji: '⚡', color: 'from-yellow-300 to-amber-500', desc: 'Fire energy beams and chain them into combos.' },
  { name: 'Hammer', emoji: '🔨', color: 'from-amber-600 to-orange-700', desc: 'Smash foes with a massive hammer for huge damage.' },
  { name: 'Wing', emoji: '🪶', color: 'from-teal-300 to-cyan-500', desc: 'Soar through the skies and unleash feather storms.' },
  { name: 'Stone', emoji: '🪨', color: 'from-gray-400 to-stone-600', desc: 'Transform into an immovable stone to crush enemies.' },
  { name: 'Artist', emoji: '🎨', color: 'from-pink-400 to-rose-500', desc: 'Bring painted creations to life as powerful allies.' },
]

const games = [
  {
    title: "Kirby's Dream Land",
    year: '1992',
    platform: 'Game Boy',
    tagline: 'Where it all began — a pink puffball saves Dream Land.',
    color: 'bg-emerald-100',
    badge: 'bg-emerald-500',
  },
  {
    title: 'Kirby Super Star',
    year: '1996',
    platform: 'SNES',
    tagline: 'Eight epic adventures and the birth of Helper system.',
    color: 'bg-yellow-100',
    badge: 'bg-yellow-500',
  },
  {
    title: 'Kirby 64: The Crystal Shards',
    year: '2000',
    platform: 'N64',
    tagline: 'Combine powers to create explosive new abilities.',
    color: 'bg-blue-100',
    badge: 'bg-blue-500',
  },
  {
    title: 'Kirby: Canvas Curse',
    year: '2005',
    platform: 'DS',
    tagline: 'Draw rainbow paths to guide Kirby to victory.',
    color: 'bg-rose-100',
    badge: 'bg-rose-500',
  },
  {
    title: "Kirby's Epic Yarn",
    year: '2010',
    platform: 'Wii',
    tagline: 'A textile world woven with charm and creativity.',
    color: 'bg-purple-100',
    badge: 'bg-purple-500',
  },
  {
    title: 'Kirby and the Forgotten Land',
    year: '2022',
    platform: 'Switch',
    tagline: 'Kirby goes 3D and can inhale cars. Enough said.',
    color: 'bg-sky-100',
    badge: 'bg-sky-500',
  },
]

const facts = [
  { icon: '🎂', label: 'Year Created', value: '1992' },
  { icon: '🎮', label: 'Games Released', value: '40+' },
  { icon: '⭐', label: 'Copy Abilities', value: '100+' },
  { icon: '🌍', label: 'Copies Sold', value: '50M+' },
]

export default function App() {
  const [activeAbility, setActiveAbility] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-[#FFF5FA] overflow-x-hidden">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 backdrop-blur-md bg-white/70 border-b border-pink-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#FF6BA8] flex items-center justify-center text-white text-sm font-bold animate-bounce-soft">K</div>
          <span className="font-display text-xl text-[#7B5EA7]">KirbyFan</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#7B5EA7]">
          <a href="#about" className="hover:text-[#FF6BA8] transition-colors">About</a>
          <a href="#abilities" className="hover:text-[#FF6BA8] transition-colors">Abilities</a>
          <a href="#games" className="hover:text-[#FF6BA8] transition-colors">Games</a>
          <a href="#fan" className="hover:text-[#FF6BA8] transition-colors">Fan Zone</a>
        </div>
        <a href="#fan" className="bg-[#FF6BA8] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-[#e55a96] transition-colors shadow-md">
          Join Fans ⭐
        </a>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 overflow-hidden star-bg">
        {/* Floating decorative stars */}
        <div className="absolute top-24 left-16 animate-float-star" style={{ animationDelay: '0s' }}>
          <StarSVG size={36} color="#FFE566" />
        </div>
        <div className="absolute top-40 right-20 animate-float-star" style={{ animationDelay: '1.2s' }}>
          <StarSVG size={24} color="#C4A8FF" />
        </div>
        <div className="absolute bottom-32 left-24 animate-float-star" style={{ animationDelay: '0.7s' }}>
          <StarSVG size={20} color="#FFB3D1" />
        </div>
        <div className="absolute top-60 left-1/4 animate-float-star" style={{ animationDelay: '2s' }}>
          <StarSVG size={16} color="#FFE566" />
        </div>
        <div className="absolute bottom-48 right-32 animate-float-star" style={{ animationDelay: '1.5s' }}>
          <StarSVG size={28} color="#FF6BA8" />
        </div>
        <div className="absolute top-32 right-1/3 animate-float-star" style={{ animationDelay: '0.3s' }}>
          <StarSVG size={18} color="#C4A8FF" />
        </div>

        {/* Background circles */}
        <div className="absolute top-1/4 -left-24 w-72 h-72 rounded-full bg-[#FFB3D1] opacity-20 blur-3xl" />
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 rounded-full bg-[#C4A8FF] opacity-20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#FF6BA8] opacity-5 blur-3xl" />

        <div className="relative z-10 flex flex-col items-center text-center gap-8">
          <div className="inline-flex items-center gap-2 bg-white/80 text-[#7B5EA7] rounded-full px-4 py-2 text-sm font-bold shadow-sm border border-pink-100">
            <span className="animate-spin-slow inline-block">⭐</span>
            Welcome to Dream Land!
          </div>

          <div className="animate-float">
            <KirbySVG size={220} />
          </div>

          <div>
            <h1 className="font-display text-6xl md:text-8xl text-[#2D1B4E] leading-none mb-4">
              Hi, I'm <span className="text-[#FF6BA8]">Kirby!</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#7B5EA7] font-semibold max-w-xl mx-auto">
              The puffball hero of Dream Land — inhaling enemies and stealing their powers since 1992.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#about" className="animate-pulse-glow bg-[#FF6BA8] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e55a96] transition-all shadow-xl">
              Explore Dream Land ✨
            </a>
            <a href="#abilities" className="bg-white text-[#7B5EA7] border-2 border-[#C4A8FF] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#F3EEFF] transition-all">
              See Copy Abilities
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#FF6BA8] py-10 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {facts.map(f => (
            <div key={f.label} className="text-center">
              <div className="text-3xl mb-1">{f.icon}</div>
              <div className="font-display text-3xl text-white">{f.value}</div>
              <div className="text-pink-100 text-sm font-semibold">{f.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-[#FFE566] text-[#2D1B4E] px-4 py-1 rounded-full text-sm font-bold mb-6">
              The Legend of Dream Land
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-[#2D1B4E] leading-tight mb-6">
              A hero born to{' '}
              <span className="text-[#FF6BA8]">inhale</span>{' '}
              anything.
            </h2>
            <p className="text-[#5A3D7A] text-lg leading-relaxed mb-6">
              Kirby is a small, pink, spherical creature who lives in Dream Land on the planet Popstar. Created by Masahiro Sakurai in 1992, this lovable puffball has one extraordinary power: he can inhale almost any enemy and copy their abilities.
            </p>
            <p className="text-[#5A3D7A] text-lg leading-relaxed mb-8">
              Deceptively powerful beneath his adorable exterior, Kirby has defeated gods, cosmic horrors, and ancient evils — all while maintaining his cheerful, carefree spirit. He is one of Nintendo's most beloved characters for a reason.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Dream Land', 'Popstar Planet', 'Copy Abilities', 'Nintendo Icon'].map(tag => (
                <span key={tag} className="bg-[#F3EEFF] text-[#7B5EA7] px-4 py-2 rounded-full text-sm font-bold border border-[#C4A8FF]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-[#FFB3D1] to-[#C4A8FF] opacity-40 blur-2xl" />
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-pink-100">
              <div className="space-y-5">
                {[
                  { label: 'Home', value: 'Dream Land, Planet Popstar' },
                  { label: 'Creator', value: 'Masahiro Sakurai' },
                  { label: 'Debut', value: "Kirby's Dream Land (1992)" },
                  { label: 'Best Friend', value: 'Waddle Dee' },
                  { label: 'Rival', value: 'Meta Knight' },
                  { label: 'Nemesis', value: 'King Dedede (sort of)' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-center gap-4 pb-4 border-b border-pink-50 last:border-0 last:pb-0">
                    <span className="text-[#C4A8FF] font-bold text-sm">{label}</span>
                    <span className="text-[#2D1B4E] font-semibold text-sm text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copy Abilities */}
      <section id="abilities" className="py-24 px-6 bg-gradient-to-br from-[#F3EEFF] to-[#FFF0F8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#C4A8FF] text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
              Over 100 unique powers
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-[#2D1B4E] mb-4">
              Copy Abilities
            </h2>
            <p className="text-[#7B5EA7] text-lg max-w-xl mx-auto">
              Inhale an enemy, gain their power. Kirby's ability to copy skills makes every level a new adventure. Click to explore each power.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {abilities.map((ability, i) => (
              <button
                key={ability.name}
                onClick={() => setActiveAbility(activeAbility === i ? null : i)}
                className={`relative rounded-2xl p-6 text-left transition-all duration-300 cursor-pointer
                  ${activeAbility === i
                    ? `bg-gradient-to-br ${ability.color} text-white shadow-xl scale-105`
                    : 'bg-white text-[#2D1B4E] hover:shadow-lg hover:scale-102 border border-pink-100'
                  }`}
              >
                <div className="text-4xl mb-3">{ability.emoji}</div>
                <div className={`font-display text-xl mb-2 ${activeAbility === i ? 'text-white' : 'text-[#2D1B4E]'}`}>
                  {ability.name}
                </div>
                {activeAbility === i && (
                  <p className="text-sm text-white/90 leading-relaxed">{ability.desc}</p>
                )}
                {activeAbility !== i && (
                  <p className="text-xs text-[#C4A8FF] font-semibold">Tap to learn more →</p>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Games */}
      <section id="games" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#FFE566] text-[#2D1B4E] px-4 py-1 rounded-full text-sm font-bold mb-4">
            Three decades of adventures
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-[#2D1B4E] mb-4">
            Iconic Games
          </h2>
          <p className="text-[#7B5EA7] text-lg max-w-xl mx-auto">
            From the Game Boy to the Switch — a journey through Dream Land's greatest adventures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map(game => (
            <div key={game.title} className={`${game.color} rounded-3xl p-7 hover:scale-[1.02] transition-transform duration-200 cursor-default`}>
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <span className={`${game.badge} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                    {game.platform}
                  </span>
                </div>
                <span className="text-[#2D1B4E] font-display text-2xl">{game.year}</span>
              </div>
              <h3 className="font-display text-2xl text-[#2D1B4E] mb-2">{game.title}</h3>
              <p className="text-[#5A3D7A] font-medium leading-relaxed">{game.tagline}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Waddle Dee Feature */}
      <section className="py-20 px-6 bg-[#FF6BA8] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white opacity-5 -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white opacity-5 translate-y-1/2 -translate-x-1/4" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-bold mb-6">
                Did you know?
              </div>
              <h2 className="font-display text-5xl text-white mb-6">
                Kirby is canonically one of the most powerful beings in his universe.
              </h2>
              <p className="text-pink-100 text-lg leading-relaxed">
                Despite his cute appearance, Kirby has defeated galaxy-destroying entities, ancient gods, and literal embodiments of darkness. When he smiles, the universe is safe.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🌌', title: 'Destroyed a galaxy', sub: '...accidentally, in Kirby Super Star' },
                { icon: '👁️', title: 'Defeated Zero', sub: 'An eye that bleeds darkness' },
                { icon: '💫', title: 'Defeated Void', sub: 'The source of all emotion' },
                { icon: '⭐', title: 'Star Warrior', sub: 'A 200-year-old fighter in disguise' },
              ].map(({ icon, title, sub }) => (
                <div key={title} className="bg-white/15 rounded-2xl p-5 backdrop-blur-sm">
                  <div className="text-3xl mb-2">{icon}</div>
                  <div className="text-white font-bold text-sm mb-1">{title}</div>
                  <div className="text-pink-200 text-xs">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fan Zone */}
      <section id="fan" className="py-24 px-6 max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <div className="inline-block bg-[#FFE566] text-[#2D1B4E] px-4 py-1 rounded-full text-sm font-bold mb-4">
            Fan Zone
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-[#2D1B4E] mb-6">
            Join the Dream Land{' '}
            <span className="text-[#FF6BA8]">community</span>
          </h2>
          <p className="text-[#7B5EA7] text-xl max-w-xl mx-auto">
            Thousands of fans worldwide celebrate the pink puffball. Share your art, your memories, and your love for Kirby.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { emoji: '🎨', title: 'Fan Art Gallery', desc: 'Share your Kirby drawings, sculptures, and digital art with the community.' },
            { emoji: '📰', title: 'Latest News', desc: 'Stay updated on new game announcements, merchandise, and events.' },
            { emoji: '🏆', title: 'Speed Runs', desc: 'Compete for the fastest Dream Land clears and challenge top runners.' },
          ].map(card => (
            <div key={card.title} className="bg-white rounded-3xl p-8 shadow-md border border-pink-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
              <div className="text-5xl mb-5">{card.emoji}</div>
              <h3 className="font-display text-xl text-[#2D1B4E] mb-3">{card.title}</h3>
              <p className="text-[#7B5EA7] text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#F3EEFF] to-[#FFF0F8] rounded-3xl p-10 border border-[#C4A8FF]/30">
          <div className="text-5xl mb-4 animate-bounce-soft inline-block">💌</div>
          <h3 className="font-display text-3xl text-[#2D1B4E] mb-3">Get the Dream Land Dispatch</h3>
          <p className="text-[#7B5EA7] mb-6">Monthly fan newsletter with art, lore deep-dives, and community spotlights.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 rounded-full px-6 py-3 border-2 border-[#C4A8FF] focus:outline-none focus:border-[#FF6BA8] text-[#2D1B4E] font-semibold bg-white"
            />
            <button className="bg-[#FF6BA8] text-white px-7 py-3 rounded-full font-bold hover:bg-[#e55a96] transition-colors shadow-lg whitespace-nowrap">
              Sign Up ⭐
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D1B4E] text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10">
                <KirbySVG size={40} />
              </div>
              <div>
                <div className="font-display text-2xl text-[#FF6BA8]">KirbyFan</div>
                <div className="text-purple-300 text-xs">An unofficial fan tribute</div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-purple-300">
              <a href="#about" className="hover:text-[#FF6BA8] transition-colors">About</a>
              <a href="#abilities" className="hover:text-[#FF6BA8] transition-colors">Abilities</a>
              <a href="#games" className="hover:text-[#FF6BA8] transition-colors">Games</a>
              <a href="#fan" className="hover:text-[#FF6BA8] transition-colors">Fan Zone</a>
            </div>
          </div>
          <div className="border-t border-purple-800 pt-8 text-center">
            <p className="text-purple-400 text-sm">
              Kirby™ and all related characters are property of Nintendo & HAL Laboratory. This is an unofficial fan tribute made with 💗.
            </p>
            <div className="mt-3 flex justify-center gap-2">
              {['⭐', '💗', '⭐', '💗', '⭐'].map((s, i) => (
                <span key={i} className="text-lg animate-float-star" style={{ animationDelay: `${i * 0.3}s` }}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
