declare const concat: (str1: string, str2: string, str3: string) => string;
declare const c = "const";
declare let l: string;
declare let t: string;
declare const result1: string;
declare class Person {
    readonly name: string;
    age: number;
    constructor(name: string, age: number);
}
declare class Employee extends Person {
    post: string;
    constructor(name: string, age: number, post: string);
}
declare let employee: Employee;
type dog = {
    name: string;
    color: string;
    age: number;
};
declare let d1: dog;
declare const result2: string;
interface Entity {
    id: number;
}
interface ToJsonStringify extends Entity {
    e1: string;
    e2: string;
}
declare const data: ToJsonStringify;
declare const dataJson: string;
