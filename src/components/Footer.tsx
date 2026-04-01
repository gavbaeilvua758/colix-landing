const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-midnight">
      <div className="container-max flex flex-col items-center gap-4 px-6 py-10 text-center text-sm text-orange-500/80 sm:px-10 lg:px-16">
        <div className="space-y-2">
          <p className="text-base font-semibold text-orange-500">Colix</p>
          <p>contact@colix.uk</p>
          <p>Built in the UK</p>
        </div>
        <p className="max-w-md text-xs text-orange-500/80">
          Colix is a technology platform. Delivery operations are subject to UK drone regulations.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
