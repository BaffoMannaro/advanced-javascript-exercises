//I DATI: un oggetto JSON complesso, composto da tre properties di cui una (articles) è un array di oggetti che contiene le singole news

let objNews = {
    "status": "ok",
    "totalResults":10,
    "articles":
    [
        {"source":{"id":"1","name":"Google News (Italy)"},"author":"Il Sole 24 ORE","title":"Attacco di Hamas a Israele, oggi Consiglio di sicurezza Onu d’emergenza. Cina preoccupata per ... - Il Sole 24 ORE","description":null,"url":"https://news.google.com/rss/articles/CBMigQFodHRwczovL3d3dy5pbHNvbGUyNG9yZS5jb20vYXJ0L2F0dGFjY28taGFtYXMtY29uZGFubmEtY29tdW5pdGEtaW50ZXJuYXppb25hbGUtdXNhLWlzcmFlbGUtZGFyZW1vLXF1YW50by1zZXJ2ZS1kaWZlbmRlcnNpLUFGc0hkbTnSASxodHRwczovL2FtcDI0Lmlsc29sZTI0b3JlLmNvbS9wYWdpbmEvQUZzSGRtOQ?oc=5","urlToImage":null,"publishedAt":"2023-10-08T08:15:00+00:00","content":null},
        
        {"source":{"id":"2","name":"Google News (Italy)"},"author":"la Repubblica","title":"L'onda anti-Meloni alla manifestazione Cgil mette alla prova l'opposizione divisa - la Repubblica","description":null,"url":"https://news.google.com/rss/articles/CBMijQFodHRwczovL3d3dy5yZXB1YmJsaWNhLml0L2Vjb25vbWlhLzIwMjMvMTAvMDkvbmV3cy9sb25kYV9hbnRpLW1lbG9uaV9hbGxhX21hbmlmZXN0YXppb25lX2NnaWxfbWV0dGVfYWxsYV9wcm92YV9sb3Bwb3NpemlvbmVfZGl2aXNhLTQxNzE5NzY5NS_SAQA?oc=5","urlToImage":null,"publishedAt":"2023-10-08T07:48:20+00:00","content":null},
        
        {"source":{"id":"3","name":"Google News (Italy)"},"author":"Agenzia ANSA","title":"Terremoto in Afghanistan, 'governo, oltre 1.000 i morti' - Agenzia ANSA","description":null,"url":"https://news.google.com/rss/articles/CBMikQFodHRwczovL3d3dy5hbnNhLml0L3NpdG8vbm90aXppZS9tb25kby8yMDIzLzEwLzA4L3RlcnJlbW90by1pbi1hZmdoYW5pc3Rhbi1nb3Zlcm5vLW9sdHJlLTEuMDAwLWktbW9ydGktXzFmZDFjNTZlLTJjMTUtNGU0Mi05MTBiLWJlMDY3NTI1NWFmYy5odG1s0gGVAWh0dHBzOi8vd3d3LmFuc2EuaXQvYW1wL3NpdG8vbm90aXppZS9tb25kby8yMDIzLzEwLzA4L3RlcnJlbW90by1pbi1hZmdoYW5pc3Rhbi1nb3Zlcm5vLW9sdHJlLTEuMDAwLWktbW9ydGktXzFmZDFjNTZlLTJjMTUtNGU0Mi05MTBiLWJlMDY3NTI1NWFmYy5odG1s?oc=5","urlToImage":null,"publishedAt":"2023-10-08T07:36:00+00:00","content":null},
        
        {"source":{"id":"4","name":"Google News (Italy)"},"author":"Open","title":"Israele a rischio assedio, raffica di razzi di Hezbollah dal Libano: «Solidarietà ad Hamas» - Il video - Open","description":null,"url":"https://news.google.com/rss/articles/CBMiS2h0dHBzOi8vd3d3Lm9wZW4ub25saW5lLzIwMjMvMTAvMDgvaXNyYWVsZS1hdHRhY2NoaS1saWJhbm8taGV6Ym9sbGFoLXZpZGVvL9IBAA?oc=5","urlToImage":null,"publishedAt":"2023-10-08T06:03:03+00:00","content":null},
        
        {"source":{"id":"5","name":"Google News (Italy)"},"author":"il Resto del Carlino","title":"Coppia pesarese in fuga da Tel Aviv: \"Preso l'ultimo aereo per Roma\" - il Resto del Carlino","description":null,"url":"https://news.google.com/rss/articles/CBMieWh0dHBzOi8vd3d3LmlscmVzdG9kZWxjYXJsaW5vLml0L3Blc2Fyby9jcm9uYWNhL2NvcHBpYS1wZXNhcmVzZS1pbi1mdWdhLWRhLXRlbC1hdml2LXByZXNvLWx1bHRpbW8tYWVyZW8tcGVyLXJvbWEtN2E4YjkzZWLSAQA?oc=5","urlToImage":null,"publishedAt":"2023-10-08T04:52:55+00:00","content":null},
        
        {"source":{"id":"6","name":"Google News (Italy)"},"author":"ilGiornale.it","title":"Massima allerta anche in Italia. Gli ebrei: \"Situazione gravissima\" - ilGiornale.it","description":null,"url":"https://news.google.com/rss/articles/CBMibWh0dHBzOi8vd3d3LmlsZ2lvcm5hbGUuaXQvbmV3cy9wb2xpdGljYS9tYXNzaW1hLWFsbGVydGEtYW5jaGUtaXRhbGlhLWVicmVpLXNpdHVhemlvbmUtZ3Jhdmlzc2ltYS0yMjIyNjE5Lmh0bWzSAQA?oc=5","urlToImage":null,"publishedAt":"2023-10-08T04:00:00+00:00","content":null},
        
        {"source":{"id":"7","name":"Google News (Italy)"},"author":"il Resto del Carlino","title":"I post cancellati e l'amante: tutti i segreti di Manuela Bianchi, la nuora di Pierina - il Resto del Carlino","description":null,"url":"https://news.google.com/rss/articles/CBMibWh0dHBzOi8vd3d3LmlscmVzdG9kZWxjYXJsaW5vLml0L3JpbWluaS9jcm9uYWNhL3Bvc3QtY2FuY2VsbGF0aS1hbWFudGUtbWFudWVsYS1iaWFuY2hpLW51b3JhLXBpZXJpbmEtMDYyMGE0MzXSAQA?oc=5","urlToImage":null,"publishedAt":"2023-10-08T03:03:38+00:00","content":null},
        
        {"source":{"id":"8","name":"Google News (Italy)"},"author":"Avvenire","title":"Nel cimitero del Vajont, 60 anni dopo. «Mio padre diceva: muoriamo insieme» - Avvenire","description":null,"url":"https://news.google.com/rss/articles/CBMiSGh0dHBzOi8vd3d3LmF2dmVuaXJlLml0L2F0dHVhbGl0YS9wYWdpbmUvbmVsLWNpbWl0ZXJvLWRlbC12YWpvbnQteHh4LXh4eNIBTGh0dHBzOi8vd3d3LmF2dmVuaXJlLml0L2FtcC9hdHR1YWxpdGEvcGFnaW5lL25lbC1jaW1pdGVyby1kZWwtdmFqb250LXh4eC14eHg?oc=5","urlToImage":null,"publishedAt":"2023-10-07T18:34:43+00:00","content":null},
        
        {"source":{"id":"9","name":"Google News (Italy)"},"author":"Il Fatto Quotidiano","title":"Caso Apostolico, un carabiniere: “Ho girato io il video postato da Salvini” - Il Fatto Quotidiano","description":null,"url":"https://news.google.com/rss/articles/CBMiugFodHRwczovL3d3dy5pbGZhdHRvcXVvdGlkaWFuby5pdC8yMDIzLzEwLzA3L2Nhc28tYXBvc3RvbGljby11bi1jYXJhYmluaWVyZS1oby1naXJhdG8taW8taWwtdmlkZW8tcG9zdGF0by1kYS1zYWx2aW5pLW1hLXNwdW50YW5vLW51b3ZlLWltbWFnaW5pLWNoZS1tb3N0cmFuby11bi1wb2xpemlvdHRvLWZpbG1hcmUvNzMxNjYwMy_SAb4BaHR0cHM6Ly93d3cuaWxmYXR0b3F1b3RpZGlhbm8uaXQvMjAyMy8xMC8wNy9jYXNvLWFwb3N0b2xpY28tdW4tY2FyYWJpbmllcmUtaG8tZ2lyYXRvLWlvLWlsLXZpZGVvLXBvc3RhdG8tZGEtc2FsdmluaS1tYS1zcHVudGFuby1udW92ZS1pbW1hZ2luaS1jaGUtbW9zdHJhbm8tdW4tcG9saXppb3R0by1maWxtYXJlLzczMTY2MDMvYW1wLw?oc=5","urlToImage":null,"publishedAt":"2023-10-07T18:27:12+00:00","content":null},
        
        {"source":{"id":"10","name":"Google News (Italy)"},"author":"La Repubblica","title":"Pellegrini liguri in Israele: “Sentiamo missili e allarmi antiaerei” - La Repubblica","description":null,"url":"https://news.google.com/rss/articles/CBMigQFodHRwczovL2dlbm92YS5yZXB1YmJsaWNhLml0L2Nyb25hY2EvMjAyMy8xMC8wNy9uZXdzL3BlbGxlZ3JpbmlfbGlndXJpX2luX2lzcmFlbGVfc2VudGlhbW9fbWlzc2lsaV9lX2FsbGFybWlfYW50aWFlcmVpLTQxNzE2MjYxOC_SAYUBaHR0cHM6Ly9nZW5vdmEucmVwdWJibGljYS5pdC9jcm9uYWNhLzIwMjMvMTAvMDcvbmV3cy9wZWxsZWdyaW5pX2xpZ3VyaV9pbl9pc3JhZWxlX3NlbnRpYW1vX21pc3NpbGlfZV9hbGxhcm1pX2FudGlhZXJlaS00MTcxNjI2MTgvYW1wLw?oc=5","urlToImage":null,"publishedAt":"2023-10-07T14:26:48+00:00","content":null}
    ]
}

