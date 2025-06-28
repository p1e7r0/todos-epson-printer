/**
 * [cite_start]Controlla la stampa tramite la stampante. [cite: 233]
 */
export interface Printer {
  /**
   * [cite_start]Aggiunge l'impostazione di allineamento del testo al buffer dei comandi. [cite: 234]
   * @param align L'impostazione di allineamento.
   */
  addTextAlign(align: number): void;

  /**
   * [cite_start]Aggiunge l'impostazione dell'interlinea al buffer dei comandi. [cite: 234]
   * @param linespc L'interlinea in punti.
   */
  addTextLineSpace(linespc: number): void;

  /**
   * [cite_start]Aggiunge l'impostazione di rotazione del testo al buffer dei comandi. [cite: 234]
   * @param rotate true per abilitare la rotazione del testo.
   */
  addTextRotate(rotate: boolean): void;

  /**
   * [cite_start]Aggiunge il testo da stampare al buffer dei comandi. [cite: 234]
   * @param data Il testo da stampare.
   */
  addText(data: string): void;

  /**
   * [cite_start]Aggiunge l'impostazione della lingua al buffer dei comandi. [cite: 234]
   * @param lang La lingua da impostare.
   */
  addTextLang(lang: string): void;

  /**
   * [cite_start]Aggiunge l'impostazione del font dei caratteri al buffer dei comandi. [cite: 234]
   * @param font Il font dei caratteri.
   */
  addTextFont(font: number): void;

  /**
   * [cite_start]Aggiunge l'impostazione di smussatura dei caratteri al buffer dei comandi. [cite: 234]
   * @param smooth true per abilitare la smussatura.
   */
  addTextSmooth(smooth: boolean): void;

  /**
   * [cite_start]Aggiunge l'impostazione di raddoppio dei caratteri al buffer dei comandi. [cite: 234]
   * @param dw true per abilitare il raddoppio orizzontale.
   * @param dh true per abilitare il raddoppio verticale.
   */
  addTextDouble(dw?: boolean, dh?: boolean): void;

  /**
   * [cite_start]Aggiunge l'impostazione del fattore di scala dei caratteri al buffer dei comandi. [cite: 234]
   * @param width Il fattore di scala orizzontale.
   * @param height Il fattore di scala verticale.
   */
  addTextSize(width?: number, height?: number): void;

  /**
   * [cite_start]Aggiunge l'impostazione dello stile dei caratteri al buffer dei comandi. [cite: 234]
   * @param reverse true per lo stile invertito.
   * @param ul true per lo stile sottolineato.
   * @param em true per lo stile grassetto.
   * @param color Il colore.
   */
  addTextStyle(reverse?: boolean, ul?: boolean, em?: boolean, color?: number): void;

  /**
   * [cite_start]Aggiunge l'impostazione della posizione di inizio stampa orizzontale dei caratteri al buffer dei comandi. [cite: 234]
   * @param x La posizione di inizio stampa orizzontale in punti.
   */
  addTextPosition(x: number): void;

  /**
   * [cite_start]Aggiunge l'impostazione della posizione di inizio stampa verticale dei caratteri al buffer dei comandi. [cite: 234]
   * @param y La posizione di inizio stampa verticale in punti.
   */
  addTextVPosition(y: number): void;

  /**
   * [cite_start]Aggiunge l'impostazione di avanzamento carta in punti al buffer dei comandi. [cite: 234]
   * @param unit La quantità di avanzamento carta in punti.
   */
  addFeedUnit(unit: number): void;

  /**
   * [cite_start]Aggiunge l'impostazione di avanzamento carta in linee al buffer dei comandi. [cite: 234]
   * @param line La quantità di avanzamento carta in linee.
   */
  addFeedLine(line: number): void;

  /**
   * [cite_start]Aggiunge l'impostazione di controllo del foglio di ricevute ed etichette al buffer dei comandi. [cite: 234]
   * @param pos La posizione di controllo.
   */
  addFeedPosition(pos: number): void;

  /**
   * [cite_start]Aggiunge un'interlinea al buffer dei comandi. [cite: 234]
   */
  addFeed(): void;

  /**
   * [cite_start]Aggiunge un comando di stampa di un'immagine raster al buffer dei comandi. [cite: 234]
   * @param image L'immagine da stampare.
   */
  addImage(image: any): void;

  /**
   * [cite_start]Aggiunge un comando di stampa del logo NV al buffer dei comandi. [cite: 234]
   * @param key1 Il codice chiave 1 del logo.
   * @param key2 Il codice chiave 2 del logo.
   */
  addLogo(key1: number, key2: number): void;

