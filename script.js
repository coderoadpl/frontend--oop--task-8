// ARGUMENTS KEYWORD

// regular function

const showAllArguments = function () {
    console.log(arguments)
}

// arrow function

// this will fail, cause of ReferenceError: arguments is not defined
const showAllArgumentsArrow = () => {
    console.log(arguments)
}

// CONSTRUCTOR FUNCTIONS

// regular function

const Greeter = function (name) {
    this.name = name
}
Greeter.prototype.sayHello = function () {
    console.log('Hello ' + this.name)
}
const greeter1 = new Greeter('Mateusz')

// arrow function

const GreeterArrow = (name) => {
    this.name = name
}

// this will throw TypeError: Cannot set property 'sayHello' of undefined
// GreeterArrow.prototype.sayHello = function () {
//     console.log('Hello ' + this.name)
// }

// THIS COMES FROM LEXICAL SCOPE IN ARROW FUNCTION

// regular function

const sayHello = function () {
    // console.log(this)
    console.log('Hello ' + this.name)
}

// in regular function context value depends on place of call 
sayHello()
sayHello.call({ name: 'Mateusz 1' })
sayHello.apply({ name: 'Mateusz 2' })
const sayHelloBound = sayHello.bind({ name: 'Mateusz 3' })
sayHelloBound()

// arrow function

const sayHelloArrow = () => {
    // console.log(this)
    console.log('Hello ' + this.name)
}

sayHelloArrow()
sayHelloArrow.call({ name: 'Mateusz 1' })
sayHelloArrow.apply({ name: 'Mateusz 2' })
const sayHelloArrowBound = sayHelloArrow.bind({ name: 'Mateusz 3' })
sayHelloArrowBound()