////////////////////////////////Separazione degli ambiti di programmazione /////

document.addEventListener("DOMContentLoaded", ()=>{
/*
Qui il codice per lavorare sui dati. Che operazioni posso fare sui dati?? 

- Lista delle news in forma tabellare

- Cancellazione di una delle news

- Aggiunta di una news

*/

console.log(typeof(objNews.articles))

    //Lista - al caricamento della pagina eseguo la funzione per listare le newsrichiamo la funzione drawTable
    drawTable()

    ////////////////////////////////
    //Gestione evento click sul bottone aggiungi

    const btn_Click = document.getElementById('btn_aggiungi')
    const form = document.getElementById('formAggiungi')
    

    btn_Click.addEventListener('click', ()=>{
        form.style.display = 'block'
    })

    //gestiamo l'evento SUBMIT sulla intera form; si verifica quando clicco sul pulsante di SUBMIT

    form.addEventListener('submit', (e)=>{
        //e rappresenta tutte le info associate all'evento submit
        e.preventDefault() //stoppo i dati
        console.log(e)//vedo come è fatto l'evento
        const title= document.querySelector('#title').value
        const author= document.querySelector('#author').value
        const url= document.querySelector('#author').value

        console.log(title, author, url)

        let nuovaNews = {
            author: author,
            title: title,
            url: url
        }

        objNews.articles.push(nuovaNews)
        console.log(objNews.articles)



    })




    ////////////////////////////////
 

})

