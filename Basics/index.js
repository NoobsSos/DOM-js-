// const people = [
//     {name: "Nazar", age: 17},
//     {name: "Marichka", age: 18},
//     {name: "Vlad", age: 19}
// ]

// const newPeople = people.map(function (person) {
//     return `<h1>${person.name}</h1> <h2>${person.age}</h2>`
// })

// document.body.innerHTML = newPeople.join('')




// document.body.style.backgroundColor = 'blue'
// const element  = document.getElementById('title')
// element.style.color = 'green'


const header = document.createElement('h1')
const header2 = document.createElement('h1')
header.innerText = 'im here'
header2.innerText = 'im here too'
header.innerHTML = "nghoo"
document.body.appendChild(header2);
document.body.prepend(header);
header2.remove()