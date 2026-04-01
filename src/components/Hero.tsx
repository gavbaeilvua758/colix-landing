import Reveal from "./Reveal";

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-grid bg-[length:64px_64px] opacity-40 animate-grid-shift" />
      <div className="absolute inset-0 bg-gradient-to-b from-midnight/40 via-midnight to-midnight" />
      <div className="absolute -top-32 left-1/2 h-96 w-[44rem] -translate-x-1/2 rounded-full bg-electric-600/20 blur-[140px]" />
      <div className="absolute right-10 top-20 hidden h-72 w-72 rounded-full border border-electric-500/20 bg-electric-500/10 blur-2xl lg:block" />

      <div className="section-padding relative">
        <div className="container-max">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Drone delivery UK</p>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-orange-500 sm:text-5xl lg:text-6xl">
              Turn Your Drone Into Income.
            </h1>
            <p className="mt-6 text-lg text-orange-500/80 sm:text-xl">
              Join the first decentralized drone delivery network in the UK. Colix connects
              certified pilots with safe, compliant last-mile delivery missions in their local area.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a href="#apply" className="primary-button">
                Apply as a Pilot
              </a>
              <a href="#about" className="secondary-button">
                Learn how it works
              </a>
            </div>
            <p className="mt-6 text-sm text-orange-500/80">
              Built for safety, compliance, and scalable last-mile delivery. Trusted by pilots who
              want a serious, future-facing network.
            </p>
          </Reveal>

          <Reveal className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="glass-panel p-8 text-center">
              <h2 className="text-xl font-semibold text-orange-500">
                Infrastructure for decentralized drone delivery
              </h2>
              <p className="mt-4 text-sm text-orange-500/80">
                Colix coordinates dispatch, routing, and regulatory readiness so pilots can focus on
                flying safely and earning per mission.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs uppercase tracking-[0.3em] text-orange-500/80">
                <span>Safety-first</span>
                <span>UK compliant</span>
                <span>Smart dispatch</span>
              </div>
            </div>
            <div className="glass-panel relative overflow-hidden p-8 text-center">
              <div className="absolute inset-0">
                <svg
                  className="h-full w-full"
                  viewBox="0 0 400 300"
                  fill="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="line" x1="0" y1="0" x2="400" y2="300">
                      <stop stopColor="#5AA7FF" stopOpacity="0.15" />
                      <stop offset="1" stopColor="#5AA7FF" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M20 260C80 180 120 220 180 170C240 120 260 200 320 140C350 110 380 90 390 50"
                    stroke="url(#line)"
                    strokeWidth="2"
                    className="animate-pulse-line"
                  />
                  <path
                    d="M10 80C60 140 140 60 200 110C260 160 300 80 380 120"
                    stroke="url(#line)"
                    strokeWidth="1.5"
                    className="animate-pulse-line"
                  />
                </svg>
              </div>
              <div className="relative">
                <p className="text-sm text-orange-500/80">Network readiness</p>
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="text-3xl font-semibold text-orange-500">24/7</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-orange-500/80">
                      Dispatch coverage
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-semibold text-orange-500">UK-wide</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-orange-500/80">
                      Expansion roadmap
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
