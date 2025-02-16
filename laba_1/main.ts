alert("Hello, world!");

const concat = (str1: string, str2: string, str3: string) => str1 + str2 + str3;

const c = "const";
let l: string = "letter";
let t = "bat";
const result1 = concat(c, l, t);
console.log(result1);

class Person{
    readonly name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}
class Employee extends Person{
    post: string;
    constructor(name: string, age: number, post: string){
        super(name, age);
        this.post = post;
    }
}
let employee: Employee = new Employee("John", 30, "boss");
type dog = {name: string, color: string, age: number};
let d1: dog = {name: "rex", color: "brown", age: 3}; 

const result2 = concat(d1.name, employee.post, d1.color);
console.log(result2);


interface Entity {
    id: number;
}
interface ToJsonStringify extends Entity {
    e1: string;
    e2: string;
}
const data: ToJsonStringify = {
    id: 2,
    e1: "Поле 1",
    e2: "Поле 2",
}

const dataJson: string = JSON.stringify(data);
console.log(dataJson) 