const steps = [
  {
    step: "01",
    title: "Contact",
    titleIt: "Contatto",
    description: "Send fabric details, quantity, and timeline via WhatsApp or phone.",
  },
  {
    step: "02",
    title: "Quote",
    titleIt: "Preventivo",
    description: "We provide pricing based on fabric type, layers, and order size.",
  },
  {
    step: "03",
    title: "Delivery",
    titleIt: "Consegna",
    description: "Bring fabric and patterns to our workshop. We cut and prepare.",
  },
  {
    step: "04",
    title: "Pickup",
    titleIt: "Ritiro",
    description: "Collect cut pieces. Ready for your next production step.",
  },
];

const HowWeWork = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-narrow">
        <h2 className="heading-section mb-2">How We Work</h2>
        <p className="text-text-muted mb-10">Come lavoriamo</p>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="space-y-3">
              <span className="text-2xl font-bold text-primary">{item.step}</span>
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="text-xs text-text-muted italic">{item.titleIt}</p>
              <p className="text-sm text-text-secondary">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
