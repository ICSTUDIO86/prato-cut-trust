import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        {/* Logo / Brand */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-primary">5</span> STAR
          </h1>
          <div className="divider-accent mt-4" />
        </div>

        {/* Core Message */}
        <div className="space-y-6 mb-12">
          <p className="heading-section text-foreground">
            Garment Cutting Service
          </p>
          <p className="text-body text-text-secondary max-w-xl">
            Taglio tessuti per conto terzi. <br />
            Fabric cutting for third parties.
          </p>
          <p className="text-sm text-text-muted">
            Prato, Italy — Operating since 2008
          </p>
        </div>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
          >
            <a
              href="https://wa.me/393331259599"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="gap-2 border-foreground/20 hover:bg-foreground/5"
          >
            <a href="tel:+390574623692">
              <Phone className="w-5 h-5" />
              +39 0574 623692
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
