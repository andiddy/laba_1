"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
var Transport;
(function (Transport) {
    let Docs;
    (function (Docs) {
        Docs["PASSPORT"] = "\u041F\u0430c\u043F\u043E\u0440\u0442";
        Docs["POLIC"] = "\u041F\u043E\u043B\u0438\u0441";
        Docs["STUDENCHESKY"] = "\u0421\u0442\u0443\u0434\u0435\u043D\u0447\u0435\u0441\u043A\u0438\u0439";
    })(Docs = Transport.Docs || (Transport.Docs = {}));
    class Owner {
        constructor(surname, name, patronymic, dataOfBirth, document, serieDocumnt, numberDocument) {
            this._surname = surname;
            this._name = name;
            this._dataOfBirth = dataOfBirth;
            this._document = document;
            this._numberDocument = numberDocument;
            this._patronymic = patronymic;
            this._serieDocument = serieDocumnt;
        }
        get surname() { return this._surname; }
        set surname(surname) { this._surname = surname; }
        get name() { return this._name; }
        set name(name) { this._name = name; }
        get patronymic() { return this._patronymic; }
        set patronymic(patronymic) { this._patronymic = patronymic; }
        get dataOfBirth() { return this._dataOfBirth; }
        set dataOfBirth(dataOfBirth) { this._dataOfBirth = dataOfBirth; }
        get document() { return this._document; }
        set document(document) { this._document = document; }
        get serieDocument() { return this._serieDocument; }
        set serieDocument(serieDocument) { this._serieDocument = serieDocument; }
        get numberDocument() { return this._numberDocument; }
        set numberDocument(numberDocument) { this._numberDocument = numberDocument; }
        showInfo() {
            console.log(this._surname, this._name, this._dataOfBirth, this._document, this._numberDocument, this._serieDocument, this._patronymic);
        }
    }
    Transport.Owner = Owner;
    class Vehicle {
        constructor(mark, model, yearOfRelease, VIN_number, registrationNumber, owner) {
            this._mark = mark;
            this._model = model;
            this._yearOfRelease = yearOfRelease;
            this._VIN_number = VIN_number;
            this._registrationNumber = registrationNumber;
            this._owner = owner;
        }
        get mark() { return this._mark; }
        set mark(mark) { this._mark = mark; }
        get model() { return this._model; }
        set model(model) { this._model = model; }
        get yearOfRelease() { return this._yearOfRelease; }
        set yearOfRelease(yearOfRelease) { this._yearOfRelease = yearOfRelease; }
        get VIN_number() { return this._VIN_number; }
        set VIN_number(VIN_number) { this._VIN_number = VIN_number; }
        get registrationNumber() { return this._registrationNumber; }
        set registrationNumber(registrationNumber) { this._registrationNumber = registrationNumber; }
        get owner() { return this._owner; }
        set owner(owner) { this._owner = owner; }
        showInfo() {
            console.log(this._mark, this._model, this._VIN_number, this._owner, this._registrationNumber, this._yearOfRelease);
        }
    }
    Transport.Vehicle = Vehicle;
    let CarcaseType;
    (function (CarcaseType) {
        CarcaseType["UNIVERSAL"] = "\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0439";
        CarcaseType["KUPE"] = "\u041A\u0443\u043F\u0435";
        CarcaseType["SEDAN"] = "\u0421\u0435\u0434\u0430\u043D";
        CarcaseType["Crossover"] = "\u041A\u0440\u043E\u0441\u0441\u043E\u0432\u0435\u0440";
    })(CarcaseType = Transport.CarcaseType || (Transport.CarcaseType = {}));
    ;
    let ClassCar;
    (function (ClassCar) {
        ClassCar["A"] = "\u041C\u0438\u043D\u0438-\u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C";
        ClassCar["B"] = "\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C";
        ClassCar["C"] = "\u0441\u0440\u0435\u0434\u043D\u0435\u0440\u0430\u0437\u043C\u0435\u0440\u043D\u044B\u0439 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C";
        ClassCar["D"] = "\u043F\u043E\u043B\u043D\u043E\u0440\u0430\u0437\u043C\u0435\u0440\u043D\u044B\u0439 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C";
    })(ClassCar = Transport.ClassCar || (Transport.ClassCar = {}));
    class Car extends Vehicle {
        constructor(mark, model, yearOfRelease, VIN_number, registrationNumber, owner, carcase, classCar) {
            super(mark, model, yearOfRelease, VIN_number, registrationNumber, owner);
            this._carcase = carcase;
            this._classCar = classCar;
        }
        get carcase() { return this._carcase; }
        set carcase(carcase) { this._carcase = carcase; }
        get classCar() { return this._classCar; }
        set classCar(classCar) { this._classCar = classCar; }
        showInfo() {
            console.log(this._carcase, this._classCar, this.mark, this.model, this.yearOfRelease, this.registrationNumber, this.VIN_number);
        }
    }
    Transport.Car = Car;
    class Motorbike extends Vehicle {
        constructor(mark, model, yearOfRelease, VIN_number, registrationNumber, owner, forSport, frameType) {
            super(mark, model, yearOfRelease, VIN_number, registrationNumber, owner);
            this._forSport = forSport;
            this._frameType = frameType;
        }
        get frameType() { return this._frameType; }
        set frameType(frameType) { this._frameType = frameType; }
        get forSport() { return this._forSport; }
        set forSport(forSport) { this._forSport = forSport; }
        showInfo() {
            console.log(this._frameType, this._forSport, this.mark, this.model, this.yearOfRelease, this.registrationNumber, this.VIN_number);
        }
    }
    Transport.Motorbike = Motorbike;
    class VehicleStorage {
        constructor() {
            this._dateCreate = new Date();
            this._data = [];
        }
        get dateCreate() { return this._dateCreate; }
        get data() { return this._data; }
        save(data) {
            this._data.push(data);
        }
        getAll() { return this._data; }
    }
    Transport.VehicleStorage = VehicleStorage;
})(Transport || (exports.Transport = Transport = {}));
