function User(firstName, lastName, age, email, isMale, isSubscribe = false) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.isMale = isMale;
    this.isSubscribe = isSubscribe;
}

function CreateRandomUser(quantity) {
    const arr = [];

    for (let i = 0; i < quantity; i++) {
        const user = new User(
            `Name${i}`,
            `LastName${i}`,
            Math.round(Math.random()*100),
            `mail${i}@test.com`,
            Math.random() > 0.5
        );
        arr.push(user);
    }

    return arr;
}

const userArr = new CreateRandomUser(30);


Array.prototype.getFullName = function() {
    return this.map((el) => `${el.firstName} ${el.lastName}`);
};

Array.prototype.getOldIsers = function() {
    return this.filter((el) => el.age > 17);
};

Array.prototype.subscribeRandomUser = function() {
    this.forEach((el) => el.isSubscribe = Math.random() > 0.4);
    return this;
};

Array.prototype.getMailDefiniteUser = function() {
    return this.filter((el) => el.age < 17 && !el.isMale)
               .map((el) => el.email);
};

// console.table(userArr);

//  Tasks:
// 1. Получить массив полных имен с помощью .map()
// 2. Получить массив совершеннолетних пользователей
// 3. Зарандомить подписку у пользователей
// 4. Получить массив подписанных совершеннолетних пользователей женского пола, но вывести только их почту

// 1.
console.log('------------1------------');

console.log(userArr.getFullName());

console.log('------------1------------');

// 2.
console.log('------------2------------');

console.log(userArr.getOldIsers());

console.log('------------2------------');

// 3.
console.log('------------3------------');

console.log(userArr.subscribeRandomUser());

console.log('------------3------------');

// 4.
console.log('------------4------------');

console.log(userArr.getMailDefiniteUser());

console.log('------------4------------');
