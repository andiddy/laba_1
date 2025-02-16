"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function sealed(constructor) {
    console.log("sealed decorator");
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
function toUpper(target, propertyName, descriptor) {
    let originMethod = descriptor.value;
    descriptor.value = function () {
        let result = originMethod.apply(this);
        let resultUpper = result.toUpperCase();
        return resultUpper;
    };
}
let Car = class Car {
    constructor(model) {
        this.model = model;
        this.date = new Date();
    }
    toString() {
        return this.model + " " + this.date;
    }
};
__decorate([
    toUpper
], Car.prototype, "toString", null);
Car = __decorate([
    sealed
], Car);
let car = new Car("ford");
const result = car.toString();
console.log(result);
try {
    Object.defineProperty(Car, 'age', { value: 17 });
}
catch (ExecOptions) {
    console.log("Ошибка");
}
