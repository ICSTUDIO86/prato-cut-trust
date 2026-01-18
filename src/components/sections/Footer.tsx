const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background/50 py-8 px-6">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>
            © {currentYear} 5 STAR — Prato, Italy
          </p>
          <p>
            Garment cutting service (Conto Terzi)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
