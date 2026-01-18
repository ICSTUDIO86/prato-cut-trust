import { useLanguage } from "@/contexts/LanguageContext";

const Capabilities = () => {
  const { t } = useLanguage();

  const capabilities = [
    { label: t('capabilities.fabrics'), value: t('capabilities.fabrics.desc') },
    { label: t('capabilities.orders'), value: t('capabilities.orders.desc') },
    { label: t('capabilities.turnaround'), value: t('capabilities.turnaround.desc') },
    { label: t('capabilities.years'), value: t('capabilities.years.desc') },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <h2 className="heading-section mb-10">{t('capabilities.title')}</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
