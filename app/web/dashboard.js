//Warten, bis die Daten da sind
async function getData() {
    const answer = await fetch('/api/status');                                       //halten, bis header da sin
    const data = await answer.json();                                               //Umwandlung bis Body da ist
    console.log(data.services);                                                     //Nutzen der Daten
    const cardsContainer = document.getElementById('cardsContainer');
    //Abgreifen der einzelnen Werte pro service
    for (const item of data.services) {

        console.log(item.name, item.state, item.latency_ms, item.label);
        
        //Einzelene Karte 
        const card = document.createElement('div');                                 //Erzeuge pro service ein div
        card.classList.add('one-card-container');                                   //Klasse hinzufügen, allgemeines Styling für jede card
        
        //Inhalt pro Karte
        const header = document.createElement('h2');                                //header erzeugen
        header.textContent = item.label;
        card.appendChild(header);

        const state = document.createElement('div');
        state.textContent = "Status: " + item.state;
        card.appendChild(state);

        const latency = document.createElement('div');
        latency.textContent= "Messungslatenz: " + item.latency_ms + "ms";
        card. appendChild(latency);

        //Farbe der Karte abhängig vom Status
        card.classList.add(item.state);

        //Fertige Karte an Card-Container
        cardsContainer.appendChild(card);                                           //Hinzufügen zum cardsContainer
    }
}

getData();