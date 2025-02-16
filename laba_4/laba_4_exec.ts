import {Transport} from "./laba_4";
import IOwner = Transport.IOwner;
import ICar = Transport.ICar;
import Owner = Transport.Owner;
import Car = Transport.Car;
import Motorbike = Transport.Motorbike;
import IMotorbike = Transport.IMotorbike;
import IVehicle = Transport.IVehicle;
import Vehicle = Transport.Vehicle;
import IVehicleStorage = Transport.IVehicleStorage; 
import VehicleStorage = Transport.VehicleStorage;
import Docs = Transport.Docs;
import CarcaseType = Transport.CarcaseType;
import ClassCar = Transport.ClassCar;



const owner: IOwner = new Owner("Дронов", "Ярослав", "Юрьевич", new Date(), Docs.PASSPORT, 727474727, 274747);
const car1: ICar = new Car("Lada", "Calina", 2013, 2444, 32131, owner, CarcaseType.Crossover, ClassCar.B);
const car2: ICar = new Car("Lada", "Priora", 2019, 24434, 561365, owner, CarcaseType.SEDAN, ClassCar.C);


const owner1: IOwner = new Owner("Сидоров", "Иван", "Александрович", new Date(), Docs.POLIC, 123456, 789012);
const bike1: IMotorbike = new Motorbike("Lightning", "Speedster", 2015, 15000, 300, owner1, true, "средний");
const bike2: IMotorbike = new Motorbike("Thunderbird", "Storm", 2021, 75000, 450, owner1, false, "большой");


const v1: IVehicle = new Vehicle("Tesla", "Model S", 2020, 670, 150000, owner1);
const v2: IVehicle = new Vehicle("Ford", "Mustang", 2023, 450, 85000, owner1);
const v3: IVehicle = new Vehicle("Honda", "Civic", 2018, 300, 18000, owner1);
const v4: IVehicle = new Vehicle("Hyundai", "Elantra", 2021, 250, 22000, owner1);
const v5: IVehicle = new Vehicle("BMW", "X5", 2022, 500, 90000, owner1);

const vehicleStorage: IVehicleStorage<IVehicle> = new VehicleStorage();
vehicleStorage.save(v1);
vehicleStorage.save(v2);
vehicleStorage.save(v3);
vehicleStorage.save(v4);
vehicleStorage.save(v5);

console.log(vehicleStorage.getAll());