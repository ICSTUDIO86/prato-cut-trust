import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the minimum order quantity?",
    questionIt: "Qual è la quantità minima?",
    answer: "We accept orders starting from 50 pieces. For smaller quantities, contact us to discuss.",
  },
  {
    question: "Do you provide fabric or patterns?",
    questionIt: "Fornite tessuto o cartamodelli?",
    answer: "No. Clients bring their own fabric and patterns. We provide cutting service only.",
  },
  {
    question: "How long does cutting take?",
    questionIt: "Quanto tempo richiede il taglio?",
    answer: "Depends on order size and fabric type. Standard orders: 2-5 working days. We can discuss urgent requests.",
  },
  {
    question: "What fabrics can you cut?",
    questionIt: "Quali tessuti potete tagliare?",
    answer: "Most woven and knit fabrics. Technical fabrics and special materials on request.",
  },
  {
    question: "Can I visit the workshop?",
    questionIt: "Posso visitare il laboratorio?",
    answer: "Yes. Call ahead to arrange a time. We're located in Prato's Macrolotto area.",
  },
];

const FAQ = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <h2 className="heading-section mb-2">FAQ</h2>
        <p className="text-text-muted mb-10">Domande frequenti</p>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="text-left hover:no-underline py-4">
                <div>
                  <span className="font-medium text-foreground">{faq.question}</span>
                  <span className="block text-xs text-text-muted italic mt-1">
                    {faq.questionIt}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-text-secondary pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
