const capabilities = [
  { label: "Fabric Types", value: "Woven, Knit, Technical" },
  { label: "Order Size", value: "50 – 10,000+ pieces" },
  { label: "Turnaround", value: "Depends on order size" },
  { label: "Equipment", value: "Industrial cutting machines" },
  { label: "Location", value: "Prato, Tuscany" },
  { label: "Years Active", value: "Since 2008" },
];

const Capabilities = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <h2 className="heading-section mb-2">Capabilities</h2>
        <p className="text-text-muted mb-10">Capacità</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {capabilities.map((item, index) => (
            <div key={index} className="space-y-1">
              <p className="text-xs uppercase tracking-wider text-text-muted">
                {item.label}
              </p>
              <p className="font-medium text-foreground">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
