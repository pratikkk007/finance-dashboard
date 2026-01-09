const users = [
    {name:"A",age:10},
    {name:"B",age:20},
    {name:"C",age:30},
    {name:"D",age:40},
    {name:"E",age:50},
]

const {name,age} = users[0];

console.log(name,age);

const names = users.map(u => u.name);

console.log(names);

const adultAge = users.filter(u => u.age>20);

console.log(adultAge);

const totalAge = users.reduce((acc,u) => acc+u.age,0);

console.log(totalAge);

const newUser = [...users,{name:"fAT",age:60}];

console.log(newUser);