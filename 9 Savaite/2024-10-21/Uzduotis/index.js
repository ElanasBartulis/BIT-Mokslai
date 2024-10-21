async function callApi() {
    const knyguTema = await fetch('https://in3.dev/knygos/types/');
    const tema = await knyguTema.json();
    const pilnaKnyguInformacija = await fetch('https://in3.dev/knygos/');
    const pilnaKnyga = await pilnaKnyguInformacija.json();
    printHtml(pilnaKnyga, tema);
}

function calculateDate(time){
    const bookMakeTime = new Date(time * 1000);
    const options = {year: 'numeric', month: 'long', day: 'numeric'};
    const formatDate = bookMakeTime.toLocaleDateString('lt-LT', options);
    return formatDate;
}

function printHtml(knygos, tema){
    let html = '';

    for(const knyga of knygos){
        const sameId = tema.find((item)=> item.id === knyga.type);
        const date = calculateDate(knyga.time);
        html += 
        `
        <div class='ManoId-${knyga.id}'>
            <img src="${knyga.img}" alt="Knygos nuotrauka">
            <h2>${knyga.title}</h2>
            <p><strong>Autorius: </strong><span>${knyga.author}</span></p>
            <p><strong>Kaina: </strong><span>${knyga.price}</span></p>
            <p><strong>Data: </strong><span>${date}</span></p>
            <p><strong>Tema: </strong><span>${sameId.title}</span></p>
        </div>
        `
    }
    const bodyElement = document.querySelector('body');
    bodyElement.innerHTML = html;
}

callApi();