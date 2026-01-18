import { Scissors, Layers, Package } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhatWeDo = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Scissors,
      title: t('whatwedo.cutting'),
      description: t('whatwedo.cutting.desc'),
    },
    {
      icon: Layers,
      title: t('whatwedo.laying'),
      description: t('whatwedo.laying.desc'),
    },
    {
      icon: Package,
      title: t('whatwedo.batches'),
      description: t('whatwedo.batches.desc'),
    },
  ];

  return (
    <section className="section-padding bg-section-alt">
      <div className="container-narrow">
        <h2 className="heading-section mb-10">{t('whatwedo.title')}</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="space-y-3">
              <service.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              <h3 className="font-semibold text-foreground">{service.title}</h3>
              <p className="text-sm text-text-secondary">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-text-secondary">
            <span className="font-medium">{t('whatwedo.note')}</span> {t('whatwedo.disclaimer')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
