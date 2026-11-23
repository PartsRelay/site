// VIN format check page text in every language. Labels from the Parts Relay app
// itself (New search, Plate, VIN) stay in English because the app is in English.
// {email} is replaced with the contact address. The VIN rules (17 characters,
// no I, O or Q) are the same in every language.

export const vinCheck = {
  en: {
    title: 'Check a VIN’s format | Parts Relay',
    description:
      'Check the length and characters of a 17-character VIN before you send it to a distributor. This is a format check: your supplier confirms the vehicle.',
    label: 'VIN format check',
    heading: 'Check a VIN’s format',
    intro:
      'A mistyped character can send a parts search to the wrong vehicle. Check the VIN on your repair order before you pass it to the distributor.',
    jump: 'Check a VIN',
    ticker: [
      'BRAKE PADS',
      'TAIL LAMP',
      'WHEEL HUB',
      'STARTER',
      'CONTROL ARM',
      'DOOR LATCH',
      'FAN MOTOR',
      'ALTERNATOR',
      'MIRROR GLASS',
      'HOSE',
      'BELT',
      'SENSOR',
    ],
    workspace: 'Workshop tool',
    noscript:
      'Enable JavaScript to use this tool. You can also email {email} with questions about Parts Relay.',
    form: {
      overline: 'Vehicle identification',
      heading: 'Check a VIN before you share it',
      text: 'Copy the number from the vehicle or repair order. This checks its length and characters. Your distributor can check the vehicle and its parts in their catalogue.',
      vin: 'Vehicle identification number (VIN)',
      vehicle: 'Vehicle description (optional)',
      submit: 'Check VIN format',
      error:
        'Enter 17 letters and numbers. A VIN uses the digits 0 and 1 and excludes the letters I, O and Q.',
    },
    result: {
      overline: 'Format check',
      heading: 'The VIN has the expected format',
      text: 'It contains 17 permitted characters. Confirm the number against the vehicle before asking the counter to check fit.',
      checked: 'VIN as entered',
      edit: 'Edit vehicle details',
    },
    panel: ['Vehicle identification', '17 characters'],
    app: {
      label: 'In the Parts Relay web app',
      title: 'Searching by plate or VIN',
      text: 'In Parts Relay, choose New search and pick Plate or VIN. Enter it with the part you’re looking for. If the catalogue identifies the vehicle, you’ll see its description and, when available, its VIN.',
      notes: [
        [
          'A vehicle comes back',
          'Do the make and model match the repair order? If the description is for a different car, check the letters and numbers on the plate.',
        ],
        [
          'The catalogue lists parts',
          'Read the manufacturer’s original equipment (OE) description in its catalogue section. Two similar descriptions may refer to a whole assembly and a part inside it.',
        ],
        [
          'Vehicle not found',
          'If the plate is right and a second search still returns nothing, the catalogue may have no record for that vehicle.',
        ],
      ],
    },
    fitment: {
      label: 'Fitment details',
      title: 'What the VIN leaves open',
      card: ['VEHICLE IDENTIFICATION', '17 characters'],
      padsAlt: 'Disc and two brake pads in an exploded view',
      alternatorAlt: 'Alternator with connector and mounting points',
      tiles: [
        [
          'Vehicle identity',
          'Read the VIN from the vehicle itself if the number on the job card is unclear.',
        ],
        [
          'Size of the repair',
          'A front axle diagram can show a disc and its pads together. Which of them did the technician ask for?',
        ],
        [
          'Fitted equipment',
          'If two alternators look alike, the plug or the markings on the housing can distinguish them.',
        ],
        [
          'Vehicle on the enquiry',
          'Include the vehicle details in the message you give the counter. Keep the supplier’s quoted reference with the same repair order.',
        ],
      ],
    },
    reading: {
      label: 'Reading a VIN',
      title: 'When a character is hard to read',
      steps: [
        [
          'Check the characters',
          'The 17-character VIN uses letters and numbers. A round character can be zero, and a straight one can be the number one. The letters I, O and Q are excluded.',
        ],
        [
          'Read it back in groups',
          'Have a colleague read from the vehicle while you follow the written number. Two valid characters in the wrong order can still pass a format check.',
        ],
        [
          'Look up the vehicle',
          'For a vehicle sold in the United States, the federal VIN decoder can help identify its make, model and engine. Enter the VIN directly on the agency’s site.',
        ],
      ],
      decoder: 'Open NHTSA’s VIN decoder',
    },
    counter: {
      label: 'At the parts counter',
      title: 'Two entries called “pad set”',
      text: 'The technician can tell you which axle they’re working on and which brakes are fitted. Give those details to the counter so they can narrow down the set and quote any accessories the job needs.',
      link: 'Read the counter guide',
      alt: 'A service adviser shows a distributor the damaged mounting tab on a headlamp.',
    },
    closing: {
      title: 'What does the workshop need?',
      text: 'Add the part description and quantity to your vehicle details before contacting the distributor.',
      primary: 'Read the vehicle guide',
    },
  },
  de: {
    title: 'FIN-Format prüfen | Parts Relay',
    description:
      'Prüfen Sie Länge und Zeichen einer 17-stelligen FIN, bevor Sie sie an einen Händler senden. Das ist eine Formatprüfung: Das Fahrzeug bestätigt Ihr Lieferant.',
    label: 'FIN-Formatprüfung',
    heading: 'FIN-Format prüfen',
    intro:
      'Ein vertipptes Zeichen kann eine Teilesuche zum falschen Fahrzeug führen. Prüfen Sie die FIN auf Ihrem Reparaturauftrag, bevor Sie sie an den Händler weitergeben.',
    jump: 'FIN prüfen',
    ticker: [
      'BREMSBELÄGE',
      'RÜCKLEUCHTE',
      'RADNABE',
      'ANLASSER',
      'QUERLENKER',
      'TÜRSCHLOSS',
      'LÜFTERMOTOR',
      'LICHTMASCHINE',
      'SPIEGELGLAS',
      'SCHLAUCH',
      'RIEMEN',
      'SENSOR',
    ],
    workspace: 'Werkstatt-Werkzeug',
    noscript:
      'Aktivieren Sie JavaScript, um dieses Werkzeug zu nutzen. Fragen zu Parts Relay können Sie auch an {email} senden.',
    form: {
      overline: 'Fahrzeugidentifizierung',
      heading: 'FIN prüfen, bevor Sie sie weitergeben',
      text: 'Übernehmen Sie die Nummer vom Fahrzeug oder vom Reparaturauftrag. Geprüft werden Länge und Zeichen. Fahrzeug und Teile prüft Ihr Händler in seinem Katalog.',
      vin: 'Fahrzeug-Identifizierungsnummer (FIN)',
      vehicle: 'Fahrzeugbeschreibung (optional)',
      submit: 'FIN-Format prüfen',
      error:
        'Geben Sie 17 Buchstaben und Ziffern ein. Eine FIN verwendet die Ziffern 0 und 1 und enthält nie die Buchstaben I, O und Q.',
    },
    result: {
      overline: 'Formatprüfung',
      heading: 'Die FIN hat das erwartete Format',
      text: 'Sie enthält 17 zulässige Zeichen. Gleichen Sie die Nummer mit dem Fahrzeug ab, bevor die Theke die Passform prüft.',
      checked: 'FIN wie eingegeben',
      edit: 'Fahrzeugdaten bearbeiten',
    },
    panel: ['Fahrzeugidentifizierung', '17 Zeichen'],
    app: {
      label: 'In der Web-App von Parts Relay',
      title: 'Suche über Kennzeichen oder FIN',
      text: 'Wählen Sie in Parts Relay „New search“ und dann „Plate“ oder „VIN“. Geben Sie die Nummer zusammen mit dem gesuchten Teil ein. Erkennt der Katalog das Fahrzeug, sehen Sie seine Beschreibung und, falls vorhanden, seine FIN.',
      notes: [
        [
          'Ein Fahrzeug wird gefunden',
          'Stimmen Marke und Modell mit dem Reparaturauftrag überein? Beschreibt der Eintrag ein anderes Auto, prüfen Sie Buchstaben und Ziffern des Kennzeichens.',
        ],
        [
          'Der Katalog listet Teile',
          'Lesen Sie die Herstellerbezeichnung der Originalteile (OE) im jeweiligen Katalogabschnitt. Zwei ähnliche Bezeichnungen können eine komplette Baugruppe und ein Teil darin meinen.',
        ],
        [
          '„Vehicle not found“',
          'Stimmt das Kennzeichen und bringt auch eine zweite Suche nichts, hat der Katalog zu diesem Fahrzeug womöglich keinen Eintrag.',
        ],
      ],
    },
    fitment: {
      label: 'Angaben zur Passform',
      title: 'Was die FIN offenlässt',
      card: ['FAHRZEUGIDENTIFIZIERUNG', '17 Zeichen'],
      padsAlt: 'Bremsscheibe und zwei Bremsbeläge in einer Explosionszeichnung',
      alternatorAlt: 'Lichtmaschine mit Stecker und Befestigungspunkten',
      tiles: [
        [
          'Fahrzeugidentität',
          'Lesen Sie die FIN direkt am Fahrzeug ab, wenn die Nummer auf dem Auftrag unklar ist.',
        ],
        [
          'Umfang der Reparatur',
          'Eine Zeichnung der Vorderachse kann Scheibe und Beläge zusammen zeigen. Was davon hat der Mechaniker angefordert?',
        ],
        [
          'Verbaute Ausstattung',
          'Sehen sich zwei Lichtmaschinen ähnlich, unterscheiden sie sich oft am Stecker oder an den Markierungen auf dem Gehäuse.',
        ],
        [
          'Fahrzeug in der Anfrage',
          'Nehmen Sie die Fahrzeugdaten in die Nachricht an die Theke auf. Bewahren Sie die angebotene Nummer des Lieferanten beim selben Reparaturauftrag auf.',
        ],
      ],
    },
    reading: {
      label: 'FIN ablesen',
      title: 'Wenn ein Zeichen schwer lesbar ist',
      steps: [
        [
          'Zeichen prüfen',
          'Die 17-stellige FIN besteht aus Buchstaben und Ziffern. Ein rundes Zeichen ist oft eine Null, ein gerader Strich die Ziffer Eins. Die Buchstaben I, O und Q kommen nicht vor.',
        ],
        [
          'In Gruppen zurücklesen',
          'Lassen Sie einen Kollegen am Fahrzeug vorlesen, während Sie die notierte Nummer mitlesen. Zwei gültige Zeichen in falscher Reihenfolge bestehen eine Formatprüfung trotzdem.',
        ],
        [
          'Fahrzeug nachschlagen',
          'Bei einem in den USA verkauften Fahrzeug hilft der FIN-Decoder der US-Bundesbehörde, Marke, Modell und Motor zu bestimmen. Geben Sie die FIN direkt auf der Website der Behörde ein.',
        ],
      ],
      decoder: 'FIN-Decoder der NHTSA öffnen',
    },
    counter: {
      label: 'An der Teiletheke',
      title: 'Zwei Einträge namens „Belagsatz“',
      text: 'Der Mechaniker weiß, an welcher Achse er arbeitet und welche Bremse verbaut ist. Geben Sie diese Angaben an die Theke weiter, damit sie den Satz eingrenzen und benötigtes Zubehör gleich mit anbieten kann.',
      link: 'Theken-Ratgeber lesen',
      alt: 'Ein Serviceberater zeigt einem Händler die beschädigte Befestigungslasche an einem Scheinwerfer.',
    },
    closing: {
      title: 'Was braucht die Werkstatt?',
      text: 'Ergänzen Sie Ihre Fahrzeugdaten um Teilebezeichnung und Menge, bevor Sie den Händler kontaktieren.',
      primary: 'Fahrzeug-Ratgeber lesen',
    },
  },
  fr: {
    title: 'Vérifier le format d’un VIN | Parts Relay',
    description:
      'Vérifiez la longueur et les caractères d’un VIN à 17 caractères avant de l’envoyer à un distributeur. C’est une vérification de format : votre fournisseur confirme le véhicule.',
    label: 'Vérification du VIN',
    heading: 'Vérifier le format d’un VIN',
    intro:
      'Un caractère mal saisi peut orienter une recherche de pièces vers le mauvais véhicule. Vérifiez le VIN de votre ordre de réparation avant de le transmettre au distributeur.',
    jump: 'Vérifier un VIN',
    ticker: [
      'PLAQUETTES',
      'FEU ARRIÈRE',
      'MOYEU',
      'DÉMARREUR',
      'TRIANGLE',
      'SERRURE',
      'MOTOVENTILATEUR',
      'ALTERNATEUR',
      'GLACE RÉTRO',
      'DURITE',
      'COURROIE',
      'CAPTEUR',
    ],
    workspace: 'Outil d’atelier',
    noscript:
      'Activez JavaScript pour utiliser cet outil. Vous pouvez aussi écrire à {email} pour toute question sur Parts Relay.',
    form: {
      overline: 'Identification du véhicule',
      heading: 'Vérifiez un VIN avant de le transmettre',
      text: 'Recopiez le numéro depuis le véhicule ou l’ordre de réparation. L’outil vérifie sa longueur et ses caractères. Votre distributeur peut vérifier le véhicule et ses pièces dans son catalogue.',
      vin: 'Numéro d’identification du véhicule (VIN)',
      vehicle: 'Description du véhicule (facultatif)',
      submit: 'Vérifier le format',
      error:
        'Saisissez 17 lettres et chiffres. Un VIN utilise les chiffres 0 et 1 et exclut les lettres I, O et Q.',
    },
    result: {
      overline: 'Vérification du format',
      heading: 'Le VIN a le format attendu',
      text: 'Il contient 17 caractères autorisés. Comparez le numéro avec le véhicule avant de demander au comptoir de vérifier la compatibilité.',
      checked: 'VIN tel que saisi',
      edit: 'Modifier le véhicule',
    },
    panel: ['Identification du véhicule', '17 caractères'],
    app: {
      label: 'Dans l’application web Parts Relay',
      title: 'Rechercher par plaque ou par VIN',
      text: 'Dans Parts Relay, choisissez « New search » puis « Plate » ou « VIN ». Saisissez le numéro avec la pièce recherchée. Si le catalogue identifie le véhicule, vous voyez sa description et, quand il est disponible, son VIN.',
      notes: [
        [
          'Un véhicule est trouvé',
          'La marque et le modèle correspondent-ils à l’ordre de réparation ? Si la description concerne une autre voiture, vérifiez les lettres et les chiffres de la plaque.',
        ],
        [
          'Le catalogue liste des pièces',
          'Lisez la désignation d’origine (OE) du constructeur dans sa section du catalogue. Deux désignations proches peuvent désigner un ensemble complet et une pièce qui en fait partie.',
        ],
        [
          '« Vehicle not found »',
          'Si la plaque est correcte et qu’une deuxième recherche ne donne toujours rien, le catalogue n’a peut-être aucune fiche pour ce véhicule.',
        ],
      ],
    },
    fitment: {
      label: 'Détails de montage',
      title: 'Ce que le VIN ne dit pas',
      card: ['IDENTIFICATION VÉHICULE', '17 caractères'],
      padsAlt: 'Disque et deux plaquettes de frein en vue éclatée',
      alternatorAlt: 'Alternateur avec connecteur et points de fixation',
      tiles: [
        [
          'Identité du véhicule',
          'Relevez le VIN sur le véhicule lui-même si le numéro de l’ordre de travail n’est pas lisible.',
        ],
        [
          'Étendue de la réparation',
          'Une vue de l’essieu avant peut montrer le disque et ses plaquettes ensemble. Lesquels le mécanicien a-t-il demandés ?',
        ],
        [
          'Équipement monté',
          'Si deux alternateurs se ressemblent, la prise ou les marquages du boîtier permettent de les distinguer.',
        ],
        [
          'Le véhicule dans la demande',
          'Indiquez les données du véhicule dans le message que vous transmettez au comptoir. Conservez la référence chiffrée par le fournisseur avec le même ordre de réparation.',
        ],
      ],
    },
    reading: {
      label: 'Lire un VIN',
      title: 'Quand un caractère est difficile à lire',
      steps: [
        [
          'Vérifier les caractères',
          'Le VIN à 17 caractères comporte des lettres et des chiffres. Un caractère rond peut être un zéro, un trait droit le chiffre un. Les lettres I, O et Q sont exclues.',
        ],
        [
          'Relire par groupes',
          'Demandez à un collègue de lire sur le véhicule pendant que vous suivez le numéro écrit. Deux caractères valides inversés passent quand même une vérification de format.',
        ],
        [
          'Rechercher le véhicule',
          'Pour un véhicule vendu aux États-Unis, le décodeur VIN fédéral aide à identifier la marque, le modèle et le moteur. Saisissez le VIN directement sur le site de l’agence.',
        ],
      ],
      decoder: 'Ouvrir le décodeur VIN de la NHTSA',
    },
    counter: {
      label: 'Au comptoir pièces',
      title: 'Deux entrées « jeu de plaquettes »',
      text: 'Le mécanicien peut vous dire sur quel essieu il travaille et quels freins sont montés. Transmettez ces informations au comptoir pour qu’il affine le jeu et chiffre les accessoires nécessaires.',
      link: 'Lire le guide du comptoir',
      alt: 'Un réceptionnaire d’atelier montre à un distributeur la patte de fixation cassée d’un phare.',
    },
    closing: {
      title: 'De quoi le garage a-t-il besoin ?',
      text: 'Ajoutez la désignation de la pièce et la quantité aux données du véhicule avant de contacter le distributeur.',
      primary: 'Lire le guide véhicule',
    },
  },
  es: {
    title: 'Comprobar el formato de un VIN | Parts Relay',
    description:
      'Compruebe la longitud y los caracteres de un VIN de 17 caracteres antes de enviarlo a un distribuidor. Es una comprobación de formato: su proveedor confirma el vehículo.',
    label: 'Comprobación del VIN',
    heading: 'Compruebe el formato de un VIN',
    intro:
      'Un carácter mal escrito puede llevar una búsqueda de recambios al vehículo equivocado. Compruebe el VIN de la orden de reparación antes de pasarlo al distribuidor.',
    jump: 'Comprobar un VIN',
    ticker: [
      'PASTILLAS',
      'PILOTO TRASERO',
      'BUJE',
      'MOTOR ARRANQUE',
      'TRAPECIO',
      'CERRADURA',
      'MOTOVENTILADOR',
      'ALTERNADOR',
      'LUNA RETROVISOR',
      'MANGUITO',
      'CORREA',
      'SENSOR',
    ],
    workspace: 'Herramienta de taller',
    noscript:
      'Active JavaScript para usar esta herramienta. También puede escribir a {email} si tiene preguntas sobre Parts Relay.',
    form: {
      overline: 'Identificación del vehículo',
      heading: 'Compruebe un VIN antes de enviarlo',
      text: 'Copie el número del vehículo o de la orden de reparación. Se comprueban su longitud y sus caracteres. Su distribuidor puede verificar el vehículo y sus recambios en su catálogo.',
      vin: 'Número de identificación del vehículo (VIN)',
      vehicle: 'Descripción del vehículo (opcional)',
      submit: 'Comprobar formato',
      error:
        'Introduzca 17 letras y números. Un VIN usa los dígitos 0 y 1 y excluye las letras I, O y Q.',
    },
    result: {
      overline: 'Comprobación de formato',
      heading: 'El VIN tiene el formato esperado',
      text: 'Contiene 17 caracteres válidos. Compare el número con el vehículo antes de pedir al mostrador que compruebe la compatibilidad.',
      checked: 'VIN introducido',
      edit: 'Editar datos del vehículo',
    },
    panel: ['Identificación del vehículo', '17 caracteres'],
    app: {
      label: 'En la aplicación web de Parts Relay',
      title: 'Buscar por matrícula o VIN',
      text: 'En Parts Relay, elija «New search» y luego «Plate» o «VIN». Introdúzcalo junto con el recambio que busca. Si el catálogo identifica el vehículo, verá su descripción y, cuando esté disponible, su VIN.',
      notes: [
        [
          'Aparece un vehículo',
          '¿Coinciden la marca y el modelo con la orden de reparación? Si la descripción es de otro coche, revise las letras y los números de la matrícula.',
        ],
        [
          'El catálogo muestra recambios',
          'Lea la descripción de equipo original (OE) del fabricante en su sección del catálogo. Dos descripciones parecidas pueden referirse a un conjunto completo y a una pieza de su interior.',
        ],
        [
          '«Vehicle not found»',
          'Si la matrícula es correcta y una segunda búsqueda sigue sin dar resultados, puede que el catálogo no tenga ningún registro de ese vehículo.',
        ],
      ],
    },
    fitment: {
      label: 'Datos de montaje',
      title: 'Lo que el VIN no aclara',
      card: ['IDENTIFICACIÓN VEHÍCULO', '17 caracteres'],
      padsAlt: 'Disco y dos pastillas de freno en un despiece',
      alternatorAlt: 'Alternador con conector y puntos de fijación',
      tiles: [
        [
          'Identidad del vehículo',
          'Lea el VIN en el propio vehículo si el número de la orden de trabajo no está claro.',
        ],
        [
          'Alcance de la reparación',
          'Un despiece del eje delantero puede mostrar el disco y sus pastillas juntos. ¿Cuál de ellos ha pedido el mecánico?',
        ],
        [
          'Equipamiento montado',
          'Si dos alternadores se parecen, el conector o las marcas de la carcasa permiten distinguirlos.',
        ],
        [
          'El vehículo en la consulta',
          'Incluya los datos del vehículo en el mensaje que pasa al mostrador. Guarde la referencia presupuestada por el proveedor con la misma orden de reparación.',
        ],
      ],
    },
    reading: {
      label: 'Leer un VIN',
      title: 'Cuando un carácter cuesta leerlo',
      steps: [
        [
          'Revise los caracteres',
          'El VIN de 17 caracteres combina letras y números. Un carácter redondo puede ser un cero y uno recto, el número uno. Las letras I, O y Q están excluidas.',
        ],
        [
          'Reléalo por grupos',
          'Pida a un compañero que lea en el vehículo mientras usted sigue el número escrito. Dos caracteres válidos en el orden equivocado pueden pasar igualmente una comprobación de formato.',
        ],
        [
          'Consulte el vehículo',
          'Para un vehículo vendido en Estados Unidos, el decodificador federal de VIN ayuda a identificar la marca, el modelo y el motor. Introduzca el VIN directamente en el sitio de la agencia.',
        ],
      ],
      decoder: 'Abrir el decodificador de VIN de la NHTSA',
    },
    counter: {
      label: 'En el mostrador',
      title: 'Dos entradas llamadas «juego de pastillas»',
      text: 'El mecánico puede decirle en qué eje trabaja y qué frenos lleva el coche. Pase esos datos al mostrador para que acote el juego y presupueste los accesorios que necesite el trabajo.',
      link: 'Leer la guía del mostrador',
      alt: 'Un asesor de servicio muestra a un distribuidor la pestaña de fijación dañada de un faro.',
    },
    closing: {
      title: '¿Qué necesita el taller?',
      text: 'Añada la descripción del recambio y la cantidad a los datos del vehículo antes de contactar con el distribuidor.',
      primary: 'Leer la guía del vehículo',
    },
  },
  it: {
    title: 'Controllare il formato di un VIN | Parts Relay',
    description:
      'Controlli lunghezza e caratteri di un VIN di 17 caratteri prima di inviarlo a un distributore. È un controllo di formato: il veicolo lo conferma il suo fornitore.',
    label: 'Controllo del VIN',
    heading: 'Controlli il formato di un VIN',
    intro:
      'Un carattere sbagliato può indirizzare la ricerca ricambi sul veicolo sbagliato. Controlli il VIN sull’ordine di riparazione prima di passarlo al distributore.',
    jump: 'Controlla un VIN',
    ticker: [
      'PASTIGLIE',
      'FANALINO',
      'MOZZO RUOTA',
      'MOTORINO',
      'BRACCIO',
      'SERRATURA',
      'VENTOLA',
      'ALTERNATORE',
      'VETRO SPECCHIO',
      'MANICOTTO',
      'CINGHIA',
      'SENSORE',
    ],
    workspace: 'Strumento per l’officina',
    noscript:
      'Attivi JavaScript per usare questo strumento. Per domande su Parts Relay può anche scrivere a {email}.',
    form: {
      overline: 'Identificazione del veicolo',
      heading: 'Controlli un VIN prima di condividerlo',
      text: 'Copi il numero dal veicolo o dall’ordine di riparazione. Lo strumento ne controlla lunghezza e caratteri. Il distributore può verificare il veicolo e i ricambi nel suo catalogo.',
      vin: 'Numero di identificazione del veicolo (VIN)',
      vehicle: 'Descrizione del veicolo (facoltativa)',
      submit: 'Controlla formato',
      error:
        'Inserisca 17 lettere e cifre. Un VIN usa le cifre 0 e 1 ed esclude le lettere I, O e Q.',
    },
    result: {
      overline: 'Controllo del formato',
      heading: 'Il VIN ha il formato previsto',
      text: 'Contiene 17 caratteri ammessi. Confronti il numero con il veicolo prima di chiedere al banco di verificare la compatibilità.',
      checked: 'VIN inserito',
      edit: 'Modifica dati veicolo',
    },
    panel: ['Identificazione del veicolo', '17 caratteri'],
    app: {
      label: 'Nella web app di Parts Relay',
      title: 'Cercare per targa o VIN',
      text: 'In Parts Relay scelga «New search» e poi «Plate» o «VIN». Lo inserisca insieme al ricambio che cerca. Se il catalogo identifica il veicolo, ne vedrà la descrizione e, se disponibile, il VIN.',
      notes: [
        [
          'Viene trovato un veicolo',
          'Marca e modello corrispondono all’ordine di riparazione? Se la descrizione riguarda un’altra auto, controlli lettere e numeri della targa.',
        ],
        [
          'Il catalogo elenca i ricambi',
          'Legga la descrizione originale (OE) del costruttore nella sua sezione di catalogo. Due descrizioni simili possono indicare un gruppo completo e un pezzo al suo interno.',
        ],
        [
          '«Vehicle not found»',
          'Se la targa è giusta e anche una seconda ricerca non dà risultati, il catalogo potrebbe non avere dati per quel veicolo.',
        ],
      ],
    },
    fitment: {
      label: 'Dati di montaggio',
      title: 'Cosa il VIN non dice',
      card: ['IDENTIFICAZIONE VEICOLO', '17 caratteri'],
      padsAlt: 'Disco e due pastiglie freno in un esploso',
      alternatorAlt: 'Alternatore con connettore e punti di fissaggio',
      tiles: [
        [
          'Identità del veicolo',
          'Legga il VIN direttamente sul veicolo se il numero sulla scheda di lavoro non è chiaro.',
        ],
        [
          'Entità della riparazione',
          'Un esploso dell’asse anteriore può mostrare insieme il disco e le pastiglie. Quale dei due ha chiesto il meccanico?',
        ],
        [
          'Equipaggiamento montato',
          'Se due alternatori si somigliano, il connettore o le marcature sulla carcassa permettono di distinguerli.',
        ],
        [
          'Il veicolo nella richiesta',
          'Inserisca i dati del veicolo nel messaggio che passa al banco. Conservi il codice quotato dal fornitore insieme allo stesso ordine di riparazione.',
        ],
      ],
    },
    reading: {
      label: 'Leggere un VIN',
      title: 'Quando un carattere è difficile da leggere',
      steps: [
        [
          'Controlli i caratteri',
          'Il VIN di 17 caratteri usa lettere e cifre. Un carattere tondo può essere uno zero, uno dritto il numero uno. Le lettere I, O e Q sono escluse.',
        ],
        [
          'Lo rilegga a gruppi',
          'Chieda a un collega di leggere sul veicolo mentre lei segue il numero scritto. Due caratteri validi in ordine sbagliato possono comunque superare un controllo di formato.',
        ],
        [
          'Cerchi il veicolo',
          'Per un veicolo venduto negli Stati Uniti, il decodificatore VIN federale aiuta a identificare marca, modello e motore. Inserisca il VIN direttamente sul sito dell’agenzia.',
        ],
      ],
      decoder: 'Apri il decodificatore VIN della NHTSA',
    },
    counter: {
      label: 'Al banco ricambi',
      title: 'Due voci chiamate «kit pastiglie»',
      text: 'Il meccanico può dirle su quale asse sta lavorando e quali freni sono montati. Passi questi dati al banco, così potrà restringere la scelta del kit e quotare gli accessori che servono al lavoro.',
      link: 'Leggi la guida al banco',
      alt: 'Un accettatore d’officina mostra a un distributore la linguetta di fissaggio danneggiata di un faro.',
    },
    closing: {
      title: 'Di cosa ha bisogno l’officina?',
      text: 'Aggiunga ai dati del veicolo la descrizione del ricambio e la quantità prima di contattare il distributore.',
      primary: 'Leggi la guida al veicolo',
    },
  },
};
