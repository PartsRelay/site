// Vehicle identification guide text in every language.
// The journal articles in related are English only, so their links stay English.

export const vehicleIdentification = {
  en: {
    title: 'When the vehicle record doesn’t match the job | Parts Relay',
    description:
      'Resolve a discrepancy between the vehicle in the bay, its registration and the VIN on the repair order.',
    heading: 'When the vehicle record doesn’t match the job',
    topic: 'Vehicle guide',
    readTime: '3 min read',
    relatedHeading: 'Once you’ve identified the vehicle',
    related: [
      'What comes in a brake pad set?',
      'Reading the label on an alternator',
      'All resources',
    ],
    intro:
      'The car in the bay and the car on the screen should agree before you use a parts reference. A familiar model name can hide a different engine or variant, even within one registration year.',
    coverLabel: 'Illustrated vehicle identification plate with a barcode',
    plateTitle: 'Vehicle identification',
    plateCode: 'VIN',
    plateName: 'Vehicle identification number',
    sourceTitle: 'Where did the identifier come from?',
    sourceText:
      'Use the VIN on the vehicle or a verified shop record. If your supplier works from a registration plate, include the issuing market. A registration catalogue may cover some markets and leave others out.',
    sources: [
      [
        'VIN',
        'Read back the characters in groups and check them against the vehicle. A format check can flag a typing error, even when the number looks familiar.',
      ],
      ['Registration', 'Keep the plate with its issuing market when you ask for a lookup.'],
      [
        'Model and engine',
        'Compare the description the supplier finds with the job sheet. Ask the technician about any discrepancy.',
      ],
      [
        'Equipment',
        'If more than one part fits the listed model, ask which option or marking distinguishes them.',
      ],
    ],
    agreeTitle: 'Which details agree?',
    agreeText:
      'Read the make and model back against the repair order. Compare the engine or variant wherever the result includes it. If those details agree, open the relevant parts group. Leave any equipment the record doesn’t specify for the technician to confirm.',
    caseTitle: 'If the search returns an unexpected result',
    caseText: 'The next question depends on what the catalogue could identify.',
    cases: [
      [
        'A different vehicle appears',
        'Check the identifier against the vehicle itself or the verified job sheet. Resolve the mismatch with the shop before you quote from that record.',
      ],
      [
        'The result is empty',
        'Confirm the registration and its issuing market. If the catalogue still has no entry, ask the supplier to identify the vehicle and record what the shop has verified so far.',
      ],
      [
        'The car matches, but the description is vague',
        'Ask where the part fits. “Bearing” could mean a front or rear wheel bearing, or a bearing inside another assembly. Keep the answer with that vehicle record.',
      ],
    ],
    checkVin: 'Check the format of a VIN',
    productNote:
      'Parts Relay finds the parts from a plate or VIN and keeps each search in one queue the whole counter can see.',
    productLink: 'How Parts Relay works',
  },
  de: {
    title: 'Wenn der Fahrzeugdatensatz nicht zum Auftrag passt | Parts Relay',
    description:
      'Klären Sie Abweichungen zwischen dem Fahrzeug in der Werkstatt, seinem Kennzeichen und der FIN auf dem Reparaturauftrag.',
    heading: 'Wenn der Fahrzeugdatensatz nicht zum Auftrag passt',
    topic: 'Ratgeber Fahrzeug',
    readTime: '3 Min. Lesezeit',
    relatedHeading: 'Wenn das Fahrzeug bestimmt ist',
    related: [
      'Was gehört zu einem Bremsbelagsatz?',
      'Das Typenschild einer Lichtmaschine lesen',
      'Alle Ratgeber',
    ],
    intro:
      'Das Auto auf der Hebebühne und das Auto auf dem Bildschirm sollten übereinstimmen, bevor Sie eine Teilenummer verwenden. Hinter einem vertrauten Modellnamen kann sich ein anderer Motor oder eine andere Variante verbergen, sogar innerhalb eines Zulassungsjahres.',
    coverLabel: 'Illustration eines Fahrzeug-Typenschilds mit Barcode',
    plateTitle: 'Fahrzeugidentifizierung',
    plateCode: 'FIN',
    plateName: 'Fahrzeug-Identifizierungsnummer',
    sourceTitle: 'Woher stammt die Kennung?',
    sourceText:
      'Verwenden Sie die FIN am Fahrzeug oder einen geprüften Werkstattdatensatz. Arbeitet Ihr Lieferant mit dem Kennzeichen, nennen Sie das Zulassungsland. Ein Kennzeichenkatalog deckt womöglich nur einige Länder ab.',
    sources: [
      [
        'FIN',
        'Lesen Sie die Zeichen in Gruppen vor und gleichen Sie sie mit dem Fahrzeug ab. Eine Formatprüfung kann einen Tippfehler aufdecken, auch wenn die Nummer vertraut aussieht.',
      ],
      [
        'Kennzeichen',
        'Geben Sie das Kennzeichen zusammen mit dem Zulassungsland an, wenn Sie eine Abfrage anfordern.',
      ],
      [
        'Modell und Motor',
        'Vergleichen Sie die Beschreibung, die der Lieferant findet, mit dem Auftrag. Fragen Sie bei Abweichungen den Mechaniker.',
      ],
      [
        'Ausstattung',
        'Passt mehr als ein Teil zum angegebenen Modell, fragen Sie, welche Option oder Kennzeichnung sie unterscheidet.',
      ],
    ],
    agreeTitle: 'Welche Angaben stimmen überein?',
    agreeText:
      'Gleichen Sie Marke und Modell mit dem Reparaturauftrag ab. Vergleichen Sie Motor oder Variante, wo das Ergebnis sie enthält. Stimmen diese Angaben, öffnen Sie die passende Teilegruppe. Ausstattung, die der Datensatz nicht angibt, lässt der Mechaniker bestätigen.',
    caseTitle: 'Wenn die Suche ein unerwartetes Ergebnis liefert',
    caseText: 'Die nächste Frage hängt davon ab, was der Katalog bestimmen konnte.',
    cases: [
      [
        'Ein anderes Fahrzeug erscheint',
        'Prüfen Sie die Kennung am Fahrzeug selbst oder am geprüften Auftrag. Klären Sie die Abweichung mit der Werkstatt, bevor Sie aus diesem Datensatz ein Angebot machen.',
      ],
      [
        'Das Ergebnis ist leer',
        'Bestätigen Sie Kennzeichen und Zulassungsland. Hat der Katalog dann immer noch keinen Eintrag, bitten Sie den Lieferanten, das Fahrzeug zu bestimmen, und halten Sie fest, was die Werkstatt bisher geprüft hat.',
      ],
      [
        'Das Auto passt, aber die Beschreibung ist ungenau',
        'Fragen Sie, wo das Teil sitzt. „Lager“ kann ein vorderes oder hinteres Radlager sein oder ein Lager in einer anderen Baugruppe. Halten Sie die Antwort bei diesem Fahrzeugdatensatz fest.',
      ],
    ],
    checkVin: 'Format einer FIN prüfen',
    productNote:
      'Parts Relay findet die Teile über Kennzeichen oder FIN und hält jede Suche in einer Liste, die die ganze Theke sieht.',
    productLink: 'So funktioniert Parts Relay',
  },
  fr: {
    title: 'Quand la fiche véhicule ne correspond pas au travail | Parts Relay',
    description:
      'Résolvez un écart entre le véhicule à l’atelier, son immatriculation et le VIN de l’ordre de réparation.',
    heading: 'Quand la fiche véhicule ne correspond pas au travail',
    topic: 'Guide véhicule',
    readTime: '3 min de lecture',
    relatedHeading: 'Une fois le véhicule identifié',
    related: [
      'Que contient un jeu de plaquettes de frein ?',
      'Lire l’étiquette d’un alternateur',
      'Tous les guides',
    ],
    intro:
      'La voiture à l’atelier et celle à l’écran doivent correspondre avant que vous utilisiez une référence. Un nom de modèle familier peut cacher une autre motorisation ou une autre version, même au sein d’une même année d’immatriculation.',
    coverLabel: 'Illustration d’une plaque d’identification du véhicule avec code-barres',
    plateTitle: 'Identification du véhicule',
    plateCode: 'VIN',
    plateName: 'Numéro d’identification du véhicule',
    sourceTitle: 'D’où vient l’identifiant ?',
    sourceText:
      'Utilisez le VIN relevé sur le véhicule ou un dossier vérifié du garage. Si votre fournisseur travaille à partir de la plaque, indiquez le pays d’immatriculation. Un catalogue par plaque peut couvrir certains pays et pas d’autres.',
    sources: [
      [
        'VIN',
        'Relisez les caractères par groupes et comparez-les au véhicule. Une vérification du format peut révéler une faute de frappe, même si le numéro semble familier.',
      ],
      [
        'Immatriculation',
        'Donnez la plaque avec son pays d’immatriculation quand vous demandez une recherche.',
      ],
      [
        'Modèle et moteur',
        'Comparez la description trouvée par le fournisseur avec l’ordre de réparation. Interrogez le technicien en cas d’écart.',
      ],
      [
        'Équipement',
        'Si plusieurs pièces correspondent au modèle indiqué, demandez quelle option ou quel marquage les distingue.',
      ],
    ],
    agreeTitle: 'Quelles informations concordent ?',
    agreeText:
      'Comparez la marque et le modèle avec l’ordre de réparation. Vérifiez la motorisation ou la version lorsque le résultat l’indique. Si ces informations concordent, ouvrez le groupe de pièces concerné. Laissez le technicien confirmer tout équipement que la fiche ne précise pas.',
    caseTitle: 'Si la recherche renvoie un résultat inattendu',
    caseText: 'La question suivante dépend de ce que le catalogue a pu identifier.',
    cases: [
      [
        'Un autre véhicule apparaît',
        'Vérifiez l’identifiant sur le véhicule lui-même ou sur l’ordre de réparation vérifié. Réglez l’écart avec le garage avant de faire un devis à partir de cette fiche.',
      ],
      [
        'Le résultat est vide',
        'Confirmez l’immatriculation et son pays. Si le catalogue n’a toujours aucune fiche, demandez au fournisseur d’identifier le véhicule et notez ce que le garage a vérifié jusqu’ici.',
      ],
      [
        'La voiture correspond, mais la description est vague',
        'Demandez où se monte la pièce. « Roulement » peut désigner un roulement de roue avant ou arrière, ou un roulement à l’intérieur d’un autre ensemble. Conservez la réponse avec cette fiche véhicule.',
      ],
    ],
    checkVin: 'Vérifier le format d’un VIN',
    productNote:
      'Parts Relay trouve les pièces à partir d’une plaque ou d’un VIN et garde chaque recherche dans une même file, visible par tout le comptoir.',
    productLink: 'Comment fonctionne Parts Relay',
  },
  es: {
    title: 'Cuando la ficha del vehículo no coincide con el trabajo | Parts Relay',
    description:
      'Resuelva una discrepancia entre el vehículo del taller, su matrícula y el VIN de la orden de reparación.',
    heading: 'Cuando la ficha del vehículo no coincide con el trabajo',
    topic: 'Guía del vehículo',
    readTime: '3 min de lectura',
    relatedHeading: 'Una vez identificado el vehículo',
    related: [
      '¿Qué incluye un juego de pastillas de freno?',
      'Leer la etiqueta de un alternador',
      'Todas las guías',
    ],
    intro:
      'El coche del taller y el coche de la pantalla deben coincidir antes de usar una referencia. Un nombre de modelo conocido puede esconder otro motor u otra versión, incluso dentro del mismo año de matriculación.',
    coverLabel: 'Ilustración de una placa de identificación del vehículo con código de barras',
    plateTitle: 'Identificación del vehículo',
    plateCode: 'VIN',
    plateName: 'Número de identificación del vehículo',
    sourceTitle: '¿De dónde sale el identificador?',
    sourceText:
      'Use el VIN del vehículo o un registro verificado del taller. Si su proveedor trabaja con la matrícula, indique el país de matriculación. Un catálogo por matrícula puede cubrir unos países y no otros.',
    sources: [
      [
        'VIN',
        'Lea los caracteres en grupos y compárelos con el vehículo. Una comprobación del formato puede detectar un error de escritura, aunque el número parezca conocido.',
      ],
      ['Matrícula', 'Dé la matrícula junto con su país de matriculación cuando pida una búsqueda.'],
      [
        'Modelo y motor',
        'Compare la descripción que encuentra el proveedor con la orden de trabajo. Consulte al técnico cualquier discrepancia.',
      ],
      [
        'Equipamiento',
        'Si más de una pieza encaja con el modelo indicado, pregunte qué opción o marca las distingue.',
      ],
    ],
    agreeTitle: '¿Qué datos coinciden?',
    agreeText:
      'Compare la marca y el modelo con la orden de reparación. Compruebe el motor o la versión cuando el resultado los incluya. Si esos datos coinciden, abra el grupo de piezas correspondiente. Deje que el técnico confirme el equipamiento que la ficha no especifique.',
    caseTitle: 'Si la búsqueda da un resultado inesperado',
    caseText: 'La siguiente pregunta depende de lo que el catálogo haya podido identificar.',
    cases: [
      [
        'Aparece otro vehículo',
        'Compruebe el identificador en el propio vehículo o en la orden de trabajo verificada. Aclare la discrepancia con el taller antes de presupuestar a partir de esa ficha.',
      ],
      [
        'El resultado está vacío',
        'Confirme la matrícula y su país de matriculación. Si el catálogo sigue sin ficha, pida al proveedor que identifique el vehículo y anote lo que el taller ha verificado hasta ahora.',
      ],
      [
        'El coche coincide, pero la descripción es vaga',
        'Pregunte dónde va la pieza. «Rodamiento» puede ser un rodamiento de rueda delantero o trasero, o un rodamiento dentro de otro conjunto. Guarde la respuesta con esa ficha del vehículo.',
      ],
    ],
    checkVin: 'Comprobar el formato de un VIN',
    productNote:
      'Parts Relay encuentra los recambios a partir de una matrícula o un VIN y guarda cada búsqueda en una cola que ve todo el mostrador.',
    productLink: 'Cómo funciona Parts Relay',
  },
  it: {
    title: 'Quando la scheda del veicolo non corrisponde al lavoro | Parts Relay',
    description:
      'Risolva una discrepanza tra il veicolo in officina, la sua targa e il VIN sull’ordine di riparazione.',
    heading: 'Quando la scheda del veicolo non corrisponde al lavoro',
    topic: 'Guida al veicolo',
    readTime: '3 min di lettura',
    relatedHeading: 'Dopo aver identificato il veicolo',
    related: [
      'Cosa contiene un kit di pastiglie freno?',
      'Leggere l’etichetta di un alternatore',
      'Tutte le guide',
    ],
    intro:
      'L’auto in officina e quella sullo schermo devono corrispondere prima di usare un codice ricambio. Un nome di modello familiare può nascondere un motore o una versione diversa, anche nello stesso anno di immatricolazione.',
    coverLabel: 'Illustrazione di una targhetta di identificazione del veicolo con codice a barre',
    plateTitle: 'Identificazione del veicolo',
    plateCode: 'VIN',
    plateName: 'Numero di identificazione del veicolo',
    sourceTitle: 'Da dove viene l’identificativo?',
    sourceText:
      'Usi il VIN sul veicolo o una scheda verificata dell’officina. Se il fornitore lavora con la targa, indichi il paese di immatricolazione. Un catalogo per targa può coprire alcuni paesi e non altri.',
    sources: [
      [
        'VIN',
        'Rilegga i caratteri a gruppi e li confronti con il veicolo. Un controllo del formato può segnalare un errore di battitura, anche quando il numero sembra familiare.',
      ],
      ['Targa', 'Indichi la targa insieme al paese di immatricolazione quando chiede una ricerca.'],
      [
        'Modello e motore',
        'Confronti la descrizione trovata dal fornitore con la scheda di lavoro. Chieda al tecnico di ogni discrepanza.',
      ],
      [
        'Equipaggiamento',
        'Se più di un ricambio va bene per il modello indicato, chieda quale optional o marcatura li distingue.',
      ],
    ],
    agreeTitle: 'Quali dati corrispondono?',
    agreeText:
      'Confronti marca e modello con l’ordine di riparazione. Controlli il motore o la versione quando il risultato li riporta. Se questi dati corrispondono, apra il gruppo di ricambi pertinente. Lasci al tecnico la conferma di ogni equipaggiamento che la scheda non specifica.',
    caseTitle: 'Se la ricerca dà un risultato inatteso',
    caseText: 'La domanda successiva dipende da cosa il catalogo è riuscito a identificare.',
    cases: [
      [
        'Compare un altro veicolo',
        'Controlli l’identificativo sul veicolo stesso o sulla scheda di lavoro verificata. Risolva la discrepanza con l’officina prima di fare un preventivo da quella scheda.',
      ],
      [
        'Il risultato è vuoto',
        'Confermi la targa e il paese di immatricolazione. Se il catalogo non ha ancora nessuna voce, chieda al fornitore di identificare il veicolo e annoti cosa l’officina ha verificato finora.',
      ],
      [
        'L’auto corrisponde, ma la descrizione è vaga',
        'Chieda dove va montato il pezzo. «Cuscinetto» può indicare un cuscinetto ruota anteriore o posteriore, o un cuscinetto dentro un altro gruppo. Conservi la risposta con quella scheda del veicolo.',
      ],
    ],
    checkVin: 'Controlla il formato di un VIN',
    productNote:
      'Parts Relay trova i ricambi da una targa o da un VIN e tiene ogni ricerca in un’unica coda visibile a tutto il banco.',
    productLink: 'Come funziona Parts Relay',
  },
};
