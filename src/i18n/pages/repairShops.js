// Repair shops page text in every language.

export const repairShops = {
  en: {
    title: 'Parts Relay for repair shops | Send parts requests to your distributor',
    description:
      'How repair shops use Parts Relay: search parts by sending your distributor a WhatsApp message with the plate or VIN and the part, and what to put in it.',
    label: 'For repair shops',
    heading: 'Parts Relay for repair shops',
    heroNote:
      'If your distributor uses Parts Relay and has enabled your workshop as a contact, your advisers can search parts by sending it a WhatsApp message with the plate or VIN and the part they need. Below is what to put in that request so the counter can answer it.',
    talk: 'Talk to our team',
    intro: {
      label: 'At the service desk',
      title: 'The shop needs a rear caliper. Does it come with the carrier?',
      text: [
        'A request for “rear brakes” leaves the counter to work out whether you mean a pad set, a caliper or its carrier. If the technician has already identified the caliper, put that on the enquiry.',
        'Get the side and parking-brake mechanism from the bay while the car is there. If you are waiting on either detail, say which one.',
      ],
      recordTitle: 'A note for the distributor',
      record: [
        [
          'Vehicle details',
          'Record the vehicle identifier from the repair order and confirm it against the car.',
        ],
        ['On the repair order', 'One rear brake caliper'],
        [
          'From the technician',
          'Confirm the side and the parking-brake mechanism fitted to the car.',
        ],
        [
          'Question for the quote',
          '“Does your caliper include the carrier, or should I add it as a separate item?”',
        ],
      ],
    },
    principles: {
      label: 'Writing the enquiry',
      title: 'Before you call the distributor',
      items: [
        [
          'Check the vehicle in the bay',
          'Take the VIN from the vehicle in the bay. Read the model back against the repair order before you send it.',
        ],
        [
          'Use the technician’s part name',
          'If the note says “mirror cap,” keep those words. Changing it to “mirror” could get you a quote for the whole unit.',
        ],
        [
          'Say where it fits',
          'Give the axle and side when they matter. For an electrical part, ask whether the technician can read the old number or describe the plug.',
        ],
        [
          'Ask about the box',
          'Tell the counter if the repair depends on an extra fitting. For a caliper, ask whether the carrier comes with it.',
        ],
      ],
    },
    sending: {
      label: 'Sending it in',
      title: 'How your request reaches the desk',
      text: 'If the distributor has added your WhatsApp number as a contact, send the plate or VIN and the part you need to its Parts Relay number. A number that has not been added gets a reply asking it to contact the distributor. For a search at the counter, give the person at the desk the plate or VIN and the part.',
      recordTitle: 'When the counter gets back to you',
      record: [
        [
          'Vehicle identified',
          'Read the model and engine. Let the counter know if either differs from the car on the lift.',
        ],
        [
          'References returned',
          'Put the original part code beside its description on the estimate. Some results also have a drawing or an aftermarket reference.',
        ],
        [
          'Nothing matched',
          'A missing vehicle calls for another look at the plate. If the vehicle is right, ask the technician for a more precise part name or location.',
        ],
      ],
    },
    estimate: {
      label: 'At the estimate stage',
      title: 'Before you give the customer a date',
      exampleTitle: 'Put the technician’s wording on the enquiry',
      exampleText:
        'Write down the part, side and original number while the technician has the car, and put all three in the message to your distributor.',
      checkVin: 'Check the VIN',
      recordTitle: 'What belongs on the estimate',
      record: [
        ['Fit', 'Make sure the counter checked the position and equipment fitted to this car.'],
        ['Kit contents', 'Give a separately supplied seal, sensor or fitting its own line.'],
        [
          'Availability',
          'Get the quantity and collection or delivery time from the supplying branch.',
        ],
      ],
    },
  },
  de: {
    title: 'Parts Relay für Werkstätten | Teileanfragen an Ihren Händler senden',
    description:
      'So nutzen Werkstätten Parts Relay: Teile suchen per WhatsApp-Nachricht an Ihren Händler mit Kennzeichen oder FIN und dem Teil, und was in die Nachricht gehört.',
    label: 'Für Werkstätten',
    heading: 'Parts Relay für Werkstätten',
    heroNote:
      'Wenn Ihr Händler Parts Relay nutzt und Ihre Werkstatt als Kontakt freigeschaltet hat, können Ihre Serviceberater Teile suchen, indem sie ihm eine WhatsApp-Nachricht mit Kennzeichen oder FIN und dem benötigten Teil schicken. Hier steht, was in diese Anfrage gehört, damit die Theke sie beantworten kann.',
    talk: 'Mit unserem Team sprechen',
    intro: {
      label: 'In der Serviceannahme',
      title: 'Die Werkstatt braucht einen Bremssattel hinten. Ist der Bremsträger dabei?',
      text: [
        'Bei einer Anfrage nach „Bremse hinten“ muss die Theke herausfinden, ob Sie Beläge, einen Bremssattel oder dessen Träger meinen. Hat der Mechaniker den Sattel schon bestimmt, schreiben Sie das in die Anfrage.',
        'Klären Sie Seite und Feststellbremse in der Werkstatt, solange das Auto da ist. Fehlt noch eine der beiden Angaben, sagen Sie, welche.',
      ],
      recordTitle: 'Eine Notiz für den Händler',
      record: [
        [
          'Fahrzeugdaten',
          'Übernehmen Sie die Fahrzeugkennung aus dem Reparaturauftrag und gleichen Sie sie am Auto ab.',
        ],
        ['Laut Reparaturauftrag', 'Ein Bremssattel hinten'],
        ['Vom Mechaniker', 'Seite und verbaute Feststellbremse bestätigen.'],
        [
          'Frage zum Angebot',
          '„Ist der Bremsträger bei Ihrem Sattel dabei, oder soll ich ihn als eigene Position aufnehmen?“',
        ],
      ],
    },
    principles: {
      label: 'Die Anfrage schreiben',
      title: 'Bevor Sie den Händler anrufen',
      items: [
        [
          'Fahrzeug in der Werkstatt prüfen',
          'Nehmen Sie die FIN vom Fahrzeug in der Werkstatt. Gleichen Sie das Modell mit dem Reparaturauftrag ab, bevor Sie die Anfrage senden.',
        ],
        [
          'Die Bezeichnung des Mechanikers nutzen',
          'Steht in der Notiz „Spiegelkappe“, übernehmen Sie genau dieses Wort. Wird daraus „Spiegel“, bekommen Sie womöglich ein Angebot für den ganzen Spiegel.',
        ],
        [
          'Einbauort angeben',
          'Nennen Sie Achse und Seite, wenn es darauf ankommt. Fragen Sie bei Elektrikteilen, ob der Mechaniker die alte Nummer ablesen oder den Stecker beschreiben kann.',
        ],
        [
          'Nach dem Lieferumfang fragen',
          'Sagen Sie der Theke, wenn die Reparatur ein zusätzliches Befestigungsteil braucht. Fragen Sie beim Bremssattel, ob der Träger dabei ist.',
        ],
      ],
    },
    sending: {
      label: 'Anfrage senden',
      title: 'So kommt Ihre Anfrage an die Theke',
      text: 'Hat der Händler Ihre WhatsApp-Nummer als Kontakt hinzugefügt, senden Sie Kennzeichen oder FIN und das benötigte Teil an seine Parts Relay Nummer. Eine nicht hinzugefügte Nummer erhält als Antwort die Bitte, sich an den Händler zu wenden. Für eine Suche an der Theke nennen Sie der Person dort Kennzeichen oder FIN und das Teil.',
      recordTitle: 'Wenn sich die Theke zurückmeldet',
      record: [
        [
          'Fahrzeug erkannt',
          'Prüfen Sie Modell und Motor. Sagen Sie der Theke Bescheid, wenn eines davon nicht zum Auto auf der Bühne passt.',
        ],
        [
          'Nummern gefunden',
          'Setzen Sie die OE-Nummer neben ihre Bezeichnung im Kostenvoranschlag. Manche Ergebnisse enthalten auch eine Zeichnung oder eine Aftermarket-Nummer.',
        ],
        [
          'Kein Treffer',
          'Fehlt das Fahrzeug, prüfen Sie das Kennzeichen noch einmal. Stimmt das Fahrzeug, fragen Sie den Mechaniker nach einem genaueren Teilenamen oder Einbauort.',
        ],
      ],
    },
    estimate: {
      label: 'Beim Kostenvoranschlag',
      title: 'Bevor Sie dem Kunden einen Termin nennen',
      exampleTitle: 'Den Wortlaut des Mechanikers in die Anfrage übernehmen',
      exampleText:
        'Notieren Sie Teil, Seite und Originalnummer, solange der Mechaniker das Auto hat, und schreiben Sie alle drei in die Nachricht an Ihren Händler.',
      checkVin: 'FIN prüfen',
      recordTitle: 'Was in den Kostenvoranschlag gehört',
      record: [
        [
          'Passform',
          'Stellen Sie sicher, dass die Theke Einbauposition und Ausstattung dieses Autos geprüft hat.',
        ],
        [
          'Satzinhalt',
          'Geben Sie separat gelieferten Dichtungen, Sensoren oder Befestigungsteilen eine eigene Zeile.',
        ],
        [
          'Verfügbarkeit',
          'Lassen Sie sich Menge und Abhol- oder Lieferzeit von der liefernden Filiale geben.',
        ],
      ],
    },
  },
  fr: {
    title: 'Parts Relay pour les garages | Envoyez vos demandes de pièces à votre distributeur',
    description:
      'Comment les garages utilisent Parts Relay : cherchez des pièces en envoyant à votre distributeur un message WhatsApp avec la plaque ou le VIN et la pièce, et ce qu’il faut y mettre.',
    label: 'Pour les garages',
    heading: 'Parts Relay pour les garages',
    heroNote:
      'Si votre distributeur utilise Parts Relay et a activé votre garage comme contact, vos conseillers peuvent chercher des pièces en lui envoyant un message WhatsApp avec la plaque ou le VIN et la pièce recherchée. Voici ce qu’il faut mettre dans cette demande pour que le comptoir puisse y répondre.',
    talk: 'Parler à notre équipe',
    intro: {
      label: 'À la réception',
      title: 'Le garage a besoin d’un étrier arrière. La chape est-elle fournie ?',
      text: [
        'Une demande de « freins arrière » oblige le comptoir à deviner s’il s’agit d’un jeu de plaquettes, d’un étrier ou de sa chape. Si le technicien a déjà identifié l’étrier, indiquez-le dans la demande.',
        'Relevez le côté et le mécanisme de frein de stationnement à l’atelier tant que la voiture est là. S’il vous manque l’un des deux, dites lequel.',
      ],
      recordTitle: 'Une note pour le distributeur',
      record: [
        [
          'Données du véhicule',
          'Reprenez l’identifiant du véhicule sur l’ordre de réparation et vérifiez-le sur la voiture.',
        ],
        ['Sur l’ordre de réparation', 'Un étrier de frein arrière'],
        [
          'Du technicien',
          'Confirmer le côté et le mécanisme de frein de stationnement monté sur la voiture.',
        ],
        [
          'Question pour le devis',
          '« Votre étrier est-il livré avec la chape, ou dois-je l’ajouter comme article séparé ? »',
        ],
      ],
    },
    principles: {
      label: 'Rédiger la demande',
      title: 'Avant d’appeler le distributeur',
      items: [
        [
          'Vérifier le véhicule à l’atelier',
          'Relevez le VIN sur le véhicule à l’atelier. Comparez le modèle avec l’ordre de réparation avant d’envoyer la demande.',
        ],
        [
          'Reprendre les mots du technicien',
          'Si la note dit « coque de rétroviseur », gardez ces mots. Écrire « rétroviseur » pourrait vous valoir un devis pour l’ensemble complet.',
        ],
        [
          'Préciser l’emplacement',
          'Indiquez l’essieu et le côté quand ils comptent. Pour une pièce électrique, demandez si le technicien peut lire l’ancien numéro ou décrire la prise.',
        ],
        [
          'Demander le contenu',
          'Prévenez le comptoir si la réparation demande une fixation supplémentaire. Pour un étrier, demandez si la chape est fournie.',
        ],
      ],
    },
    sending: {
      label: 'Envoyer la demande',
      title: 'Comment votre demande arrive au comptoir',
      text: 'Si le distributeur a ajouté votre numéro WhatsApp comme contact, envoyez la plaque ou le VIN et la pièce recherchée à son numéro Parts Relay. Un numéro non ajouté reçoit une réponse l’invitant à contacter le distributeur. Pour une recherche au comptoir, donnez la plaque ou le VIN et la pièce à la personne au comptoir.',
      recordTitle: 'Quand le comptoir vous répond',
      record: [
        [
          'Véhicule identifié',
          'Lisez le modèle et le moteur. Signalez au comptoir si l’un des deux diffère de la voiture sur le pont.',
        ],
        [
          'Références trouvées',
          'Mettez la référence OE à côté de sa désignation sur le devis. Certains résultats comportent aussi un schéma ou une référence adaptable.',
        ],
        [
          'Aucun résultat',
          'Si le véhicule est introuvable, revérifiez la plaque. Si le véhicule est le bon, demandez au technicien un nom de pièce ou un emplacement plus précis.',
        ],
      ],
    },
    estimate: {
      label: 'Au moment du devis',
      title: 'Avant de donner une date au client',
      exampleTitle: 'Reprenez les mots du technicien dans la demande',
      exampleText:
        'Notez la pièce, le côté et le numéro d’origine pendant que le technicien a la voiture, et mettez les trois dans le message à votre distributeur.',
      checkVin: 'Vérifier le VIN',
      recordTitle: 'Ce qui doit figurer sur le devis',
      record: [
        [
          'Montage',
          'Assurez-vous que le comptoir a vérifié la position et l’équipement de cette voiture.',
        ],
        [
          'Contenu du kit',
          'Donnez une ligne à part à tout joint, capteur ou fixation fourni séparément.',
        ],
        [
          'Disponibilité',
          'Obtenez la quantité et le délai de retrait ou de livraison auprès de l’agence qui fournit la pièce.',
        ],
      ],
    },
  },
  es: {
    title: 'Parts Relay para talleres | Envíe consultas de recambios a su distribuidor',
    description:
      'Cómo usan los talleres Parts Relay: busque recambios enviando a su distribuidor un mensaje de WhatsApp con la matrícula o el VIN y la pieza, y qué incluir en él.',
    label: 'Para talleres',
    heading: 'Parts Relay para talleres',
    heroNote:
      'Si su distribuidor usa Parts Relay y ha dado de alta su taller como contacto, sus asesores pueden buscar recambios enviándole un mensaje de WhatsApp con la matrícula o el VIN y la pieza que necesitan. A continuación verá qué poner en esa consulta para que el mostrador pueda responderla.',
    talk: 'Hablar con nuestro equipo',
    intro: {
      label: 'En la recepción',
      title: 'El taller necesita una pinza trasera. ¿Viene con el soporte?',
      text: [
        'Una consulta de «frenos traseros» obliga al mostrador a adivinar si se refiere a un juego de pastillas, una pinza o su soporte. Si el mecánico ya ha identificado la pinza, indíquelo en la consulta.',
        'Anote el lado y el mecanismo del freno de mano en el taller mientras el coche está allí. Si le falta alguno de los dos datos, diga cuál.',
      ],
      recordTitle: 'Una nota para el distribuidor',
      record: [
        [
          'Datos del vehículo',
          'Anote el identificador del vehículo de la orden de reparación y compruébelo en el coche.',
        ],
        ['En la orden de reparación', 'Una pinza de freno trasera'],
        ['Del mecánico', 'Confirmar el lado y el mecanismo del freno de mano del coche.'],
        [
          'Pregunta para el presupuesto',
          '«¿Su pinza incluye el soporte o debo añadirlo como artículo aparte?»',
        ],
      ],
    },
    principles: {
      label: 'Redactar la consulta',
      title: 'Antes de llamar al distribuidor',
      items: [
        [
          'Comprobar el vehículo en el taller',
          'Tome el VIN del vehículo que está en el taller. Compare el modelo con la orden de reparación antes de enviar la consulta.',
        ],
        [
          'Usar las palabras del mecánico',
          'Si la nota dice «tapa del retrovisor», mantenga esas palabras. Cambiarlo por «retrovisor» podría traerle un presupuesto del conjunto completo.',
        ],
        [
          'Indicar dónde va',
          'Indique el eje y el lado cuando importen. Para una pieza eléctrica, pregunte si el mecánico puede leer el número antiguo o describir el conector.',
        ],
        [
          'Preguntar qué incluye',
          'Avise al mostrador si la reparación depende de una fijación adicional. Para una pinza, pregunte si incluye el soporte.',
        ],
      ],
    },
    sending: {
      label: 'Enviar la consulta',
      title: 'Cómo llega su consulta al mostrador',
      text: 'Si el distribuidor ha añadido su número de WhatsApp como contacto, envíe la matrícula o el VIN y la pieza que necesita a su número de Parts Relay. Un número no añadido recibe una respuesta que le pide contactar con el distribuidor. Para una búsqueda en el mostrador, dé a la persona que atiende la matrícula o el VIN y la pieza.',
      recordTitle: 'Cuando el mostrador le responde',
      record: [
        [
          'Vehículo identificado',
          'Lea el modelo y el motor. Avise al mostrador si alguno no coincide con el coche del elevador.',
        ],
        [
          'Referencias devueltas',
          'Ponga la referencia OE junto a su descripción en el presupuesto. Algunos resultados incluyen también un despiece o una referencia aftermarket.',
        ],
        [
          'Sin coincidencias',
          'Si no aparece el vehículo, revise de nuevo la matrícula. Si el vehículo es correcto, pida al mecánico un nombre de pieza o una ubicación más precisos.',
        ],
      ],
    },
    estimate: {
      label: 'Al hacer el presupuesto',
      title: 'Antes de dar una fecha al cliente',
      exampleTitle: 'Lleve las palabras del mecánico a la consulta',
      exampleText:
        'Anote la pieza, el lado y el número original mientras el mecánico tiene el coche, y ponga los tres datos en el mensaje a su distribuidor.',
      checkVin: 'Comprobar el VIN',
      recordTitle: 'Qué debe constar en el presupuesto',
      record: [
        [
          'Montaje',
          'Asegúrese de que el mostrador comprobó la posición y el equipamiento de este coche.',
        ],
        [
          'Contenido del kit',
          'Dé una línea propia a cualquier junta, sensor o fijación que se suministre aparte.',
        ],
        [
          'Disponibilidad',
          'Pida a la sucursal que suministra la cantidad y el plazo de recogida o entrega.',
        ],
      ],
    },
  },
  it: {
    title: 'Parts Relay per le officine | Invii le richieste ricambi al suo distributore',
    description:
      'Come le officine usano Parts Relay: cerchi ricambi inviando al suo distributore un messaggio WhatsApp con targa o VIN e il ricambio, e cosa scriverci.',
    label: 'Per le officine',
    heading: 'Parts Relay per le officine',
    heroNote:
      'Se il suo distributore usa Parts Relay e ha abilitato la sua officina come contatto, i suoi consulenti possono cercare ricambi inviandogli un messaggio WhatsApp con la targa o il VIN e il ricambio che serve. Qui sotto trova cosa scrivere nella richiesta perché il banco possa rispondere.',
    talk: 'Parli con il nostro team',
    intro: {
      label: 'In accettazione',
      title: 'L’officina ha bisogno di una pinza posteriore. Comprende la staffa?',
      text: [
        'Una richiesta di «freni posteriori» lascia al banco il compito di capire se intende un kit pastiglie, una pinza o la sua staffa. Se il meccanico ha già identificato la pinza, lo indichi nella richiesta.',
        'Si faccia dire lato e tipo di freno di stazionamento in officina finché l’auto è lì. Se manca ancora uno dei due dati, dica quale.',
      ],
      recordTitle: 'Una nota per il distributore',
      record: [
        [
          'Dati del veicolo',
          'Riporti l’identificativo del veicolo dall’ordine di riparazione e lo verifichi sull’auto.',
        ],
        ['Sull’ordine di riparazione', 'Una pinza freno posteriore'],
        [
          'Dal meccanico',
          'Confermare il lato e il meccanismo del freno di stazionamento montato sull’auto.',
        ],
        [
          'Domanda per il preventivo',
          '«La sua pinza comprende la staffa, o devo aggiungerla come voce separata?»',
        ],
      ],
    },
    principles: {
      label: 'Scrivere la richiesta',
      title: 'Prima di chiamare il distributore',
      items: [
        [
          'Controllare il veicolo in officina',
          'Prenda il VIN dal veicolo in officina. Confronti il modello con l’ordine di riparazione prima di inviare la richiesta.',
        ],
        [
          'Usare le parole del meccanico',
          'Se la nota dice «calotta specchietto», mantenga queste parole. Scrivere solo «specchietto» potrebbe portarle un preventivo per l’unità completa.',
        ],
        [
          'Dire dove va montato',
          'Indichi asse e lato quando contano. Per un pezzo elettrico, chieda se il meccanico può leggere il vecchio codice o descrivere il connettore.',
        ],
        [
          'Chiedere cosa c’è nella confezione',
          'Avvisi il banco se la riparazione richiede un fissaggio in più. Per una pinza, chieda se comprende la staffa.',
        ],
      ],
    },
    sending: {
      label: 'Inviare la richiesta',
      title: 'Come la richiesta arriva al banco',
      text: 'Se il distributore ha aggiunto il suo numero WhatsApp come contatto, invii la targa o il VIN e il ricambio che serve al suo numero Parts Relay. Un numero non aggiunto riceve una risposta che invita a contattare il distributore. Per una ricerca al banco, dia alla persona al banco la targa o il VIN e il ricambio.',
      recordTitle: 'Quando il banco le risponde',
      record: [
        [
          'Veicolo identificato',
          'Legga modello e motore. Avvisi il banco se uno dei due non corrisponde all’auto sul ponte.',
        ],
        [
          'Codici restituiti',
          'Metta il codice OE accanto alla sua descrizione nel preventivo. Alcuni risultati hanno anche un disegno o un codice aftermarket.',
        ],
        [
          'Nessuna corrispondenza',
          'Se manca il veicolo, ricontrolli la targa. Se il veicolo è giusto, chieda al meccanico un nome del pezzo o una posizione più precisi.',
        ],
      ],
    },
    estimate: {
      label: 'Al momento del preventivo',
      title: 'Prima di dare una data al cliente',
      exampleTitle: 'Riporti le parole del meccanico nella richiesta',
      exampleText:
        'Annoti pezzo, lato e codice originale mentre il meccanico ha l’auto, e li metta tutti e tre nel messaggio al suo distributore.',
      checkVin: 'Controllare il VIN',
      recordTitle: 'Cosa va nel preventivo',
      record: [
        [
          'Montaggio',
          'Si assicuri che il banco abbia controllato posizione ed equipaggiamento di questa auto.',
        ],
        [
          'Contenuto del kit',
          'Dia una riga a parte a guarnizioni, sensori o fissaggi forniti separatamente.',
        ],
        [
          'Disponibilità',
          'Si faccia dare quantità e orario di ritiro o consegna dalla filiale che fornisce.',
        ],
      ],
    },
  },
};
