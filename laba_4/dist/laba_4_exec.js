"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const laba_4_1 = require("./laba_4");
var Owner = lab4_1.Transport.Owner;
var Car = lab4_1.Transport.Car;
var Motorbike = lab4_1.Transport.Motorbike;
var Vehicle = lab4_1.Transport.Vehicle;
var VehicleStorage = lab4_1.Transport.VehicleStorage;
var Docs = lab4_1.Transport.Docs;
var CarcaseType = lab4_1.Transport.CarcaseType;
var ClassCar = lab4_1.Transport.ClassCar;
const owner = new Owner("Дронов", "Ярослав", "Юрьевич", new Date(), Docs.PASSPORT, 727474727, 274747);
const car1 = new Car("Lada", "Calina", 2013, 2444, 32131, owner, CarcaseType.Crossover, ClassCar.B);
const car2 = new Car("Lada", "Priora", 2019, 24434, 561365, owner, CarcaseType.SEDAN, ClassCar.C);
const owner1 = new Owner("Сидоров", "Иван", "Александрович", new Date(), Docs.POLIC, 123456, 789012);
const bike1 = new Motorbike("Lightning", "Speedster", 2015, 15000, 300, owner1, true, "средний");
const bike2 = new Motorbike("Thunderbird", "Storm", 2021, 75000, 450, owner1, false, "большой");
const v1 = new Vehicle("Tesla", "Model S", 2020, 670, 150000, owner1);
const v2 = new Vehicle("Ford", "Mustang", 2023, 450, 85000, owner1);
const v3 = new Vehicle("Honda", "Civic", 2018, 300, 18000, owner1);
const v4 = new Vehicle("Hyundai", "Elantra", 2021, 250, 22000, owner1);
const v5 = new Vehicle("BMW", "X5", 2022, 500, 90000, owner1);
const vehicleStorage = new VehicleStorage();
vehicleStorage.save(v1);
vehicleStorage.save(v2);
vehicleStorage.save(v3);
vehicleStorage.save(v4);
vehicleStorage.save(v5);
console.log(vehicleStorage.getAll());
