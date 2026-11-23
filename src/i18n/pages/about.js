// About page text in every language. Labels from the Parts Relay app itself
// (New search, No category matched) stay in English because the app is in English.

export const about = {
  en: {
    title: 'About Parts Relay | Find car parts from a plate or VIN',
    description:
      'Parts Relay is a web app for parts distributors and the repair shops they supply. See how plate and VIN searches, WhatsApp contacts, roles and the search queue work.',
    heading: 'About Parts Relay',
    heroText:
      'Parts Relay is a web app for parts distributors and the repair shops they supply. Staff enter a registration plate or VIN and the part they need, and get back the vehicle, the original parts and any aftermarket matches. Workshops you add as contacts run the same search by WhatsApp. Parts Relay does not sell parts. The supplying branch still quotes the price and checks stock.',
    talk: 'Talk to our team',
    chapters: [
      {
        label: 'The people using it',
        title: 'From the service desk to the parts counter',
        text: 'A customer describes what happened to the car. The technician sees what broke. A distributor may have neither the car nor the repair order in front of them. Parts Relay gives the people answering parts enquiries a company record of the vehicle and the component somebody asked them to find.',
        points: [
          [
            'At the repair shop',
            'A workshop whose WhatsApp number has been added as a contact searches parts by sending a message. Any other number gets a reply asking it to contact the company.',
          ],
          [
            'At the distributor',
            'Staff choose New search and enter a registration plate or VIN and the part needed. Searches from the counter and from WhatsApp share one queue.',
          ],
        ],
      },
      {
        label: 'Catalogue coverage',
        title: 'Which parts appear in a search?',
        text: 'The vehicle catalogue determines the results. An entry can include the manufacturer’s reference, a description and an exploded view. Some entries also carry aftermarket cross-references.',
        points: [
          [
            'Identification',
            'The counter uses the vehicle, equipment and markings from the old part to choose between entries.',
          ],
          [
            'Availability',
            'The branch supplying the part quotes its price and checks stock and lead time.',
          ],
        ],
      },
      {
        label: 'Working together',
        title: 'A company account across shifts',
        text: 'A colleague taking over a job can reopen an earlier search, see its progress and read the references it found. An unresolved plate or part description stays visible to the team.',
        points: [
          [
            'Access',
            'There are three roles. The owner manages the company and the team. Admins manage WhatsApp contacts and can invite or remove viewers. Viewers run searches and see contacts. Everyone signs in with Google or a link sent by email.',
          ],
          [
            'Language and country',
            'Parts Relay is available in English and Italian, chosen on each device. The owner sets the company’s country, and plates are searched in that country.',
          ],
        ],
      },
    ],
    faqLabel: 'Before you get in touch',
    faqTitle: 'Questions buyers ask first',
    faq: [
      [
        'What is Parts Relay?',
        'A web app for parts distributors and the repair shops they supply. It finds original and aftermarket car parts from a registration plate or VIN, lets workshops search by WhatsApp, and keeps every search in one company queue.',
      ],
      [
        'How would my parts counter use it?',
        'Staff choose New search, pick Plate or VIN, and enter it with the part needed. The result shows the vehicle the catalogue identified, the original parts with their OEM codes and exploded views, and any aftermarket matches. Anyone on the team can reopen that search later from the search queue.',
      ],
      [
        'Can my shop request any part?',
        'A search returns what the vehicle catalogue lists for that plate or VIN. If the status is No category matched, try a more specific part name or its position.',
      ],
      [
        'How do I find out whether it covers my vehicles?',
        'Plates are searched in the country set for your company, and 33 countries are available: the EU and EEA countries, Switzerland, the United Kingdom and the United States. To check your own work, email two recent enquiries to contact@reasonandrender.com.',
      ],
      [
        'Does Parts Relay sell parts or quote prices?',
        'No. Results are identification guidance. The supplying branch quotes the price and checks stock and lead time, and fitment should be confirmed before purchase.',
      ],
    ],
    closeLabel: 'Evaluating Parts Relay',
    closeTitle: 'Would it cover the jobs you see?',
    closeText: [
      'For a discussion about your shop, bring two recent enquiries. Pick one you answered easily and one that took another phone call. They give the team a way to check catalogue coverage against your own work and identify any follow-up you would still do with a supplier.',
      'Tell us which country your vehicles are registered in and which shop software you use. We can discuss coverage and the workflow your team needs.',
    ],
    contact: 'Contact the Parts Relay team',
  },
  de: {
    title: 'Über Parts Relay | Autoteile über Kennzeichen oder FIN finden',
    description:
      'Parts Relay ist eine Web-App für Teilehändler und die Werkstätten, die sie beliefern. So funktionieren Suchen per Kennzeichen und FIN, WhatsApp-Kontakte, Rollen und die Suchliste.',
    heading: 'Über Parts Relay',
    heroText:
      'Parts Relay ist eine Web-App für Teilehändler und die Werkstätten, die sie beliefern. Mitarbeiter geben ein Kennzeichen oder eine FIN und das benötigte Teil ein und erhalten das Fahrzeug, die Originalteile und passende Aftermarket-Teile. Werkstätten, die Sie als Kontakte anlegen, starten dieselbe Suche per WhatsApp. Parts Relay verkauft keine Teile. Preis und Bestand prüft weiterhin die liefernde Filiale.',
    talk: 'Mit unserem Team sprechen',
    chapters: [
      {
        label: 'Wer damit arbeitet',
        title: 'Von der Serviceannahme bis zur Teiletheke',
        text: 'Der Kunde beschreibt, was mit dem Auto passiert ist. Der Mechaniker sieht, was kaputt ist. Der Händler hat oft weder das Auto noch den Reparaturauftrag vor sich. Parts Relay gibt den Leuten, die Teileanfragen beantworten, einen gemeinsamen Datensatz zum Fahrzeug und zum gesuchten Bauteil.',
        points: [
          [
            'In der Werkstatt',
            'Eine Werkstatt, deren WhatsApp-Nummer als Kontakt angelegt ist, sucht Teile per Nachricht. Jede andere Nummer erhält eine Antwort mit der Bitte, sich an das Unternehmen zu wenden.',
          ],
          [
            'Beim Händler',
            'Mitarbeiter wählen „New search“ und geben Kennzeichen oder FIN und das benötigte Teil ein. Suchen von der Theke und per WhatsApp landen in derselben Liste.',
          ],
        ],
      },
      {
        label: 'Katalogabdeckung',
        title: 'Welche Teile zeigt eine Suche?',
        text: 'Die Ergebnisse kommen aus dem Fahrzeugkatalog. Ein Eintrag kann die OE-Nummer des Herstellers, eine Bezeichnung und eine Explosionszeichnung enthalten. Manche Einträge haben auch Aftermarket-Vergleichsnummern.',
        points: [
          [
            'Identifizierung',
            'Die Theke wählt anhand von Fahrzeug, Ausstattung und Kennzeichnungen am Altteil zwischen den Einträgen.',
          ],
          [
            'Verfügbarkeit',
            'Die liefernde Filiale nennt den Preis und prüft Bestand und Lieferzeit.',
          ],
        ],
      },
      {
        label: 'Zusammenarbeit',
        title: 'Ein Firmenkonto über alle Schichten',
        text: 'Wer einen Auftrag übernimmt, kann eine frühere Suche wieder öffnen, ihren Stand sehen und die gefundenen Nummern lesen. Ein ungeklärtes Kennzeichen oder eine ungeklärte Teilebezeichnung bleibt für das Team sichtbar.',
        points: [
          [
            'Zugriff',
            'Es gibt drei Rollen. Der Inhaber verwaltet das Unternehmen und das Team. Admins verwalten die WhatsApp-Kontakte und können Leser einladen oder entfernen. Leser führen Suchen durch und sehen die Kontakte. Alle melden sich mit Google oder einem Link per E-Mail an.',
          ],
          [
            'Sprache und Land',
            'Parts Relay gibt es auf Englisch und Italienisch, einstellbar auf jedem Gerät. Der Inhaber legt das Land des Unternehmens fest, und Kennzeichen werden in diesem Land gesucht.',
          ],
        ],
      },
    ],
    faqLabel: 'Bevor Sie uns schreiben',
    faqTitle: 'Was Interessenten zuerst fragen',
    faq: [
      [
        'Was ist Parts Relay?',
        'Eine Web-App für Teilehändler und die Werkstätten, die sie beliefern. Sie findet Original- und Aftermarket-Teile über Kennzeichen oder FIN, lässt Werkstätten per WhatsApp suchen und hält jede Suche in einer gemeinsamen Liste des Unternehmens.',
      ],
      [
        'Wie würde meine Teiletheke es nutzen?',
        'Mitarbeiter wählen „New search“, entscheiden sich für Kennzeichen oder FIN und geben es mit dem benötigten Teil ein. Das Ergebnis zeigt das vom Katalog erkannte Fahrzeug, die Originalteile mit OE-Nummern und Explosionszeichnungen sowie passende Aftermarket-Teile. Jeder im Team kann die Suche später aus der Suchliste wieder öffnen.',
      ],
      [
        'Kann meine Werkstatt jedes Teil anfragen?',
        'Eine Suche liefert, was der Fahrzeugkatalog für dieses Kennzeichen oder diese FIN führt. Lautet der Status „No category matched“, versuchen Sie eine genauere Teilebezeichnung oder die Einbauposition.',
      ],
      [
        'Wie finde ich heraus, ob meine Fahrzeuge abgedeckt sind?',
        'Kennzeichen werden in dem Land gesucht, das für Ihr Unternehmen eingestellt ist. 33 Länder stehen zur Wahl: die EU- und EWR-Staaten, die Schweiz, das Vereinigte Königreich und die USA. Um es an Ihren eigenen Aufträgen zu prüfen, schicken Sie zwei aktuelle Anfragen an contact@reasonandrender.com.',
      ],
      [
        'Verkauft Parts Relay Teile oder nennt es Preise?',
        'Nein. Die Ergebnisse helfen bei der Identifizierung. Preis, Bestand und Lieferzeit prüft die liefernde Filiale, und die Passform sollte vor dem Kauf bestätigt werden.',
      ],
    ],
    closeLabel: 'Parts Relay testen',
    closeTitle: 'Deckt es Ihre Aufträge ab?',
    closeText: [
      'Bringen Sie für ein Gespräch über Ihren Betrieb zwei aktuelle Anfragen mit: eine, die Sie leicht beantworten konnten, und eine, die einen weiteren Anruf brauchte. Damit kann das Team die Katalogabdeckung an Ihren eigenen Aufträgen prüfen und zeigen, was Sie weiterhin mit einem Lieferanten klären müssten.',
      'Sagen Sie uns, in welchem Land Ihre Fahrzeuge zugelassen sind und welche Werkstattsoftware Sie nutzen. Dann sprechen wir über die Abdeckung und den Ablauf, den Ihr Team braucht.',
    ],
    contact: 'Das Parts Relay Team kontaktieren',
  },
  fr: {
    title: 'À propos de Parts Relay | Trouver des pièces auto par plaque ou VIN',
    description:
      'Parts Relay est une application web pour les distributeurs de pièces et les garages qu’ils approvisionnent. Découvrez les recherches par plaque et VIN, les contacts WhatsApp, les rôles et la file de recherches.',
    heading: 'À propos de Parts Relay',
    heroText:
      'Parts Relay est une application web pour les distributeurs de pièces et les garages qu’ils approvisionnent. Le personnel saisit une plaque d’immatriculation ou un VIN et la pièce recherchée, et obtient le véhicule, les pièces d’origine et les équivalences adaptables. Les garages que vous ajoutez comme contacts lancent la même recherche par WhatsApp. Parts Relay ne vend pas de pièces. C’est toujours l’agence qui fournit la pièce qui donne le prix et vérifie le stock.',
    talk: 'Parler à notre équipe',
    chapters: [
      {
        label: 'Qui l’utilise',
        title: 'De la réception atelier au comptoir pièces',
        text: 'Le client décrit ce qui est arrivé à la voiture. Le mécanicien voit ce qui a cassé. Le distributeur n’a souvent ni la voiture ni l’ordre de réparation sous les yeux. Parts Relay donne à ceux qui répondent aux demandes de pièces une fiche commune du véhicule et du composant recherché.',
        points: [
          [
            'Au garage',
            'Un garage dont le numéro WhatsApp a été ajouté comme contact cherche des pièces en envoyant un message. Tout autre numéro reçoit une réponse l’invitant à contacter l’entreprise.',
          ],
          [
            'Chez le distributeur',
            'Le personnel choisit « New search » et saisit une plaque ou un VIN et la pièce recherchée. Les recherches du comptoir et de WhatsApp arrivent dans la même file.',
          ],
        ],
      },
      {
        label: 'Couverture du catalogue',
        title: 'Quelles pièces apparaissent dans une recherche ?',
        text: 'Les résultats dépendent du catalogue véhicule. Une entrée peut comporter la référence OE du constructeur, une désignation et une vue éclatée. Certaines entrées ont aussi des correspondances adaptables.',
        points: [
          [
            'Identification',
            'Le comptoir s’appuie sur le véhicule, l’équipement et les marquages de l’ancienne pièce pour choisir entre les entrées.',
          ],
          [
            'Disponibilité',
            'L’agence qui fournit la pièce donne son prix et vérifie le stock et le délai.',
          ],
        ],
      },
      {
        label: 'Travailler ensemble',
        title: 'Un compte d’entreprise d’une équipe à l’autre',
        text: 'Un collègue qui reprend un dossier peut rouvrir une recherche antérieure, voir où elle en est et lire les références trouvées. Une plaque ou une désignation non résolue reste visible pour l’équipe.',
        points: [
          [
            'Accès',
            'Il existe trois rôles. Le propriétaire gère l’entreprise et l’équipe. Les administrateurs gèrent les contacts WhatsApp et peuvent inviter ou retirer des lecteurs. Les lecteurs lancent des recherches et voient les contacts. Chacun se connecte avec Google ou un lien reçu par e-mail.',
          ],
          [
            'Langue et pays',
            'Parts Relay est disponible en anglais et en italien, au choix sur chaque appareil. Le propriétaire définit le pays de l’entreprise, et les plaques sont recherchées dans ce pays.',
          ],
        ],
      },
    ],
    faqLabel: 'Avant de nous contacter',
    faqTitle: 'Les premières questions des clients',
    faq: [
      [
        'Qu’est-ce que Parts Relay ?',
        'Une application web pour les distributeurs de pièces et les garages qu’ils approvisionnent. Elle trouve les pièces auto d’origine et adaptables à partir d’une plaque ou d’un VIN, permet aux garages de chercher par WhatsApp et regroupe chaque recherche dans une même file de l’entreprise.',
      ],
      [
        'Comment mon comptoir pièces l’utiliserait-il ?',
        'Le personnel choisit « New search », opte pour la plaque ou le VIN et le saisit avec la pièce recherchée. Le résultat affiche le véhicule identifié par le catalogue, les pièces d’origine avec leurs références OE et leurs vues éclatées, et les équivalences adaptables. Tout membre de l’équipe peut rouvrir cette recherche plus tard depuis la file de recherches.',
      ],
      [
        'Mon garage peut-il demander n’importe quelle pièce ?',
        'Une recherche renvoie ce que le catalogue véhicule répertorie pour cette plaque ou ce VIN. Si le statut est « No category matched », essayez une désignation plus précise ou la position de la pièce.',
      ],
      [
        'Comment savoir si mes véhicules sont couverts ?',
        'Les plaques sont recherchées dans le pays défini pour votre entreprise, et 33 pays sont disponibles : les pays de l’UE et de l’EEE, la Suisse, le Royaume-Uni et les États-Unis. Pour tester avec vos propres dossiers, envoyez deux demandes récentes à contact@reasonandrender.com.',
      ],
      [
        'Parts Relay vend-il des pièces ou donne-t-il des prix ?',
        'Non. Les résultats aident à l’identification. L’agence qui fournit la pièce donne le prix et vérifie le stock et le délai, et le montage doit être confirmé avant l’achat.',
      ],
    ],
    closeLabel: 'Évaluer Parts Relay',
    closeTitle: 'Couvrirait-il vos travaux ?',
    closeText: [
      'Pour parler de votre activité, apportez deux demandes récentes : une à laquelle vous avez répondu facilement et une qui a demandé un appel de plus. L’équipe pourra ainsi comparer la couverture du catalogue à votre propre travail et repérer ce qu’il vous faudrait encore régler avec un fournisseur.',
      'Indiquez-nous le pays d’immatriculation de vos véhicules et le logiciel de garage que vous utilisez. Nous pourrons parler de la couverture et de la méthode de travail dont votre équipe a besoin.',
    ],
    contact: 'Contacter l’équipe Parts Relay',
  },
  es: {
    title: 'Sobre Parts Relay | Encuentre recambios por matrícula o VIN',
    description:
      'Parts Relay es una aplicación web para distribuidores de recambios y los talleres a los que suministran. Vea cómo funcionan las búsquedas por matrícula y VIN, los contactos de WhatsApp, los roles y la cola de búsquedas.',
    heading: 'Sobre Parts Relay',
    heroText:
      'Parts Relay es una aplicación web para distribuidores de recambios y los talleres a los que suministran. El personal introduce una matrícula o un VIN y el recambio que necesita, y obtiene el vehículo, las piezas originales y las equivalencias aftermarket. Los talleres que usted añade como contactos hacen la misma búsqueda por WhatsApp. Parts Relay no vende recambios. La sucursal que suministra la pieza sigue dando el precio y comprobando el stock.',
    talk: 'Hablar con nuestro equipo',
    chapters: [
      {
        label: 'Quién lo usa',
        title: 'De la recepción del taller al mostrador',
        text: 'El cliente cuenta qué le pasó al coche. El mecánico ve qué se rompió. El distribuidor quizá no tenga delante ni el coche ni la orden de reparación. Parts Relay da a quienes responden las consultas de recambios un registro común del vehículo y del componente que alguien les pidió buscar.',
        points: [
          [
            'En el taller',
            'Un taller cuyo número de WhatsApp se ha añadido como contacto busca recambios enviando un mensaje. Cualquier otro número recibe una respuesta que le pide contactar con la empresa.',
          ],
          [
            'En el distribuidor',
            'El personal elige «New search» e introduce una matrícula o un VIN y el recambio necesario. Las búsquedas del mostrador y de WhatsApp comparten una misma cola.',
          ],
        ],
      },
      {
        label: 'Cobertura del catálogo',
        title: '¿Qué piezas aparecen en una búsqueda?',
        text: 'Los resultados dependen del catálogo de vehículos. Una entrada puede incluir la referencia OE del fabricante, una descripción y un despiece. Algunas entradas también tienen equivalencias aftermarket.',
        points: [
          [
            'Identificación',
            'El mostrador se guía por el vehículo, el equipamiento y las marcas de la pieza vieja para elegir entre las entradas.',
          ],
          [
            'Disponibilidad',
            'La sucursal que suministra la pieza da su precio y comprueba el stock y el plazo de entrega.',
          ],
        ],
      },
      {
        label: 'Trabajo en equipo',
        title: 'Una cuenta de empresa para todos los turnos',
        text: 'Un compañero que retoma un trabajo puede reabrir una búsqueda anterior, ver su avance y leer las referencias encontradas. Una matrícula o descripción sin resolver sigue a la vista del equipo.',
        points: [
          [
            'Acceso',
            'Hay tres roles. El propietario gestiona la empresa y el equipo. Los administradores gestionan los contactos de WhatsApp y pueden invitar o quitar lectores. Los lectores hacen búsquedas y ven los contactos. Todos inician sesión con Google o con un enlace enviado por correo.',
          ],
          [
            'Idioma y país',
            'Parts Relay está disponible en inglés e italiano, a elegir en cada dispositivo. El propietario fija el país de la empresa, y las matrículas se buscan en ese país.',
          ],
        ],
      },
    ],
    faqLabel: 'Antes de contactarnos',
    faqTitle: 'Lo primero que preguntan los clientes',
    faq: [
      [
        '¿Qué es Parts Relay?',
        'Una aplicación web para distribuidores de recambios y los talleres a los que suministran. Encuentra recambios originales y aftermarket a partir de una matrícula o un VIN, permite a los talleres buscar por WhatsApp y guarda cada búsqueda en una misma cola de la empresa.',
      ],
      [
        '¿Cómo lo usaría mi mostrador?',
        'El personal elige «New search», escoge matrícula o VIN y lo introduce con el recambio necesario. El resultado muestra el vehículo que identificó el catálogo, las piezas originales con sus referencias OE y despieces, y las equivalencias aftermarket. Cualquiera del equipo puede reabrir esa búsqueda más tarde desde la cola de búsquedas.',
      ],
      [
        '¿Puede mi taller pedir cualquier recambio?',
        'Una búsqueda devuelve lo que el catálogo de vehículos recoge para esa matrícula o ese VIN. Si el estado es «No category matched», pruebe con un nombre de pieza más concreto o con su posición.',
      ],
      [
        '¿Cómo sé si cubre mis vehículos?',
        'Las matrículas se buscan en el país configurado para su empresa, y hay 33 países disponibles: los países de la UE y del EEE, Suiza, el Reino Unido y Estados Unidos. Para probarlo con su propio trabajo, envíe dos consultas recientes a contact@reasonandrender.com.',
      ],
      [
        '¿Parts Relay vende recambios o da precios?',
        'No. Los resultados son una ayuda para la identificación. La sucursal que suministra la pieza da el precio y comprueba el stock y el plazo, y el montaje debe confirmarse antes de la compra.',
      ],
    ],
    closeLabel: 'Evaluar Parts Relay',
    closeTitle: '¿Cubriría los trabajos que recibe?',
    closeText: [
      'Para hablar de su negocio, traiga dos consultas recientes: una que respondió fácilmente y otra que necesitó otra llamada. Así el equipo puede comprobar la cobertura del catálogo con su propio trabajo y ver qué tendría que seguir consultando con un proveedor.',
      'Díganos en qué país están matriculados sus vehículos y qué software de taller utiliza. Podemos hablar de la cobertura y del proceso que necesita su equipo.',
    ],
    contact: 'Contactar con el equipo de Parts Relay',
  },
  it: {
    title: 'Informazioni su Parts Relay | Trovare ricambi auto da targa o VIN',
    description:
      'Parts Relay è un’app web per i distributori di ricambi e le officine che riforniscono. Scopra come funzionano le ricerche per targa e VIN, i contatti WhatsApp, i ruoli e la coda delle ricerche.',
    heading: 'Informazioni su Parts Relay',
    heroText:
      'Parts Relay è un’app web per i distributori di ricambi e le officine che riforniscono. Il personale inserisce una targa o un VIN e il ricambio che serve, e riceve il veicolo, i ricambi originali e le eventuali corrispondenze aftermarket. Le officine che Lei aggiunge come contatti fanno la stessa ricerca via WhatsApp. Parts Relay non vende ricambi. Prezzo e disponibilità restano compito della filiale che fornisce il pezzo.',
    talk: 'Parli con il nostro team',
    chapters: [
      {
        label: 'Chi lo usa',
        title: 'Dall’accettazione al banco ricambi',
        text: 'Il cliente racconta cosa è successo all’auto. Il meccanico vede cosa si è rotto. Il distributore spesso non ha davanti né l’auto né l’ordine di riparazione. Parts Relay dà a chi risponde alle richieste ricambi una scheda aziendale del veicolo e del componente da trovare.',
        points: [
          [
            'In officina',
            'Un’officina il cui numero WhatsApp è stato aggiunto come contatto cerca ricambi inviando un messaggio. Qualsiasi altro numero riceve una risposta che invita a contattare l’azienda.',
          ],
          [
            'Dal distributore',
            'Il personale sceglie «New search» e inserisce una targa o un VIN e il ricambio che serve. Le ricerche dal banco e da WhatsApp finiscono nella stessa coda.',
          ],
        ],
      },
      {
        label: 'Copertura del catalogo',
        title: 'Quali ricambi compaiono in una ricerca?',
        text: 'I risultati dipendono dal catalogo veicoli. Una voce può riportare il codice OE del costruttore, una descrizione e un esploso. Alcune voci hanno anche corrispondenze aftermarket.',
        points: [
          [
            'Identificazione',
            'Il banco sceglie tra le voci in base a veicolo, allestimento e marcature del pezzo vecchio.',
          ],
          [
            'Disponibilità',
            'La filiale che fornisce il pezzo indica il prezzo e verifica disponibilità e tempi di consegna.',
          ],
        ],
      },
      {
        label: 'Lavorare insieme',
        title: 'Un account aziendale per tutti i turni',
        text: 'Un collega che subentra in un lavoro può riaprire una ricerca precedente, vederne l’avanzamento e leggere i codici trovati. Una targa o una descrizione non risolta resta visibile al team.',
        points: [
          [
            'Accesso',
            'Ci sono tre ruoli. Il titolare gestisce l’azienda e il team. Gli amministratori gestiscono i contatti WhatsApp e possono invitare o rimuovere i lettori. I lettori fanno ricerche e vedono i contatti. Tutti accedono con Google o con un link inviato via email.',
          ],
          [
            'Lingua e paese',
            'Parts Relay è disponibile in inglese e in italiano, a scelta su ogni dispositivo. Il titolare imposta il paese dell’azienda e le targhe vengono cercate in quel paese.',
          ],
        ],
      },
    ],
    faqLabel: 'Prima di contattarci',
    faqTitle: 'Le prime domande dei clienti',
    faq: [
      [
        'Che cos’è Parts Relay?',
        'Un’app web per i distributori di ricambi e le officine che riforniscono. Trova ricambi auto originali e aftermarket partendo da una targa o da un VIN, permette alle officine di cercare via WhatsApp e tiene ogni ricerca in un’unica coda aziendale.',
      ],
      [
        'Come lo userebbe il mio banco ricambi?',
        'Il personale sceglie «New search», seleziona targa o VIN e lo inserisce insieme al ricambio che serve. Il risultato mostra il veicolo identificato dal catalogo, i ricambi originali con i codici OE e gli esplosi, e le eventuali corrispondenze aftermarket. Chiunque nel team può riaprire quella ricerca in seguito dalla coda delle ricerche.',
      ],
      [
        'La mia officina può richiedere qualsiasi ricambio?',
        'Una ricerca restituisce ciò che il catalogo veicoli riporta per quella targa o quel VIN. Se lo stato è «No category matched», provi con un nome del ricambio più preciso o con la sua posizione.',
      ],
      [
        'Come scopro se copre i miei veicoli?',
        'Le targhe vengono cercate nel paese impostato per la sua azienda, e sono disponibili 33 paesi: i paesi dell’UE e del SEE, la Svizzera, il Regno Unito e gli Stati Uniti. Per verificarlo sul suo lavoro, invii due richieste recenti a contact@reasonandrender.com.',
      ],
      [
        'Parts Relay vende ricambi o fa preventivi?',
        'No. I risultati sono un aiuto all’identificazione. La filiale che fornisce il pezzo indica il prezzo e verifica disponibilità e tempi di consegna, e la compatibilità va confermata prima dell’acquisto.',
      ],
    ],
    closeLabel: 'Valutare Parts Relay',
    closeTitle: 'Coprirebbe i lavori che riceve?',
    closeText: [
      'Per parlare della sua attività, porti due richieste recenti: una a cui ha risposto facilmente e una che ha richiesto un’altra telefonata. Così il team può verificare la copertura del catalogo sul suo lavoro e individuare cosa dovrebbe ancora chiarire con un fornitore.',
      'Ci dica in quale paese sono immatricolati i suoi veicoli e quale gestionale d’officina usa. Potremo parlare della copertura e del flusso di lavoro di cui il suo team ha bisogno.',
    ],
    contact: 'Contatti il team di Parts Relay',
  },
};
