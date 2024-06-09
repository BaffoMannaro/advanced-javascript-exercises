document.addEventListener('DOMContentLoaded', ()=> {

const btnCerca = document.getElementById('btn_cerca') //il pulsante di ricerca

    btnCerca.addEventListener('click', () => {
        //qui facciamo la richiesta sincrona ed otteniamo la risposta 
        let cerca= document.getElementById('cerca').value //la parola digitata
        
        //step 1. Inizializzo l'oggetto per poterlo usare in una richiesta asincrona
        const wsItunes = `https://itunes.apple.com/search?term=${encodeURIComponent(cerca)}&media=music&limit=20`
        const xhr = new XMLHttpRequest()

        //step 2. Aprire e descrivere la richiesta. Tre argomenti: modalità (GET / POST), 
        xhr.open('GET', wsItunes, true) //true oppure null vuol dire che la richiesta è asincrona, false vuol dire che la richiesta sarebbe sincrona

        //step 3. Monitorare lo stato della richiesta e della risposta. Ogni volta che la richiesta / risposta cambiano stato si verifica un evento particolare che serve per individuare il momento nel quale arriva la risposta con i dati. Così potrò rappresentare i dati sullo schermo del browser. L'evento in questione si chiama "readystatechange". Come lo usiamo? Ci dobbiamo mettere in ascolto di questo evento sull'oggetto XMLHttpRequest. Ogni volta che l'evento accade eseguo una funzione di callback.  Per la precisione l'evento accade 5 volte nella request + 1 volta per la response.
        //0 - Request non ancora inviata fino a
        //4 Richiesta completata con successo
        //viene eseguita la risposta quindi arrivano i dati
       
        let str=""

        xhr.addEventListener('readystatechange', () => {
           
            if(xhr.readyState === 4 && xhr.status === 200) {
                //i dati sono arrivati e sono disponibili nella proprietà responseText
                console.log(xhr.responseText) //questi sono i dati JSON della risposta, i brani musicali
                //Rappresentiamo i dati nella table
                //Convertiamo xhr.responseText in un oggetto JSON per manipolare i dati più semplicemente
                let dati = JSON.parse(xhr.responseText) //un oggetto JSON che rappresenta i dati ricevuti

                dati.results.forEach(
                    element => {
                        str += `
                        <div class="card music">
                            <img src="${element.artworkUrl100}">
                            <h5>${element.trackName}</h5>
                            <h7>${element.collectionName}</h7>
                            <audio controls="false">
                                <source src="${element.previewUrl}">
                            </audio>
                        </div>`

                });

                document.querySelector(".card-wrapper").innerHTML = str

            }

        })

        //step 4. La richiesta viene inviata. Da questo momento in poi scatta un certo numero di volte l'evento readystatechange fino all'ottenimento dei dati. Questi cambiamenti di stato vengono monitorati mettendosi in ascolto dell'evento dal momento in cui la richista viene inviata fino al momento in cui la risposta viene ricevuta con successo
        xhr.send()
        
    })

})