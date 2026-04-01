import Reveal from "./Reveal";

const pillars = [
  {
    title: "Safety-first operations",
    description: "Operational playbooks, pre-flight checks, and safety monitoring built into every mission."
  },
  {
    title: "Compliance with UK drone regulations",
    description: "Aligned with CAA requirements, registration rules, and local flight permissions."
  },
  {
    title: "Smart dispatch technology",
    description: "Real-time mission matching, route planning, and pilot availability intelligence."
  },
  {
    title: "Sustainable last-mile delivery",
    description: "Lower emissions and less congestion through efficient, electric drone logistics."
  }
];

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">What is Colix?</p>
          <h2 className="mt-4 text-3xl font-semibold text-orange-500 sm:text-4xl">
            Decentralized infrastructure for UK drone delivery.
          </h2>
          <p className="mt-6 text-base text-orange-500/80 sm:text-lg">
            Colix is building a decentralized drone delivery infrastructure. We empower certified
            drone pilots to earn money by delivering lightweight items in their local area — safely
            and legally.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {pillars.map((pillar) => (
            <Reveal key={pillar.title} className="glass-panel p-6 text-center">
              <h3 className="text-lg font-semibold text-orange-500">{pillar.title}</h3>
              <p className="mt-3 text-sm text-orange-500/80">{pillar.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
