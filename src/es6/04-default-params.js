function newUser(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 34;
    var country = country || 'Mx';
    console.log(name, age, country);
}

newUser();
newUser('Araceli', 27, 'Py');



function newAdmin(name = 'Oscar', age = 32, country = 'Cl') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Edu', 29, 'Py');