// for...in

let person = {
    name: 'Robert',
    age: 18,
    weight: 67.3,
}

for(let property in person) {
    //console.log(property)
    console.log(person[property])
}