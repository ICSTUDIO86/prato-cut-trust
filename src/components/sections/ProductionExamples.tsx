import { useLanguage } from "@/contexts/LanguageContext";

const ProductionExamples = () => {
  const { t } = useLanguage();

  const examples = [
    { type: t('examples.woven'), note: t('examples.woven.desc') },
    { type: t('examples.knitwear'), note: t('examples.knitwear.desc') },
    { type: t('examples.smallbatch'), note: t('examples.smallbatch.desc') },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <h2 className="heading-section mb-2">{t('examples.title')}</h2>
        <p className="text-text-muted mb-10">{t('examples.subtitle')}</p>

        {/* Grid of examples */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {examples.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="aspect-square bg-muted rounded-sm flex items-center justify-center border border-border">
                <p className="text-xs text-text-muted text-center px-2">
                  Photo
                </p>
              </div>
              <div>
                <p className="text-sm font-medium">{item.type}</p>
                <p className="text-xs text-text-muted">{item.note}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="border-t border-border pt-6">
          <p className="text-xs text-text-muted leading-relaxed">
            {t('examples.disclaimer')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductionExamples;
