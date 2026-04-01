import { useState } from "react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how" },
  { label: "Why Colix", href: "#why" },
  { label: "Apply", href: "#apply" }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-midnight/80 backdrop-blur">
      <div className="container-max flex flex-col items-center gap-4 px-6 py-4 sm:px-10 md:flex-row md:justify-center lg:px-16">
        <a href="#top" className="text-lg font-semibold tracking-wide text-orange-500">
          Colix
        </a>
        <nav className="hidden items-center justify-center gap-8 text-sm text-orange-500/80 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-orange-500"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <a href="#apply" className="primary-button">
            Apply as a Pilot
          </a>
        </div>
        <button
          type="button"
          className="md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
            <span className="h-4 w-5 border-y border-white/70" />
          </span>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden text-center">
          <div className="space-y-4 border-t border-white/5 bg-midnight/95 px-6 py-6">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-sm font-medium text-orange-500/80 transition hover:text-orange-500"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="#apply" className="primary-button w-full" onClick={() => setIsOpen(false)}>
              Apply as a Pilot
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
