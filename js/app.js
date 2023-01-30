console.log('Imposto elemento HTML con id outputPassword');
const outputPassword = document.getElementById('outputPassword');


console.log('Creo variabili')
let nome 
let cognome
let colore
let numero
let annoNascita 

console.log('creo prompt per dare un valore alle variabili')
nome = prompt('Hey, come ti chiami?')
cognome = prompt('Wow, ed il tuo cognome?')
colore = prompt('Bene, e qual è il tuo colore preferito?')
numero = prompt('Bel colore, e qual è il tuo numero preferito?')
annoNascita = prompt('E in che anno sei nato?')

console.log(nome + cognome + colore + numero)


console.log('Creo output che andrà a sostituire h1')
outputPassword.innerHTML = nome + cognome + colore + numero + annoNascita;