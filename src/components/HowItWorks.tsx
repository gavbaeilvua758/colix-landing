import Reveal from "./Reveal";

const steps = [
  {
    title: "Apply",
    description: "Submit your pilot details and drone information."
  },
  {
    title: "Get Approved",
    description: "We verify experience and safety standards."
  },
  {
    title: "Start Delivering",
    description: "Receive delivery requests and earn per mission."
  }
];

const HowItWorks = () => {
  return (
    <section id="how" className="section-padding bg-graphite">
      <div className="container-max">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-4 text-3xl font-semibold text-orange-500 sm:text-4xl">
            A premium onboarding flow for professional drone pilots.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal key={step.title} className="glass-panel p-8 text-center">
              <div className="text-sm text-orange-500">0{index + 1}</div>
              <h3 className="text-xl font-semibold text-orange-500">{step.title}</h3>
              <p className="mt-4 text-sm text-orange-500/80">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
