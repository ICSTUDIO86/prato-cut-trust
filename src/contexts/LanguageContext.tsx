import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'it' | 'en' | 'zh' | 'es' | 'fr' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  it: {
    // Hero
    'hero.tagline': 'Servizio di Taglio Tessuti',
    'hero.subtitle': 'Taglio tessuti per conto terzi.',
    'hero.location': 'Prato, Italia — Attivi dal 2008',
    
    // What We Do
    'whatwedo.title': 'Cosa Facciamo',
    'whatwedo.cutting': 'Taglio Tessuti',
    'whatwedo.cutting.desc': 'Tessuti ortogonali e a maglia',
    'whatwedo.laying': 'Piazzamento',
    'whatwedo.laying.desc': 'Layout manuali e CAD',
    'whatwedo.batches': 'Piccole e Grandi Quantità',
    'whatwedo.batches.desc': 'Da campioni a ordini in serie',
    'whatwedo.note': 'Nota:',
    'whatwedo.disclaimer': 'Forniamo solo servizi di taglio. Non progettiamo, produciamo o vendiamo capi finiti.',
    
    // Capabilities
    'capabilities.title': 'Le Nostre Capacità',
    'capabilities.fabrics': 'Tipi di Tessuto',
    'capabilities.fabrics.desc': 'Ortogonali, maglieria, tecnici',
    'capabilities.orders': 'Dimensione Ordini',
    'capabilities.orders.desc': 'Da 10 a 10.000+ pezzi',
    'capabilities.turnaround': 'Tempi di Consegna',
    'capabilities.turnaround.desc': 'Preventivo entro 24 ore',
    'capabilities.years': 'Anni di Attività',
    'capabilities.years.desc': 'Attivi dal 2008',
    
    // Workshop
    'workshop.title': 'Laboratorio e Attrezzature',
    'workshop.location': 'Posizione',
    'workshop.location.desc': 'Via Val d\'Aosta 48, Prato 59100',
    'workshop.equipment': 'Attrezzature',
    'workshop.equipment.desc': 'Macchine da taglio industriali, tavoli stendi-tessuto',
    'workshop.workspace': 'Spazio di Lavoro',
    'workshop.workspace.desc': 'Laboratorio dedicato per lavorazioni piccole e grandi',
    'workshop.image.alt': 'Interno del laboratorio',
    
    // Production Examples
    'examples.title': 'Esempi di Produzione',
    'examples.subtitle': 'Stili di riferimento (solo taglio)',
    'examples.woven': 'Tessuto ortogonale',
    'examples.woven.desc': 'riferimento taglio',
    'examples.knitwear': 'Maglieria',
    'examples.knitwear.desc': 'taglio ordini grandi',
    'examples.smallbatch': 'Piccolo lotto',
    'examples.smallbatch.desc': 'solo taglio',
    'examples.disclaimer': 'I seguenti esempi sono mostrati solo come riferimento di lavorazione. Design, marchi e vendita appartengono ai rispettivi clienti. 5 STAR non vende né progetta capi.',
    
    // How We Work
    'howwework.title': 'Come Lavoriamo',
    'howwework.step1': 'Contatto',
    'howwework.step1.desc': 'Invia dettagli tessuto, quantità e tempistiche via WhatsApp o telefono.',
    'howwework.step2': 'Preventivo',
    'howwework.step2.desc': 'Forniamo prezzi in base a tipo di tessuto, strati e dimensione ordine.',
    'howwework.step3': 'Consegna',
    'howwework.step3.desc': 'Porta tessuto e cartamodelli al laboratorio. Tagliamo e prepariamo.',
    'howwework.step4': 'Ritiro',
    'howwework.step4.desc': 'Ritira i pezzi tagliati. Pronti per la fase successiva.',
    
    // FAQ
    'faq.title': 'Domande Frequenti',
    'faq.q1': 'Fate solo taglio o anche cucito?',
    'faq.a1': 'Solo taglio. Non cuciamo, non produciamo capi finiti.',
    'faq.q2': 'Qual è la quantità minima?',
    'faq.a2': 'Nessun minimo rigido. Lavoriamo sia campioni che grandi ordini.',
    'faq.q3': 'Devo portare tessuto e cartamodelli?',
    'faq.a3': 'Sì. Lavoriamo con materiali forniti dal cliente.',
    'faq.q4': 'Quanto tempo ci vuole?',
    'faq.a4': 'Dipende dalla quantità. I campioni sono di solito pronti in 1-2 giorni. Ordini grandi richiedono più tempo.',
    'faq.q5': 'Posso visitare il laboratorio?',
    'faq.a5': 'Sì. Contattaci per fissare un appuntamento.',
    
    // Contact
    'contact.title': 'Contatti',
    'contact.person': 'Persona di Contatto',
    'contact.preferred': 'Metodo Preferito',
    'contact.phone': 'Telefono',
    'contact.email': 'Email',
    'contact.address': 'Indirizzo',
    
    // Footer
    'footer.rights': 'Tutti i diritti riservati.',
    'footer.service': 'Servizio di taglio tessuti a Prato, Italia.',
  },
  en: {
    // Hero
    'hero.tagline': 'Garment Cutting Service',
    'hero.subtitle': 'Fabric cutting for third parties.',
    'hero.location': 'Prato, Italy — Operating since 2008',
    
    // What We Do
    'whatwedo.title': 'What We Do',
    'whatwedo.cutting': 'Fabric Cutting',
    'whatwedo.cutting.desc': 'Woven and knit fabrics',
    'whatwedo.laying': 'Pattern Laying',
    'whatwedo.laying.desc': 'Manual and CAD layouts',
    'whatwedo.batches': 'Small to Large Batches',
    'whatwedo.batches.desc': 'From samples to bulk orders',
    'whatwedo.note': 'Note:',
    'whatwedo.disclaimer': 'We provide cutting services only. We do not design, manufacture, or sell finished garments.',
    
    // Capabilities
    'capabilities.title': 'Our Capabilities',
    'capabilities.fabrics': 'Fabric Types',
    'capabilities.fabrics.desc': 'Woven, knit, technical',
    'capabilities.orders': 'Order Size',
    'capabilities.orders.desc': 'From 10 to 10,000+ pieces',
    'capabilities.turnaround': 'Turnaround',
    'capabilities.turnaround.desc': 'Quote within 24 hours',
    'capabilities.years': 'Years Active',
    'capabilities.years.desc': 'Operating since 2008',
    
    // Workshop
    'workshop.title': 'Workshop & Equipment',
    'workshop.location': 'Location',
    'workshop.location.desc': 'Via Val d\'Aosta 48, Prato 59100',
    'workshop.equipment': 'Equipment',
    'workshop.equipment.desc': 'Industrial cutting machines, fabric spreading tables',
    'workshop.workspace': 'Workspace',
    'workshop.workspace.desc': 'Dedicated workshop for small and large-scale processing',
    'workshop.image.alt': 'Workshop interior',
    
    // Production Examples
    'examples.title': 'Production Examples',
    'examples.subtitle': 'Reference styles (cutting only)',
    'examples.woven': 'Woven garment',
    'examples.woven.desc': 'cutting reference',
    'examples.knitwear': 'Knitwear',
    'examples.knitwear.desc': 'bulk order cutting',
    'examples.smallbatch': 'Small batch',
    'examples.smallbatch.desc': 'cutting only',
    'examples.disclaimer': 'The following examples are shown for cutting reference only. Design, branding and sales belong to the respective clients. 5 STAR does not sell or design garments.',
    
    // How We Work
    'howwework.title': 'How We Work',
    'howwework.step1': 'Contact',
    'howwework.step1.desc': 'Send fabric details, quantity, and timeline via WhatsApp or phone.',
    'howwework.step2': 'Quote',
    'howwework.step2.desc': 'We provide pricing based on fabric type, layers, and order size.',
    'howwework.step3': 'Delivery',
    'howwework.step3.desc': 'Bring fabric and patterns to our workshop. We cut and prepare.',
    'howwework.step4': 'Pickup',
    'howwework.step4.desc': 'Collect cut pieces. Ready for your next production step.',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'Do you only cut, or also sew?',
    'faq.a1': 'Cutting only. We don\'t sew or make finished garments.',
    'faq.q2': 'What\'s the minimum order?',
    'faq.a2': 'No strict minimum. We handle both samples and bulk orders.',
    'faq.q3': 'Do I need to bring fabric and patterns?',
    'faq.a3': 'Yes. We work with client-supplied materials.',
    'faq.q4': 'How long does it take?',
    'faq.a4': 'Depends on quantity. Samples usually ready in 1-2 days. Bulk orders take longer.',
    'faq.q5': 'Can I visit the workshop?',
    'faq.a5': 'Yes. Contact us to arrange an appointment.',
    
    // Contact
    'contact.title': 'Contact',
    'contact.person': 'Contact Person',
    'contact.preferred': 'Preferred Method',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.address': 'Address',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.service': 'Fabric cutting service in Prato, Italy.',
  },
  zh: {
    // Hero
    'hero.tagline': '服装裁剪服务',
    'hero.subtitle': '第三方面料裁剪服务。',
    'hero.location': '意大利普拉托 — 自2008年运营',
    
    // What We Do
    'whatwedo.title': '我们的服务',
    'whatwedo.cutting': '面料裁剪',
    'whatwedo.cutting.desc': '梭织和针织面料',
    'whatwedo.laying': '排版放样',
    'whatwedo.laying.desc': '手工和CAD排版',
    'whatwedo.batches': '大小批量',
    'whatwedo.batches.desc': '从样品到大货',
    'whatwedo.note': '注意：',
    'whatwedo.disclaimer': '我们仅提供裁剪服务。不设计、不生产、不销售成衣。',
    
    // Capabilities
    'capabilities.title': '我们的能力',
    'capabilities.fabrics': '面料类型',
    'capabilities.fabrics.desc': '梭织、针织、功能性面料',
    'capabilities.orders': '订单规模',
    'capabilities.orders.desc': '从10件到10,000+件',
    'capabilities.turnaround': '交付时间',
    'capabilities.turnaround.desc': '24小时内报价',
    'capabilities.years': '运营年限',
    'capabilities.years.desc': '自2008年起',
    
    // Workshop
    'workshop.title': '车间与设备',
    'workshop.location': '地址',
    'workshop.location.desc': 'Via Val d\'Aosta 48, Prato 59100',
    'workshop.equipment': '设备',
    'workshop.equipment.desc': '工业裁剪机、铺布台',
    'workshop.workspace': '工作空间',
    'workshop.workspace.desc': '专业车间，可处理大小订单',
    'workshop.image.alt': '车间内部',
    
    // Production Examples
    'examples.title': '生产案例',
    'examples.subtitle': '参考样式（仅裁剪）',
    'examples.woven': '梭织成衣',
    'examples.woven.desc': '裁剪参考',
    'examples.knitwear': '针织衫',
    'examples.knitwear.desc': '大货裁剪',
    'examples.smallbatch': '小批量',
    'examples.smallbatch.desc': '仅裁剪',
    'examples.disclaimer': '以下案例仅作为裁剪参考展示。设计、品牌和销售归各客户所有。5 STAR不销售或设计服装。',
    
    // How We Work
    'howwework.title': '合作流程',
    'howwework.step1': '联系',
    'howwework.step1.desc': '通过WhatsApp或电话发送面料详情、数量和时间要求。',
    'howwework.step2': '报价',
    'howwework.step2.desc': '根据面料类型、层数和订单规模提供报价。',
    'howwework.step3': '送料',
    'howwework.step3.desc': '将面料和纸样送到车间，我们进行裁剪准备。',
    'howwework.step4': '取货',
    'howwework.step4.desc': '取走裁剪好的布片，进入下一生产环节。',
    
    // FAQ
    'faq.title': '常见问题',
    'faq.q1': '你们只做裁剪，还是也做缝纫？',
    'faq.a1': '仅裁剪。我们不缝纫，不生产成衣。',
    'faq.q2': '最小起订量是多少？',
    'faq.a2': '没有严格限制。样品和大货都可以做。',
    'faq.q3': '需要自己提供面料和纸样吗？',
    'faq.a3': '是的，我们使用客户提供的材料。',
    'faq.q4': '需要多长时间？',
    'faq.a4': '视数量而定。样品通常1-2天，大货需要更长时间。',
    'faq.q5': '可以参观车间吗？',
    'faq.a5': '可以，请联系我们预约。',
    
    // Contact
    'contact.title': '联系我们',
    'contact.person': '联系人',
    'contact.preferred': '首选方式',
    'contact.phone': '电话',
    'contact.email': '邮箱',
    'contact.address': '地址',
    
    // Footer
    'footer.rights': '版权所有。',
    'footer.service': '意大利普拉托面料裁剪服务。',
  },
  es: {
    // Hero
    'hero.tagline': 'Servicio de Corte de Tejidos',
    'hero.subtitle': 'Corte de tejidos por cuenta de terceros.',
    'hero.location': 'Prato, Italia — Operando desde 2008',
    
    // What We Do
    'whatwedo.title': 'Qué Hacemos',
    'whatwedo.cutting': 'Corte de Tejidos',
    'whatwedo.cutting.desc': 'Tejidos planos y de punto',
    'whatwedo.laying': 'Marcada',
    'whatwedo.laying.desc': 'Layouts manuales y CAD',
    'whatwedo.batches': 'Pequeñas y Grandes Cantidades',
    'whatwedo.batches.desc': 'Desde muestras hasta pedidos grandes',
    'whatwedo.note': 'Nota:',
    'whatwedo.disclaimer': 'Solo ofrecemos servicios de corte. No diseñamos, fabricamos ni vendemos prendas terminadas.',
    
    // Capabilities
    'capabilities.title': 'Nuestras Capacidades',
    'capabilities.fabrics': 'Tipos de Tejido',
    'capabilities.fabrics.desc': 'Plano, punto, técnico',
    'capabilities.orders': 'Tamaño de Pedido',
    'capabilities.orders.desc': 'De 10 a 10.000+ piezas',
    'capabilities.turnaround': 'Tiempo de Entrega',
    'capabilities.turnaround.desc': 'Cotización en 24 horas',
    'capabilities.years': 'Años Activos',
    'capabilities.years.desc': 'Operando desde 2008',
    
    // Workshop
    'workshop.title': 'Taller y Equipamiento',
    'workshop.location': 'Ubicación',
    'workshop.location.desc': 'Via Val d\'Aosta 48, Prato 59100',
    'workshop.equipment': 'Equipamiento',
    'workshop.equipment.desc': 'Máquinas de corte industriales, mesas de tendido',
    'workshop.workspace': 'Espacio de Trabajo',
    'workshop.workspace.desc': 'Taller dedicado para procesamiento pequeño y grande',
    'workshop.image.alt': 'Interior del taller',
    
    // Production Examples
    'examples.title': 'Ejemplos de Producción',
    'examples.subtitle': 'Estilos de referencia (solo corte)',
    'examples.woven': 'Prenda tejida',
    'examples.woven.desc': 'referencia de corte',
    'examples.knitwear': 'Punto',
    'examples.knitwear.desc': 'corte de pedido grande',
    'examples.smallbatch': 'Pequeño lote',
    'examples.smallbatch.desc': 'solo corte',
    'examples.disclaimer': 'Los siguientes ejemplos se muestran solo como referencia de corte. Diseño, marca y ventas pertenecen a los respectivos clientes. 5 STAR no vende ni diseña prendas.',
    
    // How We Work
    'howwework.title': 'Cómo Trabajamos',
    'howwework.step1': 'Contacto',
    'howwework.step1.desc': 'Envía detalles del tejido, cantidad y plazos por WhatsApp o teléfono.',
    'howwework.step2': 'Cotización',
    'howwework.step2.desc': 'Proporcionamos precios según tipo de tejido, capas y tamaño del pedido.',
    'howwework.step3': 'Entrega',
    'howwework.step3.desc': 'Trae tejido y patrones a nuestro taller. Cortamos y preparamos.',
    'howwework.step4': 'Recogida',
    'howwework.step4.desc': 'Recoge las piezas cortadas. Listas para tu siguiente paso de producción.',
    
    // FAQ
    'faq.title': 'Preguntas Frecuentes',
    'faq.q1': '¿Solo cortan o también cosen?',
    'faq.a1': 'Solo corte. No cosemos ni hacemos prendas terminadas.',
    'faq.q2': '¿Cuál es el pedido mínimo?',
    'faq.a2': 'Sin mínimo estricto. Manejamos muestras y pedidos grandes.',
    'faq.q3': '¿Debo traer tejido y patrones?',
    'faq.a3': 'Sí. Trabajamos con materiales proporcionados por el cliente.',
    'faq.q4': '¿Cuánto tiempo tarda?',
    'faq.a4': 'Depende de la cantidad. Muestras listas en 1-2 días. Pedidos grandes tardan más.',
    'faq.q5': '¿Puedo visitar el taller?',
    'faq.a5': 'Sí. Contáctanos para concertar una cita.',
    
    // Contact
    'contact.title': 'Contacto',
    'contact.person': 'Persona de Contacto',
    'contact.preferred': 'Método Preferido',
    'contact.phone': 'Teléfono',
    'contact.email': 'Email',
    'contact.address': 'Dirección',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados.',
    'footer.service': 'Servicio de corte de tejidos en Prato, Italia.',
  },
  fr: {
    // Hero
    'hero.tagline': 'Service de Coupe de Tissus',
    'hero.subtitle': 'Coupe de tissus pour tiers.',
    'hero.location': 'Prato, Italie — En activité depuis 2008',
    
    // What We Do
    'whatwedo.title': 'Ce Que Nous Faisons',
    'whatwedo.cutting': 'Coupe de Tissus',
    'whatwedo.cutting.desc': 'Tissus chaîne et trame et maille',
    'whatwedo.laying': 'Placement',
    'whatwedo.laying.desc': 'Placements manuels et CAO',
    'whatwedo.batches': 'Petites et Grandes Quantités',
    'whatwedo.batches.desc': 'Des échantillons aux commandes en gros',
    'whatwedo.note': 'Note:',
    'whatwedo.disclaimer': 'Nous fournissons uniquement des services de coupe. Nous ne concevons, fabriquons ni vendons de vêtements finis.',
    
    // Capabilities
    'capabilities.title': 'Nos Capacités',
    'capabilities.fabrics': 'Types de Tissus',
    'capabilities.fabrics.desc': 'Chaîne et trame, maille, technique',
    'capabilities.orders': 'Taille des Commandes',
    'capabilities.orders.desc': 'De 10 à 10 000+ pièces',
    'capabilities.turnaround': 'Délai',
    'capabilities.turnaround.desc': 'Devis sous 24 heures',
    'capabilities.years': 'Années d\'Activité',
    'capabilities.years.desc': 'En activité depuis 2008',
    
    // Workshop
    'workshop.title': 'Atelier et Équipement',
    'workshop.location': 'Emplacement',
    'workshop.location.desc': 'Via Val d\'Aosta 48, Prato 59100',
    'workshop.equipment': 'Équipement',
    'workshop.equipment.desc': 'Machines de coupe industrielles, tables de matelassage',
    'workshop.workspace': 'Espace de Travail',
    'workshop.workspace.desc': 'Atelier dédié pour petites et grandes productions',
    'workshop.image.alt': 'Intérieur de l\'atelier',
    
    // Production Examples
    'examples.title': 'Exemples de Production',
    'examples.subtitle': 'Styles de référence (coupe uniquement)',
    'examples.woven': 'Vêtement tissé',
    'examples.woven.desc': 'référence de coupe',
    'examples.knitwear': 'Maille',
    'examples.knitwear.desc': 'coupe commande en gros',
    'examples.smallbatch': 'Petit lot',
    'examples.smallbatch.desc': 'coupe uniquement',
    'examples.disclaimer': 'Les exemples suivants sont présentés uniquement à titre de référence de coupe. Design, marque et ventes appartiennent aux clients respectifs. 5 STAR ne vend ni ne conçoit de vêtements.',
    
    // How We Work
    'howwework.title': 'Comment Nous Travaillons',
    'howwework.step1': 'Contact',
    'howwework.step1.desc': 'Envoyez les détails du tissu, quantité et délais via WhatsApp ou téléphone.',
    'howwework.step2': 'Devis',
    'howwework.step2.desc': 'Nous fournissons les prix selon le type de tissu, les couches et la taille de commande.',
    'howwework.step3': 'Livraison',
    'howwework.step3.desc': 'Apportez tissu et patrons à notre atelier. Nous coupons et préparons.',
    'howwework.step4': 'Récupération',
    'howwework.step4.desc': 'Récupérez les pièces coupées. Prêtes pour votre prochaine étape.',
    
    // FAQ
    'faq.title': 'Questions Fréquentes',
    'faq.q1': 'Faites-vous uniquement la coupe ou aussi la couture?',
    'faq.a1': 'Coupe uniquement. Nous ne cousons pas et ne fabriquons pas de vêtements finis.',
    'faq.q2': 'Quelle est la commande minimum?',
    'faq.a2': 'Pas de minimum strict. Nous traitons échantillons et commandes en gros.',
    'faq.q3': 'Dois-je apporter tissu et patrons?',
    'faq.a3': 'Oui. Nous travaillons avec les matériaux fournis par le client.',
    'faq.q4': 'Combien de temps cela prend-il?',
    'faq.a4': 'Dépend de la quantité. Échantillons prêts en 1-2 jours. Commandes en gros prennent plus de temps.',
    'faq.q5': 'Puis-je visiter l\'atelier?',
    'faq.a5': 'Oui. Contactez-nous pour prendre rendez-vous.',
    
    // Contact
    'contact.title': 'Contact',
    'contact.person': 'Personne de Contact',
    'contact.preferred': 'Méthode Préférée',
    'contact.phone': 'Téléphone',
    'contact.email': 'Email',
    'contact.address': 'Adresse',
    
    // Footer
    'footer.rights': 'Tous droits réservés.',
    'footer.service': 'Service de coupe de tissus à Prato, Italie.',
  },
  de: {
    // Hero
    'hero.tagline': 'Stoffzuschnitt-Service',
    'hero.subtitle': 'Stoffzuschnitt für Dritte.',
    'hero.location': 'Prato, Italien — Seit 2008 tätig',
    
    // What We Do
    'whatwedo.title': 'Was Wir Tun',
    'whatwedo.cutting': 'Stoffzuschnitt',
    'whatwedo.cutting.desc': 'Web- und Strickstoffe',
    'whatwedo.laying': 'Schnittbild',
    'whatwedo.laying.desc': 'Manuelle und CAD-Layouts',
    'whatwedo.batches': 'Klein- und Großmengen',
    'whatwedo.batches.desc': 'Von Mustern bis Großaufträgen',
    'whatwedo.note': 'Hinweis:',
    'whatwedo.disclaimer': 'Wir bieten nur Zuschnitt-Services. Wir entwerfen, fertigen oder verkaufen keine fertigen Kleidungsstücke.',
    
    // Capabilities
    'capabilities.title': 'Unsere Kapazitäten',
    'capabilities.fabrics': 'Stoffarten',
    'capabilities.fabrics.desc': 'Web, Strick, technisch',
    'capabilities.orders': 'Auftragsgröße',
    'capabilities.orders.desc': 'Von 10 bis 10.000+ Stück',
    'capabilities.turnaround': 'Bearbeitungszeit',
    'capabilities.turnaround.desc': 'Angebot innerhalb 24 Stunden',
    'capabilities.years': 'Jahre Aktiv',
    'capabilities.years.desc': 'Seit 2008 tätig',
    
    // Workshop
    'workshop.title': 'Werkstatt & Ausstattung',
    'workshop.location': 'Standort',
    'workshop.location.desc': 'Via Val d\'Aosta 48, Prato 59100',
    'workshop.equipment': 'Ausstattung',
    'workshop.equipment.desc': 'Industrielle Schneidmaschinen, Stofflegetische',
    'workshop.workspace': 'Arbeitsbereich',
    'workshop.workspace.desc': 'Dedizierte Werkstatt für kleine und große Produktionen',
    'workshop.image.alt': 'Werkstatt-Innenansicht',
    
    // Production Examples
    'examples.title': 'Produktionsbeispiele',
    'examples.subtitle': 'Referenzstile (nur Zuschnitt)',
    'examples.woven': 'Webware',
    'examples.woven.desc': 'Zuschnitt-Referenz',
    'examples.knitwear': 'Strickware',
    'examples.knitwear.desc': 'Großauftrags-Zuschnitt',
    'examples.smallbatch': 'Kleinmenge',
    'examples.smallbatch.desc': 'nur Zuschnitt',
    'examples.disclaimer': 'Die folgenden Beispiele dienen nur als Zuschnitt-Referenz. Design, Marke und Verkauf gehören den jeweiligen Kunden. 5 STAR verkauft oder entwirft keine Kleidung.',
    
    // How We Work
    'howwework.title': 'Wie Wir Arbeiten',
    'howwework.step1': 'Kontakt',
    'howwework.step1.desc': 'Senden Sie Stoffdetails, Menge und Zeitplan per WhatsApp oder Telefon.',
    'howwework.step2': 'Angebot',
    'howwework.step2.desc': 'Wir erstellen Preise basierend auf Stoffart, Lagen und Auftragsgröße.',
    'howwework.step3': 'Lieferung',
    'howwework.step3.desc': 'Bringen Sie Stoff und Schnitte in unsere Werkstatt. Wir schneiden und bereiten vor.',
    'howwework.step4': 'Abholung',
    'howwework.step4.desc': 'Holen Sie die zugeschnittenen Teile ab. Bereit für Ihren nächsten Produktionsschritt.',
    
    // FAQ
    'faq.title': 'Häufige Fragen',
    'faq.q1': 'Machen Sie nur Zuschnitt oder auch Nähen?',
    'faq.a1': 'Nur Zuschnitt. Wir nähen nicht und fertigen keine Kleidungsstücke.',
    'faq.q2': 'Was ist die Mindestbestellung?',
    'faq.a2': 'Kein striktes Minimum. Wir bearbeiten Muster und Großaufträge.',
    'faq.q3': 'Muss ich Stoff und Schnitte mitbringen?',
    'faq.a3': 'Ja. Wir arbeiten mit vom Kunden bereitgestellten Materialien.',
    'faq.q4': 'Wie lange dauert es?',
    'faq.a4': 'Hängt von der Menge ab. Muster meist in 1-2 Tagen fertig. Großaufträge dauern länger.',
    'faq.q5': 'Kann ich die Werkstatt besuchen?',
    'faq.a5': 'Ja. Kontaktieren Sie uns für einen Termin.',
    
    // Contact
    'contact.title': 'Kontakt',
    'contact.person': 'Ansprechpartner',
    'contact.preferred': 'Bevorzugte Methode',
    'contact.phone': 'Telefon',
    'contact.email': 'E-Mail',
    'contact.address': 'Adresse',
    
    // Footer
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.service': 'Stoffzuschnitt-Service in Prato, Italien.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('it');

  const t = (key: string): string => {
    return translations[language][key] || translations['it'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
