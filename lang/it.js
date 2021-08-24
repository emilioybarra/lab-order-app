import moment from 'moment'
import { termsAndConditionsDate } from '../utils/termsAndConditionsDate'

export default {
  common: {
    buttons: {
      back: 'Indietro',
      close: 'Chiudere',
      exit: 'Uscita',
      language: 'Lingua',
      selectFromTemplate: 'Scegliere dal modello',
      saveAsTemplate: 'Salva come modello',
      next: 'Avanti',
      newForm: 'Nuovo modulo',
      sentForms: 'Moduli inviati',
      save: 'Salva',
      cancel: 'Annulla',
      send: 'Inviare',
      preview: 'Anteprima PDF',
      download: 'Scaricare PDF',
      generatingPdf: 'Generazione di PDF...',
      search: 'Ricerca',
      apply: 'Applica',
      date: 'Data',
      dateRange: 'Intervallo di date',
      fromDate: 'Data da',
      toDate: 'Data a',
      select: 'Selezioni',
      login: 'Accesso',
      logout: 'Logout',
      allForms: 'Tutte le forme'
    },
    titles: {
      invoiceAddress: 'Indirizzo di fatturazione',
      upperTeeth: 'Denti superiori',
      lowerTeeth: 'Denti inferiori',
      sentForms: 'Moduli inviati',
      templates: 'Modelli',
      sendForm: 'Invii il modulo',
      orderForms: 'Moduli d\'ordine',
      login: 'Accesso'
    },
    headlines: {
      newForm: 'Creare un nuovo modulo',
      sentForms: 'Ottenere una panoramica di tutti i moduli inviati finora',
      emptyOrderForms: 'Non ha moduli inviati.',
      emptyOrderFormsSearch: 'Non sono stati trovati moduli corrispondenti.',
      emptyTemplates: 'Non ha modelli salvati.',
      orderSent: 'Il modulo è stato salvato e inviato con successo!'
    },
    labels: {
      expansion: '',
      compression: '',
      sectionType1: 'SE-NiTi',
      sectionType2: 'Acciaio',
      sectionType3: 'ß-Ti',
      templateTitle: 'Titolo del modello',
      searchPlaceholder: 'Cerca...',
      username: 'Nome utente',
      password: 'Password'
    },
    notifications: {
      savedOrderForm: 'Il modulo è stato salvato.',
      savedTemplate: 'Il modello è stato salvato.',
      deletedTemplate: 'Il modello è stato cancellato.',
      error: 'Errore, provi di nuovo, per favore.',
      errorLogin: '<strong>Errore:</strong> Username o password non sono validi.',
      invalidLines: 'Ha inserito troppe righe per il PDF.'
    }
  },
  section: {
    h_1: {
      contact: {
        title: 'Prenotazione:',
        openingTimes1: '<span>Da Lunedi a Giovedì ore</span><span>8.00 – 17.00</span>',
        openingTimes2: '<span>Venerdì ore</span><span>8.00 – 14.00</span>',
        telephone: '<span>Tel.:</span><span>+49 (0) 54 72-95 444-251</span>',
        fax: '<span>Fax:</span><span>+49 (0) 54 72-95 444-294</span>',
        email: 'win@lingualsystems.it'
      },
      address: {
        title: 'Inviare le impronte a:',
        streetHouse: 'Lindenstraße 44',
        zipCity: '49152 Bad Essen',
        country: 'Germany'
      }
    },
    h_2: {
      invoiceAddress: 'Indirizzo di fatturazione:',
      practice: 'Studio',
      orthodontist: 'Orthodontista',
      address: 'Indirizzo',
      postalcodeTownShort: 'Codice postale / Città',
      postalcodeTownLong: '',
      telephone: 'Telefono',
      telefax: 'Fax',
      email: 'Email',
      idVat: 'PARTITA IVA',
      patient: {
        lastName: 'Paziente: Cognome',
        firstName: 'Paziente: Nome',
        number: 'Paziente: Codice',
        dateOfBonding: 'data per il bandaggio'
      }
    },
    h_3: {
      standardSetup: '',
      standardSetupPlus: '',
      premiumSetupPlus: '',
      stateOrthodontistNameOnInvoice: 'Barrare la casella se si desidera avere il nome dell’ortodontista sulla fattura.',
      patientConsent: '(Il trasferimento di dati sanitari personali richiede un consenso scritto del paziente)',
      shippingAddress: 'Vi preghiamo di comunicarci se l’indirizzo di consegna non corrisponde all’indirizzo di fatturazione.'
    },
    u_1: {
      onlySetup: 'solo Set-up',
      euroTypeInfo: ''
    },
    u_2: {
      strippingTitle: '',
      boltonDiscrepancy: '',
      resolveCrowding: '',
      rcMm: '',
      rcWhere: '',
      reduceOverjet: '',
      roMm: '',
      roWhere: '',
      upperInfo: '',
      upperInfoLegend: '',
      notes: {
        title: 'Note:',
        stripping: 'Stripping',
        strippingMm: 'mm',
        where: 'Dove:',
        boltonDiscrepancy: 'Solo con discrepanza di Bolton',
        boxTitle: 'Note:'
      }
    },
    u_3: {
      title: 'Serie di fili arcata superiore',
      pleaseTick: 'Segnare i fili desiderati',
      straight: 'lat. Diritto',
      individual: 'lat. indiv.'
    },
    m_1: {
      notes: 'Note',
      remarksTitle: 'Note:',
      threeDSetup: '3D Foto dello set-up',
      tpa: 'TPA',
      herbst: 'Herbst',
      bondableHGTube: 'Tubo bondabile per TEO',
      bondableHGTubeWithShell: 'Basetta castomizzata in composito (bondabile) con Tubo per TEO',
      superpositionPhoto: '',
      dlcSteelWire: '',
      upperJaw: '',
      lowerJaw: '',
      keyInfoColors: [
        { label: 'B', color: '#72FBFD' },
        { label: 'T', color: '#909090' },
        { label: 'TL', color: '#EB3423' },
        { label: 'TLH', color: '#74FBB7' },
        { label: 'Ex', color: '#75FA4F' },
        { label: 'X', color: '#A12CF6' },
        { label: 'BA', color: '#000000' },
        { label: 'P', color: '#EA37C4' }
      ],
      keyInfo: `
        <strong>Da compilare:</strong> mancanti indicare sempre se si desidera chiudere o meno lo spazio.
      `,
      // Key Info for the PDF
      keyInfoLegendPDF: `
        <div><strong>B</strong> = bracket</div>&nbsp;|&nbsp;
        <div><strong>T</strong> = Tube</div>&nbsp;|&nbsp;
        <div><strong>TL</strong> = tubo lungo</div>&nbsp;|&nbsp;
        <div><strong>TLH</strong> = tubo lungo con gancio</div>&nbsp;|&nbsp;
        <div><strong>Ex</strong> = da estrarre</div>&nbsp;|&nbsp;
        <div><strong>X</strong> = dente mancante</div>&nbsp;|&nbsp;
        <div><strong>BA</strong> = banda</div>&nbsp;|&nbsp;
        <div><strong>P</strong> = estensione superficie occlusale</div>
      `,
      // Key Info for the TeethCanvas Component
      keyInfoLegend: [
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--b"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>B</strong>&nbsp;= bracket</div>',
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--t"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>T</strong>&nbsp;= Tube</div>',
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--tl"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>TL</strong>&nbsp;= tubo lungo</div>',
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--tlh"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>TLH</strong>&nbsp;= tubo lungo con gancio</div>',
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--ex"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>Ex</strong>&nbsp;= da estrarre</div>',
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--x"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>X</strong>&nbsp;= dente mancante</div>',
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--ba"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>BA</strong>&nbsp;= banda</div>',
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--p"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>P</strong>&nbsp;= estensione superficie occlusale</div>'
      ],
      keyInfoLegendLeft: [
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--b"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>B</strong>&nbsp;= bracket</div>',
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--t"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>T</strong>&nbsp;= Tube</div>',
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--tl"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>TL</strong>&nbsp;= tubo lungo</div>',
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--tlh"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>TLH</strong>&nbsp;= tubo lungo con gancio</div>'
      ],
      keyInfoLegendRight: [
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--ex"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>Ex</strong>&nbsp;= da estrarre</div>',
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--x"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>X</strong>&nbsp;= dente mancante</div>',
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--ba"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>BA</strong>&nbsp;= banda</div>',
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--p"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>P</strong>&nbsp;= estensione superficie occlusale</div>'
      ]
    },
    m_2: {
      noCorrectionOfBite: '',
      differingFromOneClassTitle: 'Se differente da un set-up in I classe:',
      rightCanine: 'Destra Canini',
      rightMolar: 'Destra Molari',
      leftCanine: 'Sinistra Canini',
      leftMolar: 'Sinistra Molari'
    },
    m_3: {
      tray: {
        title: 'Mascherina',
        nonTransparent: 'non-trasparente',
        trayTrimmed3_3: 'Mascherina tagliata da 3 a 3',
        transparent: 'trasparente'
      }
    },
    l_1: {
      onlySetup: 'solo Set-up',
      euroTypeInfo: ''
    },
    l_2: {
      strippingTitle: '',
      boltonDiscrepancy: '',
      resolveCrowding: '',
      rcMm: '',
      rcWhere: '',
      reduceOverjet: '',
      roMm: '',
      roWhere: '',
      lowerInfo: '',
      lowerInfoLegend: '',
      notes: {
        title: 'Note:',
        stripping: 'Stripping',
        strippingMm: 'mm',
        where: 'Dove:',
        boltonDiscrepancy: 'Solo con discrepanza di Bolton',
        boxTitle: 'Note:'
      }
    },
    l_3: {
      title: 'Serie di fili arcata inferiore',
      pleaseTick: 'Segnare i fili desiderati',
      straight: 'lat. Diritto',
      individual: 'lat. indiv.'
    },
    f_1: {
      generalTerms: 'Accetto le condizioni generali di vendita riportate sul retro',
      signature: '(Firma / timbro)',
      date: '(data)',
      version: 'TD-3.2 Rev.4.0i'
    }
  },
  agbs: {
    date: moment(termsAndConditionsDate, 'YYYY-MM-DD').format('YYYY-MM-DD'),
    title: 'Condizioni generali di vendita di DW LINGUAL SYSTEMS GMBH (“DW Lingual”)',
    content: `
      <strong>§ 1 Scopo</strong>
      <br>
      La vendita dei nostri prodotti e servizi è soggetta esclusivamente alle seguenti Condizioni Generali di Vendita (“AGB”). Queste Condizioni Generali di Vendita si intendono accettate dal Cliente senza riserve, anche se avesse precedentemen- te sollevato obiezioni al riguardo, dal momento in cui il Cliente riceve in conseg- na i nostri prodotti o accetta i nostri servizi. Ogni altro accordo che differisca da queste Condizioni Generali di Vendita è considerato valido ed efficace tra le parti solo previa autorizzazione scritta per ogni singola vendita. Queste Condi- zioni Generali di Vendita sono applicate esclusivamente nei riguardi di aziende nell’ambito della norma 14 BGB (Codice civile tedesco)
      <br><br>
      <strong>§ 2 Vendita e conclusione di contratto</strong>
      <br>
      Tutte le vendite di DW Lingual sono senza impegno e non vincolanti nella misura in cui non sono esplicitamente contrassegnati come vincolanti o contengono una certo termine di accettazione. Esclusivamente decisivo per i rapporti giuri- dici tra DW linguale e il cliente è il contratto stipulato in forma scritta, comprese le presenti Condizioni generali di vendita. I contratti tra DW Lingual ed il Cliente, le loro integrazioni e modificazioni, nonché integrazioni e modifiche a queste condizioni di vendita richiedono una forma scritta per essere valida, § 127 par. 2 BGB viene applicata.
      <br><br>
      <strong>§ 3 Prezzi e pagamento</strong>
      <br>
      I prezzi dei Prodotti sono calcolati sulla base del listino in vigore alla data di consegna della merce o della prestazione a cui va aggiunta la relativa tassazione I.V.A. L’importo della fattura deve essere pagato immediatamente senza alcuna detrazione, conclusiva è la ricevuta a DW Lingual. Qualora i termini di pagamen- to non venissero rispettati il cliente dovra’ pagare interesssi sulle esposizioni in essere calcolati dal giorno di scadenza ad un tasso di interesse di 8 punti percentuali sul tasso base di interesse p. a.; la pretesa di un interesse più alto e di danni ulteriori in caso di inadempienza rimane inalterato. La compensazione con contro-pretese del Cliente o il mantenimento dei pagamenti a causa di tali crediti è consentita solo nella misura in cui le contestazioni sono indiscusse o sono state dichiarate definitive e vincolanti. DW Lingual e’ in diritto di effettuare o fornire servizi e consegne eccezionali ancora per pagamenti anticipati o for- nitura di garanzia se le circostanze sono note dopo la conclusione del contratto attraverso il quale il pagamento dei crediti residui di DW Lingual da parte del cliente dal rispettivo rapporto contrattuale è a rischio.
      <br><br>
      <strong>§ 4 Consegna e tempi di consegna</strong>
      <br>
      Scadenze e date per le forniture e i servizi, come promesso da DW Lingual descri- vono la data prevista di spedizione. Indipendentemente dai diritti di DW Lingual dal ritardo del Cliente – la consegna e le scadenze del servizio sono prorogati dal periodo di tempo in cui il Cliente non soddisfa i propri obblighi contrattuali o re- sponsabilità nei confronti DW Lingual. Le responsabilità contrattuali del Cliente devono comprendere anche il chiarimento puntuale di tutti i dettagli dell‘ordine. In caso di inottemperanza colposa ad una data di consegna esplicitamente con- cordata per iscritto DW Lingual si considera solo in difetto dopo la scadenza infruttuosa di un ragionevole termine finale fissato dal Cliente per iscritto.
      <br><br>
      DW Lingual non è responsabile per impossibilità di consegna o di ritardi nella consegna nella misura in cui questi siano stati causati da forza maggiore o altri eventi, che non erano prevedibili al momento della conclusione del contratto, per i quali DW Lingual non era responsabile (ad esempio interferenze al funzi- onamento di tutti i tipi, difficoltà di approvvigionamento di materiali, ritardi nei trasporti o la consegna errata o tardiva dai fornitori) . Nella misura in cui tali eventi rendono la fornitura o il servizio notevolmente più difficile o impossibile da rendere per DW Lingual , e l‘impedimento non è solo di una durata tempora- nea, DW lingual ha il diritto di recedere dal contratto. In caso di impedimenti di durata temporanea la consegna e i termini del servizio sono prorogati o la con- segna o i termini di servizio devono essere rinviate dal tempo dell‘impedimento più un nuovo ragionevole tempo. Nella misura in cui l‘accettazione della fornitu- ra o del servizio non è considerato ragionevole per il cliente in conseguenza del ritardo il contratto puo’ essere annullato da una dichiarazione scritta immediata.
      <br><br>
      <strong>§ 5 Passaggio del rischio, spedizione, imballaggio</strong>
      <br>
      Il cliente si assume tutti i rischi dal momento in cui l’oggetto della spedizione passa al vettore o spedizioniere o altri terzi stabilito per l‘esecuzione della spe- dizione. Se la spedizione o la consegna è in ritardo a causa di una circostanza la cui causa risiede nel cliente, il rischio passa al cliente dal giorno in cui l‘oggetto della consegna è pronto per la spedizione e DW Lingual lo ha segnalato al Cli- ente. Il tipo di spedizione e l‘imballaggio sono soggetti alla discrezione respon- sabile di DW Lingual. I costi per la spedizione sono a carico del Cliente. I beni consegnati da DW linguale devono essere considerati come non sterili.
      <br><br>
      <strong>§ 6 Garanzia, difetti di qualità</strong>
      <br>
      L’adattamento accurato dei brackets individuali è solo garantito per la geome- tria della dentatura presentata nelle rispettive impronte dentali. È sempre ne- cessaria l’impronta in silicone per ciascuna arcata che deve essere trattata –per l’arcata antagonista è sufficiente il modello in gesso. Nel caso vogliate posizio- nare una sola arcata, vi preghiamo di indicare comunque se intendete trattare in qualche modo l’arcata opposta – anche se vestibolarmente. Modelli di set-up già disponibili devono essere inviati. Tutte le impronte e i modelli devono es- sere completamente disinfettati prima di essere spediti. Il medico curante deve esaminare la correttezza dell‘apparecchio nel suo complesso e dei suoi compo- nenti, che sono stati prodotti su misura in base alle sue indicazioni, e di cui se ne assume fin dall’inizio del trattamento piena responsabilità e per tutta la sua durata.
      <br><br>
      Gli oggetti consegnati devono essere esaminati con attenzione immediatamen- te dopo la consegna al cliente o a terzi. Essi sono considerati come approvati se DW Lingual non ha ricevuto una relazione scritta in riferimento a difetti evidenti o altri difetti, che erano riconoscibili con immediato, attento esame, entro cin- que giorni lavorativi dalla consegna dell’oggetto della fornitura o altrimenti ent- ro cinque giorni lavorativi dopo la scoperta del difetto o ogni volta precedente, in cui il difetto era riconoscibile per il cliente in caso di normale utilizzo dell’oggetto della consegna senza un esame più approfondito. DW Lingual è inizialmente obbligato e ha diritto ad una successiva fornitura di miglioramento o sostitu- zione a sua scelta, che deve essere eseguita entro un termine ragionevole. In caso di fallimento, per esempio la fornitura di miglioramento o sostituzione è impossibile, considerata irragionevole, è rifiutata o irragionevolmente ritardata il Cliente può recedere dal contratto o ragionevolmente ridurre il prezzo di ac- quisto. Se il difetto è da imputare a DW Lingual, il cliente puo’ richiederne i danni alle condizioni dei pre-requisiti determinati nel &7. La garanzia cessa di appli- carsi se il cliente cambia l’oggetto della consegna o esso viene cambiato da terzi senza il consenso di DW Lingual e la riparazione del difetto diventa impossibile o irragionevolmente resa più difficile. Il termine della garanzia è un anno dalla consegna o, nella misura in cui l’accettazione è necessaria, dall’accettazione. Lo statuto delle restrizioni per le domande di ricorso secondo § § 478, 479 BGB rimane inalterato.
      <br><br>
      <strong>§ 7 Responsabilità per danni a causa di difetto</strong>
      <br>
      DW Lingual non sarà responsabile in caso di semplice negligenza dei suoi organi, rappresentanti legali, dipendenti o altri ausiliari, in quanto non si tratta di una violazione degli obblighi contrattuali essenziali. Essenziale per il contratto sono l‘obbligo per la consegna puntuale dell‘oggetto della fornitura, che è privo di difetti sostanziali, nonché la consulenza, la protezione e i doveri di cura, che dov- rebbe rendere possibile per il Cliente utilizzare l‘oggetto della fornitura come per contratto o scopo alla protezione della vita o del corpo dei dipendenti del Cliente o di tutela della sua proprietà contro danni sostanziali. Nella misura in cui DW Lingual è responsabile per i danni in relazione a questo motivo la responsabilità è limitata ai danni che DW linguale ha previsto come possibile conseguenza di una violazione del contratto al momento della conclusione del contratto o che essa avrebbe dovuto prevedere l‘ applicazione della dovuta diligenza abituale e attenzione. Danni indiretti e danni consequenziali, che sono il risultato di difetti all‘oggetto della fornitura, sono in aggiunta solo in grado di compensazione nella misura in cui tali danni sono tipicamente da aspettarsi con l‘ utilizzo dell‘oggetto della fornitura come previsto. Le esclusioni suddette di restrizioni alla responsa- bilità si applicano nella stessa misura a beneficio dei corpi, rappresentanti legali, dipendenti e altri ausiliari di DW Lingual. Le restrizioni di questo § 7 non si appli- cano alla responsabilità di DW Lingual a causa di un comportamento doloso, per le caratteristiche condizioni garantite, a causa della lesione alla vita, al corpo o alla salute o ai sensi della legge sulla responsabilità del produttore.
      <br><br>
      Nella misura in cui DW Lingual fornisce informazioni tecniche o agisce in qualità di consulente e questa informazione o consiglio non appartiene al campo di applicazione dei servizi dovuti da esso e concordato come da contratto, questo avverrà gratuitamente e con l‘esclusione di ogni responsabilità.
      <br><br>
      <strong>§ 8 Riserva di proprietà</strong>
      <br>
      Le merci consegnate da DW Lingual rimarranno di proprietà di DW linguale ( „merci riservate“ ) fino al completo pagamento di tutti i crediti esistenti o crediti incorsi in futuro dal rapporto commerciale con il cliente. Il Cliente ha il diritto di trattare e di vendere i beni riservati in appropriate transazioni commerciali fino al verificarsi della situazione di vendita. Impegni e incarichi di garanzia non sono ammessi. Il cliente con la presente attribuisce le rivendicazioni derivanti da vendita o lavorazione delle merci riservate, cosi’ come altre rivendicazioni, che sostituiscono i beni riservati, a DW lingual, come misura precauzionale. Se il Cli- ente non soddisfa i suoi obblighi contrattuali DW Lingual ha il diritto di chiedere che i beni riservati vengano riconsegnati. DW linguale svincola i beni riservati, così come gli oggetti o i crediti, che li sostituiscono, su richiesta e a sua scelta, e nelle condizioni in cui il loro valore supera l‘ammontare dei crediti garantiti di oltre il 50 %.
      <br><br>
      <strong>§ 9 Protezione dei dati</strong>
      <br>
      Il Cliente è responsabile di assicurare che la trasmissione di tutti i dati dell‘ordine, in particolare dei dati sanitari personali, sia conforme con la legge vigente nell‘UE, nonché le leggi vigenti del paese, in cui ha sede il Cliente. Questo deve essere garantito ottenendo il consenso del paziente dopo relativa spiegazione o mediante l‘emissione di pseudonimi.
      <br><br>
      <strong>§ 10 Disposizioni finali</strong>
      <br>
      Il foro competente per tutte le eventuali controversie derivanti dal rapporto d‘affari tra DW linguale e il Cliente è a scelta di DW Lingual Bad Essen o la sede legale del Cliente. Bad Essen è il luogo esclusivo di giurisdizione per azioni contro DW linguale. Disposizioni statutarie obbligatorie in materia di luoghi esclusivi di competenza rimangono inalterati dal presente regolamento . Le relazioni tra DW Lingual ed il Cliente sono soggette esclusivamente alla legge della Repub- blica Federale di Germania. La Convenzione sulle Nazioni Unite riguardante i contratti per la vendita internazionale di merci dell‘11 April1980 ( CISG ) non si applica. Nella misura in cui il contratto o presenti condizioni generali d‘affari con- tengono lacune nei regolamenti, tali regolamenti giuridicamente efficaci sono considerati come concordato al fine di colmare le lacune che le parti contrattuali avrebbero concordato secondo gli obiettivi finanziari del contratto e lo scopo di questi condizioni generali di contratto se fossero stati a conoscenza della scap- patoia nel regolamento.
    `
  }
}
