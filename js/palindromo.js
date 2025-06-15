function esPalindromo(texto) {
    const textoLimpio = texto.toLowerCase().replace(/[^a-z0-9]/g, '');
    return textoLimpio === textoLimpio.split('').reverse().join('');
}

const cadena = "Anita lava la tina";
if (esPalindromo(cadena)) {
    console.log("Es un palíndromo");
} else {
    console.log("No es un palíndromo");
}