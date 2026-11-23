// Distributors page text in every language. Status names from the Parts Relay app
// (Searching, Vehicle not found) stay in English because the app is in English.
// {part} is replaced with a question's part and {count} with the number of part checks shown.
// Filter keys (All, Brakes, ...) match the data-team-category values and are not translated.

export const distributors = {
  en: {
    title: 'Parts Relay for distributors | Parts enquiry software for the counter',
    description:
      'Parts enquiry software for the distributor counter. Search by plate or VIN, pick up workshop requests from WhatsApp and hand open questions to the next shift.',
    label: 'For distributors',
    heading: 'Parts Relay for distributors',
    heroNote:
      'When a workshop rings back, pull up its original enquiry. You can see what it asked for, who ran the search and where the last person got to.',
    talk: 'Talk to our team',
    byPart: 'Questions by part',
    overview: {
      label: 'Returning a call',
      title: 'When two entries look right',
      text: 'The vehicle record can still leave you with a choice of alternators. Ask the shop to read the rating or number on the old unit. If those match both entries, check which connector the technician can see.',
      steps: [
        [
          'What did they ask for?',
          'Check whether the shop wants a single piece, an axle set or a complete assembly. The original wording is useful here.',
        ],
        [
          'What would settle it?',
          'Ask for the one feature that separates the catalogue entries. Keep the answer with this enquiry for the next person on shift.',
        ],
        [
          'What can the branch supply?',
          'Confirm the quantity and note when the branch checked stock before offering a collection or delivery time.',
        ],
      ],
    },
    slider: {
      label: 'Questions to ask the workshop',
      ask: 'Ask the workshop about the {part}',
      questions: [
        { part: 'alternator', text: 'Which output rating is stamped on the old alternator?' },
        {
          part: 'door mirror',
          text: 'Does the shop need the heated glass, or is the left mirror housing damaged too?',
        },
        {
          part: 'brake pads',
          text: 'Can the technician see a wear-sensor lead on the front pads?',
        },
      ],
      show: ['Show alternator question', 'Show door mirror question', 'Show brake pads question'],
      pause: 'Pause rotating questions',
      play: 'Play rotating questions',
    },
    reference: {
      label: 'Reference desk',
      title: 'Where to look next',
      links: [
        [
          'Vehicle identification',
          'Look into a discrepancy between the car and the returned vehicle record.',
        ],
        [
          'Part descriptions',
          'Distinguish a single component from a kit in the shop’s description.',
        ],
        [
          'Assembly diagrams',
          'Find the piece a callout points to, including the fittings around it.',
        ],
      ],
    },
    directory: {
      label: 'Parts reference',
      filtersLabel: 'Filter by part category',
      filters: {
        All: 'All',
        Brakes: 'Brakes',
        Electrical: 'Electrical',
        Body: 'Body',
        Cooling: 'Cooling',
      },
      gridLabel: 'Part checks',
      count: '{count} part checks shown.',
      parts: [
        [
          'Front pad set',
          'Which clips and sensors are in the quoted set? Name anything the shop needs to buy separately.',
        ],
        [
          'Alternator',
          'Look for the rating and the manufacturer’s number on the old alternator. If two units still fit the description, check the plug.',
        ],
        [
          'Left mirror glass',
          'Check the shape of the left glass and the terminals for the heater. Does the shop need a backing plate too?',
        ],
        [
          'Radiator',
          'Where do the hoses meet the radiator? Compare the outlets and mounts with the cooling package listed for the car.',
        ],
        [
          'Starter motor',
          'Read the number on the starter back against the catalogue entry for that engine and transmission.',
        ],
        [
          'Headlamp assembly',
          'Use the label to check the side and lighting package. Tell the shop if it needs to transfer or order a bulb or control module.',
        ],
        [
          'Coolant hose',
          'Trace the hose from one connection to the other on the drawing. Check the branches and end fittings before quoting it.',
        ],
        [
          'Rear caliper',
          'Match the caliper to the side and parking-brake mechanism on the rear axle. Read the supplier’s description for the carrier.',
        ],
      ],
    },
    queue: {
      label: 'Search queue',
      title: 'Finding a job your colleague started',
      text: [
        'Filter the search queue by requester, status, period or channel, or look up the plate or VIN. The same queue holds searches from the counter and from the company’s WhatsApp contacts, newest first. Open one to see the vehicle and the parts your colleague found.',
        'The owner manages the company and the team. Admins manage WhatsApp contacts and can invite viewers. Viewers run searches and see contacts. Ask an owner or admin if a workshop needs access.',
      ],
      recordTitle: 'What to do with an unfinished search',
      statuses: [
        [
          'Searching',
          'The result shows as soon as it is ready, with no need to reload. You can leave the page and the search keeps going.',
        ],
        [
          'Vehicle not found',
          'The catalogue does not know this plate or VIN. Read it back to the workshop and search again.',
        ],
        [
          'No category matched',
          'The vehicle was identified, but no part category matched the request. Try a more specific part name or its position.',
        ],
        [
          'Done',
          'Review the original parts and any aftermarket matches. The supplier still has to confirm what is available.',
        ],
        ['Failed', 'The catalogue could not complete the search. Search again in a moment.'],
      ],
    },
    reply: {
      label: 'Replying to the adviser',
      title: 'When the kit description leaves something out',
      text: [
        'A shop needs a front pad set and a wear sensor. The listing mentions the pads and fittings but says nothing about the sensor. You can tell the adviser what you found while the supplier checks the pack.',
        'For a stock update, give the branch and quantity as well as the time of the check. That gives the adviser a basis for arranging collection.',
      ],
      recordTitle: 'One way to answer the call',
      record: [
        [
          'What you know',
          '“I’ve found the front set. The supplier lists the pads and the fittings.”',
        ],
        [
          'What you still need',
          '“There’s no mention of a sensor. I’ll ask whether to price one separately.”',
        ],
        [
          'Who calls back',
          'The counter checks the kit contents and available quantity with the supplier, then gives the adviser a total.',
        ],
      ],
    },
    steps: {
      label: 'Working through a request',
      title: 'From the first call to the return call',
      items: [
        [
          'Read the enquiry',
          'Receive',
          'Open the search under the name of the person who sent it.',
        ],
        [
          'Check the details',
          'Identify',
          'Read the vehicle description beside the supplied registration.',
        ],
        [
          'Ask the shop',
          'Clarify',
          'Two entries still fit? Find the marking the technician would need to read.',
        ],
        [
          'Explain the match',
          'Reply',
          'Tell the adviser which reference you can quote and which questions are open.',
        ],
      ],
    },
  },
  de: {
    title: 'Parts Relay für Händler | Software für Teileanfragen an der Theke',
    description:
      'Software für Teileanfragen an der Händlertheke. Suchen Sie über Kennzeichen oder FIN, übernehmen Sie Werkstattanfragen aus WhatsApp und geben Sie offene Fragen an die nächste Schicht weiter.',
    label: 'Für Händler',
    heading: 'Parts Relay für Händler',
    heroNote:
      'Ruft eine Werkstatt zurück, öffnen Sie ihre ursprüngliche Anfrage. Sie sehen, was angefragt wurde, wer gesucht hat und wie weit die letzte Person gekommen ist.',
    talk: 'Mit unserem Team sprechen',
    byPart: 'Fragen nach Teil',
    overview: {
      label: 'Rückruf',
      title: 'Wenn zwei Einträge passen',
      text: 'Auch mit den Fahrzeugdaten können noch mehrere Lichtmaschinen infrage kommen. Bitten Sie die Werkstatt, Leistungsangabe oder Nummer am Altteil abzulesen. Passen diese zu beiden Einträgen, klären Sie, welchen Stecker der Mechaniker sieht.',
      steps: [
        [
          'Was wurde angefragt?',
          'Klären Sie, ob die Werkstatt ein Einzelteil, einen Achssatz oder eine komplette Baugruppe möchte. Der ursprüngliche Wortlaut hilft dabei.',
        ],
        [
          'Was würde es klären?',
          'Fragen Sie nach dem einen Merkmal, das die Katalogeinträge unterscheidet. Halten Sie die Antwort bei dieser Anfrage fest, für die nächste Person in der Schicht.',
        ],
        [
          'Was kann die Filiale liefern?',
          'Bestätigen Sie die Menge und notieren Sie, wann die Filiale den Bestand geprüft hat, bevor Sie eine Abhol- oder Lieferzeit nennen.',
        ],
      ],
    },
    slider: {
      label: 'Fragen an die Werkstatt',
      ask: 'Fragen Sie die Werkstatt nach {part}',
      questions: [
        {
          part: 'der Lichtmaschine',
          text: 'Welche Leistung ist auf der alten Lichtmaschine eingeprägt?',
        },
        {
          part: 'dem Außenspiegel',
          text: 'Braucht die Werkstatt das beheizte Glas, oder ist auch das linke Spiegelgehäuse beschädigt?',
        },
        {
          part: 'den Bremsbelägen',
          text: 'Sieht der Mechaniker an den vorderen Belägen ein Kabel für den Verschleißsensor?',
        },
      ],
      show: [
        'Frage zur Lichtmaschine anzeigen',
        'Frage zum Außenspiegel anzeigen',
        'Frage zu den Bremsbelägen anzeigen',
      ],
      pause: 'Wechselnde Fragen anhalten',
      play: 'Wechselnde Fragen abspielen',
    },
    reference: {
      label: 'Nachschlagen',
      title: 'Wo Sie weitersuchen',
      links: [
        [
          'Fahrzeugidentifizierung',
          'Einer Abweichung zwischen Auto und gefundenem Fahrzeugdatensatz nachgehen.',
        ],
        [
          'Teilebeschreibungen',
          'In der Beschreibung der Werkstatt ein Einzelteil von einem Satz unterscheiden.',
        ],
        [
          'Explosionszeichnungen',
          'Das Teil finden, auf das eine Positionsnummer zeigt, samt Befestigungsteilen.',
        ],
      ],
    },
    directory: {
      label: 'Teileübersicht',
      filtersLabel: 'Nach Teilekategorie filtern',
      filters: {
        All: 'Alle',
        Brakes: 'Bremsen',
        Electrical: 'Elektrik',
        Body: 'Karosserie',
        Cooling: 'Kühlung',
      },
      gridLabel: 'Teileprüfungen',
      count: '{count} Teileprüfungen angezeigt.',
      parts: [
        [
          'Bremsbeläge vorn',
          'Welche Klammern und Sensoren sind im angebotenen Satz enthalten? Nennen Sie alles, was die Werkstatt separat kaufen muss.',
        ],
        [
          'Lichtmaschine',
          'Suchen Sie Leistungsangabe und Herstellernummer auf der alten Lichtmaschine. Passen danach noch zwei Geräte, prüfen Sie den Stecker.',
        ],
        [
          'Spiegelglas links',
          'Prüfen Sie die Form des linken Glases und die Anschlüsse der Heizung. Braucht die Werkstatt auch eine Trägerplatte?',
        ],
        [
          'Kühler',
          'Wo treffen die Schläuche auf den Kühler? Vergleichen Sie Anschlüsse und Halter mit der Kühlausstattung des Fahrzeugs.',
        ],
        [
          'Anlasser',
          'Gleichen Sie die Nummer auf der Rückseite des Anlassers mit dem Katalogeintrag für diesen Motor und dieses Getriebe ab.',
        ],
        [
          'Scheinwerfer',
          'Prüfen Sie anhand des Etiketts Seite und Lichtausstattung. Sagen Sie der Werkstatt, ob sie ein Leuchtmittel oder Steuergerät umbauen oder bestellen muss.',
        ],
        [
          'Kühlmittelschlauch',
          'Verfolgen Sie den Schlauch auf der Zeichnung von einem Anschluss zum anderen. Prüfen Sie Abzweige und Endstücke, bevor Sie ihn anbieten.',
        ],
        [
          'Bremssattel hinten',
          'Ordnen Sie den Sattel der Seite und der Feststellbremse an der Hinterachse zu. Lesen Sie die Lieferantenbeschreibung zum Bremsträger.',
        ],
      ],
    },
    queue: {
      label: 'Suchliste',
      title: 'Eine Suche fortsetzen, die ein Kollege begonnen hat',
      text: [
        'Filtern Sie die Suchliste nach anfragender Person, Status, Zeitraum oder Kanal, oder suchen Sie nach Kennzeichen oder FIN. Dieselbe Liste enthält Suchen von der Theke und von den WhatsApp-Kontakten des Unternehmens, die neuesten zuerst. Öffnen Sie eine Suche, um das Fahrzeug und die Teile zu sehen, die Ihr Kollege gefunden hat.',
        'Der Inhaber verwaltet Unternehmen und Team. Admins verwalten WhatsApp-Kontakte und können Leser einladen. Leser führen Suchen aus und sehen Kontakte. Wenden Sie sich an den Inhaber oder einen Admin, wenn eine Werkstatt Zugang braucht.',
      ],
      recordTitle: 'Was tun mit einer unfertigen Suche?',
      statuses: [
        [
          'Searching',
          'Das Ergebnis erscheint, sobald es fertig ist, ohne Neuladen. Sie können die Seite verlassen, die Suche läuft weiter.',
        ],
        [
          'Vehicle not found',
          'Der Katalog kennt dieses Kennzeichen oder diese FIN nicht. Gleichen Sie die Angabe mit der Werkstatt ab und suchen Sie erneut.',
        ],
        [
          'No category matched',
          'Das Fahrzeug wurde erkannt, aber keine Teilekategorie passte zur Anfrage. Versuchen Sie einen genaueren Teilenamen oder die Einbauposition.',
        ],
        [
          'Done',
          'Prüfen Sie die Originalteile und etwaige Aftermarket-Treffer. Die Verfügbarkeit muss der Lieferant noch bestätigen.',
        ],
        [
          'Failed',
          'Der Katalog konnte die Suche nicht abschließen. Suchen Sie gleich noch einmal.',
        ],
      ],
    },
    reply: {
      label: 'Antwort an den Serviceberater',
      title: 'Wenn in der Satzbeschreibung etwas fehlt',
      text: [
        'Eine Werkstatt braucht Bremsbeläge vorn und einen Verschleißsensor. Der Katalogeintrag nennt Beläge und Zubehör, sagt aber nichts zum Sensor. Sie können dem Serviceberater mitteilen, was Sie gefunden haben, während der Lieferant den Packungsinhalt prüft.',
        'Nennen Sie bei einer Bestandsauskunft Filiale und Menge sowie den Zeitpunkt der Prüfung. Damit kann der Serviceberater die Abholung planen.',
      ],
      recordTitle: 'So können Sie den Anruf beantworten',
      record: [
        [
          'Was Sie wissen',
          '„Ich habe den Satz für vorn gefunden. Der Lieferant führt Beläge und Zubehör auf.“',
        ],
        [
          'Was noch fehlt',
          '„Ein Sensor wird nicht erwähnt. Ich frage nach, ob ich ihn separat anbieten soll.“',
        ],
        [
          'Wer zurückruft',
          'Die Theke klärt Satzinhalt und verfügbare Menge mit dem Lieferanten und nennt dem Serviceberater dann einen Gesamtpreis.',
        ],
      ],
    },
    steps: {
      label: 'Eine Anfrage bearbeiten',
      title: 'Vom ersten Anruf bis zum Rückruf',
      items: [
        [
          'Anfrage lesen',
          'Annehmen',
          'Öffnen Sie die Suche unter dem Namen der Person, die sie geschickt hat.',
        ],
        [
          'Angaben prüfen',
          'Identifizieren',
          'Lesen Sie die Fahrzeugbeschreibung neben dem angegebenen Kennzeichen.',
        ],
        [
          'Werkstatt fragen',
          'Klären',
          'Passen noch zwei Einträge? Finden Sie die Kennzeichnung, die der Mechaniker ablesen müsste.',
        ],
        [
          'Treffer erklären',
          'Antworten',
          'Sagen Sie dem Serviceberater, welche Nummer Sie anbieten können und welche Fragen offen sind.',
        ],
      ],
    },
  },
  fr: {
    title: 'Parts Relay pour les distributeurs | Logiciel de demandes de pièces pour le comptoir',
    description:
      'Logiciel de demandes de pièces pour le comptoir du distributeur. Cherchez par plaque ou VIN, reprenez les demandes des garages arrivées par WhatsApp et transmettez les questions en suspens à l’équipe suivante.',
    label: 'Pour les distributeurs',
    heading: 'Parts Relay pour les distributeurs',
    heroNote:
      'Quand un garage rappelle, ouvrez sa demande d’origine. Vous voyez ce qu’il a demandé, qui a lancé la recherche et où en était la dernière personne.',
    talk: 'Parler à notre équipe',
    byPart: 'Questions par pièce',
    overview: {
      label: 'Rappeler un garage',
      title: 'Quand deux références semblent bonnes',
      text: 'Même avec la fiche du véhicule, plusieurs alternateurs peuvent convenir. Demandez au garage de lire l’intensité ou le numéro sur l’ancien alternateur. S’ils correspondent aux deux références, vérifiez quel connecteur le technicien voit.',
      steps: [
        [
          'Qu’a demandé le garage ?',
          'Vérifiez s’il veut une pièce seule, un jeu pour l’essieu ou un ensemble complet. Ses termes d’origine sont utiles ici.',
        ],
        [
          'Qu’est-ce qui trancherait ?',
          'Demandez la caractéristique qui distingue les références du catalogue. Gardez la réponse avec cette demande pour la personne suivante.',
        ],
        [
          'Que peut fournir l’agence ?',
          'Confirmez la quantité et notez quand l’agence a vérifié le stock avant de proposer un délai de retrait ou de livraison.',
        ],
      ],
    },
    slider: {
      label: 'Questions à poser au garage',
      ask: 'Interrogez le garage sur {part}',
      questions: [
        { part: 'l’alternateur', text: 'Quelle intensité est gravée sur l’ancien alternateur ?' },
        {
          part: 'le rétroviseur',
          text: 'Le garage a-t-il besoin du miroir chauffant, ou le boîtier du rétroviseur gauche est-il aussi endommagé ?',
        },
        {
          part: 'les plaquettes de frein',
          text: 'Le technicien voit-il un fil de témoin d’usure sur les plaquettes avant ?',
        },
      ],
      show: [
        'Voir la question sur l’alternateur',
        'Voir la question sur le rétroviseur',
        'Voir la question sur les plaquettes de frein',
      ],
      pause: 'Suspendre la rotation des questions',
      play: 'Lancer la rotation des questions',
    },
    reference: {
      label: 'Ressources',
      title: 'Où chercher ensuite',
      links: [
        [
          'Identification du véhicule',
          'Examiner un écart entre la voiture et la fiche véhicule renvoyée.',
        ],
        [
          'Désignations des pièces',
          'Distinguer une pièce seule d’un kit dans la description du garage.',
        ],
        ['Vues éclatées', 'Trouver la pièce désignée par un repère, avec les fixations autour.'],
      ],
    },
    directory: {
      label: 'Repères par pièce',
      filtersLabel: 'Filtrer par catégorie de pièce',
      filters: {
        All: 'Toutes',
        Brakes: 'Freinage',
        Electrical: 'Électricité',
        Body: 'Carrosserie',
        Cooling: 'Refroidissement',
      },
      gridLabel: 'Vérifications par pièce',
      count: '{count} vérifications de pièces affichées.',
      parts: [
        [
          'Plaquettes avant',
          'Quels clips et capteurs le jeu chiffré contient-il ? Indiquez tout ce que le garage doit acheter à part.',
        ],
        [
          'Alternateur',
          'Cherchez l’intensité et le numéro du fabricant sur l’ancien alternateur. Si deux modèles correspondent encore, vérifiez la prise.',
        ],
        [
          'Miroir de rétroviseur gauche',
          'Vérifiez la forme du miroir gauche et les bornes du dégivrage. Le garage a-t-il aussi besoin d’une platine support ?',
        ],
        [
          'Radiateur',
          'Où les durites se raccordent-elles au radiateur ? Comparez les sorties et fixations avec l’équipement de refroidissement indiqué pour la voiture.',
        ],
        [
          'Démarreur',
          'Comparez le numéro au dos du démarreur avec la référence du catalogue pour ce moteur et cette boîte de vitesses.',
        ],
        [
          'Bloc optique',
          'Vérifiez le côté et l’équipement d’éclairage sur l’étiquette. Dites au garage s’il doit transférer ou commander une ampoule ou un module de commande.',
        ],
        [
          'Durite de refroidissement',
          'Suivez la durite d’un raccord à l’autre sur le schéma. Vérifiez les dérivations et les embouts avant de la chiffrer.',
        ],
        [
          'Étrier arrière',
          'Associez l’étrier au côté et au mécanisme de frein de stationnement de l’essieu arrière. Lisez la description du fournisseur pour la chape.',
        ],
      ],
    },
    queue: {
      label: 'File de recherches',
      title: 'Reprendre une recherche lancée par un collègue',
      text: [
        'Filtrez la file de recherches par demandeur, statut, période ou canal, ou cherchez la plaque ou le VIN. La même file regroupe les recherches du comptoir et des contacts WhatsApp de l’entreprise, les plus récentes en premier. Ouvrez-en une pour voir le véhicule et les pièces trouvées par votre collègue.',
        'Le propriétaire gère l’entreprise et l’équipe. Les administrateurs gèrent les contacts WhatsApp et peuvent inviter des lecteurs. Les lecteurs lancent des recherches et voient les contacts. Adressez-vous au propriétaire ou à un administrateur si un garage a besoin d’un accès.',
      ],
      recordTitle: 'Que faire d’une recherche inachevée',
      statuses: [
        [
          'Searching',
          'Le résultat s’affiche dès qu’il est prêt, sans recharger la page. Vous pouvez quitter la page, la recherche continue.',
        ],
        [
          'Vehicle not found',
          'Le catalogue ne connaît pas cette plaque ou ce VIN. Vérifiez-la avec le garage et relancez la recherche.',
        ],
        [
          'No category matched',
          'Le véhicule a été identifié, mais aucune catégorie de pièce ne correspond à la demande. Essayez un nom de pièce plus précis ou sa position.',
        ],
        [
          'Done',
          'Examinez les pièces d’origine et les éventuelles correspondances adaptables. Le fournisseur doit encore confirmer la disponibilité.',
        ],
        ['Failed', 'Le catalogue n’a pas pu terminer la recherche. Relancez-la dans un instant.'],
      ],
    },
    reply: {
      label: 'Répondre au conseiller',
      title: 'Quand la description du kit omet un élément',
      text: [
        'Un garage a besoin d’un jeu de plaquettes avant et d’un témoin d’usure. La fiche mentionne les plaquettes et les accessoires, mais rien sur le témoin. Vous pouvez dire au conseiller ce que vous avez trouvé pendant que le fournisseur vérifie le contenu.',
        'Pour un point sur le stock, indiquez l’agence et la quantité ainsi que l’heure de la vérification. Le conseiller peut alors organiser le retrait.',
      ],
      recordTitle: 'Une façon de répondre à l’appel',
      record: [
        [
          'Ce que vous savez',
          '« J’ai trouvé le jeu avant. Le fournisseur indique les plaquettes et les accessoires. »',
        ],
        [
          'Ce qu’il vous manque',
          '« Aucun témoin d’usure n’est mentionné. Je demande s’il faut le chiffrer à part. »',
        ],
        [
          'Qui rappelle',
          'Le comptoir vérifie le contenu du kit et la quantité disponible auprès du fournisseur, puis donne un total au conseiller.',
        ],
      ],
    },
    steps: {
      label: 'Traiter une demande',
      title: 'Du premier appel au rappel',
      items: [
        [
          'Lire la demande',
          'Réception',
          'Ouvrez la recherche au nom de la personne qui l’a envoyée.',
        ],
        [
          'Vérifier les détails',
          'Identification',
          'Lisez la description du véhicule à côté de l’immatriculation fournie.',
        ],
        [
          'Interroger le garage',
          'Précision',
          'Deux références conviennent encore ? Trouvez le marquage que le technicien devrait lire.',
        ],
        [
          'Expliquer le choix',
          'Réponse',
          'Indiquez au conseiller quelle référence vous pouvez chiffrer et quelles questions restent ouvertes.',
        ],
      ],
    },
  },
  es: {
    title: 'Parts Relay para distribuidores | Software de consultas de recambios para el mostrador',
    description:
      'Software de consultas de recambios para el mostrador del distribuidor. Busque por matrícula o VIN, atienda las consultas de los talleres por WhatsApp y pase las preguntas pendientes al siguiente turno.',
    label: 'Para distribuidores',
    heading: 'Parts Relay para distribuidores',
    heroNote:
      'Cuando un taller vuelve a llamar, abra su consulta original. Verá qué pidió, quién hizo la búsqueda y hasta dónde llegó la última persona.',
    talk: 'Hablar con nuestro equipo',
    byPart: 'Preguntas por pieza',
    overview: {
      label: 'Devolver una llamada',
      title: 'Cuando dos referencias parecen correctas',
      text: 'Con la ficha del vehículo aún puede quedar la elección entre varios alternadores. Pida al taller que lea el amperaje o el número de la unidad vieja. Si coinciden con ambas referencias, compruebe qué conector ve el mecánico.',
      steps: [
        [
          '¿Qué pidió el taller?',
          'Compruebe si quiere una pieza suelta, un juego por eje o un conjunto completo. Sus palabras originales ayudan aquí.',
        ],
        [
          '¿Qué lo resolvería?',
          'Pregunte por la característica que distingue las referencias del catálogo. Guarde la respuesta con esta consulta para el siguiente turno.',
        ],
        [
          '¿Qué puede servir la sucursal?',
          'Confirme la cantidad y anote cuándo comprobó el stock la sucursal antes de ofrecer un plazo de recogida o entrega.',
        ],
      ],
    },
    slider: {
      label: 'Preguntas para el taller',
      ask: 'Pregunte al taller por {part}',
      questions: [
        { part: 'el alternador', text: '¿Qué amperaje lleva grabado el alternador viejo?' },
        {
          part: 'el retrovisor',
          text: '¿Necesita el taller el cristal térmico, o también está dañada la carcasa del retrovisor izquierdo?',
        },
        {
          part: 'las pastillas de freno',
          text: '¿Ve el mecánico un cable del testigo de desgaste en las pastillas delanteras?',
        },
      ],
      show: [
        'Ver la pregunta sobre el alternador',
        'Ver la pregunta sobre el retrovisor',
        'Ver la pregunta sobre las pastillas de freno',
      ],
      pause: 'Pausar las preguntas rotativas',
      play: 'Reproducir las preguntas rotativas',
    },
    reference: {
      label: 'Consulta rápida',
      title: 'Dónde mirar después',
      links: [
        [
          'Identificación del vehículo',
          'Investigue una diferencia entre el coche y la ficha del vehículo devuelta.',
        ],
        [
          'Descripciones de piezas',
          'Distinga una pieza suelta de un kit en la descripción del taller.',
        ],
        [
          'Despieces',
          'Encuentre la pieza que señala un número de posición, con las fijaciones de alrededor.',
        ],
      ],
    },
    directory: {
      label: 'Referencia de piezas',
      filtersLabel: 'Filtrar por categoría de pieza',
      filters: {
        All: 'Todas',
        Brakes: 'Frenos',
        Electrical: 'Electricidad',
        Body: 'Carrocería',
        Cooling: 'Refrigeración',
      },
      gridLabel: 'Comprobaciones por pieza',
      count: '{count} comprobaciones de piezas mostradas.',
      parts: [
        [
          'Pastillas delanteras',
          '¿Qué clips y sensores incluye el juego presupuestado? Indique todo lo que el taller tenga que comprar aparte.',
        ],
        [
          'Alternador',
          'Busque el amperaje y el número del fabricante en el alternador viejo. Si aún encajan dos unidades, compruebe el conector.',
        ],
        [
          'Cristal de retrovisor izquierdo',
          'Compruebe la forma del cristal izquierdo y los terminales de la resistencia térmica. ¿Necesita el taller también la placa soporte?',
        ],
        [
          'Radiador',
          '¿Dónde se unen los manguitos al radiador? Compare las salidas y los soportes con el equipo de refrigeración indicado para el coche.',
        ],
        [
          'Motor de arranque',
          'Compare el número de la parte trasera del motor de arranque con la referencia del catálogo para ese motor y esa caja de cambios.',
        ],
        [
          'Faro completo',
          'Use la etiqueta para comprobar el lado y el equipamiento de iluminación. Diga al taller si debe pasar o pedir una lámpara o un módulo de control.',
        ],
        [
          'Manguito de refrigeración',
          'Siga el manguito de una conexión a otra en el despiece. Compruebe las derivaciones y los extremos antes de presupuestarlo.',
        ],
        [
          'Pinza trasera',
          'Haga coincidir la pinza con el lado y el mecanismo del freno de mano del eje trasero. Lea la descripción del proveedor sobre el soporte.',
        ],
      ],
    },
    queue: {
      label: 'Cola de búsquedas',
      title: 'Retomar un trabajo que empezó un compañero',
      text: [
        'Filtre la cola de búsquedas por solicitante, estado, periodo o canal, o busque la matrícula o el VIN. La misma cola reúne las búsquedas del mostrador y de los contactos de WhatsApp de la empresa, las más recientes primero. Abra una para ver el vehículo y las piezas que encontró su compañero.',
        'El propietario gestiona la empresa y el equipo. Los administradores gestionan los contactos de WhatsApp y pueden invitar a lectores. Los lectores hacen búsquedas y ven los contactos. Si un taller necesita acceso, pídalo al propietario o a un administrador.',
      ],
      recordTitle: 'Qué hacer con una búsqueda sin terminar',
      statuses: [
        [
          'Searching',
          'El resultado aparece en cuanto está listo, sin recargar. Puede salir de la página y la búsqueda continúa.',
        ],
        [
          'Vehicle not found',
          'El catálogo no reconoce esta matrícula o VIN. Repáselo con el taller y vuelva a buscar.',
        ],
        [
          'No category matched',
          'Se identificó el vehículo, pero ninguna categoría de pieza coincidió con la consulta. Pruebe con un nombre de pieza más concreto o su posición.',
        ],
        [
          'Done',
          'Revise las piezas originales y las coincidencias aftermarket. El proveedor aún debe confirmar la disponibilidad.',
        ],
        ['Failed', 'El catálogo no pudo completar la búsqueda. Vuelva a buscar en un momento.'],
      ],
    },
    reply: {
      label: 'Responder al asesor',
      title: 'Cuando la descripción del kit omite algo',
      text: [
        'Un taller necesita un juego de pastillas delanteras y un sensor de desgaste. La ficha del proveedor menciona las pastillas y los accesorios, pero nada del sensor. Puede decirle al asesor lo que ha encontrado mientras el proveedor revisa el contenido.',
        'Al informar de stock, indique la sucursal y la cantidad, además de la hora de la comprobación. Así el asesor puede organizar la recogida.',
      ],
      recordTitle: 'Una forma de responder a la llamada',
      record: [
        [
          'Lo que sabe',
          '«He encontrado el juego delantero. El proveedor indica las pastillas y los accesorios.»',
        ],
        [
          'Lo que aún falta',
          '«No se menciona ningún sensor. Preguntaré si lo presupuesto aparte.»',
        ],
        [
          'Quién devuelve la llamada',
          'El mostrador comprueba con el proveedor el contenido del kit y la cantidad disponible, y luego da al asesor un total.',
        ],
      ],
    },
    steps: {
      label: 'Atender una consulta',
      title: 'De la primera llamada a la devolución',
      items: [
        ['Leer la consulta', 'Recibir', 'Abra la búsqueda con el nombre de quien la envió.'],
        [
          'Comprobar los datos',
          'Identificar',
          'Lea la descripción del vehículo junto a la matrícula indicada.',
        ],
        [
          'Preguntar al taller',
          'Aclarar',
          '¿Aún encajan dos referencias? Busque la marca que el mecánico tendría que leer.',
        ],
        [
          'Explicar la elección',
          'Responder',
          'Diga al asesor qué referencia puede presupuestar y qué preguntas siguen abiertas.',
        ],
      ],
    },
  },
  it: {
    title: 'Parts Relay per i distributori | Software per richieste ricambi al banco',
    description:
      'Software per richieste ricambi al banco del distributore. Cerchi per targa o VIN, prenda in carico le richieste delle officine da WhatsApp e passi le domande aperte al turno successivo.',
    label: 'Per i distributori',
    heading: 'Parts Relay per i distributori',
    heroNote:
      'Quando un’officina richiama, apra la sua richiesta originale. Vede cosa ha chiesto, chi ha fatto la ricerca e dove era arrivata l’ultima persona.',
    talk: 'Parli con il nostro team',
    byPart: 'Domande per ricambio',
    overview: {
      label: 'Richiamare l’officina',
      title: 'Quando due voci sembrano giuste',
      text: 'Anche con i dati del veicolo può restare la scelta tra più alternatori. Chieda all’officina di leggere l’amperaggio o il codice sul pezzo vecchio. Se corrispondono a entrambe le voci, verifichi quale connettore vede il meccanico.',
      steps: [
        [
          'Cosa ha chiesto l’officina?',
          'Verifichi se vuole un singolo pezzo, un kit per asse o un gruppo completo. Le sue parole originali aiutano.',
        ],
        [
          'Cosa lo chiarirebbe?',
          'Chieda l’unica caratteristica che distingue le voci di catalogo. Salvi la risposta con questa richiesta per chi è di turno dopo.',
        ],
        [
          'Cosa può fornire la filiale?',
          'Confermi la quantità e annoti quando la filiale ha controllato la giacenza prima di proporre un orario di ritiro o di consegna.',
        ],
      ],
    },
    slider: {
      label: 'Domande da fare all’officina',
      ask: 'Chieda all’officina informazioni {part}',
      questions: [
        {
          part: 'sull’alternatore',
          text: 'Quale amperaggio è stampigliato sul vecchio alternatore?',
        },
        {
          part: 'sullo specchietto',
          text: 'All’officina serve il vetro riscaldato, o è danneggiata anche la calotta dello specchietto sinistro?',
        },
        {
          part: 'sulle pastiglie freno',
          text: 'Il meccanico vede un cavo del sensore d’usura sulle pastiglie anteriori?',
        },
      ],
      show: [
        'Mostra la domanda sull’alternatore',
        'Mostra la domanda sullo specchietto',
        'Mostra la domanda sulle pastiglie freno',
      ],
      pause: 'Metti in pausa le domande a rotazione',
      play: 'Avvia le domande a rotazione',
    },
    reference: {
      label: 'Consultazione',
      title: 'Dove guardare dopo',
      links: [
        [
          'Identificazione del veicolo',
          'Approfondisca una differenza tra l’auto e la scheda veicolo restituita.',
        ],
        [
          'Descrizioni dei ricambi',
          'Distingua un singolo componente da un kit nella descrizione dell’officina.',
        ],
        ['Esplosi', 'Trovi il pezzo indicato da un numero di posizione, con i fissaggi intorno.'],
      ],
    },
    directory: {
      label: 'Riferimento ricambi',
      filtersLabel: 'Filtra per categoria di ricambio',
      filters: {
        All: 'Tutti',
        Brakes: 'Freni',
        Electrical: 'Elettrico',
        Body: 'Carrozzeria',
        Cooling: 'Raffreddamento',
      },
      gridLabel: 'Controlli per ricambio',
      count: '{count} controlli ricambio mostrati.',
      parts: [
        [
          'Pastiglie anteriori',
          'Quali clip e sensori sono nel kit quotato? Indichi tutto ciò che l’officina deve acquistare a parte.',
        ],
        [
          'Alternatore',
          'Cerchi l’amperaggio e il codice del costruttore sul vecchio alternatore. Se due unità corrispondono ancora, controlli il connettore.',
        ],
        [
          'Vetro specchietto sinistro',
          'Controlli la forma del vetro sinistro e i terminali della resistenza. All’officina serve anche la piastra di supporto?',
        ],
        [
          'Radiatore',
          'Dove si collegano i manicotti al radiatore? Confronti uscite e supporti con il pacchetto di raffreddamento indicato per l’auto.',
        ],
        [
          'Motorino di avviamento',
          'Confronti il codice sul retro del motorino con la voce di catalogo per quel motore e quel cambio.',
        ],
        [
          'Gruppo ottico',
          'Usi l’etichetta per verificare lato ed equipaggiamento luci. Dica all’officina se deve trasferire o ordinare una lampadina o una centralina.',
        ],
        [
          'Manicotto refrigerante',
          'Segua il manicotto sul disegno da un raccordo all’altro. Controlli diramazioni e terminali prima di quotarlo.',
        ],
        [
          'Pinza posteriore',
          'Abbini la pinza al lato e al meccanismo del freno di stazionamento sull’asse posteriore. Legga la descrizione del fornitore per la staffa.',
        ],
      ],
    },
    queue: {
      label: 'Coda delle ricerche',
      title: 'Riprendere un lavoro iniziato da un collega',
      text: [
        'Filtri la coda delle ricerche per richiedente, stato, periodo o canale, oppure cerchi la targa o il VIN. La stessa coda raccoglie le ricerche dal banco e dai contatti WhatsApp dell’azienda, dalle più recenti. Ne apra una per vedere il veicolo e i ricambi trovati dal collega.',
        'Il proprietario gestisce l’azienda e il team. Gli amministratori gestiscono i contatti WhatsApp e possono invitare utenti in sola lettura, che eseguono ricerche e vedono i contatti. Se un’officina ha bisogno di accesso, si rivolga al proprietario o a un amministratore.',
      ],
      recordTitle: 'Cosa fare con una ricerca non conclusa',
      statuses: [
        [
          'Searching',
          'Il risultato appare appena è pronto, senza ricaricare. Può lasciare la pagina e la ricerca continua.',
        ],
        [
          'Vehicle not found',
          'Il catalogo non conosce questa targa o questo VIN. Lo ricontrolli con l’officina e cerchi di nuovo.',
        ],
        [
          'No category matched',
          'Il veicolo è stato identificato, ma nessuna categoria di ricambio corrisponde alla richiesta. Provi un nome del pezzo più preciso o la sua posizione.',
        ],
        [
          'Done',
          'Esamini i ricambi originali e le eventuali corrispondenze aftermarket. Il fornitore deve ancora confermare la disponibilità.',
        ],
        ['Failed', 'Il catalogo non è riuscito a completare la ricerca. Riprovi tra poco.'],
      ],
    },
    reply: {
      label: 'Rispondere al consulente',
      title: 'Quando la descrizione del kit tralascia qualcosa',
      text: [
        'Un’officina ha bisogno delle pastiglie anteriori e di un sensore d’usura. La scheda cita pastiglie e accessori, ma non il sensore. Può dire al consulente cosa ha trovato mentre il fornitore verifica la confezione.',
        'Per un aggiornamento sulla giacenza, indichi filiale e quantità e l’ora della verifica. Così il consulente può organizzare il ritiro.',
      ],
      recordTitle: 'Un modo per rispondere alla chiamata',
      record: [
        ['Cosa sa', '«Ho trovato il kit anteriore. Il fornitore elenca pastiglie e accessori.»'],
        ['Cosa manca ancora', '«Il sensore non è menzionato. Chiedo se quotarlo a parte.»'],
        [
          'Chi richiama',
          'Il banco verifica con il fornitore contenuto del kit e quantità disponibile, poi comunica al consulente un totale.',
        ],
      ],
    },
    steps: {
      label: 'Gestire una richiesta',
      title: 'Dalla prima chiamata alla richiamata',
      items: [
        ['Leggere la richiesta', 'Ricevere', 'Apra la ricerca sotto il nome di chi l’ha inviata.'],
        [
          'Controllare i dati',
          'Identificare',
          'Legga la descrizione del veicolo accanto alla targa fornita.',
        ],
        [
          'Chiedere all’officina',
          'Chiarire',
          'Due voci corrispondono ancora? Trovi la marcatura che il meccanico dovrebbe leggere.',
        ],
        [
          'Spiegare la scelta',
          'Rispondere',
          'Dica al consulente quale codice può quotare e quali domande restano aperte.',
        ],
      ],
    },
  },
};
