
const questions = [
    {
      question: "Quale aggettivo si addice a Gabriella?",
      answers: [
        {text: "Furba", correct: false},
        {text: "Diligente", correct: false},
        {text: "Ciucca", correct: false},
        {text: "Luminosa", correct: true}
      ]
    },
    {
      question: "L'efficienza dinamica consiste nel:",
      answers: [
        {text: "Garantire la massimizzazione dei profitti in ogni istante", correct: false},
        {text: "Garantire l'innovazione tecnologica mediante investimenti in ricerca e sviluppo (R&S)", correct: true},
        {text: "Garantire la massimizzazione del surplus totale in ogni istante futuro", correct: false}
      ]
    },
    {
      question: "Il trade off incentivo-accesso e quello incentivo-creatività:",
      answers: [
        {text: "Inducono a togliere il copyright sulle opere derivate", correct: false},
        {text: "Suggeriscono la definizione ristretta di copyright in vigore fino ad oggi", correct: true},
        {text: "Inducono a fissare un livello molto alto di protezione per ciascun autore", correct: false}
      ]
    },
    {
      question: "La riproduzione verticale analogica e digitale di un bene d'informazione:",
      answers: [
        {text: "Rende superflua l'appropriazione indiretta da parte del produttore originale", correct: true},
        {text: "È sempre viziata dal degradamento qualitativo delle copie", correct: false},
        {text: "Ha effetti diversi sul degradamento delle copie", correct: false}
      ]
    },
    {
      question: "L'open source può essere definito come una strategia di apertura?",
      answers: [
        {text: "Vero", correct: true},
        {text: "Falso", correct: false}
      ]
    },
    {
      question: "Tra le peculiarità della domanda di informazione vi è il fatto che:",
      answers: [
        {text: "I beni di informazione sono beni di esperienza", correct: true},
        {text: "Essa ha una grande componente di stagionalità", correct: false},
        {text: "I costi fissi sono molto bassi", correct: false}
      ]
    },
    {
        question: "Tra le peculiarità della domanda di informazione vi è il fatto che:",
        answers: [
          {text: "I beni di informazione sono tendenzialmente omogenei", correct: false},
          {text: "I costi variabili e i costi marginali sono alti", correct: false},
          {text: "I beni di informazione sono soggetti a particolari diritti di proprietà", correct: true}
        ]
      },
    {
      question: "In base al bundling:",
      answers: [
        {text: "Due o più prodotti vengono venduti insieme a un consumatore ad un prezzo globale minore della somma dei prezzi che il consumatore è disposto a pagare per acquistare ciascuno dei beni separatamente", correct: true},
        {text: "Due o più prodotti vengono venduti insieme a un consumatore ad un prezzo globale maggiore della somma dei prezzi che il consumatore è disposto a pagare per acquistare ciascuno dei beni separatamente", correct: false},
        {text: "Due o più prodotti vengono venduti insieme a un consumatore ad un prezzo globale che non rispecchia i prezzi che il consumatore è disposto a pagare per acquistare ciascuno dei beni separatamente", correct: false}
      ]
    },
    {
      question: "La tragedia degli anti commons genera:",
      answers: [
        {text: "Una restrizione dell'accesso ai beni di informazione quando tutti i diritti di proprietà intellettuale sono detenuti esclusivamente da un solo monopolista", correct: false},
        {text: "Una restrizione dell'accesso ai beni di informazione quando diversi individui detengono diritti esclusivi di proprietà intellettuale", correct: true},
        {text: "Un eccessivo accesso ai beni di informazione quando diversi individui detengono diritti esclusivi di proprietà intellettuale", correct: false}
      ]
    },
    {
      question: "L'ampiezza dei brevetti:",
      answers: [
        {text: "È stabilita dall'ufficio brevetti ex post e dai tribunali ex ante", correct: false},
        {text: "È stabilita dai tribunali ex post", correct: false},
        {text: "È stabilita dall'ufficio brevetti ex ante e dai tribunali ex post", correct: true}
      ]
    },
    {
      question: "I brevetti:",
      answers: [
        {text: "Possono talora avere una durata illimitata nel tempo", correct: false},
        {text: "Hanno una durata limitata nel tempo a 20 anni", correct: true},
        {text: "Hanno una durata limitata nel tempo a 30 anni", correct: false}
      ]
    },
    {
      question: "I brevetti sono:",
      answers: [
        {text: "Una forma di proprietà intellettuale che si applica alle opere creative", correct: false},
        {text: "Una forma di proprietà intellettuale che si applica alle invenzioni che possono avere un'applicazione industriale", correct: true},
        {text: "Una forma di proprietà intellettuale che si applica alle invenzioni e alle opere creative", correct: false}
      ]
    },
    {
      question: "Nell'editoria a pagamento:",
      answers: [
        {text: "Si configurano non di rado vere e proprie truffe a danno di autori inesperti", correct: true},
        {text: "Sono assenti le pubblicazioni scientifiche", correct: false},
        {text: "Sono presenti le grandi piattaforme online", correct: false}
      ]
    },
    {
      question: "Come si può ottenere la leadership di costo nel settore dei beni di informazione?",
      answers: [
        {text: "Tenendo sufficientemente elevati i prezzi dei prodotti", correct: false},
        {text: "Offrendo prodotti di nicchia", correct: false},
        {text: "Sfruttando le economie di scala", correct: true}
      ]
    },
    {
      question: "Un operaio telefonico offre 50 euro di sconto sull’acquisto di cellulari ai consumatori che decidono di passare ad esso; in questo caso gli switching costs totali:",
      answers: [
        {text: "Rimangono costanti", correct: false},
        {text: "Diminuiscono di 50", correct: true},
        {text: "Aumentano di 50", correct: false}
      ]
    },
    {
      question: "Risultati delle asimmetrie informative sono:",
      answers: [
        {text: "Azzardo morale", correct: true},
        {text: "Selezione avversa", correct: true}
      ]
    },
    {
      question: "La discriminazione di prezzo rivolta ai consumatori privati:",
      answers: [
        {text: "Implica che il prezzo di vendita includa una appropriazione indiretta basata su una stima probabilistica del numero medio di copie concesse dal consumatore", correct: false},
        {text: "È uguale a quella diretta a consumatori istituzionali", correct: false},
        {text: "Include una appropriazione indiretta basata sul numero di fruizioni del prodotto", correct: true}
      ]
    },
    {
      question: "Tra i fattori da considerare per calcolare l’appropriazione indiretta vi è:",
      answers: [
        {text: "Il margine di ricavo dell’acquirente diretto", correct: false},
        {text: "Utilità dell’acquirente indiretto", correct: true},
        {text: "La rigidità della domanda", correct: false}
      ]
    },
    {
      question: "Un open source software:",
      answers: [
        {text: "Mette a disposizione sia la tecnologia che i codici sorgente gratuitamente a condizione che le riproduzioni e gli adattamenti (opere derivate) siano resi disponibili a chiunque secondo lo stesso schema di licenza", correct: true},
        {text: "Mette a disposizione solo i codici sorgente gratuitamente a condizione che le riproduzioni e gli adattamenti (opere derivate) siano resi acquistabili a selezionati produttori", correct: false},
        {text: "Produce esternalità negative", correct: false}
      ]
    },
    {
      question: "I vantaggi che il bundling produce per i produttori sono legati al fatto che:",
      answers: [
        {text: "Esso consente loro di ridurre i costi di produzione", correct: false},
        {text: "Esso consente loro di erigere barriere all’entrata", correct: true},
        {text: "Esso consente loro fare team building tra i dipendenti", correct: false}
      ]
    },
    {
      question: "Tra le peculiarità della domanda di informazione vi è il fatto che:",
      answers: [
        {text: "Essa è spesso caratterizzata dalla presenza di esternalità di rete", correct: true},
        {text: "I costi fissi sono sostanzialmente nulli", correct: false},
        {text: "Le economie di scala sono sostanzialmente nulle", correct: false}
      ]
    },
    {
      question: "La strategia chiamata versioning consiste nel:",
      answers: [
        {text: "Vendere a prezzi diversi lo stesso bene, a seconda della quantità acquistata", correct: false},
        {text: "Progettare e fornire versioni su misura per le differenti necessità dei clienti", correct: true},
        {text: "Vendere sempre la versione tecnologicamente più avanzata del prodotto", correct: false}
      ]
    },
    {
      question: "Se i T&C di un bene di informazione diventano più liberali?",
      answers: [
        {text: "Aumenta la disponibilità a pagare dei consumatori ma può diminuire il numero dei consumatori paganti", correct: true},
        {text: "Diminuisce la disponibilità a pagare dei consumatori ma può aumentare il numero dei consumatori paganti", correct: false},
        {text: "A parità di disponibilità a pagare dei consumatori, aumenta il numero dei consumatori paganti", correct: false}
      ]
    },
    {
      question: "Se i T&C di un bene di informazione divengono più liberali, il coefficiente b (fattore di variazione della quantità venduta):",
      answers: [
        {text: "È compreso tra 0 e 1", correct: true},
        {text: "È > 1", correct: false},
        {text: "Assume valori negativi", correct: false}
      ]
    },
    {
      question: "Tra le variabili della corsa ai brevetti vi è?",
      answers: [
        {text: "La produttività dell’innovazione", correct: false},
        {text: "Il costo sociale dell’innovazione", correct: false},
        {text: "Il valore dell’innovazione (che viene assunto identico per la società e per l’innovatore)", correct: true}
      ]
    },
    {
      question: "I diritti d’autore forfettari?",
      answers: [
        {text: "Non aiutano la reputazione dell’autore", correct: false},
        {text: "Sono un incentivo agli autori a comporre best seller", correct: false},
        {text: "Fissano un ammontare, pattuito ex ante, che l’editore paga all’autore", correct: true}
      ]
    },
    {
      question: "Se il valore di una rete è 210 e ciascun utente aggiunto alla rete vale 1, di quanti utenti è composta la rete?",
      answers: [
        {text: "17,5", correct: false},
        {text: "15 x (x-1) = 210", correct: true},
        {text: "30", correct: false}
      ]
    },
    {
      question: "Il copyright sulle creazioni descrive:",
      answers: [
        {text: "È una facilitazione all’accesso", correct: false},
        {text: "È un incentivo addizionale per gli autori", correct: true},
        {text: "È un disincentivo per gli autori", correct: false}
      ]
    },
    {
        question: "I diritti d’autore proporzionali alle vendite hanno tra gli altri inconvenienti quello di",
        answers: [
            {text: "Accrescere il costo unitario di produzione degli originali", correct: true},
            {text: "Disincentivare la pirateria", correct: false},
            {text: "Far diminuire all’editore il prezzo di monopolio dell’opera", correct: false}
        ]
    },
    {
        question: "La discriminazione del prezzo di secondo grado consiste nel",
        answers: [
            {text: "Vendere a prezzi diversi a gruppi diversi", correct: false},
            {text: "Vendere lo stesso bene a prezzi diversi a seconda della quantità", correct: true},
            {text: "Vendere lo stesso bene a un prezzo più basso di quello che massimizza il profitto", correct: false}
        ]
    },
    {
        question: "Se i T & C di un bene di informazione vengono resi più liberali, con valore di partenza p=20, y=x=100, se a=2 e b=0,75, quale è il RT che si ottiene?",
        answers: [
            {text: "1000 = ap*(1-b)*y", correct: false},
            {text: "3000", correct: true},
            {text: "1500", correct: false}
        ]
    },
    {
        question: "La creazione di iTunes nel 2000",
        answers: [
            {text: "Ha imposto un primo stop alla pirateria", correct: true},
            {text: "Ha accresciuto il fenomeno della pirateria", correct: false},
            {text: "Ha aperto la strada alla condizione multimediale con altre piattaforme (Netflix, Amazon, Spotify)", correct: false}
        ]
    },
    {
        question: "I requisiti legali per un brevetto sono?",
        answers: [
            {text: "Novità, non ovvietà e assenza di costi di transazione", correct: false},
            {text: "Novità, non ovvietà e fattibilità tecnica", correct: true},
            {text: "Novità, ovvietà e fattibilità tecnica.", correct: false}
        ]
    },
    {
        question: "Perché in un'industria di rete il lock in è spesso molto elevato?",
        answers: [
          {text: "Perché per cambiare rete occorre acquistare nuovo hardware, spesso molto costoso", correct: false},
          {text: "Per resistenza di economie di scala nella produzione, che si perdono abbandonando la rete", correct: false},
          {text: "Per l'esistenza dei costi di coordinamento che rendono costoso convincere gli utenti a passare ad un'altra tecnologia", correct: true}
        ]
      },
      {
        question: "Le caratteristiche dei beni d’informazione generano una potenziale perdita di benessere per la società in quanto",
        answers: [
          {text: "La non rivalità incentiva il free riding", correct: false},
          {text: "La non rivalità è incompatibile con un prezzo positivo attribuito a unità aggiuntive di tali beni", correct: true},
          {text: "La non escludibilità", correct: false}
        ]
      },
      {
        question: "Se i T&C di un bene di informazione diventano più liberali",
        answers: [
          {text: "A parità di disponibilità a pagare dei consumatori, aumenta il numero dei consumatori paganti", correct: false},
          {text: "A parità di disponibilità a pagare dei consumatori, ma può diminuire il numero dei consumatori paganti", correct: true},
          {text: "A parità di disponibilità a pagare dei consumatori, ma può aumentare il numero dei consumatori paganti", correct: false}
        ]
      },
      {
        question: "Siano date le seguenti disponibilità a pagare di due consumatori per i software Word e Excel:\n• Maria: Word: p= 100 Excel: p=60\n• Matteo: Word: p= 60 Excel: p= 100\nConviene vendere i due software separatamente o in bundling?",
        answers: [
          {text: "È indifferente, il ricavo totale è identico", correct: false},
          {text: "Separatamente", correct: false},
          {text: "In bundling", correct: true}
        ]
      },
      {
        question: "Le innovazioni protette da brevetti producono dei vantaggi sociali?",
        answers: [
          {text: "Quando la differenza tra il costo (in ricerca e sviluppo) e il benessere che portano alla società è positiva", correct: false},
          {text: "Quando la differenza tra il costo (in ricerca e sviluppo) e il benessere che portano alla società è ridotto a zero", correct: false},
          {text: "Quando la differenza tra il benessere che portano alla società e il loro costo (in ricerca e sviluppo) è positiva", correct: true}
        ]
      },
      {
        question: "Nel mercato dei beni di informazione tendenzialmente si afferma",
        answers: [
          {text: "Qualsiasi forma, perché non esistono economie di scala", correct: false},
          {text: "La forma della concorrenza perfetta", correct: false},
          {text: "La forma dell’oligopolio o della concorrenza monopolistica", correct: true}
        ]
      },
      {
        question: "Il “bundling” è",
        answers: [
          {text: "Una forma particolare di versioning, consistente nel vendere più beni in diverse versioni", correct: false},
          {text: "Una forma particolare di versioning, consistente nel vendere più beni separatamente", correct: false},
          {text: "Una forma particolare di versioning, consistente nel vendere più beni in un unico pacchetto", correct: true}
        ]
      },
      {
        question: "La discriminazione del prezzo di terzo grado consiste nel",
        answers: [
          {text: "Vendere a prezzi diversi lo stesso bene a gruppi diversi", correct: true},
          {text: "Vendere a prezzi diversi lo stesso bene a seconda della quantità acquistata", correct: false},
          {text: "Vendere a prezzi diversi beni diversi", correct: false}
        ]
      },
      {
        question: "La trasferibilità della proprietà intellettuale",
        answers: [
          {text: "Assicura che l’innovazione sia sfruttata dalla parte che ha minori costi di transazione", correct: false},
          {text: "Assicura che l’innovazione sia sfruttata dalla parte che le attribuisce maggior valore", correct: true},
          {text: "Assicura che l’innovazione sia sfruttata dalla parte che le attribuisce minor valore", correct: false}
        ]
      },
      {
        question: "Tra le conseguenze dell’attribuzione di un monopolio al detentore di un brevetto vi è",
        answers: [
          {text: "Un guadagno netto al consumatore", correct: false},
          {text: "L’esclusione di alcuni consumatori non disposti a pagare quel prezzo", correct: true},
          {text: "La fissazione di un prezzo più basso di quello concorrenziale", correct: false}
        ]
      },
      {
        question: "La suddivisione dei profitti delle innovazioni cumulative",
        answers: [
          {text: "È un’applicazione del dilemma del prigioniero", correct: false},
          {text: "Rimanda al cosiddetto problema della rapina", correct: true},
          {text: "È risolta dal teorema di Coase", correct: false}
        ]
      },
      {
        question: "Tra i tipi di innovazioni cumulative vi sono",
        answers: [
          {text: "Innovazioni che fanno produrre di più", correct: true},
          {text: "Innovazioni che riproducono la qualità di un prodotto esistente", correct: false},
          {text: "Innovazioni che migliorano la qualità di un prodotto esistente", correct: true}
        ]
      },
      {
        question: "L’appropriazione indiretta dell’utilità del consumatore da parte dell’autore/produttore originale",
        answers: [
            {text: "Si ha quando l’autore/produttore può ignorare discriminazione di prezzo", correct: false},
            {text: "Si ha quando l’autore/produttore originale può appropriarsi del valore creato dalle copie", correct: true},
            {text: "Si ha quando l’autore/produttore vende solo a chi crea copie", correct: false}
        ]
    },
    {
        question: "Le tecnologie digitali hanno aiutato il copyright",
        answers: [
            {text: "Con l’invenzione del watermarking digitale che produce perdite secche", correct: false},
            {text: "Attraverso la criptatura e la profilazione dei potenziali clienti", correct: true},
            {text: "Con la creazione di mercati aperti o oligopolistici", correct: false}
        ]
    },
    {
        question: "L’efficienza statica consiste nel:",
        answers: [
            {text: "Garantire la massimizzazione del surplus dei consumatori in ogni istante", correct: false},
            {text: "Garantire la massimizzazione del surplus sociale in ogni istante", correct: true},
            {text: "Garantire la massimizzazione dei profitti in ogni istante", correct: false}
        ]
    },
    {
        question: "Tra i tipi di innovazioni cumulative vi sono",
        answers: [
            {text: "Innovazioni che fanno produrre di più", correct: false},
            {text: "Innovazioni che migliorano la qualità di un prodotto esistente", correct: true},
            {text: "Innovazioni che riproducono la qualità di un prodotto esistente", correct: false}
        ]
    },
    {
        question: "Per il fenomeno del feedback positivo, chi è debole diventa più debole. Scegli una risposta",
        answers: [
            {text: "Vero", correct: true},
            {text: "Falso", correct: false}
        ]
    },
    {
        question: "Perché le autorità antitrust accettano il pool di brevetti, mentre respingono lo scambio di licenze incrociate?",
        answers: [
            {text: "Perché i pool garantiscono che i brevetti inclusi nel pacchetto sono rigorosamente sostituti e non complementari", correct: false},
            {text: "Perché nei pool i brevetti inclusi sono pochi anche se generano modesti effetti collusivi", correct: false},
            {text: "Perché i pool garantiscono che i brevetti inclusi nel pacchetto sono strettamente complementari e non sostituti", correct: true}
        ]
    },
    {
        question: "I diritti d'autore proporzionali alle vendite",
        answers: [
            {text: "Sono tipici delle pubblicazioni scientifiche", correct: false},
            {text: "Sono un incentivo per gli editori a massimizzare le vendite", correct: true},
            {text: "Suddividono i profitti tra autore e editore con percentuali fisse", correct: false}
        ]
    },
    {
        question: "Se i T&C di un bene d'informazione vengono resi più liberali con valori di partenza p = 20, y = x = 100. Se a = 2, b = 0,5. Qual è il RT che si ottiene?",
        answers: [
            {text: "2000 à RT = ap*(1-b)*y", correct: true},
            {text: "4000", correct: false},
            {text: "1000", correct: false}
        ]
    },
    {
        question: "Quali strategie adottare nelle forme di mercato tipiche dei beni di informazione:",
        answers: [
            {text: "ignorare i problemi connessi al costo del prodotto", correct: false},
            {text: "colludere con i competitor", correct: false},
            {text: "differenziare il prodotto", correct: true}
        ]
    },
    {
        question: "La strategia del prezzo limite",
        answers: [
            {text: "È credibile in presenza di elevati costi fissi", correct: true},
            {text: "È credibile quando il costo marginale non è troppo basso", correct: false},
            {text: "È credibile quando il mercato e di concorrenza monopolistica", correct: false}
        ]
    },
    {
        question: "Secondo Gary Becker, perché la legislazione anti pirateria sia efficace, l’ammontare della pena pecuniaria per la probabilità di essere scoperti",
        answers: [
            {text: "deve essere maggiore del beneficio di infrangere la legge", correct: true},
            {text: "deve essere maggiore della probabilità di infrangere la legge", correct: false},
            {text: "deve essere minore del beneficio di infrangere la legge", correct: false}
        ]
    },
    {
        question: "Le caratteristiche dei beni di informazione generano una potenziale perdita di benessere per la società in quanto:",
        answers: [
            {text: "La non rivalità pone il problema del free riding", correct: false},
            {text: "La non escludibilità incentivo alla concentrazione di questi beni nelle mani di pochi", correct: false},
            {text: "La non escludibilità pone il problema del free riding", correct: true}
        ]
    },
    {
        question: "I brevetti accrescono il surplus sociale favorendo la diffusione della conoscenza",
        answers: [
            {text: "Perché producono un insieme di nuove informazioni", correct: true},
            {text: "perché concentrano la conoscenza nelle mani di coloro che detengono i brevetti stessi", correct: false},
            {text: "perché garantiscono un incentivo agli innovatori", correct: false}
        ]
    },
    {
        question: "Sia dato il caso in cui un'impresa tecnologica con un brevetto ampio che le dà potere di mercato concede licenze a una manifattura. La manifattura non ha potere monopolistico sul suo mercato. L’attribuzione di una licenza verticale da parte dell'impresa tecnologica cresce il benessere sociale?",
        answers: [
            {text: "No, perché in assenza di licenza i prezzi sarebbero più bassi", correct: false},
            {text: "Si, perché in assenza di licenza si avrebbero solo i vantaggi della divisione del lavoro", correct: false},
            {text: "Si, perché in assenza di licenza si perdono i vantaggi della divisione del lavoro", correct: true}
        ]
    },
    {
        question: "Se la durata del brevetto fosse estesa, una conseguenza sarebbe:",
        answers: [
            {text: "profitti monopolistici degli innovatori più bassi", correct: false},
            {text: "profitti monopolistici degli innovatori di durata minore", correct: false},
            {text: "profitti monopolistici degli innovatori più alti", correct: true}
        ]
    },
    {
        question: "Quando il numero di imprese che partecipano alla corsa per i brevetti è più alto del numero che massimizza il benessere sociale?",
        answers: [
            {text: "Il benessere sociale è maggiore", correct: false},
            {text: "Il vantaggio che la società deriva dalle innovazioni è sprecato dagli investimenti eccessivi", correct: true},
            {text: "La società deriva un vantaggio dallo spreco di investimenti", correct: false}
        ]
    },
    {
        question: "La lunga durata del copyright è giustificata come",
        answers: [
            {text: "Solo una compensazione per la ristretta definizione", correct: false},
            {text: "Solo una misura prudenziale dovuta al successo tardivo di alcune opere", correct: false},
            {text: "Compensazione per la ristretta definizione è una misura prudenziale dovuta al successo tardivo di alcune opere", correct: true}
        ]
    },
    {
        question: "Per quale motivo Internet è stato sperimentato per la prima volta nel 1969 ed è stato adottato dai consumatori solo negli anni 90?",
        answers: [
            {text: "Perché inizialmente le esternalità di rete erano basse e c'è voluto molto tempo perché il loro valore crescesse", correct: false},
            {text: "Perché inizialmente le esternalità di rete erano elevatissime e pochi utenti se le potevano permettere", correct: true},
            {text: "Perché inizialmente i costi superavano i ricavi e nessuno voleva accollarsi le perdite", correct: false}
        ]
    },
    {
        question: "Quale di queste definizioni del feedback positivo (tipico delle industrie di rete) è corretta?",
        answers: [
            {text: "È il fenomeno per il quale un'azione genera una retroazione che tende a rafforzarne gli effetti: il forte diventa più forte", correct: true},
            {text: "È il fenomeno che si verifica quando i consumatori danno una valutazione del prodotto acquistato", correct: false},
            {text: "È il fenomeno che si verifica quando i consumatori sono soddisfatti del prodotto acquistato e ne raccomandano l'acquisto ad altri compratori", correct: false}
        ]
    },
    {
        question: "Tra le fonti del lock in, c’è l’addestramento specifico. In che consistono in questo caso gli switching costs?",
        answers: [
            {text: "Costi di addestramento + perdite di produttività", correct: true},
            {text: "Capacità Di nuovi fornitori di offrire beni comparabili", correct: false},
            {text: "Trasferire e convertire i dati in nuovi formati", correct: false}
        ]
    },
    {
        question: "Il fenomeno per cui il debole diventa sempre più debole è una forma di feedback positivo",
        answers: [
            {text: "Vero", correct: true},
            {text: "Falso", correct: false}
        ]
    },
    {
        question: "Il Feedback negativo tende a rendere stabili i mercati, mentre il feedback positivo li rende...",
        answers: [
            {text: "Vero", correct: true},
            {text: "Falso", correct: false}
        ]
    },
    {
        question: "Tra le peculiarità dell’offerta di informazioni vi è il fatto che:",
        answers: [
            {text: "La tecnologia non gode di ampie economie di scala", correct: false},
            {text: "I costi marginali variabili e marginali sono molto bassi", correct: true},
            {text: "I costi fissi sono tendenzialmente bassi o nulli", correct: false}
        ]
    },
    {
        question: "Cercare di minimizzare gli switching cost è un obiettivo della strategia di evoluzione",
        answers: [
            {text: "Vero", correct: true},
            {text: "Falso", correct: false}
        ]
    },
    {
        question: "Se i T&C di un bene di informazione diventano più liberali, il coefficiente a della formula (a = fattori di variazione del prezzo)",
        answers: [
            {text: "Ha valori > 1", correct: true},
            {text: "Ha valori compresi tra 0 e 1", correct: false},
            {text: "Ha sempre valori maggiore di 2", correct: false}
        ]
    },
    {
        question: "Praticamente, la proprietà intellettuale rende",
        answers: [
            {text: "Legalmente escludibile l’opera", correct: true},
            {text: "Non escludibile l’opera", correct: false},
            {text: "Senza valore legale l’opera", correct: false}
        ]
    },
    {
        question: "Una piattaforma è un mercato supervisionato da un operatore in cui si incontrano per scambiare beni, servizi o informazioni almeno tre parti distinte",
        answers: [
            {text: "Falso", correct: true},
            {text: "Vero", correct: false}
        ]
    },
    {
        question: "Secondo il teorema di Coase, una transazione per trasferire la proprietà intellettuale è efficiente se",
        answers: [
            {text: "I costi di transazione sono nulli anche se i diritti di proprietà sono chiaramente definiti", correct: false},
            {text: "I costi di transazione sono bassi e i diritti di proprietà sono chiaramente definiti", correct: true},
            {text: "I costi di transazione sono nulli e i diritti di proprietà sono chiaramente definiti", correct: false}
        ]
    },
    {
        question: "iTunes è il primo stop alla pirateria",
        answers: [
            {text: "Vero", correct: true},
            {text: "Falso", correct: false}
        ]
    },
    {
        question: "Termini e condizioni (T&C) di cessione copyright con a=2, b=0,5",
        answers: [
            {text: "Profitti invariati", correct: true},
            {text: "a = 2, b = 0,75 → profitti si dimezzano", correct: true},
            {text: "Un operatore telefonico offre 50 euro → diminuiscono", correct: true},
            {text: "Un operatore telefonico offre 25 euro → restano invariati", correct: true}
        ]
    },
    {
        question: "Il copyright",
        answers: [
            {text: "Si applica alle opere creative e dà all’autore un diritto escludibile e trasferibile sulla riproduzione, performance, adattamento e traduzione del suo lavoro", correct: true},
            {text: "Si applica esclusivamente alle invenzioni tecnologiche e non riguarda opere artistiche o letterarie.", correct: false},
            {text: "Conferisce un diritto perpetuo e non trasferibile, limitato solo alla distribuzione del lavoro e non alla sua riproduzione.", correct: false}
        ]
    },
    {
        question: "Quali sono le strategie di mercato vincenti per i beni di informazione?",
        answers: [
            {text: "La strategia del prezzo limite e la differenziazione dei prodotti e dei prezzi", correct: true},
            {text: "La strategia dell'integrazione verticale e l'espansione territoriale.", correct: false},
            {text: "L'uso esclusivo della pubblicità tradizionale e la riduzione dei costi di produzione.", correct: false}
        ]
    },
    {
        question: "Secondo Kitch (1977), brevetti ampi sulla prima innovazione",
        answers: [
            {text: "Hanno il vantaggio di evitare la corsa ai brevetti tramite la minaccia di citazioni per violazioni", correct: true},
            {text: "Consentono di monopolizzare completamente il mercato senza dover investire in ricerca e sviluppo.", correct: false},
            {text: "Riducono la competizione perché eliminano il bisogno di aggiornare o migliorare l'innovazione originale.", correct: false}
        ]
    },
    {
        question: "Se la durata del brevetto fosse estesa, una conseguenza sarebbe:",
        answers: [
            {text: "Una perdita secca per la società", correct: true},
            {text: "Un immediato abbassamento dei prezzi dei prodotti brevettati.", correct: false},
            {text: "Una riduzione degli incentivi per le aziende a investire in innovazione.", correct: false}
        ]
    },
    {
        question: "Tra le fonti del lock-in vi sono gli acquisti di beni durevoli. In che consistono in questo caso gli switching cost?",
        answers: [
            {text: "Costi di addestramento", correct: true},
            {text: "Costi di licenza ricorrenti per l'uso del bene durevole.", correct: false},
            {text: "Costi per l'accesso ai manuali di istruzioni del prodotto.", correct: false}
        ]
    },
    {
        question: "Se il valore di ciascun utente aggiunto a una rete è 1 e ci sono 20 utenti, quanto è il valore della rete secondo la legge di Metcalfe?",
        answers: [
            {text: "380 (N^2-N)", correct: true},
            {text: "210 (N x (N-1) / 2)", correct: false},
            {text: "400 (N x N)", correct: false}
        ]
    },
    {
        question: "Il monopolio che il brevetto attribuisce all’innovatore influenza:",
        answers: [
            {text: "L’ammontare del surplus generato dall’innovazione e la sua distribuzione", correct: true},
            {text: "La quantità di brevetti che l'innovatore può richiedere su altre tecnologie.", correct: false},
            {text: "L'automatico successo commerciale del prodotto innovativo senza bisogno di strategie di marketing.", correct: false}
        ]
    },
    {
        question: "Tra le peculiarità dell’offerta di informazione vi è il fatto che?",
        answers: [
            {text: "I costi fissi sono elevati e non recuperabili", correct: true},
            {text: "I costi variabili aumentano significativamente con ogni nuova unità prodotta.", correct: false},
            {text: "L'informazione si deprezza rapidamente una volta distribuita.", correct: false}
        ]
    },
    {
        question: "Risultati della selezione avversa sono?",
        answers: [
            {text: "Azzardo morale", correct: true},
            {text: "Selezione avversa", correct: true},
            {text: "Concorrenza perfetta", correct: false},
            {text: "Efficienza informativa", correct: false}
        ]
    },
    {
        question: "Discriminazione di prezzo di primo grado",
        answers: [
            {text: "Prezzi personalizzati per ciascun cliente", correct: true},
            {text: "Prezzi fissi per tutti i clienti, indipendentemente dalle loro caratteristiche.", correct: false},
            {text: "Prezzi basati esclusivamente sul costo di produzione, senza considerare la disponibilità a pagare del cliente.", correct: false}
        ]
    },
    {
        question: "È possibile una situazione estrema in cui le imprese che offrono un solo servizio sono espulse dal mercato da quelle che legano in un unico pacchetto diversi servizi?",
        answers: [
            {text: "Falso", correct: true},
            {text: "Vero", correct: false}
        ]
    },
    {
        question: "Il bundling di diversi servizi ICT porterà ad accrescere il predominio di un provider?",
        answers: [
            {text:"False", correct: false},
            {text: "Vero", correct: true}
        ]
    },
    {
        question: "Tra le peculiarità della domanda di informazione vi è il fatto che?",
        answers: [
            {text: "I beni informazione spesso presentano caratteristiche di beni pubblici", correct: true},
            {text: "La domanda di informazione è sempre altamente elastica, indipendentemente dal prezzo.", correct: false},
            {text: "I beni informazione tendono a essere consumati esclusivamente in modo esclusivo, senza possibilità di condivisione.", correct: false}
        ]
    },
    {
        question: "Il dibattito sull’ampiezza e sulla durata dei brevetti come strumenti di protezione delle invenzioni e del benessere sociale?",
        answers: [
            {text: "È giunto alla conclusione che sono meglio brevetti ristretti e di lunga durata", correct: true},
            {text: "Non esiste consenso riguardo alla lunghezza e all'ampiezza dei brevetti, e molti esperti sostengono che brevetti ampi e di breve durata siano più efficaci.", correct: false},
            {text: "Il dibattito è incentrato esclusivamente sull'importanza di proteggere le invenzioni senza considerare il benessere sociale.", correct: false}
        ]
    }
];

    // Aggiungi altre domande in modo simile


let randomQuestions = shuffle(questions.slice());


const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
  }
  
  function showQuestion(){
    resetState();
    let currentQuestion = randomQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answerButtons.appendChild(button);
      if(answer.correct){
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
    })
  }
  
  function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  
  function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct == "true";
    if(isCorrect){
      selectedBtn.classList.add("correct");
      score++
    }else{
      selectedBtn.classList.add("incorrect")
    }
  
    Array.from(answerButtons.children).forEach(button =>{
      if(button.dataset.correct == "true"){
        button.classList.add("correct");
      }
      button.disabled = true;
      
    });
    nextButton.style.display = "block";
    
  }
  
  function showScore(){
    resetState();
    questionElement.innerHTML = `Hai ottenuto un punteggio di ${score} su 20!`;
    nextButton.innerHTML = "Gioca Ancora";
    nextButton.style.display = "block"
  }
  

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < 20) { // Change 20 to the desired number of questions
    showQuestion();
  } else {
    showScore();
  }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
  
  
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
      handleNextButton();
    }else{
      startQuiz();
    }
  }); 
  
  startQuiz();