export default {
  common: {
    buttons: {
      language: 'Sprache',
      notes: 'Notiz',
      selectFromTemplate: 'Aus Vorlage Wählen',
      saveAsTemplate: 'Als Vorlage Speichern',
      next: 'Weiter',
      newForm: 'Neues Formular',
      sentForms: 'Verschickte Formulare',
      save: 'Speichern',
      cancel: 'Abbrechen'
    },
    inputs: {
      agree: 'Ich habe die AGBs gelesen und stimme diesen zu.'
    },
    titles: {
      invoiceAddress: 'Rechnungsadresse',
      upperTeeth: 'Oberkiefer',
      lowerTeeth: 'Unterkiefer',
      sentForms: 'Verschickte Formulare',
      templates: 'Vorlagen'
    },
    headlines: {
      newForm: 'Erstellen Sie ein Neues Formular',
      sentForms: 'Bekommen Sie einen Überblick von allen bislang verschickten Formularen'
    }
  },
  section: {
    h_1: {},
    h_2: {
      invoiceAddress: 'Rechnungsadresse:',
      practice: 'Praxis',
      orthodontist: 'Behandler',
      address: 'Straße/Hausnummer',
      postalcodeTownShort: 'PLZ/Ort',
      postalcodeTownLong: '',
      telephone: 'Telefon',
      telefax: 'Fax',
      email: 'E-Mail',
      idVat: 'UST-ID',
      patient: {
        lastName: 'Nachname des Patienten',
        firstName: 'Vorname des Patienten',
        number: 'Patientennummer',
        dateOfBonding: 'Voraussichtl. Klebetermin'
      }
    },
    h_3: {
      standardSetup: '',
      standardSetupPlus: '',
      premiumSetupPlus: '',
      orthodontistInvoice: 'Soll der Name des Behandlers auf der Rechnung erscheinen?',
      patientConsent: '(Für die Übermittlung von personenbezogenen Gesundheitsdaten benötigen Sie die schriftliche Einwilligung Ihres Patienten)',
      // logoBox: '',
      shippingAddress: 'Bitte informieren Sie uns, wenn die Lieferadresse nicht mit der Rechnungsadresse übereinstimmt.',
      emptyBox: '',
      dwlsLogo: ''
    },
    u_1: {
      onlySetup: 'Nur Setup',
      euroTypeInfo: ''
    },
    u_2: {
      strippingTitle: 'Stripping:',
      boltonDiscrepancy: 'bei Boltondiskrepanz',
      resolveCrowding: 'Engstandsauflösung:',
      rcMm: 'mm',
      rcWhere: 'Wo:',
      reduceOverjet: 'Stufenreduktion:',
      roMm: 'mm',
      roWhere: 'Wo:',
      upperInfo: 'OK-Bögen mit Expansion',
      upperInfoLegend: `
        <p class="mb-1">1 = 1 cm Expansion</p>
        <p class="mb-1">2 = 2 cm Expansion (empfohlen)</p>
        <p class="mb-1">3 = 3 cm Expansion</p>
      `,
      notes: {
        title: '',
        strippingMm: '',
        where: '',
        boltonDiscrepancy: '',
        boxTitle: ''
      }
    },
    u_3: {},
    m_1: {
      notes: 'Notiz',
      remarksTitle: 'Bemerkungen:',
      '3dSetup': '3D Setup-Fotos',
      tpa: 'TPA',
      herbst: 'Herbst',
      bondableHGTube: 'HG-Tube auf Basis',
      bondableHGTubeWithShell: 'HG-Tube auf Basis mit Kunststoffschale',
      superpositionPhoto: '',
      dlcSteelWire: '',
      upperJaw: '',
      lowerJaw: '',
      keyInfo: 'Bitte ausfüllen: Bei fehlenden Zähnen bitte immer angeben, ob Lückenschluss gewünscht wird.',
      keyInfoLegend: `
        <div><strong>B</strong> = Bracket</div>&nbsp;|&nbsp;
        <div><strong>T</strong> = Tube</div>&nbsp;|&nbsp;
        <div><strong>TL</strong> = langes Tube</div>&nbsp;|&nbsp;
        <div><strong>TLH</strong> = langes Tube mit Hook</div>&nbsp;|&nbsp;
        <div><strong>TR</strong> = Tube rund</div>&nbsp;|&nbsp;
        <div><strong>TRH</strong> = Tube rund mit Hook</div>&nbsp;|&nbsp;
        <div><strong>Ex</strong> = zu extrahieren</div>&nbsp;|&nbsp;
        <div><strong>X</strong> = fehlt</div>&nbsp;|&nbsp;
        <div><strong>BA</strong> = geg. Band</div>&nbsp;|&nbsp;
        <div><strong>P</strong> = okklusale Klebebasis</div>
      `
    },
    m_2: {
      noCorrectionOfBite: 'Keine Bisslagekorrektur',
      differingFromOneClassTitle: '',
      rightCanine: '',
      rightMolar: '',
      leftCanine: '',
      leftMolar: ''
    },
    m_3: {
      tray: {
        title: 'Tray',
        nonTransparent: 'Non-Transparent',
        trayTrimmed3_3: 'Tray ausgeschnitten 3-3',
        transparent: 'Transparent'
      }
    },
    l_1: {
      onlySetup: 'Nur Setup',
      euroTypeInfo: ''
    },
    l_2: {
      strippingTitle: 'Stripping:',
      boltonDiscrepancy: 'bei Boltondiskrepanz',
      resolveCrowding: 'Engstandsauflösung:',
      rcMm: 'mm',
      rcWhere: 'Wo:',
      reduceOverjet: 'Stufenreduktion:',
      roMm: 'mm',
      roWhere: 'Wo:',
      lowerInfo: 'UK-Bögen mit Kompression',
      lowerInfoLegend: `
        <p class="mb-1">1 = 1 cm Kompression (empfohlen)</p>
        <p class="mb-1">2 = 2 cm Kompression</p>
      `,
      notes: {
        title: '',
        strippingMm: '',
        where: '',
        boltonDiscrepancy: '',
        boxTitle: ''
      }
    },
    l_3: {}
  },
  agbs: {
    title: 'ALLGEMEINE GESCHÄFTSBEDINGUNGEN',
    content: `
      <strong>§ 1 Geltung</strong>
      <br>
      Alle Lieferungen, Leistungen und Angebote der DW Lingual erfolgen ausschließlich aufgrund dieser Allgemeinen Geschäftsbedingungen („AGB“). Sie gelten spätestens mit Abnahme der Ware oder sonstigen Leistung als vereinbart, selbst wenn der Vertragspartner („AG“) ihnen zuvor widersprochen haben sollte. AGB des AG oder Dritter finden keine Anwendung, auch wenn DW Lingual ihrer Geltung im Einzelfall nicht gesondert widerspricht. Diese AGB gelten nur gegenüber Unternehmen im Sinne von § 14 BGB.
      <br><br>
      <strong>§ 2 Angebot und Vertragsabschluss</strong>
      <br>
      Alle Angebote der DW Lingual sind freibleibend und unverbindlich, sofern sie nicht ausdrück- lich als verbindlich gekennzeichnet sind oder eine bestimmte Annahmefrist enthalten. Allein maßgeblich für die Rechtsbeziehungen zwischen DW Lingual und dem AG ist der schriftlich geschlossene Vertrag, einschließlich dieser AGB. Verträge zwischen DW Lingual und dem AG, deren Ergänzungen und Abänderungen sowie Ergänzungen und Abänderungen dieser AGB bedürfen zu ihrer Wirksamkeit der Schriftform, es gilt § 127 Abs. 2 BGB.
      <br><br>
      <strong>§ 3 Preise und Zahlung</strong>
      <br>
      Es gelten die am Tag der Lieferung oder Leistung gültigen Preise zuzüglich der Umsatzsteuer in der jeweiligen gesetzlich bestimmten Höhe. Rechnungsbeträge sind sofort ohne jeden Abzug zu bezahlen, maßgebend ist der Eingang bei DW Lingual. Leistet der AG bei Fälligkeit nicht, so sind die ausstehenden Beträge ab dem Tag der Fälligkeit mit 8 Prozentpunkten über dem Basiszinssatz p. a. zu verzinsen; die Geltendmachung höherer Zinsen und weiterer Schäden im Falle des Verzugs bleibt unberührt. Die Aufrechnung mit Gegenansprüchen des AG oder die Zurückbehaltung von Zahlungen wegen solcher Ansprüche ist nur zulässig, so- weit die Gegenansprüche unbestritten oder rechtskräftig festgestellt sind.
      <br><br>
      DW Lingual ist berechtigt, noch ausstehende Lieferungen oder Leistungen nur gegen Voraus- zahlung oder Sicherheitsleistung auszuführen oder zu erbringen, wenn nach Abschluss des Vertrages Umstände bekannt werden, durch welche die Bezahlung der offenen Forderungen der DW Lingual durch den AG aus dem jeweiligen Vertragsverhältnis gefährdet wird.
      <br><br>
      <strong>§ 4 Lieferung und Lieferzeit</strong>
      <br>
      Von DW Lingual in Aussicht gestellte Fristen und Termine für Lieferungen und Leistungen be- zeichnen das voraussichtliche Versanddatum. Unbeschadet der Rechte der DW Lingual aus Verzug des AG – verlängern sich Liefer- und Leistungsfristen um den Zeitraum, in dem der AG seinen vertraglichen Verpflichtungen oder Obliegenheiten der DW Lingual gegenüber nicht nachkommt. Zu den vertraglichen Obliegenheiten des Auftraggebers zählt auch die recht- zeitige Klarstellung aller Einzelheiten des Auftrags. Bei schuldhafter Nichteinhaltung eines ausdrücklich schriftlich vereinbarten Liefertermins tritt Verzug der DW Lingual erst nach er- folglosem Ablauf einer vom AG schriftlich gesetzten angemessene Nachfrist ein.
      <br><br>
      DW Lingual haftet nicht für Unmöglichkeit der Lieferung oder für Lieferverzögerungen, so- weit diese durch höhere Gewalt oder sonstige, zum Zeitpunkt des Vertragsabschlusses nicht vorhersehbare, von DW Lingual nicht zu vertretende Ereignisse (z.B. Betriebsstörungen aller Art, Schwierigkeiten in der Materialbeschaffung, Transportverzögerungen, oder nicht richtige oder nicht rechtzeitige Belieferung durch Lieferanten) verursacht worden sind. Sofern solche Ereignisse der DW Lingual die Lieferung oder Leistung wesentlich erschweren oder unmög- lich machen und die Behinderung nicht nur von vorübergehender Dauer ist, ist DW Lingual zum Rücktritt vom Vertrag berechtigt. Bei Hindernissen vorübergehender Dauer verlängern sich die Liefer- oder Leistungsfristen oder verschieben sich die Liefer- oder Leistungstermine um den Zeitraum der Behinderung zuzüglich einer angemessenen Anlauffrist. Soweit dem AG infolge der Verzögerung die Abnahme der Lieferung oder Leistung nicht zuzumuten ist, kann er durch unverzügliche schriftliche Erklärung vom Vertrag zurücktreten.
      <br><br>
      <strong>§ 5 Gefahrübergang, Versand, Verpackung</strong>
      <br>
      Die Gefahr geht spätestens mit der Übergabe des Liefergegenstandes an den Spediteur, Frachtführer oder sonst zur Ausführung der Versendung bestimmten Dritten auf den AG über. Verzögert sich der Versand oder die Übergabe infolge eines Umstandes, dessen Ursache beim AG liegt, geht die Gefahr von dem Tag an auf den AG über, an dem der Liefergegen- stand versandbereit ist und DW Lingual dies dem AG angezeigt hat. Die Versandart und die Verpackung unterstehen dem pflichtgemäßen Ermessen der DW Lingual. Die Kosten des Versands trägt der AG. Von DW Lingual gelieferte Ware ist als nicht steril zu behandeln.
      <br><br>
      <strong>§ 6 Gewährleistung, Sachmängel</strong>
      <br>
      Die Passgenauigkeit der individuellen Brackets wird nur für die Geometrie des in den je- weiligen Abdrücken dargestellten Gebisses gewährleistet. Für jeden zu beklebenden Kiefer ist ein Silikonabdruck einzureichen, für Gegenbisse genügt ein Gipsmodell. Wenn nur ein Kiefer positioniert werden soll, ist dennoch mitzuteilen, ob im Gegenkiefer eine Behandlung, ggf. auch labial, geplant ist. Bereits vorhandene Setup-Modelle sind zu übersenden. Alle Abdrücke und Modelle sind vor Versand vollständig zu desinfizieren. Der behandelnde Arzt hat die Richtigkeit der Apparatur als Ganzes und aller ihrer Bestandteile, die auf seine An- weisung hin in Sonderanfertigung vom Auftragnehmer hergestellt wurden, zu überprüfen und mit Beginn der Behandlung die volle Verantwortung für die gesamte Behandlungsdauer zu übernehmen.
      <br><br>
      Die gelieferten Gegenstände sind unverzüglich nach Ablieferung an den AG oder an den von ihm bestimmten Dritten sorgfältig zu untersuchen. Sie gelten als genehmigt, wenn DW Lingual nicht eine schriftliche Mängelrüge hinsichtlich offensichtlicher Mängel oder anderer Mängel, die bei einer unverzüglichen, sorgfältigen Untersuchung erkennbar waren, binnen fünf Werktagen nach Ablieferung des Liefergegenstandes oder ansonsten binnen fünf Werk- tagen nach der Entdeckung des Mangels oder jedem früheren Zeitpunkt, in dem der Mangel für den AG bei normaler Verwendung des Liefergegenstandes ohne nähere Untersuchung erkennbar war, zugegangen ist.
      <br><br>
      Bei Sachmängeln der gelieferten Gegenstände ist DW Lingual nach seiner innerhalb an- gemessener Frist zu treffenden Wahl zunächst zur Nachbesserung oder Ersatzlieferung verpflichtet und berechtigt. Im Falle des Fehlschlagens, d.h. der Unmöglichkeit, Unzumut- barkeit, Verweigerung oder unangemessenen Verzögerung der Nachbesserung oder Ersatz- lieferung, kann der AG vom Vertrag zurücktreten oder den Kaufpreis angemessen mindern. Beruht ein Mangel auf dem Verschulden der DW Lingual, kann der AG unter den in § 7 be- stimmten Voraussetzungen Schadensersatz verlangen. Die Gewährleistung entfällt, wenn der AG ohne Zustimmung der DW Lingual den Liefergegenstand ändert oder durch Dritte än- dern lässt und die Mängelbeseitigung hierdurch unmöglich oder unzumutbar erschwert wird.
      <br><br>
      Die Gewährleistungsfrist beträgt ein Jahr ab Lieferung oder, soweit eine Abnahme erforder- lich ist, ab der Abnahme. Die gesetzlichen Verjährungsfristen für Rückgriffsansprüche nach den §§ 478, 479 BGB bleiben unberührt.
      <br><br>
      <strong>§ 7 Haftung auf Schadensersatz wegen Verschuldens</strong>
      <br>
      DW Lingual haftet nicht im Falle einfacher Fahrlässigkeit seiner Organe, gesetzlichen Ver- treter, Angestellten oder sonstigen Erfüllungsgehilfen, soweit es sich nicht um eine Verlet- zung vertragswesentlicher Pflichten handelt. Vertragswesentlich sind die Verpflichtung zur rechtzeitigen Lieferung des von wesentlichen Mängeln freien Liefergegenstands sowie Be- ratungs-, Schutz- und Obhutspflichten, die dem AG die vertragsgemäße Verwendung des Liefergegenstands ermöglichen sollen oder den Schutz von Leib oder Leben von Personal des AG oder den Schutz von dessen Eigentum vor erheblichen Schäden bezwecken. Soweit DW Lingual dem Grunde nach auf Schadensersatz haftet, ist diese Haftung auf Schäden begrenzt, die DW Lingual bei Vertragsschluss als mögliche Folge einer Vertragsverletzung vorausgesehen hat oder die er bei Anwendung verkehrsüblicher Sorgfalt hätte voraussehen müssen. Mittelbare Schäden und Folgeschäden, die Folge von Mängeln des Liefergegen- stands sind, sind außerdem nur ersatzfähig, soweit solche Schäden bei bestimmungsgemä- ßer Verwendung des Liefergegenstands typischerweise zu erwarten sind. Die vorstehenden Haftungsausschlüsse und -beschränkungen gelten in gleichem Umfang zugunsten der Orga- ne, gesetzlichen Vertreter, Angestellten und sonstigen Erfüllungsgehilfen der DW Lingual. Die Einschränkungen dieses § 7 gelten nicht für die Haftung der DW Lingual wegen vorsätzlichen Verhaltens, für garantierte Beschaffenheitsmerkmale, wegen Verletzung des Lebens, des Körpers oder der Gesundheit oder nach dem Produkthaftungsgesetz.
      <br><br>
      Soweit DW Lingual technische Auskünfte gibt oder beratend tätig wird und diese Auskünfte oder Beratung nicht zu dem von ihm geschuldeten, vertraglich vereinbarten Leistungsum- fang gehören, geschieht dies unentgeltlich und unter Ausschluss jeglicher Haftung.
      <br><br>
      <strong>§ 8 Eigentumsvorbehalt</strong>
      <br>
      Die von DW Lingual gelieferte Ware bleibt bis zur vollständigen Bezahlung aller bestehenden oder zukünftig entstehenden Forderungen aus der Geschäftsverbindung mit dem AG Eigen- tum der DW Lingual („Vorbehaltsware“). Der AG ist berechtigt, die Vorbehaltsware bis zum Eintritt des Verwertungsfalls im ordnungsgemäßen Geschäftsverkehr zu verarbeiten und zu veräußern. Verpfändungen und Sicherungsübereignungen sind unzulässig. Der AG tritt DW Lingual bereits jetzt Ansprüche aus einer Veräußerung oder Verarbeitung der Vorbehaltswa- re sowie sonstige Ansprüche, die an die Stelle der Vorbehaltsware treten, sicherungshalber ab. Erfüllt der AG seine Vertragspflichten nicht, ist DW Lingual berechtigt, die Vorbehaltsware herauszuverlangen. DW Lingual wird die Vorbehaltsware sowie die an ihre Stelle tretenden Sachen oder Forderungen auf Verlangen nach seiner Wahl freigeben, soweit ihr Wert die Höhe der gesicherten Forderungen um mehr als 50% übersteigt.
      <br><br>
      <strong>§ 9 Datenschutz</strong>
      <br>
      Der AG ist dafür verantwortlich, dass die Übermittlung aller Auftragsdaten, insbesondere der personenbezogenen Gesundheitsdaten, dem in der EU geltendem Recht sowie den gelten- den Gesetzen des Landes, in dem der AG ansässig ist, entspricht. Dies ist durch Einholung des Einverständnisses des Patienten nach entsprechender Aufklärung oder durch Pseudo- nymisierung sicherzustellen.
      <br><br>
      <strong>§ 10 Schlussbestimmungen</strong>
      <br>
      Gerichtsstand für alle etwaigen Streitigkeiten aus der Geschäftsbeziehung zwischen DW Lin- gual und dem AG ist nach Wahl der DW Lingual Bad Essen oder der Sitz des AG. Für Klagen gegen DW Lingual ist Bad Essen ausschließlicher Gerichtsstand. Zwingende gesetzliche Be- stimmungen über ausschließliche Gerichtsstände bleiben von dieser Regelung unberührt.
      <br><br>
      Die Beziehungen zwischen DW Lingual und dem AG unterliegen ausschließlich dem Recht der Bundesrepublik Deutschland. Das Übereinkommen der Vereinten Nationen über Verträ- ge über den internationalen Warenkauf vom 11. April 1980 (CISG) gilt nicht.
      <br><br>
      Soweit der Vertrag oder diese AGB Regelungslücken enthalten, gelten zur Ausfüllung dieser Lücken diejenigen rechtlich wirksamen Regelungen als vereinbart, welche die Vertragspart- ner nach den wirtschaftlichen Zielsetzungen des Vertrages und dem Zweck dieser AGB ver- einbart hätten, wenn sie die Regelungslücke gekannt hätten.
    `
  }
}
