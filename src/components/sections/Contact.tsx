import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="section-padding bg-foreground text-background">
      <div className="container-narrow">
        <h2 className="heading-section mb-2">Contact</h2>
        <p className="text-background/60 mb-10">Contatti</p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-wider text-background/50 mb-2">
                Contact Person
              </p>
              <p className="font-medium">Silvia</p>
            </div>

            <div className="space-y-3">
              <a
                href="https://wa.me/393331259599"
                className="flex items-center gap-3 text-background/80 hover:text-background transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>+39 333 125 9599 (WhatsApp)</span>
              </a>
              <a
                href="tel:+390574623692"
                className="flex items-center gap-3 text-background/80 hover:text-background transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+39 0574 623692</span>
              </a>
              <a
                href="mailto:dstar@live.cn"
                className="flex items-center gap-3 text-background/80 hover:text-background transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>dstar@live.cn</span>
              </a>
            </div>

            <div className="flex items-start gap-3 text-background/80">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <div>
                <p>Via Val d'Aosta 48</p>
                <p>59100 Prato (PO), Italy</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col justify-center">
            <p className="text-background/70 mb-6 text-sm">
              For quotes and inquiries, WhatsApp is the fastest way to reach us.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 w-full sm:w-auto"
            >
              <a
                href="https://wa.me/393331259599"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Message on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
