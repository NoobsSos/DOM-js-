/* 
## Conditional Statements #7

1. create two objects "person1", "person2"
2. setup name,age (15-25),
   status ('resident', 'tourist') keys

3. setup if else, condition where
   age must be bigger than 18 and status must be
   equal to 'resident'
4. test with both objects
*/

let person1 = {
   name: 'Nazar',
   age: 16,
   status: 'resident'
}

let person2 = {
   name: 'Sasha',
   age: 19,
   status: 'resident'
}

if (person1.age > 18 && person1.status === 'resident')
{
   console.log("success!")
}
else 
{
   console.log("failed")
}

if (person2.age > 18 && person2.status === 'resident')
{
   console.log("success!")
}
else 
{
   console.log("failed")
}