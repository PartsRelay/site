// Part details page text in every language.

export const partDetails = {
  en: {
    title: 'Which part number should you quote? | Parts Relay',
    description:
      'Compare part descriptions and cross-references. Work through position, equipment and kit contents before asking for a quote.',
    label: 'Part details',
    heading: 'Which part number should you quote?',
    intro:
      'Two catalogue rows can carry the same description. To choose between them, compare the location and equipment with the part on the car.',
    jump: 'Compare descriptions',
    job: {
      label: 'On the job card',
      title: 'Details worth writing down',
      cards: [
        [
          'Extent of the job',
          'Will the shop replace one piece, a set, or everything attached to the mount?',
        ],
        [
          'Mounting position',
          'Which side or axle? Two pieces can look much the same once they’re off the car.',
        ],
        [
          'Identifying marks',
          'Copy a legible number from the old unit. Where there’s no number, describe a feature the supplier can compare, such as a connector.',
        ],
      ],
      strip: [
        ['Part', 'Mirror'],
        ['Position', 'Left'],
        ['Feature to check', 'Heated'],
      ],
    },
    mirror: {
      label: 'Mirror repairs',
      title: 'Left mirror, housing intact',
      glass: [
        'Damage reported',
        'Cracked glass',
        'On some vehicles you can replace the glass on its own. The counter will need to check how this one attaches to the existing housing.',
      ],
      fit: [
        'Equipment and fit',
        'Heated or unheated?',
        'Have the technician look behind the old glass for heater terminals and identify the backing plate. A damaged mount changes the job to a complete assembly.',
      ],
      spec: [
        ['Mounting side', 'Left'],
        ['Housing', 'Retained'],
        ['Heating terminals', 'Check old glass'],
      ],
    },
    wording: {
      label: 'Quote wording',
      title: 'How the enquiry changes if the hinge is broken',
      choose: 'Choose a mirror component',
      options: [
        {
          label: 'Mirror glass',
          steps: [
            ['Component', 'Glass only. The housing and mount can stay on the door.'],
            ['Position', 'Left exterior mirror, as viewed facing forward.'],
            ['Equipment', 'Match the heater connections and backing plate to the original glass.'],
          ],
          example:
            'Can you quote the left mirror glass on its own? The heater terminals are on the back. ' +
            'We’re keeping the housing and mount. Does the replacement come with the backing plate?',
        },
        {
          label: 'Complete assembly',
          steps: [
            ['Component', 'Complete mirror, including its housing and mount.'],
            ['Position', 'Left side. The hinge is broken.'],
            [
              'Equipment',
              'Check power adjustment and folding, glass heating and any fitted indicator against the replacement specification.',
            ],
          ],
          example:
            'The hinge on the left mirror is broken. We need the complete power-folding unit with heated glass. ' +
            'Can you quote that version and tell me if we get the indicator and painted cap with it?',
        },
      ],
    },
    catalogue: {
      label: 'Catalogue results',
      title: 'Reading an original number and its cross-references',
      text: 'Start in the catalogue section for the assembly. An aftermarket reference, when one comes back, points to the original part it matches.',
      notes: [
        [
          'Original equipment (OE)',
          'Use the manufacturer’s description alongside its code. Copy the spaces and any letters at the end when you send the number to the supplier.',
        ],
        [
          'Aftermarket match',
          'Look for the replacement brand, its part number and description, then read the original code on that row. An empty list means this search didn’t find a cross-reference.',
        ],
        [
          'Before accepting the quote',
          'Compare the proposed replacement with the equipment and markings on the car. Ask the supplier what comes with that reference, what it costs and when the complete order can arrive.',
        ],
      ],
      layersLabel:
        'Layers of a part description, from vehicle to component, position and fitted equipment',
      layers: ['Equipment', 'Position', 'Component', 'Vehicle'],
    },
    faq: {
      label: 'Details from the vehicle',
      title: 'Questions that hold up a quote',
      items: [
        [
          'Which side should I give?',
          'Give left or right from the point of view of someone in the vehicle facing forward. Add the mounting position if there’s still room for doubt.',
        ],
        [
          'What if the number on the old unit is unclear?',
          'Send the characters you can read and say which ones are unclear. Ask what else on the unit would distinguish it.',
        ],
        [
          'Can I ask about a full assembly?',
          'Yes. Name the assembly and any fittings or accessories you expect to receive with it.',
        ],
        [
          'Do all requests need every detail?',
          'Often the vehicle and a clear part name are enough to get started. The counter can ask for another detail if more than one version comes up.',
        ],
      ],
    },
    closing: {
      title: 'Put it on the repair order',
      text: 'Include the mounting side and any identifying marks in your enquiry. A drawing can help if the name on the job card is unclear.',
      primary: 'Browse the drawings',
      secondary: 'Check a VIN',
    },
  },
  de: {
    title: 'Welche Teilenummer anfragen? | Parts Relay',
    description:
      'Vergleichen Sie Teilebezeichnungen und Vergleichsnummern. Klären Sie Einbaulage, Ausstattung und Satzinhalt, bevor Sie ein Angebot anfordern.',
    label: 'Teiledetails',
    heading: 'Welche Teilenummer sollten Sie anfragen?',
    intro:
      'Zwei Katalogzeilen können dieselbe Bezeichnung tragen. Um zu entscheiden, vergleichen Sie Einbaulage und Ausstattung mit dem Teil am Fahrzeug.',
    jump: 'Bezeichnungen vergleichen',
    job: {
      label: 'Auf dem Auftrag',
      title: 'Angaben, die Sie notieren sollten',
      cards: [
        [
          'Umfang der Arbeit',
          'Tauscht die Werkstatt ein Einzelteil, einen Satz oder alles, was an der Halterung sitzt?',
        ],
        [
          'Einbaulage',
          'Welche Seite oder Achse? Ausgebaut sehen sich zwei Teile oft zum Verwechseln ähnlich.',
        ],
        [
          'Kennzeichnungen',
          'Übernehmen Sie eine lesbare Nummer vom Altteil. Fehlt eine Nummer, beschreiben Sie ein Merkmal, das der Lieferant vergleichen kann, etwa einen Stecker.',
        ],
      ],
      strip: [
        ['Teil', 'Spiegel'],
        ['Einbaulage', 'Links'],
        ['Zu prüfen', 'Beheizt'],
      ],
    },
    mirror: {
      label: 'Spiegelreparaturen',
      title: 'Linker Spiegel, Gehäuse intakt',
      glass: [
        'Gemeldeter Schaden',
        'Glas gesprungen',
        'Bei manchen Fahrzeugen lässt sich das Glas einzeln tauschen. Die Theke muss prüfen, wie es am vorhandenen Gehäuse befestigt ist.',
      ],
      fit: [
        'Ausstattung und Passform',
        'Beheizt oder unbeheizt?',
        'Lassen Sie den Mechaniker hinter dem alten Glas nach Heizungsanschlüssen sehen und die Trägerplatte bestimmen. Ist die Halterung beschädigt, wird daraus der Tausch des kompletten Spiegels.',
      ],
      spec: [
        ['Einbauseite', 'Links'],
        ['Gehäuse', 'Bleibt'],
        ['Heizungsanschlüsse', 'Am Altglas prüfen'],
      ],
    },
    wording: {
      label: 'Formulierung der Anfrage',
      title: 'Wie sich die Anfrage ändert, wenn das Gelenk gebrochen ist',
      choose: 'Spiegelteil auswählen',
      options: [
        {
          label: 'Spiegelglas',
          steps: [
            ['Bauteil', 'Nur das Glas. Gehäuse und Halterung bleiben an der Tür.'],
            ['Einbaulage', 'Linker Außenspiegel, in Fahrtrichtung gesehen.'],
            ['Ausstattung', 'Heizungsanschlüsse und Trägerplatte müssen zum Originalglas passen.'],
          ],
          example:
            'Können Sie mir das linke Spiegelglas einzeln anbieten? Die Heizungsanschlüsse sitzen auf der Rückseite. ' +
            'Gehäuse und Halterung behalten wir. Ist die Trägerplatte beim Ersatzteil dabei?',
        },
        {
          label: 'Kompletter Spiegel',
          steps: [
            ['Bauteil', 'Kompletter Spiegel mit Gehäuse und Halterung.'],
            ['Einbaulage', 'Links. Das Gelenk ist gebrochen.'],
            [
              'Ausstattung',
              'Elektrische Verstellung und Anklappung, Glasheizung und einen eventuell verbauten Blinker mit der Spezifikation des Ersatzteils abgleichen.',
            ],
          ],
          example:
            'Am linken Spiegel ist das Gelenk gebrochen. Wir brauchen den kompletten elektrisch anklappbaren Spiegel mit beheiztem Glas. ' +
            'Können Sie diese Ausführung anbieten und mir sagen, ob Blinker und lackierte Kappe dabei sind?',
        },
      ],
    },
    catalogue: {
      label: 'Katalogergebnisse',
      title: 'Originalnummer und Vergleichsnummern lesen',
      text: 'Beginnen Sie im Katalogabschnitt der Baugruppe. Eine Aftermarket-Nummer verweist, wenn eine gefunden wird, auf das passende Originalteil.',
      notes: [
        [
          'Originalteil (OE)',
          'Verwenden Sie die Herstellerbezeichnung zusammen mit der Nummer. Übernehmen Sie Leerzeichen und angehängte Buchstaben, wenn Sie die Nummer an den Lieferanten senden.',
        ],
        [
          'Aftermarket-Treffer',
          'Suchen Sie Marke, Teilenummer und Bezeichnung des Ersatzteils und lesen Sie dann die OE-Nummer in derselben Zeile. Eine leere Liste bedeutet, dass diese Suche keine Vergleichsnummer gefunden hat.',
        ],
        [
          'Bevor Sie das Angebot annehmen',
          'Vergleichen Sie das angebotene Ersatzteil mit Ausstattung und Kennzeichnungen am Fahrzeug. Fragen Sie den Lieferanten, was zu dieser Nummer gehört, was sie kostet und wann die komplette Bestellung da sein kann.',
        ],
      ],
      layersLabel:
        'Ebenen einer Teilebeschreibung: Fahrzeug, Bauteil, Einbaulage und verbaute Ausstattung',
      layers: ['Ausstattung', 'Einbaulage', 'Bauteil', 'Fahrzeug'],
    },
    faq: {
      label: 'Angaben vom Fahrzeug',
      title: 'Fragen, die ein Angebot aufhalten',
      items: [
        [
          'Welche Seite gebe ich an?',
          'Links oder rechts, gesehen von einer Person im Fahrzeug in Fahrtrichtung. Nennen Sie zusätzlich die Einbaulage, wenn noch Zweifel bestehen.',
        ],
        [
          'Was, wenn die Nummer auf dem Altteil unleserlich ist?',
          'Senden Sie die lesbaren Zeichen und sagen Sie, welche unklar sind. Fragen Sie, woran sich das Teil sonst unterscheiden lässt.',
        ],
        [
          'Kann ich nach einer kompletten Baugruppe fragen?',
          'Ja. Nennen Sie die Baugruppe und alle Anbauteile oder das Zubehör, das Sie mitgeliefert erwarten.',
        ],
        [
          'Braucht jede Anfrage alle Angaben?',
          'Oft reichen das Fahrzeug und eine klare Teilebezeichnung für den Anfang. Die Theke fragt nach, wenn mehr als eine Ausführung in Frage kommt.',
        ],
      ],
    },
    closing: {
      title: 'Auf den Reparaturauftrag damit',
      text: 'Geben Sie in Ihrer Anfrage die Einbauseite und alle Kennzeichnungen an. Ist die Bezeichnung auf dem Auftrag unklar, hilft eine Zeichnung.',
      primary: 'Zeichnungen ansehen',
      secondary: 'FIN prüfen',
    },
  },
  fr: {
    title: 'Quelle référence faire chiffrer ? | Parts Relay',
    description:
      'Comparez désignations et correspondances. Vérifiez la position, l’équipement et le contenu du kit avant de demander un devis.',
    label: 'Détails des pièces',
    heading: 'Quelle référence faire chiffrer ?',
    intro:
      'Deux lignes du catalogue peuvent porter la même désignation. Pour choisir, comparez la position et l’équipement avec la pièce sur la voiture.',
    jump: 'Comparer les désignations',
    job: {
      label: 'Sur l’ordre de travail',
      title: 'Les détails à noter',
      cards: [
        [
          'Étendue du travail',
          'Le garage remplace-t-il une pièce, un jeu, ou tout ce qui est fixé sur le support ?',
        ],
        [
          'Position de montage',
          'Quel côté, quel essieu ? Une fois démontées, deux pièces peuvent se ressembler beaucoup.',
        ],
        [
          'Marquages',
          'Recopiez un numéro lisible sur l’ancienne pièce. S’il n’y en a pas, décrivez un détail que le fournisseur peut comparer, comme un connecteur.',
        ],
      ],
      strip: [
        ['Pièce', 'Rétroviseur'],
        ['Position', 'Gauche'],
        ['À vérifier', 'Chauffant'],
      ],
    },
    mirror: {
      label: 'Réparation de rétroviseur',
      title: 'Rétroviseur gauche, coque intacte',
      glass: [
        'Dommage signalé',
        'Glace fendue',
        'Sur certains véhicules, la glace se remplace seule. Le comptoir devra vérifier comment celle-ci se fixe sur la coque existante.',
      ],
      fit: [
        'Équipement et montage',
        'Chauffante ou non ?',
        'Demandez au mécanicien de regarder derrière l’ancienne glace s’il y a des cosses de chauffage et d’identifier le support de glace. Si la fixation est abîmée, il faut le rétroviseur complet.',
      ],
      spec: [
        ['Côté de montage', 'Gauche'],
        ['Coque', 'Conservée'],
        ['Cosses de chauffage', 'Voir ancienne glace'],
      ],
    },
    wording: {
      label: 'Rédaction de la demande',
      title: 'Ce qui change dans la demande si l’articulation est cassée',
      choose: 'Choisir une pièce du rétroviseur',
      options: [
        {
          label: 'Glace de rétroviseur',
          steps: [
            ['Pièce', 'Glace seule. La coque et la fixation restent sur la portière.'],
            ['Position', 'Rétroviseur extérieur gauche, vu dans le sens de la marche.'],
            [
              'Équipement',
              'Les connexions de chauffage et le support doivent correspondre à la glace d’origine.',
            ],
          ],
          example:
            'Pouvez-vous me chiffrer la glace de rétroviseur gauche seule ? Les cosses de chauffage sont au dos. ' +
            'Nous gardons la coque et la fixation. La pièce de rechange est-elle livrée avec son support ?',
        },
        {
          label: 'Rétroviseur complet',
          steps: [
            ['Pièce', 'Rétroviseur complet, avec sa coque et sa fixation.'],
            ['Position', 'Côté gauche. L’articulation est cassée.'],
            [
              'Équipement',
              'Comparez le réglage et le rabattement électriques, le dégivrage de la glace et un éventuel clignotant avec la fiche de la pièce de rechange.',
            ],
          ],
          example:
            'L’articulation du rétroviseur gauche est cassée. Il nous faut le rétroviseur complet rabattable électriquement avec glace chauffante. ' +
            'Pouvez-vous chiffrer cette version et me dire si le clignotant et la coque peinte sont fournis ?',
        },
      ],
    },
    catalogue: {
      label: 'Résultats du catalogue',
      title: 'Lire une référence d’origine et ses correspondances',
      text: 'Commencez dans la section du catalogue consacrée à l’ensemble. Une référence adaptable, quand il y en a une, renvoie à la pièce d’origine à laquelle elle correspond.',
      notes: [
        [
          'Pièce d’origine (OE)',
          'Utilisez la désignation du constructeur avec sa référence. Recopiez les espaces et les éventuelles lettres finales quand vous envoyez la référence au fournisseur.',
        ],
        [
          'Correspondance adaptable',
          'Repérez la marque de la pièce adaptable, sa référence et sa désignation, puis lisez la référence OE sur la même ligne. Une liste vide signifie que cette recherche n’a trouvé aucune correspondance.',
        ],
        [
          'Avant d’accepter le devis',
          'Comparez la pièce proposée avec l’équipement et les marquages de la voiture. Demandez au fournisseur ce qui est fourni avec cette référence, son prix et quand la commande complète peut arriver.',
        ],
      ],
      layersLabel:
        'Niveaux d’une désignation de pièce : véhicule, pièce, position et équipement monté',
      layers: ['Équipement', 'Position', 'Pièce', 'Véhicule'],
    },
    faq: {
      label: 'Informations sur le véhicule',
      title: 'Les questions qui retardent un devis',
      items: [
        [
          'Quel côté dois-je indiquer ?',
          'Indiquez gauche ou droite du point de vue d’une personne assise dans le véhicule, face à la route. Ajoutez la position de montage s’il reste un doute.',
        ],
        [
          'Et si le numéro sur l’ancienne pièce est illisible ?',
          'Envoyez les caractères lisibles et précisez ceux qui ne le sont pas. Demandez quel autre détail de la pièce permettrait de la distinguer.',
        ],
        [
          'Puis-je demander un ensemble complet ?',
          'Oui. Nommez l’ensemble et les fixations ou accessoires que vous comptez recevoir avec.',
        ],
        [
          'Chaque demande doit-elle contenir tous les détails ?',
          'Souvent, le véhicule et un nom de pièce clair suffisent pour commencer. Le comptoir demandera une précision si plusieurs versions apparaissent.',
        ],
      ],
    },
    closing: {
      title: 'Notez-le sur l’ordre de réparation',
      text: 'Indiquez le côté de montage et les marquages dans votre demande. Un dessin peut aider si le nom sur l’ordre de travail n’est pas clair.',
      primary: 'Parcourir les dessins',
      secondary: 'Vérifier un VIN',
    },
  },
  es: {
    title: '¿Qué referencia debe pedir? | Parts Relay',
    description:
      'Compare descripciones de recambios y equivalencias. Repase la posición, el equipamiento y el contenido del kit antes de pedir un presupuesto.',
    label: 'Detalles del recambio',
    heading: '¿Qué referencia debe pedir?',
    intro:
      'Dos líneas del catálogo pueden tener la misma descripción. Para elegir entre ellas, compare la posición y el equipamiento con la pieza del coche.',
    jump: 'Comparar descripciones',
    job: {
      label: 'En la orden de trabajo',
      title: 'Datos que conviene anotar',
      cards: [
        [
          'Alcance del trabajo',
          '¿El taller cambiará una pieza, un juego o todo lo que va montado en el soporte?',
        ],
        [
          'Posición de montaje',
          '¿Qué lado o qué eje? Desmontadas, dos piezas pueden parecer casi iguales.',
        ],
        [
          'Marcas de identificación',
          'Copie un número legible de la pieza vieja. Si no hay número, describa un detalle que el proveedor pueda comparar, como un conector.',
        ],
      ],
      strip: [
        ['Pieza', 'Retrovisor'],
        ['Posición', 'Izquierda'],
        ['A comprobar', 'Térmico'],
      ],
    },
    mirror: {
      label: 'Reparación de retrovisores',
      title: 'Retrovisor izquierdo, carcasa intacta',
      glass: [
        'Daño indicado',
        'Cristal roto',
        'En algunos vehículos el cristal se cambia por separado. El mostrador tendrá que comprobar cómo se fija este a la carcasa actual.',
      ],
      fit: [
        'Equipamiento y montaje',
        '¿Térmico o no?',
        'Pida al mecánico que mire detrás del cristal viejo si hay terminales de calefacción y que identifique la placa soporte. Si el soporte está dañado, el trabajo pasa a ser un retrovisor completo.',
      ],
      spec: [
        ['Lado de montaje', 'Izquierdo'],
        ['Carcasa', 'Se conserva'],
        ['Terminales térmicos', 'Ver cristal viejo'],
      ],
    },
    wording: {
      label: 'Redacción de la consulta',
      title: 'Cómo cambia la consulta si la bisagra está rota',
      choose: 'Elija una pieza del retrovisor',
      options: [
        {
          label: 'Cristal de retrovisor',
          steps: [
            ['Pieza', 'Solo el cristal. La carcasa y el soporte se quedan en la puerta.'],
            ['Posición', 'Retrovisor exterior izquierdo, mirando hacia delante.'],
            [
              'Equipamiento',
              'Las conexiones de la calefacción y la placa soporte deben coincidir con el cristal original.',
            ],
          ],
          example:
            '¿Me puede presupuestar solo el cristal del retrovisor izquierdo? Lleva los terminales de calefacción detrás. ' +
            'Conservamos la carcasa y el soporte. ¿El recambio viene con la placa soporte?',
        },
        {
          label: 'Retrovisor completo',
          steps: [
            ['Pieza', 'Retrovisor completo, con carcasa y soporte.'],
            ['Posición', 'Lado izquierdo. La bisagra está rota.'],
            [
              'Equipamiento',
              'Compare el reglaje y plegado eléctricos, la calefacción del cristal y el intermitente, si lo lleva, con la especificación del recambio.',
            ],
          ],
          example:
            'La bisagra del retrovisor izquierdo está rota. Necesitamos el retrovisor completo con plegado eléctrico y cristal térmico. ' +
            '¿Me puede presupuestar esa versión y decirme si incluye el intermitente y la carcasa pintada?',
        },
      ],
    },
    catalogue: {
      label: 'Resultados del catálogo',
      title: 'Cómo leer una referencia original y sus equivalencias',
      text: 'Empiece por la sección del catálogo del conjunto. Una referencia aftermarket, cuando aparece, remite a la pieza original con la que se corresponde.',
      notes: [
        [
          'Equipo original (OE)',
          'Use la descripción del fabricante junto con su referencia. Copie los espacios y las letras finales cuando envíe la referencia al proveedor.',
        ],
        [
          'Equivalencia aftermarket',
          'Busque la marca del recambio, su referencia y su descripción, y lea después la referencia original de esa línea. Una lista vacía significa que esta búsqueda no ha encontrado ninguna equivalencia.',
        ],
        [
          'Antes de aceptar el presupuesto',
          'Compare el recambio propuesto con el equipamiento y las marcas del coche. Pregunte al proveedor qué incluye esa referencia, cuánto cuesta y cuándo puede llegar el pedido completo.',
        ],
      ],
      layersLabel:
        'Niveles de una descripción de recambio: vehículo, pieza, posición y equipamiento montado',
      layers: ['Equipamiento', 'Posición', 'Pieza', 'Vehículo'],
    },
    faq: {
      label: 'Datos del vehículo',
      title: 'Preguntas que retrasan un presupuesto',
      items: [
        [
          '¿Qué lado debo indicar?',
          'Indique izquierda o derecha desde el punto de vista de alguien sentado en el vehículo mirando hacia delante. Añada la posición de montaje si aún queda alguna duda.',
        ],
        [
          '¿Y si el número de la pieza vieja no se lee bien?',
          'Envíe los caracteres que pueda leer e indique cuáles no están claros. Pregunte qué otro detalle de la pieza permitiría distinguirla.',
        ],
        [
          '¿Puedo preguntar por un conjunto completo?',
          'Sí. Indique el conjunto y las fijaciones o accesorios que espera recibir con él.',
        ],
        [
          '¿Toda consulta necesita todos los datos?',
          'A menudo basta con el vehículo y un nombre claro de la pieza para empezar. El mostrador puede pedirle otro dato si aparece más de una versión.',
        ],
      ],
    },
    closing: {
      title: 'Anótelo en la orden de reparación',
      text: 'Incluya en su consulta el lado de montaje y las marcas de identificación. Un dibujo puede ayudar si el nombre de la orden de trabajo no está claro.',
      primary: 'Ver los dibujos',
      secondary: 'Comprobar un VIN',
    },
  },
  it: {
    title: 'Quale codice far quotare? | Parts Relay',
    description:
      'Confronti descrizioni dei ricambi e corrispondenze. Verifichi posizione, equipaggiamento e contenuto del kit prima di chiedere un preventivo.',
    label: 'Dettagli ricambio',
    heading: 'Quale codice far quotare?',
    intro:
      'Due righe di catalogo possono avere la stessa descrizione. Per scegliere, confronti posizione ed equipaggiamento con il pezzo montato sull’auto.',
    jump: 'Confronta descrizioni',
    job: {
      label: 'Sulla scheda di lavoro',
      title: 'Dettagli da annotare',
      cards: [
        [
          'Entità del lavoro',
          'L’officina sostituisce un pezzo, un kit o tutto ciò che è fissato al supporto?',
        ],
        [
          'Posizione di montaggio',
          'Quale lato o quale asse? Una volta smontati, due pezzi possono sembrare quasi uguali.',
        ],
        [
          'Marcature',
          'Copi un numero leggibile dal pezzo vecchio. Se non c’è un numero, descriva un dettaglio che il fornitore può confrontare, come un connettore.',
        ],
      ],
      strip: [
        ['Pezzo', 'Specchietto'],
        ['Posizione', 'Sinistra'],
        ['Da verificare', 'Riscaldato'],
      ],
    },
    mirror: {
      label: 'Riparazione specchietti',
      title: 'Specchietto sinistro, calotta integra',
      glass: [
        'Danno segnalato',
        'Vetro incrinato',
        'Su alcuni veicoli il vetro si sostituisce da solo. Il banco dovrà verificare come questo si fissa alla calotta esistente.',
      ],
      fit: [
        'Equipaggiamento e montaggio',
        'Riscaldato o no?',
        'Chieda al meccanico di guardare dietro il vetro vecchio se ci sono i terminali della resistenza e di identificare la piastra di supporto. Se il supporto è danneggiato, serve lo specchietto completo.',
      ],
      spec: [
        ['Lato di montaggio', 'Sinistro'],
        ['Calotta', 'Mantenuta'],
        ['Terminali resistenza', 'Vedi vetro vecchio'],
      ],
    },
    wording: {
      label: 'Testo della richiesta',
      title: 'Come cambia la richiesta se lo snodo è rotto',
      choose: 'Scelga un componente dello specchietto',
      options: [
        {
          label: 'Vetro specchietto',
          steps: [
            ['Componente', 'Solo il vetro. Calotta e supporto restano sulla portiera.'],
            ['Posizione', 'Specchietto esterno sinistro, guardando in avanti.'],
            [
              'Equipaggiamento',
              'I collegamenti della resistenza e la piastra di supporto devono corrispondere al vetro originale.',
            ],
          ],
          example:
            'Può quotarmi solo il vetro dello specchietto sinistro? I terminali della resistenza sono sul retro. ' +
            'Calotta e supporto li teniamo. Il ricambio arriva con la piastra di supporto?',
        },
        {
          label: 'Specchietto completo',
          steps: [
            ['Componente', 'Specchietto completo, con calotta e supporto.'],
            ['Posizione', 'Lato sinistro. Lo snodo è rotto.'],
            [
              'Equipaggiamento',
              'Confronti regolazione e ripiegamento elettrici, riscaldamento del vetro ed eventuale indicatore di direzione con la specifica del ricambio.',
            ],
          ],
          example:
            'Lo snodo dello specchietto sinistro è rotto. Ci serve lo specchietto completo a ripiegamento elettrico con vetro riscaldato. ' +
            'Può quotare quella versione e dirmi se comprende indicatore di direzione e calotta verniciata?',
        },
      ],
    },
    catalogue: {
      label: 'Risultati del catalogo',
      title: 'Leggere un codice originale e le sue corrispondenze',
      text: 'Parta dalla sezione di catalogo del gruppo. Un codice aftermarket, quando c’è, rimanda al ricambio originale a cui corrisponde.',
      notes: [
        [
          'Ricambio originale (OE)',
          'Usi la descrizione del costruttore insieme al suo codice. Copi gli spazi e le eventuali lettere finali quando invia il codice al fornitore.',
        ],
        [
          'Corrispondenza aftermarket',
          'Cerchi la marca del ricambio, il suo codice e la descrizione, poi legga il codice originale sulla stessa riga. Un elenco vuoto significa che questa ricerca non ha trovato corrispondenze.',
        ],
        [
          'Prima di accettare il preventivo',
          'Confronti il ricambio proposto con l’equipaggiamento e le marcature dell’auto. Chieda al fornitore cosa comprende quel codice, quanto costa e quando può arrivare l’ordine completo.',
        ],
      ],
      layersLabel:
        'Livelli della descrizione di un ricambio: veicolo, componente, posizione ed equipaggiamento montato',
      layers: ['Equipaggiamento', 'Posizione', 'Componente', 'Veicolo'],
    },
    faq: {
      label: 'Dati dal veicolo',
      title: 'Domande che bloccano un preventivo',
      items: [
        [
          'Quale lato devo indicare?',
          'Indichi sinistra o destra dal punto di vista di chi è seduto nel veicolo guardando in avanti. Aggiunga la posizione di montaggio se resta qualche dubbio.',
        ],
        [
          'E se il numero sul pezzo vecchio non si legge bene?',
          'Invii i caratteri leggibili e indichi quali non sono chiari. Chieda quale altro dettaglio del pezzo permetterebbe di distinguerlo.',
        ],
        [
          'Posso chiedere un gruppo completo?',
          'Sì. Indichi il gruppo e gli accessori o i fissaggi che si aspetta di ricevere insieme.',
        ],
        [
          'Ogni richiesta deve avere tutti i dettagli?',
          'Spesso il veicolo e un nome chiaro del pezzo bastano per iniziare. Il banco può chiedere un altro dettaglio se compare più di una versione.',
        ],
      ],
    },
    closing: {
      title: 'Lo scriva sull’ordine di riparazione',
      text: 'Indichi nella richiesta il lato di montaggio e le eventuali marcature. Un disegno può aiutare se il nome sulla scheda di lavoro non è chiaro.',
      primary: 'Sfoglia i disegni',
      secondary: 'Controlla un VIN',
    },
  },
};