function cancella(id){ //mi permette di cancellare un elemento dall'array di news
    console.log(id, typeof(id), objNews.articles)

    if(confirm('Sei sicuro di cancellare la notizia?')){
        //eseguo la cancellazione
        
         objNews.articles = objNews.articles.filter(

             (notizia) => { return notizia.source.id != id; }

         )

    }

    console.log(objNews.articles)

    //eseguire il refresh della lista delle news

    /*
    Una funzione è un blocco di codice che esegue un certo task che viene definito una volta e richiamato N volte al bisogno
    */
    drawTable();

}

function drawTable(){
   
    let str=
    `<thead>
        <tr>
            <th>Titolo</th>
            <th>Autore</th>
            <th>URL</th>
            <th></th>
        </tr>
    </thead>
    <tbody>`

    //objNews.articles è il nostro array di notizie. Su questo array devo fare un ciclo per rappresentare ogni notizia su una riga
    objNews.articles.forEach(
        (notizia) =>{
            str+=`
            <tr>   
            <td>${notizia.title}</td>
                <td>${notizia.author}</td>
                <td><a href="${notizia.url}" target="_blank">More....</a></td>
                <td>
                    <a href="#" onclick="cancella(${notizia.source.id})"><i class="fa fa-trash" aria-hidden="true"></i></a>
                </td>
            </tr>`
        }
    )

    str+=`</tbody>`

    document.getElementById("news-table").innerHTML = str
}

// function makeFormVisible(id){
//     document.getElementById(id).style.display="block"
// }

