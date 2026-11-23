// Pricing text in every language. The plans and prices themselves are in src/plans.js.
// {days} is replaced with the length of the free trial.

export const pricing = {
  en: {
    title: 'Pricing | Parts Relay',
    description:
      'Plans and prices for Parts Relay, parts lookup software for repair shops. Every plan starts with a free {days}-day trial.',
    label: 'Pricing',
    heading: 'Simple pricing for every repair shop',
    intro:
      'Every plan finds parts from a plate or VIN, with original part numbers, exploded views and aftermarket matches. Choose the plan that fits your team.',
    billing: {
      label: 'Billing period',
      monthly: 'Monthly',
      yearly: 'Yearly',
      save: 'Save {saving}%',
    },
    perMonth: '/ month',
    billedMonthly: 'Billed monthly',
    billedYearly: 'Billed yearly',
    popular: 'Most popular',
    custom: 'Custom',
    customNote: 'Priced for your team',
    trialCta: 'Start free trial',
    callCta: 'Book a call',
    plans: {
      starter: {
        name: 'Starter',
        tagline: 'For smaller shops getting started.',
        includedTitle: 'What’s included',
        features: [
          'Search by plate or VIN',
          'Original part numbers and positions',
          'Exploded views',
          'Aftermarket matches',
          'Up to 3 team members',
          '500 searches a month',
        ],
      },
      workshop: {
        name: 'Workshop',
        tagline: 'For busy shops with a full team.',
        includedTitle: 'Everything in Starter, plus',
        features: [
          'Up to 10 team members',
          '2,000 searches a month',
          'Search by WhatsApp',
          'Priority support',
        ],
      },
      enterprise: {
        name: 'Enterprise',
        tagline: 'For groups and shops with several sites.',
        includedTitle: 'Everything in Workshop, plus',
        features: [
          'Unlimited team members',
          'Search volume to suit you',
          'Setup with our team',
          'A direct contact for support',
        ],
      },
    },
    unsure: {
      title: 'Not sure which plan?',
      text: 'Book a short call and we’ll help you choose.',
    },
    assurances: ['Free {days}-day trial', 'Cancel anytime', 'Sign in with Google or email'],
    compare: {
      label: 'Compare',
      title: 'Which plan is right for you?',
      text: 'Every plan includes the full parts search. What changes is the size of your team and how much you search.',
      feature: 'Feature',
      included: 'Included',
      notIncluded: 'Not included',
      unlimited: 'Unlimited',
      rows: {
        teamMembers: 'Team members',
        searches: 'Searches a month',
        plateVin: 'Search by plate or VIN',
        oem: 'Original part numbers and exploded views',
        aftermarket: 'Aftermarket matches',
        history: 'Shared search history',
        whatsapp: 'Search by WhatsApp',
        priority: 'Priority support',
        onboarding: 'Setup with our team',
      },
    },
    faq: {
      label: 'FAQ',
      title: 'Questions about pricing',
      talkTitle: 'Rather talk to a person?',
      talkText: 'Book a call with our team. We’ll answer your questions and help you get set up.',
      items: [
        [
          'Is there a free trial?',
          'Yes. Every plan starts with a free {days}-day trial, so you can try Parts Relay on your own jobs before you pay.',
        ],
        [
          'Does Parts Relay sell parts?',
          'No. Parts Relay finds the right part number for the vehicle. You still order from your usual supplier, who confirms the price, stock and fit.',
        ],
        [
          'Which countries does it cover?',
          'Plates are searched in the country you set for your company. 33 countries are available: the EU and EEA countries, Switzerland, the United Kingdom and the United States.',
        ],
        [
          'Who on my team can use it?',
          'There are three roles. The owner manages the company and the team, admins manage WhatsApp contacts and invite people, and viewers run searches. Everyone signs in with Google or a link sent by email.',
        ],
        ['Which languages is the app in?', 'English and Italian, chosen on each device.'],
      ],
    },
  },
  de: {
    title: 'Preise | Parts Relay',
    description:
      'Tarife und Preise für Parts Relay, die Software zur Teilesuche für Werkstätten. Jeder Tarif beginnt mit einem kostenlosen {days}-tägigen Test.',
    label: 'Preise',
    heading: 'Einfache Preise für jede Werkstatt',
    intro:
      'Jeder Tarif findet Teile über Kennzeichen oder FIN, mit Original-Teilenummern, Explosionszeichnungen und passenden Aftermarket-Teilen. Wählen Sie den Tarif, der zu Ihrem Team passt.',
    billing: {
      label: 'Abrechnungszeitraum',
      monthly: 'Monatlich',
      yearly: 'Jährlich',
      save: '{saving} % sparen',
    },
    perMonth: '/ Monat',
    billedMonthly: 'Monatliche Abrechnung',
    billedYearly: 'Jährliche Abrechnung',
    popular: 'Am beliebtesten',
    custom: 'Individuell',
    customNote: 'Preis nach Ihrem Team',
    trialCta: 'Kostenlos testen',
    callCta: 'Gespräch vereinbaren',
    plans: {
      starter: {
        name: 'Starter',
        tagline: 'Für kleinere Werkstätten, die einsteigen.',
        includedTitle: 'Enthalten',
        features: [
          'Suche über Kennzeichen oder FIN',
          'Original-Teilenummern und Einbaupositionen',
          'Explosionszeichnungen',
          'Passende Aftermarket-Teile',
          'Bis zu 3 Teammitglieder',
          '500 Suchen pro Monat',
        ],
      },
      workshop: {
        name: 'Workshop',
        tagline: 'Für ausgelastete Werkstätten mit vollem Team.',
        includedTitle: 'Alles aus Starter, plus',
        features: [
          'Bis zu 10 Teammitglieder',
          '2.000 Suchen pro Monat',
          'Suche per WhatsApp',
          'Bevorzugter Support',
        ],
      },
      enterprise: {
        name: 'Enterprise',
        tagline: 'Für Gruppen und Werkstätten mit mehreren Standorten.',
        includedTitle: 'Alles aus Workshop, plus',
        features: [
          'Unbegrenzt viele Teammitglieder',
          'Suchvolumen nach Ihrem Bedarf',
          'Einrichtung mit unserem Team',
          'Ein direkter Ansprechpartner für den Support',
        ],
      },
    },
    unsure: {
      title: 'Unsicher, welcher Tarif passt?',
      text: 'Vereinbaren Sie ein kurzes Gespräch, und wir helfen Ihnen bei der Wahl.',
    },
    assurances: [
      '{days} Tage kostenlos testen',
      'Jederzeit kündbar',
      'Anmeldung mit Google oder E-Mail',
    ],
    compare: {
      label: 'Vergleich',
      title: 'Welcher Tarif passt zu Ihnen?',
      text: 'Jeder Tarif enthält die vollständige Teilesuche. Unterschiede gibt es bei der Größe Ihres Teams und der Zahl Ihrer Suchen.',
      feature: 'Funktion',
      included: 'Enthalten',
      notIncluded: 'Nicht enthalten',
      unlimited: 'Unbegrenzt',
      rows: {
        teamMembers: 'Teammitglieder',
        searches: 'Suchen pro Monat',
        plateVin: 'Suche über Kennzeichen oder FIN',
        oem: 'Original-Teilenummern und Explosionszeichnungen',
        aftermarket: 'Passende Aftermarket-Teile',
        history: 'Gemeinsamer Suchverlauf',
        whatsapp: 'Suche per WhatsApp',
        priority: 'Bevorzugter Support',
        onboarding: 'Einrichtung mit unserem Team',
      },
    },
    faq: {
      label: 'FAQ',
      title: 'Fragen zu den Preisen',
      talkTitle: 'Lieber mit einem Menschen sprechen?',
      talkText:
        'Vereinbaren Sie ein Gespräch mit unserem Team. Wir beantworten Ihre Fragen und helfen Ihnen beim Einrichten.',
      items: [
        [
          'Gibt es einen kostenlosen Test?',
          'Ja. Jeder Tarif beginnt mit einem kostenlosen {days}-tägigen Test, damit Sie Parts Relay an Ihren eigenen Aufträgen ausprobieren können, bevor Sie zahlen.',
        ],
        [
          'Verkauft Parts Relay Teile?',
          'Nein. Parts Relay findet die richtige Teilenummer für das Fahrzeug. Bestellt wird weiterhin bei Ihrem gewohnten Lieferanten, der Preis, Bestand und Passform bestätigt.',
        ],
        [
          'Welche Länder werden abgedeckt?',
          'Kennzeichen werden in dem Land gesucht, das Sie für Ihr Unternehmen festlegen. 33 Länder stehen zur Wahl: die Länder der EU und des EWR, die Schweiz, das Vereinigte Königreich und die USA.',
        ],
        [
          'Wer in meinem Team kann es nutzen?',
          'Es gibt drei Rollen. Der Inhaber verwaltet das Unternehmen und das Team, Admins verwalten WhatsApp-Kontakte und laden Personen ein, und Leser führen Suchen durch. Alle melden sich mit Google oder über einen Link per E-Mail an.',
        ],
        [
          'In welchen Sprachen gibt es die App?',
          'Auf Englisch und Italienisch, einstellbar auf jedem Gerät.',
        ],
      ],
    },
  },
  fr: {
    title: 'Tarifs | Parts Relay',
    description:
      'Formules et tarifs de Parts Relay, le logiciel de recherche de pièces pour les garages. Chaque formule commence par un essai gratuit de {days} jours.',
    label: 'Tarifs',
    heading: 'Des tarifs simples pour chaque garage',
    intro:
      'Chaque formule trouve les pièces à partir d’une plaque ou d’un VIN, avec les références d’origine, les vues éclatées et les équivalences adaptables. Choisissez la formule qui convient à votre équipe.',
    billing: {
      label: 'Période de facturation',
      monthly: 'Mensuel',
      yearly: 'Annuel',
      save: 'Économisez {saving} %',
    },
    perMonth: '/ mois',
    billedMonthly: 'Facturé mensuellement',
    billedYearly: 'Facturé annuellement',
    popular: 'La plus choisie',
    custom: 'Sur mesure',
    customNote: 'Tarif adapté à votre équipe',
    trialCta: 'Commencer l’essai gratuit',
    callCta: 'Réserver un appel',
    plans: {
      starter: {
        name: 'Starter',
        tagline: 'Pour les petits garages qui démarrent.',
        includedTitle: 'Ce qui est inclus',
        features: [
          'Recherche par plaque ou VIN',
          'Références d’origine et positions',
          'Vues éclatées',
          'Équivalences adaptables',
          'Jusqu’à 3 membres d’équipe',
          '500 recherches par mois',
        ],
      },
      workshop: {
        name: 'Workshop',
        tagline: 'Pour les garages très actifs, avec une équipe complète.',
        includedTitle: 'Tout ce qu’offre Starter, plus',
        features: [
          'Jusqu’à 10 membres d’équipe',
          '2 000 recherches par mois',
          'Recherche par WhatsApp',
          'Support prioritaire',
        ],
      },
      enterprise: {
        name: 'Enterprise',
        tagline: 'Pour les groupes et les garages multisites.',
        includedTitle: 'Tout ce qu’offre Workshop, plus',
        features: [
          'Membres d’équipe illimités',
          'Volume de recherches adapté à vos besoins',
          'Mise en place avec notre équipe',
          'Un contact direct pour le support',
        ],
      },
    },
    unsure: {
      title: 'Vous hésitez entre les formules ?',
      text: 'Réservez un court appel et nous vous aiderons à choisir.',
    },
    assurances: [
      'Essai gratuit de {days} jours',
      'Résiliable à tout moment',
      'Connexion avec Google ou par e-mail',
    ],
    compare: {
      label: 'Comparer',
      title: 'Quelle formule vous convient ?',
      text: 'Chaque formule comprend la recherche de pièces complète. Ce qui change, c’est la taille de votre équipe et votre volume de recherches.',
      feature: 'Fonctionnalité',
      included: 'Inclus',
      notIncluded: 'Non inclus',
      unlimited: 'Illimité',
      rows: {
        teamMembers: 'Membres d’équipe',
        searches: 'Recherches par mois',
        plateVin: 'Recherche par plaque ou VIN',
        oem: 'Références d’origine et vues éclatées',
        aftermarket: 'Équivalences adaptables',
        history: 'Historique de recherches partagé',
        whatsapp: 'Recherche par WhatsApp',
        priority: 'Support prioritaire',
        onboarding: 'Mise en place avec notre équipe',
      },
    },
    faq: {
      label: 'FAQ',
      title: 'Questions sur les tarifs',
      talkTitle: 'Vous préférez parler à quelqu’un ?',
      talkText:
        'Réservez un appel avec notre équipe. Nous répondrons à vos questions et vous aiderons à démarrer.',
      items: [
        [
          'Y a-t-il un essai gratuit ?',
          'Oui. Chaque formule commence par un essai gratuit de {days} jours, pour tester Parts Relay sur vos propres interventions avant de payer.',
        ],
        [
          'Parts Relay vend-il des pièces ?',
          'Non. Parts Relay trouve la bonne référence pour le véhicule. Vous commandez toujours auprès de votre fournisseur habituel, qui confirme le prix, le stock et la compatibilité.',
        ],
        [
          'Quels pays sont couverts ?',
          'Les plaques sont recherchées dans le pays défini pour votre entreprise. 33 pays sont disponibles : les pays de l’UE et de l’EEE, la Suisse, le Royaume-Uni et les États-Unis.',
        ],
        [
          'Qui dans mon équipe peut l’utiliser ?',
          'Il existe trois rôles. Le propriétaire gère l’entreprise et l’équipe, les administrateurs gèrent les contacts WhatsApp et invitent des personnes, et les lecteurs lancent des recherches. Chacun se connecte avec Google ou par un lien envoyé par e-mail.',
        ],
        [
          'En quelles langues est l’application ?',
          'En anglais et en italien, au choix sur chaque appareil.',
        ],
      ],
    },
  },
  es: {
    title: 'Precios | Parts Relay',
    description:
      'Planes y precios de Parts Relay, el software de búsqueda de recambios para talleres. Todos los planes empiezan con una prueba gratuita de {days} días.',
    label: 'Precios',
    heading: 'Precios sencillos para cada taller',
    intro:
      'Todos los planes encuentran recambios a partir de una matrícula o un VIN, con referencias originales, despieces y equivalencias aftermarket. Elija el plan que se adapte a su equipo.',
    billing: {
      label: 'Periodo de facturación',
      monthly: 'Mensual',
      yearly: 'Anual',
      save: 'Ahorre un {saving} %',
    },
    perMonth: '/ mes',
    billedMonthly: 'Facturación mensual',
    billedYearly: 'Facturación anual',
    popular: 'El más popular',
    custom: 'A medida',
    customNote: 'Precio adaptado a su equipo',
    trialCta: 'Empezar prueba gratuita',
    callCta: 'Reservar una llamada',
    plans: {
      starter: {
        name: 'Starter',
        tagline: 'Para talleres más pequeños que empiezan.',
        includedTitle: 'Qué incluye',
        features: [
          'Búsqueda por matrícula o VIN',
          'Referencias y posiciones originales',
          'Despieces',
          'Equivalencias aftermarket',
          'Hasta 3 miembros del equipo',
          '500 búsquedas al mes',
        ],
      },
      workshop: {
        name: 'Workshop',
        tagline: 'Para talleres con mucho trabajo y un equipo completo.',
        includedTitle: 'Todo lo de Starter, más',
        features: [
          'Hasta 10 miembros del equipo',
          '2000 búsquedas al mes',
          'Búsqueda por WhatsApp',
          'Soporte prioritario',
        ],
      },
      enterprise: {
        name: 'Enterprise',
        tagline: 'Para grupos y talleres con varios centros.',
        includedTitle: 'Todo lo de Workshop, más',
        features: [
          'Miembros del equipo ilimitados',
          'Volumen de búsquedas a su medida',
          'Puesta en marcha con nuestro equipo',
          'Un contacto directo para el soporte',
        ],
      },
    },
    unsure: {
      title: '¿No sabe qué plan elegir?',
      text: 'Reserve una llamada breve y le ayudaremos a elegir.',
    },
    assurances: [
      'Prueba gratuita de {days} días',
      'Cancele cuando quiera',
      'Inicio de sesión con Google o correo electrónico',
    ],
    compare: {
      label: 'Comparar',
      title: '¿Qué plan le conviene?',
      text: 'Todos los planes incluyen la búsqueda de recambios completa. Lo que cambia es el tamaño de su equipo y cuánto busca.',
      feature: 'Función',
      included: 'Incluido',
      notIncluded: 'No incluido',
      unlimited: 'Ilimitado',
      rows: {
        teamMembers: 'Miembros del equipo',
        searches: 'Búsquedas al mes',
        plateVin: 'Búsqueda por matrícula o VIN',
        oem: 'Referencias originales y despieces',
        aftermarket: 'Equivalencias aftermarket',
        history: 'Historial de búsquedas compartido',
        whatsapp: 'Búsqueda por WhatsApp',
        priority: 'Soporte prioritario',
        onboarding: 'Puesta en marcha con nuestro equipo',
      },
    },
    faq: {
      label: 'Preguntas frecuentes',
      title: 'Preguntas sobre los precios',
      talkTitle: '¿Prefiere hablar con una persona?',
      talkText:
        'Reserve una llamada con nuestro equipo. Responderemos a sus preguntas y le ayudaremos a ponerlo en marcha.',
      items: [
        [
          '¿Hay una prueba gratuita?',
          'Sí. Todos los planes empiezan con una prueba gratuita de {days} días, para que pueda probar Parts Relay en sus propios trabajos antes de pagar.',
        ],
        [
          '¿Parts Relay vende recambios?',
          'No. Parts Relay encuentra la referencia correcta para el vehículo. Usted sigue pidiendo a su proveedor habitual, que le confirma el precio, el stock y la compatibilidad.',
        ],
        [
          '¿Qué países cubre?',
          'Las matrículas se buscan en el país que fije para su empresa. Hay 33 países disponibles: los países de la UE y del EEE, Suiza, el Reino Unido y Estados Unidos.',
        ],
        [
          '¿Quién de mi equipo puede usarlo?',
          'Hay tres roles. El propietario gestiona la empresa y el equipo, los administradores gestionan los contactos de WhatsApp e invitan a personas, y los lectores hacen búsquedas. Todos inician sesión con Google o con un enlace enviado por correo electrónico.',
        ],
        [
          '¿En qué idiomas está la aplicación?',
          'En inglés e italiano, a elegir en cada dispositivo.',
        ],
      ],
    },
  },
  it: {
    title: 'Prezzi | Parts Relay',
    description:
      'Piani e prezzi di Parts Relay, il software di ricerca ricambi per officine. Ogni piano inizia con una prova gratuita di {days} giorni.',
    label: 'Prezzi',
    heading: 'Prezzi semplici per ogni officina',
    intro:
      'Ogni piano trova i ricambi partendo da una targa o da un VIN, con codici originali, esplosi e corrispondenze aftermarket. Scelga il piano adatto al suo team.',
    billing: {
      label: 'Periodo di fatturazione',
      monthly: 'Mensile',
      yearly: 'Annuale',
      save: 'Risparmi il {saving}%',
    },
    perMonth: '/ mese',
    billedMonthly: 'Fatturazione mensile',
    billedYearly: 'Fatturazione annuale',
    popular: 'Il più scelto',
    custom: 'Su misura',
    customNote: 'Prezzo su misura per il suo team',
    trialCta: 'Inizi la prova gratuita',
    callCta: 'Prenoti una chiamata',
    plans: {
      starter: {
        name: 'Starter',
        tagline: 'Per le officine più piccole che iniziano.',
        includedTitle: 'Cosa include',
        features: [
          'Ricerca per targa o VIN',
          'Codici originali e posizioni',
          'Esplosi',
          'Corrispondenze aftermarket',
          'Fino a 3 membri del team',
          '500 ricerche al mese',
        ],
      },
      workshop: {
        name: 'Workshop',
        tagline: 'Per officine molto attive con un team completo.',
        includedTitle: 'Tutto di Starter, più',
        features: [
          'Fino a 10 membri del team',
          '2.000 ricerche al mese',
          'Ricerca via WhatsApp',
          'Assistenza prioritaria',
        ],
      },
      enterprise: {
        name: 'Enterprise',
        tagline: 'Per gruppi e officine con più sedi.',
        includedTitle: 'Tutto di Workshop, più',
        features: [
          'Membri del team illimitati',
          'Volume di ricerche su misura',
          'Configurazione con il nostro team',
          'Un referente diretto per l’assistenza',
        ],
      },
    },
    unsure: {
      title: 'Non sa quale piano scegliere?',
      text: 'Prenoti una breve chiamata e la aiuteremo a scegliere.',
    },
    assurances: [
      'Prova gratuita di {days} giorni',
      'Disdetta in qualsiasi momento',
      'Accesso con Google o email',
    ],
    compare: {
      label: 'Confronto',
      title: 'Qual è il piano giusto per lei?',
      text: 'Ogni piano include la ricerca ricambi completa. Cambiano le dimensioni del team e il numero di ricerche.',
      feature: 'Funzione',
      included: 'Incluso',
      notIncluded: 'Non incluso',
      unlimited: 'Illimitati',
      rows: {
        teamMembers: 'Membri del team',
        searches: 'Ricerche al mese',
        plateVin: 'Ricerca per targa o VIN',
        oem: 'Codici originali ed esplosi',
        aftermarket: 'Corrispondenze aftermarket',
        history: 'Storico ricerche condiviso',
        whatsapp: 'Ricerca via WhatsApp',
        priority: 'Assistenza prioritaria',
        onboarding: 'Configurazione con il nostro team',
      },
    },
    faq: {
      label: 'Domande frequenti',
      title: 'Domande sui prezzi',
      talkTitle: 'Preferisce parlare con una persona?',
      talkText:
        'Prenoti una chiamata con il nostro team. Risponderemo alle sue domande e la aiuteremo a iniziare.',
      items: [
        [
          'C’è una prova gratuita?',
          'Sì. Ogni piano inizia con una prova gratuita di {days} giorni, così può provare Parts Relay sui suoi lavori prima di pagare.',
        ],
        [
          'Parts Relay vende ricambi?',
          'No. Parts Relay trova il codice ricambio giusto per il veicolo. Lei continua a ordinare dal suo fornitore abituale, che conferma prezzo, disponibilità e compatibilità.',
        ],
        [
          'Quali paesi copre?',
          'Le targhe vengono cercate nel paese impostato per la sua azienda. Sono disponibili 33 paesi: i paesi dell’UE e del SEE, la Svizzera, il Regno Unito e gli Stati Uniti.',
        ],
        [
          'Chi nel mio team può usarlo?',
          'Ci sono tre ruoli. Il titolare gestisce l’azienda e il team, gli amministratori gestiscono i contatti WhatsApp e invitano le persone, e i lettori fanno le ricerche. Tutti accedono con Google o con un link inviato via email.',
        ],
        [
          'In quali lingue è disponibile l’app?',
          'Inglese e italiano, da scegliere su ogni dispositivo.',
        ],
      ],
    },
  },
};
