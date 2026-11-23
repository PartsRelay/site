// Journal index text in every language, plus the topic labels, read time and
// cover art labels the journal articles share. The topic keys stay in English in
// the markup; only their labels are translated. {n} in the count is replaced with
// the number of results.

export const journal = {
  en: {
    title: 'Journal | Parts Relay',
    description:
      'Read field notes on sourcing parts, including missing kit items, worn reference labels and choosing the right assembly.',
    heading: 'Journal',
    intro:
      'A few questions that come up at the parts counter, from what’s in the box to what you can still read on the old unit.',
    filterLabel: 'Filter by topic',
    all: 'All',
    topics: {
      'Repair shops': 'Repair shops',
      'Distributor counter': 'Distributor counter',
      'Parts identification': 'Parts identification',
    },
    searchLabel: 'Search articles',
    searchPlaceholder: 'Search…',
    count: ['{n} result', '{n} results'],
    readTime: '3 min read',
    art: {
      pads: ['Illustration of a brake disc and separated pad set', 'Front axle', 'PAD SET'],
      alt: ['Technical illustration of an alternator', 'Electrical', 'ALTERNATOR'],
      mirror: [
        'Editorial illustration of the glass separated from a left mirror',
        'Bodywork',
        'MIRROR GLASS',
      ],
    },
    stories: {
      pads: [
        'The missing wear sensor',
        'A front pad set has a catalogue number. Its wear sensor might need a line of its own on the quote.',
      ],
      alt: [
        'When the alternator number has worn away',
        'The rating on the old unit is legible. The end of the part number has rubbed off. What can the shop tell the counter?',
      ],
      mirror: [
        'Before you quote a door mirror',
        'A crack in heated glass and a broken mounting base send the counter to different places in the drawing.',
      ],
    },
    emptyTitle: 'No articles found',
    emptyText: 'Try a part name such as alternator, or clear your filters to see every story.',
    reset: 'Clear filters',
    noteTitle: 'What to get in writing on a quote',
    noteText:
      'A supplier may offer an alternative to the part you asked about. Before you give the workshop a collection time, find out exactly which item the offer covers.',
    noteItems: [
      [
        'Which reference?',
        'Write the supplier’s number beside the vehicle and fitting position. If their catalogue lists two versions, ask what distinguishes the one they’ve quoted.',
      ],
      [
        'What comes with it?',
        'Get a separate line for any hardware the technician needs to buy. A quote for a kit should say what’s inside.',
      ],
      [
        'When can the shop get it?',
        'Confirm price, available quantity and collection or delivery time for each quoted reference. A substitute can have a different lead time.',
      ],
    ],
    exercise: 'Try the fit-check exercise',
    longerRead: 'Longer read:',
    longerReadLink: 'the headlamp that still works with a broken mounting tab',
  },
  de: {
    title: 'Journal | Parts Relay',
    description:
      'Praxisnotizen zur Teilebeschaffung: fehlende Teile im Satz, abgenutzte Typenschilder und die Wahl der richtigen Baugruppe.',
    heading: 'Journal',
    intro:
      'Ein paar Fragen, die an der Teiletheke immer wieder aufkommen – vom Inhalt der Packung bis zu dem, was auf dem Altteil noch lesbar ist.',
    filterLabel: 'Nach Thema filtern',
    all: 'Alle',
    topics: {
      'Repair shops': 'Werkstätten',
      'Distributor counter': 'Händlertheke',
      'Parts identification': 'Teileidentifizierung',
    },
    searchLabel: 'Artikel durchsuchen',
    searchPlaceholder: 'Suchen…',
    count: ['{n} Ergebnis', '{n} Ergebnisse'],
    readTime: '3 Min. Lesezeit',
    art: {
      pads: [
        'Illustration einer Bremsscheibe mit abgenommenem Belagsatz',
        'Vorderachse',
        'BELAGSATZ',
      ],
      alt: ['Technische Illustration einer Lichtmaschine', 'Elektrik', 'LICHTMASCHINE'],
      mirror: [
        'Illustration des Spiegelglases, abgenommen von einem linken Außenspiegel',
        'Karosserie',
        'SPIEGELGLAS',
      ],
    },
    stories: {
      pads: [
        'Der fehlende Verschleißsensor',
        'Ein vorderer Belagsatz hat eine Katalognummer. Sein Verschleißsensor braucht im Angebot womöglich eine eigene Zeile.',
      ],
      alt: [
        'Wenn die Nummer auf der Lichtmaschine abgerieben ist',
        'Der Nennstrom auf dem Altteil ist lesbar, das Ende der Teilenummer ist abgerieben. Was kann die Werkstatt der Theke sagen?',
      ],
      mirror: [
        'Bevor Sie einen Außenspiegel anbieten',
        'Ein Sprung im beheizten Glas und ein abgebrochener Spiegelfuß führen die Theke an verschiedene Stellen der Zeichnung.',
      ],
    },
    emptyTitle: 'Keine Artikel gefunden',
    emptyText:
      'Versuchen Sie es mit einem Teilenamen wie Lichtmaschine, oder setzen Sie die Filter zurück, um alle Artikel zu sehen.',
    reset: 'Filter zurücksetzen',
    noteTitle: 'Was Sie sich beim Angebot schriftlich geben lassen sollten',
    noteText:
      'Ein Lieferant bietet vielleicht eine Alternative zum angefragten Teil an. Bevor Sie der Werkstatt eine Abholzeit nennen, klären Sie genau, welchen Artikel das Angebot umfasst.',
    noteItems: [
      [
        'Welche Nummer?',
        'Notieren Sie die Nummer des Lieferanten neben Fahrzeug und Einbauposition. Führt sein Katalog zwei Ausführungen, fragen Sie, worin sich die angebotene unterscheidet.',
      ],
      [
        'Was gehört dazu?',
        'Lassen Sie Kleinteile, die der Mechaniker zusätzlich braucht, als eigene Position aufführen. Ein Angebot für einen Satz sollte sagen, was enthalten ist.',
      ],
      [
        'Wann bekommt die Werkstatt es?',
        'Bestätigen Sie für jede angebotene Nummer Preis, verfügbare Menge und Abhol- oder Lieferzeit. Ein Ersatzartikel kann eine andere Lieferzeit haben.',
      ],
    ],
    exercise: 'Übung zur Passprüfung starten',
    longerRead: 'Ausführlicher:',
    longerReadLink:
      'der Scheinwerfer, der trotz abgebrochener Befestigungslasche noch funktioniert',
  },
  fr: {
    title: 'Journal | Parts Relay',
    description:
      'Des notes de terrain sur l’approvisionnement en pièces : éléments manquants d’un kit, étiquettes usées et choix du bon ensemble.',
    heading: 'Journal',
    intro:
      'Quelques questions qui reviennent au comptoir pièces, du contenu de la boîte à ce qu’on peut encore lire sur l’ancienne pièce.',
    filterLabel: 'Filtrer par thème',
    all: 'Tous',
    topics: {
      'Repair shops': 'Garages',
      'Distributor counter': 'Comptoir distributeur',
      'Parts identification': 'Identification des pièces',
    },
    searchLabel: 'Rechercher des articles',
    searchPlaceholder: 'Rechercher…',
    count: ['{n} résultat', '{n} résultats'],
    readTime: '3 min de lecture',
    art: {
      pads: [
        'Illustration d’un disque de frein et d’un jeu de plaquettes séparé',
        'Essieu avant',
        'PLAQUETTES',
      ],
      alt: ['Illustration technique d’un alternateur', 'Électricité', 'ALTERNATEUR'],
      mirror: [
        'Illustration de la glace détachée d’un rétroviseur gauche',
        'Carrosserie',
        'GLACE DE RÉTRO',
      ],
    },
    stories: {
      pads: [
        'Le témoin d’usure oublié',
        'Un jeu de plaquettes avant a sa référence catalogue. Son témoin d’usure peut demander une ligne à part sur le devis.',
      ],
      alt: [
        'Quand la référence de l’alternateur s’est effacée',
        'L’intensité est lisible sur l’ancienne pièce, mais la fin de la référence a disparu. Que peut dire le garage au comptoir ?',
      ],
      mirror: [
        'Avant de chiffrer un rétroviseur',
        'Une fissure dans la glace chauffante et un pied de fixation cassé n’envoient pas le comptoir au même endroit de la vue éclatée.',
      ],
    },
    emptyTitle: 'Aucun article trouvé',
    emptyText:
      'Essayez un nom de pièce comme alternateur, ou effacez les filtres pour voir tous les articles.',
    reset: 'Effacer les filtres',
    noteTitle: 'Ce qu’il faut obtenir par écrit sur un devis',
    noteText:
      'Un fournisseur peut proposer une alternative à la pièce demandée. Avant d’annoncer une heure d’enlèvement au garage, vérifiez exactement quel article couvre l’offre.',
    noteItems: [
      [
        'Quelle référence ?',
        'Notez la référence du fournisseur à côté du véhicule et de la position de montage. Si son catalogue en liste deux versions, demandez ce qui distingue celle qu’il a chiffrée.',
      ],
      [
        'Qu’est-ce qui est inclus ?',
        'Faites porter sur une ligne à part la visserie et les accessoires que le mécanicien doit acheter. Un devis pour un kit doit en préciser le contenu.',
      ],
      [
        'Quand le garage peut-il l’avoir ?',
        'Confirmez le prix, la quantité disponible et le délai d’enlèvement ou de livraison pour chaque référence chiffrée. Une pièce de substitution peut avoir un autre délai.',
      ],
    ],
    exercise: 'Essayer l’exercice de compatibilité',
    longerRead: 'Pour aller plus loin :',
    longerReadLink: 'le phare qui fonctionne encore malgré une patte de fixation cassée',
  },
  es: {
    title: 'Journal | Parts Relay',
    description:
      'Notas de campo sobre el aprovisionamiento de recambios: piezas que faltan en un juego, etiquetas desgastadas y cómo elegir el conjunto correcto.',
    heading: 'Journal',
    intro:
      'Algunas preguntas que surgen en el mostrador, desde lo que trae la caja hasta lo que aún se lee en la pieza vieja.',
    filterLabel: 'Filtrar por tema',
    all: 'Todos',
    topics: {
      'Repair shops': 'Talleres',
      'Distributor counter': 'Mostrador',
      'Parts identification': 'Identificación de piezas',
    },
    searchLabel: 'Buscar artículos',
    searchPlaceholder: 'Buscar…',
    count: ['{n} resultado', '{n} resultados'],
    readTime: '3 min de lectura',
    art: {
      pads: [
        'Ilustración de un disco de freno y un juego de pastillas separado',
        'Eje delantero',
        'PASTILLAS',
      ],
      alt: ['Ilustración técnica de un alternador', 'Electricidad', 'ALTERNADOR'],
      mirror: [
        'Ilustración del cristal separado de un retrovisor izquierdo',
        'Carrocería',
        'CRISTAL RETROVISOR',
      ],
    },
    stories: {
      pads: [
        'El sensor de desgaste que falta',
        'Un juego de pastillas delanteras tiene su referencia de catálogo. Su sensor de desgaste puede necesitar una línea propia en el presupuesto.',
      ],
      alt: [
        'Cuando la referencia del alternador se ha borrado',
        'El amperaje de la pieza vieja se lee bien, pero el final de la referencia se ha borrado. ¿Qué puede decirle el taller al mostrador?',
      ],
      mirror: [
        'Antes de presupuestar un retrovisor',
        'Una grieta en el cristal térmico y una base de anclaje rota llevan al mostrador a lugares distintos del despiece.',
      ],
    },
    emptyTitle: 'No se han encontrado artículos',
    emptyText:
      'Pruebe con el nombre de una pieza, como alternador, o borre los filtros para ver todos los artículos.',
    reset: 'Borrar filtros',
    noteTitle: 'Qué pedir por escrito en un presupuesto',
    noteText:
      'Un proveedor puede ofrecerle una alternativa a la pieza que consultó. Antes de dar al taller una hora de recogida, averigüe exactamente qué artículo cubre la oferta.',
    noteItems: [
      [
        '¿Qué referencia?',
        'Anote la referencia del proveedor junto al vehículo y la posición de montaje. Si su catálogo recoge dos versiones, pregunte qué distingue la que le ha presupuestado.',
      ],
      [
        '¿Qué incluye?',
        'Pida una línea aparte para la tornillería y los accesorios que el mecánico tenga que comprar. Un presupuesto de un kit debe indicar qué contiene.',
      ],
      [
        '¿Cuándo lo tendrá el taller?',
        'Confirme precio, cantidad disponible y plazo de recogida o entrega de cada referencia presupuestada. Una pieza alternativa puede tener otro plazo.',
      ],
    ],
    exercise: 'Pruebe el ejercicio de compatibilidad',
    longerRead: 'Más a fondo:',
    longerReadLink: 'el faro que sigue funcionando con una patilla de fijación rota',
  },
  it: {
    title: 'Journal | Parts Relay',
    description:
      'Appunti dal campo sull’approvvigionamento ricambi: pezzi mancanti nei kit, etichette consumate e scelta del gruppo giusto.',
    heading: 'Journal',
    intro:
      'Alcune domande che capitano al banco ricambi, da cosa c’è nella scatola a cosa si legge ancora sul pezzo vecchio.',
    filterLabel: 'Filtra per argomento',
    all: 'Tutti',
    topics: {
      'Repair shops': 'Officine',
      'Distributor counter': 'Banco ricambi',
      'Parts identification': 'Identificazione ricambi',
    },
    searchLabel: 'Cerca negli articoli',
    searchPlaceholder: 'Cerca…',
    count: ['{n} risultato', '{n} risultati'],
    readTime: '3 min di lettura',
    art: {
      pads: [
        'Illustrazione di un disco freno e di un kit pastiglie separato',
        'Asse anteriore',
        'KIT PASTIGLIE',
      ],
      alt: ['Illustrazione tecnica di un alternatore', 'Impianto elettrico', 'ALTERNATORE'],
      mirror: [
        'Illustrazione del vetro separato da uno specchietto sinistro',
        'Carrozzeria',
        'VETRO SPECCHIETTO',
      ],
    },
    stories: {
      pads: [
        'Il sensore d’usura mancante',
        'Un kit pastiglie anteriori ha un codice a catalogo. Il suo sensore d’usura potrebbe richiedere una riga a parte nel preventivo.',
      ],
      alt: [
        'Quando il codice dell’alternatore si è consumato',
        'L’amperaggio sul pezzo vecchio è leggibile, la parte finale del codice è sparita. Cosa può dire l’officina al banco?',
      ],
      mirror: [
        'Prima di quotare uno specchietto',
        'Una crepa nel vetro riscaldato e una base di fissaggio rotta portano il banco in punti diversi dell’esploso.',
      ],
    },
    emptyTitle: 'Nessun articolo trovato',
    emptyText:
      'Provi con il nome di un pezzo, come alternatore, oppure cancelli i filtri per vedere tutti gli articoli.',
    reset: 'Cancella filtri',
    noteTitle: 'Cosa farsi mettere per iscritto in un preventivo',
    noteText:
      'Un fornitore può proporre un’alternativa al pezzo richiesto. Prima di dare all’officina un orario di ritiro, verifichi esattamente quale articolo copre l’offerta.',
    noteItems: [
      [
        'Quale codice?',
        'Annoti il codice del fornitore accanto al veicolo e alla posizione di montaggio. Se il suo catalogo ne riporta due versioni, chieda cosa distingue quella quotata.',
      ],
      [
        'Cosa comprende?',
        'Chieda una riga separata per la minuteria che il meccanico deve acquistare. Un preventivo per un kit dovrebbe indicarne il contenuto.',
      ],
      [
        'Quando può averlo l’officina?',
        'Confermi prezzo, quantità disponibile e tempi di ritiro o consegna per ogni codice quotato. Un ricambio alternativo può avere tempi diversi.',
      ],
    ],
    exercise: 'Provi l’esercitazione sulla compatibilità',
    longerRead: 'Per approfondire:',
    longerReadLink: 'il faro che funziona ancora con una linguetta di fissaggio rotta',
  },
};
