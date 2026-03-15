export default function StadiumJukeboxWebsite() {
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
    'Fans scan the QR code on the big screen.',
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
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-200">
              <span className="h-2 w-2 rounded-full bg-red-400" />
              Interactive fan engagement for live sports venues
            </div>
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
            <div className="relative w-full max-w-xl rounded-[2rem] border border-white/10 bg-[#0b1220]/90 p-5 shadow-2xl shadow-black/40 backdrop-blur-xl">
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
        </section>

        <section id="features" className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-14">
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <div className="mb-4 h-12 w-12 rounded-2xl bg-red-600/20" />
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
              <div className="md:col-span-2 rounded-[2rem] border border-white/10 bg-gradient-to-r from-red-600/15 via-white/5 to-blue-500/15 p-6">
                <div className="text-sm font-bold uppercase tracking-[0.28em] text-white/70">Integration Approach</div>
                <div className="mt-3 text-2xl font-black uppercase leading-tight">Standard product. Configurable templates. Per-client setup only where needed.</div>
                <p className="mt-4 max-w-3xl text-white/68">
                  The fan web app and dashboard stay standardized. Teams customize branding, sponsor inventory, playlist rules, timing, and screen layouts. Larger clients can add deeper integrations later.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="operators" className="border-y border-white/10 bg-black/20">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
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
    </div>
  );
}
