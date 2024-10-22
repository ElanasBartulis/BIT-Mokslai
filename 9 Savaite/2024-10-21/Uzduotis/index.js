async function main() {
    const booksAndTypes = await getBookAndTema();
    const book = booksAndTypes.books;
    const type = booksAndTypes.types;
    printHtml(book, type);
    search(book, type);
}

function calculateDate(time){
    const bookMakeTime = new Date(time * 1000);
    const options = {year: 'numeric', month: 'long', day: 'numeric'};
    const formatDate = bookMakeTime.toLocaleDateString('lt-LT', options);
    return formatDate;
}

function search(book, type){
    const searchInput = document.querySelector("#search");
    searchInput.addEventListener('input', (event) => {
        const value = event.target.value.toLowerCase();
        const filteredBooks = book.filter(x => x.title.toLowerCase().includes(value));
        printHtml(filteredBooks, type);
    })
}

function printHtml(book, type){
    let html = '';
    for(const knyga of book){
        const sameId = type.find((item)=> item.id === knyga.type);
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
    const bodyElement = document.querySelector('.knygos');
    bodyElement.innerHTML = html;
}

main();