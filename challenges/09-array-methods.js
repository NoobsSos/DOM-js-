// have access to students from data.js

// add role student to every object
const updatedStudent = students.map(function (person) {
    person.role = "student"
    return person
})

console.log(updatedStudent);

// get all with score more or equal to 80
const filterStudent = students.filter(function (person) {
    return person.score >= 80
})

console.log(filterStudent)

// find any id
const specificId = students.find(function (person) {
    return person.id === 3
})

console.log(specificId);

// average score with reduce 
const averageScore = students.reduce(function (acc, currItem) {
    acc += currItem.score

    return acc
}, 0)/students.length

console.log(averageScore);