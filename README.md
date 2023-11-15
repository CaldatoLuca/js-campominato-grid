# Prato Fiorito

_HTML+css+js_

# Indice

- [Griglia](#griglia)

# Griglia

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

## indice

- [Scomposizione del problema](#scomposizione-del-problema)
- [Soluzione](#soluzioione)

### Scomposizione del problema

1. Creare struttura HTML e stile css
2. Dopo aver creato la tabella ricrearla in js
3. Creare un ciclo for che giri 100 volte e crei 100 caselle (inserendo l' inidice all' interno per averne il numero)
4. Aggiungere a ogni elemento così creato la classe css (ex. '.casella')
5. La generazione delle caselle dovrà essere gestita da una funzione a cui darò come input (l' elemento da creare, la sua classe e la quantità)
6. Creare sul bottone un evento click che farà comparire la tabella (gestire una classe diplay none / block)
7. Creare, per ogni casella un evento click che le darà uno sfondo (classe .bg) e faccia comparire in console il suo indice/.innerHTML
8. BONUS Creare una variabile che cambi valore (100, 81, 49) a seconda del .value della select (da inserire in un click e possibilmente in una funzione)
