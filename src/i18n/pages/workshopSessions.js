// Text of the three workshop sessions in every language. The worksheets
// themselves are in English, so the translated download links say so.

export const workshopSessions = {
  en: {
    firstRequest: {
      title: 'Write a parts enquiry from a repair order | Parts Relay',
      description:
        'Use a repair order and the downloadable service desk worksheet to write an enquiry a supplier can price.',
      heading: 'Write a parts enquiry from a repair order',
      audience: 'For repair shops. Self-guided, about 10 minutes.',
      posterAlt: 'Service adviser at a workshop bench',
      prepare: [
        {
          term: 'On the bench',
          text: 'A repair order with a diagnosed fault. Keep customer names and contact details off the worksheet.',
        },
        {
          term: 'What you’ll write',
          text: 'A parts enquiry ready to send to your own distributor.',
        },
      ],
      intro:
        'The person pricing a part can’t see the car. Read the technician’s note as if you’d just picked up the phone at the parts counter. Which detail would you ask for first?',
      materials: {
        title: 'Start with the job card',
        text: 'Download the worksheet and keep the repair order beside it. Check the VIN format once you have the vehicle details.',
        download: 'Download worksheet ↓',
        link: 'Check a VIN',
      },
      scenario: {
        title: 'When a symptom stands in for the part name',
        text: 'A door that won’t stay shut tells the counter about the fault. A damaged right rear latch tells them which item to look up. If the repair also needs an actuator, find out whether it comes with the latch.',
      },
      stepsTitle: 'Write up the request',
      steps: [
        {
          title: 'Find the technician’s diagnosis',
          text: 'Underline the component they identified. If you can only find a symptom, ask what they intend to replace before requesting a price.',
        },
        {
          title: 'Describe one orderable item',
          text: 'Record the vehicle from the job card. Name the part with its fitting position and quantity. For a door latch, that means which door, which side and how many.',
        },
        {
          title: 'Ask about anything supplied with it',
          text: 'Turn the unresolved detail into a question the distributor can answer on the quote. If the actuator is needed, ask whether it comes with the latch or carries its own reference.',
        },
      ],
      answerTitle: 'Read it as the distributor',
      answers: [
        { term: 'Vehicle', text: 'Use the verified identification for this job.' },
        {
          term: 'Item and quantity',
          text: 'Would someone reading the enquiry know which door the latch goes on and how many to price?',
        },
        {
          term: 'Technician’s finding',
          text: 'Keep the finding that explains the scope of the repair. Additional symptoms belong on the job card unless they affect the choice of part.',
        },
        {
          term: 'Question for the counter',
          text: 'Name the component whose inclusion needs confirming. “Does the latch come with the actuator?” gives the distributor something concrete to check.',
        },
      ],
      check: {
        title: 'Check it with the technician',
        text: 'Read the finished request to the technician. Correct any difference between the part they intend to fit and the item the supplier is about to price.',
      },
      variant: {
        title: 'Using the sheet for a window repair',
        text: 'For a window regulator, record the affected door and ask whether the quoted regulator includes the motor.',
      },
    },
    fitCheck: {
      title: 'An alternator fit check | Parts Relay',
      description:
        'Record the markings on an alternator and the details you still need from the workshop before quoting.',
      heading: 'An alternator fit check',
      audience: 'For distributors. Self-guided, about 15 minutes.',
      posterAlt: 'Alternator with its connector and pulley',
      prepare: [
        {
          term: 'Evidence to hand',
          text: 'An alternator enquiry and the original label, a legible photo or the technician’s reading.',
        },
        {
          term: 'Callback record',
          text: 'A record of what distinguishes the required unit, or a specific detail to ask the technician for.',
        },
      ],
      intro:
        'When two units are listed for the same vehicle, the last few characters on the old alternator can decide which one to price. Use the worksheet to keep the label reading separate from your interpretation.',
      materials: {
        title: 'Keep a record of the label',
        text: 'Download the callback sheet before contacting the workshop. Leave room to record the supplier’s question exactly as they ask it.',
        download: 'Download worksheet ↓',
        link: 'Read the alternator label guide',
      },
      scenario: {
        title: 'When the suffix is unreadable',
        text: 'Start with the marking the technician can see. The output rating might still be clear even when the end of the manufacturer’s reference has rubbed away. Keep both pieces of information.',
      },
      stepsTitle: 'Work through the reference',
      steps: [
        {
          title: 'Take the markings in order',
          text: 'Write the vehicle identifier on the sheet. Record the manufacturer’s part number character by character and put the amp rating on a separate line.',
        },
        {
          title: 'Mark the gap',
          text: 'Note where a character is unreadable. Ask for a closer photo if it would settle the reading. Leave a genuine gap open rather than supplying a likely letter from the catalogue.',
        },
        {
          title: 'Ask the supplier what separates the units',
          text: 'If the partial reference leaves more than one candidate, find out which visible detail would decide between them. Give the technician that question before they go back to the car.',
        },
      ],
      answerTitle: 'What belongs in your callback record',
      answers: [
        {
          term: 'Readable markings',
          text: 'Copy only the characters the workshop can verify. Keep units with the rating.',
        },
        {
          term: 'Unresolved characters',
          text: 'Mark whether the gap is at the start, in the middle or at the end of the reference.',
        },
        {
          term: 'Next check',
          text: 'Write the supplier’s exact question about the label, connector or equipment.',
        },
        {
          term: 'Outcome',
          text: 'Record which reference the supplier confirmed, or who will call back with the missing detail.',
        },
      ],
      check: {
        title: 'Before you release the quote',
        text: 'Could a colleague point to the evidence for the quoted reference? When two variants still fit the information on hand, keep the quote open until the supplier can distinguish them.',
      },
      variant: {
        title: 'Using the check on a starter',
        text: 'Use the same sheet for a starter motor. Replace the alternator rating with the markings the supplier needs for that starter application.',
      },
    },
    handoff: {
      title: 'Leave a parts job for the next shift | Parts Relay',
      description:
        'Leave the next shift a parts handover that names the open question, the person handling it and the next call.',
      heading: 'Leave a parts job for the next shift',
      audience: 'For both teams. Self-guided, about 12 minutes.',
      posterAlt: 'Two colleagues examine a broken headlamp mount.',
      prepare: [
        {
          term: 'Before shift change',
          text: 'An open parts enquiry and the latest reply from the workshop or supplier.',
        },
        {
          term: 'Handover note',
          text: 'A short handover with enough information for someone else to make the next call.',
        },
      ],
      intro:
        'An adviser who takes over halfway through a job needs to know where to pick up. Write down the last answer, the outstanding question and who agreed to follow it up.',
      materials: {
        title: 'Gather the latest reply',
        text: 'Keep the enquiry and the most recent supplier reply beside the handover sheet. Mark any detail that has changed since the job opened.',
        download: 'Download worksheet ↓',
        link: 'Read the headlamp guide',
      },
      scenario: {
        title: 'A headlamp job between shifts',
        text: 'A headlamp can light up even when its mounting tab is broken. If the shop has asked for a complete housing and the supplier is waiting on the lamp reference, those are the two details the next adviser needs first.',
      },
      stepsTitle: 'Build the handover',
      steps: [
        {
          title: 'Name the item the shop wants',
          text: 'Record the job identifier, fitting position and scope. If the technician needs the whole left headlamp housing, say so and include the reason the housing has to be replaced.',
        },
        {
          title: 'Separate the answer from the open question',
          text: 'Record what the technician has confirmed about the damaged mounting tab. Then write what the supplier still needs, such as the full reference from the old lamp.',
        },
        {
          title: 'Give the next call an owner',
          text: 'Write down who will get the missing information and who is waiting for it. Record any price or availability already quoted beside the exact reference it covers.',
        },
      ],
      answerTitle: 'What the next shift needs to find',
      answers: [
        {
          term: 'Job and component',
          text: 'Include enough information to connect the note to the repair order and the correct side of the car.',
        },
        {
          term: 'Latest confirmed detail',
          text: 'Write down the finding the next person can rely on and who confirmed it.',
        },
        {
          term: 'Still to settle',
          text: 'State the question that prevents the shop placing the order.',
        },
        {
          term: 'Person following up',
          text: 'Identify the person who will make the next contact and the information they agreed to obtain.',
        },
      ],
      check: {
        title: 'Let a colleague take over',
        text: 'Give your colleague the note on its own. If they have to find you to ask whom to ring or what to check, add that answer before the shift ends.',
      },
      variant: {
        title: 'If the next job is mirror glass',
        text: 'For heated mirror glass, record whether the backing plate is also required. Leave its inclusion open until the supplier confirms what comes with the pane.',
      },
    },
  },
  de: {
    firstRequest: {
      title: 'Eine Teileanfrage aus einem Reparaturauftrag schreiben | Parts Relay',
      description:
        'Schreiben Sie mit einem Reparaturauftrag und dem Arbeitsblatt für die Serviceannahme (auf Englisch) eine Anfrage, zu der ein Lieferant ein Angebot machen kann.',
      heading: 'Eine Teileanfrage aus einem Reparaturauftrag schreiben',
      audience: 'Für Werkstätten. Selbstständig, etwa 10 Minuten.',
      posterAlt: 'Serviceberater an einer Werkbank in der Werkstatt',
      prepare: [
        {
          term: 'Auf der Werkbank',
          text: 'Ein Reparaturauftrag mit diagnostiziertem Fehler. Kundennamen und Kontaktdaten gehören nicht auf das Arbeitsblatt.',
        },
        {
          term: 'Was Sie schreiben',
          text: 'Eine Teileanfrage, die Sie an Ihren eigenen Händler senden können.',
        },
      ],
      intro:
        'Wer ein Teil anbietet, sieht das Auto nicht. Lesen Sie die Notiz des Mechanikers so, als hätten Sie gerade an der Teiletheke den Hörer abgenommen. Nach welchem Detail würden Sie zuerst fragen?',
      materials: {
        title: 'Mit der Arbeitskarte beginnen',
        text: 'Laden Sie das Arbeitsblatt herunter und legen Sie den Reparaturauftrag daneben. Prüfen Sie das FIN-Format, sobald Sie die Fahrzeugdaten haben.',
        download: 'Arbeitsblatt herunterladen (Englisch) ↓',
        link: 'FIN prüfen',
      },
      scenario: {
        title: 'Wenn ein Symptom statt des Teilenamens dasteht',
        text: 'Eine Tür, die nicht zubleibt, beschreibt der Teiletheke den Fehler. Ein beschädigtes Türschloss hinten rechts sagt ihr, welchen Artikel sie suchen muss. Braucht die Reparatur auch einen Stellmotor, klären Sie, ob er beim Schloss dabei ist.',
      },
      stepsTitle: 'Die Anfrage formulieren',
      steps: [
        {
          title: 'Die Diagnose des Mechanikers finden',
          text: 'Unterstreichen Sie das Bauteil, das er ermittelt hat. Finden Sie nur ein Symptom, fragen Sie vor der Preisanfrage, was er ersetzen will.',
        },
        {
          title: 'Einen bestellbaren Artikel beschreiben',
          text: 'Übernehmen Sie das Fahrzeug von der Arbeitskarte. Nennen Sie das Teil mit Einbauposition und Menge. Bei einem Türschloss heißt das: welche Tür, welche Seite und wie viele.',
        },
        {
          title: 'Nach dem Lieferumfang fragen',
          text: 'Machen Sie aus dem offenen Detail eine Frage, die der Händler im Angebot beantworten kann. Wird der Stellmotor gebraucht, fragen Sie, ob er beim Schloss dabei ist oder eine eigene Referenz hat.',
        },
      ],
      answerTitle: 'Mit den Augen des Händlers lesen',
      answers: [
        {
          term: 'Fahrzeug',
          text: 'Verwenden Sie die geprüfte Identifizierung für diesen Auftrag.',
        },
        {
          term: 'Artikel und Menge',
          text: 'Wüsste jemand, der die Anfrage liest, an welche Tür das Schloss kommt und wie viele anzubieten sind?',
        },
        {
          term: 'Befund des Mechanikers',
          text: 'Behalten Sie den Befund, der den Umfang der Reparatur erklärt. Weitere Symptome gehören auf die Arbeitskarte, sofern sie die Teilewahl nicht beeinflussen.',
        },
        {
          term: 'Frage an die Teiletheke',
          text: 'Nennen Sie das Bauteil, dessen Lieferumfang zu klären ist. „Ist der Stellmotor beim Schloss dabei?“ gibt dem Händler etwas Konkretes zum Prüfen.',
        },
      ],
      check: {
        title: 'Mit dem Mechaniker abgleichen',
        text: 'Lesen Sie dem Mechaniker die fertige Anfrage vor. Korrigieren Sie jeden Unterschied zwischen dem Teil, das er einbauen will, und dem Artikel, den der Lieferant gleich anbietet.',
      },
      variant: {
        title: 'Das Blatt bei einer Fensterreparatur nutzen',
        text: 'Notieren Sie bei einem Fensterheber die betroffene Tür und fragen Sie, ob der angebotene Fensterheber den Motor enthält.',
      },
    },
    fitCheck: {
      title: 'Passprüfung einer Lichtmaschine | Parts Relay',
      description:
        'Notieren Sie die Kennzeichnungen auf einer Lichtmaschine und die Angaben, die Sie vor dem Angebot noch von der Werkstatt brauchen.',
      heading: 'Passprüfung einer Lichtmaschine',
      audience: 'Für Händler. Selbstständig, etwa 15 Minuten.',
      posterAlt: 'Lichtmaschine mit Stecker und Riemenscheibe',
      prepare: [
        {
          term: 'Belege zur Hand',
          text: 'Eine Anfrage zu einer Lichtmaschine und das Originaletikett, ein gut lesbares Foto oder die Ablesung des Mechanikers.',
        },
        {
          term: 'Rückrufnotiz',
          text: 'Eine Notiz, woran sich die benötigte Ausführung erkennen lässt, oder ein konkretes Detail, nach dem Sie den Mechaniker fragen.',
        },
      ],
      intro:
        'Sind für dasselbe Fahrzeug zwei Ausführungen gelistet, können die letzten Zeichen auf der alten Lichtmaschine entscheiden, welche Sie anbieten. Halten Sie mit dem Arbeitsblatt die Ablesung des Etiketts getrennt von Ihrer Deutung.',
      materials: {
        title: 'Das Etikett festhalten',
        text: 'Laden Sie das Rückrufblatt herunter, bevor Sie die Werkstatt kontaktieren. Lassen Sie Platz, um die Frage des Lieferanten genau so zu notieren, wie er sie stellt.',
        download: 'Arbeitsblatt herunterladen (Englisch) ↓',
        link: 'Ratgeber zu Lichtmaschinen-Etiketten lesen',
      },
      scenario: {
        title: 'Wenn der Zusatz unleserlich ist',
        text: 'Beginnen Sie mit der Kennzeichnung, die der Mechaniker sehen kann. Der Nennstrom kann noch lesbar sein, auch wenn das Ende der Herstellerreferenz abgerieben ist. Behalten Sie beide Angaben.',
      },
      stepsTitle: 'Die Referenz durchgehen',
      steps: [
        {
          title: 'Die Kennzeichnungen der Reihe nach aufnehmen',
          text: 'Schreiben Sie die Fahrzeugkennung auf das Blatt. Notieren Sie die Teilenummer des Herstellers Zeichen für Zeichen und den Ampere-Wert in einer eigenen Zeile.',
        },
        {
          title: 'Die Lücke markieren',
          text: 'Vermerken Sie, wo ein Zeichen unleserlich ist. Bitten Sie um ein näheres Foto, wenn es die Ablesung klären würde. Lassen Sie eine echte Lücke offen, statt einen wahrscheinlichen Buchstaben aus dem Katalog einzusetzen.',
        },
        {
          title: 'Den Lieferanten nach dem Unterschied fragen',
          text: 'Bleibt mit der unvollständigen Referenz mehr als ein Kandidat übrig, klären Sie, welches sichtbare Detail zwischen ihnen entscheidet. Geben Sie dem Mechaniker diese Frage mit, bevor er zurück zum Auto geht.',
        },
      ],
      answerTitle: 'Was in Ihre Rückrufnotiz gehört',
      answers: [
        {
          term: 'Lesbare Kennzeichnungen',
          text: 'Übernehmen Sie nur die Zeichen, die die Werkstatt bestätigen kann. Schreiben Sie die Einheit zum Wert.',
        },
        {
          term: 'Offene Zeichen',
          text: 'Vermerken Sie, ob die Lücke am Anfang, in der Mitte oder am Ende der Referenz liegt.',
        },
        {
          term: 'Nächste Prüfung',
          text: 'Notieren Sie die genaue Frage des Lieferanten zu Etikett, Stecker oder Ausstattung.',
        },
        {
          term: 'Ergebnis',
          text: 'Halten Sie fest, welche Referenz der Lieferant bestätigt hat oder wer sich mit dem fehlenden Detail zurückmeldet.',
        },
      ],
      check: {
        title: 'Bevor Sie das Angebot freigeben',
        text: 'Könnte ein Kollege die Belege für die angebotene Referenz zeigen? Passen noch zwei Varianten zu den vorliegenden Angaben, lassen Sie das Angebot offen, bis der Lieferant sie unterscheiden kann.',
      },
      variant: {
        title: 'Die Prüfung bei einem Anlasser nutzen',
        text: 'Nutzen Sie dasselbe Blatt für einen Anlasser. Ersetzen Sie den Ampere-Wert der Lichtmaschine durch die Kennzeichnungen, die der Lieferant für diesen Anlasser braucht.',
      },
    },
    handoff: {
      title: 'Einen Teileauftrag an die nächste Schicht übergeben | Parts Relay',
      description:
        'Hinterlassen Sie der nächsten Schicht eine Übergabe, die die offene Frage, die zuständige Person und den nächsten Anruf nennt.',
      heading: 'Einen Teileauftrag an die nächste Schicht übergeben',
      audience: 'Für beide Teams. Selbstständig, etwa 12 Minuten.',
      posterAlt: 'Zwei Kollegen untersuchen eine gebrochene Scheinwerferhalterung.',
      prepare: [
        {
          term: 'Vor dem Schichtwechsel',
          text: 'Eine offene Teileanfrage und die letzte Antwort der Werkstatt oder des Lieferanten.',
        },
        {
          term: 'Übergabenotiz',
          text: 'Eine kurze Übergabe mit genug Informationen, damit jemand anderes den nächsten Anruf führen kann.',
        },
      ],
      intro:
        'Wer einen Auftrag mittendrin übernimmt, muss wissen, wo es weitergeht. Notieren Sie die letzte Antwort, die offene Frage und wer zugesagt hat, sich darum zu kümmern.',
      materials: {
        title: 'Die letzte Antwort bereitlegen',
        text: 'Legen Sie die Anfrage und die jüngste Antwort des Lieferanten neben das Übergabeblatt. Markieren Sie jedes Detail, das sich seit Beginn des Auftrags geändert hat.',
        download: 'Arbeitsblatt herunterladen (Englisch) ↓',
        link: 'Scheinwerfer-Ratgeber lesen',
      },
      scenario: {
        title: 'Ein Scheinwerferauftrag zwischen zwei Schichten',
        text: 'Ein Scheinwerfer kann leuchten, obwohl seine Befestigungslasche gebrochen ist. Hat die Werkstatt ein komplettes Gehäuse angefragt und wartet der Lieferant auf die Referenz des Scheinwerfers, braucht der nächste Berater genau diese beiden Angaben zuerst.',
      },
      stepsTitle: 'Die Übergabe aufbauen',
      steps: [
        {
          title: 'Den gewünschten Artikel benennen',
          text: 'Notieren Sie Auftragskennung, Einbauposition und Umfang. Braucht der Mechaniker das komplette linke Scheinwerfergehäuse, schreiben Sie das auf, zusammen mit dem Grund, warum das Gehäuse ersetzt werden muss.',
        },
        {
          title: 'Antwort und offene Frage trennen',
          text: 'Halten Sie fest, was der Mechaniker zur beschädigten Befestigungslasche bestätigt hat. Schreiben Sie dann auf, was der Lieferant noch braucht, etwa die vollständige Referenz vom alten Scheinwerfer.',
        },
        {
          title: 'Einen Zuständigen für den nächsten Anruf festlegen',
          text: 'Notieren Sie, wer die fehlenden Angaben besorgt und wer darauf wartet. Schreiben Sie bereits genannte Preise oder Verfügbarkeiten neben die genaue Referenz, für die sie gelten.',
        },
      ],
      answerTitle: 'Was die nächste Schicht finden muss',
      answers: [
        {
          term: 'Auftrag und Bauteil',
          text: 'Geben Sie genug an, um die Notiz dem Reparaturauftrag und der richtigen Fahrzeugseite zuzuordnen.',
        },
        {
          term: 'Zuletzt bestätigtes Detail',
          text: 'Notieren Sie den Befund, auf den sich die nächste Person verlassen kann, und wer ihn bestätigt hat.',
        },
        {
          term: 'Noch zu klären',
          text: 'Nennen Sie die Frage, die die Werkstatt noch an der Bestellung hindert.',
        },
        {
          term: 'Zuständig für den nächsten Kontakt',
          text: 'Nennen Sie die Person, die sich als Nächstes meldet, und die Information, die sie zu beschaffen zugesagt hat.',
        },
      ],
      check: {
        title: 'Einen Kollegen übernehmen lassen',
        text: 'Geben Sie Ihrem Kollegen nur die Notiz. Muss er Sie suchen, um zu fragen, wen er anrufen oder was er prüfen soll, ergänzen Sie diese Antwort vor Schichtende.',
      },
      variant: {
        title: 'Wenn als Nächstes Spiegelglas ansteht',
        text: 'Notieren Sie bei beheizbarem Spiegelglas, ob die Trägerplatte ebenfalls benötigt wird. Lassen Sie das offen, bis der Lieferant bestätigt, was mit dem Glas geliefert wird.',
      },
    },
  },
  fr: {
    firstRequest: {
      title: 'Rédiger une demande de pièces à partir d’un ordre de réparation | Parts Relay',
      description:
        'À partir d’un ordre de réparation et de la fiche de travail de l’accueil atelier (en anglais), rédigez une demande qu’un fournisseur peut chiffrer.',
      heading: 'Rédiger une demande de pièces à partir d’un ordre de réparation',
      audience: 'Pour les garages. En autonomie, environ 10 minutes.',
      posterAlt: 'Réceptionnaire à l’établi d’un garage',
      prepare: [
        {
          term: 'Sur l’établi',
          text: 'Un ordre de réparation avec une panne diagnostiquée. Ne reportez ni le nom ni les coordonnées du client sur la fiche.',
        },
        {
          term: 'Ce que vous rédigerez',
          text: 'Une demande de pièces prête à envoyer à votre propre distributeur.',
        },
      ],
      intro:
        'La personne qui chiffre une pièce ne voit pas la voiture. Lisez la note du technicien comme si vous veniez de décrocher au comptoir pièces. Quel détail demanderiez-vous en premier ?',
      materials: {
        title: 'Partir de la fiche atelier',
        text: 'Téléchargez la fiche de travail et gardez l’ordre de réparation à côté. Vérifiez le format du VIN dès que vous avez les informations du véhicule.',
        download: 'Télécharger la fiche (en anglais) ↓',
        link: 'Vérifier un VIN',
      },
      scenario: {
        title: 'Quand un symptôme remplace le nom de la pièce',
        text: 'Une porte qui ne reste pas fermée renseigne le comptoir sur la panne. Une serrure arrière droite endommagée lui dit quel article chercher. Si la réparation nécessite aussi un actionneur, demandez s’il est fourni avec la serrure.',
      },
      stepsTitle: 'Rédiger la demande',
      steps: [
        {
          title: 'Trouver le diagnostic du technicien',
          text: 'Soulignez le composant qu’il a identifié. Si vous ne trouvez qu’un symptôme, demandez-lui ce qu’il compte remplacer avant de demander un prix.',
        },
        {
          title: 'Décrire un seul article commandable',
          text: 'Reprenez le véhicule indiqué sur la fiche atelier. Nommez la pièce avec sa position de montage et sa quantité. Pour une serrure de porte : quelle porte, quel côté et combien.',
        },
        {
          title: 'Demander ce qui est fourni avec',
          text: 'Transformez le détail en suspens en une question à laquelle le distributeur peut répondre sur le devis. Si l’actionneur est nécessaire, demandez s’il est livré avec la serrure ou s’il a sa propre référence.',
        },
      ],
      answerTitle: 'Relire comme le distributeur',
      answers: [
        { term: 'Véhicule', text: 'Utilisez l’identification vérifiée pour ce travail.' },
        {
          term: 'Article et quantité',
          text: 'Une personne qui lit la demande saurait-elle sur quelle porte va la serrure et combien en chiffrer ?',
        },
        {
          term: 'Constat du technicien',
          text: 'Gardez le constat qui explique l’étendue de la réparation. Les autres symptômes restent sur la fiche atelier, sauf s’ils influent sur le choix de la pièce.',
        },
        {
          term: 'Question pour le comptoir',
          text: 'Nommez le composant dont l’inclusion reste à confirmer. « L’actionneur est-il fourni avec la serrure ? » donne au distributeur quelque chose de concret à vérifier.',
        },
      ],
      check: {
        title: 'Valider avec le technicien',
        text: 'Lisez la demande terminée au technicien. Corrigez tout écart entre la pièce qu’il compte monter et l’article que le fournisseur s’apprête à chiffrer.',
      },
      variant: {
        title: 'Utiliser la fiche pour une réparation de vitre',
        text: 'Pour un lève-vitre, notez la porte concernée et demandez si le lève-vitre proposé comprend le moteur.',
      },
    },
    fitCheck: {
      title: 'Vérifier la compatibilité d’un alternateur | Parts Relay',
      description:
        'Relevez les marquages d’un alternateur et les détails qu’il vous manque encore du garage avant d’établir le devis.',
      heading: 'Vérifier la compatibilité d’un alternateur',
      audience: 'Pour les distributeurs. En autonomie, environ 15 minutes.',
      posterAlt: 'Alternateur avec son connecteur et sa poulie',
      prepare: [
        {
          term: 'Éléments à portée de main',
          text: 'Une demande d’alternateur et l’étiquette d’origine, une photo lisible ou le relevé du technicien.',
        },
        {
          term: 'Note de rappel',
          text: 'Ce qui distingue l’unité recherchée, ou un détail précis à demander au technicien.',
        },
      ],
      intro:
        'Quand deux unités sont référencées pour le même véhicule, les derniers caractères sur l’ancien alternateur peuvent décider laquelle chiffrer. Utilisez la fiche pour séparer ce qui est lu sur l’étiquette de votre interprétation.',
      materials: {
        title: 'Garder une trace de l’étiquette',
        text: 'Téléchargez la fiche de rappel avant de contacter le garage. Laissez de la place pour noter la question du fournisseur telle qu’il la pose.',
        download: 'Télécharger la fiche (en anglais) ↓',
        link: 'Lire le guide des étiquettes d’alternateur',
      },
      scenario: {
        title: 'Quand le suffixe est illisible',
        text: 'Partez du marquage que le technicien peut voir. L’intensité nominale peut rester lisible même quand la fin de la référence du fabricant est effacée. Gardez les deux informations.',
      },
      stepsTitle: 'Décortiquer la référence',
      steps: [
        {
          title: 'Relever les marquages dans l’ordre',
          text: 'Notez l’identifiant du véhicule sur la fiche. Relevez la référence du fabricant caractère par caractère et inscrivez l’intensité en ampères sur une ligne à part.',
        },
        {
          title: 'Signaler la lacune',
          text: 'Indiquez où un caractère est illisible. Demandez une photo plus rapprochée si elle peut trancher. Laissez une vraie lacune ouverte plutôt que d’y mettre une lettre probable tirée du catalogue.',
        },
        {
          title: 'Demander au fournisseur ce qui distingue les unités',
          text: 'Si la référence partielle laisse plusieurs candidates, demandez quel détail visible permet de trancher. Donnez cette question au technicien avant qu’il retourne au véhicule.',
        },
      ],
      answerTitle: 'Ce que doit contenir votre note de rappel',
      answers: [
        {
          term: 'Marquages lisibles',
          text: 'Ne recopiez que les caractères que le garage peut confirmer. Gardez l’unité avec la valeur.',
        },
        {
          term: 'Caractères non résolus',
          text: 'Indiquez si la lacune se trouve au début, au milieu ou à la fin de la référence.',
        },
        {
          term: 'Prochaine vérification',
          text: 'Notez la question exacte du fournisseur sur l’étiquette, le connecteur ou l’équipement.',
        },
        {
          term: 'Résultat',
          text: 'Notez la référence confirmée par le fournisseur, ou qui rappellera avec le détail manquant.',
        },
      ],
      check: {
        title: 'Avant de valider le devis',
        text: 'Un collègue pourrait-il montrer ce qui justifie la référence chiffrée ? Si deux variantes correspondent encore aux informations disponibles, laissez le devis ouvert jusqu’à ce que le fournisseur puisse les distinguer.',
      },
      variant: {
        title: 'Appliquer la vérification à un démarreur',
        text: 'Utilisez la même fiche pour un démarreur. Remplacez l’intensité de l’alternateur par les marquages dont le fournisseur a besoin pour ce démarreur.',
      },
    },
    handoff: {
      title: 'Transmettre un dossier pièces à l’équipe suivante | Parts Relay',
      description:
        'Laissez à l’équipe suivante une passation qui indique la question en suspens, la personne qui s’en occupe et le prochain appel.',
      heading: 'Transmettre un dossier pièces à l’équipe suivante',
      audience: 'Pour les deux équipes. En autonomie, environ 12 minutes.',
      posterAlt: 'Deux collègues examinent une fixation de phare cassée.',
      prepare: [
        {
          term: 'Avant le changement d’équipe',
          text: 'Une demande de pièces en cours et la dernière réponse du garage ou du fournisseur.',
        },
        {
          term: 'Note de passation',
          text: 'Une courte passation avec assez d’informations pour qu’une autre personne passe l’appel suivant.',
        },
      ],
      intro:
        'Un conseiller qui reprend un dossier en cours doit savoir où il en est. Notez la dernière réponse, la question en suspens et qui s’est engagé à la suivre.',
      materials: {
        title: 'Rassembler la dernière réponse',
        text: 'Gardez la demande et la dernière réponse du fournisseur à côté de la fiche de passation. Signalez tout détail qui a changé depuis l’ouverture du dossier.',
        download: 'Télécharger la fiche (en anglais) ↓',
        link: 'Lire le guide des phares',
      },
      scenario: {
        title: 'Un phare entre deux équipes',
        text: 'Un phare peut s’allumer même si sa patte de fixation est cassée. Si le garage a demandé un boîtier complet et que le fournisseur attend la référence du phare, ce sont les deux détails dont le conseiller suivant a besoin en premier.',
      },
      stepsTitle: 'Construire la passation',
      steps: [
        {
          title: 'Nommer l’article voulu par le garage',
          text: 'Notez la référence du dossier, la position de montage et l’étendue du travail. Si le technicien a besoin du boîtier de phare gauche complet, indiquez-le avec la raison pour laquelle il faut le remplacer.',
        },
        {
          title: 'Séparer la réponse de la question en suspens',
          text: 'Notez ce que le technicien a confirmé au sujet de la patte de fixation endommagée. Écrivez ensuite ce dont le fournisseur a encore besoin, par exemple la référence complète de l’ancien phare.',
        },
        {
          title: 'Attribuer le prochain appel',
          text: 'Notez qui va obtenir l’information manquante et qui l’attend. Inscrivez tout prix ou toute disponibilité déjà annoncés à côté de la référence exacte concernée.',
        },
      ],
      answerTitle: 'Ce que l’équipe suivante doit trouver',
      answers: [
        {
          term: 'Dossier et composant',
          text: 'Donnez assez d’informations pour rattacher la note à l’ordre de réparation et au bon côté du véhicule.',
        },
        {
          term: 'Dernier détail confirmé',
          text: 'Notez le constat sur lequel la personne suivante peut s’appuyer, et qui l’a confirmé.',
        },
        {
          term: 'Reste à régler',
          text: 'Indiquez la question qui empêche le garage de passer commande.',
        },
        {
          term: 'Personne chargée du suivi',
          text: 'Indiquez qui prendra le prochain contact et quelle information cette personne s’est engagée à obtenir.',
        },
      ],
      check: {
        title: 'Laisser un collègue prendre le relais',
        text: 'Donnez la note seule à votre collègue. S’il doit vous chercher pour savoir qui appeler ou quoi vérifier, ajoutez cette réponse avant la fin de votre service.',
      },
      variant: {
        title: 'Si le dossier suivant concerne une glace de rétroviseur',
        text: 'Pour une glace de rétroviseur chauffante, notez si la platine support est aussi nécessaire. Laissez la question ouverte jusqu’à ce que le fournisseur confirme ce qui est livré avec la glace.',
      },
    },
  },
  es: {
    firstRequest: {
      title: 'Redactar una consulta de recambios a partir de una orden de reparación | Parts Relay',
      description:
        'Use una orden de reparación y la hoja de trabajo de recepción descargable (en inglés) para redactar una consulta que un proveedor pueda presupuestar.',
      heading: 'Redactar una consulta de recambios a partir de una orden de reparación',
      audience: 'Para talleres. Por su cuenta, unos 10 minutos.',
      posterAlt: 'Asesor de servicio en un banco de trabajo del taller',
      prepare: [
        {
          term: 'En el banco',
          text: 'Una orden de reparación con una avería diagnosticada. No anote en la hoja nombres ni datos de contacto de clientes.',
        },
        {
          term: 'Qué va a redactar',
          text: 'Una consulta de recambios lista para enviar a su propio distribuidor.',
        },
      ],
      intro:
        'Quien presupuesta una pieza no ve el coche. Lea la nota del mecánico como si acabara de coger el teléfono en el mostrador de recambios. ¿Qué dato pediría primero?',
      materials: {
        title: 'Empiece por el parte de trabajo',
        text: 'Descargue la hoja de trabajo y tenga la orden de reparación al lado. Compruebe el formato del VIN en cuanto tenga los datos del vehículo.',
        download: 'Descargar la hoja (en inglés) ↓',
        link: 'Comprobar un VIN',
      },
      scenario: {
        title: 'Cuando un síntoma ocupa el lugar del nombre de la pieza',
        text: 'Una puerta que no se queda cerrada le dice al mostrador cuál es la avería. Una cerradura trasera derecha dañada le dice qué artículo buscar. Si la reparación también necesita un actuador, averigüe si viene con la cerradura.',
      },
      stepsTitle: 'Redacte la consulta',
      steps: [
        {
          title: 'Localice el diagnóstico del mecánico',
          text: 'Subraye el componente que ha identificado. Si solo encuentra un síntoma, pregúntele qué piensa sustituir antes de pedir precio.',
        },
        {
          title: 'Describa un único artículo que se pueda pedir',
          text: 'Anote el vehículo según el parte de trabajo. Nombre la pieza con su posición de montaje y la cantidad. En una cerradura de puerta: qué puerta, qué lado y cuántas.',
        },
        {
          title: 'Pregunte qué viene incluido',
          text: 'Convierta el detalle pendiente en una pregunta que el distribuidor pueda responder en el presupuesto. Si hace falta el actuador, pregunte si viene con la cerradura o tiene su propia referencia.',
        },
      ],
      answerTitle: 'Léala como el distribuidor',
      answers: [
        { term: 'Vehículo', text: 'Use la identificación verificada de este trabajo.' },
        {
          term: 'Artículo y cantidad',
          text: '¿Sabría quien lee la consulta en qué puerta va la cerradura y cuántas presupuestar?',
        },
        {
          term: 'Diagnóstico del mecánico',
          text: 'Conserve el hallazgo que explica el alcance de la reparación. Los demás síntomas van en el parte de trabajo, salvo que influyan en la elección de la pieza.',
        },
        {
          term: 'Pregunta para el mostrador',
          text: 'Nombre el componente cuya inclusión hay que confirmar. «¿La cerradura viene con el actuador?» le da al distribuidor algo concreto que comprobar.',
        },
      ],
      check: {
        title: 'Repásela con el mecánico',
        text: 'Lea la consulta terminada al mecánico. Corrija cualquier diferencia entre la pieza que piensa montar y el artículo que el proveedor va a presupuestar.',
      },
      variant: {
        title: 'La hoja en una reparación de ventanilla',
        text: 'Para un elevalunas, anote la puerta afectada y pregunte si el elevalunas presupuestado incluye el motor.',
      },
    },
    fitCheck: {
      title: 'Comprobar la compatibilidad de un alternador | Parts Relay',
      description:
        'Anote las marcas de un alternador y los datos que aún necesita del taller antes de presupuestar.',
      heading: 'Comprobar la compatibilidad de un alternador',
      audience: 'Para distribuidores. Por su cuenta, unos 15 minutos.',
      posterAlt: 'Alternador con su conector y su polea',
      prepare: [
        {
          term: 'Pruebas a mano',
          text: 'Una consulta de alternador y la etiqueta original, una foto legible o la lectura del mecánico.',
        },
        {
          term: 'Registro de la llamada',
          text: 'Qué distingue la unidad necesaria, o un dato concreto que pedir al mecánico.',
        },
      ],
      intro:
        'Cuando hay dos unidades para el mismo vehículo, los últimos caracteres del alternador viejo pueden decidir cuál presupuestar. Use la hoja para separar lo que pone la etiqueta de su interpretación.',
      materials: {
        title: 'Deje constancia de la etiqueta',
        text: 'Descargue la hoja de llamada antes de contactar con el taller. Deje espacio para anotar la pregunta del proveedor tal como la formule.',
        download: 'Descargar la hoja (en inglés) ↓',
        link: 'Leer la guía de etiquetas de alternador',
      },
      scenario: {
        title: 'Cuando el sufijo no se lee',
        text: 'Empiece por la marca que el mecánico puede ver. La intensidad nominal puede seguir siendo legible aunque el final de la referencia del fabricante se haya borrado. Conserve ambos datos.',
      },
      stepsTitle: 'Analice la referencia',
      steps: [
        {
          title: 'Tome las marcas en orden',
          text: 'Escriba el identificador del vehículo en la hoja. Anote la referencia del fabricante carácter por carácter y ponga los amperios en una línea aparte.',
        },
        {
          title: 'Marque el hueco',
          text: 'Indique dónde hay un carácter ilegible. Pida una foto más cercana si resolvería la lectura. Deje abierto un hueco real en lugar de rellenarlo con una letra probable del catálogo.',
        },
        {
          title: 'Pregunte al proveedor qué distingue las unidades',
          text: 'Si la referencia parcial deja más de una candidata, averigüe qué detalle visible decide entre ellas. Dele esa pregunta al mecánico antes de que vuelva al coche.',
        },
      ],
      answerTitle: 'Qué debe incluir su registro de la llamada',
      answers: [
        {
          term: 'Marcas legibles',
          text: 'Copie solo los caracteres que el taller pueda verificar. Mantenga las unidades con el valor.',
        },
        {
          term: 'Caracteres sin resolver',
          text: 'Indique si el hueco está al principio, en medio o al final de la referencia.',
        },
        {
          term: 'Siguiente comprobación',
          text: 'Anote la pregunta exacta del proveedor sobre la etiqueta, el conector o el equipamiento.',
        },
        {
          term: 'Resultado',
          text: 'Anote qué referencia confirmó el proveedor, o quién devolverá la llamada con el dato que falta.',
        },
      ],
      check: {
        title: 'Antes de enviar el presupuesto',
        text: '¿Podría un compañero señalar en qué se basa la referencia presupuestada? Si dos variantes siguen encajando con la información disponible, deje el presupuesto abierto hasta que el proveedor pueda distinguirlas.',
      },
      variant: {
        title: 'La comprobación en un motor de arranque',
        text: 'Use la misma hoja para un motor de arranque. Sustituya los amperios del alternador por las marcas que el proveedor necesita para ese motor de arranque.',
      },
    },
    handoff: {
      title: 'Dejar un trabajo de recambios al siguiente turno | Parts Relay',
      description:
        'Deje al siguiente turno un relevo que indique la pregunta pendiente, quién se encarga y la próxima llamada.',
      heading: 'Dejar un trabajo de recambios al siguiente turno',
      audience: 'Para ambos equipos. Por su cuenta, unos 12 minutos.',
      posterAlt: 'Dos compañeros examinan un soporte de faro roto.',
      prepare: [
        {
          term: 'Antes del cambio de turno',
          text: 'Una consulta de recambios abierta y la última respuesta del taller o del proveedor.',
        },
        {
          term: 'Nota de relevo',
          text: 'Un relevo breve con información suficiente para que otra persona haga la siguiente llamada.',
        },
      ],
      intro:
        'Un asesor que coge un trabajo a medias necesita saber por dónde seguir. Anote la última respuesta, la pregunta pendiente y quién se comprometió a darle seguimiento.',
      materials: {
        title: 'Reúna la última respuesta',
        text: 'Tenga la consulta y la respuesta más reciente del proveedor junto a la hoja de relevo. Marque cualquier dato que haya cambiado desde que se abrió el trabajo.',
        download: 'Descargar la hoja (en inglés) ↓',
        link: 'Leer la guía de faros',
      },
      scenario: {
        title: 'Un faro entre dos turnos',
        text: 'Un faro puede encenderse aunque tenga rota la patilla de fijación. Si el taller ha pedido una carcasa completa y el proveedor espera la referencia del faro, esos son los dos datos que el siguiente asesor necesita primero.',
      },
      stepsTitle: 'Prepare el relevo',
      steps: [
        {
          title: 'Nombre el artículo que quiere el taller',
          text: 'Anote el identificador del trabajo, la posición de montaje y el alcance. Si el mecánico necesita la carcasa completa del faro izquierdo, indíquelo junto con el motivo por el que hay que cambiarla.',
        },
        {
          title: 'Separe la respuesta de la pregunta pendiente',
          text: 'Anote lo que el mecánico ha confirmado sobre la patilla de fijación dañada. Después escriba lo que el proveedor aún necesita, como la referencia completa del faro viejo.',
        },
        {
          title: 'Asigne un responsable a la siguiente llamada',
          text: 'Anote quién conseguirá la información que falta y quién la espera. Ponga cualquier precio o disponibilidad ya indicados junto a la referencia exacta a la que corresponden.',
        },
      ],
      answerTitle: 'Qué debe encontrar el siguiente turno',
      answers: [
        {
          term: 'Trabajo y componente',
          text: 'Incluya información suficiente para relacionar la nota con la orden de reparación y el lado correcto del coche.',
        },
        {
          term: 'Último dato confirmado',
          text: 'Anote el hallazgo en el que puede confiar la siguiente persona y quién lo confirmó.',
        },
        {
          term: 'Pendiente de resolver',
          text: 'Indique la pregunta que impide al taller hacer el pedido.',
        },
        {
          term: 'Persona que da seguimiento',
          text: 'Identifique a la persona que hará el siguiente contacto y la información que se comprometió a obtener.',
        },
      ],
      check: {
        title: 'Deje que un compañero tome el relevo',
        text: 'Dele a su compañero solo la nota. Si tiene que buscarle para preguntar a quién llamar o qué comprobar, añada esa respuesta antes de terminar el turno.',
      },
      variant: {
        title: 'Si el siguiente trabajo es un cristal de retrovisor',
        text: 'Para un cristal de retrovisor térmico, anote si también hace falta la placa soporte. Deje abierta su inclusión hasta que el proveedor confirme qué viene con el cristal.',
      },
    },
  },
  it: {
    firstRequest: {
      title: 'Scrivere una richiesta ricambi da un ordine di riparazione | Parts Relay',
      description:
        'Con un ordine di riparazione e la scheda di lavoro per l’accettazione da scaricare (in inglese), scriva una richiesta su cui un fornitore possa fare un preventivo.',
      heading: 'Scrivere una richiesta ricambi da un ordine di riparazione',
      audience: 'Per le officine. In autonomia, circa 10 minuti.',
      posterAlt: 'Accettatore al banco di lavoro di un’officina',
      prepare: [
        {
          term: 'Sul banco',
          text: 'Un ordine di riparazione con un guasto diagnosticato. Non riporti sulla scheda nomi e recapiti dei clienti.',
        },
        {
          term: 'Cosa scriverà',
          text: 'Una richiesta ricambi pronta da inviare al suo distributore.',
        },
      ],
      intro:
        'Chi prepara il preventivo non vede l’auto. Legga la nota del meccanico come se avesse appena risposto al telefono al banco ricambi. Quale dettaglio chiederebbe per primo?',
      materials: {
        title: 'Parta dalla commessa',
        text: 'Scarichi la scheda di lavoro e tenga accanto l’ordine di riparazione. Controlli il formato del VIN appena ha i dati del veicolo.',
        download: 'Scarica la scheda (in inglese) ↓',
        link: 'Controllare un VIN',
      },
      scenario: {
        title: 'Quando un sintomo prende il posto del nome del pezzo',
        text: 'Una portiera che non resta chiusa dice al banco qual è il guasto. Una serratura posteriore destra danneggiata gli dice quale articolo cercare. Se la riparazione richiede anche un attuatore, chieda se è fornito con la serratura.',
      },
      stepsTitle: 'Scriva la richiesta',
      steps: [
        {
          title: 'Trovi la diagnosi del meccanico',
          text: 'Sottolinei il componente individuato. Se trova solo un sintomo, chieda cosa intende sostituire prima di chiedere un prezzo.',
        },
        {
          title: 'Descriva un solo articolo ordinabile',
          text: 'Riporti il veicolo dalla commessa. Indichi il pezzo con posizione di montaggio e quantità. Per una serratura: quale portiera, quale lato e quante.',
        },
        {
          title: 'Chieda cosa è compreso',
          text: 'Trasformi il dettaglio in sospeso in una domanda a cui il distributore possa rispondere nel preventivo. Se serve l’attuatore, chieda se è fornito con la serratura o ha un codice proprio.',
        },
      ],
      answerTitle: 'La rilegga come il distributore',
      answers: [
        { term: 'Veicolo', text: 'Usi l’identificazione verificata per questo lavoro.' },
        {
          term: 'Articolo e quantità',
          text: 'Chi legge la richiesta saprebbe su quale portiera va la serratura e quante metterne a preventivo?',
        },
        {
          term: 'Riscontro del meccanico',
          text: 'Tenga il riscontro che spiega l’entità della riparazione. Gli altri sintomi restano sulla commessa, a meno che non influiscano sulla scelta del pezzo.',
        },
        {
          term: 'Domanda per il banco',
          text: 'Indichi il componente di cui va confermata l’inclusione. «La serratura è fornita con l’attuatore?» dà al distributore qualcosa di concreto da verificare.',
        },
      ],
      check: {
        title: 'La verifichi con il meccanico',
        text: 'Legga la richiesta finita al meccanico. Corregga ogni differenza tra il pezzo che intende montare e l’articolo che il fornitore sta per mettere a preventivo.',
      },
      variant: {
        title: 'La scheda per una riparazione al finestrino',
        text: 'Per un alzacristallo, annoti la portiera interessata e chieda se l’alzacristallo a preventivo include il motorino.',
      },
    },
    fitCheck: {
      title: 'Verifica di compatibilità di un alternatore | Parts Relay',
      description:
        'Annoti le marcature di un alternatore e i dettagli che le servono ancora dall’officina prima del preventivo.',
      heading: 'Verifica di compatibilità di un alternatore',
      audience: 'Per i distributori. In autonomia, circa 15 minuti.',
      posterAlt: 'Alternatore con connettore e puleggia',
      prepare: [
        {
          term: 'Elementi a disposizione',
          text: 'Una richiesta per un alternatore e l’etichetta originale, una foto leggibile o la lettura del meccanico.',
        },
        {
          term: 'Nota di richiamata',
          text: 'Cosa distingue l’unità richiesta, oppure un dettaglio preciso da chiedere al meccanico.',
        },
      ],
      intro:
        'Quando per lo stesso veicolo risultano due unità, gli ultimi caratteri sul vecchio alternatore possono decidere quale mettere a preventivo. Usi la scheda per tenere separata la lettura dell’etichetta dalla sua interpretazione.',
      materials: {
        title: 'Tenga traccia dell’etichetta',
        text: 'Scarichi la scheda di richiamata prima di contattare l’officina. Lasci spazio per annotare la domanda del fornitore esattamente come la pone.',
        download: 'Scarica la scheda (in inglese) ↓',
        link: 'Leggere la guida alle etichette degli alternatori',
      },
      scenario: {
        title: 'Quando il suffisso è illeggibile',
        text: 'Parta dalla marcatura che il meccanico riesce a vedere. La corrente nominale può essere ancora leggibile anche quando la fine del codice del produttore è consumata. Tenga entrambe le informazioni.',
      },
      stepsTitle: 'Analizzi il codice',
      steps: [
        {
          title: 'Rilevi le marcature in ordine',
          text: 'Scriva sulla scheda l’identificativo del veicolo. Riporti il codice del produttore carattere per carattere e indichi gli ampere su una riga a parte.',
        },
        {
          title: 'Segnali la lacuna',
          text: 'Indichi dove un carattere è illeggibile. Chieda una foto più ravvicinata se può chiarire la lettura. Lasci aperta una lacuna reale invece di inserire una lettera probabile presa dal catalogo.',
        },
        {
          title: 'Chieda al fornitore cosa distingue le unità',
          text: 'Se il codice parziale lascia più di un candidato, chieda quale dettaglio visibile permette di scegliere. Dia questa domanda al meccanico prima che torni all’auto.',
        },
      ],
      answerTitle: 'Cosa va nella sua nota di richiamata',
      answers: [
        {
          term: 'Marcature leggibili',
          text: 'Copi solo i caratteri che l’officina può verificare. Tenga l’unità di misura accanto al valore.',
        },
        {
          term: 'Caratteri non risolti',
          text: 'Indichi se la lacuna è all’inizio, al centro o alla fine del codice.',
        },
        {
          term: 'Prossima verifica',
          text: 'Scriva la domanda esatta del fornitore su etichetta, connettore o equipaggiamento.',
        },
        {
          term: 'Esito',
          text: 'Annoti quale codice ha confermato il fornitore, oppure chi richiamerà con il dettaglio mancante.',
        },
      ],
      check: {
        title: 'Prima di inviare il preventivo',
        text: 'Un collega saprebbe indicare su cosa si basa il codice a preventivo? Se due varianti corrispondono ancora alle informazioni disponibili, tenga aperto il preventivo finché il fornitore non riesce a distinguerle.',
      },
      variant: {
        title: 'La verifica su un motorino di avviamento',
        text: 'Usi la stessa scheda per un motorino di avviamento. Sostituisca gli ampere dell’alternatore con le marcature che servono al fornitore per quel motorino.',
      },
    },
    handoff: {
      title: 'Lasciare un lavoro ricambi al turno successivo | Parts Relay',
      description:
        'Lasci al turno successivo un passaggio di consegne che indichi la domanda aperta, chi se ne occupa e la prossima telefonata.',
      heading: 'Lasciare un lavoro ricambi al turno successivo',
      audience: 'Per entrambi i team. In autonomia, circa 12 minuti.',
      posterAlt: 'Due colleghi esaminano un supporto del faro rotto.',
      prepare: [
        {
          term: 'Prima del cambio turno',
          text: 'Una richiesta ricambi aperta e l’ultima risposta dell’officina o del fornitore.',
        },
        {
          term: 'Nota di consegna',
          text: 'Un breve passaggio di consegne con abbastanza informazioni perché un altro possa fare la prossima telefonata.',
        },
      ],
      intro:
        'Chi subentra a metà lavoro deve sapere da dove ripartire. Annoti l’ultima risposta, la domanda in sospeso e chi si è impegnato a seguirla.',
      materials: {
        title: 'Raccolga l’ultima risposta',
        text: 'Tenga la richiesta e la risposta più recente del fornitore accanto alla scheda di consegna. Segnali ogni dettaglio cambiato dall’apertura del lavoro.',
        download: 'Scarica la scheda (in inglese) ↓',
        link: 'Leggere la guida ai fari',
      },
      scenario: {
        title: 'Un faro tra due turni',
        text: 'Un faro può accendersi anche con la linguetta di fissaggio rotta. Se l’officina ha chiesto un corpo completo e il fornitore aspetta il codice del faro, sono questi i due dettagli che servono per primi al collega successivo.',
      },
      stepsTitle: 'Prepari il passaggio di consegne',
      steps: [
        {
          title: 'Indichi l’articolo che vuole l’officina',
          text: 'Annoti l’identificativo del lavoro, la posizione di montaggio e l’entità dell’intervento. Se il meccanico ha bisogno del corpo completo del faro sinistro, lo scriva insieme al motivo per cui va sostituito.',
        },
        {
          title: 'Separi la risposta dalla domanda aperta',
          text: 'Annoti cosa ha confermato il meccanico sulla linguetta di fissaggio danneggiata. Poi scriva cosa serve ancora al fornitore, ad esempio il codice completo del vecchio faro.',
        },
        {
          title: 'Assegni la prossima telefonata',
          text: 'Annoti chi recupererà l’informazione mancante e chi la sta aspettando. Riporti prezzi o disponibilità già comunicati accanto al codice esatto a cui si riferiscono.',
        },
      ],
      answerTitle: 'Cosa deve trovare il turno successivo',
      answers: [
        {
          term: 'Lavoro e componente',
          text: 'Dia abbastanza informazioni per collegare la nota all’ordine di riparazione e al lato giusto dell’auto.',
        },
        {
          term: 'Ultimo dettaglio confermato',
          text: 'Annoti il riscontro su cui può contare la persona successiva e chi lo ha confermato.',
        },
        {
          term: 'Ancora da chiarire',
          text: 'Indichi la domanda che impedisce all’officina di fare l’ordine.',
        },
        {
          term: 'Chi segue la pratica',
          text: 'Indichi chi farà il prossimo contatto e quale informazione si è impegnato a ottenere.',
        },
      ],
      check: {
        title: 'Lasci subentrare un collega',
        text: 'Dia al collega solo la nota. Se deve cercarla per chiederle chi chiamare o cosa controllare, aggiunga quella risposta prima della fine del turno.',
      },
      variant: {
        title: 'Se il prossimo lavoro è un vetro specchietto',
        text: 'Per un vetro specchietto riscaldato, annoti se serve anche la piastra di supporto. Lasci aperta la questione finché il fornitore non conferma cosa è fornito con il vetro.',
      },
    },
  },
};
