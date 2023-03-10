function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Araceli', 'Edu', 'Negri', 'Grisie']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);