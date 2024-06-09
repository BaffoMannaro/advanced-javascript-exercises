document.addEventListener('DOMContentLoaded',() => {

    const nations = document.getElementById('nations');
    const wsNations = 'https://raw.githubusercontent.com/pmontrasio/codici-stati/master/dist/countries.json';
    const xhrNations = new XMLHttpRequest();

    xhrNations.open('GET', wsNations, true);
    let strNations ='<option value="">Seleziona un paese</option>';
    let country = '';
    let iso = '';

    xhrNations.addEventListener('readystatechange',() => {
    
        if (xhrNations.readyState === 4 && xhrNations.status === 200) {
            let data = JSON.parse(xhrNations.responseText);

            console.log(data.ABW.italian_country_name_1);

            Object.keys(data).forEach(
                element => {
                    country = data[element].italian_country_name_1
                    iso = data[element].iso3361_3_characters

                    strNations += `<option value="${iso}">${country}</option>`
                }
            );
        }

        nations.innerHTML = strNations

    });

    xhrNations.send();


    const btnCerca = document.getElementById('btn_cerca');

    btnCerca.addEventListener('click', () => {

        let search = document.getElementById('search').value;
        
        

    });

})