import { MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Workshop = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-section-alt">
      <div className="container-narrow">
        <h2 className="heading-section mb-10">{t('workshop.title')}</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Workshop Image Placeholder */}
          <div className="aspect-[4/3] bg-muted rounded-sm flex items-center justify-center border border-border">
            <div className="text-center text-text-muted p-6">
              <p className="text-sm">{t('workshop.image.alt')}</p>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">{t('workshop.location')}</h3>
              <div className="flex items-start gap-2 text-text-secondary">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <div>
                  <p>Via Val d'Aosta 48</p>
                  <p>59100 Prato (PO), Italy</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">{t('workshop.equipment')}</h3>
              <p className="text-text-secondary text-sm">
                {t('workshop.equipment.desc')}
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">{t('workshop.workspace')}</h3>
              <p className="text-text-secondary text-sm">
                {t('workshop.workspace.desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshop;
