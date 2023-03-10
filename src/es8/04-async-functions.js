const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Async'), 2000)
        : reject(new Error('Error'));
    })
}

const anotherFn = () => {
    const something = fnAsync();
    console.log(something);
    console.log('Hello');
}

console.log('before');
anotherFn();
console.log('after');