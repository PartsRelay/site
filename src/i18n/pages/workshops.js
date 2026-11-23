// Workshops directory text in every language. In status, {count} is replaced
// with the number of workshops the filter leaves showing.

export const workshops = {
  en: {
    title: 'Parts Relay workshops | Parts Relay',
    description:
      'Choose a practical worksheet for a service desk enquiry, a distributor callback or the next shift’s handover.',
    heading: 'Parts Relay workshops',
    intro:
      'Bring a repair order, a supplier callback or an unfinished enquiry. Each workshop gives you a worksheet you can keep with the job.',
    chooseTitle: 'Choose a workshop',
    chooser: 'Choose the job you have in front of you. Allow 10 to 15 minutes to work through it.',
    filtersLabel: 'Filter workshops by audience',
    all: 'All',
    roles: { shops: 'Repair shops', distributors: 'Distributors', both: 'Both teams' },
    minutes: 'min',
    sessions: {
      firstRequest: {
        title: 'From repair order to counter',
        text: 'Turn a technician’s diagnosis into a description the distributor can quote. Start with the position and quantity.',
      },
      fitCheck: {
        title: 'Taking down a worn part number',
        text: 'Use a supplier callback to settle a missing character, a connector question or an incomplete reference.',
      },
      handoff: {
        title: 'A handover the next shift can use',
        text: 'Write the note that lets a colleague make the next call without starting the enquiry again.',
      },
    },
    status: { one: '{count} workshop', other: '{count} workshops' },
    aside: {
      title: 'Working with a colleague?',
      text: [
        'Have the person who missed the call read the completed worksheet. Ask which item they would price and which detail they would check first.',
        'If you picture different parts, find the word that caused the mix-up. “Housing” and “complete assembly” can mean different orders at the counter.',
      ],
      link: 'Read the getting-started guide',
    },
    debrief: {
      title: 'Keep the note with the repair',
      text: [
        'When a supplier calls back after a shift change, the repair order is usually easier to find than the person who took the original call. File the worksheet with that order.',
        'Date the latest reply. If the supplier changes the quoted reference, keep the earlier number with a short note explaining which one the shop is now considering.',
      ],
    },
  },
  de: {
    title: 'Parts Relay Workshops | Parts Relay',
    description:
      'Wählen Sie ein praxisnahes Arbeitsblatt für eine Anfrage aus der Serviceannahme, einen Rückruf beim Händler oder die Übergabe an die nächste Schicht.',
    heading: 'Parts Relay Workshops',
    intro:
      'Bringen Sie einen Reparaturauftrag, einen Rückruf vom Lieferanten oder eine offene Anfrage mit. Zu jedem Workshop gibt es ein Arbeitsblatt, das Sie beim Auftrag ablegen können.',
    chooseTitle: 'Workshop auswählen',
    chooser:
      'Wählen Sie die Aufgabe, die gerade vor Ihnen liegt. Planen Sie dafür 10 bis 15 Minuten ein.',
    filtersLabel: 'Workshops nach Zielgruppe filtern',
    all: 'Alle',
    roles: { shops: 'Werkstätten', distributors: 'Händler', both: 'Beide Teams' },
    minutes: 'Min.',
    sessions: {
      firstRequest: {
        title: 'Vom Reparaturauftrag zur Teiletheke',
        text: 'Machen Sie aus der Diagnose des Mechanikers eine Beschreibung, zu der der Händler ein Angebot machen kann. Beginnen Sie mit Einbauposition und Menge.',
      },
      fitCheck: {
        title: 'Eine abgenutzte Teilenummer aufnehmen',
        text: 'Klären Sie bei einem Rückruf vom Lieferanten ein fehlendes Zeichen, eine Frage zum Stecker oder eine unvollständige Referenz.',
      },
      handoff: {
        title: 'Eine Übergabe, mit der die nächste Schicht arbeiten kann',
        text: 'Schreiben Sie die Notiz, mit der ein Kollege den nächsten Anruf führen kann, ohne die Anfrage von vorn zu beginnen.',
      },
    },
    status: { one: '{count} Workshop', other: '{count} Workshops' },
    aside: {
      title: 'Arbeiten Sie mit einem Kollegen?',
      text: [
        'Lassen Sie die Person, die den Anruf verpasst hat, das ausgefüllte Arbeitsblatt lesen. Fragen Sie, welchen Artikel sie anbieten und welches Detail sie zuerst prüfen würde.',
        'Wenn Sie an unterschiedliche Teile denken, suchen Sie das Wort, das die Verwechslung ausgelöst hat. „Gehäuse“ und „komplette Baugruppe“ können an der Teiletheke zwei verschiedene Bestellungen sein.',
      ],
      link: 'Den Einstiegsratgeber lesen',
    },
    debrief: {
      title: 'Die Notiz beim Reparaturauftrag ablegen',
      text: [
        'Ruft ein Lieferant nach einem Schichtwechsel zurück, ist der Reparaturauftrag meist leichter zu finden als die Person, die den ersten Anruf angenommen hat. Legen Sie das Arbeitsblatt zu diesem Auftrag.',
        'Datieren Sie die letzte Antwort. Ändert der Lieferant die angebotene Referenz, behalten Sie die frühere Nummer mit einer kurzen Notiz, welche davon die Werkstatt jetzt in Betracht zieht.',
      ],
    },
  },
  fr: {
    title: 'Ateliers pratiques Parts Relay | Parts Relay',
    description:
      'Choisissez une fiche de travail pratique pour une demande de l’accueil atelier, un rappel du distributeur ou la passation à l’équipe suivante.',
    heading: 'Ateliers pratiques Parts Relay',
    intro:
      'Apportez un ordre de réparation, un rappel fournisseur ou une demande en cours. Chaque atelier pratique vous donne une fiche de travail à garder avec le dossier.',
    chooseTitle: 'Choisir un atelier pratique',
    chooser: 'Choisissez la tâche que vous avez sous les yeux. Comptez 10 à 15 minutes.',
    filtersLabel: 'Filtrer les ateliers pratiques par public',
    all: 'Tous',
    roles: { shops: 'Garages', distributors: 'Distributeurs', both: 'Les deux équipes' },
    minutes: 'min',
    sessions: {
      firstRequest: {
        title: 'De l’ordre de réparation au comptoir',
        text: 'Transformez le diagnostic du technicien en une description que le distributeur peut chiffrer. Commencez par la position et la quantité.',
      },
      fitCheck: {
        title: 'Relever une référence usée',
        text: 'Profitez d’un rappel fournisseur pour régler un caractère manquant, une question de connecteur ou une référence incomplète.',
      },
      handoff: {
        title: 'Une passation utile à l’équipe suivante',
        text: 'Rédigez la note qui permet à un collègue de passer l’appel suivant sans reprendre la demande à zéro.',
      },
    },
    status: { one: '{count} atelier pratique', other: '{count} ateliers pratiques' },
    aside: {
      title: 'Vous travaillez avec un collègue ?',
      text: [
        'Faites lire la fiche remplie à la personne qui a manqué l’appel. Demandez-lui quel article elle chiffrerait et quel détail elle vérifierait en premier.',
        'Si vous n’imaginez pas la même pièce, trouvez le mot à l’origine de la confusion. « Boîtier » et « ensemble complet » peuvent donner deux commandes différentes au comptoir.',
      ],
      link: 'Lire le guide de prise en main',
    },
    debrief: {
      title: 'Gardez la note avec la réparation',
      text: [
        'Quand un fournisseur rappelle après un changement d’équipe, l’ordre de réparation est souvent plus facile à retrouver que la personne qui a pris le premier appel. Classez la fiche avec cet ordre.',
        'Datez la dernière réponse. Si le fournisseur change la référence proposée, conservez l’ancien numéro avec une courte note indiquant celui que le garage envisage désormais.',
      ],
    },
  },
  es: {
    title: 'Prácticas de Parts Relay | Parts Relay',
    description:
      'Elija una hoja de trabajo práctica para una consulta de la recepción del taller, la llamada de vuelta de un distribuidor o el relevo del siguiente turno.',
    heading: 'Prácticas de Parts Relay',
    intro:
      'Traiga una orden de reparación, una llamada de un proveedor o una consulta sin terminar. Cada práctica incluye una hoja de trabajo que puede guardar con el trabajo.',
    chooseTitle: 'Elija una práctica',
    chooser: 'Elija la tarea que tiene delante. Reserve de 10 a 15 minutos para completarla.',
    filtersLabel: 'Filtrar prácticas por destinatario',
    all: 'Todas',
    roles: { shops: 'Talleres', distributors: 'Distribuidores', both: 'Ambos equipos' },
    minutes: 'min',
    sessions: {
      firstRequest: {
        title: 'De la orden de reparación al mostrador',
        text: 'Convierta el diagnóstico del mecánico en una descripción que el distribuidor pueda presupuestar. Empiece por la posición y la cantidad.',
      },
      fitCheck: {
        title: 'Anotar una referencia desgastada',
        text: 'Aproveche la llamada de un proveedor para resolver un carácter que falta, una duda sobre el conector o una referencia incompleta.',
      },
      handoff: {
        title: 'Un relevo que sirva al siguiente turno',
        text: 'Escriba la nota que permita a un compañero hacer la siguiente llamada sin empezar la consulta de nuevo.',
      },
    },
    status: { one: '{count} práctica', other: '{count} prácticas' },
    aside: {
      title: '¿Trabaja con un compañero?',
      text: [
        'Pida a quien no atendió la llamada que lea la hoja completada. Pregúntele qué artículo presupuestaría y qué detalle comprobaría primero.',
        'Si cada uno imagina una pieza distinta, busque la palabra que causó la confusión. «Carcasa» y «conjunto completo» pueden ser pedidos distintos en el mostrador.',
      ],
      link: 'Leer la guía de inicio',
    },
    debrief: {
      title: 'Guarde la nota con la reparación',
      text: [
        'Cuando un proveedor devuelve la llamada después de un cambio de turno, suele ser más fácil encontrar la orden de reparación que a la persona que atendió la primera llamada. Archive la hoja con esa orden.',
        'Ponga fecha a la última respuesta. Si el proveedor cambia la referencia presupuestada, conserve el número anterior con una breve nota que indique cuál está considerando ahora el taller.',
      ],
    },
  },
  it: {
    title: 'Esercitazioni Parts Relay | Parts Relay',
    description:
      'Scelga una scheda di lavoro pratica per una richiesta dall’accettazione, una richiamata del distributore o il passaggio di consegne al turno successivo.',
    heading: 'Esercitazioni Parts Relay',
    intro:
      'Porti un ordine di riparazione, una richiamata del fornitore o una richiesta in sospeso. Ogni esercitazione include una scheda di lavoro da conservare con la pratica.',
    chooseTitle: 'Scelga un’esercitazione',
    chooser: 'Scelga il lavoro che ha davanti. Calcoli dai 10 ai 15 minuti.',
    filtersLabel: 'Filtra le esercitazioni per destinatari',
    all: 'Tutte',
    roles: { shops: 'Officine', distributors: 'Distributori', both: 'Entrambi i team' },
    minutes: 'min',
    sessions: {
      firstRequest: {
        title: 'Dall’ordine di riparazione al banco',
        text: 'Trasformi la diagnosi del meccanico in una descrizione su cui il distributore possa fare un preventivo. Parta da posizione e quantità.',
      },
      fitCheck: {
        title: 'Rilevare un codice consumato',
        text: 'Sfrutti la richiamata di un fornitore per chiarire un carattere mancante, un dubbio sul connettore o un codice incompleto.',
      },
      handoff: {
        title: 'Un passaggio di consegne utile al turno successivo',
        text: 'Scriva la nota che permette a un collega di fare la telefonata successiva senza ricominciare la richiesta da capo.',
      },
    },
    status: { one: '{count} esercitazione', other: '{count} esercitazioni' },
    aside: {
      title: 'Lavora con un collega?',
      text: [
        'Faccia leggere la scheda compilata a chi ha perso la telefonata. Chieda quale articolo metterebbe a preventivo e quale dettaglio controllerebbe per primo.',
        'Se pensate a pezzi diversi, cercate la parola che ha creato l’equivoco. «Alloggiamento» e «gruppo completo» possono voler dire ordini diversi al banco.',
      ],
      link: 'Legga la guida introduttiva',
    },
    debrief: {
      title: 'Tenga la nota con la riparazione',
      text: [
        'Quando un fornitore richiama dopo un cambio turno, di solito è più facile trovare l’ordine di riparazione che la persona che ha preso la prima telefonata. Archivi la scheda con quell’ordine.',
        'Annoti la data dell’ultima risposta. Se il fornitore cambia il codice a preventivo, conservi il numero precedente con una breve nota che indichi quale sta valutando ora l’officina.',
      ],
    },
  },
};
