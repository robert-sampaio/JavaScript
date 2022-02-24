/*
    Constructor function
    * 
    * Criar um novo objeto
    * this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}

const robert = new Person("Robert")
const abner = new Person("Abner")

console.log(robert.walk())
console.log(abner.walk())
