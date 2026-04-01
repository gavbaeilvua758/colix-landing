import Reveal from "./Reveal";

const benefits = [
  {
    title: "Earn with your drone",
    description: "Monetize flights with consistent demand from local delivery partners."
  },
  {
    title: "Flexible schedule",
    description: "Accept missions that fit your availability and preferred flight times."
  },
  {
    title: "Smart dispatch system",
    description: "Data-led routing and mission matching keep operations efficient."
  },
  {
    title: "Built for UK regulations",
    description: "Operational guardrails and compliance checks built into every mission."
  },
  {
    title: "Be part of the future of delivery",
    description: "Join the first decentralized network designed for scale across the UK."
  }
];

const WhyJoin = () => {
  return (
    <section id="why" className="section-padding">
      <div className="container-max">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Why join Colix</p>
          <h2 className="mt-4 text-3xl font-semibold text-orange-500 sm:text-4xl">
            A high-trust network built for serious pilots.
          </h2>
          <p className="mt-6 text-base text-orange-500/80 sm:text-lg">
            Colix is designed for pilots who want credibility, consistency, and a real place in the
            future of last-mile delivery.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {benefits.map((benefit) => (
            <Reveal key={benefit.title} className="glass-panel p-6 text-center">
              <h3 className="text-lg font-semibold text-orange-500">{benefit.title}</h3>
              <p className="mt-3 text-sm text-orange-500/80">{benefit.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
