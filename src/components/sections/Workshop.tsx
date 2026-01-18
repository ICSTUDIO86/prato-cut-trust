import { MapPin } from "lucide-react";

const Workshop = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-narrow">
        <h2 className="heading-section mb-2">Workshop & Equipment</h2>
        <p className="text-text-muted mb-10">Laboratorio e attrezzature</p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Workshop Image Placeholder */}
          <div className="aspect-[4/3] bg-muted rounded-sm flex items-center justify-center border border-border">
            <div className="text-center text-text-muted p-6">
              <p className="text-sm">Workshop interior</p>
              <p className="text-xs mt-1">Photo to be added</p>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Location</h3>
              <div className="flex items-start gap-2 text-text-secondary">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <div>
                  <p>Via Val d'Aosta 48</p>
                  <p>59100 Prato (PO), Italy</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Equipment</h3>
              <ul className="space-y-1 text-text-secondary text-sm">
                <li>• Industrial straight knife cutting machines</li>
                <li>• Spreading tables (6m length)</li>
                <li>• Manual and CAD pattern laying</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Workspace</h3>
              <p className="text-text-secondary text-sm">
                Located in the Macrolotto industrial area of Prato, 
                the main hub for textile production in Italy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshop;
