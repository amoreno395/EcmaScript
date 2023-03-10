//las variables que aceptan rasignacion solo son var y let, const es una variable que no cambia
var lastName = 'David'; //asignar
lastName = 'Oscar'; //reasignar
console.log(lastName);

let fruit = 'apple';
fruit = 'kiwi';
console.log(fruit);

//esto dara un error
//const animal = 'dog';
//animal = 'cat';
//console.log(animal);

const fruits = () => {
    if(true) {
        var fruit1 = 'Apple';//function scope
        let fruit2 = 'Kiwi';// block scope
        const fruit3 = 'Banana';// block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();