/* Nurdug AG - script-v1.js
   14-language switcher, scroll reveal, year update, mobile menu,
   legal modal system (Pattern 18). Vanilla JS, no build step. */

(function() {
  'use strict';

  // Language metadata
  var LANG_META = {
    en: { name: 'English', dir: 'ltr' },
    de: { name: 'Deutsch', dir: 'ltr' },
    fr: { name: 'Français', dir: 'ltr' },
    es: { name: 'Español', dir: 'ltr' },
    it: { name: 'Italiano', dir: 'ltr' },
    pt: { name: 'Português', dir: 'ltr' },
    nl: { name: 'Nederlands', dir: 'ltr' },
    pl: { name: 'Polski', dir: 'ltr' },
    ru: { name: 'Русский', dir: 'ltr' },
    tr: { name: 'Türkçe', dir: 'ltr' },
    zh: { name: '简体中文', dir: 'ltr' },
    'zh-TW': { name: '繁體中文', dir: 'ltr' },
    ja: { name: '日本語', dir: 'ltr' },
    ko: { name: '한국어', dir: 'ltr' },
    hi: { name: 'हिन्दी', dir: 'ltr' },
    ar: { name: 'العربية', dir: 'rtl' },
    he: { name: 'עברית', dir: 'rtl' }

    };

  var LANG_ORDER = ["en", "de", "fr", "es", "it", "pt", "nl", "pl", "ru", "tr", "zh", "zh-TW", "ja", "ko", "hi", "ar", "he"];

  var TRANSLATIONS = {
  "en": {
    "meta_title": "Nurdug AG - Real Estate Holding, Berlin",
    "meta_description": "Nurdug AG is a Berlin-based holding company focused on long-term real estate ownership, responsible letting, and durable value.",
    "nav_firm": "The Firm",
    "nav_focus": "Focus",
    "nav_approach": "Approach",
    "nav_distinction": "Profile",
    "nav_contact": "Contact",
    "hero_eyebrow": "Real Estate Holding · Berlin",
    "hero_title": "Nurdug AG",
    "hero_tagline": "A holding built for the long horizon",
    "hero_sub": "Real estate is not a short-term position. It is a substantial asset - held with care, let with responsibility, developed with patience.",
    "firm_eyebrow": "THE FIRM",
    "firm_title": "Substance over speculation",
    "firm_p1": "Nurdug AG is a holding company focused on real estate and long-term rental property management. Our commercial emphasis rests on the patient ownership, careful stewardship, and durable development of substantial property assets.",
    "firm_p2": "Our understanding of real estate is shaped by continuity, substance, and responsibility. We do not regard property as a short-term market position. We regard it as a real asset of lasting consequence - its value shown not in the market's rhythm but in its quality, its usability, its earning power, and its capacity to endure.",
    "firm_p3": "As a holding company, Nurdug AG provides the structural framework for the orderly direction of its real estate activities. Strategic oversight is combined with economic discipline so that assets are managed with the care and long horizon the work requires. Preservation of value, stability, and forward-looking development sit at the centre.",
    "focus_eyebrow": "OUR FOCUS",
    "focus_title": "Clearly defined. Deliberately narrow.",
    "focus_p1": "The activity of Nurdug AG is deliberately narrow. We concentrate on real estate and its professional rental, on sound long-term management.",
    "focus_p2": "In selecting and directing property holdings, we weight quality, location, substance, and long-term viability. What decides for us is not short-term market movement but the durable suitability of an asset, stable prospects for use, and a resilient economic foundation.",
    "focus_p3": "In rental management we pursue a calm, professional, responsible approach. The aim is market-appropriate, reliable operation that secures the long-term value of the property and generates solid, durable returns.",
    "approach_eyebrow": "OUR APPROACH",
    "approach_title": "Five principles",
    "approach_intro": "The conduct of Nurdug AG rests on a disposition that joins classical entrepreneurial thinking to real estate discipline.",
    "approach_1_title": "Long horizons",
    "approach_1_body": "We do not think in short cycles but in durable periods. Our concern is the sustained protection and development of real estate value.",
    "approach_2_title": "Substance",
    "approach_2_body": "We concentrate on assets with real quality and lasting relevance. Continuity weighs more heavily for us than short-term momentum.",
    "approach_3_title": "Care and structure",
    "approach_3_body": "As a holding company we act with clear structures, orderly decision paths, and a high standard of economic discipline and accountability.",
    "approach_4_title": "Reliable stewardship",
    "approach_4_body": "The letting of our properties proceeds with judgement, market knowledge, and operational care. Value preservation, quality of use, and durable earning power stand in the foreground.",
    "approach_5_title": "Responsibility for value",
    "approach_5_body": "We understand the handling of real estate capital as a lasting obligation. To preserve value, develop it in an orderly manner, and strengthen it over the long run is the core of our self-understanding.",
    "distinction_eyebrow": "WHAT SETS US APART",
    "distinction_title": "Calm, clarity, continuity",
    "distinction_p1": "Nurdug AG stands for a form of business practice marked by calm, clarity, and continuity. We do not follow short-term market thinking or an opportunistic approach. Our strength lies in concentration on what matters: substantial real estate, professional letting, orderly direction, and a durable understanding of value.",
    "distinction_p2": "This posture is the foundation of stability and dependability. It allows real estate capital not merely to be held, but to be guided with prudence and strengthened over time in both its substance and its earning power.",
    "self_eyebrow": "SELF-UNDERSTANDING",
    "self_title": "A holding with standing",
    "self_p1": "Nurdug AG understands itself as a holding with a clear and lasting standard. We combine economic reason with a fine sense for quality, structure, and sustainability. Our aim is to conduct real estate capital within an orderly and responsible framework, and in doing so to provide a resilient foundation for long-term value.",
    "closing": "Nurdug AG stands for substance-oriented real estate ownership, responsible letting, and long-term value.",
    "contact_eyebrow": "CONTACT",
    "contact_title": "Berlin",
    "contact_intro": "For business inquiries we are pleased to respond directly.",
    "contact_address_label": "REGISTERED OFFICE",
    "contact_address": "Goethestraße 49, 12305 Berlin, Germany",
    "contact_email_label": "EMAIL",
    "contact_phone_label": "TELEPHONE",
    "footer_tagline": "Real Estate Holding · Berlin",
    "footer_legal": "Nurdug AG, registered in Berlin. All rights reserved.",
    "legal_imprint": "Legal Notice",
    "legal_privacy": "Privacy Policy",
    "legal_cookies": "Cookies"
  },
  "de": {
    "meta_title": "Nurdug AG - Immobilienholding, Berlin",
    "meta_description": "Die Nurdug AG ist eine Berliner Holdinggesellschaft mit Schwerpunkt auf langfristiger Immobilienhaltung, verantwortungsvoller Vermietung und dauerhafter Wertbeständigkeit.",
    "nav_firm": "Das Unternehmen",
    "nav_focus": "Fokus",
    "nav_approach": "Ansatz",
    "nav_distinction": "Profil",
    "nav_contact": "Kontakt",
    "hero_eyebrow": "Immobilienholding · Berlin",
    "hero_title": "Nurdug AG",
    "hero_tagline": "Eine Holding mit langfristigem Blick und klarem Anspruch",
    "hero_sub": "Immobilien sind keine kurzfristige Marktposition. Sie sind reale Vermögenswerte - sorgfältig gehalten, verantwortungsvoll vermietet, geduldig entwickelt.",
    "firm_eyebrow": "DAS UNTERNEHMEN",
    "firm_title": "Substanz statt Spekulation",
    "firm_p1": "Die Nurdug AG ist eine Holdinggesellschaft mit Fokus auf den Immobilienmarkt und die Vermietung von Immobilien. Ihr unternehmerischer Schwerpunkt liegt auf dem langfristigen Halten, der sorgfältigen Steuerung und der nachhaltigen Entwicklung werthaltiger Immobilienbestände.",
    "firm_p2": "Unser Verständnis von Immobilien ist von Kontinuität, Substanz und Verantwortung geprägt. Immobilien betrachten wir nicht als kurzfristige Marktpositionen, sondern als reale Vermögenswerte von bleibender Bedeutung. Ihr Wert zeigt sich nicht im wechselnden Takt des Marktes, sondern in ihrer Qualität, ihrer Nutzbarkeit, ihrer Ertragskraft und ihrer Fähigkeit, auf Dauer Bestand zu haben.",
    "firm_p3": "Als Holding schafft die Nurdug AG den strukturellen Rahmen für eine geordnete Führung ihrer Immobilienaktivitäten. Sie verbindet strategische Übersicht mit wirtschaftlicher Disziplin und stellt sicher, dass Vermögenswerte mit der gebotenen Sorgfalt, Klarheit und Langfristigkeit geführt werden. Im Mittelpunkt stehen nicht Volatilität und Opportunismus, sondern Werterhalt, Stabilität und eine vorausschauende Entwicklung.",
    "focus_eyebrow": "UNSER FOKUS",
    "focus_title": "Klar umrissen. Bewusst begrenzt.",
    "focus_p1": "Die Tätigkeit der Nurdug AG ist bewusst klar umrissen. Wir konzentrieren uns auf Immobilien sowie auf deren professionelle Vermietung und nachhaltige Bewirtschaftung.",
    "focus_p2": "Bei der Auswahl und Führung von Immobilienbeständen legen wir Wert auf Qualität, Lage, Substanz und langfristige Tragfähigkeit. Maßgeblich sind für uns nicht kurzfristige Marktbewegungen, sondern die dauerhafte Eignung eines Objekts, stabile Nutzungsperspektiven und eine belastbare wirtschaftliche Grundlage.",
    "focus_p3": "In der Vermietung verfolgen wir einen ruhigen, professionellen und verantwortungsvollen Ansatz. Ziel ist eine marktgerechte und verlässliche Bewirtschaftung, die sowohl den langfristigen Wert der Immobilie sichert als auch solide und nachhaltige Erträge ermöglicht.",
    "approach_eyebrow": "UNSER ANSATZ",
    "approach_title": "Fünf Grundsätze",
    "approach_intro": "Das Handeln der Nurdug AG ist von einer Haltung getragen, die klassisches unternehmerisches Denken mit immobilienwirtschaftlicher Disziplin verbindet.",
    "approach_1_title": "Langfristigkeit",
    "approach_1_body": "Wir denken nicht in kurzfristigen Zyklen, sondern in belastbaren Zeiträumen. Unser Interesse gilt der nachhaltigen Sicherung und Entwicklung von Immobilienwerten.",
    "approach_2_title": "Substanzorientierung",
    "approach_2_body": "Wir konzentrieren uns auf Vermögenswerte mit realer Qualität und dauerhafter Relevanz. Beständigkeit wiegt für uns schwerer als kurzfristige Dynamik.",
    "approach_3_title": "Sorgfalt und Struktur",
    "approach_3_body": "Als Holdinggesellschaft handeln wir mit klaren Strukturen, geordneten Entscheidungswegen und einem hohen Anspruch an wirtschaftliche Disziplin und Verantwortlichkeit.",
    "approach_4_title": "Verlässliche Bewirtschaftung",
    "approach_4_body": "Die Vermietung unserer Immobilien erfolgt mit Augenmaß, Marktkenntnis und operativer Sorgfalt. Im Vordergrund stehen Werterhalt, Nutzungsqualität und nachhaltige Ertragskraft.",
    "approach_5_title": "Verantwortung für Werte",
    "approach_5_body": "Wir verstehen den Umgang mit Immobilienvermögen als dauerhafte Verpflichtung. Werte zu bewahren, geordnet weiterzuentwickeln und langfristig zu stärken ist Kern unseres Selbstverständnisses.",
    "distinction_eyebrow": "WAS UNS AUSZEICHNET",
    "distinction_title": "Ruhe, Klarheit, Beständigkeit",
    "distinction_p1": "Die Nurdug AG steht für eine Form des unternehmerischen Handelns, die von Ruhe, Klarheit und Beständigkeit geprägt ist. Wir folgen keinem kurzfristigen Marktdenken und keinem opportunistischen Ansatz. Unsere Stärke liegt in der Konzentration auf das Wesentliche: werthaltige Immobilien, professionelle Vermietung, geordnete Steuerung und ein langfristig tragfähiges Verständnis von Wert.",
    "distinction_p2": "Diese Haltung schafft die Grundlage für Stabilität und Verlässlichkeit. Sie erlaubt es, Immobilienvermögen nicht nur zu halten, sondern mit Umsicht zu führen und über die Zeit in seiner Substanz wie in seiner Ertragskraft zu stärken.",
    "self_eyebrow": "SELBSTVERSTÄNDNIS",
    "self_title": "Eine Holding mit Anspruch",
    "self_p1": "Die Nurdug AG versteht sich als Holding mit einem klaren, auf Dauer angelegten Anspruch. Wir verbinden wirtschaftliche Vernunft mit einem feinen Gespür für Qualität, Struktur und Nachhaltigkeit. Unser Ziel ist es, Immobilienvermögen in einem geordneten und verantwortungsvollen Rahmen zu führen und damit eine belastbare Grundlage für langfristige Wertbeständigkeit zu schaffen.",
    "closing": "Nurdug AG steht für substanzorientierte Immobilienhaltung, verantwortungsvolle Vermietung und langfristige Wertbeständigkeit.",
    "contact_eyebrow": "KONTAKT",
    "contact_title": "Berlin",
    "contact_intro": "Für geschäftliche Anfragen stehen wir Ihnen gerne zur Verfügung.",
    "contact_address_label": "SITZ DER GESELLSCHAFT",
    "contact_address": "Goethestraße 49, 12305 Berlin, Deutschland",
    "contact_email_label": "E-MAIL",
    "contact_phone_label": "TELEFON",
    "footer_tagline": "Immobilienholding · Berlin",
    "footer_legal": "Nurdug AG mit Sitz in Berlin. Alle Rechte vorbehalten.",
    "legal_imprint": "Impressum",
    "legal_privacy": "Datenschutzerklärung",
    "legal_cookies": "Cookies"
  },
  "fr": {
    "meta_title": "Nurdug AG - Holding immobilière, Berlin",
    "meta_description": "Nurdug AG est une société holding berlinoise dédiée à la détention immobilière de long terme, à la location responsable et à la pérennité de la valeur.",
    "nav_firm": "La Société",
    "nav_focus": "Focus",
    "nav_approach": "Démarche",
    "nav_distinction": "Profil",
    "nav_contact": "Contact",
    "hero_eyebrow": "Holding immobilière · Berlin",
    "hero_title": "Nurdug AG",
    "hero_tagline": "Une holding conçue pour le long terme",
    "hero_sub": "L'immobilier n'est pas une position de marché éphémère. C'est un actif réel - détenu avec soin, loué avec responsabilité, développé avec patience.",
    "firm_eyebrow": "LA SOCIÉTÉ",
    "firm_title": "La substance plutôt que la spéculation",
    "firm_p1": "Nurdug AG est une société holding dont l'activité porte sur l'immobilier et sa location de long terme. Son orientation commerciale repose sur la détention patiente, la gestion attentive et le développement durable d'un patrimoine immobilier de qualité.",
    "firm_p2": "Notre conception de l'immobilier se fonde sur la continuité, la substance et la responsabilité. Nous ne considérons pas l'immobilier comme une position de marché de court terme, mais comme un actif réel à vocation pérenne. Sa valeur se révèle non pas dans le rythme changeant du marché, mais dans sa qualité, son usage, sa capacité de rendement et sa faculté à traverser le temps.",
    "firm_p3": "En qualité de holding, Nurdug AG offre le cadre structurel propre à conduire ses activités immobilières avec ordre. La vision stratégique y est conjuguée à la discipline économique, afin que les actifs soient gérés avec la rigueur, la clarté et la patience qu'exige la matière. Au centre de cette démarche se tiennent la préservation de la valeur, la stabilité et un développement prévoyant.",
    "focus_eyebrow": "NOTRE FOCUS",
    "focus_title": "Un périmètre net. Volontairement restreint.",
    "focus_p1": "L'activité de Nurdug AG est volontairement circonscrite. Nous nous concentrons sur l'immobilier, sa location professionnelle et sa gestion durable.",
    "focus_p2": "Dans la sélection et la conduite du patrimoine, nous accordons une importance première à la qualité, à l'emplacement, à la substance et à la viabilité de long terme. Ce qui nous décide n'est pas le mouvement passager du marché, mais l'aptitude durable d'un bien, la stabilité de ses usages et la solidité de son assise économique.",
    "focus_p3": "Dans la gestion locative, nous suivons une approche posée, professionnelle et responsable. L'objectif est une exploitation conforme au marché, fiable, qui sécurise la valeur de long terme du bien et produit des revenus solides et pérennes.",
    "approach_eyebrow": "NOTRE DÉMARCHE",
    "approach_title": "Cinq principes",
    "approach_intro": "La conduite de Nurdug AG procède d'une disposition qui unit la pensée entrepreneuriale classique à la discipline propre à l'immobilier.",
    "approach_1_title": "Horizon long",
    "approach_1_body": "Nous ne pensons pas en cycles courts mais en durées solides. Notre intérêt porte sur la protection et le développement durables de la valeur immobilière.",
    "approach_2_title": "Substance",
    "approach_2_body": "Nous nous concentrons sur des actifs dotés d'une qualité réelle et d'une pertinence durable. La continuité pèse davantage pour nous que le mouvement éphémère.",
    "approach_3_title": "Rigueur et structure",
    "approach_3_body": "En tant que holding, nous agissons selon des structures claires, des voies de décision ordonnées et une haute exigence de discipline économique et de responsabilité.",
    "approach_4_title": "Gestion rigoureuse",
    "approach_4_body": "La location de nos biens s'effectue avec jugement, connaissance du marché et soin opérationnel. Préservation de la valeur, qualité d'usage et rendement durable en constituent la priorité.",
    "approach_5_title": "Responsabilité envers la valeur",
    "approach_5_body": "Nous comprenons la gestion d'un patrimoine immobilier comme une obligation qui s'inscrit dans la durée. Préserver les valeurs, les développer avec mesure et les renforcer sur le long terme constitue le cœur de notre conception.",
    "distinction_eyebrow": "CE QUI NOUS DISTINGUE",
    "distinction_title": "Calme, clarté, continuité",
    "distinction_p1": "Nurdug AG incarne une pratique entrepreneuriale marquée par le calme, la clarté et la continuité. Nous n'obéissons ni à la pensée de marché de court terme ni à une démarche opportuniste. Notre force réside dans la concentration sur l'essentiel : un immobilier de substance, une location professionnelle, une direction ordonnée et une compréhension durable de la valeur.",
    "distinction_p2": "Cette posture fonde la stabilité et la fiabilité. Elle permet non seulement de détenir un patrimoine immobilier, mais de le conduire avec prudence et de le renforcer, dans sa substance comme dans son rendement, au fil du temps.",
    "self_eyebrow": "NOTRE CONCEPTION",
    "self_title": "Une holding aux exigences claires",
    "self_p1": "Nurdug AG se conçoit comme une holding portant une exigence claire, inscrite dans la durée. Nous allions la raison économique à un sens fin de la qualité, de la structure et de la pérennité. Notre but est de conduire le patrimoine immobilier dans un cadre ordonné et responsable, et de fournir ainsi une assise robuste à la pérennité de la valeur.",
    "closing": "Nurdug AG représente une détention immobilière axée sur la substance, une location responsable et la pérennité de la valeur.",
    "contact_eyebrow": "CONTACT",
    "contact_title": "Berlin",
    "contact_intro": "Pour toute demande professionnelle, nous vous répondons avec plaisir.",
    "contact_address_label": "SIÈGE SOCIAL",
    "contact_address": "Goethestraße 49, 12305 Berlin, Allemagne",
    "contact_email_label": "COURRIEL",
    "contact_phone_label": "TÉLÉPHONE",
    "footer_tagline": "Holding immobilière · Berlin",
    "footer_legal": "Nurdug AG, domiciliée à Berlin. Tous droits réservés.",
    "legal_imprint": "Mentions légales",
    "legal_privacy": "Politique de confidentialité",
    "legal_cookies": "Cookies"
  },
  "es": {
    "meta_title": "Nurdug AG - Holding inmobiliaria, Berlín",
    "meta_description": "Nurdug AG es una sociedad holding berlinesa dedicada a la tenencia inmobiliaria a largo plazo, al arrendamiento responsable y a la perdurabilidad del valor.",
    "nav_firm": "La Empresa",
    "nav_focus": "Enfoque",
    "nav_approach": "Planteamiento",
    "nav_distinction": "Perfil",
    "nav_contact": "Contacto",
    "hero_eyebrow": "Holding inmobiliaria · Berlín",
    "hero_title": "Nurdug AG",
    "hero_tagline": "Una holding concebida para el largo plazo",
    "hero_sub": "El inmueble no es una posición de mercado pasajera. Es un activo real - conservado con cuidado, arrendado con responsabilidad, desarrollado con paciencia.",
    "firm_eyebrow": "LA EMPRESA",
    "firm_title": "Sustancia antes que especulación",
    "firm_p1": "Nurdug AG es una sociedad holding centrada en el mercado inmobiliario y en el arrendamiento de inmuebles. Su vocación empresarial descansa sobre la tenencia paciente, la administración atenta y el desarrollo duradero de un patrimonio inmobiliario de calidad.",
    "firm_p2": "Nuestra concepción del inmueble se asienta en la continuidad, la sustancia y la responsabilidad. No entendemos el inmueble como una posición efímera del mercado, sino como un activo real de permanencia. Su valor no se revela en el compás cambiante del mercado, sino en su calidad, en su uso, en su capacidad de renta y en su aptitud para perdurar.",
    "firm_p3": "En su condición de holding, Nurdug AG aporta el marco estructural que ordena sus actividades inmobiliarias. Conjuga la visión estratégica con la disciplina económica y vela por que los activos se gestionen con el rigor, la claridad y la paciencia que la materia exige. En el centro no se hallan la volatilidad ni el oportunismo, sino la preservación del valor, la estabilidad y un desarrollo previsor.",
    "focus_eyebrow": "NUESTRO ENFOQUE",
    "focus_title": "Perímetro definido. Deliberadamente acotado.",
    "focus_p1": "La actividad de Nurdug AG es deliberadamente acotada. Nos concentramos en los inmuebles, en su arrendamiento profesional y en su gestión sostenible.",
    "focus_p2": "En la selección y conducción del patrimonio inmobiliario damos valor a la calidad, a la ubicación, a la sustancia y a la viabilidad a largo plazo. Lo determinante para nosotros no es el movimiento pasajero del mercado, sino la idoneidad duradera de un bien, la estabilidad de sus usos y la solidez de su base económica.",
    "focus_p3": "En el arrendamiento seguimos un proceder sereno, profesional y responsable. El objetivo es una explotación conforme al mercado y fiable, que asegure el valor del inmueble a largo plazo y permita rendimientos sólidos y duraderos.",
    "approach_eyebrow": "NUESTRO PLANTEAMIENTO",
    "approach_title": "Cinco principios",
    "approach_intro": "La conducta de Nurdug AG se sostiene en una disposición que une el pensamiento empresarial clásico con la disciplina propia de la gestión inmobiliaria.",
    "approach_1_title": "Horizonte largo",
    "approach_1_body": "No pensamos en ciclos breves, sino en periodos sólidos. Nuestro interés reside en la salvaguarda y el desarrollo duraderos del valor inmobiliario.",
    "approach_2_title": "Sustancia",
    "approach_2_body": "Nos concentramos en activos con calidad real y relevancia duradera. La continuidad pesa para nosotros más que el ímpetu pasajero.",
    "approach_3_title": "Rigor y estructura",
    "approach_3_body": "Como sociedad holding actuamos con estructuras claras, vías de decisión ordenadas y una alta exigencia de disciplina económica y responsabilidad.",
    "approach_4_title": "Administración fiable",
    "approach_4_body": "El arrendamiento de nuestros inmuebles se efectúa con mesura, conocimiento del mercado y cuidado operativo. Prevalecen la preservación del valor, la calidad de uso y una renta duradera.",
    "approach_5_title": "Responsabilidad por el valor",
    "approach_5_body": "Entendemos el manejo del patrimonio inmobiliario como una obligación permanente. Preservar los valores, desarrollarlos con orden y reforzarlos a largo plazo constituye el núcleo de nuestro entendimiento.",
    "distinction_eyebrow": "LO QUE NOS DISTINGUE",
    "distinction_title": "Serenidad, claridad, permanencia",
    "distinction_p1": "Nurdug AG representa una forma de actuar empresarial marcada por la serenidad, la claridad y la permanencia. No seguimos un pensamiento de mercado cortoplacista ni un proceder oportunista. Nuestra fuerza reside en la concentración en lo esencial: inmuebles de sustancia, arrendamiento profesional, conducción ordenada y una comprensión duradera del valor.",
    "distinction_p2": "Esta disposición funda la estabilidad y la fiabilidad. Permite no solo conservar el patrimonio inmobiliario, sino conducirlo con prudencia y fortalecerlo con el tiempo tanto en su sustancia como en su rentabilidad.",
    "self_eyebrow": "AUTOCONCEPCIÓN",
    "self_title": "Una holding con exigencia clara",
    "self_p1": "Nurdug AG se concibe como una holding con una exigencia clara y de largo plazo. Conjugamos la razón económica con un fino sentido de la calidad, la estructura y la sostenibilidad. Nuestro propósito es conducir el patrimonio inmobiliario en un marco ordenado y responsable, y aportar así un fundamento sólido para la perdurabilidad del valor.",
    "closing": "Nurdug AG encarna una tenencia inmobiliaria orientada a la sustancia, un arrendamiento responsable y la perdurabilidad del valor.",
    "contact_eyebrow": "CONTACTO",
    "contact_title": "Berlín",
    "contact_intro": "Para consultas profesionales atendemos con gusto.",
    "contact_address_label": "DOMICILIO SOCIAL",
    "contact_address": "Goethestraße 49, 12305 Berlín, Alemania",
    "contact_email_label": "CORREO ELECTRÓNICO",
    "contact_phone_label": "TELÉFONO",
    "footer_tagline": "Holding inmobiliaria · Berlín",
    "footer_legal": "Nurdug AG, domiciliada en Berlín. Todos los derechos reservados.",
    "legal_imprint": "Aviso legal",
    "legal_privacy": "Política de privacidad",
    "legal_cookies": "Cookies"
  },
  "it": {
    "meta_title": "Nurdug AG - Holding immobiliare, Berlino",
    "meta_description": "Nurdug AG è una holding con sede a Berlino dedita alla detenzione immobiliare di lungo periodo, alla locazione responsabile e alla tenuta del valore nel tempo.",
    "nav_firm": "L'Impresa",
    "nav_focus": "Focus",
    "nav_approach": "Approccio",
    "nav_distinction": "Profilo",
    "nav_contact": "Contatti",
    "hero_eyebrow": "Holding immobiliare · Berlino",
    "hero_title": "Nurdug AG",
    "hero_tagline": "Una holding pensata per il lungo periodo",
    "hero_sub": "L'immobile non è una posizione di mercato passeggera. È un bene reale - detenuto con cura, locato con responsabilità, sviluppato con pazienza.",
    "firm_eyebrow": "L'IMPRESA",
    "firm_title": "Sostanza, non speculazione",
    "firm_p1": "Nurdug AG è una società holding dedita al mercato immobiliare e alla locazione di immobili. Il suo indirizzo imprenditoriale si fonda sulla detenzione paziente, sulla gestione attenta e sullo sviluppo durevole di un patrimonio immobiliare di pregio.",
    "firm_p2": "La nostra concezione dell'immobile poggia sulla continuità, sulla sostanza e sulla responsabilità. Non lo consideriamo una posizione di mercato passeggera, bensì un bene reale di rilievo duraturo. Il suo valore non si manifesta nel ritmo mutevole del mercato, ma nella sua qualità, nella sua fruibilità, nella sua capacità di reddito e nella sua attitudine a perdurare.",
    "firm_p3": "In qualità di holding, Nurdug AG fornisce il quadro strutturale per la conduzione ordinata delle proprie attività immobiliari. Coniuga la visione strategica con la disciplina economica e assicura che gli attivi siano gestiti con il rigore, la chiarezza e la pazienza che la materia richiede. Al centro non stanno né la volatilità né l'opportunismo, ma la preservazione del valore, la stabilità e uno sviluppo lungimirante.",
    "focus_eyebrow": "IL NOSTRO FOCUS",
    "focus_title": "Ambito definito. Volutamente ristretto.",
    "focus_p1": "L'attività di Nurdug AG è volutamente circoscritta. Ci concentriamo sugli immobili, sulla loro locazione professionale e sulla loro gestione sostenibile.",
    "focus_p2": "Nella selezione e nella conduzione del patrimonio immobiliare diamo peso alla qualità, alla posizione, alla sostanza e alla sostenibilità di lungo periodo. A contare per noi non è il moto passeggero del mercato, ma l'idoneità duratura di un bene, la stabilità delle prospettive d'uso e la solidità del suo fondamento economico.",
    "focus_p3": "Nella locazione seguiamo un approccio pacato, professionale e responsabile. L'obiettivo è una gestione conforme al mercato e affidabile, capace di tutelare il valore a lungo termine dell'immobile e di produrre rendimenti solidi e duraturi.",
    "approach_eyebrow": "IL NOSTRO APPROCCIO",
    "approach_title": "Cinque principi",
    "approach_intro": "L'agire di Nurdug AG si fonda su una disposizione che unisce il pensiero imprenditoriale classico alla disciplina propria della gestione immobiliare.",
    "approach_1_title": "Lungo orizzonte",
    "approach_1_body": "Non pensiamo in cicli brevi, ma in tempi solidi. Il nostro interesse è la tutela e lo sviluppo duraturi del valore immobiliare.",
    "approach_2_title": "Sostanza",
    "approach_2_body": "Ci concentriamo su beni dotati di qualità reale e rilevanza durevole. La continuità pesa per noi più dello slancio passeggero.",
    "approach_3_title": "Rigore e struttura",
    "approach_3_body": "Come holding agiamo con strutture chiare, percorsi decisionali ordinati e un'elevata esigenza di disciplina economica e responsabilità.",
    "approach_4_title": "Gestione affidabile",
    "approach_4_body": "La locazione dei nostri immobili procede con misura, conoscenza del mercato e cura operativa. In primo piano stanno la preservazione del valore, la qualità d'uso e una redditività durevole.",
    "approach_5_title": "Responsabilità per il valore",
    "approach_5_body": "Intendiamo la gestione del patrimonio immobiliare come un impegno duraturo. Preservare i valori, svilupparli con ordine e rafforzarli nel tempo è il nucleo della nostra identità.",
    "distinction_eyebrow": "CIÒ CHE CI DISTINGUE",
    "distinction_title": "Compostezza, chiarezza, continuità",
    "distinction_p1": "Nurdug AG rappresenta una forma di agire imprenditoriale improntata alla compostezza, alla chiarezza e alla continuità. Non seguiamo né un pensiero di mercato di breve periodo né un approccio opportunistico. La nostra forza risiede nella concentrazione sull'essenziale: un immobiliare di sostanza, una locazione professionale, una conduzione ordinata e una comprensione duratura del valore.",
    "distinction_p2": "Questa postura fonda stabilità e affidabilità. Consente non solo di detenere un patrimonio immobiliare, ma di condurlo con prudenza e di rafforzarlo nel tempo, tanto nella sostanza quanto nella redditività.",
    "self_eyebrow": "LA NOSTRA IDENTITÀ",
    "self_title": "Una holding con un'esigenza chiara",
    "self_p1": "Nurdug AG si concepisce come una holding dall'esigenza chiara e di lungo respiro. Uniamo la ragione economica a una sensibilità fine per la qualità, la struttura e la sostenibilità. Il nostro scopo è condurre il patrimonio immobiliare entro una cornice ordinata e responsabile, offrendo così una base solida alla tenuta del valore nel tempo.",
    "closing": "Nurdug AG incarna una detenzione immobiliare improntata alla sostanza, una locazione responsabile e una tenuta durevole del valore.",
    "contact_eyebrow": "CONTATTI",
    "contact_title": "Berlino",
    "contact_intro": "Per richieste professionali siamo lieti di rispondere.",
    "contact_address_label": "SEDE LEGALE",
    "contact_address": "Goethestraße 49, 12305 Berlino, Germania",
    "contact_email_label": "E-MAIL",
    "contact_phone_label": "TELEFONO",
    "footer_tagline": "Holding immobiliare · Berlino",
    "footer_legal": "Nurdug AG con sede a Berlino. Tutti i diritti riservati.",
    "legal_imprint": "Note legali",
    "legal_privacy": "Informativa sulla privacy",
    "legal_cookies": "Cookie"
  },
  "pt": {
    "meta_title": "Nurdug AG - Holding imobiliária, Berlim",
    "meta_description": "Nurdug AG é uma sociedade holding com sede em Berlim, dedicada à detenção imobiliária de longo prazo, à locação responsável e à durabilidade do valor.",
    "nav_firm": "A Empresa",
    "nav_focus": "Foco",
    "nav_approach": "Abordagem",
    "nav_distinction": "Perfil",
    "nav_contact": "Contacto",
    "hero_eyebrow": "Holding imobiliária · Berlim",
    "hero_title": "Nurdug AG",
    "hero_tagline": "Uma holding concebida para o longo prazo",
    "hero_sub": "O imóvel não é uma posição de mercado passageira. É um ativo real - detido com cuidado, arrendado com responsabilidade, desenvolvido com paciência.",
    "firm_eyebrow": "A EMPRESA",
    "firm_title": "Substância, não especulação",
    "firm_p1": "A Nurdug AG é uma sociedade holding centrada no mercado imobiliário e na locação de imóveis. A sua orientação empresarial assenta na detenção paciente, na gestão cuidada e no desenvolvimento duradouro de um património imobiliário de qualidade.",
    "firm_p2": "A nossa concepção do imóvel funda-se na continuidade, na substância e na responsabilidade. Não o encaramos como uma posição de mercado de curto prazo, mas como um ativo real de alcance duradouro. O seu valor não se revela no compasso cambiante do mercado, mas na sua qualidade, no seu uso, na sua capacidade de rendimento e na sua aptidão para perdurar.",
    "firm_p3": "Como holding, a Nurdug AG confere o quadro estrutural que ordena a condução das suas atividades imobiliárias. Conjuga visão estratégica e disciplina económica, velando por que os ativos sejam geridos com o rigor, a clareza e a paciência que a matéria exige. No centro não estão a volatilidade nem o oportunismo, mas a preservação do valor, a estabilidade e um desenvolvimento previdente.",
    "focus_eyebrow": "O NOSSO FOCO",
    "focus_title": "Âmbito delimitado. Deliberadamente restrito.",
    "focus_p1": "A atividade da Nurdug AG é deliberadamente circunscrita. Concentramo-nos em imóveis, na respetiva locação profissional e na sua gestão sustentável.",
    "focus_p2": "Na seleção e condução do património imobiliário, damos primazia à qualidade, à localização, à substância e à viabilidade de longo prazo. O determinante para nós não é o movimento passageiro do mercado, mas a idoneidade duradoura de um bem, a estabilidade das perspetivas de uso e a solidez do seu fundamento económico.",
    "focus_p3": "Na gestão locativa seguimos um modo pausado, profissional e responsável. O objetivo é uma exploração conforme ao mercado e fiável, que assegure o valor do imóvel a longo prazo e permita rendimentos sólidos e duradouros.",
    "approach_eyebrow": "A NOSSA ABORDAGEM",
    "approach_title": "Cinco princípios",
    "approach_intro": "A atuação da Nurdug AG repousa numa disposição que une o pensamento empresarial clássico à disciplina própria da esfera imobiliária.",
    "approach_1_title": "Horizonte longo",
    "approach_1_body": "Não pensamos em ciclos breves, mas em períodos sólidos. O nosso interesse é a proteção e o desenvolvimento duradouros do valor imobiliário.",
    "approach_2_title": "Substância",
    "approach_2_body": "Concentramo-nos em ativos dotados de qualidade real e relevância duradoura. A continuidade pesa para nós mais do que o ímpeto passageiro.",
    "approach_3_title": "Rigor e estrutura",
    "approach_3_body": "Enquanto holding, agimos com estruturas claras, percursos de decisão ordenados e uma exigência elevada de disciplina económica e de responsabilidade.",
    "approach_4_title": "Gestão fiável",
    "approach_4_body": "A locação dos nossos imóveis decorre com medida, conhecimento do mercado e cuidado operativo. Em primeiro plano estão a preservação do valor, a qualidade de uso e uma rentabilidade duradoura.",
    "approach_5_title": "Responsabilidade pelo valor",
    "approach_5_body": "Entendemos a gestão do património imobiliário como uma obrigação permanente. Preservar os valores, desenvolvê-los com ordem e reforçá-los a longo prazo constitui o cerne da nossa identidade.",
    "distinction_eyebrow": "O QUE NOS DISTINGUE",
    "distinction_title": "Serenidade, clareza, permanência",
    "distinction_p1": "A Nurdug AG representa uma forma de agir empresarial marcada pela serenidade, pela clareza e pela permanência. Não seguimos um pensamento de mercado de curto prazo nem uma conduta oportunista. A nossa força reside na concentração no essencial: imóveis de substância, locação profissional, condução ordenada e uma compreensão duradoura do valor.",
    "distinction_p2": "Esta postura funda a estabilidade e a fiabilidade. Permite não apenas deter património imobiliário, mas conduzi-lo com prudência e fortalecê-lo ao longo do tempo, tanto na sua substância como no seu rendimento.",
    "self_eyebrow": "A NOSSA IDENTIDADE",
    "self_title": "Uma holding com exigência clara",
    "self_p1": "A Nurdug AG concebe-se como uma holding portadora de uma exigência clara e de longo alcance. Conjugamos a razão económica com uma sensibilidade fina para a qualidade, a estrutura e a sustentabilidade. O nosso propósito é conduzir o património imobiliário num quadro ordenado e responsável, oferecendo assim uma base robusta à perenidade do valor.",
    "closing": "A Nurdug AG encarna uma detenção imobiliária orientada para a substância, uma locação responsável e a perenidade do valor.",
    "contact_eyebrow": "CONTACTO",
    "contact_title": "Berlim",
    "contact_intro": "Para questões profissionais, respondemos com gosto.",
    "contact_address_label": "SEDE SOCIAL",
    "contact_address": "Goethestraße 49, 12305 Berlim, Alemanha",
    "contact_email_label": "CORREIO ELECTRÓNICO",
    "contact_phone_label": "TELEFONE",
    "footer_tagline": "Holding imobiliária · Berlim",
    "footer_legal": "Nurdug AG, com sede em Berlim. Todos os direitos reservados.",
    "legal_imprint": "Aviso legal",
    "legal_privacy": "Política de privacidade",
    "legal_cookies": "Cookies"
  },
  "nl": {
    "meta_title": "Nurdug AG - Vastgoedholding, Berlijn",
    "meta_description": "Nurdug AG is een in Berlijn gevestigde holding die zich richt op langetermijneigendom van onroerend goed, verantwoorde verhuur en duurzame waarde.",
    "nav_firm": "Het bedrijf",
    "nav_focus": "Focus",
    "nav_approach": "Benadering",
    "nav_distinction": "Profiel",
    "nav_contact": "Contact",
    "hero_eyebrow": "Vastgoedholding · Berlijn",
    "hero_title": "Nurdug AG",
    "hero_tagline": "Een holding gebouwd voor de lange termijn",
    "hero_sub": "Onroerend goed is geen kortetermijnpositie. Het is een substantieel actief - zorgvuldig beheerd, verantwoord verhuurd, ontwikkeld met geduld.",
    "firm_eyebrow": "HET BEDRIJF",
    "firm_title": "Substantie boven speculatie",
    "firm_p1": "Nurdug AG is een holding die zich richt op onroerend goed en langetermijnbeheer van huurvastgoed. Ons commerciële accent ligt op het zorgvuldige eigendom, het beheer en de duurzame ontwikkeling van substantiële vastgoedactiva.",
    "firm_p2": "Ons begrip van onroerend goed wordt gevormd door continuïteit, substantie en verantwoordelijkheid. Wij zien onroerend goed niet als een kortetermijnmarktpositie. Wij zien het als een reëel actief van blijvende betekenis - de waarde ervan wordt niet bepaald door het marktritme, maar door de kwaliteit, de bruikbaarheid, de verdienkracht en het vermogen om te blijven bestaan.",
    "firm_p3": "Als holding biedt Nurdug AG het structurele kader voor de ordelijke sturing van haar onroerendgoedactiviteiten. Strategisch toezicht wordt gecombineerd met economische discipline, zodat activa worden beheerd met de zorgvuldigheid en lange horizon die het werk vereist. Behoud van waarde, stabiliteit en vooruitkijkende ontwikkeling staan centraal.",
    "focus_eyebrow": "ONZE FOCUS",
    "focus_title": "Duidelijk gedefinieerd. Bewust smal.",
    "focus_p1": "De activiteit van Nurdug AG is bewust smal. Wij concentreren ons op onroerend goed en professionele verhuur, op gezond langetermijnbeheer.",
    "focus_p2": "Bij de selectie en sturing van vastgoedbezit geven wij gewicht aan kwaliteit, locatie, substantie en langetermijnhoudbaarheid. Wat voor ons beslissend is, is niet de kortetermijnmarktbeweging, maar de duurzame geschiktheid van een actief, stabiele gebruiksvooruitzichten en een veerkrachtige economische basis.",
    "focus_p3": "In huurbeheer streven wij een kalme, professionele, verantwoordelijke aanpak na. Het doel is een marktconforme, betrouwbare operatie die de langetermijnwaarde van het onroerend goed veiligstelt en solide, duurzame rendementen genereert.",
    "approach_eyebrow": "ONZE BENADERING",
    "approach_title": "Vijf principes",
    "approach_intro": "Het gedrag van Nurdug AG berust op een instelling die klassiek ondernemersdenken combineert met onroerendgoeddiscipline.",
    "approach_1_title": "Lange termijn",
    "approach_1_body": "Wij denken niet in korte cycli, maar in duurzame perioden. Onze zorg is de aanhoudende bescherming en ontwikkeling van onroerendgoedwaarde.",
    "approach_2_title": "Substantie",
    "approach_2_body": "Wij concentreren ons op activa met echte kwaliteit en blijvende relevantie. Continuïteit weegt zwaarder voor ons dan kortetermijndynamiek.",
    "approach_3_title": "Zorg en structuur",
    "approach_3_body": "Als holding handelen wij met duidelijke structuren, ordelijke besluitvorming en een hoge standaard van economische discipline en verantwoordelijkheid.",
    "approach_4_title": "Betrouwbaar beheer",
    "approach_4_body": "De verhuur van onze eigendommen gaat gepaard met oordeel, marktkennis en operationele zorg. Behoud van waarde, kwaliteit van gebruik en duurzame verdienkracht staan op de voorgrond.",
    "approach_5_title": "Verantwoordelijkheid voor waarde",
    "approach_5_body": "Wij begrijpen de omgang met onroerendgoedkapitaal als een blijvende verplichting. Het behoud van waarde, de ontwikkeling ervan op een ordelijke manier en de versterking ervan op lange termijn is de kern van onze identiteit.",
    "distinction_eyebrow": "WAT ONS ONDERSCHEIDT",
    "distinction_title": "Rust, helderheid, continuïteit",
    "distinction_p1": "Nurdug AG staat voor een vorm van bedrijfsvoering die wordt gekenmerkt door rust, helderheid en continuïteit. Wij volgen geen kortetermijnmarktdenken en geen opportunistische benadering. Onze kracht ligt in de concentratie op wat ertoe doet: substantieel vastgoed, professionele verhuur, ordelijke sturing en een duurzaam waardebegrip.",
    "distinction_p2": "Deze houding is de basis van stabiliteit en betrouwbaarheid. Zij stelt ons in staat om onroerendgoedkapitaal niet alleen te houden, maar ook om het met voorzichtigheid te leiden en het in de loop der tijd te versterken, zowel in zijn substantie als in zijn verdienkracht.",
    "self_eyebrow": "ONZE IDENTITEIT",
    "self_title": "Een holding met statuur",
    "self_p1": "Nurdug AG ziet zichzelf als een holding met een duidelijke en blijvende norm. Wij combineren economische rationaliteit met een fijn gevoel voor kwaliteit, structuur en duurzaamheid. Ons doel is om vastgoedkapitaal binnen een ordelijk en verantwoord kader te beheren en zo een veerkrachtige basis voor langetermijnwaarde te bieden.",
    "closing": "Nurdug AG staat voor substantiegericht onroerendgoedeigendom, verantwoorde verhuur en langetermijnwaarde.",
    "contact_eyebrow": "CONTACT",
    "contact_title": "Berlijn",
    "contact_intro": "Voor zakelijke vragen zijn wij graag direct bereikbaar.",
    "contact_address_label": "GEREGISTREERD KANTOOR",
    "contact_address": "Goethestraße 49, 12305 Berlijn, Duitsland",
    "contact_email_label": "E-MAIL",
    "contact_phone_label": "TELEFOON",
    "footer_tagline": "Vastgoedholding · Berlijn",
    "footer_legal": "Nurdug AG, geregistreerd in Berlijn. Alle rechten voorbehouden.",
    "legal_imprint": "Juridische kennisgeving",
    "legal_privacy": "Privacybeleid",
    "legal_cookies": "Cookies"
  },
  "pl": {
    "meta_title": "Nurdug AG - Spółka holdingowa nieruchomości, Berlin",
    "meta_description": "Nurdug AG to berlińska spółka holdingowa specjalizująca się w długoterminowym posiadaniu nieruchomości, odpowiedzialnym zarządzaniu najmem oraz trwałym tworzeniu wartości.",
    "nav_firm": "Firma",
    "nav_focus": "Skupienie",
    "nav_approach": "Podejście",
    "nav_distinction": "Profil",
    "nav_contact": "Kontakt",
    "hero_eyebrow": "Spółka holdingowa nieruchomości · Berlin",
    "hero_title": "Nurdug AG",
    "hero_tagline": "Holding stworzony dla długiej perspektywy",
    "hero_sub": "Nieruchomości to nie krótkoterminowa pozycja. To poważny aktyw - posiadany z troską, wynajmowany z odpowiedzialnością, rozwijany z cierpliwością.",
    "firm_eyebrow": "FIRMA",
    "firm_title": "Substancja ponad spekulację",
    "firm_p1": "Nurdug AG to spółka holdingowa specjalizująca się w nieruchomościach i długoterminowym zarządzaniu najmem nieruchomości. Nasze podejście biznesowe opiera się na cierpliwym posiadaniu, starannym zarządzaniu i trwałym rozwoju poważnych aktywów nieruchomościowych.",
    "firm_p2": "Nasze rozumienie nieruchomości kształtuje się przez ciągłość, substancję i odpowiedzialność. Nie traktujemy nieruchomości jako krótkoterminowej pozycji rynkowej. Traktujemy je jako poważny aktyw o trwałej wartości - jej wartość przejawia się nie w rytmie rynku, ale w jakości, użyteczności, potencjale zarobkowym i zdolności do trwania.",
    "firm_p3": "Jako spółka holdingowa, Nurdug AG zapewnia ramy strukturalne dla uporządkowanego prowadzenia działalności nieruchomościowej. Nadzór strategiczny jest połączony z dyscypliną ekonomiczną, dzięki czemu aktywa są zarządzane z troską i długą perspektywą, której wymaga praca. Zachowanie wartości, stabilność i przyszłościowy rozwój znajdują się w centrum.",
    "focus_eyebrow": "NASZE SKUPIENIE",
    "focus_title": "Jasno określone. Celowo wąskie.",
    "focus_p1": "Działalność Nurdug AG jest celowo wąska. Koncentrujemy się na nieruchomościach i ich profesjonalnym najmie, na solidnym długoterminowym zarządzaniu.",
    "focus_p2": "Wybierając i zarządzając portfelem nieruchomości, ważymy jakość, lokalizację, substancję i długoterminową stabilność. Decyduje dla nas nie krótkoterminowy ruch rynku, lecz trwała przydatność aktywa, stabilne perspektywy użytkowania i odporna podstawa ekonomiczna.",
    "focus_p3": "W zarządzaniu najmem kierujemy się spokojnym, profesjonalnym i odpowiedzialnym podejściem. Celem jest odpowiednia dla rynku, niezawodna operacja, która zabezpiecza długoterminową wartość nieruchomości i generuje solidne, trwałe zwroty.",
    "approach_eyebrow": "NASZE PODEJŚCIE",
    "approach_title": "Pięć zasad",
    "approach_intro": "Postępowanie Nurdug AG opiera się na nastawieniu, które łączy klasyczne myślenie przedsiębiorcze z dyscypliną nieruchomości.",
    "approach_1_title": "Długie horyzonty",
    "approach_1_body": "Nie myślimy w krótkich cyklach, ale w trwałych okresach. Naszą troską jest trwała ochrona i rozwój wartości nieruchomości.",
    "approach_2_title": "Substancja",
    "approach_2_body": "Koncentrujemy się na aktywach o prawdziwej jakości i trwałym znaczeniu. Ciągłość jest dla nas ważniejsza niż krótkoterminowy pęd.",
    "approach_3_title": "Troska i struktura",
    "approach_3_body": "Jako spółka holdingowa działamy z jasnymi strukturami, uporządkowanymi ścieżkami decyzyjnymi oraz wysokim standardem dyscypliny ekonomicznej i odpowiedzialności.",
    "approach_4_title": "Niezawodne zarządzanie",
    "approach_4_body": "Oddawanie naszych nieruchomości w najem odbywa się z osądem, znajomością rynku i starannym zarządzaniem. Zachowanie wartości, jakość użytkowania i trwała siła zarobkowa znajdują się na pierwszym planie.",
    "approach_5_title": "Odpowiedzialność za wartość",
    "approach_5_body": "Rozumiemy zarządzanie kapitałem nieruchomości jako trwałe zobowiązanie. Zachowanie wartości, rozwój w uporządkowany sposób i umocnienie jej na dłuższą metę jest istotą naszej tożsamości.",
    "distinction_eyebrow": "CO NAS WYRÓŻNIA",
    "distinction_title": "Spokój, klarowność, ciągłość",
    "distinction_p1": "Nurdug AG reprezentuje formę praktyki biznesowej charakteryzującą się spokojem, klarownością i ciągłością. Nie podążamy za krótkoterminowym myśleniem rynkowym ani oportunistycznym podejściem. Nasza siła leży w koncentracji na tym, co ważne: poważne nieruchomości, profesjonalny najem, uporządkowane zarządzanie i trwałe rozumienie wartości.",
    "distinction_p2": "Ta postawa jest fundamentem stabilności i niezawodności. Pozwala to nie tylko na posiadanie kapitału nieruchomości, ale również na jego roztropne prowadzenie i umacnianie z czasem zarówno w substancji, jak i w potencjale zarobkowym.",
    "self_eyebrow": "NASZA TOŻSAMOŚĆ",
    "self_title": "Holding z renomą",
    "self_p1": "Nurdug AG postrzega siebie jako holding o jasnym i trwałym standardzie. Łączymy racjonalność ekonomiczną z wyczuciem jakości, struktury i trwałości. Naszym celem jest prowadzenie kapitału nieruchomościowego w uporządkowanych i odpowiedzialnych ramach, zapewniając tym samym odporną podstawę dla długoterminowej wartości.",
    "closing": "Nurdug AG reprezentuje zorientowaną na substancję własność nieruchomości, odpowiedzialny najem i długoterminową wartość.",
    "contact_eyebrow": "KONTAKT",
    "contact_title": "Berlin",
    "contact_intro": "Na zapytania biznesowe odpowiadamy bezpośrednio.",
    "contact_address_label": "ADRES REJESTRACYJNY",
    "contact_address": "Goethestraße 49, 12305 Berlin, Niemcy",
    "contact_email_label": "E-MAIL",
    "contact_phone_label": "TELEFON",
    "footer_tagline": "Spółka holdingowa nieruchomości · Berlin",
    "footer_legal": "Nurdug AG, zarejestrowana w Berlinie. Wszelkie prawa zastrzeżone.",
    "legal_imprint": "Informacje prawne",
    "legal_privacy": "Polityka prywatności",
    "legal_cookies": "Cookies"
  },
  "ru": {
    "meta_title": "Nurdug AG - Холдинг по недвижимости, Берлин",
    "meta_description": "Nurdug AG - берлинская холдинговая компания, ориентированная на долгосрочное владение недвижимостью, ответственную сдачу в аренду и сохранение стоимости.",
    "nav_firm": "Компания",
    "nav_focus": "Фокус",
    "nav_approach": "Подход",
    "nav_distinction": "Профиль",
    "nav_contact": "Контакты",
    "hero_eyebrow": "Холдинг по недвижимости · Берлин",
    "hero_title": "Nurdug AG",
    "hero_tagline": "Холдинг, выстроенный на длительную перспективу",
    "hero_sub": "Недвижимость не является скоротечной рыночной позицией. Это реальный актив - удерживаемый с заботой, сдаваемый в аренду с ответственностью, развиваемый с терпением.",
    "firm_eyebrow": "КОМПАНИЯ",
    "firm_title": "Основательность, а не спекуляция",
    "firm_p1": "Nurdug AG - холдинговая компания, сосредоточенная на рынке недвижимости и сдаче объектов в аренду. Предпринимательский замысел компании опирается на терпеливое владение, тщательное управление и устойчивое развитие содержательного портфеля недвижимости.",
    "firm_p2": "Наше понимание недвижимости определяется преемственностью, основательностью и ответственностью. Мы рассматриваем недвижимость не как краткосрочную рыночную позицию, а как реальный актив непреходящего значения. Её ценность выражается не в переменчивом такте рынка, но в качестве, в пригодности к использованию, в способности приносить доход и в способности сохраняться во времени.",
    "firm_p3": "Как холдинг, Nurdug AG задаёт структурные рамки для упорядоченного ведения своей деятельности в сфере недвижимости. В этих рамках стратегическое видение соединяется с экономической дисциплиной и обеспечивается управление активами со всей подобающей тщательностью, ясностью и долгосрочностью. В центре стоят не волатильность и оппортунизм, а сохранение стоимости, стабильность и предусмотрительное развитие.",
    "focus_eyebrow": "НАШ ФОКУС",
    "focus_title": "Чёткий контур. Намеренно узкий.",
    "focus_p1": "Деятельность Nurdug AG намеренно очерчена узко. Мы сосредоточены на недвижимости, её профессиональной сдаче в аренду и устойчивом управлении.",
    "focus_p2": "При выборе и управлении портфелем недвижимости мы придаём значение качеству, местоположению, основательности и долгосрочной состоятельности. Для нас решающим является не мимолётное движение рынка, но устойчивая пригодность объекта, стабильные перспективы его использования и надёжная хозяйственная основа.",
    "focus_p3": "В управлении арендой мы придерживаемся сдержанного, профессионального и ответственного подхода. Цель - рыночно обоснованное и надёжное хозяйствование, обеспечивающее долгосрочную стоимость объекта и позволяющее получать основательные и устойчивые доходы.",
    "approach_eyebrow": "НАШ ПОДХОД",
    "approach_title": "Пять принципов",
    "approach_intro": "Действия Nurdug AG основаны на установке, соединяющей классическое предпринимательское мышление с дисциплиной, присущей сфере недвижимости.",
    "approach_1_title": "Долгий горизонт",
    "approach_1_body": "Мы мыслим не короткими циклами, а устойчивыми периодами. Наш интерес - сохранение и развитие ценности недвижимости на долгий срок.",
    "approach_2_title": "Основательность",
    "approach_2_body": "Мы сосредотачиваемся на активах реального качества и непреходящей значимости. Преемственность для нас весомее краткосрочной динамики.",
    "approach_3_title": "Тщательность и структура",
    "approach_3_body": "Как холдинг мы руководствуемся ясными структурами и упорядоченными путями принятия решений, придерживаясь высоких требований к хозяйственной дисциплине и ответственности.",
    "approach_4_title": "Надёжное управление",
    "approach_4_body": "Сдача наших объектов в аренду совершается с чувством меры, знанием рынка и операционной тщательностью. На переднем плане - сохранение стоимости, качество использования и устойчивая доходность.",
    "approach_5_title": "Ответственность за ценность",
    "approach_5_body": "Обращение с недвижимостью мы понимаем как обязанность длительного характера. Сохранять ценности, развивать их упорядоченно и укреплять в долгосрочной перспективе - суть нашей идентичности.",
    "distinction_eyebrow": "ЧТО НАС ОТЛИЧАЕТ",
    "distinction_title": "Спокойствие, ясность, постоянство",
    "distinction_p1": "Nurdug AG представляет форму предпринимательского действия, отмеченную спокойствием, ясностью и постоянством. Мы не следуем ни краткосрочному рыночному мышлению, ни оппортунистическому подходу. Наша сила - в сосредоточенности на главном: содержательная недвижимость, профессиональная сдача в аренду, упорядоченное руководство и долгосрочное понимание ценности.",
    "distinction_p2": "Эта установка задаёт основу стабильности и надёжности. Она позволяет не только удерживать недвижимое имущество, но и вести его с осмотрительностью, укрепляя со временем как его основательность, так и его доходность.",
    "self_eyebrow": "НАША ИДЕНТИЧНОСТЬ",
    "self_title": "Холдинг с ясной установкой",
    "self_p1": "Nurdug AG понимает себя как холдинг с ясной, рассчитанной на длительный срок установкой. Мы соединяем хозяйственный разум с тонким чувством качества, структуры и устойчивости. Наша цель - вести недвижимое имущество в упорядоченных и ответственных рамках и создавать тем самым надёжное основание долгосрочной ценностной устойчивости.",
    "closing": "Nurdug AG - содержательное владение недвижимостью, ответственная сдача в аренду и долгосрочная устойчивость стоимости.",
    "contact_eyebrow": "КОНТАКТЫ",
    "contact_title": "Берлин",
    "contact_intro": "По деловым запросам мы будем рады ответить напрямую.",
    "contact_address_label": "ЮРИДИЧЕСКИЙ АДРЕС",
    "contact_address": "Goethestraße 49, 12305 Берлин, Германия",
    "contact_email_label": "ЭЛЕКТРОННАЯ ПОЧТА",
    "contact_phone_label": "ТЕЛЕФОН",
    "footer_tagline": "Холдинг по недвижимости · Берлин",
    "footer_legal": "Nurdug AG, зарегистрирована в Берлине. Все права защищены.",
    "legal_imprint": "Правовая информация",
    "legal_privacy": "Политика конфиденциальности",
    "legal_cookies": "Cookie"
  },
  "tr": {
    "meta_title": "Nurdug AG - Gayrimenkul Holding, Berlin",
    "meta_description": "Nurdug AG, Berlin merkezli bir holding şirketidir. Uzun vadeli gayrimenkul mülkiyeti, sorumlu kiralama ve dayanıklı değer üzerine odaklanmıştır.",
    "nav_firm": "Şirket",
    "nav_focus": "Odak",
    "nav_approach": "Yaklaşım",
    "nav_distinction": "Profil",
    "nav_contact": "İletişim",
    "hero_eyebrow": "Gayrimenkul Holding · Berlin",
    "hero_title": "Nurdug AG",
    "hero_tagline": "Uzun vadeye yönelik bir holding",
    "hero_sub": "Gayrimenkul kısa vadeli bir pozisyon değildir. Özenle tutulan, sorumlu bir şekilde kiralanan ve sabırla geliştirilen önemli bir varlıktır.",
    "firm_eyebrow": "ŞİRKET",
    "firm_title": "Spekülasyon yerine esas",
    "firm_p1": "Nurdug AG, gayrimenkul ve uzun vadeli kiralık mülk yönetimine odaklanan bir holding şirketidir. Ticari vurgumuz, sabırlı mülkiyet, özenli yönetim ve önemli mülk varlıklarının dayanıklı geliştirilmesi üzerinedir.",
    "firm_p2": "Gayrimenkul anlayışımızı süreklilik, esas ve sorumluluk şekillendirir. Mülkü kısa vadeli bir piyasa pozisyonu olarak görmüyoruz. Onu kalıcı önem taşıyan gerçek bir varlık olarak görüyoruz - değeri piyasanın ritminde değil, kalitesinde, kullanılabilirliğinde, kazanç gücünde ve dayanma kapasitesinde kendini gösterir.",
    "firm_p3": "Bir holding şirketi olarak Nurdug AG, gayrimenkul faaliyetlerinin düzenli yönlendirilmesi için yapısal bir çerçeve sağlar. Stratejik gözetim, ekonomik disiplinle birleştirilir, böylece varlıklar gereken özen ve uzun vadeli çalışma ile yönetilir. Değerin korunması, istikrar ve ileriye dönük geliştirme merkezde yer alır.",
    "focus_eyebrow": "ODAK NOKTAMIZ",
    "focus_title": "Net bir şekilde tanımlanmış. Bilerek dar.",
    "focus_p1": "Nurdug AG'nin faaliyetleri bilerek dardır. Gayrimenkul ve profesyonel kiralama, sağlam uzun vadeli yönetim üzerine odaklanıyoruz.",
    "focus_p2": "Gayrimenkul portföyünün seçimi ve yönlendirilmesinde kaliteyi, konumu, esası ve uzun vadeli sürdürülebilirliği tartarız. Bizim için belirleyici olan kısa vadeli piyasa hareketi değil, varlığın kalıcı uygunluğu, istikrarlı kullanım perspektifi ve dirençli ekonomik temeldir.",
    "focus_p3": "Kiralama yönetiminde, sakin, profesyonel ve sorumlu bir yaklaşım izliyoruz. Amaç, piyasaya uygun, güvenilir bir operasyon sağlayarak mülkün uzun vadeli değerini güvence altına almak ve sağlam, dayanıklı getiriler elde etmektir.",
    "approach_eyebrow": "YAKLAŞIMIMIZ",
    "approach_title": "Beş ilke",
    "approach_intro": "Nurdug AG'nin tutumu, klasik girişimci düşünceyi gayrimenkul disipliniyle birleştiren bir yaklaşım üzerine dayanır.",
    "approach_1_title": "Uzun vadeler",
    "approach_1_body": "Kısa döngülerde değil, dayanıklı dönemlerde düşünüyoruz. Gayrimenkul değerinin sürekli korunması ve geliştirilmesi bizim endişemizdir.",
    "approach_2_title": "Esas",
    "approach_2_body": "Gerçek kalite ve uzun süreli öneme sahip varlıklara odaklanıyoruz. Süreklilik, kısa vadeli momentumdan daha ağır basar.",
    "approach_3_title": "Özen ve yapı",
    "approach_3_body": "Bir holding şirketi olarak, net yapılar, düzenli karar yolları ve yüksek ekonomik disiplin ve hesap verebilirlik standartlarıyla hareket ederiz.",
    "approach_4_title": "Güvenilir yönetim",
    "approach_4_body": "Mülklerimizin kiralanması, muhakeme, piyasa bilgisi ve operasyonel özenle ilerler. Değerin korunması, kullanım kalitesi ve dayanıklı kazanç gücü ön plandadır.",
    "approach_5_title": "Değer için sorumluluk",
    "approach_5_body": "Gayrimenkul sermayesinin yönetimini uzun süreli bir yükümlülük olarak anlıyoruz. Değeri korumak, düzenli bir şekilde geliştirmek ve uzun vadeli güçlendirmek, kimliğimizin özüdür.",
    "distinction_eyebrow": "BİZİ AYIRAN ŞEY",
    "distinction_title": "Sakinlik, açıklık, süreklilik",
    "distinction_p1": "Nurdug AG, sakinlik, açıklık ve süreklilik ile öne çıkan bir iş yapış biçimini temsil eder. Kısa vadeli piyasa düşüncesi veya fırsatçı bir yaklaşım izlemiyoruz. Gücümüz, asıl önemli olana odaklanmamızda yatar: nitelikli gayrimenkul, profesyonel kiralama, düzenli yönetim ve uzun vadeli bir değer anlayışı.",
    "distinction_p2": "Bu duruş, istikrar ve güvenilirliğin temelini oluşturur. Gayrimenkul sermayesinin yalnızca tutulmasını değil, basiretle yönetilmesini ve zaman içinde hem esasında hem kazanç gücünde güçlendirilmesini olanaklı kılar.",
    "self_eyebrow": "KİMLİĞİMİZ",
    "self_title": "Dayanıklı bir holding",
    "self_p1": "Nurdug AG, kendisini açık ve kalıcı bir ölçüye sahip bir holding olarak anlar. Ekonomik aklı; kalite, yapı ve sürdürülebilirlik için ince bir anlayışla birleştiririz. Amacımız, gayrimenkul sermayesini düzenli ve sorumlu bir çerçeve içinde yönetmek ve böylece uzun vadeli değer için dirençli bir temel sunmaktır.",
    "closing": "Nurdug AG; esasa yönelik gayrimenkul mülkiyetini, sorumlu kiralamayı ve uzun vadeli değeri temsil eder.",
    "contact_eyebrow": "İLETİŞİM",
    "contact_title": "Berlin",
    "contact_intro": "İş sorguları için doğrudan yanıt vermekten memnuniyet duyuyoruz.",
    "contact_address_label": "KAYITLI OFİS",
    "contact_address": "Goethestraße 49, 12305 Berlin, Almanya",
    "contact_email_label": "E-POSTA",
    "contact_phone_label": "TELEFON",
    "footer_tagline": "Gayrimenkul Holding · Berlin",
    "footer_legal": "Nurdug AG, Berlin'de kayıtlı. Tüm haklar saklıdır.",
    "legal_imprint": "Hukuki Bilgi",
    "legal_privacy": "Gizlilik Politikası",
    "legal_cookies": "Çerezler"
  },
  "zh": {
    "meta_title": "Nurdug AG - 柏林不动产控股公司",
    "meta_description": "Nurdug AG 系柏林不动产控股公司,专注于长期持有、负责任租赁以及价值的持久稳固。",
    "nav_firm": "公司",
    "nav_focus": "焦点",
    "nav_approach": "理念",
    "nav_distinction": "特色",
    "nav_contact": "联系",
    "hero_eyebrow": "不动产控股 · 柏林",
    "hero_title": "Nurdug AG",
    "hero_tagline": "为长期而设的控股公司",
    "hero_sub": "不动产并非短暂的市场头寸,而是真实资产 - 以审慎持有、以责任出租、以耐心经营。",
    "firm_eyebrow": "公 司",
    "firm_title": "以实质为本,非投机为务",
    "firm_p1": "Nurdug AG 是一家专注于不动产及长期租赁的控股公司。其经营要义在于耐心持有、审慎管理、稳健发展,以铸就有分量的不动产组合。",
    "firm_p2": "我们对不动产的理解,由连续性、实质与责任所塑造。我们不将不动产视作短暂的市场头寸,而视之为具有持久意义的真实资产。其价值不显现于市场变幻之节奏,而显现于其品质、其可用性、其收益能力,以及其在时间中持守的本领。",
    "firm_p3": "作为控股公司,Nurdug AG 为其不动产活动提供有序经营的结构框架。战略眼光与经济纪律在此相会,使资产得以以事业所需的审慎、清晰与长远之心加以经营。居于核心的不是波动与机会主义,而是价值的保全、稳定与前瞻之发展。",
    "focus_eyebrow": "我 们 的 焦 点",
    "focus_title": "界限分明,刻意收束",
    "focus_p1": "Nurdug AG 的业务范围刻意收束。我们专注于不动产、其专业租赁以及可持续的经营。",
    "focus_p2": "在不动产组合的遴选与管理中,我们重视品质、区位、实质与长期可行性。决定我们取舍的不是市场的一时动静,而是物业的持久适用性、稳定的使用前景与稳固的经济基础。",
    "focus_p3": "在租赁经营中,我们奉行从容、专业、负责的方式。我们追求合乎市场、可资依赖的经营,使物业的长期价值得以维护,并由此产生稳健而持久的收益。",
    "approach_eyebrow": "我 们 的 理 念",
    "approach_title": "五项原则",
    "approach_intro": "Nurdug AG 的作为,源自一种将古典企业经营思想与不动产事业应有之纪律相结合的取态。",
    "approach_1_title": "长期视野",
    "approach_1_body": "我们不以短周期思考,而以可资承受的时段为念。我们关心的是不动产价值的可持续维护与发展。",
    "approach_2_title": "实质取向",
    "approach_2_body": "我们专注于具备真实品质与持久意义的资产。对我们而言,连续性比一时的势头更为厚重。",
    "approach_3_title": "审慎与有序",
    "approach_3_body": "作为控股公司,我们以清晰的结构、有序的决策路径,以及对经济纪律与责任的高度要求行事。",
    "approach_4_title": "可靠之经营",
    "approach_4_body": "我们的物业租赁,以分寸感、市场知识与运营细致为本。价值的保全、使用的品质与持久的盈利能力居于前位。",
    "approach_5_title": "对价值的担当",
    "approach_5_body": "我们视不动产财富的管理为长期的承担。守护价值、有序地发展价值、长久地巩固价值,乃我们身份认同的核心。",
    "distinction_eyebrow": "我 们 的 特 色",
    "distinction_title": "从容、清晰、持恒",
    "distinction_p1": "Nurdug AG 体现着一种以从容、清晰与持恒为标的经营形态。我们不随短期市场之思,不取机会主义之径。我们的力量,在于专注于要紧之处:有分量的不动产、专业的租赁、有序的管理,以及对价值的长久理解。",
    "distinction_p2": "此种立场,乃稳定与可靠的基石。它使不动产财富不仅得以保有,更得以稳妥地引领,并在其实质与其盈利能力上,随时日而渐得强固。",
    "self_eyebrow": "自 我 定 位",
    "self_title": "一家取向清晰的控股公司",
    "self_p1": "Nurdug AG 自视为一家取向清晰、立于长远的控股公司。我们将经济之理性,与对品质、结构与可持续性之细致体察相互结合。我们之旨,是在有序而负责的框架中管理不动产财富,并由此为价值之长久稳固铺就稳固之基。",
    "closing": "Nurdug AG 代表以实质为本的不动产持有、负责任的租赁,以及价值的长久稳固。",
    "contact_eyebrow": "联 系",
    "contact_title": "柏林",
    "contact_intro": "对于业务事宜,我们乐于直接回覆。",
    "contact_address_label": "注册地址",
    "contact_address": "Goethestraße 49, 12305 柏林, 德国",
    "contact_email_label": "电子邮件",
    "contact_phone_label": "电话",
    "footer_tagline": "不动产控股 · 柏林",
    "footer_legal": "Nurdug AG,注册于柏林。版权所有。",
    "legal_imprint": "法律声明",
    "legal_privacy": "隐私政策",
    "legal_cookies": "Cookie"
  },
  "zh-TW": {
    "meta_title": "Nurdug AG - 柏林不動產控股公司",
    "meta_description": "Nurdug AG 係柏林不動產控股公司,專注於長期持有、負責任租賃以及價值之持久穩固。",
    "nav_firm": "公司",
    "nav_focus": "焦點",
    "nav_approach": "理念",
    "nav_distinction": "特色",
    "nav_contact": "聯繫",
    "hero_eyebrow": "不動產控股 · 柏林",
    "hero_title": "Nurdug AG",
    "hero_tagline": "為長期而設的控股公司",
    "hero_sub": "不動產並非短暫的市場頭寸,而是真實資產 - 以審慎持有、以責任出租、以耐心經營。",
    "firm_eyebrow": "公 司",
    "firm_title": "以實質為本,非投機為務",
    "firm_p1": "Nurdug AG 係一家專注於不動產市場及不動產租賃的控股公司。其經營要義在於持有耐心、管理審慎、發展穩健,以鑄就有份量的不動產組合。",
    "firm_p2": "我們對不動產的理解,由連續性、實質與責任所塑造。我們不將不動產視作短暫的市場頭寸,而視之為具有持久意義的真實資產。其價值不顯現於市場變幻之節奏,而顯現於其品質、其可用性、其收益能力,以及其在時間中持守的本領。",
    "firm_p3": "作為控股公司,Nurdug AG 為其不動產活動提供有序經營的結構框架。戰略眼光與經濟紀律在此相會,使資產得以以事業所需之審慎、清晰與長遠之心加以經營。居於核心的不是波動與機會主義,而是價值的保全、穩定與前瞻之發展。",
    "focus_eyebrow": "我 們 的 焦 點",
    "focus_title": "界限分明,刻意收束",
    "focus_p1": "Nurdug AG 之業務範圍刻意收束。我們專注於不動產、其專業租賃以及可持續之經營。",
    "focus_p2": "於不動產組合之遴選與管理中,我們重視品質、區位、實質與長期可行性。決定我們取捨者,不是市場之一時動靜,而是物業之持久適用性、穩定之使用前景與穩固之經濟基礎。",
    "focus_p3": "於租賃經營中,我們奉行從容、專業、負責之方式。我們追求合乎市場、可資依賴之經營,使物業之長期價值得以維護,並由此產生穩健而持久之收益。",
    "approach_eyebrow": "我 們 的 理 念",
    "approach_title": "五項原則",
    "approach_intro": "Nurdug AG 之作為,源自一種將古典企業經營思想與不動產事業應有之紀律相結合的取態。",
    "approach_1_title": "長期視野",
    "approach_1_body": "我們不以短週期思考,而以可資承受之時段為念。我們關心者,乃不動產價值之可持續維護與發展。",
    "approach_2_title": "實質取向",
    "approach_2_body": "我們專注於具備真實品質與持久意義之資產。對我們而言,連續性較一時之勢頭更為厚重。",
    "approach_3_title": "審慎與有序",
    "approach_3_body": "作為控股公司,我們以清晰之結構、有序之決策路徑,以及對經濟紀律與責任之高度要求行事。",
    "approach_4_title": "可靠之經營",
    "approach_4_body": "我們之物業租賃,以分寸感、市場知識與運營細緻為本。價值之保全、使用之品質與持久之盈利能力居於前位。",
    "approach_5_title": "對價值之擔當",
    "approach_5_body": "我們視不動產財富之管理為長期之承擔。守護價值、有序地發展價值、長久地鞏固價值,乃我們身份認同之核心。",
    "distinction_eyebrow": "我 們 的 特 色",
    "distinction_title": "從容、清晰、持恆",
    "distinction_p1": "Nurdug AG 體現著一種以從容、清晰與持恆為標之經營形態。我們不隨短期市場之思,不取機會主義之徑。我們之力量,在於專注於要緊之處:有份量之不動產、專業之租賃、有序之管理,以及對價值之長久理解。",
    "distinction_p2": "此種立場,乃穩定與可靠之基石。它使不動產財富不僅得以保有,更得以穩妥地引領,並在其實質與其盈利能力上,隨時日而漸得強固。",
    "self_eyebrow": "自 我 定 位",
    "self_title": "一家取向清晰之控股公司",
    "self_p1": "Nurdug AG 自視為一家取向清晰、立於長遠之控股公司。我們將經濟之理性,與對品質、結構與可持續性之細緻體察相互結合。我們之旨,是在有序而負責之框架中管理不動產財富,並由此為價值之長久穩固鋪就穩固之基。",
    "closing": "Nurdug AG 代表以實質為本之不動產持有、負責任之租賃,以及價值之長久穩固。",
    "contact_eyebrow": "聯 繫",
    "contact_title": "柏林",
    "contact_intro": "對於業務事宜,我們樂於直接回覆。",
    "contact_address_label": "註冊地址",
    "contact_address": "Goethestraße 49, 12305 柏林, 德國",
    "contact_email_label": "電子郵件",
    "contact_phone_label": "電話",
    "footer_tagline": "不動產控股 · 柏林",
    "footer_legal": "Nurdug AG,註冊於柏林。版權所有。",
    "legal_imprint": "法律聲明",
    "legal_privacy": "隱私政策",
    "legal_cookies": "Cookie"
  },
  "ja": {
    "meta_title": "Nurdug AG - ベルリンの不動産ホールディング",
    "meta_description": "Nurdug AG は、長期保有、責任ある賃貸、そして価値の持続を旨とするベルリンの不動産ホールディングである。",
    "nav_firm": "会社について",
    "nav_focus": "焦点",
    "nav_approach": "姿勢",
    "nav_distinction": "特質",
    "nav_contact": "連絡先",
    "hero_eyebrow": "不動産ホールディング · ベルリン",
    "hero_title": "Nurdug AG",
    "hero_tagline": "長期を見据えたホールディング",
    "hero_sub": "不動産は短期の市場ポジションではありません。実体ある資産として、丁寧に保有し、責任をもって賃貸し、忍耐をもって育てます。",
    "firm_eyebrow": "会 社 に つ い て",
    "firm_title": "投機ではなく実体を",
    "firm_p1": "Nurdug AG は、不動産市場および不動産の賃貸を事業の中心とするホールディング会社です。当社の経営上の重心は、実質ある不動産資産を辛抱強く保有し、丁寧に統御し、持続的に発展させることに置かれています。",
    "firm_p2": "不動産についての私たちの理解は、連続性・実体・責任の三つに形づくられています。不動産を短期の市場ポジションとしては捉えず、持続的な意義をもつ実在の資産と捉えます。その価値は、市場の移ろう拍子にではなく、品質・使用可能性・収益力・時を越えて存続しうる力のうちに現れるのです。",
    "firm_p3": "ホールディングとしての Nurdug AG は、不動産活動の整然たる運営のための構造的枠組を整えます。戦略的な見通しを経済的規律と結び合わせ、資産が然るべき入念さ・明晰さ・長期性をもって管理されることを確実にします。中心に据えられているのは変動や機会主義ではなく、価値の保全、安定、そして先を見越した発展です。",
    "focus_eyebrow": "当 社 の 焦 点",
    "focus_title": "明瞭な輪郭、意図された限定",
    "focus_p1": "Nurdug AG の事業は意図して明瞭に限定されています。私たちは不動産、その専門的な賃貸、そして持続的な運営に集中します。",
    "focus_p2": "不動産ポートフォリオの選定と運営にあたっては、品質・立地・実体・長期の成立性を重んじます。私たちにとって決定的なのは市場の一時の動きではなく、物件の持続的な適格性、使途見通しの安定性、そして経済基盤の堅牢さです。",
    "focus_p3": "賃貸運営においては、落ち着いた、専門的で責任ある姿勢を貫きます。目指すのは、市場に即した信頼できる運営であり、物件の長期価値を守り、堅実で持続的な収益を実現することです。",
    "approach_eyebrow": "当 社 の 姿 勢",
    "approach_title": "五つの原則",
    "approach_intro": "Nurdug AG の営みは、古典的な企業家的思考と不動産事業にふさわしい規律とを結び合わせる心構えに基づいています。",
    "approach_1_title": "長い時間軸",
    "approach_1_body": "私たちは短い周期ではなく、耐えうる時の長さで考えます。関心は、不動産価値の持続的な保護と発展にあります。",
    "approach_2_title": "実体志向",
    "approach_2_body": "実体ある品質と持続的な意義を有する資産に集中します。私たちにとっては、一時の勢いよりも連続性の方が重い意味をもちます。",
    "approach_3_title": "入念さと構造",
    "approach_3_body": "ホールディングとして、私たちは明瞭な構造、整然たる決定の道筋、そして経済的規律と責任への高い要請をもって行動します。",
    "approach_4_title": "信頼に足る運営",
    "approach_4_body": "物件の賃貸は、節度・市場についての知識・運営上の細心さをもって進められます。価値の保全、使用品質、持続的な収益力が前面に置かれます。",
    "approach_5_title": "価値への責任",
    "approach_5_body": "不動産財産の扱いを、長きにわたる務めと理解します。価値を保ち、整然と発展させ、長きにわたって強固にしていくことは、私たちの在り方の核にあります。",
    "distinction_eyebrow": "当 社 を 際 立 た せ る も の",
    "distinction_title": "静けさ、明晰、持続",
    "distinction_p1": "Nurdug AG が体現するのは、静けさ、明晰、そして持続に裏打ちされた企業行為の形です。私たちは短期の市場的思考にも、機会主義的な道にも従いません。私たちの強さは、肝要なものへの集中にあります。実体ある不動産、専門的な賃貸、整然たる経営、そして価値についての持続的な理解です。",
    "distinction_p2": "この姿勢こそが安定と信頼の基礎をなします。それは不動産財産を保有するにとどまらず、分別をもって導き、時の経過の中でその実体と収益力の双方を強くしていくことを可能にするのです。",
    "self_eyebrow": "在 り 方",
    "self_title": "志の明確なホールディング",
    "self_p1": "Nurdug AG は、明確で長きに据えた志をもつホールディングとして自らを捉えています。私たちは経済的な理性を、品質・構造・持続可能性への繊細な感受性と結び合わせます。私たちの目的は、不動産財産を整然とした責任ある枠組の中で運営し、それを通じて、長期的な価値の保持のための頑健な礎を築くことにあります。",
    "closing": "Nurdug AG は、実体を旨とする不動産保有、責任ある賃貸、そして長期的な価値の保持を体現します。",
    "contact_eyebrow": "連 絡 先",
    "contact_title": "ベルリン",
    "contact_intro": "ご業務に関するお問合せには、直接お返事いたします。",
    "contact_address_label": "登記所在地",
    "contact_address": "Goethestraße 49, 12305 ベルリン, ドイツ",
    "contact_email_label": "電子メール",
    "contact_phone_label": "電話",
    "footer_tagline": "不動産ホールディング · ベルリン",
    "footer_legal": "Nurdug AG(ベルリン登記)。無断複製・転載を禁じます。",
    "legal_imprint": "法的情報",
    "legal_privacy": "プライバシーポリシー",
    "legal_cookies": "Cookie"
  },
  "ko": {
    "meta_title": "Nurdug AG - 베를린 부동산 지주회사",
    "meta_description": "Nurdug AG는 장기 보유, 책임 있는 임대, 그리고 가치의 지속을 지향하는 베를린 소재 부동산 지주회사입니다.",
    "nav_firm": "회사",
    "nav_focus": "초점",
    "nav_approach": "원칙",
    "nav_distinction": "특성",
    "nav_contact": "연락",
    "hero_eyebrow": "부동산 지주회사 · 베를린",
    "hero_title": "Nurdug AG",
    "hero_tagline": "긴 안목으로 설계된 지주회사",
    "hero_sub": "부동산은 단기 시장 포지션이 아닙니다. 실체 있는 자산으로서 신중히 보유하고, 책임 있게 임대하며, 인내로써 일구어 갑니다.",
    "firm_eyebrow": "회 사",
    "firm_title": "투기가 아닌 실체",
    "firm_p1": "Nurdug AG는 부동산 시장과 부동산 임대를 중심으로 삼는 지주회사입니다. 그 경영의 무게중심은 가치 있는 부동산 자산을 끈기 있게 보유하고, 세심히 관리하며, 지속 가능하게 발전시키는 데 놓여 있습니다.",
    "firm_p2": "부동산에 대한 저희의 이해는 연속성, 실체, 그리고 책임이라는 세 축에 의해 다져져 있습니다. 부동산은 단기의 시장 포지션이 아니라, 지속적인 의미를 지니는 실체 자산으로 인식됩니다. 그 가치는 변화무쌍한 시장의 박자가 아니라, 품질, 사용 가능성, 수익력, 그리고 시간을 견뎌 내는 힘 속에서 드러납니다.",
    "firm_p3": "지주회사로서 Nurdug AG는 부동산 활동을 정연하게 이끌어 갈 구조적 틀을 마련합니다. 전략적 조망과 경제적 규율이 여기서 만나며, 자산이 사안이 요구하는 신중함과 명료함, 그리고 긴 시야로 운영되도록 보증합니다. 중심에 놓이는 것은 변동성이나 기회주의가 아니라, 가치의 보전, 안정, 그리고 앞을 내다보는 발전입니다.",
    "focus_eyebrow": "저희의 초점",
    "focus_title": "분명한 경계, 의도된 제한",
    "focus_p1": "Nurdug AG의 활동 범위는 의도된 대로 분명히 한정되어 있습니다. 저희는 부동산과 그 전문적 임대, 지속 가능한 운영에 집중합니다.",
    "focus_p2": "부동산 자산의 선정과 운영에 있어서 품질, 입지, 실체, 장기적 지속 가능성을 중요하게 봅니다. 저희를 결정짓는 것은 시장의 일시적 움직임이 아니라, 자산의 지속적 적합성, 사용 전망의 안정성, 그리고 경제적 기반의 견고함입니다.",
    "focus_p3": "임대 운영에서는 차분하고 전문적이며 책임 있는 태도를 견지합니다. 저희의 목표는 시장에 부합하고 신뢰할 만한 운영을 통해 부동산의 장기 가치를 지키고, 견실하고 지속적인 수익을 가능하게 하는 데 있습니다.",
    "approach_eyebrow": "저희의 원칙",
    "approach_title": "다섯 가지 원칙",
    "approach_intro": "Nurdug AG의 행위는 고전적 기업가적 사고를 부동산 사업에 걸맞은 규율과 결합하는 태도 위에 서 있습니다.",
    "approach_1_title": "긴 시야",
    "approach_1_body": "짧은 주기가 아니라 견디어낼 수 있는 시간의 길이로 생각합니다. 저희의 관심은 부동산 가치의 지속적 보호와 발전에 있습니다.",
    "approach_2_title": "실체 지향",
    "approach_2_body": "실제 품질과 지속적 의미를 갖는 자산에 집중합니다. 저희에게는 일시적 추동력보다 연속성이 더 무겁게 다가옵니다.",
    "approach_3_title": "신중함과 구조",
    "approach_3_body": "지주회사로서 저희는 분명한 구조, 정연한 결정 경로, 그리고 경제적 규율과 책임에 대한 높은 요구로써 행동합니다.",
    "approach_4_title": "믿을 수 있는 운영",
    "approach_4_body": "저희 부동산의 임대는 절제, 시장에 대한 지식, 운영상의 세심함으로 이루어집니다. 전면에 서는 것은 가치 보전, 사용 품질, 지속적 수익력입니다.",
    "approach_5_title": "가치에 대한 책임",
    "approach_5_body": "부동산 재산을 다루는 일을 장기적 의무로 이해합니다. 가치를 지키고, 정연하게 발전시키며, 긴 호흡으로 굳건히 만드는 것이 저희 자기이해의 핵심입니다.",
    "distinction_eyebrow": "저희를 구별 짓는 것",
    "distinction_title": "고요, 명료, 지속",
    "distinction_p1": "Nurdug AG는 고요함, 명료함, 그리고 지속성을 특징으로 하는 기업 활동의 한 형태를 대변합니다. 저희는 단기 시장 사고도, 기회주의적 접근도 따르지 않습니다. 저희의 강점은 핵심에 대한 집중에 있습니다. 실체 있는 부동산, 전문적인 임대, 정연한 지휘, 그리고 가치에 대한 지속적 이해가 그것입니다.",
    "distinction_p2": "이러한 자세가 안정과 신뢰의 토대를 이룹니다. 그것은 부동산 재산을 단지 보유하는 데에 그치지 않고, 분별 있게 이끌어 가며, 시간을 두고 그 실체와 수익력 양면에서 더욱 굳건히 만들어 가는 것을 가능하게 합니다.",
    "self_eyebrow": "자기이해",
    "self_title": "분명한 지향을 가진 지주회사",
    "self_p1": "Nurdug AG는 분명하고 장기적으로 설정된 지향을 품은 지주회사로 스스로를 이해합니다. 저희는 경제적 이성을 품질과 구조, 지속 가능성에 대한 섬세한 감각과 결합합니다. 저희의 목표는 부동산 재산을 정연하고 책임 있는 틀 안에서 이끌어, 가치의 장기적 견고함을 위한 단단한 토대를 마련하는 것입니다.",
    "closing": "Nurdug AG는 실체를 지향하는 부동산 보유, 책임 있는 임대, 그리고 가치의 장기적 지속을 대변합니다.",
    "contact_eyebrow": "연 락",
    "contact_title": "베를린",
    "contact_intro": "업무 관련 문의에는 기꺼이 직접 응답드립니다.",
    "contact_address_label": "등기 본점 소재지",
    "contact_address": "Goethestraße 49, 12305 베를린, 독일",
    "contact_email_label": "이메일",
    "contact_phone_label": "전화",
    "footer_tagline": "부동산 지주회사 · 베를린",
    "footer_legal": "Nurdug AG, 베를린 등기. 모든 권리 보유.",
    "legal_imprint": "법적 고지",
    "legal_privacy": "개인정보 처리방침",
    "legal_cookies": "쿠키"
  },
  "hi": {
    "meta_title": "Nurdug AG - बर्लिन स्थित रियल एस्टेट होल्डिंग",
    "meta_description": "Nurdug AG बर्लिन स्थित एक रियल एस्टेट होल्डिंग कंपनी है, जो दीर्घकालिक स्वामित्व, उत्तरदायी किरायेदारी तथा मूल्य की स्थायिता को समर्पित है।",
    "nav_firm": "कंपनी",
    "nav_focus": "केंद्र",
    "nav_approach": "दृष्टिकोण",
    "nav_distinction": "विशेषता",
    "nav_contact": "संपर्क",
    "hero_eyebrow": "रियल एस्टेट होल्डिंग · बर्लिन",
    "hero_title": "Nurdug AG",
    "hero_tagline": "दीर्घकालिक दृष्टि के लिए गठित एक होल्डिंग",
    "hero_sub": "अचल संपत्ति क्षणिक बाज़ार की स्थिति नहीं है। यह वास्तविक परिसंपत्ति है - सावधानी से धारित, उत्तरदायित्व से किराए पर दी गई, धैर्य से विकसित की गई।",
    "firm_eyebrow": "कंपनी",
    "firm_title": "तत्त्व, सट्टा नहीं",
    "firm_p1": "Nurdug AG रियल एस्टेट बाज़ार तथा अचल संपत्ति की किरायेदारी पर केन्द्रित एक होल्डिंग कंपनी है। इसका उद्यमशील आधार टिकाऊ संपत्तियों के धैर्यपूर्ण स्वामित्व, सावधानीपूर्ण संचालन और सतत विकास पर स्थित है।",
    "firm_p2": "अचल संपत्ति के विषय में हमारी समझ निरंतरता, तत्त्व और उत्तरदायित्व से निर्धारित है। हम संपत्ति को क्षणभंगुर बाज़ार स्थिति नहीं मानते, अपितु स्थायी महत्त्व की यथार्थ परिसंपत्ति मानते हैं। इसका मूल्य बाज़ार की बदलती लय में नहीं, बल्कि उसकी गुणवत्ता, उपयोग योग्यता, आय क्षमता और समय के साथ स्थिर रह सकने की शक्ति में प्रकट होता है।",
    "firm_p3": "होल्डिंग के रूप में Nurdug AG अपनी रियल एस्टेट गतिविधियों के सुव्यवस्थित संचालन के लिए संरचनात्मक ढाँचा प्रदान करती है। यह सामरिक दृष्टि को आर्थिक अनुशासन से जोड़ती है और यह सुनिश्चित करती है कि परिसंपत्तियों का प्रबंध विषय की माँग के अनुरूप सावधानी, स्पष्टता और दीर्घावधि से हो। केंद्र में अस्थिरता और अवसरवाद नहीं, अपितु मूल्य की रक्षा, स्थिरता और दूरदर्शी विकास खड़े हैं।",
    "focus_eyebrow": "हमारा केंद्र",
    "focus_title": "स्पष्ट परिधि, जानबूझकर सीमित",
    "focus_p1": "Nurdug AG का कार्यक्षेत्र जानबूझकर सीमित है। हम अचल संपत्ति, उसकी व्यावसायिक किरायेदारी और सतत प्रबंधन पर केन्द्रित हैं।",
    "focus_p2": "संपत्ति पोर्टफोलियो के चयन और संचालन में हम गुणवत्ता, स्थान, तत्त्व और दीर्घकालिक व्यवहार्यता को महत्त्व देते हैं। हमारे लिए निर्णायक बाज़ार का क्षणिक प्रवाह नहीं, बल्कि परिसंपत्ति की स्थायी उपयुक्तता, उपयोग की स्थिर संभावनाएँ तथा सुदृढ़ आर्थिक आधार है।",
    "focus_p3": "किराया प्रबंधन में हम शांत, व्यावसायिक और उत्तरदायी दृष्टिकोण अपनाते हैं। हमारा लक्ष्य बाज़ार के अनुरूप और विश्वसनीय प्रबंधन है, जो संपत्ति के दीर्घकालिक मूल्य की रक्षा करता है तथा ठोस और टिकाऊ आय उत्पन्न करता है।",
    "approach_eyebrow": "हमारा दृष्टिकोण",
    "approach_title": "पाँच मूल सिद्धांत",
    "approach_intro": "Nurdug AG का आचरण एक ऐसी मनोवृत्ति पर टिका है जो परंपरागत उद्यमशील चिंतन को रियल एस्टेट के अनुशासन से जोड़ती है।",
    "approach_1_title": "दीर्घ क्षितिज",
    "approach_1_body": "हम छोटे चक्रों में नहीं, अपितु टिकाऊ समयावधियों में सोचते हैं। हमारा अभिप्राय रियल एस्टेट मूल्य की सतत सुरक्षा और विकास है।",
    "approach_2_title": "तत्त्व-निष्ठा",
    "approach_2_body": "हम वास्तविक गुणवत्ता और स्थायी महत्त्व की परिसंपत्तियों पर केन्द्रित हैं। हमारे लिए निरंतरता का भार क्षणिक गति से अधिक है।",
    "approach_3_title": "सावधानी और संरचना",
    "approach_3_body": "होल्डिंग के रूप में हम स्पष्ट संरचनाओं, सुव्यवस्थित निर्णय-पथों तथा आर्थिक अनुशासन और उत्तरदायित्व की उच्च अपेक्षाओं के साथ कार्य करते हैं।",
    "approach_4_title": "विश्वसनीय संचालन",
    "approach_4_body": "हमारी संपत्तियों की किरायेदारी संयम, बाज़ार-ज्ञान तथा परिचालनगत सावधानी से होती है। अग्रणी स्थान पर मूल्य-रक्षा, उपयोग की गुणवत्ता तथा टिकाऊ आय-क्षमता हैं।",
    "approach_5_title": "मूल्य के प्रति उत्तरदायित्व",
    "approach_5_body": "रियल एस्टेट संपदा के व्यवहार को हम एक स्थायी दायित्व समझते हैं। मूल्यों की रक्षा करना, उन्हें व्यवस्थित ढंग से विकसित करना तथा दीर्घकाल तक सुदृढ़ करना - यह हमारी आत्मबोध का सार है।",
    "distinction_eyebrow": "हमें जो विशिष्ट बनाता है",
    "distinction_title": "शांति, स्पष्टता, स्थायित्व",
    "distinction_p1": "Nurdug AG एक ऐसे उद्यम-व्यवहार का प्रतिनिधित्व करती है जो शांति, स्पष्टता और स्थायित्व से चिह्नित है। हम न तो अल्पावधि बाज़ार-चिंतन का अनुसरण करते हैं, न अवसरवादी मार्ग का। हमारी शक्ति सार-तत्त्व पर एकाग्रता में निहित है: सारगर्भित रियल एस्टेट, व्यावसायिक किरायेदारी, सुव्यवस्थित नेतृत्व तथा मूल्य का स्थायी बोध।",
    "distinction_p2": "यह मनोवृत्ति स्थिरता और विश्वसनीयता का आधार रखती है। यह रियल एस्टेट संपदा को केवल धारित करने की नहीं, बल्कि विवेक से निर्देशित करने और समय के साथ उसके तत्त्व तथा आय-क्षमता दोनों को सुदृढ़ करने की अनुमति देती है।",
    "self_eyebrow": "आत्मबोध",
    "self_title": "स्पष्ट निष्ठा वाली एक होल्डिंग",
    "self_p1": "Nurdug AG स्वयं को एक ऐसी होल्डिंग के रूप में देखती है जिसमें स्पष्ट और दीर्घकालिक निष्ठा निहित है। हम आर्थिक विवेक को गुणवत्ता, संरचना और सततता के प्रति सूक्ष्म संवेदना से जोड़ते हैं। हमारा लक्ष्य है रियल एस्टेट संपदा को एक सुव्यवस्थित और उत्तरदायी ढाँचे में संचालित करना तथा इसके द्वारा मूल्य की दीर्घकालिक स्थायिता के लिए सुदृढ़ आधार प्रदान करना।",
    "closing": "Nurdug AG तत्त्व-मूलक रियल एस्टेट स्वामित्व, उत्तरदायी किरायेदारी और मूल्य की दीर्घकालिक स्थायिता का प्रतिनिधित्व करती है।",
    "contact_eyebrow": "संपर्क",
    "contact_title": "बर्लिन",
    "contact_intro": "व्यावसायिक पूछताछ के लिए हम प्रत्यक्ष उत्तर देने को तत्पर हैं।",
    "contact_address_label": "पंजीकृत कार्यालय",
    "contact_address": "Goethestraße 49, 12305 बर्लिन, जर्मनी",
    "contact_email_label": "ईमेल",
    "contact_phone_label": "दूरभाष",
    "footer_tagline": "रियल एस्टेट होल्डिंग · बर्लिन",
    "footer_legal": "Nurdug AG, बर्लिन में पंजीकृत। सर्वाधिकार सुरक्षित।",
    "legal_imprint": "कानूनी सूचना",
    "legal_privacy": "गोपनीयता नीति",
    "legal_cookies": "कुकीज़"
  },
  "ar": {
    "meta_title": "Nurdug AG - شركة قابضة للعقارات، برلين",
    "meta_description": "Nurdug AG شركة قابضة مقرّها برلين، تُعنى بالتملّك العقاري طويل الأمد، والتأجير المسؤول، وديمومة القيمة.",
    "nav_firm": "الشركة",
    "nav_focus": "التركيز",
    "nav_approach": "النهج",
    "nav_distinction": "الملف",
    "nav_contact": "الاتصال",
    "hero_eyebrow": "قابضة عقارية · برلين",
    "hero_title": "Nurdug AG",
    "hero_tagline": "شركة قابضة مهيّأة للأمد البعيد",
    "hero_sub": "العقار ليس مركزاً سوقياً عابراً، بل أصلٌ حقيقي يُمتَلَك بعنايةٍ، ويُؤَجَّر بمسؤولية، ويُنمَّى بصبرٍ.",
    "firm_eyebrow": "الشركة",
    "firm_title": "الجوهر لا المضاربة",
    "firm_p1": "Nurdug AG شركة قابضة محورُها السوق العقاري وتأجير العقارات طويلة الأمد. يقوم مسلكها المؤسسي على التملّك الصبور، والإدارة الحريصة، والتنمية المستدامة لرصيد عقاري ذي جوهر.",
    "firm_p2": "إنّ فهمنا للعقار يستند إلى الاستمرارية والجوهر والمسؤولية. لا نَنظر إليه بوصفه مركزاً سوقياً عابراً، بل أصلاً حقيقياً ذا وزن باقٍ. فقيمته لا تتجلّى في إيقاع السوق المتقلّب، بل في جودته وصلاحيته للاستعمال وقدرته على إدرار العائد وثباته عبر الزمن.",
    "firm_p3": "بوصفها شركة قابضة، تُقيم Nurdug AG الإطار البنيوي لإدارة نشاطاتها العقارية بنظامٍ واتّساق. فهي تصل بين الرؤية الاستراتيجية والانضباط الاقتصادي، وتكفل أن تُدار الأصول بما يستلزمه الأمر من عناية ووضوحٍ ونَفَسٍ طويل. في القلب لا تقع التقلّبات ولا الانتهازية، بل حفظ القيمة والاستقرار والتنمية المُستبصِرة.",
    "focus_eyebrow": "مَحْوَر تركيزنا",
    "focus_title": "حدود واضحة، تضييق مقصود",
    "focus_p1": "نشاط Nurdug AG مقصودٌ محدودٌ بوضوح. نتركّز على العقار، وتأجيره المهني، وإدارته المستدامة.",
    "focus_p2": "في اختيار المحافظ العقارية وإدارتها، نُعلي من شأن الجودة والموقع والجوهر والقدرة على الاستمرار في المدى البعيد. لا يَحسم عندنا مَيلُ السوق العابر، بل صلاحيةُ الأصل الدائمة، واستقرار آفاق استعماله، ومتانة أساسه الاقتصادي.",
    "focus_p3": "في إدارة التأجير نمضي بنهجٍ رزينٍ ومحترفٍ ومسؤول. هدفُنا إدارة تطابق السوق وتصلح للاعتماد عليها، بحيث تَحفظ قيمة العقار في المدى البعيد، وتحقّق عائدات راسخة ومستدامة.",
    "approach_eyebrow": "نَهْجُنا",
    "approach_title": "خمسة مبادئ",
    "approach_intro": "ينبثق عمل Nurdug AG من طبعٍ يصل الفكرَ المقاولاتي الكلاسيكي بانضباط يليق بالعمل العقاري.",
    "approach_1_title": "الأفقُ الطويل",
    "approach_1_body": "لا نفكّر بدوراتٍ قصيرة، بل بفتراتٍ راسخة. همُّنا حفظ القيمة العقارية وتنميتها على المدى الممتدّ.",
    "approach_2_title": "جَوهَريّة",
    "approach_2_body": "نتركّز على أصولٍ ذات جودةٍ حقيقيةٍ ومَغزى باقٍ. ترجح عندنا الاستمرارية على حِدّة اللحظة.",
    "approach_3_title": "العناية والبنية",
    "approach_3_body": "بوصفنا قابضةً، نعمل بهياكل واضحةٍ، ومسالك قرارٍ منتظمةٍ، ومطلبٍ عالٍ من الانضباط الاقتصادي والمساءلة.",
    "approach_4_title": "إدارةٌ يُعتمد عليها",
    "approach_4_body": "يُجرى تأجير عقاراتنا بقدرٍ من الاعتدال، ومعرفةٍ بالسوق، وعنايةٍ تشغيلية. في الصدارة حفظ القيمة، وجودة الاستعمال، وقوّة العائد الدائمة.",
    "approach_5_title": "المسؤولية عن القيمة",
    "approach_5_body": "نفهم التعامل مع الثروة العقارية بوصفه التزاماً ممتدّاً. حفظ القِيَم، وتنميتها بانتظامٍ، وتمكينها على المدى البعيد - هذا لبّ إدراكنا لذواتنا.",
    "distinction_eyebrow": "ما يُمَيِّزُنا",
    "distinction_title": "هدوء ووضوح وثبات",
    "distinction_p1": "تُجسِّد Nurdug AG نَمَطاً من السلوك المؤسسي يتّصف بالهدوء والوضوح والثبات. لا نسير على هدي تفكيرٍ سوقي قصير، ولا في درب الانتهازية. قوّتنا في التركيز على الجوهري: عقارٌ ذو وزن، وتأجير مهني، وإدارةٌ منتظمةٌ، وفهم دائم للقيمة.",
    "distinction_p2": "هذه الهيئة هي قاعدة الاستقرار والاعتمادية. إنّها تُمكّن الثروةَ العقارية لا من أن تُحفَظ وحسب، بل أن تُقاد بتبصّرٍ، وأن تتعزّز بمرور الزمن في جوهرها وفي قدرتها على العائد.",
    "self_eyebrow": "إدراك الذات",
    "self_title": "قابضةٌ ذات هيبةٍ وطموحٍ واضح",
    "self_p1": "تُدرِك Nurdug AG نفسَها قابضةً ذات مطلبٍ واضحٍ ومُمتدّ في الزمن. نصل بين العقل الاقتصادي وحسٍّ دقيقٍ بالجودة والبنيان والاستدامة. غايتُنا أن نُدير الثروةَ العقارية ضمن إطارٍ منظّمٍ ومسؤولٍ، وأن نُرسي بذلك أساساً متيناً لديمومة القيمة على المدى البعيد.",
    "closing": "Nurdug AG تعني التملّك العقاري الجوهري، والتأجير المسؤول، وديمومة القيمة على المدى البعيد.",
    "contact_eyebrow": "الاتصال",
    "contact_title": "برلين",
    "contact_intro": "نَسعَد بالردّ على الاستفسارات المهنية مباشرةً.",
    "contact_address_label": "المقرّ المسجَّل",
    "contact_address": "Goethestraße 49، 12305 برلين، ألمانيا",
    "contact_email_label": "البريد الإلكتروني",
    "contact_phone_label": "الهاتف",
    "footer_tagline": "قابضة عقارية · برلين",
    "footer_legal": "Nurdug AG، مسجَّلة في برلين. جميع الحقوق محفوظة.",
    "legal_imprint": "الإشعار القانوني",
    "legal_privacy": "سياسة الخصوصية",
    "legal_cookies": "ملفات تعريف الارتباط"
  },
  "he": {
    "meta_title": "Nurdug AG - חברת החזקות לנדל\"ן, ברלין",
    "meta_description": "Nurdug AG היא חברת החזקות ברלינאית המייחדת עצמה להחזקת נדל\"ן לטווח ארוך, השכרה אחראית ושמירת ערך לאורך זמן.",
    "nav_firm": "החברה",
    "nav_focus": "מוקד",
    "nav_approach": "גישה",
    "nav_distinction": "ייחוד",
    "nav_contact": "יצירת קשר",
    "hero_eyebrow": "חברת החזקות לנדל\"ן · ברלין",
    "hero_title": "Nurdug AG",
    "hero_tagline": "חברת החזקות שנבנית לאופק ארוך",
    "hero_sub": "נדל\"ן אינו עמדת שוק חולפת. הוא נכס ממשי - מוחזק בזהירות, מושכר באחריות, מפותח בסבלנות.",
    "firm_eyebrow": "החברה",
    "firm_title": "תוכן, לא ספקולציה",
    "firm_p1": "Nurdug AG היא חברת החזקות המתמקדת בנדל\"ן וניהול השכרה לטווח ארוך. כובד המשקל העסקי שלה נח על החזקה סבלנית, ניהול זהיר ופיתוח בר-קיימא של מצבור נדל\"ן בעל תכן.",
    "firm_p2": "תפיסת הנדל\"ן שלנו מעוצבת על ידי רציפות, תכן ואחריות. איננו רואים בנדל\"ן עמדת שוק חולפת, כי אם נכס ממשי בעל משמעות מתמשכת. ערכו ניכר לא בקצב המשתנה של השוק, אלא באיכותו, בשימושיותו, בכושר התשואה שלו וביכולתו להחזיק מעמד לאורך זמן.",
    "firm_p3": "בתוקף היותה חברת החזקות, Nurdug AG יוצרת את המסגרת המבנית לניהול מוסדר של פעילותה בנדל\"ן. היא מחברת בין ראייה אסטרטגית לבין משמעת כלכלית, ומבטיחה שהנכסים מנוהלים בקפדנות, בבהירות ובנשימה הארוכה שהעניין מחייב. במרכז אין תנודתיות ולא הזדמנותנות, אלא שמירת ערך, יציבות ופיתוח צופה פני עתיד.",
    "focus_eyebrow": "המוקד שלנו",
    "focus_title": "היקף ברור, תחום במכוון",
    "focus_p1": "פעילותה של Nurdug AG תחומה במכוון. אנו מתרכזים בנדל\"ן, בהשכרתו המקצועית ובניהולו בר-הקיימא.",
    "focus_p2": "בבחירת נכסים ובניהולם אנו מייחסים משקל לאיכות, למיקום, לתכן ולכדאיות ארוכת הטווח. מכריע עבורנו לא תנועתו הרגעית של השוק, אלא התאמתו המתמשכת של הנכס, יציבות אופקי השימוש שלו, ואיתנות היסוד הכלכלי שלו.",
    "focus_p3": "בניהול ההשכרה אנו נוהגים במתינות, במקצועיות ובאחריות. יעדנו הוא ניהול המתיישב עם השוק ובר-הסתמכות, השומר על ערך הנכס לטווח הארוך ומאפשר תשואות איתנות ומתמשכות.",
    "approach_eyebrow": "הגישה שלנו",
    "approach_title": "חמישה עקרונות",
    "approach_intro": "עשייתה של Nurdug AG נשענת על עמדה שמאחדת חשיבה יזמית קלאסית עם משמעת ראויה לתחום הנדל\"ן.",
    "approach_1_title": "אופק ארוך",
    "approach_1_body": "איננו חושבים במחזורים קצרים, כי אם בתקופות שיש בהן עמידה. עניינו שמירה ופיתוח מתמשכים של ערך הנדל\"ן.",
    "approach_2_title": "תוכן",
    "approach_2_body": "אנו מתרכזים בנכסים בעלי איכות ממשית ומשמעות מתמשכת. רציפות שוקלת אצלנו יותר מאשר מומנטום חולף.",
    "approach_3_title": "קפדנות ומבנה",
    "approach_3_body": "בתוקף היותנו חברת החזקות, אנו פועלים במבנים ברורים, במסלולי החלטה מסודרים ובדרישה גבוהה למשמעת כלכלית ולאחריותיות.",
    "approach_4_title": "ניהול בר-הסתמכות",
    "approach_4_body": "השכרת נכסינו מתבצעת במידה, בידיעת השוק ובדקדוק תפעולי. שמירת הערך, איכות השימוש והתשואה המתמשכת עומדים בחזית.",
    "approach_5_title": "אחריות לערך",
    "approach_5_body": "אנו מבינים את הטיפול בהון הנדל\"ני כהתחייבות מתמשכת. לשמור על הערך, לפתחו בצורה מסודרת ולחזקו לאורך זמן - זהו לב הבנתנו העצמית.",
    "distinction_eyebrow": "מה שמייחד אותנו",
    "distinction_title": "שלווה, בהירות, רציפות",
    "distinction_p1": "Nurdug AG מגלמת צורה של עשייה עסקית המצוינת בשלווה, בבהירות וברציפות. אין אנו הולכים אחרי חשיבת שוק קצרת טווח, ולא אחרי גישה הזדמנותית. כוחנו בהתרכזות במה שעיקרי: נדל\"ן בעל תכן, השכרה מקצועית, הנהגה מסודרת, והבנה מתמשכת של ערך.",
    "distinction_p2": "עמדה זו היא היסוד ליציבות ולאמינות. היא מאפשרת לא רק להחזיק הון נדל\"ני, אלא להנהיג אותו בתבונה ולחזקו לאורך זמן, הן בתכנו והן בכושר תשואתו.",
    "self_eyebrow": "הבנה עצמית",
    "self_title": "חברת החזקות שזהותה ברורה",
    "self_p1": "Nurdug AG רואה עצמה חברת החזקות בעלת תביעה ברורה וארוכת טווח. אנו משלבים תבונה כלכלית עם חוש עדין לאיכות, למבנה ולקיימות. מטרתנו להנהיג את ההון הנדל\"ני במסגרת מסודרת ואחראית, וליצור בכך יסוד איתן לשמירת ערך לטווח הארוך.",
    "closing": "Nurdug AG מייצגת החזקת נדל\"ן מוכוונת תכן, השכרה אחראית ושמירת ערך לאורך זמן.",
    "contact_eyebrow": "יצירת קשר",
    "contact_title": "ברלין",
    "contact_intro": "לפניות עסקיות נשמח להשיב ישירות.",
    "contact_address_label": "מען רשום",
    "contact_address": "Goethestraße 49, 12305 ברלין, גרמניה",
    "contact_email_label": "דוא\"ל",
    "contact_phone_label": "טלפון",
    "footer_tagline": "חברת החזקות לנדל\"ן · ברלין",
    "footer_legal": "Nurdug AG, רשומה בברלין. כל הזכויות שמורות.",
    "legal_imprint": "מידע משפטי",
    "legal_privacy": "מדיניות פרטיות",
    "legal_cookies": "עוגיות"
  }
};

  // Detect initial language
  function detectLanguage() {
    try {
      var stored = localStorage.getItem('nurdug_lang');
      if (stored && LANG_META[stored]) return stored;
    } catch(e) {}
    var browser = (navigator.language || navigator.userLanguage || 'en').toLowerCase().split('-')[0];
    return LANG_META[browser] ? browser : 'en';
  }

  function applyTranslations(lang) {
    var dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
    var meta = LANG_META[lang] || LANG_META.en;

    document.documentElement.lang = lang;
    document.documentElement.dir = meta.dir;
    document.body.setAttribute('dir', meta.dir);

    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        nodes[i].textContent = dict[key];
      }
    }

    // Special: title
    if (dict.hero_tagline) {
      document.title = 'Nurdug AG - ' + dict.hero_tagline;
    }

    // Update lang switcher button
    var btn = document.getElementById('langToggle');
    if (btn) btn.firstChild.textContent = lang.toUpperCase();

    // Active state in menu
    var menuBtns = document.querySelectorAll('.lang-menu button');
    for (var j = 0; j < menuBtns.length; j++) {
      menuBtns[j].classList.toggle('active', menuBtns[j].getAttribute('data-lang') === lang);
    }

    // Toggle legal modal bodies: DE for 'de', else EN fallback
    var bodyLang = (lang === 'de') ? 'de' : 'en';
    var modalBodies = document.querySelectorAll('.legal-modal-body');
    for (var mi = 0; mi < modalBodies.length; mi++) {
      modalBodies[mi].classList.toggle('is-visible', modalBodies[mi].getAttribute('data-lang') === bodyLang);
    }

    try { localStorage.setItem('nurdug_lang', lang); } catch(e) {}
  }

  function buildLangMenu() {
    var menu = document.querySelector('.lang-menu');
    if (!menu) return;
    var html = '';
    for (var i = 0; i < LANG_ORDER.length; i++) {
      var code = LANG_ORDER[i];
      html += '<button data-lang="' + code + '" type="button">' + LANG_META[code].name + '</button>';
    }
    menu.innerHTML = html;

    menu.addEventListener('click', function(e) {
      var t = e.target;
      if (t.tagName === 'BUTTON') {
        var lang = t.getAttribute('data-lang');
        applyTranslations(lang);
        document.querySelector('.lang-switch').classList.remove('open');
      }
    });
  }

  function setupLangToggle() {
    var toggle = document.getElementById('langToggle');
    if (!toggle) return;
    toggle.addEventListener('click', function(e) {
      e.stopPropagation();
      document.querySelector('.lang-switch').classList.toggle('open');
    });
    document.addEventListener('click', function(e) {
      var sw = document.querySelector('.lang-switch');
      if (sw && !sw.contains(e.target)) sw.classList.remove('open');
    });
  }

  function setupMobileMenu() {
    var toggle = document.querySelector('.mobile-toggle');
    var links = document.querySelector('.nav-links');
    if (!toggle || !links) return;
    toggle.addEventListener('click', function() {
      links.classList.toggle('mobile-open');
    });
    var anchors = links.querySelectorAll('a');
    for (var i = 0; i < anchors.length; i++) {
      anchors[i].addEventListener('click', function() {
        links.classList.remove('mobile-open');
      });
    }
  }

  function setupReveals() {
    if (!('IntersectionObserver' in window)) {
      var fallback = document.querySelectorAll('.reveal');
      for (var i = 0; i < fallback.length; i++) fallback[i].classList.add('visible');
      return;
    }
    var io = new IntersectionObserver(function(entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          entries[i].target.classList.add('visible');
          io.unobserve(entries[i].target);
        }
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    var nodes = document.querySelectorAll('.reveal');
    for (var i = 0; i < nodes.length; i++) io.observe(nodes[i]);
  }

  function setupResponsiveHero() {
    // Switch hero source based on viewport (avoids loading 184 KB on mobile)
    var img = document.querySelector('.hero-bg img');
    if (!img) return;
    function pick() {
      var src = window.innerWidth < 768 ? 'hero-mobile.jpg' : 'hero.jpg';
      if (!img.src.endsWith(src)) img.src = src;
    }
    pick();
    var to;
    window.addEventListener('resize', function() {
      clearTimeout(to);
      to = setTimeout(pick, 200);
    });
  }

  function setupLegalModals() {
    var openBtns = document.querySelectorAll('[data-open-modal]');
    for (var i = 0; i < openBtns.length; i++) {
      (function(btn) {
        btn.addEventListener('click', function() {
          var name = btn.getAttribute('data-open-modal');
          var modal = document.getElementById('modal-' + name);
          if (!modal) return;
          modal.classList.add('is-open');
          document.body.style.overflow = 'hidden';
          var closeBtn = modal.querySelector('.legal-modal-close');
          if (closeBtn) closeBtn.focus();
        });
      })(openBtns[i]);
    }
    var closers = document.querySelectorAll('[data-modal-close]');
    for (var j = 0; j < closers.length; j++) {
      closers[j].addEventListener('click', function(e) {
        var modal = e.target.closest('.legal-modal');
        if (modal) modal.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    }
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' || e.keyCode === 27) {
        var open = document.querySelectorAll('.legal-modal.is-open');
        if (open.length) {
          for (var k = 0; k < open.length; k++) open[k].classList.remove('is-open');
          document.body.style.overflow = '';
        }
      }
    });
  }

  function init() {
    buildLangMenu();
    setupLangToggle();
    setupMobileMenu();
    setupResponsiveHero();
    applyTranslations(detectLanguage());
    setupReveals();
    setupLegalModals();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
