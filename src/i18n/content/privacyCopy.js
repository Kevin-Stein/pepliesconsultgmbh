/**
 * Datenschutzerklärung — Abschnitte pro Sprache.
 * Rechtliche Prüfung durch Fachanwalt empfohlen; deckt die technische Umsetzung der Website ab.
 */
export const privacySectionsByLocale = {
  de: [
    {
      id: "overview",
      heading: "1. Datenschutz auf einen Blick",
      paragraphs: [
        "Die folgenden Hinweise geben einen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.",
        "Diese Website verwendet kein Analyse- oder Marketing-Tracking (z. B. Google Analytics).",
      ],
    },
    {
      id: "controller",
      heading: "2. Verantwortliche Stelle",
      paragraphs: [
        "Verantwortlich für die Datenverarbeitung auf dieser Website ist:",
        "peplies consult GmbH\nHöhenstraße 12\n65321 Heidenrod\nDeutschland",
        "Telefon: +49 178 8271600 / +49 152 53823353\nE-Mail: peplies@pepliesconsult.de",
        "Geschäftsführender Gesellschafter: Stephan Peplies",
        "Weitere Angaben finden Sie in unserem Impressum.",
      ],
    },
    {
      id: "hosting",
      heading: "3. Hosting",
      paragraphs: [
        "Diese Website wird in Deutschland gehostet. Hosting-Dienstleister ist die IONOS SE, Elgendorfer Str. 57, 56410 Montabaur (Auftragsverarbeiter gem. Art. 28 DSGVO im Auftrag von peplies consult GmbH).",
        "Beim Aufruf der Seiten werden technisch erforderliche Daten (z. B. IP-Adresse, Zeitpunkt des Zugriffs, Browsertyp, Referrer-URL) in Server-Logfiles verarbeitet, um die Website bereitzustellen und die Sicherheit zu gewährleisten.",
        "Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und stabilen Webauftritt). Die Logdaten werden vom Hoster nach dessen Richtlinien gelöscht, sobald sie für den Zweck nicht mehr erforderlich sind.",
      ],
    },
    {
      id: "ssl",
      heading: "4. SSL- bzw. TLS-Verschlüsselung",
      paragraphs: [
        "Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Ob eine Verbindung verschlüsselt ist, erkennen Sie an der Anzeige „https://“ in der Adresszeile Ihres Browsers.",
      ],
    },
    {
      id: "storage",
      heading: "5. Speicherung im Browser (Cookies und Local Storage)",
      paragraphs: [
        "Wir verwenden technisch notwendige Speicherungen in Ihrem Browser (Local Storage), um Ihre Sprachwahl und — nach Anmeldung — den Login-Status zu merken. Für die Einwilligung zu externen Medien speichern wir Ihre Auswahl (cookieConsentLevel).",
        "Beim ersten Besuch können Sie im Hinweisfenster wählen: „Alle akzeptieren“ (externe Videos werden geladen), „Nur notwendige“ oder „Ablehnen“ (keine externen Videos von Cloudinary). Sie können Ihre Wahl jederzeit ändern, indem Sie die Website-Daten im Browser löschen und die Seite neu laden — der Hinweis erscheint erneut.",
        "Rechtsgrundlage für notwendige Speicherungen: Art. 6 Abs. 1 lit. f DSGVO. Rechtsgrundlage für externe Medien nach Ihrer Einwilligung: Art. 6 Abs. 1 lit. a DSGVO; Widerruf jederzeit mit Wirkung für die Zukunft.",
      ],
    },
    {
      id: "cloudinary",
      heading: "6. Externe Medien (Cloudinary)",
      paragraphs: [
        "Videos auf der Startseite und in der Rubrik TV-Werbespots werden — sofern Sie zugestimmt haben — von Cloudinary Ltd. (USA) ausgeliefert. Dabei kann Ihre IP-Adresse an Cloudinary übermittelt werden.",
        "Ohne Einwilligung werden an diesen Stellen keine Cloudinary-Inhalte geladen; stattdessen wird ein neutraler Platzhalter angezeigt.",
        "Rechtsgrundlage bei Einwilligung: Art. 6 Abs. 1 lit. a DSGVO. Weitere Informationen: https://cloudinary.com/privacy",
      ],
    },
    {
      id: "contact",
      heading: "7. Kontakt per E-Mail",
      paragraphs: [
        "Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir die von Ihnen mitgeteilten Daten (z. B. Name, E-Mail-Adresse, Inhalt der Nachricht) zur Bearbeitung Ihrer Anfrage.",
        "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche/vertragliche Kommunikation) bzw. Art. 6 Abs. 1 lit. f DSGVO (allgemeine Anfragen). Die Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
      ],
    },
    {
      id: "login",
      heading: "8. Geschützter Bereich (Login)",
      paragraphs: [
        "Bestimmte Inhalte sind nach Eingabe eines Zugangspassworts erreichbar. Das Passwort wird ausschließlich im Rahmen des Website-Betriebs verwendet; eine Übermittlung an unsere Server zu Anmeldezwecken erfolgt nicht. Der Login-Status wird lokal im Browser gespeichert.",
        "Bitte behandeln Sie das Passwort vertraulich. Es dient nur dem vorübergehenden Schutz von Inhalten und ersetzt keine umfassende Zugriffskontrolle.",
      ],
    },
    {
      id: "pdf",
      heading: "9. Eingebettete Dokumente (PDF)",
      paragraphs: [
        "Presse- und Publikationsseiten zeigen PDF-Dateien in der Regel direkt von unserer Website an (ohne externen Videodienst). Dabei fallen keine zusätzlichen Drittanbieter-Zugriffe über Cloudinary an.",
      ],
    },
    {
      id: "rights",
      heading: "10. Ihre Rechte",
      paragraphs: [
        "Sie haben gegenüber uns folgende Rechte bezüglich der Sie betreffenden personenbezogenen Daten:",
      ],
      listItems: [
        "Recht auf Auskunft (Art. 15 DSGVO)",
        "Recht auf Berichtigung (Art. 16 DSGVO)",
        "Recht auf Löschung (Art. 17 DSGVO)",
        "Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)",
        "Recht auf Datenübertragbarkeit (Art. 20 DSGVO)",
        "Recht auf Widerspruch (Art. 21 DSGVO)",
        "Recht auf Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO)",
        "Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)",
      ],
      paragraphsAfter: [
        "Zur Ausübung Ihrer Rechte genügt eine Nachricht an peplies@pepliesconsult.de.",
      ],
    },
    {
      id: "authority",
      heading: "11. Zuständige Aufsichtsbehörde",
      paragraphs: [
        "Zuständige Aufsichtsbehörde für datenschutzrechtliche Beschwerden ist in der Regel:",
        "Der Hessische Beauftragte für Datenschutz und Informationsfreiheit\nGustav-Stresemann-Ring 1\n65189 Wiesbaden\nhttps://datenschutz.hessen.de",
      ],
    },
    {
      id: "updates",
      heading: "12. Aktualität",
      paragraphs: [
        "Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn sich die Website oder die Rechtslage ändert. Es gilt die jeweils auf dieser Seite veröffentlichte Fassung.",
        "Stand: Juni 2026",
      ],
    },
  ],
  en: [
    {
      id: "overview",
      heading: "1. Privacy at a glance",
      paragraphs: [
        "The following information provides an overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to identify you personally.",
        "This website does not use analytics or marketing tracking (e.g. Google Analytics).",
      ],
    },
    {
      id: "controller",
      heading: "2. Data controller",
      paragraphs: [
        "The controller responsible for data processing on this website is:",
        "peplies consult GmbH\nHöhenstraße 12\n65321 Heidenrod\nGermany",
        "Phone: +49 178 8271600 / +49 152 53823353\nEmail: peplies@pepliesconsult.de",
        "Managing director: Stephan Peplies",
        "Further details are available in our legal notice.",
      ],
    },
    {
      id: "hosting",
      heading: "3. Hosting",
      paragraphs: [
        "This website is hosted in Germany. The hosting provider is IONOS SE, Elgendorfer Str. 57, 56410 Montabaur (processor under Art. 28 GDPR on behalf of peplies consult GmbH).",
        "When you access pages, technically necessary data (e.g. IP address, time of access, browser type, referrer URL) is processed in server log files to provide the website and ensure security.",
        "Legal basis: Art. 6(1)(f) GDPR (legitimate interest in a secure and stable website). Log data is deleted by the host when no longer required.",
      ],
    },
    {
      id: "ssl",
      heading: "4. SSL/TLS encryption",
      paragraphs: [
        "This site uses SSL/TLS encryption for security. You can see whether a connection is encrypted from “https://” in your browser’s address bar.",
      ],
    },
    {
      id: "storage",
      heading: "5. Browser storage (cookies and local storage)",
      paragraphs: [
        "We use technically necessary browser storage (local storage) to remember your language choice and, after login, your authentication status. We store your choice regarding external media (cookieConsentLevel).",
        "On first visit you can choose: “Accept all” (external videos load), “Necessary only”, or “Decline” (no external Cloudinary videos). You can change your choice by clearing site data in your browser and reloading — the prompt will appear again.",
        "Legal basis for necessary storage: Art. 6(1)(f) GDPR. Legal basis for external media with consent: Art. 6(1)(a) GDPR; you may withdraw consent at any time.",
      ],
    },
    {
      id: "cloudinary",
      heading: "6. External media (Cloudinary)",
      paragraphs: [
        "Videos on the home page and TV commercials section are delivered by Cloudinary Ltd. (USA) if you have consented. Your IP address may be transmitted to Cloudinary.",
        "Without consent, Cloudinary content is not loaded; a neutral placeholder is shown instead.",
        "Legal basis with consent: Art. 6(1)(a) GDPR. More information: https://cloudinary.com/privacy",
      ],
    },
    {
      id: "contact",
      heading: "7. Contact by email",
      paragraphs: [
        "If you contact us by email, we process the data you provide (e.g. name, email address, message content) to handle your request.",
        "Legal basis: Art. 6(1)(b) GDPR (pre-contractual/contractual communication) or Art. 6(1)(f) GDPR (general enquiries). Data is deleted once your request has been fully handled unless statutory retention applies.",
      ],
    },
    {
      id: "login",
      heading: "8. Protected area (login)",
      paragraphs: [
        "Certain content is available after entering an access password. The password is used only for operating the website; it is not sent to our servers for authentication. Login status is stored locally in your browser.",
        "Please keep the password confidential. It only provides basic content protection, not comprehensive access control.",
      ],
    },
    {
      id: "pdf",
      heading: "9. Embedded documents (PDF)",
      paragraphs: [
        "Press and publications pages usually display PDF files directly from our website (without an external video provider). No additional third-party access via Cloudinary applies there.",
      ],
    },
    {
      id: "rights",
      heading: "10. Your rights",
      paragraphs: ["You have the following rights regarding your personal data:"],
      listItems: [
        "Right of access (Art. 15 GDPR)",
        "Right to rectification (Art. 16 GDPR)",
        "Right to erasure (Art. 17 GDPR)",
        "Right to restriction of processing (Art. 18 GDPR)",
        "Right to data portability (Art. 20 GDPR)",
        "Right to object (Art. 21 GDPR)",
        "Right to withdraw consent (Art. 7(3) GDPR)",
        "Right to lodge a complaint with a supervisory authority (Art. 77 GDPR)",
      ],
      paragraphsAfter: ["To exercise your rights, contact peplies@pepliesconsult.de."],
    },
    {
      id: "authority",
      heading: "11. Supervisory authority",
      paragraphs: [
        "The supervisory authority for data protection complaints is typically:",
        "The Hessian Commissioner for Data Protection and Freedom of Information\nGustav-Stresemann-Ring 1\n65189 Wiesbaden, Germany\nhttps://datenschutz.hessen.de",
      ],
    },
    {
      id: "updates",
      heading: "12. Updates",
      paragraphs: [
        "We may update this privacy policy when the website or legal requirements change. The version published on this page applies.",
        "Last updated: June 2026",
      ],
    },
  ],
  fr: [
    {
      id: "overview",
      heading: "1. Confidentialite en bref",
      paragraphs: [
        "Les informations suivantes donnent un apercu de ce qu'il advient de vos donnees personnelles lorsque vous visitez ce site. Les donnees personnelles sont toutes les donnees permettant de vous identifier.",
        "Ce site n'utilise pas d'outils d'analyse ou de marketing (p. ex. Google Analytics).",
      ],
    },
    {
      id: "controller",
      heading: "2. Responsable du traitement",
      paragraphs: [
        "Le responsable du traitement sur ce site est :",
        "peplies consult GmbH\nHöhenstraße 12\n65321 Heidenrod\nAllemagne",
        "Telephone : +49 178 8271600 / +49 152 53823353\nE-mail : peplies@pepliesconsult.de",
        "Dirigeant : Stephan Peplies",
        "Voir aussi nos mentions legales.",
      ],
    },
    {
      id: "hosting",
      heading: "3. Hebergement",
      paragraphs: [
        "Ce site est heberge en Allemagne. L'hebergeur est IONOS SE, Elgendorfer Str. 57, 56410 Montabaur (sous-traitant art. 28 RGPD pour peplies consult GmbH).",
        "Lors de l'acces, des donnees techniques (adresse IP, horodatage, type de navigateur, etc.) sont traitees dans des journaux serveur pour fournir le site et assurer la securite.",
        "Base juridique : art. 6 par. 1 lit. f RGPD (interet legitime). Les journaux sont supprimes par l'hebergeur lorsqu'ils ne sont plus necessaires.",
      ],
    },
    {
      id: "ssl",
      heading: "4. Chiffrement SSL/TLS",
      paragraphs: [
        "Ce site utilise le chiffrement SSL/TLS. Une connexion securisee est indiquee par « https:// » dans la barre d'adresse.",
      ],
    },
    {
      id: "storage",
      heading: "5. Stockage dans le navigateur",
      paragraphs: [
        "Nous utilisons le stockage local pour la langue, le statut de connexion et votre choix concernant les medias externes (cookieConsentLevel).",
        "Lors de la premiere visite : « Tout accepter » (videos externes), « Necessaire uniquement » ou « Refuser » (pas de videos Cloudinary). Vous pouvez modifier votre choix en effacant les donnees du site et en rechargeant la page.",
        "Base juridique : art. 6 par. 1 lit. f RGPD (necessaire) ; art. 6 par. 1 lit. a RGPD (medias externes avec consentement), revocable a tout moment.",
      ],
    },
    {
      id: "cloudinary",
      heading: "6. Medias externes (Cloudinary)",
      paragraphs: [
        "Les videos de la page d'accueil et de la section spots TV sont fournies par Cloudinary Ltd. (USA) si vous avez consenti. Votre adresse IP peut etre transmise.",
        "Sans consentement, un placeholder neutre s'affiche.",
        "Base juridique : art. 6 par. 1 lit. a RGPD. https://cloudinary.com/privacy",
      ],
    },
    {
      id: "contact",
      heading: "7. Contact par e-mail",
      paragraphs: [
        "Si vous nous contactez par e-mail, nous traitons les donnees fournies pour traiter votre demande (art. 6 par. 1 lit. b ou f RGPD). Suppression apres traitement sauf obligation legale de conservation.",
      ],
    },
    {
      id: "login",
      heading: "8. Zone protegee",
      paragraphs: [
        "Certains contenus necessitent un mot de passe d'acces. Il n'est pas envoye a nos serveurs ; le statut de connexion est stocke localement. Mot de passe strictement confidentiel.",
      ],
    },
    {
      id: "pdf",
      heading: "9. Documents PDF",
      paragraphs: [
        "Les pages presse et publications affichent en general des PDF depuis notre site, sans Cloudinary.",
      ],
    },
    {
      id: "rights",
      heading: "10. Vos droits",
      paragraphs: ["Vous disposez notamment des droits suivants :"],
      listItems: [
        "Droit d'acces (art. 15 RGPD)",
        "Droit de rectification (art. 16 RGPD)",
        "Droit a l'effacement (art. 17 RGPD)",
        "Droit a la limitation (art. 18 RGPD)",
        "Droit a la portabilite (art. 20 RGPD)",
        "Droit d'opposition (art. 21 RGPD)",
        "Droit de retirer votre consentement (art. 7 par. 3 RGPD)",
        "Droit de reclamation aupres d'une autorite de controle (art. 77 RGPD)",
      ],
      paragraphsAfter: ["Contact : peplies@pepliesconsult.de"],
    },
    {
      id: "authority",
      heading: "11. Autorite de controle",
      paragraphs: [
        "Autorite competente (Hesse, Allemagne) :",
        "Der Hessische Beauftragte fur Datenschutz und Informationsfreiheit\n65189 Wiesbaden\nhttps://datenschutz.hessen.de",
      ],
    },
    {
      id: "updates",
      heading: "12. Mise a jour",
      paragraphs: ["Nous pouvons adapter cette politique. Version en ligne applicable.", "Mise a jour : juin 2026"],
    },
  ],
  es: [
    {
      id: "overview",
      heading: "1. Privacidad en resumen",
      paragraphs: [
        "La siguiente informacion resume que ocurre con sus datos personales al visitar este sitio web. Los datos personales son todos los datos con los que puede ser identificado.",
        "Este sitio no utiliza herramientas de analisis o marketing (p. ej. Google Analytics).",
      ],
    },
    {
      id: "controller",
      heading: "2. Responsable del tratamiento",
      paragraphs: [
        "El responsable del tratamiento en este sitio es:",
        "peplies consult GmbH\nHöhenstraße 12\n65321 Heidenrod\nAlemania",
        "Telefono: +49 178 8271600 / +49 152 53823353\nCorreo: peplies@pepliesconsult.de",
        "Director gerente: Stephan Peplies",
        "Mas datos en nuestro aviso legal.",
      ],
    },
    {
      id: "hosting",
      heading: "3. Alojamiento",
      paragraphs: [
        "Este sitio se aloja en Alemania. El proveedor de alojamiento es IONOS SE, Elgendorfer Str. 57, 56410 Montabaur (encargado del tratamiento segun art. 28 RGPD por encargo de peplies consult GmbH).",
        "Al acceder se procesan datos tecnicos (IP, hora, navegador, etc.) en registros del servidor para prestar el sitio y garantizar la seguridad.",
        "Base legal: art. 6 ap. 1 lit. f RGPD (interes legitimo). Los registros se eliminan cuando ya no son necesarios.",
      ],
    },
    {
      id: "ssl",
      heading: "4. Cifrado SSL/TLS",
      paragraphs: [
        "Este sitio utiliza cifrado SSL/TLS. Una conexion segura se reconoce por « https:// » en la barra de direcciones.",
      ],
    },
    {
      id: "storage",
      heading: "5. Almacenamiento en el navegador",
      paragraphs: [
        "Usamos almacenamiento local para el idioma, el estado de inicio de sesion y su eleccion sobre medios externos (cookieConsentLevel).",
        "En la primera visita puede elegir: « Aceptar todo », « Solo necesario » o « Rechazar » (sin videos de Cloudinary). Puede cambiar la eleccion borrando los datos del sitio y recargando.",
        "Base legal: art. 6 ap. 1 lit. f RGPD (necesario); art. 6 ap. 1 lit. a RGPD (medios externos con consentimiento), revocable en cualquier momento.",
      ],
    },
    {
      id: "cloudinary",
      heading: "6. Medios externos (Cloudinary)",
      paragraphs: [
        "Los videos de la pagina de inicio y de spots TV se sirven desde Cloudinary Ltd. (EE. UU.) si ha dado su consentimiento. Su IP puede transmitirse.",
        "Sin consentimiento se muestra un marcador de posicion neutro.",
        "Base legal: art. 6 ap. 1 lit. a RGPD. https://cloudinary.com/privacy",
      ],
    },
    {
      id: "contact",
      heading: "7. Contacto por correo",
      paragraphs: [
        "Si nos contacta por correo, tratamos los datos facilitados para atender su solicitud (art. 6 ap. 1 lit. b o f RGPD). Supresion tras la gestion salvo obligacion legal de conservacion.",
      ],
    },
    {
      id: "login",
      heading: "8. Area protegida",
      paragraphs: [
        "Parte del contenido requiere contrasena de acceso. No se envia a nuestros servidores; el estado de sesion se guarda localmente. Mantenga la contrasena en secreto.",
      ],
    },
    {
      id: "pdf",
      heading: "9. Documentos PDF",
      paragraphs: [
        "Las paginas de prensa y publicaciones suelen mostrar PDF desde nuestro sitio, sin Cloudinary.",
      ],
    },
    {
      id: "rights",
      heading: "10. Sus derechos",
      paragraphs: ["Entre otros, tiene derecho a:"],
      listItems: [
        "Acceso (art. 15 RGPD)",
        "Rectificacion (art. 16 RGPD)",
        "Supresion (art. 17 RGPD)",
        "Limitacion del tratamiento (art. 18 RGPD)",
        "Portabilidad (art. 20 RGPD)",
        "Oposicion (art. 21 RGPD)",
        "Retirar el consentimiento (art. 7 ap. 3 RGPD)",
        "Reclamacion ante una autoridad de control (art. 77 RGPD)",
      ],
      paragraphsAfter: ["Contacto: peplies@pepliesconsult.de"],
    },
    {
      id: "authority",
      heading: "11. Autoridad de control",
      paragraphs: [
        "Autoridad competente (Hesse, Alemania):",
        "Der Hessische Beauftragte fur Datenschutz und Informationsfreiheit\n65189 Wiesbaden\nhttps://datenschutz.hessen.de",
      ],
    },
    {
      id: "updates",
      heading: "12. Actualizacion",
      paragraphs: ["Podemos actualizar esta politica. Aplica la version publicada aqui.", "Actualizado: junio de 2026"],
    },
  ],
}

export const getPrivacySections = (locale) =>
  privacySectionsByLocale[locale] || privacySectionsByLocale.de
