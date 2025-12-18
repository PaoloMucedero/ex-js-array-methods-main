const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
let classeMarco = '';
for (let i = 0; i < students.length; i++) {
  if (students[i].name === 'Marco Lanci') {
    classeMarco = students[i].class;
    break; // una volta trovato possiamo uscire dal ciclo
  }
}

// .find restituisce il primo elemento che soddisfa la condizione
const marco = students.find(student => student.name === 'Marco Lanci');


// Risultato: '3C'

console.log(marco.class);
console.log(classeMarco);