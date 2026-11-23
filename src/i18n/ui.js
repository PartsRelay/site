// Languages the site is published in, and the text shared by every page:
// the header, the footer and the language suggestion bar.
// Only the pages listed in translatedPaths exist in every language. Any other
// page is English only, and links to it stay English from any language.

export const defaultLocale = 'en';

// Each language by its own name, with the English name beside it for readers who
// don't recognise it.
export const locales = {
  en: { name: 'English' },
  de: { name: 'Deutsch', english: 'German' },
  fr: { name: 'Français', english: 'French' },
  es: { name: 'Español', english: 'Spanish' },
  it: { name: 'Italiano', english: 'Italian' },
};

export const translatedPaths = [
  '/',
  '/about/',
  '/brand/',
  '/distributors/',
  '/repair-shops/',
  '/guides/counter/',
  '/guides/guidebook/',
  '/guides/vehicle-identification/',
  '/library/',
  '/journal/',
  '/journal/alternator-labels/',
  '/journal/brake-pad-sets/',
  '/journal/mirror-glass/',
  '/tools/vin-check/',
  '/tools/part-details/',
  '/tools/parts-diagrams/',
  '/workshops/',
  '/workshops/first-request/',
  '/workshops/fit-check/',
  '/workshops/handoff/',
];

/** Splits a URL path into its language and the English path it matches. */
export function splitLocale(pathname) {
  const [, first] = pathname.split('/');
  if (first in locales && first !== defaultLocale) {
    return { locale: first, path: pathname.slice(first.length + 1) || '/' };
  }
  return { locale: defaultLocale, path: pathname };
}

/** The address of an English path in another language, if that page exists there. */
export function localizedPath(locale, href) {
  if (locale === defaultLocale || !href.startsWith('/')) return href;
  const [path, hash] = href.split('#');
  if (!translatedPaths.includes(path)) return href;
  return `/${locale}${path}` + (hash ? `#${hash}` : '');
}

/** The language of the page being built, from its address. */
export function localeOf(url) {
  return splitLocale(url.pathname).locale;
}

/** Every language version of a page, or an empty list when the page is English only. */
export function alternates(path) {
  if (!translatedPaths.includes(path)) return [];
  return Object.keys(locales).map((locale) => ({ locale, href: localizedPath(locale, path) }));
}

