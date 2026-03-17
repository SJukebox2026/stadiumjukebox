export default function StadiumJukeboxWebsite() {
  const heroImage = '/hero-stadium.jpg';
  const fanMobileImage = '/fan-mobile.jpg';
  const jumbotronImage = '/jumbotron-mode.jpg';
  const operatorImage = '/operator-dashboard.jpg';
  const flowImage = '/how-it-works-flow.jpg';
  const stadiumModeImage = '/stadium-mode.jpg';

  const features = [
    {
      title: 'Fan Voting in Real Time',
      text: 'Fans scan a QR code, open the web app instantly, and vote on the next song during select game breaks.',
    },
    {
      title: 'Control Room Ready',
      text: 'Built for stadium operators with live dashboards, countdowns, winner locks, sponsor slots, and jumbotron-ready graphics.',
    },
    {
      title: 'New Revenue Inventory',
      text: 'Create sponsored segments, paid song boosts, premium placements, and post-game fan engagement analytics.',
    },
  ];

  const screens = [
    'Vote Now screen with QR code',
    'Live leaderboard and countdown',
    'Winner reveal graphics',
    'Section battles and sponsor takeovers',
  ];

  const steps = [
    'Fans scan a QR code on the big screen.',
    'They vote or boost their song in the mobile web app.',
    'Arena operators approve and push the moment live.',
    'The crowd hears the winning track at the next break.',
  ];

  const useCases = [
    'Timeout music',
    'Inning and intermission breaks',
    'Goal-song voting',
    'Halftime playlists',
    'Section-vs-section battles',
    'Sponsor-branded fan moments',
  ];

  return (
    <div className="min-h-screen bg-[#070b14] text-white selection:bg-red-600 selection:text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-[-10%] h-80 w-80 rounded-full bg-red-600/25 blur-3xl" />
        <div className="absolute top-40 right-[-5%] h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />
      </div>

      <header className="relative border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-red-500 to-red-700 shadow-lg shadow-red-900/30">
              <div className="text-lg font-black tracking-wide">SJ</div>
            </div>
            <div>
              <div className="text-xl font-black uppercase tracking-[0.2em]">Stadium Jukebox</div>
              <div className="text-xs uppercase tracking-[0.35em] text-white/55">The crowd controls the sound</div>
            </div>
          </div>
          <nav className="hidden gap-8 text-sm text-white/70 md:flex">
            <a href="#how-it-works" className="transition hover:text-white">How It Works</a>
            <a href="#features" className="transition hover:text-white">Features</a>
            <a href="#operators" className="transition hover:text-white">For Teams</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main className="relative">
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.18),transparent_55%)]" />
            <div className="absolute left-0 right-0 top-8 mx-auto h-[420px] max-w-7xl rounded-[3rem] border border-white/6 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))] opacity-80" />
            <div className="absolute left-[8%] top-24 h-40 w-64 rounded-[2rem] border border-white/8 bg-white/5 opacity-30 blur-sm" />
            <div className="absolute right-[10%] top-16 h-52 w-80 rounded-[2rem] border border-red-500/10 bg-red-500/5 opacity-40 blur-sm" />
          </div>

          <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
            <div className="flex flex-col justify-center">
              <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                Let fans control the <span className="text-red-500">soundtrack</span> of the game.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
                Stadium Jukebox turns every break in play into a live, sponsor-ready fan moment. Fans scan, vote, boost, and react. Teams get a control-room-ready platform built for the jumbotron.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-2xl bg-red-600 px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-xl shadow-red-950/50 transition hover:bg-red-500"
                >
                  Request a Demo
                </a>
                <a
                  href="#how-it-works"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white/10"
                >
                  See How It Works
                </a>
              </div>
              <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  ['QR', 'No app download'],
                  ['Live', 'Real-time voting'],
                  ['Ops', 'Operator controls'],
                  ['Rev', 'Sponsor revenue'],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                    <div className="text-2xl font-black text-red-500">{k}</div>
                    <div className="mt-2 text-sm text-white/65">{v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-red-600/20 via-transparent to-blue-500/20 blur-2xl" />
              <div className="relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1220]/90 shadow-2xl shadow-black/40 backdrop-blur-xl">
                <div className="relative h-[220px] overflow-hidden border-b border-white/10">
                  <img
                    src={heroImage}
                    alt="Crowd in a stadium looking at the big screen"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] via-[#0b1220]/30 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full bg-red-600/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                    Live Arena Energy
                  </div>
                </div>
                <div className="p-5">
                  <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/60">
                    <span>Live Arena Preview</span>
                    <span className="rounded-full bg-red-600/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-red-200">Voting Open</span>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-[#111827] to-[#090d18] p-5">
                    <div className="rounded-[1.25rem] border border-red-500/25 bg-black/30 p-5 shadow-inner shadow-red-950/20">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="text-sm font-bold uppercase tracking-[0.3em] text-red-300">Stadium Jukebox</div>
                          <div className="mt-2 text-3xl font-black uppercase leading-tight">Vote for the next song</div>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center">
                          <div className="text-xs uppercase tracking-[0.25em] text-white/45">Closes In</div>
                          <div className="mt-1 text-3xl font-black text-red-500">20s</div>
                        </div>
                      </div>

                      <div className="mt-6 grid gap-3">
                        {[
                          ['Mr. Brightside', 'The Killers', '45%'],
                          ['Seven Nation Army', 'The White Stripes', '36%'],
                          ['Lose Yourself', 'Eminem', '19%'],
                        ].map(([song, artist, pct], i) => (
                          <div key={song} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                            <div className="flex items-center justify-between gap-4">
                              <div className="flex items-center gap-4">
                                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-600 text-sm font-black">{i + 1}</div>
                                <div>
                                  <div className="font-bold">{song}</div>
                                  <div className="text-sm text-white/55">{artist}</div>
                                </div>
                              </div>
                              <div className="text-lg font-black text-red-400">{pct}</div>
                            </div>
                            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                              <div
                                className={`h-full rounded-full ${i === 0 ? 'w-[45%] bg-red-500' : i === 1 ? 'w-[36%] bg-blue-500' : 'w-[19%] bg-white/60'}`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                        <div className="text-sm text-white/60">Presented by a game-day sponsor</div>
                        <button className="rounded-xl bg-red-600 px-5 py-3 text-sm font-bold uppercase tracking-[0.18em]">Boost Song</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section id="features" className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-14">
          <div className="mb-8 grid gap-4 md:grid-cols-3">
            {[
              { label: 'Fan Mobile View', accent: 'red', text: 'Scan, vote, boost, react.' },
              { label: 'Jumbotron Mode', accent: 'blue', text: 'Live leaderboard and countdown.' },
              { label: 'Operator Dashboard', accent: 'red', text: 'Approve, lock, and push live.' },
            ].map((card) => (
              <div key={card.label} className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0e1525] p-5">
                <div className={`absolute inset-0 opacity-60 ${card.accent === 'red' ? 'bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.18),transparent_45%)]' : 'bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_45%)]'}`} />
                <div className="relative">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="text-sm font-bold uppercase tracking-[0.24em] text-white/55">{card.label}</div>
                    <div className="h-3 w-3 rounded-full bg-white/50" />
                  </div>
                  <div className="rounded-[1.25rem] border border-white/10 bg-black/20 p-4">
                    <img
                      src={card.label === 'Fan Mobile View' ? fanMobileImage : card.label === 'Jumbotron Mode' ? jumbotronImage : operatorImage}
                      alt={card.label}
                      className="mb-4 h-36 w-full rounded-xl object-cover"
                    />
                    <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-white/40">
                      <span>Preview</span>
                      <span>Live</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 w-2/3 rounded-full bg-white/15" />
                      <div className="h-3 w-full rounded-full bg-white/10" />
                      <div className="h-3 w-4/5 rounded-full bg-white/10" />
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <div className="h-12 rounded-xl bg-red-500/20" />
                      <div className="h-12 rounded-xl bg-white/10" />
                      <div className="h-12 rounded-xl bg-blue-500/20" />
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-white/62">{card.text}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature, idx) => (
              <div key={feature.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-red-600/20 text-sm font-black text-red-200">
                  {idx === 0 ? 'QR' : idx === 1 ? 'OPS' : 'REV'}
                </div>
                <h3 className="text-2xl font-black uppercase leading-tight">{feature.title}</h3>
                <p className="mt-4 text-base leading-7 text-white/68">{feature.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.28em] text-red-300">How It Works</div>
              <h2 className="mt-4 text-4xl font-black uppercase leading-tight sm:text-5xl">Built like a stadium segment, not just an app.</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-white/68">
                Stadium Jukebox is a hosted web platform with fan voting, operator controls, and browser-based display outputs that fit existing game-presentation workflows.
              </p>
              <div className="mt-8 space-y-4">
                {steps.map((step, i) => (
                  <div key={step} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-600 font-black">{i + 1}</div>
                    <div className="pt-1 text-white/80">{step}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0e1525] p-6 md:col-span-2">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.14),transparent_40%)]" />
                <div className="relative">
                  <div className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-red-300">Live Flow Preview</div>
                  <img
                    src={flowImage}
                    alt="Stadium Jukebox flow from QR scan to song playback"
                    className="mb-5 h-52 w-full rounded-[1.25rem] object-cover"
                  />
                  <div className="grid gap-3 md:grid-cols-4">
                    {['Scan QR', 'Vote Live', 'Results', 'Song Plays'].map((item, i) => (
                      <div key={item} className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                        <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-red-600 text-sm font-black">{i + 1}</div>
                        <div className="text-xs font-bold uppercase tracking-[0.12em] text-white/80 leading-tight break-words text-center">{item}</div>
                        <div className="mt-3 h-16 rounded-xl bg-black/20" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-[#0e1525] p-6">
                <div className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-blue-300">Jumbotron Screens</div>
                <div className="space-y-3">
                  {screens.map((screen) => (
                    <div key={screen} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/75">
                      {screen}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-[#0e1525] p-6">
                <div className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-red-300">Operator Workflow</div>
                <div className="space-y-3 text-white/72">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Approve playlist rules per client</div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Lock winners manually or automatically</div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Insert sponsors and branded moments</div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Push full-screen graphics to venue systems</div>
                </div>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-red-600/15 via-white/5 to-blue-500/15 p-6 md:col-span-2">
                <div className="text-sm font-bold uppercase tracking-[0.28em] text-white/70">Integration Approach</div>
                <div className="mt-3 text-2xl font-black uppercase leading-tight">Configurable templates. Per-client setup where needed.</div>
                <p className="mt-4 max-w-3xl text-white/68">
                  The fan web app and dashboard stay standardized. Teams customize branding, sponsor inventory, playlist rules, timing, and screen layouts. Larger clients can add deeper integrations later.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="operators" className="border-y border-white/10 bg-black/20">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="mb-8 overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c1322] p-6">
              <img
                src={stadiumModeImage}
                alt="Jumbotron showing live song voting in a packed stadium"
                className="mb-6 h-64 w-full rounded-[1.5rem] object-cover"
              />
              <div className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-white/55">Stadium Mode Visual</div>
              <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5">
                  <div className="rounded-[1.25rem] border border-white/10 bg-black/30 p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold uppercase tracking-[0.3em] text-red-300">The Fan Jukebox</div>
                        <div className="mt-2 text-2xl font-black uppercase">Vote for the next song</div>
                      </div>
                      <div className="rounded-xl bg-red-600 px-4 py-2 text-sm font-black">18s</div>
                    </div>
                    <div className="mt-5 grid gap-3">
                      {[['Mr. Brightside', '42%'], ['Seven Nation Army', '35%'], ['Lose Yourself', '23%']].map(([song, pct], i) => (
                        <div key={song} className="rounded-xl border border-white/10 bg-white/5 p-4">
                          <div className="mb-2 flex items-center justify-between">
                            <div className="font-bold">{song}</div>
                            <div className="text-sm font-black text-red-300">{pct}</div>
                          </div>
                          <div className="h-2 rounded-full bg-white/10">
                            <div className={`h-2 rounded-full ${i === 0 ? 'w-[42%] bg-red-500' : i === 1 ? 'w-[35%] bg-blue-500' : 'w-[23%] bg-white/60'}`} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <div className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-blue-300">What Teams See</div>
                  <div className="space-y-3 text-white/72">
                    <div className="rounded-xl border border-white/10 bg-black/20 p-4">Live crowd response in one branded moment</div>
                    <div className="rounded-xl border border-white/10 bg-black/20 p-4">A sponsor-ready segment they can actually sell</div>
                    <div className="rounded-xl border border-white/10 bg-black/20 p-4">A clean control-room workflow that fits game ops</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
                <div className="text-sm font-bold uppercase tracking-[0.28em] text-red-300">For Teams & Venues</div>
                <h3 className="mt-4 text-3xl font-black uppercase">A new game-day format teams can actually sell.</h3>
                <ul className="mt-6 space-y-4 text-white/72">
                  <li>New sponsor inventory inside existing breaks in play</li>
                  <li>Low-friction pilot using QR + browser-based screens</li>
                  <li>Analytics on fan taste, engagement, and sponsor interaction</li>
                  <li>Works for basketball, hockey, baseball, football, and live events</li>
                </ul>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
                <div className="text-sm font-bold uppercase tracking-[0.28em] text-blue-300">Use Cases</div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {useCases.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-[#0d1422] p-4 font-semibold text-white/80">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-16 rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#0f172a] to-[#0a0f1c] p-8 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <div className="text-sm font-bold uppercase tracking-[0.28em] text-red-300">Paid Song Boost (Optional)</div>
                <h3 className="mt-4 text-4xl font-black uppercase leading-tight">A configurable monetization layer.</h3>
                <p className="mt-5 max-w-xl text-lg leading-8 text-white/68">
                  Stadium Jukebox can run purely as a fan voting experience — or teams can enable paid song boosting as an optional feature. When activated, fans can spend to boost their song in real time, turning voting into a dynamic, revenue-generating competition.
                </p>
                <ul className="mt-6 space-y-3 text-white/72">
                  <li>Fully optional — enable or disable per game, sponsor, or segment</li>
                  <li>Custom rules: caps, limits, pricing, and moderation controls</li>
                  <li>Layered on top of voting, not required for engagement</li>
                  <li>Ideal for premium sponsor integrations and special moments</li>
                </ul>
              </div>

              <div className="relative">
                <div className="rounded-[2rem] border border-white/10 bg-black/30 p-6">
                  <div className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-white/55">Live Boosting</div>
                  <div className="space-y-4">
                    {[
                      ['Mr. Brightside', '$120', '52%'],
                      ['Seven Nation Army', '$95', '33%'],
                      ['Lose Yourself', '$40', '15%'],
                    ].map(([song, bid, pct], i) => (
                      <div key={song} className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center justify-between">
                          <div className="font-bold">{song}</div>
                          <div className="text-sm font-black text-green-400">{bid}</div>
                        </div>
                        <div className="mt-2 flex items-center justify-between text-xs text-white/60">
                          <span>Live Share</span>
                          <span>{pct}</span>
                        </div>
                        <div className="mt-2 h-2 rounded-full bg-white/10">
                          <div className={`h-2 rounded-full ${i === 0 ? 'w-[52%] bg-red-500' : i === 1 ? 'w-[33%] bg-blue-500' : 'w-[15%] bg-white/60'}`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#101828] to-[#09111f] p-8 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <div className="text-sm font-bold uppercase tracking-[0.28em] text-red-300">Business Model</div>
                <h3 className="mt-4 text-4xl font-black uppercase leading-tight">License it. Sponsor it. Scale it.</h3>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/68">
                  Stadium Jukebox can be sold as an annual software license, paired with sponsor packages, paid song boosts, and premium custom integrations for major venues.
                </p>
              </div>
              <div className="grid gap-4">
                {[
                  ['Annual Venue License', 'Custom pricing'],
                  ['Sponsor Segment Packages', 'High-margin inventory'],
                  ['Paid Fan Boosts', 'Revenue share'],
                  ['Premium Integrations', 'Enterprise tier'],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5">
                    <span className="font-semibold text-white/80">{label}</span>
                    <span className="text-lg font-black text-red-400">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
          <div className="rounded-[2.2rem] border border-red-500/20 bg-gradient-to-r from-red-600/15 via-[#121826] to-blue-600/15 p-8 text-center lg:p-14">
            <div className="mx-auto max-w-3xl">
              <div className="text-sm font-bold uppercase tracking-[0.28em] text-red-200">Request a Demo</div>
              <h2 className="mt-4 text-4xl font-black uppercase leading-tight sm:text-5xl">Bring Stadium Jukebox to your venue.</h2>
              <p className="mt-5 text-lg leading-8 text-white/72">
                Ready to test a pilot, sponsor a segment, or integrate fan voting into your game presentation workflow? Let’s talk.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a href="mailto:hello@stadiumjukebox.com" className="rounded-2xl bg-red-600 px-6 py-4 text-sm font-bold uppercase tracking-[0.18em]">hello@stadiumjukebox.com</a>
                <a href="mailto:hello@stadiumjukebox.com?subject=Request%20Pitch%20Deck" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-bold uppercase tracking-[0.18em]">Request Pitch Deck</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/30">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-xs text-white/50">
              © {new Date().getFullYear()} Stadium Jukebox. All rights reserved.
            </div>
            <div className="flex gap-6 text-xs text-white/60">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
              <a href="#" className="hover:text-white transition">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