  /**
   * [cite_start]Aggiunge un comando di stampa di un codice a barre al buffer dei comandi. [cite: 234]
   * @param data I dati del codice a barre.
   * @param type Il tipo di codice a barre.
   * @param hri La posizione del testo leggibile dall'uomo (HRI).
   * @param font Il font del testo leggibile dall'uomo.
   * @param width La larghezza del modulo.
   * @param height L'altezza del codice a barre.
   */
  addBarcode(data: string, type: number, hri: number, font: number, width: number, height: number): void;

  /**
   * [cite_start]Aggiunge un comando di stampa di un simbolo 2D al buffer dei comandi. [cite: 234]
   * @param data I dati del simbolo 2D.
   * @param type Il tipo di simbolo 2D.
   * @param level Il livello di correzione degli errori.
   * @param width La larghezza del modulo.
   * @param height L'altezza del modulo.
   * @param size La dimensione del simbolo.
   */
  addSymbol(data: string, type: number, level: number, width: number, height: number, size: number): void;

  /**
   * [cite_start]Aggiunge un comando di stampa di una linea rigata orizzontale al buffer dei comandi. [cite: 236]
   * @param x1 La posizione iniziale.
   * @param x2 La posizione finale.
   * @param style Lo stile della linea.
   */
  addHLine(x1: number, x2: number, style: number): void;

  /**
   * [cite_start]Aggiunge un comando di inizio di una linea rigata verticale al buffer dei comandi. [cite: 236]
   * @param x La posizione della linea.
   * @param style Lo stile della linea.
   */
  addVLineBegin(x: number, style: number): void;

  /**
   * [cite_start]Aggiunge un comando di fine di una linea rigata verticale al buffer dei comandi. [cite: 236]
   * @param x La posizione della linea.
   * @param style Lo stile della linea.
   */
  addVLineEnd(x: number, style: number): void;

  /**
   * [cite_start]Aggiunge un comando di inizio della modalità pagina al buffer dei comandi. [cite: 236]
   */
  addPageBegin(): void;

  /**
   * [cite_start]Aggiunge un comando di fine della modalità pagina al buffer dei comandi. [cite: 236]
   */
  addPageEnd(): void;

  /**
   * [cite_start]Aggiunge l'impostazione dell'area di stampa in modalità pagina al buffer dei comandi. [cite: 236]
   * @param x L'origine orizzontale.
   * @param y L'origine verticale.
   * @param width La larghezza dell'area di stampa.
   * @param height L'altezza dell'area di stampa.
   */
  addPageArea(x: number, y: number, width: number, height: number): void;

  /**
   * [cite_start]Aggiunge l'impostazione della direzione di stampa in modalità pagina al buffer dei comandi. [cite: 236]
   * @param dir La direzione di stampa.
   */
  addPageDirection(dir: number): void;

  /**
   * [cite_start]Aggiunge l'impostazione della posizione di stampa in modalità pagina al buffer dei comandi. [cite: 236]
   * @param x La posizione di stampa orizzontale.
   * @param y La posizione di stampa verticale.
   */
  addPagePosition(x: number, y: number): void;

  /**
   * [cite_start]Aggiunge un comando di disegno di una linea in modalità pagina al buffer dei comandi. [cite: 236]
   * @param x1 Posizione iniziale x.
   * @param y1 Posizione iniziale y.
   * @param x2 Posizione finale x.
   * @param y2 Posizione finale y.
   * @param style Stile della linea.
   */
  addPageLine(x1: number, y1: number, x2: number, y2: number, style: number): void;

  /**
   * [cite_start]Aggiunge un comando di disegno di un rettangolo in modalità pagina al buffer dei comandi. [cite: 236]
   * @param x1 Posizione iniziale x.
   * @param y1 Posizione iniziale y.
   * @param x2 Posizione finale x.
   * @param y2 Posizione finale y.
   * @param style Stile del rettangolo.
   */
  addPageRectangle(x1: number, y1: number, x2: number, y2: number, style: number): void;

  /**
   * [cite_start]Aggiunge l'inizio della modalità di stampa a rotazione batch al buffer dei comandi. [cite: 236]
   */
  addRotateBegin(): void;

  /**
   * [cite_start]Aggiunge la fine della modalità di stampa a rotazione batch al buffer dei comandi. [cite: 236]
   */
  addRotateEnd(): void;

  /**
   * [cite_start]Aggiunge un comando di taglio del foglio al buffer dei comandi. [cite: 236]
   * @param type Il tipo di taglio.
   */
  addCut(type?: number): void;

  /**
   * [cite_start]Aggiunge un comando di apertura del cassetto al buffer dei comandi. [cite: 236]
   * @param drawer Il cassetto da aprire.
   * @param time La durata dell'impulso.
   */
  addPulse(drawer?: number, time?: number): void;

