

function esPalindromo(text) {
    text = text.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
    return text === text.split('').reverse().join('');
}

const textoPrueba = "A man, a plan, a canal, Panama!";


if (textoPrueba) {
    console.log("Si, si es un palindromo")
}