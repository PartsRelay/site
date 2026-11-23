// Counter guide text in every language. The checklist steps and the step count
// are passed to the page script, which shows them one at a time.
// {n} and {total} in count are replaced with the step number and the number of steps.

export const counter = {
  en: {
    title: 'The headlamp still works. Its mounting tab is broken. | Parts Relay',
    description:
      'Use a headlamp checklist to distinguish a failed bulb, a damaged bracket and a complete housing before requesting a replacement.',
    tag: 'At the counter',
    heading: 'The headlamp still works. Its mounting tab is broken.',
    dek: '“Left headlamp” on a repair order could mean a bulb, a bracket or a complete assembly. When the lamp still lights but the housing moves, start with the mounting point.',
    facts: [
      ['Assembly', 'Left headlamp'],
      ['Damage', 'Broken mounting tab'],
      ['Electrical check', 'Bulb still lights'],
    ],
    photoAlt:
      'An adviser points to the broken mounting tab on a headlamp while a parts specialist steadies the housing.',
    openChecklist: 'Open the headlamp checklist',
    checklistLabel: 'Headlamp checklist',
    closeChecklist: 'Close checklist',
    previousCheck: 'Previous check',
    nextCheck: 'Next check',
    count: '{n} / {total}',
    checks: [
      {
        topic: 'Damage',
        text: 'Identify the broken mounting tab. Check whether the catalogue lists a bracket repair kit for that housing.',
      },
      {
        topic: 'Lamp version',
        text: 'Read the reference on the lamp and note which characters are unclear. Check it against the lighting equipment fitted to the vehicle.',
      },
      {
        topic: 'What comes in the box',
        text: 'Ask whether the bulb, control unit and mounting hardware are supplied with the housing or transferred from the original.',
      },
    ],
    lede: 'Call the distributor with two details from the bay. Describe what the lamp still does and where it has broken. Those details help the counter decide which parts drawing to open.',
    before: [
      [
        'A loose housing',
        'Record which fixing has failed. The parts catalogue may list a bracket repair kit for that version of the lamp. Check the repair procedure for the vehicle before deciding that the entire housing needs replacing.',
      ],
      [
        'Which listing to open?',
        'If the repair calls for the complete housing, say so on the enquiry. Ask the counter to identify the assembly for the left side and confirm which components the technician can transfer.',
      ],
    ],
    quote: 'Which characters on the lamp label can the technician read?',
    quoteNote: 'Ask before quoting a replacement housing.',
    labelTitle: 'Reading the label',
    labelText: [
      'A model may have several lighting packages. Read the manufacturer’s number directly from the lamp. Where the label is scuffed, leave a gap and tell the counter which end of the number is missing.',
      'The counter can use those characters to narrow the search. A complete label reading or the corresponding equipment detail is still needed to identify the replacement.',
    ],
    estimateTitle: 'The estimate stays open',
    estimateText:
      'Once the reference is clear, the distributor can say which housing it covers and what comes with it. Until then the adviser has a job to follow up, but no part number or delivery date to put on the estimate.',
    recordTitle: 'Shift note for the headlamp job',
    record: [
      ['Confirmed by the shop', 'Complete left housing requested. Bulb checked and working.'],
      [
        'Still open',
        'Unreadable suffix on the original lamp. Check the lighting package and the contents of the replacement assembly.',
      ],
      [
        'Next action',
        'Workshop to confirm the suffix or equipment fitted. Distributor to compare it with the catalogue.',
      ],
      [
        'Before quoting',
        'Ask the supplier for its price and lead time once the counter has the right entry.',
      ],
    ],
    nextTitle: 'Write the note for the next shift',
    nextText:
      'The handoff workshop includes a worksheet for recording what the shop confirmed and who owes the next call.',
    intake: 'Shop intake guide',
    ctaTitle: 'Ask about a headlamp',
    ctaText:
      'Copy the original lamp number into your enquiry. If part of it is unreadable, mark where the lettering wears off.',
    ctaVin: 'Check the vehicle identifier',
  },
  de: {
    title: 'Der Scheinwerfer funktioniert. Die Befestigungslasche ist gebrochen. | Parts Relay',
    description:
      'Unterscheiden Sie mit einer Scheinwerfer-Checkliste eine defekte Lampe, einen beschädigten Halter und ein komplettes Gehäuse, bevor Sie Ersatz anfragen.',
    tag: 'An der Theke',
    heading: 'Der Scheinwerfer funktioniert. Die Befestigungslasche ist gebrochen.',
    dek: '„Scheinwerfer links“ auf einem Reparaturauftrag kann eine Lampe, einen Halter oder eine komplette Baugruppe bedeuten. Leuchtet der Scheinwerfer noch, aber das Gehäuse wackelt, beginnen Sie mit der Befestigung.',
    facts: [
      ['Baugruppe', 'Scheinwerfer links'],
      ['Schaden', 'Befestigungslasche gebrochen'],
      ['Elektrikprüfung', 'Lampe leuchtet noch'],
    ],
    photoAlt:
      'Ein Serviceberater zeigt auf die gebrochene Befestigungslasche eines Scheinwerfers, während ein Teilespezialist das Gehäuse festhält.',
    openChecklist: 'Scheinwerfer-Checkliste öffnen',
    checklistLabel: 'Scheinwerfer-Checkliste',
    closeChecklist: 'Checkliste schließen',
    previousCheck: 'Vorheriger Punkt',
    nextCheck: 'Nächster Punkt',
    count: '{n} / {total}',
    checks: [
      {
        topic: 'Schaden',
        text: 'Bestimmen Sie die gebrochene Befestigungslasche. Prüfen Sie, ob der Katalog für dieses Gehäuse einen Reparatursatz für den Halter führt.',
      },
      {
        topic: 'Scheinwerferausführung',
        text: 'Lesen Sie die Nummer am Scheinwerfer ab und notieren Sie, welche Zeichen unklar sind. Gleichen Sie sie mit der Lichtausstattung des Fahrzeugs ab.',
      },
      {
        topic: 'Lieferumfang',
        text: 'Fragen Sie, ob Lampe, Steuergerät und Befestigungsteile mit dem Gehäuse geliefert oder vom alten Teil übernommen werden.',
      },
    ],
    lede: 'Rufen Sie den Händler mit zwei Angaben aus der Werkstatt an: was der Scheinwerfer noch tut und wo er gebrochen ist. Damit kann die Theke entscheiden, welche Teilezeichnung sie öffnet.',
    before: [
      [
        'Ein lockeres Gehäuse',
        'Notieren Sie, welche Befestigung versagt hat. Der Teilekatalog führt für diese Scheinwerferausführung womöglich einen Reparatursatz für den Halter. Prüfen Sie die Reparaturanleitung des Fahrzeugs, bevor Sie entscheiden, dass das ganze Gehäuse ersetzt werden muss.',
      ],
      [
        'Welchen Eintrag öffnen?',
        'Muss das komplette Gehäuse getauscht werden, schreiben Sie das in die Anfrage. Bitten Sie die Theke, die Baugruppe für die linke Seite zu bestimmen und zu bestätigen, welche Teile der Mechaniker übernehmen kann.',
      ],
    ],
    quote: 'Welche Zeichen auf dem Scheinwerferetikett kann der Mechaniker lesen?',
    quoteNote: 'Fragen Sie das, bevor Sie ein Ersatzgehäuse anbieten.',
    labelTitle: 'Das Etikett lesen',
    labelText: [
      'Ein Modell kann mehrere Lichtpakete haben. Lesen Sie die Herstellernummer direkt am Scheinwerfer ab. Ist das Etikett zerkratzt, lassen Sie eine Lücke und sagen Sie der Theke, an welchem Ende der Nummer Zeichen fehlen.',
      'Mit diesen Zeichen kann die Theke die Suche eingrenzen. Um das Ersatzteil zu bestimmen, braucht sie trotzdem die vollständige Nummer vom Etikett oder die passende Ausstattungsangabe.',
    ],
    estimateTitle: 'Der Kostenvoranschlag bleibt offen',
    estimateText:
      'Sobald die Nummer klar ist, kann der Händler sagen, welches Gehäuse sie abdeckt und was mitgeliefert wird. Bis dahin hat der Serviceberater einen offenen Vorgang, aber weder Teilenummer noch Liefertermin für den Kostenvoranschlag.',
    recordTitle: 'Schichtnotiz zum Scheinwerfer-Auftrag',
    record: [
      [
        'Von der Werkstatt bestätigt',
        'Komplettes Gehäuse links angefragt. Lampe geprüft und funktionsfähig.',
      ],
      [
        'Noch offen',
        'Unlesbare Endung am alten Scheinwerfer. Lichtpaket und Lieferumfang der Ersatzbaugruppe prüfen.',
      ],
      [
        'Nächster Schritt',
        'Werkstatt bestätigt Endung oder Ausstattung. Händler gleicht sie mit dem Katalog ab.',
      ],
      [
        'Vor dem Angebot',
        'Beim Lieferanten Preis und Lieferzeit erfragen, sobald die Theke den richtigen Eintrag hat.',
      ],
    ],
    nextTitle: 'Die Notiz für die nächste Schicht schreiben',
    nextText:
      'Der Übergabe-Workshop enthält ein Arbeitsblatt, auf dem Sie festhalten, was die Werkstatt bestätigt hat und wer als Nächstes anruft.',
    intake: 'Ratgeber Annahme',
    ctaTitle: 'Nach einem Scheinwerfer fragen',
    ctaText:
      'Übernehmen Sie die Nummer des alten Scheinwerfers in Ihre Anfrage. Ist ein Teil davon unlesbar, markieren Sie, wo die Schrift abbricht.',
    ctaVin: 'Fahrzeug-Identnummer prüfen',
  },
  fr: {
    title: 'Le phare fonctionne. Sa patte de fixation est cassée. | Parts Relay',
    description:
      'Une liste de contrôle pour distinguer une ampoule grillée, un support endommagé et un bloc optique complet avant de demander une pièce de remplacement.',
    tag: 'Au comptoir',
    heading: 'Le phare fonctionne. Sa patte de fixation est cassée.',
    dek: '« Phare gauche » sur un ordre de réparation peut désigner une ampoule, un support ou un bloc complet. Si le phare s’allume encore mais que le boîtier bouge, commencez par la fixation.',
    facts: [
      ['Ensemble', 'Phare gauche'],
      ['Dommage', 'Patte de fixation cassée'],
      ['Contrôle électrique', 'L’ampoule s’allume'],
    ],
    photoAlt:
      'Un réceptionnaire montre la patte de fixation cassée d’un phare pendant qu’un vendeur pièces maintient le boîtier.',
    openChecklist: 'Ouvrir la liste de contrôle du phare',
    checklistLabel: 'Liste de contrôle du phare',
    closeChecklist: 'Fermer la liste',
    previousCheck: 'Point précédent',
    nextCheck: 'Point suivant',
    count: '{n} / {total}',
    checks: [
      {
        topic: 'Dommage',
        text: 'Repérez la patte de fixation cassée. Vérifiez si le catalogue propose un kit de réparation de support pour ce boîtier.',
      },
      {
        topic: 'Version du phare',
        text: 'Relevez la référence sur le phare et notez les caractères illisibles. Comparez-la à l’équipement d’éclairage monté sur le véhicule.',
      },
      {
        topic: 'Contenu de la boîte',
        text: 'Demandez si l’ampoule, le boîtier de commande et la visserie sont fournis avec le bloc ou repris sur l’ancien.',
      },
    ],
    lede: 'Appelez le distributeur avec deux informations de l’atelier : ce que le phare fait encore et où il est cassé. Elles aident le comptoir à choisir quelle vue éclatée ouvrir.',
    before: [
      [
        'Un boîtier qui bouge',
        'Notez quelle fixation a lâché. Le catalogue peut proposer un kit de réparation de support pour cette version du phare. Consultez la méthode de réparation du véhicule avant de conclure qu’il faut remplacer tout le bloc.',
      ],
      [
        'Quelle fiche ouvrir ?',
        'Si la réparation exige le bloc complet, indiquez-le dans la demande. Demandez au comptoir d’identifier l’ensemble côté gauche et de confirmer quels éléments le technicien peut reprendre.',
      ],
    ],
    quote: 'Quels caractères de l’étiquette du phare le technicien peut-il lire ?',
    quoteNote: 'Posez la question avant de chiffrer un bloc de remplacement.',
    labelTitle: 'Lire l’étiquette',
    labelText: [
      'Un même modèle peut avoir plusieurs niveaux d’éclairage. Relevez la référence du fabricant directement sur le phare. Si l’étiquette est abîmée, laissez un blanc et indiquez au comptoir quelle extrémité de la référence manque.',
      'Le comptoir peut s’appuyer sur ces caractères pour affiner la recherche. Il faut tout de même la référence complète ou l’équipement correspondant pour identifier la pièce de remplacement.',
    ],
    estimateTitle: 'Le devis reste en attente',
    estimateText:
      'Une fois la référence claire, le distributeur peut dire quel bloc elle couvre et ce qui est fourni avec. D’ici là, le réceptionnaire a un dossier à suivre, mais ni référence ni date de livraison à porter sur le devis.',
    recordTitle: 'Note de relève pour le phare',
    record: [
      [
        'Confirmé par le garage',
        'Bloc gauche complet demandé. Ampoule contrôlée, elle fonctionne.',
      ],
      [
        'Encore en suspens',
        'Suffixe illisible sur le phare d’origine. Vérifier le niveau d’éclairage et le contenu du bloc de remplacement.',
      ],
      [
        'Prochaine action',
        'Le garage confirme le suffixe ou l’équipement monté. Le distributeur le compare au catalogue.',
      ],
      [
        'Avant le devis',
        'Demander au fournisseur son prix et son délai une fois que le comptoir a la bonne fiche.',
      ],
    ],
    nextTitle: 'Rédiger la note pour l’équipe suivante',
    nextText:
      'L’atelier pratique sur la relève comprend une fiche pour noter ce que le garage a confirmé et qui doit passer le prochain appel.',
    intake: 'Guide de réception',
    ctaTitle: 'Demander un phare',
    ctaText:
      'Recopiez la référence du phare d’origine dans votre demande. Si une partie est illisible, indiquez où les caractères s’effacent.',
    ctaVin: 'Vérifier l’identifiant du véhicule',
  },
  es: {
    title: 'El faro funciona. La pestaña de fijación está rota. | Parts Relay',
    description:
      'Use una lista de comprobación para distinguir una lámpara fundida, un soporte dañado y un faro completo antes de pedir el recambio.',
    tag: 'En el mostrador',
    heading: 'El faro funciona. La pestaña de fijación está rota.',
    dek: '«Faro izquierdo» en una orden de reparación puede ser una lámpara, un soporte o un conjunto completo. Si el faro sigue encendiendo pero la carcasa se mueve, empiece por la fijación.',
    facts: [
      ['Conjunto', 'Faro izquierdo'],
      ['Daño', 'Pestaña de fijación rota'],
      ['Prueba eléctrica', 'La lámpara enciende'],
    ],
    photoAlt:
      'Un asesor señala la pestaña de fijación rota de un faro mientras un especialista en recambios sujeta la carcasa.',
    openChecklist: 'Abrir la lista de comprobación del faro',
    checklistLabel: 'Lista de comprobación del faro',
    closeChecklist: 'Cerrar la lista',
    previousCheck: 'Punto anterior',
    nextCheck: 'Punto siguiente',
    count: '{n} / {total}',
    checks: [
      {
        topic: 'Daño',
        text: 'Identifique la pestaña de fijación rota. Compruebe si el catálogo ofrece un kit de reparación de soportes para esa carcasa.',
      },
      {
        topic: 'Versión del faro',
        text: 'Lea la referencia del faro y anote qué caracteres no se distinguen. Compárela con el equipamiento de iluminación del vehículo.',
      },
      {
        topic: 'Qué incluye la caja',
        text: 'Pregunte si la lámpara, la centralita y la tornillería vienen con la carcasa o se pasan desde el faro original.',
      },
    ],
    lede: 'Llame al distribuidor con dos datos del taller: qué hace todavía el faro y por dónde se ha roto. Con eso el mostrador sabe qué despiece abrir.',
    before: [
      [
        'Una carcasa suelta',
        'Anote qué fijación ha fallado. El catálogo puede ofrecer un kit de reparación de soportes para esa versión del faro. Consulte el procedimiento de reparación del vehículo antes de decidir que hay que cambiar toda la carcasa.',
      ],
      [
        '¿Qué ficha abrir?',
        'Si la reparación requiere la carcasa completa, indíquelo en la consulta. Pida al mostrador que identifique el conjunto del lado izquierdo y que confirme qué componentes puede pasar el técnico.',
      ],
    ],
    quote: '¿Qué caracteres de la etiqueta del faro puede leer el técnico?',
    quoteNote: 'Pregúntelo antes de presupuestar una carcasa nueva.',
    labelTitle: 'Leer la etiqueta',
    labelText: [
      'Un mismo modelo puede tener varios paquetes de iluminación. Lea la referencia del fabricante directamente en el faro. Si la etiqueta está rayada, deje un hueco e indique al mostrador por qué extremo falta la referencia.',
      'El mostrador puede usar esos caracteres para acotar la búsqueda. Aun así, para identificar el recambio hace falta la etiqueta completa o el dato de equipamiento correspondiente.',
    ],
    estimateTitle: 'El presupuesto sigue abierto',
    estimateText:
      'Cuando la referencia esté clara, el distribuidor podrá decir qué carcasa cubre y qué incluye. Hasta entonces, el asesor tiene un trabajo pendiente, pero ni referencia ni fecha de entrega para el presupuesto.',
    recordTitle: 'Nota de turno del trabajo del faro',
    record: [
      [
        'Confirmado por el taller',
        'Se pide la carcasa izquierda completa. Lámpara comprobada y funcionando.',
      ],
      [
        'Pendiente',
        'Sufijo ilegible en el faro original. Comprobar el paquete de iluminación y el contenido del conjunto de recambio.',
      ],
      [
        'Siguiente paso',
        'El taller confirma el sufijo o el equipamiento. El distribuidor lo compara con el catálogo.',
      ],
      [
        'Antes de presupuestar',
        'Pedir al proveedor precio y plazo de entrega cuando el mostrador tenga la ficha correcta.',
      ],
    ],
    nextTitle: 'Escriba la nota para el siguiente turno',
    nextText:
      'La práctica de traspaso incluye una hoja de trabajo para anotar lo que ha confirmado el taller y a quién le toca la próxima llamada.',
    intake: 'Guía de recepción',
    ctaTitle: 'Consulte por un faro',
    ctaText:
      'Copie la referencia del faro original en su consulta. Si una parte no se lee, marque dónde se borran los caracteres.',
    ctaVin: 'Comprobar el identificador del vehículo',
  },
  it: {
    title: 'Il faro funziona. La linguetta di fissaggio è rotta. | Parts Relay',
    description:
      'Usi una checklist per distinguere una lampadina bruciata, una staffa danneggiata e un faro completo prima di chiedere il ricambio.',
    tag: 'Al banco',
    heading: 'Il faro funziona. La linguetta di fissaggio è rotta.',
    dek: '«Faro sinistro» su un ordine di riparazione può voler dire una lampadina, una staffa o un gruppo completo. Se il faro si accende ma il corpo si muove, parta dal punto di fissaggio.',
    facts: [
      ['Gruppo', 'Faro sinistro'],
      ['Danno', 'Linguetta di fissaggio rotta'],
      ['Controllo elettrico', 'La lampadina si accende'],
    ],
    photoAlt:
      'Un accettatore indica la linguetta di fissaggio rotta di un faro mentre un addetto ricambi tiene fermo il corpo.',
    openChecklist: 'Apri la checklist del faro',
    checklistLabel: 'Checklist del faro',
    closeChecklist: 'Chiudi la checklist',
    previousCheck: 'Punto precedente',
    nextCheck: 'Punto successivo',
    count: '{n} / {total}',
    checks: [
      {
        topic: 'Danno',
        text: 'Individui la linguetta di fissaggio rotta. Verifichi se il catalogo prevede un kit di riparazione staffe per quel corpo faro.',
      },
      {
        topic: 'Versione del faro',
        text: 'Legga il codice sul faro e annoti quali caratteri non sono chiari. Lo confronti con l’equipaggiamento luci montato sul veicolo.',
      },
      {
        topic: 'Cosa c’è nella confezione',
        text: 'Chieda se lampadina, centralina e minuteria di fissaggio sono fornite con il corpo faro o vanno recuperate dall’originale.',
      },
    ],
    lede: 'Chiami il distributore con due dati dall’officina: cosa fa ancora il faro e dove si è rotto. Aiutano il banco a scegliere quale esploso aprire.',
    before: [
      [
        'Un corpo faro allentato',
        'Annoti quale fissaggio ha ceduto. Il catalogo ricambi potrebbe prevedere un kit di riparazione staffe per quella versione del faro. Controlli la procedura di riparazione del veicolo prima di decidere che va sostituito tutto il corpo.',
      ],
      [
        'Quale voce aprire?',
        'Se la riparazione richiede il corpo faro completo, lo scriva nella richiesta. Chieda al banco di identificare il gruppo per il lato sinistro e di confermare quali componenti il tecnico può recuperare.',
      ],
    ],
    quote: 'Quali caratteri dell’etichetta del faro riesce a leggere il tecnico?',
    quoteNote: 'Lo chieda prima di quotare un corpo faro nuovo.',
    labelTitle: 'Leggere l’etichetta',
    labelText: [
      'Un modello può avere diversi pacchetti luci. Legga il codice del costruttore direttamente sul faro. Se l’etichetta è rovinata, lasci uno spazio e dica al banco da quale lato del codice mancano i caratteri.',
      'Il banco può usare quei caratteri per restringere la ricerca. Per identificare il ricambio serve comunque l’etichetta completa o il dato di equipaggiamento corrispondente.',
    ],
    estimateTitle: 'Il preventivo resta aperto',
    estimateText:
      'Quando il codice è chiaro, il distributore può dire a quale corpo faro corrisponde e cosa include. Fino ad allora l’accettatore ha un lavoro da seguire, ma né codice né data di consegna da mettere nel preventivo.',
    recordTitle: 'Nota di turno per il lavoro sul faro',
    record: [
      [
        'Confermato dall’officina',
        'Richiesto corpo faro sinistro completo. Lampadina controllata e funzionante.',
      ],
      [
        'Ancora aperto',
        'Suffisso illeggibile sul faro originale. Verificare il pacchetto luci e il contenuto del gruppo di ricambio.',
      ],
      [
        'Prossima azione',
        'L’officina conferma il suffisso o l’equipaggiamento montato. Il distributore lo confronta con il catalogo.',
      ],
      [
        'Prima del preventivo',
        'Chiedere al fornitore prezzo e tempi di consegna quando il banco ha la voce giusta.',
      ],
    ],
    nextTitle: 'Scriva la nota per il turno successivo',
    nextText:
      'L’esercitazione sul passaggio di consegne include una scheda per annotare cosa ha confermato l’officina e a chi tocca la prossima chiamata.',
    intake: 'Guida all’accettazione',
    ctaTitle: 'Chieda un faro',
    ctaText:
      'Copi il codice del faro originale nella richiesta. Se una parte è illeggibile, segni dove i caratteri si cancellano.',
    ctaVin: 'Controlla l’identificativo del veicolo',
  },
};
