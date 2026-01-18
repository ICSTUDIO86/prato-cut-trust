const examples = [
  { type: "Woven garment", note: "cutting reference" },
  { type: "Knitwear", note: "bulk order cutting" },
  { type: "Small batch", note: "cutting only" },
  { type: "Technical fabric", note: "sample cutting" },
];

const ProductionExamples = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <h2 className="heading-section mb-2">Production Examples</h2>
        <p className="text-text-muted mb-10">Esempi di produzione</p>

        {/* Grid of examples */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {examples.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="aspect-square bg-muted rounded-sm flex items-center justify-center border border-border">
                <p className="text-xs text-text-muted text-center px-2">
                  Reference photo
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
            The following examples are shown for cutting reference only. 
            Design, branding and sales belong to the respective clients. 
            5 STAR does not sell or design garments.
          </p>
          <p className="text-xs text-text-muted leading-relaxed mt-2 italic">
            I seguenti esempi sono mostrati solo come riferimento di lavorazione. 
            Design, marchi e vendita appartengono ai rispettivi clienti. 
            5 STAR non vende né progetta capi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductionExamples;
