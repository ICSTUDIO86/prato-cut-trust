import { useLanguage } from "@/contexts/LanguageContext";

const HowWeWork = () => {
  const { t } = useLanguage();

  const steps = [
    {
      step: "01",
      title: t('howwework.step1'),
      description: t('howwework.step1.desc'),
    },
    {
      step: "02",
      title: t('howwework.step2'),
      description: t('howwework.step2.desc'),
    },
    {
      step: "03",
      title: t('howwework.step3'),
      description: t('howwework.step3.desc'),
    },
    {
      step: "04",
      title: t('howwework.step4'),
      description: t('howwework.step4.desc'),
    },
  ];

  return (
    <section className="section-padding bg-section-alt">
      <div className="container-narrow">
        <h2 className="heading-section mb-10">{t('howwework.title')}</h2>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="space-y-3">
              <span className="text-2xl font-bold text-primary">{item.step}</span>
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-text-secondary">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