  /**
   * [cite_start]Aggiunge un comando sonoro del cicalino al buffer dei comandi. [cite: 236]
   * @param pattern Il modello di suono.
   * @param repeat Il numero di ripetizioni.
   * @param cycle Il ciclo del suono.
   */
  addSound(pattern?: number, repeat?: number, cycle?: number): void;

  /**
   * [cite_start]Aggiunge l'impostazione del layout del foglio al buffer dei comandi. [cite: 236]
   * @param type Il tipo di layout.
   * @param width La larghezza.
   * @param height L'altezza.
   * @param marginTop Il margine superiore.
   * @param marginBottom Il margine inferiore.
   * @param offsetCut L'offset di taglio.
   * @param offsetLabel L'offset dell'etichetta.
   */
  addLayout(type: number, width: number, height: number, marginTop: number, marginBottom: number, offsetCut: number, offsetLabel: number): void;

  /**
   * [cite_start]Ripristina da un errore recuperabile. [cite: 236]
   */
  recover(): void;

  /**
   * [cite_start]Aggiunge un tag di ripristino da errore. [cite: 236]
   */
  addRecovery(): void;

  /**
   * [cite_start]Reimposta la stampante. [cite: 236]
   */
  reset(): void;

  /**
   * [cite_start]Aggiunge un tag di reset della stampante. [cite: 236]
   */
  addReset(): void;

  /**
   * [cite_start]Aggiunge un comando al buffer dei comandi. [cite: 236]
   * @param command Il comando da aggiungere.
   */
  addCommand(command: string): void;

  /**
   * [cite_start]Invia un documento di stampa. [cite: 236]
   * @param jobId L'ID del lavoro di stampa.
   */
  send(jobId?: string): void;

  /**
   * [cite_start]Stampa l'HTML5 Canvas. [cite: 236]
   * @param canvas L'elemento canvas.
   * @param cut true per tagliare dopo la stampa.
   * @param mode La modalità di stampa.
   * @param jobId L'ID del lavoro di stampa.
   */
  print(canvas: any, cut?: boolean, mode?: number, jobId?: string): void;

  /**
   * [cite_start]Acquisisce lo stato del lavoro di stampa. [cite: 236]
   * @param jobId L'ID del lavoro di stampa.
   */
  getPrintJobStatus(jobId: string): void;

  /**
   * [cite_start]Abilita l'evento di stato. [cite: 238]
   */
  startMonitor(): void;

  /**
   * [cite_start]Disabilita l'evento di stato. [cite: 238]
   */
  stopMonitor(): void;

  /**
   * [cite_start]Metodo di elaborazione a mezzitoni per le immagini raster. [cite: 238]
   */
  halftone: any;

  /**
   * [cite_start]Valore di compensazione della luminosità per le immagini raster. [cite: 238]
   */
  brightness: number;

  /**
   * [cite_start]Modalità di trasmissione forzata. [cite: 238]
   */
  force: boolean;

  /**
   * [cite_start]Periodo di timeout della trasmissione. [cite: 238]
   */
  timeout: number;

  /**
   * [cite_start]Intervallo di aggiornamento dello stato della stampante. [cite: 238]
   */
  interval: number;

  /**
   * [cite_start]Stato della linea del segnale del cassetto. [cite: 238]
   */
  drawerOpenLevel: any;

  /**
   * [cite_start]Manipolazione diretta del buffer dei comandi. [cite: 238]
   */
  message: string;

  /**
   * [cite_start]Evento di ricezione del documento di risposta. [cite: 238]
   */
  onreceive: (response: any) => void;

  /**
   * [cite_start]Evento di modifica dello stato. [cite: 238]
   */
  onstatuschange: (status: any) => void;

  /**
   * [cite_start]Evento di modifica dello stato della batteria. [cite: 238]
   */
  onbatterystatuschange: (status: any) => void;

  /**
   * [cite_start]Evento online. [cite: 238]
   */
  ononline: () => void;

  /**
   * [cite_start]Evento offline. [cite: 238]
   */
  onoffline: () => void;

  /**
   * [cite_start]Evento di assenza di risposta. [cite: 238]
   */
  onpoweroff: () => void;

  /**
   * [cite_start]Evento di chiusura del coperchio. [cite: 238]
   */
  oncoverok: () => void;

  /**
   * [cite_start]Evento di apertura del coperchio. [cite: 238]
   */
  oncoveropen: () => void;

  /**
   * [cite_start]Evento di carta rimanente. [cite: 238]
   */
  onpaperok: () => void;

