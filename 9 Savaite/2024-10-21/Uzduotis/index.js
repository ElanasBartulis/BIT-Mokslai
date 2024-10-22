async function main() {
    const booksAndTypes = await getBookAndTema();
    printHtml(booksAndTypes);
}

function calculateDate(time){
    const bookMakeTime = new Date(time * 1000);
    const options = {year: 'numeric', month: 'long', day: 'numeric'};
    const formatDate = bookMakeTime.toLocaleDateString('lt-LT', options);
    return formatDate;
}

function printHtml(param){
    let html = '';
    for(const knyga of param.books){
        const sameId = param.types.find((item)=> item.id === knyga.type);
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

main();