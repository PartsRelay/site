// Journal article text in every language. Each section is [heading, text], with
// a list of [term, detail] pairs when it sets out the evidence to record.
// The topic labels, read time and cover art come from journal.js.

export const articles = {
  en: {
    allArticles: 'All articles',
    productNote:
      'Parts Relay finds the parts from a plate or VIN and keeps each search in one queue the whole counter can see.',
    how: 'How Parts Relay works',
    'alternator-labels': {
      heading: 'Reading the label on an alternator',
      description:
        'Identify the alternator markings a supplier needs when a label is worn or only part of the reference is legible.',
      relatedHeading: 'Other identification problems',
      intro:
        'Two alternators can have a similar housing and pulley. If both appear against the same vehicle, a legible marking on the old unit can narrow the search. First ask the counter which marking it needs.',
      sections: [
        [
          'What to record from a worn label',
          'Write the rating and the part number on separate lines. A partial number is still useful if the counter can tell where it stops.',
          [
            [
              'Output rating',
              'Copy the amperage as printed, including the unit. The rating belongs in its own field, even when the manufacturer’s number is illegible.',
            ],
            [
              'Part number',
              'Read the characters in order and mark anything you couldn’t make out. A cropped photo can help the counter see whether a character is worn away or hidden at the edge.',
            ],
            [
              'Outstanding check',
              'Ask the supplier which remaining detail would settle the match. Write down the question in their words so the technician can check it in one visit.',
            ],
          ],
        ],
        [
          'Which number do you need?',
          'The output rating and the manufacturer’s reference answer different questions. If the counter asks for the reference, copy the whole string, including letters, leading zeroes and the suffix. If one character is unclear, mark its position and leave it open.',
        ],
        [
          'The plug can help',
          'When the label is damaged, ask whether the connector shape distinguishes the remaining units. The counter person can tell the technician what to look for before anyone goes back to the vehicle.',
        ],
      ],
    },
    'brake-pad-sets': {
      heading: 'What comes in a brake pad set?',
      description:
        'Find out how to ask which pads, wear sensors and fitting hardware a brake quote includes.',
      relatedHeading: 'More parts-counter notes',
      intro:
        '“Pads” on the repair order makes sense to the technician who inspected the brakes. At the parts counter it leaves two questions open. Which axle? And what else does the shop expect in the box?',
      sections: [
        [
          'Put the axle on the enquiry',
          'If the front brakes are due, write “front brake pad set.” The distributor can check the reference for that axle on the vehicle. If the technician has called for a new wear sensor, put that on the enquiry too.',
        ],
        [
          'Ask about the set on the quote',
          'Try asking, “Does the front set include the wear sensor this job needs?” Clips and shims are worth checking too if the technician has called for them. A supplier can tell you what comes with the particular set they’re quoting.',
        ],
        [
          'Reading the supplier’s answer',
          'When a supplier quotes a set with clips and lists the sensor separately, the repair order needs to account for both references.',
          [
            [
              'Front pad set',
              'Write down the quoted reference. Check it against the vehicle and axle on the repair order.',
            ],
            ['Clips', 'Mark these as included so the shop doesn’t ask for a second set.'],
            [
              'Wear sensor',
              'Get its own reference and the quantity required. Check availability for both the pads and the sensor before booking the job.',
            ],
          ],
        ],
      ],
    },
    'mirror-glass': {
      heading: 'Mirror glass or the whole assembly?',
      description:
        'Describe the damage and equipment so your supplier can quote mirror glass, a cover or the complete assembly.',
      relatedHeading: 'More from the Journal',
      intro:
        'If a repair order says “left mirror,” ask what broke. The shop may need a pane of glass, a painted cover, or everything that bolts to the door. That answer changes what the distributor looks up.',
      sections: [
        [
          'Which side of the car?',
          'Describe left and right from the seat, facing forward. “Driver’s side” can mean different things to a supplier working with both left-hand-drive and right-hand-drive vehicles.',
        ],
        [
          'What to look up for each repair',
          'Use the catalogue drawing to see whether the manufacturer lists the damaged piece on its own.',
          [
            [
              'Cracked glass',
              'For an intact left housing with heated glass, ask the counter to quote the heated pane. Check whether that reference includes the backing plate.',
            ],
            [
              'Damaged outer cover',
              'Ask about the cover for the affected side. Confirm the finish and whether the shop will need to have it painted.',
            ],
            [
              'Broken mounting base',
              'Ask for the complete assembly if that’s how the catalogue supplies the mount. Tell the counter which equipment the replacement has to carry.',
            ],
          ],
        ],
        [
          'What’s still working?',
          'For cracked glass, find out whether the housing and adjuster survived. Note the heater connections and any warning indicator on the glass. For damage to the whole unit, the equipment to check may include a folding mechanism or a camera.',
        ],
      ],
    },
  },
  de: {
    allArticles: 'Alle Artikel',
    productNote:
      'Parts Relay findet die Teile über Kennzeichen oder FIN und hält jede Suche in einer Liste, die die ganze Theke sieht.',
    how: 'So funktioniert Parts Relay',
    'alternator-labels': {
      heading: 'Das Typenschild einer Lichtmaschine lesen',
      description:
        'Welche Angaben auf der Lichtmaschine der Lieferant braucht, wenn das Typenschild abgenutzt oder die Nummer nur teilweise lesbar ist.',
      relatedHeading: 'Weitere Fragen zur Identifizierung',
      intro:
        'Zwei Lichtmaschinen können ein ähnliches Gehäuse und eine ähnliche Riemenscheibe haben. Erscheinen beide für dasselbe Fahrzeug, kann eine lesbare Angabe auf dem Altteil die Suche eingrenzen. Fragen Sie zuerst an der Theke, welche Angabe dort gebraucht wird.',
      sections: [
        [
          'Was Sie von einem abgenutzten Schild notieren',
          'Schreiben Sie Nennstrom und Teilenummer in getrennte Zeilen. Auch eine unvollständige Nummer hilft weiter, wenn die Theke erkennen kann, wo sie abbricht.',
          [
            [
              'Nennstrom',
              'Übernehmen Sie die Amperezahl so, wie sie aufgedruckt ist, mit Einheit. Der Nennstrom gehört in ein eigenes Feld, auch wenn die Herstellernummer unleserlich ist.',
            ],
            [
              'Teilenummer',
              'Lesen Sie die Zeichen der Reihe nach und markieren Sie alles, was Sie nicht entziffern konnten. Ein Fotoausschnitt zeigt der Theke, ob ein Zeichen abgerieben ist oder nur am Rand verdeckt wird.',
            ],
            [
              'Offene Prüfung',
              'Fragen Sie den Lieferanten, welche Angabe die Zuordnung noch klären würde. Notieren Sie die Frage in seinen Worten, damit der Mechaniker sie mit einem einzigen Blick ans Fahrzeug prüfen kann.',
            ],
          ],
        ],
        [
          'Welche Nummer brauchen Sie?',
          'Nennstrom und Herstellernummer beantworten unterschiedliche Fragen. Verlangt die Theke die Nummer, übernehmen Sie die ganze Zeichenfolge mit Buchstaben, führenden Nullen und Suffix. Ist ein Zeichen unklar, markieren Sie seine Position und lassen Sie es offen.',
        ],
        [
          'Der Stecker kann helfen',
          'Ist das Schild beschädigt, fragen Sie, ob die Steckerform die verbleibenden Varianten unterscheidet. Die Theke kann dem Mechaniker sagen, worauf er achten soll, bevor jemand noch einmal zum Fahrzeug geht.',
        ],
      ],
    },
    'brake-pad-sets': {
      heading: 'Was gehört zu einem Bremsbelagsatz?',
      description:
        'So fragen Sie nach, welche Beläge, Verschleißsensoren und Montageteile ein Bremsenangebot umfasst.',
      relatedHeading: 'Weitere Notizen von der Teiletheke',
      intro:
        '„Beläge“ auf dem Reparaturauftrag ist für den Mechaniker, der die Bremsen geprüft hat, eindeutig. An der Teiletheke bleiben damit zwei Fragen offen. Welche Achse? Und was erwartet die Werkstatt sonst noch in der Packung?',
      sections: [
        [
          'Die Achse gehört in die Anfrage',
          'Sind die vorderen Bremsen fällig, schreiben Sie „Bremsbelagsatz vorn“. Der Händler kann dann die Nummer für diese Achse am Fahrzeug prüfen. Hat der Mechaniker einen neuen Verschleißsensor vorgesehen, gehört auch er in die Anfrage.',
        ],
        [
          'Nach dem Satz im Angebot fragen',
          'Fragen Sie zum Beispiel: „Enthält der vordere Satz den Verschleißsensor, den dieser Auftrag braucht?“ Auch Halteklammern und Dämpfungsbleche sind eine Nachfrage wert, wenn der Mechaniker sie vorgesehen hat. Der Lieferant kann Ihnen sagen, was zu genau dem Satz gehört, den er anbietet.',
        ],
        [
          'Die Antwort des Lieferanten lesen',
          'Bietet ein Lieferant einen Satz mit Halteklammern an und führt den Sensor getrennt auf, muss der Reparaturauftrag beide Nummern berücksichtigen.',
          [
            [
              'Belagsatz vorn',
              'Notieren Sie die angebotene Nummer. Gleichen Sie sie mit Fahrzeug und Achse auf dem Reparaturauftrag ab.',
            ],
            [
              'Halteklammern',
              'Vermerken Sie sie als enthalten, damit die Werkstatt keinen zweiten Satz anfragt.',
            ],
            [
              'Verschleißsensor',
              'Lassen Sie sich seine eigene Nummer und die benötigte Menge geben. Prüfen Sie die Verfügbarkeit von Belägen und Sensor, bevor Sie den Auftrag einplanen.',
            ],
          ],
        ],
      ],
    },
    'mirror-glass': {
      heading: 'Spiegelglas oder kompletter Spiegel?',
      description:
        'Beschreiben Sie Schaden und Ausstattung so, dass Ihr Lieferant Spiegelglas, Abdeckung oder den kompletten Spiegel anbieten kann.',
      relatedHeading: 'Mehr aus dem Journal',
      intro:
        'Steht auf dem Reparaturauftrag „Spiegel links“, fragen Sie, was kaputt ist. Die Werkstatt braucht vielleicht nur das Glas, eine lackierte Abdeckung oder alles, was an der Tür verschraubt ist. Davon hängt ab, was der Händler nachschlägt.',
      sections: [
        [
          'Welche Fahrzeugseite?',
          'Beschreiben Sie links und rechts vom Sitz aus in Fahrtrichtung. „Fahrerseite“ kann für einen Lieferanten, der Links- und Rechtslenker bedient, Unterschiedliches bedeuten.',
        ],
        [
          'Was Sie für welche Reparatur nachschlagen',
          'Prüfen Sie in der Katalogzeichnung, ob der Hersteller das beschädigte Teil einzeln führt.',
          [
            [
              'Gesprungenes Glas',
              'Ist das linke Gehäuse intakt und das Glas beheizt, bitten Sie die Theke um ein Angebot für das beheizte Glas. Prüfen Sie, ob diese Nummer die Trägerplatte einschließt.',
            ],
            [
              'Beschädigte Abdeckung',
              'Fragen Sie nach der Abdeckung für die betroffene Seite. Klären Sie die Oberfläche und ob die Werkstatt sie lackieren lassen muss.',
            ],
            [
              'Abgebrochener Spiegelfuß',
              'Fragen Sie nach dem kompletten Spiegel, wenn der Katalog den Fuß nur so liefert. Sagen Sie der Theke, welche Ausstattung das Ersatzteil haben muss.',
            ],
          ],
        ],
        [
          'Was funktioniert noch?',
          'Klären Sie bei gesprungenem Glas, ob Gehäuse und Verstellung heil geblieben sind. Notieren Sie die Heizungsanschlüsse und eine eventuelle Warnanzeige im Glas. Ist die ganze Einheit beschädigt, kann zur Ausstattung eine elektrische Anklappung oder eine Kamera gehören.',
        ],
      ],
    },
  },
  fr: {
    allArticles: 'Tous les articles',
    productNote:
      'Parts Relay trouve les pièces à partir d’une plaque ou d’un VIN et garde chaque recherche dans une file visible par tout le comptoir.',
    how: 'Comment fonctionne Parts Relay',
    'alternator-labels': {
      heading: 'Lire l’étiquette d’un alternateur',
      description:
        'Repérez les marquages d’alternateur dont le fournisseur a besoin quand l’étiquette est usée ou que la référence n’est lisible qu’en partie.',
      relatedHeading: 'Autres problèmes d’identification',
      intro:
        'Deux alternateurs peuvent avoir un carter et une poulie semblables. Si les deux sortent pour le même véhicule, un marquage lisible sur l’ancienne pièce peut resserrer la recherche. Demandez d’abord au comptoir quel marquage il lui faut.',
      sections: [
        [
          'Ce qu’il faut relever sur une étiquette usée',
          'Notez l’intensité et la référence sur des lignes séparées. Une référence partielle reste utile si le comptoir sait où elle s’arrête.',
          [
            [
              'Intensité nominale',
              'Recopiez l’ampérage tel qu’il est imprimé, unité comprise. L’intensité a sa propre case, même quand la référence du fabricant est illisible.',
            ],
            [
              'Référence',
              'Lisez les caractères dans l’ordre et signalez ceux que vous n’avez pas pu déchiffrer. Une photo recadrée aide le comptoir à voir si un caractère est effacé ou masqué au bord.',
            ],
            [
              'Vérification en suspens',
              'Demandez au fournisseur quel détail permettrait de trancher. Notez la question avec ses mots, pour que le mécanicien puisse la vérifier en un seul passage.',
            ],
          ],
        ],
        [
          'De quel numéro avez-vous besoin ?',
          'L’intensité nominale et la référence du fabricant ne répondent pas à la même question. Si le comptoir demande la référence, recopiez la chaîne entière, lettres, zéros initiaux et suffixe compris. Si un caractère est douteux, indiquez sa position et laissez-le en blanc.',
        ],
        [
          'Le connecteur peut aider',
          'Quand l’étiquette est abîmée, demandez si la forme du connecteur permet de départager les modèles restants. Le comptoir peut dire au mécanicien quoi regarder avant que quelqu’un retourne au véhicule.',
        ],
      ],
    },
    'brake-pad-sets': {
      heading: 'Que contient un jeu de plaquettes ?',
      description:
        'Comment demander quelles plaquettes, quels témoins d’usure et quels accessoires de montage comprend un devis de freinage.',
      relatedHeading: 'D’autres notes du comptoir',
      intro:
        '« Plaquettes » sur l’ordre de réparation est clair pour le mécanicien qui a contrôlé les freins. Au comptoir pièces, deux questions restent ouvertes. Quel essieu ? Et que s’attend à trouver le garage dans la boîte ?',
      sections: [
        [
          'Indiquez l’essieu dans la demande',
          'Si ce sont les freins avant, écrivez « jeu de plaquettes avant ». Le distributeur peut vérifier la référence pour cet essieu sur le véhicule. Si le mécanicien a prévu un nouveau témoin d’usure, mettez-le aussi dans la demande.',
        ],
        [
          'Posez la question du contenu',
          'Demandez par exemple : « Le jeu avant comprend-il le témoin d’usure dont ce travail a besoin ? » Les agrafes et les plaques anti-bruit méritent aussi d’être vérifiées si le mécanicien les a prévues. Le fournisseur peut vous dire ce que contient précisément le jeu qu’il chiffre.',
        ],
        [
          'Lire la réponse du fournisseur',
          'Quand un fournisseur chiffre un jeu avec agrafes et indique le témoin à part, l’ordre de réparation doit tenir compte des deux références.',
          [
            [
              'Jeu de plaquettes avant',
              'Notez la référence chiffrée. Vérifiez-la par rapport au véhicule et à l’essieu indiqués sur l’ordre de réparation.',
            ],
            [
              'Agrafes',
              'Indiquez-les comme incluses pour que le garage n’en demande pas un second jeu.',
            ],
            [
              'Témoin d’usure',
              'Obtenez sa propre référence et la quantité nécessaire. Vérifiez la disponibilité des plaquettes et du témoin avant de planifier l’intervention.',
            ],
          ],
        ],
      ],
    },
    'mirror-glass': {
      heading: 'Glace seule ou rétroviseur complet ?',
      description:
        'Décrivez les dégâts et les équipements pour que votre fournisseur puisse chiffrer la glace, la coque ou le rétroviseur complet.',
      relatedHeading: 'À lire aussi dans le Journal',
      intro:
        'Si l’ordre de réparation indique « rétroviseur gauche », demandez ce qui est cassé. Le garage a peut-être besoin d’une glace, d’une coque peinte ou de tout ce qui se fixe sur la portière. La réponse change ce que le distributeur recherche.',
      sections: [
        [
          'Quel côté du véhicule ?',
          'Décrivez la gauche et la droite depuis le siège, face à la route. « Côté conducteur » peut prêter à confusion pour un fournisseur qui travaille avec des véhicules à conduite à gauche comme à droite.',
        ],
        [
          'Que rechercher pour chaque réparation',
          'Servez-vous de la vue éclatée du catalogue pour voir si le constructeur vend la pièce endommagée seule.',
          [
            [
              'Glace fissurée',
              'Si le boîtier gauche est intact et la glace chauffante, demandez au comptoir de chiffrer la glace chauffante. Vérifiez si cette référence comprend la plaque support.',
            ],
            [
              'Coque extérieure abîmée',
              'Demandez la coque du côté concerné. Confirmez la finition et si le garage devra la faire peindre.',
            ],
            [
              'Pied de fixation cassé',
              'Demandez le rétroviseur complet si c’est ainsi que le catalogue fournit le pied. Indiquez au comptoir les équipements que la pièce de remplacement doit avoir.',
            ],
          ],
        ],
        [
          'Qu’est-ce qui fonctionne encore ?',
          'Pour une glace fissurée, vérifiez si le boîtier et le mécanisme de réglage ont tenu. Notez les connexions du dégivrage et tout voyant intégré à la glace. Si tout l’ensemble est endommagé, il peut falloir vérifier un rabattement électrique ou une caméra.',
        ],
      ],
    },
  },
  es: {
    allArticles: 'Todos los artículos',
    productNote:
      'Parts Relay encuentra los recambios a partir de una matrícula o un VIN y guarda cada búsqueda en una cola que todo el mostrador puede ver.',
    how: 'Cómo funciona Parts Relay',
    'alternator-labels': {
      heading: 'Leer la etiqueta de un alternador',
      description:
        'Identifique las marcas del alternador que necesita el proveedor cuando la etiqueta está gastada o solo se lee parte de la referencia.',
      relatedHeading: 'Otros problemas de identificación',
      intro:
        'Dos alternadores pueden tener una carcasa y una polea parecidas. Si ambos aparecen para el mismo vehículo, una marca legible en la pieza vieja puede acotar la búsqueda. Pregunte primero al mostrador qué marca necesita.',
      sections: [
        [
          'Qué anotar de una etiqueta gastada',
          'Escriba el amperaje y la referencia en líneas separadas. Una referencia incompleta sigue sirviendo si el mostrador sabe dónde se corta.',
          [
            [
              'Intensidad nominal',
              'Copie el amperaje tal como está impreso, con la unidad. La intensidad va en su propio campo, aunque la referencia del fabricante no se lea.',
            ],
            [
              'Referencia',
              'Lea los caracteres en orden y marque los que no haya podido distinguir. Una foto recortada ayuda al mostrador a ver si un carácter está borrado o tapado en el borde.',
            ],
            [
              'Comprobación pendiente',
              'Pregunte al proveedor qué dato falta para confirmar la pieza. Anote la pregunta con sus palabras para que el mecánico pueda comprobarlo en una sola visita.',
            ],
          ],
        ],
        [
          '¿Qué número necesita?',
          'La intensidad nominal y la referencia del fabricante responden a preguntas distintas. Si el mostrador pide la referencia, copie la cadena completa, con letras, ceros iniciales y sufijo. Si un carácter no está claro, marque su posición y déjelo abierto.',
        ],
        [
          'El conector puede ayudar',
          'Si la etiqueta está dañada, pregunte si la forma del conector distingue las unidades que quedan. El mostrador puede decirle al mecánico qué mirar antes de que nadie vuelva al vehículo.',
        ],
      ],
    },
    'brake-pad-sets': {
      heading: '¿Qué incluye un juego de pastillas?',
      description:
        'Cómo preguntar qué pastillas, sensores de desgaste y accesorios de montaje incluye un presupuesto de frenos.',
      relatedHeading: 'Más notas del mostrador',
      intro:
        '«Pastillas» en la orden de reparación tiene sentido para el mecánico que revisó los frenos. En el mostrador deja dos preguntas abiertas. ¿Qué eje? ¿Y qué más espera el taller encontrar en la caja?',
      sections: [
        [
          'Indique el eje en la consulta',
          'Si tocan los frenos delanteros, escriba «juego de pastillas delanteras». El distribuidor puede comprobar la referencia para ese eje en el vehículo. Si el mecánico ha pedido un sensor de desgaste nuevo, inclúyalo también en la consulta.',
        ],
        [
          'Pregunte por el juego presupuestado',
          'Pruebe a preguntar: «¿El juego delantero incluye el sensor de desgaste que necesita este trabajo?». También conviene comprobar las grapas y las láminas antirruido si el mecánico las ha pedido. El proveedor puede decirle qué trae exactamente el juego que presupuesta.',
        ],
        [
          'Cómo leer la respuesta del proveedor',
          'Cuando un proveedor presupuesta un juego con grapas y da el sensor por separado, la orden de reparación tiene que recoger las dos referencias.',
          [
            [
              'Juego de pastillas delanteras',
              'Anote la referencia presupuestada. Compruébela con el vehículo y el eje de la orden de reparación.',
            ],
            ['Grapas', 'Márquelas como incluidas para que el taller no pida un segundo juego.'],
            [
              'Sensor de desgaste',
              'Pida su propia referencia y la cantidad necesaria. Compruebe la disponibilidad de las pastillas y del sensor antes de programar el trabajo.',
            ],
          ],
        ],
      ],
    },
    'mirror-glass': {
      heading: '¿Solo el cristal o el retrovisor completo?',
      description:
        'Describa el daño y el equipamiento para que su proveedor pueda presupuestar el cristal, la tapa o el retrovisor completo.',
      relatedHeading: 'Más del Journal',
      intro:
        'Si la orden de reparación dice «retrovisor izquierdo», pregunte qué se ha roto. Puede que el taller necesite un cristal, una tapa pintada o todo lo que va atornillado a la puerta. La respuesta cambia lo que busca el distribuidor.',
      sections: [
        [
          '¿Qué lado del coche?',
          'Describa izquierda y derecha desde el asiento, mirando hacia delante. «Lado del conductor» puede significar cosas distintas para un proveedor que trabaja con vehículos con volante a la izquierda y a la derecha.',
        ],
        [
          'Qué buscar en cada reparación',
          'Use el despiece del catálogo para ver si el fabricante vende la pieza dañada por separado.',
          [
            [
              'Cristal agrietado',
              'Con la carcasa izquierda intacta y cristal térmico, pida al mostrador presupuesto del cristal térmico. Compruebe si esa referencia incluye la placa soporte.',
            ],
            [
              'Tapa exterior dañada',
              'Pregunte por la tapa del lado afectado. Confirme el acabado y si el taller tendrá que pintarla.',
            ],
            [
              'Base de anclaje rota',
              'Pida el retrovisor completo si el catálogo suministra así la base. Indique al mostrador qué equipamiento debe llevar el recambio.',
            ],
          ],
        ],
        [
          '¿Qué sigue funcionando?',
          'Con el cristal agrietado, averigüe si la carcasa y el reglaje han aguantado. Anote las conexiones de la calefacción y cualquier testigo de aviso en el cristal. Si está dañada toda la unidad, quizá haya que comprobar un plegado eléctrico o una cámara.',
        ],
      ],
    },
  },
  it: {
    allArticles: 'Tutti gli articoli',
    productNote:
      'Parts Relay trova i ricambi da una targa o da un VIN e tiene ogni ricerca in un’unica coda visibile a tutto il banco.',
    how: 'Come funziona Parts Relay',
    'alternator-labels': {
      heading: 'Leggere l’etichetta di un alternatore',
      description:
        'Individui le marcature dell’alternatore che servono al fornitore quando l’etichetta è consumata o il codice si legge solo in parte.',
      relatedHeading: 'Altri problemi di identificazione',
      intro:
        'Due alternatori possono avere corpo e puleggia simili. Se compaiono entrambi per lo stesso veicolo, una marcatura leggibile sul pezzo vecchio può restringere la ricerca. Chieda prima al banco quale marcatura gli serve.',
      sections: [
        [
          'Cosa annotare da un’etichetta consumata',
          'Scriva amperaggio e codice su righe separate. Anche un codice parziale è utile, se il banco capisce dove si interrompe.',
          [
            [
              'Corrente nominale',
              'Copi l’amperaggio così come è stampato, unità compresa. La corrente nominale va in un campo a sé, anche quando il codice del costruttore è illeggibile.',
            ],
            [
              'Codice',
              'Legga i caratteri in ordine e segni quelli che non è riuscito a decifrare. Una foto ritagliata aiuta il banco a capire se un carattere è consumato o nascosto sul bordo.',
            ],
            [
              'Verifica in sospeso',
              'Chieda al fornitore quale dato resta da chiarire per confermare il pezzo. Annoti la domanda con le sue parole, così il meccanico può verificarla in un solo passaggio.',
            ],
          ],
        ],
        [
          'Quale numero le serve?',
          'La corrente nominale e il codice del costruttore rispondono a domande diverse. Se il banco chiede il codice, copi l’intera stringa, lettere, zeri iniziali e suffisso compresi. Se un carattere non è chiaro, ne segni la posizione e lo lasci in sospeso.',
        ],
        [
          'Il connettore può aiutare',
          'Quando l’etichetta è danneggiata, chieda se la forma del connettore distingue le versioni rimaste. Il banco può dire al meccanico cosa guardare prima che qualcuno torni al veicolo.',
        ],
      ],
    },
    'brake-pad-sets': {
      heading: 'Cosa c’è in un kit pastiglie?',
      description:
        'Come chiedere quali pastiglie, sensori d’usura e accessori di montaggio comprende un preventivo per i freni.',
      relatedHeading: 'Altri appunti dal banco ricambi',
      intro:
        '«Pastiglie» sull’ordine di riparazione è chiaro per il meccanico che ha controllato i freni. Al banco ricambi lascia aperte due domande. Quale asse? E cos’altro si aspetta l’officina di trovare nella scatola?',
      sections: [
        [
          'Indichi l’asse nella richiesta',
          'Se tocca ai freni anteriori, scriva «kit pastiglie anteriori». Il distributore può verificare il codice per quell’asse sul veicolo. Se il meccanico ha previsto un sensore d’usura nuovo, lo inserisca anche nella richiesta.',
        ],
        [
          'Chieda cosa comprende il kit',
          'Provi a chiedere: «Il kit anteriore comprende il sensore d’usura che serve per questo lavoro?» Vale la pena verificare anche mollette e lamierini antirumore, se il meccanico li ha previsti. Il fornitore può dirle cosa contiene esattamente il kit che sta quotando.',
        ],
        [
          'Leggere la risposta del fornitore',
          'Quando un fornitore quota un kit con mollette e indica il sensore a parte, l’ordine di riparazione deve tenere conto di entrambi i codici.',
          [
            [
              'Kit pastiglie anteriori',
              'Annoti il codice quotato. Lo confronti con il veicolo e l’asse indicati sull’ordine di riparazione.',
            ],
            ['Mollette', 'Le segni come incluse, così l’officina non chiede un secondo kit.'],
            [
              'Sensore d’usura',
              'Si faccia dare il suo codice e la quantità necessaria. Verifichi la disponibilità di pastiglie e sensore prima di programmare il lavoro.',
            ],
          ],
        ],
      ],
    },
    'mirror-glass': {
      heading: 'Solo il vetro o lo specchietto completo?',
      description:
        'Descriva danno ed equipaggiamento perché il fornitore possa quotare il vetro, la calotta o lo specchietto completo.',
      relatedHeading: 'Altro dal Journal',
      intro:
        'Se l’ordine di riparazione dice «specchietto sinistro», chieda cosa si è rotto. L’officina può avere bisogno di un vetro, di una calotta verniciata o di tutto ciò che si avvita alla portiera. La risposta cambia ciò che cerca il distributore.',
      sections: [
        [
          'Quale lato dell’auto?',
          'Indichi sinistra e destra dal sedile, guardando in avanti. «Lato guida» può voler dire cose diverse per un fornitore che lavora sia con veicoli con guida a sinistra sia con guida a destra.',
        ],
        [
          'Cosa cercare per ogni riparazione',
          'Usi l’esploso del catalogo per vedere se il costruttore vende il pezzo danneggiato da solo.',
          [
            [
              'Vetro incrinato',
              'Se il corpo sinistro è integro e il vetro è riscaldato, chieda al banco di quotare il vetro riscaldato. Verifichi se quel codice comprende la piastra di supporto.',
            ],
            [
              'Calotta esterna danneggiata',
              'Chieda la calotta del lato interessato. Confermi la finitura e se l’officina dovrà farla verniciare.',
            ],
            [
              'Base di fissaggio rotta',
              'Chieda lo specchietto completo se è così che il catalogo fornisce la base. Dica al banco quale equipaggiamento deve avere il ricambio.',
            ],
          ],
        ],
        [
          'Cosa funziona ancora?',
          'Con il vetro incrinato, verifichi se corpo e regolazione sono rimasti integri. Annoti i collegamenti del riscaldamento e l’eventuale spia integrata nel vetro. Se è danneggiata l’intera unità, l’equipaggiamento da controllare può includere la chiusura elettrica o una telecamera.',
        ],
      ],
    },
  },
};
