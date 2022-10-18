/*
Dobbiamo stampare in pagina una lista contenente tutti gli alimenti.
Consegna:
Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo for e con un ciclo while (potete farlo nello stesso file o in due file separati).
Consigli:
- Ricordiamoci di inizializzare la variabile di contatore prima dell’inizio del ciclo while
- Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all’interno ciclo while
Buon appetito!!
*/

const foods = [
  'pomodoro',
  'banana',
  'prosciutto',
  'melanzana',
  'pasta',
  'cereali'
];

const list = document.getElementById('renderList');
const ul = document.createElement('ul');
document.getElementById('renderList').append(ul);

for (let i = 0; i < foods.length; i++){
  let li = document.createElement('li');
  li.classList.add("item");
  li.innerHTML = `${foods[i]}`;
  list.append(li);
};

// while
const whileList = document.getElementById('whileList');
document.getElementById('whileList').append(ul);

let c = 0;
while (c < foods.length) {
  let liW = document.createElement('li');
  liW.classList.add("item");
  liW.innerHTML = `${foods[c]}`;
  whileList.append(liW);
  c++;
}