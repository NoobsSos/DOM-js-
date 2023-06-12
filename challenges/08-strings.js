/* 
## Strings #8

1. create function fullName
2. accept two parameters "firstName", "lastName"
3. add them together (concat) and return result in uppercase
4. invoke fullName and pass some values
5. log result
6. change the order of arguments
7. refactor to object parameter

*/


const fullName = (firstName, lastName) => {
    const fullName = firstName + " " + lastName
    return fullName.toUpperCase()
}

let result = fullName("Nazar", 'Mraka')
console.log(result)

const fullName2 = ({ firstName, lastName }) => {
    const fullName = `${firstName} ${lastName}`
    return fullName.toUpperCase()
}

result = fullName2({firstName: 'Sasha', lastName: 'Xtos`'})
console.log(result)
