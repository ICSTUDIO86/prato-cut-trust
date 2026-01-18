import { Scissors, Layers, Package } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Fabric Cutting",
    titleIt: "Taglio tessuti",
    description: "Woven and knit fabrics",
  },
  {
    icon: Layers,
    title: "Pattern Laying",
    titleIt: "Piazzamento",
    description: "Manual and CAD layouts",
  },
  {
    icon: Package,
    title: "Small to Large Batches",
    titleIt: "Piccole e grandi quantità",
    description: "From samples to bulk orders",
  },
];

const WhatWeDo = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-narrow">
        <h2 className="heading-section mb-2">What We Do</h2>
        <p className="text-text-muted mb-10">Cosa facciamo</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="space-y-3">
              <service.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              <h3 className="font-semibold text-foreground">{service.title}</h3>
              <p className="text-sm text-text-muted italic">{service.titleIt}</p>
              <p className="text-sm text-text-secondary">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-text-secondary">
            <span className="font-medium">Note:</span> We provide cutting services only. 
            We do not design, manufacture, or sell finished garments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
