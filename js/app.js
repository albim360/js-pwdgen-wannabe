console.log('Imposto elemento HTML con id outputPassword');
const outputPassword = document.getElementById('outputPassword');

let nome 
let cognome
let colore
let numero


nome = prompt('Hey, come ti chiami?')
cognome = prompt('Wow, ed il tuo cognome?')
colore = prompt('Bene, e qual è il tuo colore preferito?')
numero = prompt('Bel colore, e qual è il tuo numero preferito?')

console.log(nome + cognome + colore + numero)



outputPassword.innerHTML = nome + cognome + colore + numero;