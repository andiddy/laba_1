import { ExecOptions } from "child_process";

function sealed(constructor: Function) {
    console.log("sealed decorator");
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

function toUpper(target: any, propertyName: string, descriptor: PropertyDescriptor){
    let originMethod = descriptor.value;

    descriptor.value = function(){
        let result: string = originMethod.apply(this);
        let resultUpper: string = result.toUpperCase();
        return resultUpper;
    }
}

@sealed
class Car{
    model: string;
    date: Date; 
    constructor(model: string){
        this.model = model;
        this.date = new Date();
    }
    @toUpper
    toString(): string{
        return this.model + " " + this.date;
    }
}

let car = new Car("ford");
const result = car.toString();
console.log(result);
try{
    
    Object.defineProperty(Car, 'age', { value: 17});
}
catch(ExecOptions){
    console.log("Ошибка");
}

