alert("Hello, world!");
const concat = (str1, str2, str3) => str1 + str2 + str3;
const c = "const";
let l = "letter";
let t = "bat";
const result1 = concat(c, l, t);
console.log(result1);
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Employee extends Person {
    constructor(name, age, post) {
        super(name, age);
        this.post = post;
    }
}
let employee = new Employee("John", 30, "boss");
let d1 = { name: "rex", color: "brown", age: 3 };
const result2 = concat(d1.name, employee.post, d1.color);
console.log(result2);
const data = {
    id: 2,
    e1: "Поле 1",
    e2: "Поле 2",
};
const dataJson = JSON.stringify(data);
console.log(dataJson);
