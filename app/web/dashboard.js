let lastTimestamp = null;                                                           //Timestamp für den lokalen Timer


//Warten, bis die Daten da sind
async function getData() {
    const answer = await fetch('/api/status');                                       //halten, bis header da sin
    const data = await answer.json();                                               //Umwandlung bis Body da ist
    console.log(data.services);                                                     //Nutzen der Daten
    lastTimestamp = data.timestamp;                                                 //Globale Variabel setzen
    createCards(data);
    getTime();

}

function createCards(data) {
    const cardsContainer = document.getElementById('cardsContainer');
    cardsContainer.replaceChildren();
    //Abgreifen der einzelnen Werte pro service
    if (data.services.length > 0) {
        for (const item of data.services) {

            console.log(item.name, item.state, item.latency_ms, item.label);

            //Einzelene Karte 
            const card = document.createElement('div');                                 //Erzeuge pro service ein div
            card.classList.add('one-card-container');                                   //Klasse hinzufügen, allgemeines Styling für jede card

            //Inhalt pro Karte
            const header = document.createElement('h2');                                //header erzeugen
            header.textContent = item.label;
            card.appendChild(header);

            const stateBox = document.createElement('div');
            stateBox.classList.add('status');
            stateBox.textContent = "Status: " + item.state;
            card.appendChild(stateBox);

            const latency = document.createElement('div');
            latency.textContent = "Messungslatenz: " + item.latency_ms + "ms";
            card.appendChild(latency);

            //Farbe der Karte abhängig vom Status
            card.classList.add("card-" + item.state);
            //Fertige Karte an Card-Container
            cardsContainer.appendChild(card);                                           //Hinzufügen zum cardsContainer

        }
    } else {
        const card = document.createElement('div');
        card.classList.add('empty');
        card.textContent = "Keine Services vorhanden.";
        cardsContainer.appendChild(card);
    }
   
   
}

//Erzeugen der Legende
function createLegend() {
    const legendColors = [
        { state: 'up', text: 'Up: Dienst up, Host up' },
        { state: 'down', text: 'Down: Dienst down, Host down' },
        { state: 'refused', text: 'Refused: Dienst down, Host up' }
    ];

    const legend = document.getElementById('legend');

    for (const lC of legendColors) {
        const li = document.createElement('li');
        li.classList.add('dot-' + lC.state);
        li.textContent = lC.text;
        legend.appendChild(li);
    }
}

//Bestimmung des Datenalters
function getTime(data) {
    const dataAge = document.getElementById('dataAge');
    const now = Math.floor(Date.now()/1000);                                        //aktuelle Zeit in Sekunden (Unix-Time)
    const past = lastTimestamp;                                                    //timestamp aus JSON
    if (past === null) return;                                                     //noch kein Fetch gelaufen, nichts tun
    const dif = now - past;
    const date = new Date(past * 1000);                                             //*1000, da JS Millisekunden möchte
    const isoString = date.toISOString();                                           //Konvertiert zu ISO-8601

    const minutes = Math.floor(dif/60);
    const seconds = Math.floor(dif%60);
    const timeOutput = "Wann wurde zuletzt gemessen: " + minutes + " min " + seconds + " s";


    dataAge.textContent = timeOutput;
    dataAge.setAttribute('datetime', isoString);

}

//Timer für lokalen Timer
function localTimer () {
    setInterval(getTime, 1000);
}

//Timer für automatischen Fetch
function autoFetch () {
    setInterval(getData, 30000);
}

getData();
createLegend();
localTimer();
autoFetch();