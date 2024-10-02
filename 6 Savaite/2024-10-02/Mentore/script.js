const body = document.querySelector('body');
const btn = document.querySelector('.generate');
const hexCode = document.querySelector('.hexCode');

const randomColor = Math.random().toString(16);

const generateHexColor = () => {
    const randomColor = Math.random().toString(16).substring(2,8);
    body.style.backgroundColor = `#${randomColor}`;
    hexCode.innerHTML = `#${randomColor}`;
}

btn.addEventListener('click', generateHexColor);
body.addEventListener('wheel', generateHexColor);