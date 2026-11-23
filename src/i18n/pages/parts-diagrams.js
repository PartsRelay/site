// Parts diagrams page text in every language. The labels drawn inside the
// brake pad and alternator images are part of the image files.

export const partsDiagrams = {
  en: {
    title: 'Find the piece in the drawing | Parts Relay',
    description:
      'Read an exploded view of a brake, alternator or filter assembly and name the item you want the supplier to quote.',
    label: 'Parts diagrams',
    heading: 'Find the piece in the drawing',
    intro:
      'In an exploded view the pieces sit apart, in the order they fit together. Find the one you need, then look up its reference in the list for that figure.',
    explore: 'Explore diagrams',
    checkVin: 'Check a VIN',
    viewer: ['FIGURE VIEWER', 'PAD SET', 'FRONT AXLE'],
    figuresLabel: 'Figure viewer',
    figuresTitle: 'Three assemblies up close',
    figuresText:
      'These drawings show common component arrangements. Use your vehicle’s catalogue for the applicable reference.',
    choose: 'Select a parts illustration',
    figures: [
      {
        label: 'Brakes',
        name: 'Front brake pads',
        alt: 'Exploded view of inner and outer brake pads beside a brake disc',
        caption: 'Front axle',
        text: 'Look for the disc in the centre of the drawing. There’s a pad on each face.',
        notes: [
          [
            'Outer pad and inner pad',
            'Both belong to the front axle in this drawing. Use the vehicle record to identify the set.',
          ],
          [
            'Brake disc',
            'The disc sits between the pads. Check the job card to see if the technician wants discs as well.',
          ],
          [
            'Sensor and fitting hardware',
            'If the job calls for a sensor, clips or shims, check the kit listing for each item.',
          ],
        ],
      },
      {
        label: 'Electrical',
        name: 'Alternator',
        alt: 'Technical drawing of the alternator, pulley, connector and mounting points',
        caption: 'Charging system',
        text: 'Compare the drawing with the alternator still on the car. The plug and pulley are useful places to start.',
        notes: [
          [
            'Connector',
            'Look at the plug shape and the arrangement of its pins. Tell the counter if you can only read part of a marking.',
          ],
          [
            'Housing',
            'Read the output rating and manufacturer’s number from the label on the housing. Include the letters at the end.',
          ],
          [
            'Belt pulley',
            'Does the replacement come with the pulley? If the catalogue lists several, tell the counter which one you have.',
          ],
        ],
      },
      {
        label: 'Service parts',
        name: 'Filter cartridge',
        alt: 'Service illustration of a filter cartridge separated from its cap and housing',
        caption: 'Filter housing',
        text: 'The drawing shows the filter opened up. You can see where the cartridge sits once the cover is back on.',
        notes: [
          [
            'Cartridge',
            'The pleated element lifts out. If the shop is keeping the housing, ask for the cartridge.',
          ],
          [
            'Cover and housing',
            'Damaged threads or a broken mounting point can mean the shop needs the cover or housing itself. Identify which piece is damaged.',
          ],
          [
            'Seals',
            'The seal sits next to the cover in the drawing. Does it come in the cartridge kit, or does the counter need a second reference?',
          ],
        ],
      },
    ],
    pair: {
      vehicle: [
        'Choosing the vehicle',
        'If the drawing doesn’t resemble the unit in front of you, go back to the vehicle description.',
        'Vehicle guide',
      ],
      separate: [
        'Quoting a separate item',
        'Tell the counter which piece you want and whether you also need the hardware beside it.',
      ],
    },
    callout: {
      label: 'Catalogue drawings',
      title: 'Follow a callout to its part number',
      rows: [
        [
          'Open the right figure',
          'Look for the assembly under its catalogue section. Some sections have a parts list but no drawing.',
        ],
        [
          'Trace the callout line',
          'Follow the line from the piece to its callout number, then find that number in the figure’s list. A callout only identifies a position in that particular drawing.',
        ],
        [
          'Use the reference in the list',
          'Copy the full original equipment reference, including the suffix, with its description. Tell the distributor how many you need and which hardware they should check.',
        ],
      ],
    },
    housing: {
      label: 'Housing and fittings',
      title: 'One repair can need three catalogue entries',
      text: 'Look at the cover, its seal and the fasteners separately. A drawing can show all three together, even when the supplier sells each one individually.',
      notes: [
        ['Cover', 'Use the cover entry when the cover itself is damaged.'],
        [
          'Gasket',
          'The gasket has a number of its own. If you’re also ordering the cover, ask whether a gasket comes with it.',
        ],
        [
          'Mounting screw',
          'The screw also has a separate entry. Ask the workshop how many it needs.',
        ],
      ],
    },
    desk: {
      label: 'At the parts desk',
      title: 'Working with the figure you found',
      cards: [
        ['Parts guide', 'Describe a component'],
        ['Vehicle guide', 'Identify the vehicle'],
        ['Counter guide', 'Ask the parts counter'],
      ],
    },
    closing: {
      title: 'From callout to quote',
      text: 'Compare similar catalogue descriptions, then give the counter the item you found.',
      primary: 'Compare part descriptions',
      secondary: 'Read the counter guide',
    },
  },
  de: {
    title: 'Das Teil in der Zeichnung finden | Parts Relay',
    description:
      'Lesen Sie die Explosionszeichnung einer Bremse, Lichtmaschine oder Filterbaugruppe und benennen Sie das Teil, das der Lieferant anbieten soll.',
    label: 'Teilezeichnungen',
    heading: 'Das Teil in der Zeichnung finden',
    intro:
      'In einer Explosionszeichnung liegen die Teile auseinander, in der Reihenfolge, in der sie zusammengehören. Finden Sie das benötigte Teil und schlagen Sie seine Nummer in der Liste zur Abbildung nach.',
    explore: 'Zeichnungen ansehen',
    checkVin: 'FIN prüfen',
    viewer: ['ABBILDUNGEN', 'BELAGSATZ', 'VORDERACHSE'],
    figuresLabel: 'Abbildungen',
    figuresTitle: 'Drei Baugruppen im Detail',
    figuresText:
      'Diese Zeichnungen zeigen gängige Anordnungen von Bauteilen. Die zutreffende Nummer finden Sie im Katalog zu Ihrem Fahrzeug.',
    choose: 'Teilezeichnung auswählen',
    figures: [
      {
        label: 'Bremsen',
        name: 'Bremsbeläge vorn',
        alt: 'Explosionszeichnung von innerem und äußerem Bremsbelag neben einer Bremsscheibe',
        caption: 'Vorderachse',
        text: 'Suchen Sie die Scheibe in der Mitte der Zeichnung. Auf jeder Seite liegt ein Belag.',
        notes: [
          [
            'Äußerer und innerer Belag',
            'Beide gehören in dieser Zeichnung zur Vorderachse. Bestimmen Sie den Satz anhand der Fahrzeugdaten.',
          ],
          [
            'Bremsscheibe',
            'Die Scheibe sitzt zwischen den Belägen. Sehen Sie auf dem Auftrag nach, ob der Mechaniker auch Scheiben braucht.',
          ],
          [
            'Sensor und Zubehör',
            'Gehören Sensor, Klammern oder Dämpfungsbleche zum Auftrag, prüfen Sie für jedes Teil den Satzinhalt.',
          ],
        ],
      },
      {
        label: 'Elektrik',
        name: 'Lichtmaschine',
        alt: 'Technische Zeichnung der Lichtmaschine mit Riemenscheibe, Stecker und Befestigungspunkten',
        caption: 'Ladesystem',
        text: 'Vergleichen Sie die Zeichnung mit der Lichtmaschine im Fahrzeug. Stecker und Riemenscheibe sind ein guter Anfang.',
        notes: [
          [
            'Stecker',
            'Achten Sie auf die Steckerform und die Anordnung der Pins. Sagen Sie der Theke, wenn eine Markierung nur teilweise lesbar ist.',
          ],
          [
            'Gehäuse',
            'Lesen Sie Leistung und Herstellernummer vom Typenschild auf dem Gehäuse ab. Übernehmen Sie auch die Buchstaben am Ende.',
          ],
          [
            'Riemenscheibe',
            'Ist die Riemenscheibe beim Ersatzteil dabei? Listet der Katalog mehrere, sagen Sie der Theke, welche verbaut ist.',
          ],
        ],
      },
      {
        label: 'Wartungsteile',
        name: 'Filtereinsatz',
        alt: 'Serviceabbildung eines Filtereinsatzes, getrennt von Deckel und Gehäuse',
        caption: 'Filtergehäuse',
        text: 'Die Zeichnung zeigt den geöffneten Filter. Sie sehen, wo der Einsatz bei geschlossenem Deckel sitzt.',
        notes: [
          [
            'Filtereinsatz',
            'Das gefaltete Element lässt sich herausnehmen. Behält die Werkstatt das Gehäuse, fragen Sie nach dem Einsatz.',
          ],
          [
            'Deckel und Gehäuse',
            'Beschädigte Gewinde oder ein abgebrochener Befestigungspunkt können bedeuten, dass die Werkstatt Deckel oder Gehäuse selbst braucht. Bestimmen Sie, welches Teil beschädigt ist.',
          ],
          [
            'Dichtungen',
            'In der Zeichnung liegt die Dichtung neben dem Deckel. Ist sie im Filtersatz enthalten, oder braucht die Theke eine zweite Nummer?',
          ],
        ],
      },
    ],
    pair: {
      vehicle: [
        'Das Fahrzeug wählen',
        'Ähnelt die Zeichnung nicht dem Teil vor Ihnen, gehen Sie zurück zur Fahrzeugbeschreibung.',
        'Fahrzeug-Ratgeber',
      ],
      separate: [
        'Ein Einzelteil anfragen',
        'Sagen Sie der Theke, welches Teil Sie brauchen und ob auch das Befestigungsmaterial daneben dazugehört.',
      ],
    },
    callout: {
      label: 'Katalogzeichnungen',
      title: 'Von der Positionsnummer zur Teilenummer',
      rows: [
        [
          'Die richtige Abbildung öffnen',
          'Suchen Sie die Baugruppe in ihrem Katalogabschnitt. Manche Abschnitte haben eine Teileliste, aber keine Zeichnung.',
        ],
        [
          'Der Hinweislinie folgen',
          'Folgen Sie der Linie vom Teil zu seiner Positionsnummer und suchen Sie diese in der Liste zur Abbildung. Eine Positionsnummer bezeichnet nur eine Stelle in genau dieser Zeichnung.',
        ],
        [
          'Die Nummer aus der Liste verwenden',
          'Übernehmen Sie die vollständige OE-Nummer mit Endung und Bezeichnung. Sagen Sie dem Händler, wie viele Sie brauchen und welches Befestigungsmaterial er prüfen soll.',
        ],
      ],
    },
    housing: {
      label: 'Gehäuse und Anbauteile',
      title: 'Eine Reparatur, drei Katalogeinträge',
      text: 'Betrachten Sie Deckel, Dichtung und Befestigungsteile getrennt. Eine Zeichnung kann alle drei zusammen zeigen, auch wenn der Lieferant jedes einzeln verkauft.',
      notes: [
        ['Deckel', 'Nehmen Sie den Eintrag für den Deckel, wenn der Deckel selbst beschädigt ist.'],
        [
          'Dichtung',
          'Die Dichtung hat eine eigene Nummer. Bestellen Sie auch den Deckel, fragen Sie, ob eine Dichtung dabei ist.',
        ],
        [
          'Befestigungsschraube',
          'Auch die Schraube hat einen eigenen Eintrag. Fragen Sie die Werkstatt, wie viele sie braucht.',
        ],
      ],
    },
    desk: {
      label: 'An der Teiletheke',
      title: 'Mit der gefundenen Abbildung arbeiten',
      cards: [
        ['Teile-Ratgeber', 'Ein Bauteil beschreiben'],
        ['Fahrzeug-Ratgeber', 'Das Fahrzeug identifizieren'],
        ['Theken-Ratgeber', 'Die Teiletheke fragen'],
      ],
    },
    closing: {
      title: 'Von der Position zum Angebot',
      text: 'Vergleichen Sie ähnliche Katalogbezeichnungen und geben Sie der Theke dann das gefundene Teil durch.',
      primary: 'Teilebezeichnungen vergleichen',
      secondary: 'Theken-Ratgeber lesen',
    },
  },
  fr: {
    title: 'Trouver la pièce sur le dessin | Parts Relay',
    description:
      'Lisez la vue éclatée d’un frein, d’un alternateur ou d’un filtre et nommez la pièce que le fournisseur doit chiffrer.',
    label: 'Vues éclatées',
    heading: 'Trouver la pièce sur le dessin',
    intro:
      'Dans une vue éclatée, les pièces sont écartées dans leur ordre de montage. Repérez celle qu’il vous faut, puis cherchez sa référence dans la liste de la figure.',
    explore: 'Voir les vues',
    checkVin: 'Vérifier un VIN',
    viewer: ['VISIONNEUSE', 'JEU PLAQUETTES', 'ESSIEU AVANT'],
    figuresLabel: 'Visionneuse',
    figuresTitle: 'Trois ensembles en détail',
    figuresText:
      'Ces dessins montrent des montages courants. Pour la référence applicable, consultez le catalogue de votre véhicule.',
    choose: 'Choisir une illustration',
    figures: [
      {
        label: 'Freinage',
        name: 'Plaquettes avant',
        alt: 'Vue éclatée des plaquettes de frein intérieure et extérieure à côté d’un disque',
        caption: 'Essieu avant',
        text: 'Repérez le disque au centre du dessin. Il y a une plaquette sur chaque face.',
        notes: [
          [
            'Plaquette extérieure et intérieure',
            'Sur ce dessin, les deux appartiennent à l’essieu avant. Identifiez le jeu à l’aide des données du véhicule.',
          ],
          [
            'Disque de frein',
            'Le disque se trouve entre les plaquettes. Vérifiez sur l’ordre de travail si le mécanicien veut aussi les disques.',
          ],
          [
            'Capteur et accessoires de montage',
            'Si le travail demande un témoin d’usure, des agrafes ou des shims, vérifiez le contenu du kit pour chaque élément.',
          ],
        ],
      },
      {
        label: 'Électricité',
        name: 'Alternateur',
        alt: 'Dessin technique de l’alternateur, de sa poulie, de son connecteur et de ses points de fixation',
        caption: 'Charge',
        text: 'Comparez le dessin avec l’alternateur encore monté sur la voiture. La prise et la poulie sont de bons points de départ.',
        notes: [
          [
            'Connecteur',
            'Regardez la forme de la prise et la disposition de ses broches. Signalez au comptoir si un marquage n’est lisible qu’en partie.',
          ],
          [
            'Boîtier',
            'Relevez la puissance et la référence du fabricant sur l’étiquette du boîtier, lettres finales comprises.',
          ],
          [
            'Poulie',
            'La pièce de rechange est-elle livrée avec la poulie ? Si le catalogue en propose plusieurs, dites au comptoir laquelle est montée.',
          ],
        ],
      },
      {
        label: 'Entretien',
        name: 'Cartouche filtrante',
        alt: 'Illustration d’atelier d’une cartouche filtrante séparée de son couvercle et de son boîtier',
        caption: 'Boîtier de filtre',
        text: 'Le dessin montre le filtre ouvert. On voit où se loge la cartouche une fois le couvercle remis.',
        notes: [
          [
            'Cartouche',
            'L’élément plissé se retire. Si le garage garde le boîtier, demandez la cartouche.',
          ],
          [
            'Couvercle et boîtier',
            'Un filetage abîmé ou une fixation cassée peuvent obliger le garage à remplacer le couvercle ou le boîtier lui-même. Précisez quelle pièce est endommagée.',
          ],
          [
            'Joints',
            'Sur le dessin, le joint est à côté du couvercle. Est-il fourni avec la cartouche, ou le comptoir a-t-il besoin d’une deuxième référence ?',
          ],
        ],
      },
    ],
    pair: {
      vehicle: [
        'Choisir le véhicule',
        'Si le dessin ne ressemble pas à la pièce que vous avez devant vous, revenez à la description du véhicule.',
        'Guide véhicule',
      ],
      separate: [
        'Chiffrer une pièce seule',
        'Dites au comptoir quelle pièce vous voulez et si vous avez aussi besoin de la visserie à côté.',
      ],
    },
    callout: {
      label: 'Dessins du catalogue',
      title: 'Du repère à la référence',
      rows: [
        [
          'Ouvrir la bonne figure',
          'Cherchez l’ensemble dans sa section du catalogue. Certaines sections ont une liste de pièces sans dessin.',
        ],
        [
          'Suivre la ligne de repère',
          'Suivez la ligne de la pièce jusqu’à son numéro de repère, puis cherchez ce numéro dans la liste de la figure. Un repère n’identifie qu’une position sur ce dessin précis.',
        ],
        [
          'Utiliser la référence de la liste',
          'Recopiez la référence OE complète, suffixe compris, avec sa désignation. Indiquez au distributeur la quantité et la visserie à vérifier.',
        ],
      ],
    },
    housing: {
      label: 'Boîtier et fixations',
      title: 'Une réparation, trois références',
      text: 'Examinez séparément le couvercle, son joint et la visserie. Un dessin peut montrer les trois ensemble, même si le fournisseur les vend à l’unité.',
      notes: [
        [
          'Couvercle',
          'Utilisez la ligne du couvercle quand c’est le couvercle lui-même qui est abîmé.',
        ],
        [
          'Joint',
          'Le joint a sa propre référence. Si vous commandez aussi le couvercle, demandez si le joint est fourni.',
        ],
        [
          'Vis de fixation',
          'La vis a elle aussi sa propre ligne. Demandez au garage combien il en faut.',
        ],
      ],
    },
    desk: {
      label: 'Au comptoir pièces',
      title: 'Travailler avec la figure trouvée',
      cards: [
        ['Guide des pièces', 'Décrire une pièce'],
        ['Guide véhicule', 'Identifier le véhicule'],
        ['Guide du comptoir', 'Interroger le comptoir'],
      ],
    },
    closing: {
      title: 'Du repère au devis',
      text: 'Comparez les désignations proches du catalogue, puis transmettez au comptoir la pièce trouvée.',
      primary: 'Comparer les désignations',
      secondary: 'Lire le guide du comptoir',
    },
  },
  es: {
    title: 'Encuentre la pieza en el dibujo | Parts Relay',
    description:
      'Lea el despiece de un freno, un alternador o un filtro e indique la pieza que quiere que el proveedor presupueste.',
    label: 'Despieces',
    heading: 'Encuentre la pieza en el dibujo',
    intro:
      'En un despiece las piezas aparecen separadas, en el orden en que encajan. Localice la que necesita y busque su referencia en la lista de esa figura.',
    explore: 'Ver despieces',
    checkVin: 'Comprobar un VIN',
    viewer: ['VISOR DE FIGURAS', 'JUEGO PASTILLAS', 'EJE DELANTERO'],
    figuresLabel: 'Visor de figuras',
    figuresTitle: 'Tres conjuntos de cerca',
    figuresText:
      'Estos dibujos muestran disposiciones habituales de componentes. Para la referencia correcta, use el catálogo de su vehículo.',
    choose: 'Elija una ilustración',
    figures: [
      {
        label: 'Frenos',
        name: 'Pastillas delanteras',
        alt: 'Despiece de las pastillas de freno interior y exterior junto a un disco',
        caption: 'Eje delantero',
        text: 'Busque el disco en el centro del dibujo. Hay una pastilla en cada cara.',
        notes: [
          [
            'Pastilla exterior e interior',
            'En este dibujo, las dos pertenecen al eje delantero. Use los datos del vehículo para identificar el juego.',
          ],
          [
            'Disco de freno',
            'El disco va entre las pastillas. Revise la orden de trabajo para ver si el mecánico quiere también los discos.',
          ],
          [
            'Sensor y accesorios de montaje',
            'Si el trabajo necesita un sensor, clips o láminas antirruido, compruebe el contenido del kit para cada uno.',
          ],
        ],
      },
      {
        label: 'Eléctrico',
        name: 'Alternador',
        alt: 'Dibujo técnico del alternador, la polea, el conector y los puntos de fijación',
        caption: 'Sistema de carga',
        text: 'Compare el dibujo con el alternador que sigue montado en el coche. El conector y la polea son buenos puntos de partida.',
        notes: [
          [
            'Conector',
            'Fíjese en la forma del conector y la disposición de sus pines. Avise al mostrador si solo puede leer parte de una marca.',
          ],
          [
            'Carcasa',
            'Lea la potencia y la referencia del fabricante en la etiqueta de la carcasa. Incluya las letras finales.',
          ],
          [
            'Polea',
            '¿El recambio viene con la polea? Si el catálogo muestra varias, diga al mostrador cuál lleva el coche.',
          ],
        ],
      },
      {
        label: 'Mantenimiento',
        name: 'Cartucho de filtro',
        alt: 'Ilustración de taller de un cartucho de filtro separado de su tapa y su carcasa',
        caption: 'Carcasa del filtro',
        text: 'El dibujo muestra el filtro abierto. Se ve dónde queda el cartucho una vez colocada la tapa.',
        notes: [
          [
            'Cartucho',
            'El elemento plisado sale hacia arriba. Si el taller conserva la carcasa, pida el cartucho.',
          ],
          [
            'Tapa y carcasa',
            'Una rosca dañada o un punto de fijación roto pueden obligar al taller a cambiar la tapa o la propia carcasa. Indique qué pieza está dañada.',
          ],
          [
            'Juntas',
            'En el dibujo, la junta está junto a la tapa. ¿Viene en el kit del cartucho o el mostrador necesita una segunda referencia?',
          ],
        ],
      },
    ],
    pair: {
      vehicle: [
        'Elegir el vehículo',
        'Si el dibujo no se parece a la pieza que tiene delante, vuelva a la descripción del vehículo.',
        'Guía del vehículo',
      ],
      separate: [
        'Presupuestar una pieza suelta',
        'Diga al mostrador qué pieza quiere y si necesita también la tornillería que va al lado.',
      ],
    },
    callout: {
      label: 'Dibujos del catálogo',
      title: 'Del número de posición a la referencia',
      rows: [
        [
          'Abra la figura correcta',
          'Busque el conjunto en su sección del catálogo. Algunas secciones tienen lista de piezas pero no dibujo.',
        ],
        [
          'Siga la línea de referencia',
          'Siga la línea desde la pieza hasta su número de posición y busque ese número en la lista de la figura. Un número de posición solo identifica un lugar en ese dibujo concreto.',
        ],
        [
          'Use la referencia de la lista',
          'Copie la referencia OE completa, con su sufijo, junto con la descripción. Indique al distribuidor cuántas necesita y qué tornillería debe comprobar.',
        ],
      ],
    },
    housing: {
      label: 'Carcasa y fijaciones',
      title: 'Una reparación puede necesitar tres referencias',
      text: 'Mire por separado la tapa, su junta y la tornillería. Un dibujo puede mostrar las tres piezas a la vez, aunque el proveedor las venda por separado.',
      notes: [
        ['Tapa', 'Use la línea de la tapa cuando la dañada sea la propia tapa.'],
        [
          'Junta',
          'La junta tiene su propia referencia. Si también pide la tapa, pregunte si incluye la junta.',
        ],
        [
          'Tornillo de fijación',
          'El tornillo también tiene su propia línea. Pregunte al taller cuántos necesita.',
        ],
      ],
    },
    desk: {
      label: 'En el mostrador',
      title: 'Qué hacer con la figura encontrada',
      cards: [
        ['Guía de recambios', 'Describir una pieza'],
        ['Guía del vehículo', 'Identificar el vehículo'],
        ['Guía del mostrador', 'Preguntar al mostrador'],
      ],
    },
    closing: {
      title: 'Del número de posición al presupuesto',
      text: 'Compare descripciones parecidas del catálogo y pase después al mostrador la pieza que ha encontrado.',
      primary: 'Comparar descripciones',
      secondary: 'Leer la guía del mostrador',
    },
  },
  it: {
    title: 'Trovare il pezzo nel disegno | Parts Relay',
    description:
      'Legga l’esploso di un freno, di un alternatore o di un filtro e indichi il pezzo che vuole far quotare al fornitore.',
    label: 'Esplosi ricambi',
    heading: 'Trovi il pezzo nel disegno',
    intro:
      'In un esploso i pezzi sono separati, nell’ordine in cui si montano. Trovi quello che le serve, poi cerchi il suo codice nell’elenco di quella figura.',
    explore: 'Vedi gli esplosi',
    checkVin: 'Controlla un VIN',
    viewer: ['VISORE FIGURE', 'KIT PASTIGLIE', 'ASSE ANTERIORE'],
    figuresLabel: 'Visore figure',
    figuresTitle: 'Tre gruppi da vicino',
    figuresText:
      'Questi disegni mostrano disposizioni comuni dei componenti. Per il codice corretto usi il catalogo del suo veicolo.',
    choose: 'Scelga un’illustrazione',
    figures: [
      {
        label: 'Freni',
        name: 'Pastiglie anteriori',
        alt: 'Esploso delle pastiglie freno interna ed esterna accanto a un disco',
        caption: 'Asse anteriore',
        text: 'Cerchi il disco al centro del disegno. C’è una pastiglia su ciascun lato.',
        notes: [
          [
            'Pastiglia esterna e interna',
            'In questo disegno appartengono entrambe all’asse anteriore. Usi i dati del veicolo per identificare il kit.',
          ],
          [
            'Disco freno',
            'Il disco sta tra le pastiglie. Controlli sulla scheda di lavoro se il meccanico vuole anche i dischi.',
          ],
          [
            'Sensore e accessori di montaggio',
            'Se il lavoro richiede un sensore, mollette o lamierini antirumore, verifichi il contenuto del kit per ciascuno.',
          ],
        ],
      },
      {
        label: 'Elettrico',
        name: 'Alternatore',
        alt: 'Disegno tecnico dell’alternatore con puleggia, connettore e punti di fissaggio',
        caption: 'Impianto di ricarica',
        text: 'Confronti il disegno con l’alternatore ancora montato sull’auto. Connettore e puleggia sono un buon punto di partenza.',
        notes: [
          [
            'Connettore',
            'Guardi la forma della spina e la disposizione dei pin. Avvisi il banco se riesce a leggere solo parte di una marcatura.',
          ],
          [
            'Carcassa',
            'Legga potenza e codice del costruttore sull’etichetta della carcassa, comprese le lettere finali.',
          ],
          [
            'Puleggia',
            'Il ricambio arriva con la puleggia? Se il catalogo ne elenca diverse, dica al banco quale è montata.',
          ],
        ],
      },
      {
        label: 'Manutenzione',
        name: 'Cartuccia filtro',
        alt: 'Illustrazione di servizio di una cartuccia filtro separata dal coperchio e dal corpo',
        caption: 'Corpo filtro',
        text: 'Il disegno mostra il filtro aperto. Si vede dove si trova la cartuccia una volta richiuso il coperchio.',
        notes: [
          [
            'Cartuccia',
            'L’elemento pieghettato si sfila. Se l’officina tiene il corpo filtro, chieda la cartuccia.',
          ],
          [
            'Coperchio e corpo',
            'Filetti danneggiati o un punto di fissaggio rotto possono significare che l’officina ha bisogno del coperchio o del corpo stesso. Indichi quale pezzo è danneggiato.',
          ],
          [
            'Guarnizioni',
            'Nel disegno la guarnizione è accanto al coperchio. È compresa nel kit cartuccia o il banco ha bisogno di un secondo codice?',
          ],
        ],
      },
    ],
    pair: {
      vehicle: [
        'Scegliere il veicolo',
        'Se il disegno non somiglia al pezzo che ha davanti, torni alla descrizione del veicolo.',
        'Guida al veicolo',
      ],
      separate: [
        'Far quotare un pezzo singolo',
        'Dica al banco quale pezzo vuole e se le serve anche la minuteria accanto.',
      ],
    },
    callout: {
      label: 'Disegni di catalogo',
      title: 'Dal numero di posizione al codice',
      rows: [
        [
          'Apra la figura giusta',
          'Cerchi il gruppo nella sua sezione di catalogo. Alcune sezioni hanno l’elenco ricambi ma nessun disegno.',
        ],
        [
          'Segua la linea di richiamo',
          'Segua la linea dal pezzo al suo numero di posizione, poi cerchi quel numero nell’elenco della figura. Un numero di posizione indica solo un punto di quel disegno specifico.',
        ],
        [
          'Usi il codice dell’elenco',
          'Copi il codice OE completo, suffisso compreso, con la sua descrizione. Dica al distributore quanti pezzi servono e quale minuteria deve verificare.',
        ],
      ],
    },
    housing: {
      label: 'Corpo e fissaggi',
      title: 'Una riparazione può richiedere tre voci di catalogo',
      text: 'Valuti separatamente il coperchio, la sua guarnizione e le viti. Un disegno può mostrarli tutti e tre insieme, anche se il fornitore li vende singolarmente.',
      notes: [
        [
          'Coperchio',
          'Usi la voce del coperchio quando è il coperchio stesso a essere danneggiato.',
        ],
        [
          'Guarnizione',
          'La guarnizione ha un codice proprio. Se ordina anche il coperchio, chieda se la guarnizione è compresa.',
        ],
        [
          'Vite di fissaggio',
          'Anche la vite ha una voce separata. Chieda all’officina quante ne servono.',
        ],
      ],
    },
    desk: {
      label: 'Al banco ricambi',
      title: 'Lavorare con la figura trovata',
      cards: [
        ['Guida ai ricambi', 'Descrivere un componente'],
        ['Guida al veicolo', 'Identificare il veicolo'],
        ['Guida al banco', 'Chiedere al banco ricambi'],
      ],
    },
    closing: {
      title: 'Dal numero di posizione al preventivo',
      text: 'Confronti le descrizioni simili del catalogo, poi passi al banco il pezzo che ha trovato.',
      primary: 'Confronta le descrizioni',
      secondary: 'Leggi la guida al banco',
    },
  },
};