  /**
   * [cite_start]Evento di carta quasi esaurita. [cite: 238]
   */
  onpapernearend: () => void;

  /**
   * [cite_start]Evento di fine carta. [cite: 238]
   */
  onpaperend: () => void;

  /**
   * [cite_start]Evento di chiusura del cassetto. [cite: 238]
   */
  ondrawerclosed: () => void;

  /**
   * [cite_start]Evento di apertura del cassetto. [cite: 238]
   */
  ondraweropen: () => void;

  /**
   * [cite_start]Evento di batteria rimanente. [cite: 238]
   */
  onbatteryok: () => void;

  /**
   * [cite_start]Evento di batteria in esaurimento. [cite: 238]
   */
  onbatterylow: () => void;

  // Costanti per i tipi di taglio, ereditate da ePOSBuilder
  CUT_FEED: number;
  CUT_NO_FEED: number;
  CUT_RESERVE: number;
}

// Definisce l'interfaccia per un'istanza di EPOSDevice, che rappresenta l'oggetto principale del SDK Epson ePOS.
// Include i metodi per la connessione e la creazione di dispositivi, oltre alle costanti rilevanti.
export interface EPOSDeviceInstance {
  // Costanti per i tipi di dispositivo
  DEVICE_TYPE_DISPLAY: string;
  DEVICE_TYPE_KEYBOARD: string;
  DEVICE_TYPE_MSR: string;
  DEVICE_TYPE_PRINTER: string;
  DEVICE_TYPE_SCANNER: string;
  DEVICE_TYPE_SIMPLE_SERIAL: string;
  DEVICE_TYPE_HYBRID_PRINTER: string;
  DEVICE_TYPE_HYBRID_PRINTER2: string;
  DEVICE_TYPE_DT: string;
  DEVICE_TYPE_POSKEYBOARD: string;
  DEVICE_TYPE_GFE: string;
  DEVICE_TYPE_OTHER_PERIPHERAL: string;
  DEVICE_TYPE_CAT: string;
  DEVICE_TYPE_CASH_CHANGER: string;

  // Costanti per i risultati
  RESULT_OK: string;
  ERROR_SYSTEM: string;
  ERROR_DEVICE_IN_USE: string;
  ERROR_DEVICE_OPEN: string;
  ERROR_DEVICE_CLOSE: string;
  ERROR_DEVICE_NOT_OPEN: string;
  ERROR_DEVICE_NOT_FOUND: string;
  ERROR_PARAMETER: string;

  connect(address: string, port: string | number, callback: (data: "OK" | "SSL_CONNECT_OK" | "ERROR_TIMEOUT" | "ERROR_PARAMETER") => void, options?: { eposprint?: boolean }): void;

  /**
   * Acquisisce l'oggetto dispositivo che funge da interfaccia del dispositivo. L'oggetto dispositivo viene passato alla funzione di callback.
   * @param deviceId Specifica l'ID del dispositivo come stringa.
   * @param deviceType Specifica il tipo di dispositivo.
   * @param options Specifica le proprietà utilizzando un oggetto letterale.
   * @param callback Una funzione di callback per ricevere il risultato dell'esecuzione.
   */
  createDevice(
    deviceId: string,
    deviceType: string,
    options: { crypto: boolean; buffer: boolean },
    callback: (printer: Printer, code: "OK" | "DEVICE_NOT_FOUND" | "DEVICE_IN_USE" | "DEVICE_OPEN_ERROR" | "DEVICE_TYPE_INVALID" | "ERROR_PARAMETER" | "SYSTEM_ERROR") => void
  ): void;

  /**
   * Acquisisce l'oggetto dispositivo che funge da interfaccia del dispositivo. L'oggetto dispositivo viene passato alla funzione di callback.
   * @param deviceId Specifica l'ID del dispositivo come stringa.
   * @param deviceType Specifica il tipo di dispositivo.
   * @param crypto Specifica se crittografare o meno i dati di comunicazione.
   * @param callback Una funzione di callback per ricevere il risultato dell'esecuzione.
   */
  createDevice(
    deviceId: string,
    deviceType: string,
    crypto: boolean,
    callback: (printer: Printer, code: "OK" | "DEVICE_NOT_FOUND" | "DEVICE_IN_USE" | "DEVICE_OPEN_ERROR" | "DEVICE_TYPE_INVALID" | "ERROR_PARAMETER" | "SYSTEM_ERROR") => void
  ): void;
}

// Definisce l'interfaccia per il costruttore di EPOSDevice.
// Questo risolve l'errore "This expression is not constructable" perché
// dichiara che il tipo ha una firma 'new'.
export interface EPOSDeviceConstructor {
  new (): EPOSDeviceInstance;
}