export const ui = {
  en: {
    skip: 'Skip to content',
    workshop: { poster: 'Workshop', back: 'All workshops' },
    banner: {
      region: 'Announcement',
      wide: 'Have the vehicle identification number?',
      short: 'Have the VIN?',
      link: 'Check its format',
      dismiss: 'Dismiss announcement',
    },
    nav: {
      main: 'Main navigation',
      home: 'Parts Relay home',
      mobileContact: 'Contact the Parts Relay team',
      contact: 'Contact us',
      open: 'Open navigation',
      close: 'Close navigation',
    },
    groups: {
      solutions: 'Solutions',
      teams: 'Teams',
      workflow: 'Workflow',
      resources: 'Resources',
    },
    items: {
      vin: ['VIN format check', 'Check a 17-character VIN for typing errors.'],
      diagrams: ['Parts diagrams', 'Identify a piece in an exploded view.'],
      details: ['Part details', 'Compare part numbers and descriptions.'],
      shops: ['Repair shops', 'Turn a repair order into an enquiry.'],
      distributors: ['Distributors', 'Work through your company’s search queue.'],
      how: ['How it works', 'See what goes into a supplier enquiry.'],
      prepare: ['Prepare a supplier enquiry', 'Get a parts enquiry ready to send.'],
      workshops: ['Workshops', 'Use a worksheet on the job.'],
      library: ['All guides', 'Find a guide for the job at hand.'],
      guidebook: ['Parts guidebook', 'Get a parts enquiry ready to send.'],
      vehicle: ['Vehicle identification', 'Check a vehicle that doesn’t look right.'],
      about: ['About Parts Relay', 'Learn who Parts Relay is for.'],
      privacy: ['Privacy Policy', 'How this site handles personal data.'],
      journal: ['Journal', 'Read about the parts behind the enquiry.'],
      counter: ['Counter guide', 'Work out which headlamp parts to quote.'],
      brand: ['Brand assets', 'Get the logo files and type specifications.'],
    },
    footer: {
      productEnquiries: 'Product enquiries',
      checkVin: 'Check a VIN’s format',
      openLibrary: 'Open guide library',
      atCounter: 'At the counter',
      onJob: 'On the job',
      process: 'The enquiry process',
      library: 'Guide library',
      journal: 'Parts Relay Journal',
      about: 'About',
      privacy: 'Privacy',
      cookies: 'Cookies',
      language: 'Language',
    },
    suggest: {
      text: 'This page is also available in English.',
      go: 'View in English',
      close: 'Close',
    },
  },
  de: {
    skip: 'Zum Inhalt springen',
    workshop: { poster: 'Workshop', back: 'Alle Workshops' },
    banner: {
      region: 'Hinweis',
      wide: 'Haben Sie die Fahrzeug-Identifizierungsnummer?',
      short: 'Haben Sie die FIN?',
      link: 'Format prüfen',
      dismiss: 'Hinweis schließen',
    },
    nav: {
      main: 'Hauptnavigation',
      home: 'Parts Relay Startseite',
      mobileContact: 'Das Parts Relay Team kontaktieren',
      contact: 'Kontakt',
      open: 'Navigation öffnen',
      close: 'Navigation schließen',
    },
    groups: {
      solutions: 'Lösungen',
      teams: 'Teams',
      workflow: 'Ablauf',
      resources: 'Ressourcen',
    },
    items: {
      vin: ['FIN-Formatprüfung', 'Eine 17-stellige FIN auf Tippfehler prüfen.'],
      diagrams: ['Teilezeichnungen', 'Ein Teil in einer Explosionszeichnung finden.'],
      details: ['Teiledetails', 'Teilenummern und Bezeichnungen vergleichen.'],
      shops: ['Werkstätten', 'Aus einem Reparaturauftrag eine Anfrage machen.'],
      distributors: ['Händler', 'Die Suchliste Ihres Unternehmens abarbeiten.'],
      how: ['So funktioniert es', 'Was in eine Lieferantenanfrage gehört.'],
      prepare: ['Lieferantenanfrage vorbereiten', 'Eine Teileanfrage versandfertig machen.'],
      workshops: ['Workshops', 'Ein Arbeitsblatt bei der Arbeit nutzen.'],
      library: ['Alle Ratgeber', 'Den passenden Ratgeber für die Aufgabe finden.'],
      guidebook: ['Teile-Handbuch', 'Eine Teileanfrage versandfertig machen.'],
      vehicle: ['Fahrzeugidentifizierung', 'Ein Fahrzeug prüfen, das nicht stimmt.'],
      about: ['Über Parts Relay', 'Für wen Parts Relay gedacht ist.'],
      privacy: ['Datenschutzerklärung', 'Wie diese Website personenbezogene Daten behandelt.'],
      journal: ['Journal', 'Über die Teile hinter der Anfrage lesen.'],
      counter: ['Theken-Ratgeber', 'Herausfinden, welche Scheinwerferteile angeboten werden.'],
      brand: ['Markenmaterial', 'Logodateien und Schriftangaben herunterladen.'],
    },
    footer: {
      productEnquiries: 'Produktanfragen',
      checkVin: 'FIN-Format prüfen',
      openLibrary: 'Ratgeber-Bibliothek öffnen',
      atCounter: 'An der Theke',
      onJob: 'Bei der Arbeit',
      process: 'Der Anfrageprozess',
      library: 'Ratgeber-Bibliothek',
      journal: 'Parts Relay Journal',
      about: 'Über uns',
      privacy: 'Datenschutz',
      cookies: 'Cookies',
      language: 'Sprache',
    },
    suggest: {
      text: 'Diese Seite gibt es auch auf Deutsch.',
      go: 'Auf Deutsch ansehen',
      close: 'Schließen',
    },
  },
  fr: {
    skip: 'Aller au contenu',
    workshop: { poster: 'Atelier pratique', back: 'Tous les ateliers pratiques' },
    banner: {
      region: 'Annonce',
      wide: 'Vous avez le numéro d’identification du véhicule ?',
      short: 'Vous avez le VIN ?',
      link: 'Vérifier son format',
      dismiss: 'Fermer l’annonce',
    },
    nav: {
      main: 'Navigation principale',
      home: 'Accueil Parts Relay',
      mobileContact: 'Contacter l’équipe Parts Relay',
      contact: 'Nous contacter',
      open: 'Ouvrir la navigation',
      close: 'Fermer la navigation',
    },
    groups: {
      solutions: 'Solutions',
      teams: 'Équipes',
      workflow: 'Méthode',
      resources: 'Ressources',
    },
    items: {
      vin: ['Vérification du VIN', 'Repérer les fautes de frappe dans un VIN à 17 caractères.'],
      diagrams: ['Vues éclatées', 'Identifier une pièce sur une vue éclatée.'],
      details: ['Détails des pièces', 'Comparer références et désignations.'],
      shops: ['Garages', 'Transformer un ordre de réparation en demande.'],
      distributors: ['Distributeurs', 'Traiter la file de recherches de votre entreprise.'],
      how: ['Comment ça marche', 'Ce que contient une demande au fournisseur.'],
      prepare: [
        'Préparer une demande fournisseur',
        'Préparer une demande de pièces prête à envoyer.',
      ],
      workshops: ['Ateliers pratiques', 'Utiliser une fiche de travail sur le terrain.'],
      library: ['Tous les guides', 'Trouver le guide adapté à la tâche.'],
      guidebook: ['Guide des pièces', 'Préparer une demande de pièces prête à envoyer.'],
      vehicle: ['Identification du véhicule', 'Vérifier un véhicule qui ne semble pas correct.'],
      about: ['À propos de Parts Relay', 'Découvrir à qui s’adresse Parts Relay.'],
      privacy: ['Politique de confidentialité', 'Comment ce site traite les données personnelles.'],
      journal: ['Journal', 'Lire sur les pièces derrière la demande.'],
      counter: ['Guide du comptoir', 'Savoir quelles pièces de phare chiffrer.'],
      brand: ['Ressources de marque', 'Obtenir les logos et les spécifications typographiques.'],
    },
    footer: {
      productEnquiries: 'Demandes sur le produit',
      checkVin: 'Vérifier le format d’un VIN',
      openLibrary: 'Ouvrir la bibliothèque de guides',
      atCounter: 'Au comptoir',
      onJob: 'Sur le terrain',
      process: 'Le processus de demande',
      library: 'Bibliothèque de guides',
      journal: 'Journal Parts Relay',
      about: 'À propos',
      privacy: 'Confidentialité',
      cookies: 'Cookies',
      language: 'Langue',
    },
    suggest: {
      text: 'Cette page existe aussi en français.',
      go: 'Voir en français',
      close: 'Fermer',
    },
  },
  es: {
    skip: 'Saltar al contenido',
    workshop: { poster: 'Práctica', back: 'Todas las prácticas' },
    banner: {
      region: 'Aviso',
      wide: '¿Tiene el número de identificación del vehículo?',
      short: '¿Tiene el VIN?',
      link: 'Compruebe su formato',
      dismiss: 'Cerrar aviso',
    },
    nav: {
      main: 'Navegación principal',
      home: 'Inicio de Parts Relay',
      mobileContact: 'Contactar con el equipo de Parts Relay',
      contact: 'Contacto',
      open: 'Abrir navegación',
      close: 'Cerrar navegación',
    },
    groups: {
      solutions: 'Soluciones',
      teams: 'Equipos',
      workflow: 'Proceso',
      resources: 'Recursos',
    },
    items: {
      vin: ['Comprobación del VIN', 'Detecte errores de escritura en un VIN de 17 caracteres.'],
      diagrams: ['Despieces', 'Identifique una pieza en un despiece.'],
      details: ['Detalles del recambio', 'Compare referencias y descripciones.'],
      shops: ['Talleres', 'Convierta una orden de reparación en una consulta.'],
      distributors: ['Distribuidores', 'Trabaje con la cola de búsquedas de su empresa.'],
      how: ['Cómo funciona', 'Qué incluye una consulta al proveedor.'],
      prepare: [
        'Preparar una consulta al proveedor',
        'Deje lista para enviar una consulta de recambios.',
      ],
      workshops: ['Prácticas', 'Use una hoja de trabajo durante la reparación.'],
      library: ['Todas las guías', 'Encuentre la guía para cada tarea.'],
      guidebook: ['Guía de recambios', 'Deje lista para enviar una consulta de recambios.'],
      vehicle: ['Identificación del vehículo', 'Compruebe un vehículo que no cuadra.'],
      about: ['Sobre Parts Relay', 'Para quién es Parts Relay.'],
      privacy: ['Política de privacidad', 'Cómo trata este sitio los datos personales.'],
      journal: ['Journal', 'Lea sobre las piezas detrás de la consulta.'],
      counter: ['Guía del mostrador', 'Sepa qué piezas del faro presupuestar.'],
      brand: ['Recursos de marca', 'Logotipos y especificaciones tipográficas.'],
    },
    footer: {
      productEnquiries: 'Consultas sobre el producto',
      checkVin: 'Comprobar el formato de un VIN',
      openLibrary: 'Abrir la biblioteca de guías',
      atCounter: 'En el mostrador',
      onJob: 'En el trabajo',
      process: 'El proceso de consulta',
      library: 'Biblioteca de guías',
      journal: 'Journal de Parts Relay',
      about: 'Sobre nosotros',
      privacy: 'Privacidad',
      cookies: 'Cookies',
      language: 'Idioma',
    },
    suggest: {
      text: 'Esta página también está disponible en español.',
      go: 'Ver en español',
      close: 'Cerrar',
    },
  },
  it: {
    skip: 'Vai al contenuto',
    workshop: { poster: 'Esercitazione', back: 'Tutte le esercitazioni' },
    banner: {
      region: 'Avviso',
      wide: 'Ha il numero di identificazione del veicolo?',
      short: 'Ha il VIN?',
      link: 'Controlli il formato',
      dismiss: 'Chiudi avviso',
    },
    nav: {
      main: 'Navigazione principale',
      home: 'Home di Parts Relay',
      mobileContact: 'Contatta il team di Parts Relay',
      contact: 'Contatti',
      open: 'Apri navigazione',
      close: 'Chiudi navigazione',
    },
    groups: {
      solutions: 'Soluzioni',
      teams: 'Team',
      workflow: 'Processo',
      resources: 'Risorse',
    },
    items: {
      vin: ['Controllo del VIN', 'Trovi errori di battitura in un VIN di 17 caratteri.'],
      diagrams: ['Esplosi ricambi', 'Identifichi un pezzo in un esploso.'],
      details: ['Dettagli ricambio', 'Confronti codici e descrizioni.'],
      shops: ['Officine', 'Trasformi un ordine di riparazione in una richiesta.'],
      distributors: ['Distributori', 'Gestisca la coda delle ricerche della sua azienda.'],
      how: ['Come funziona', 'Cosa serve in una richiesta al fornitore.'],
      prepare: [
        'Preparare una richiesta al fornitore',
        'Prepari una richiesta ricambi pronta da inviare.',
      ],
      workshops: ['Esercitazioni', 'Usi una scheda di lavoro in officina.'],
      library: ['Tutte le guide', 'Trovi la guida giusta per il lavoro.'],
      guidebook: ['Guida ai ricambi', 'Prepari una richiesta ricambi pronta da inviare.'],
      vehicle: ['Identificazione del veicolo', 'Controlli un veicolo che non torna.'],
      about: ['Informazioni su Parts Relay', 'Per chi è pensato Parts Relay.'],
      privacy: ['Informativa sulla privacy', 'Come questo sito tratta i dati personali.'],
      journal: ['Journal', 'Approfondimenti sui pezzi dietro la richiesta.'],
      counter: ['Guida al banco', 'Capire quali parti del faro quotare.'],
      brand: ['Materiali del marchio', 'Loghi e specifiche tipografiche.'],
    },
    footer: {
      productEnquiries: 'Informazioni sul prodotto',
      checkVin: 'Controlla il formato di un VIN',
      openLibrary: 'Apri la biblioteca delle guide',
      atCounter: 'Al banco',
      onJob: 'Sul lavoro',
      process: 'Il processo di richiesta',
      library: 'Biblioteca delle guide',
      journal: 'Journal di Parts Relay',
      about: 'Chi siamo',
      privacy: 'Privacy',
      cookies: 'Cookie',
      language: 'Lingua',
    },
    suggest: {
      text: 'Questa pagina è disponibile anche in italiano.',
      go: 'Vedi in italiano',
      close: 'Chiudi',
    },
  },
};
