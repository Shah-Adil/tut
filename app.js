let btn = document.querySelector(".btn-set");
let h1 = document.querySelector("h1");

// btn.addEventListener("click", () => btnData());

// const btnData = () => {
//   const xhttp = new XMLHttpRequest();
//   xhttp.open("GET", "https://api.chucknorris.io/jokes/random/", true);

//   xhttp.onload = function () {
//     if (this.status === 200) {
//       let data = JSON.parse(this.responseText);
//       let textData = data.value;
//       h1.innerHTML = textData;
//     }
//   };

//   xhttp.onprogress = function () {
//     h1.innerHTML = "loading...";
//   };

//   xhttp.send();

// };

//  ====================callback

// setTimeout(() => {
//   console.log("hello");
// }, 2000);

// let persons = [
//   { name: "khan ", age: 26 },
//   { name: "baba ", age: 29 },
//   { name: "san ", age: 19 },
// ];

// function createPerson(person) {
//   setTimeout(() => {
//     persons.push(person);
//   }, 3000);
// }

// function getPerson() {
//   setTimeout(() => {
//     let output = ``;
//     persons.forEach((person) => {
//       output += `<li>Name: ${person.name} Age: ${person.age}</li>`;
//     });
//     h1.innerHTML = output;
//   }, 1000);
// }

// function createPerson(person) {
//   let prom = new Promise((resolve, reject) => {
//     persons.push(person);
//     let error = false;
//     if (!error) {
//       resolve();
//     } else reject(`can't find any data`);
//   });
//   return prom;
// }

// function getPerson() {
//   setTimeout(() => {
//     let output = ``;
//     persons.forEach((person) => {
//       output += `<li>Name: ${person.name} , Age: ${person.age}</li>`;
//     });
//     h1.innerHTML = output;
//   }, 1000);
// }

// createPerson({ name: "ali", age: 52 })
//   .then(getPerson)
//   .catch((err) => console.log(err));

// +++++++++++++++++Fatch api +++++++++++++++++

btn.addEventListener("click", getData);

function getData() {
  fetch(`https://api.chucknorris.io/jokes/random`)
    .then((res) => res.json())
    .then((data) => (h1.innerHTML = data.value))
    .catch((err) => (h1.innerHTML = err));
}
