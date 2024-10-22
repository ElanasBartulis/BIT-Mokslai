async function getTema() {
    const knyguTema = await fetch('https://in3.dev/knygos/types/');
    const tema = await knyguTema.json();
    return tema;
}

async function getBook() {
    const pilnaKnyguInformacija = await fetch('https://in3.dev/knygos/');
    const pilnaKnyga = await pilnaKnyguInformacija.json();
    return pilnaKnyga;
}

async function getBookAndTema() {
    const atsakymas = await Promise.all([
        getTema(),
        getBook(),
    ])
    return { books: atsakymas[1], types: atsakymas[0]};
}