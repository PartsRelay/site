// Resource library text in every language. The filter keys (All, Guides, Tools,
// Workflows, Workshops, Journal) stay in English in the markup; only their labels
// are translated. {n} in the count is replaced with the number of results.

export const library = {
  en: {
    title: 'Resource library | Parts Relay',
    description:
      'Find guides, parts articles and worksheets for the repair order on your desk. Search by topic, part or vehicle detail.',
    heading: 'Resource library',
    intro:
      'Look up a term such as VIN, or choose a topic to find an exercise, a diagram or help with a question from the shop.',
    filterLabel: 'Filter by topic',
    filters: {
      All: 'All',
      Guides: 'Guides',
      Tools: 'Tools',
      Workflows: 'Workflows',
      Workshops: 'Workshops',
      Journal: 'Journal',
    },
    searchLabel: 'Search guides',
    searchPlaceholder: 'Search…',
    count: ['{n} result', '{n} results'],
    items: [
      [
        'VIN format check',
        'Check a VIN for length and mistyped characters before sharing it with a supplier.',
        'Vehicle ID',
      ],
      [
        'Getting started',
        'Take a job from a technician’s note to a message ready for your supplier.',
        'Quickstart',
      ],
      [
        'For repair shops',
        'Decide which details from the technician’s notes belong in an enquiry.',
        'Service desk',
      ],
      [
        'For distributors',
        'See how counter staff pick up incoming searches and follow up with a shop.',
        'Parts counter',
      ],
      [
        'Parts diagrams',
        'Use a drawing to tell which pieces belong to the assembly.',
        'Illustrations',
      ],
      [
        'Vehicle identification',
        'Troubleshoot a VIN that’s missing or returns an unexpected model.',
        'Vehicle ID',
      ],
      [
        'Part descriptions',
        'Compare original and aftermarket references before asking for a quote.',
        'Components',
      ],
      [
        'At the counter',
        'Work out which questions to settle before you quote a replacement headlamp.',
        'Fit check',
      ],
      [
        'Self-guided workshops',
        'Pick a worksheet for the service desk, a supplier callback or the next shift.',
        'Worksheets',
      ],
      [
        'Parts Relay Journal',
        'Field notes on brake kits, alternator labels and door mirrors.',
        'Articles',
      ],
    ],
    emptyTitle: 'No guides found',
    emptyText: 'Choose All to search the whole library, or try VIN or diagrams.',
    reset: 'Clear filters',
    pathsTitle: 'Where did the enquiry stall?',
    paths: [
      [
        'The record shows a different car',
        'The vehicle guide covers model discrepancies and the checks to make when the catalogue has no result.',
        'Check the vehicle record',
      ],
      [
        'Two pieces share a name',
        'Open the illustrations to see where each piece sits and what you might have to buy with it.',
        'Compare the drawings',
      ],
      [
        'The next shift needs an answer',
        'The headlamp guide covers the open fit questions to record before someone else takes the call.',
        'Open the headlamp guide',
      ],
    ],
  },
  de: {
    title: 'Ratgeber-Bibliothek | Parts Relay',
    description:
      'Finden Sie Ratgeber, Fachartikel zu Teilen und Arbeitsblätter zum Reparaturauftrag auf Ihrem Tisch. Suchen Sie nach Thema, Teil oder Fahrzeugangabe.',
    heading: 'Ratgeber-Bibliothek',
    intro:
      'Suchen Sie nach einem Begriff wie FIN oder wählen Sie ein Thema, um eine Übung, eine Zeichnung oder Hilfe bei einer Frage aus der Werkstatt zu finden.',
    filterLabel: 'Nach Thema filtern',
    filters: {
      All: 'Alle',
      Guides: 'Ratgeber',
      Tools: 'Werkzeuge',
      Workflows: 'Abläufe',
      Workshops: 'Workshops',
      Journal: 'Journal',
    },
    searchLabel: 'Ratgeber durchsuchen',
    searchPlaceholder: 'Suchen…',
    count: ['{n} Ergebnis', '{n} Ergebnisse'],
    items: [
      [
        'FIN-Formatprüfung',
        'Prüfen Sie Länge und vertippte Zeichen einer FIN, bevor Sie sie an einen Lieferanten weitergeben.',
        'Fahrzeug-ID',
      ],
      [
        'Erste Schritte',
        'Vom Zettel des Mechanikers zur Nachricht, die an Ihren Lieferanten rausgehen kann.',
        'Schnellstart',
      ],
      [
        'Für Werkstätten',
        'Entscheiden Sie, welche Angaben aus den Notizen des Mechanikers in eine Anfrage gehören.',
        'Serviceannahme',
      ],
      [
        'Für Händler',
        'So übernimmt die Theke eingehende Suchen und hakt bei der Werkstatt nach.',
        'Teiletheke',
      ],
      [
        'Teilezeichnungen',
        'Erkennen Sie anhand einer Zeichnung, welche Teile zur Baugruppe gehören.',
        'Zeichnungen',
      ],
      [
        'Fahrzeugidentifizierung',
        'Was tun, wenn die FIN fehlt oder ein unerwartetes Modell liefert?',
        'Fahrzeug-ID',
      ],
      [
        'Teilebezeichnungen',
        'Vergleichen Sie Original- und Aftermarket-Nummern, bevor Sie ein Angebot anfragen.',
        'Bauteile',
      ],
      [
        'An der Theke',
        'Klären Sie, welche Fragen offen sind, bevor Sie einen Ersatzscheinwerfer anbieten.',
        'Passprüfung',
      ],
      [
        'Workshops zum Selbstlernen',
        'Wählen Sie ein Arbeitsblatt für die Serviceannahme, einen Rückruf beim Lieferanten oder die nächste Schicht.',
        'Arbeitsblätter',
      ],
      [
        'Parts Relay Journal',
        'Praxisnotizen zu Bremsbelagsätzen, Lichtmaschinen-Typenschildern und Außenspiegeln.',
        'Artikel',
      ],
    ],
    emptyTitle: 'Keine Ratgeber gefunden',
    emptyText:
      'Wählen Sie „Alle“, um die ganze Bibliothek zu durchsuchen, oder versuchen Sie es mit FIN oder Zeichnungen.',
    reset: 'Filter zurücksetzen',
    pathsTitle: 'Wo hakt die Anfrage?',
    paths: [
      [
        'Die Daten zeigen ein anderes Auto',
        'Der Fahrzeug-Ratgeber behandelt Modellabweichungen und was zu prüfen ist, wenn der Katalog kein Ergebnis liefert.',
        'Fahrzeugdaten prüfen',
      ],
      [
        'Zwei Teile mit demselben Namen',
        'Öffnen Sie die Zeichnungen, um zu sehen, wo jedes Teil sitzt und was Sie womöglich mitbestellen müssen.',
        'Zeichnungen vergleichen',
      ],
      [
        'Die nächste Schicht braucht eine Antwort',
        'Der Scheinwerfer-Ratgeber nennt die offenen Passfragen, die Sie festhalten sollten, bevor jemand anderes den Anruf übernimmt.',
        'Scheinwerfer-Ratgeber öffnen',
      ],
    ],
  },
  fr: {
    title: 'Bibliothèque de ressources | Parts Relay',
    description:
      'Trouvez guides, articles sur les pièces et fiches de travail pour l’ordre de réparation posé sur votre bureau. Recherchez par thème, pièce ou donnée véhicule.',
    heading: 'Bibliothèque de ressources',
    intro:
      'Cherchez un terme comme VIN, ou choisissez un thème pour trouver un exercice, un schéma ou de l’aide sur une question venue de l’atelier.',
    filterLabel: 'Filtrer par thème',
    filters: {
      All: 'Tout',
      Guides: 'Guides',
      Tools: 'Outils',
      Workflows: 'Méthodes',
      Workshops: 'Ateliers',
      Journal: 'Journal',
    },
    searchLabel: 'Rechercher dans les guides',
    searchPlaceholder: 'Rechercher…',
    count: ['{n} résultat', '{n} résultats'],
    items: [
      [
        'Vérification du VIN',
        'Contrôlez la longueur d’un VIN et repérez les caractères mal saisis avant de le transmettre à un fournisseur.',
        'ID véhicule',
      ],
      [
        'Premiers pas',
        'Passez de la note du mécanicien à un message prêt à partir chez votre fournisseur.',
        'Démarrage rapide',
      ],
      [
        'Pour les garages',
        'Décidez quelles informations des notes du mécanicien ont leur place dans une demande.',
        'Réception atelier',
      ],
      [
        'Pour les distributeurs',
        'Voyez comment le comptoir prend en charge les recherches entrantes et relance le garage.',
        'Comptoir pièces',
      ],
      [
        'Vues éclatées',
        'Servez-vous d’un schéma pour savoir quelles pièces font partie de l’ensemble.',
        'Illustrations',
      ],
      [
        'Identification du véhicule',
        'Que faire quand le VIN manque ou renvoie un modèle inattendu.',
        'ID véhicule',
      ],
      [
        'Désignations des pièces',
        'Comparez références d’origine et adaptables avant de demander un devis.',
        'Composants',
      ],
      [
        'Au comptoir',
        'Identifiez les questions à régler avant de chiffrer un phare de remplacement.',
        'Compatibilité',
      ],
      [
        'Ateliers en autonomie',
        'Choisissez une fiche pour la réception atelier, un rappel fournisseur ou l’équipe suivante.',
        'Fiches de travail',
      ],
      [
        'Journal Parts Relay',
        'Notes de terrain sur les kits de plaquettes, les étiquettes d’alternateur et les rétroviseurs.',
        'Articles',
      ],
    ],
    emptyTitle: 'Aucun guide trouvé',
    emptyText:
      'Choisissez « Tout » pour chercher dans toute la bibliothèque, ou essayez VIN ou schéma.',
    reset: 'Effacer les filtres',
    pathsTitle: 'Où la demande bloque-t-elle ?',
    paths: [
      [
        'La fiche indique une autre voiture',
        'Le guide véhicule traite des écarts de modèle et des vérifications à faire quand le catalogue ne trouve rien.',
        'Vérifier la fiche véhicule',
      ],
      [
        'Deux pièces portent le même nom',
        'Ouvrez les illustrations pour voir où se trouve chaque pièce et ce que vous devrez peut-être acheter avec.',
        'Comparer les schémas',
      ],
      [
        'L’équipe suivante attend une réponse',
        'Le guide des phares liste les questions de compatibilité à noter avant qu’un collègue reprenne l’appel.',
        'Ouvrir le guide des phares',
      ],
    ],
  },
  es: {
    title: 'Biblioteca de recursos | Parts Relay',
    description:
      'Encuentre guías, artículos sobre recambios y hojas de trabajo para la orden de reparación que tiene sobre la mesa. Busque por tema, pieza o dato del vehículo.',
    heading: 'Biblioteca de recursos',
    intro:
      'Busque un término como VIN o elija un tema para encontrar un ejercicio, un despiece o ayuda con una duda del taller.',
    filterLabel: 'Filtrar por tema',
    filters: {
      All: 'Todo',
      Guides: 'Guías',
      Tools: 'Herramientas',
      Workflows: 'Procesos',
      Workshops: 'Prácticas',
      Journal: 'Journal',
    },
    searchLabel: 'Buscar guías',
    searchPlaceholder: 'Buscar…',
    count: ['{n} resultado', '{n} resultados'],
    items: [
      [
        'Comprobación del VIN',
        'Compruebe la longitud de un VIN y los caracteres mal escritos antes de pasárselo a un proveedor.',
        'ID vehículo',
      ],
      [
        'Primeros pasos',
        'Lleve un trabajo desde la nota del mecánico hasta un mensaje listo para su proveedor.',
        'Inicio rápido',
      ],
      [
        'Para talleres',
        'Decida qué datos de las notas del mecánico deben ir en una consulta.',
        'Recepción',
      ],
      [
        'Para distribuidores',
        'Vea cómo el mostrador recoge las búsquedas entrantes y hace el seguimiento con el taller.',
        'Mostrador',
      ],
      [
        'Despieces',
        'Use un despiece para saber qué piezas forman parte del conjunto.',
        'Ilustraciones',
      ],
      [
        'Identificación del vehículo',
        'Qué hacer cuando falta el VIN o devuelve un modelo inesperado.',
        'ID vehículo',
      ],
      [
        'Descripciones de piezas',
        'Compare referencias originales y aftermarket antes de pedir presupuesto.',
        'Componentes',
      ],
      [
        'En el mostrador',
        'Aclare qué preguntas resolver antes de presupuestar un faro de recambio.',
        'Compatibilidad',
      ],
      [
        'Prácticas autoguiadas',
        'Elija una hoja para la recepción, una llamada del proveedor o el siguiente turno.',
        'Hojas de trabajo',
      ],
      [
        'Journal de Parts Relay',
        'Notas de campo sobre juegos de pastillas, etiquetas de alternador y retrovisores.',
        'Artículos',
      ],
    ],
    emptyTitle: 'No se han encontrado guías',
    emptyText: 'Elija «Todo» para buscar en toda la biblioteca, o pruebe con VIN o despiece.',
    reset: 'Borrar filtros',
    pathsTitle: '¿Dónde se ha atascado la consulta?',
    paths: [
      [
        'La ficha muestra otro coche',
        'La guía del vehículo trata las discrepancias de modelo y qué comprobar cuando el catálogo no da resultado.',
        'Compruebe la ficha del vehículo',
      ],
      [
        'Dos piezas con el mismo nombre',
        'Abra las ilustraciones para ver dónde va cada pieza y qué podría tener que comprar con ella.',
        'Compare los despieces',
      ],
      [
        'El siguiente turno necesita una respuesta',
        'La guía de faros recoge las dudas de montaje que conviene anotar antes de que otra persona atienda la llamada.',
        'Abra la guía de faros',
      ],
    ],
  },
  it: {
    title: 'Biblioteca risorse | Parts Relay',
    description:
      'Trovi guide, articoli sui ricambi e schede di lavoro per l’ordine di riparazione che ha sul tavolo. Cerchi per argomento, pezzo o dato del veicolo.',
    heading: 'Biblioteca risorse',
    intro:
      'Cerchi un termine come VIN, oppure scelga un argomento per trovare un esercizio, un esploso o un aiuto per una domanda dell’officina.',
    filterLabel: 'Filtra per argomento',
    filters: {
      All: 'Tutto',
      Guides: 'Guide',
      Tools: 'Strumenti',
      Workflows: 'Processi',
      Workshops: 'Esercitazioni',
      Journal: 'Journal',
    },
    searchLabel: 'Cerca nelle guide',
    searchPlaceholder: 'Cerca…',
    count: ['{n} risultato', '{n} risultati'],
    items: [
      [
        'Controllo del VIN',
        'Controlli lunghezza e caratteri digitati male di un VIN prima di passarlo a un fornitore.',
        'ID veicolo',
      ],
      [
        'Per iniziare',
        'Porti un lavoro dalla nota del meccanico a un messaggio pronto per il fornitore.',
        'Avvio rapido',
      ],
      [
        'Per le officine',
        'Decida quali dati delle note del meccanico vanno inseriti in una richiesta.',
        'Accettazione',
      ],
      [
        'Per i distributori',
        'Veda come il banco prende in carico le ricerche in arrivo e ricontatta l’officina.',
        'Banco ricambi',
      ],
      [
        'Esplosi ricambi',
        'Usi un esploso per capire quali pezzi fanno parte del gruppo.',
        'Illustrazioni',
      ],
      [
        'Identificazione del veicolo',
        'Cosa fare se il VIN manca o restituisce un modello inatteso.',
        'ID veicolo',
      ],
      [
        'Descrizioni dei ricambi',
        'Confronti codici originali e aftermarket prima di chiedere un preventivo.',
        'Componenti',
      ],
      [
        'Al banco',
        'Chiarisca quali domande risolvere prima di quotare un faro di ricambio.',
        'Compatibilità',
      ],
      [
        'Esercitazioni in autonomia',
        'Scelga una scheda per l’accettazione, la richiamata di un fornitore o il turno successivo.',
        'Schede di lavoro',
      ],
      [
        'Journal di Parts Relay',
        'Appunti dal campo su kit pastiglie, etichette degli alternatori e specchietti.',
        'Articoli',
      ],
    ],
    emptyTitle: 'Nessuna guida trovata',
    emptyText: 'Scelga «Tutto» per cercare in tutta la biblioteca, oppure provi VIN o esploso.',
    reset: 'Cancella filtri',
    pathsTitle: 'Dove si è fermata la richiesta?',
    paths: [
      [
        'La scheda mostra un’altra auto',
        'La guida al veicolo tratta le differenze di modello e i controlli da fare quando il catalogo non trova nulla.',
        'Controlli la scheda del veicolo',
      ],
      [
        'Due pezzi con lo stesso nome',
        'Apra le illustrazioni per vedere dove si trova ogni pezzo e cosa potrebbe dover acquistare insieme.',
        'Confronti i disegni',
      ],
      [
        'Il turno successivo aspetta una risposta',
        'La guida ai fari elenca i dubbi di montaggio da annotare prima che un collega prenda la chiamata.',
        'Apra la guida ai fari',
      ],
    ],
  },
};
