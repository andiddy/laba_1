export declare namespace Transport {
    enum Docs {
        PASSPORT = "\u041F\u0430c\u043F\u043E\u0440\u0442",
        POLIC = "\u041F\u043E\u043B\u0438\u0441",
        STUDENCHESKY = "\u0421\u0442\u0443\u0434\u0435\u043D\u0447\u0435\u0441\u043A\u0438\u0439"
    }
    interface IOwner {
        surname: string;
        name: string;
        patronymic: string;
        dataOfBirth: Date;
        document: Docs;
        serieDocument: number;
        numberDocument: number;
        showInfo(): void;
    }
    class Owner implements IOwner {
        private _surname;
        private _name;
        private _patronymic;
        private _dataOfBirth;
        private _document;
        private _serieDocument;
        private _numberDocument;
        constructor(surname: string, name: string, patronymic: string, dataOfBirth: Date, document: Docs, serieDocumnt: number, numberDocument: number);
        get surname(): string;
        set surname(surname: string);
        get name(): string;
        set name(name: string);
        get patronymic(): string;
        set patronymic(patronymic: string);
        get dataOfBirth(): Date;
        set dataOfBirth(dataOfBirth: Date);
        get document(): Docs;
        set document(document: Docs);
        get serieDocument(): number;
        set serieDocument(serieDocument: number);
        get numberDocument(): number;
        set numberDocument(numberDocument: number);
        showInfo(): void;
    }
    interface IVehicle {
        mark: string;
        model: string;
        yearOfRelease: number;
        VIN_number: number;
        registrationNumber: number;
        owner: IOwner;
        showInfo(): void;
    }
    class Vehicle implements IVehicle {
        private _mark;
        private _model;
        private _yearOfRelease;
        private _VIN_number;
        private _registrationNumber;
        private _owner;
        constructor(mark: string, model: string, yearOfRelease: number, VIN_number: number, registrationNumber: number, owner: IOwner);
        get mark(): string;
        set mark(mark: string);
        get model(): string;
        set model(model: string);
        get yearOfRelease(): number;
        set yearOfRelease(yearOfRelease: number);
        get VIN_number(): number;
        set VIN_number(VIN_number: number);
        get registrationNumber(): number;
        set registrationNumber(registrationNumber: number);
        get owner(): IOwner;
        set owner(owner: IOwner);
        showInfo(): void;
    }
    enum CarcaseType {
        UNIVERSAL = "\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0439",
        KUPE = "\u041A\u0443\u043F\u0435",
        SEDAN = "\u0421\u0435\u0434\u0430\u043D",
        Crossover = "\u041A\u0440\u043E\u0441\u0441\u043E\u0432\u0435\u0440"
    }
    enum ClassCar {
        A = "\u041C\u0438\u043D\u0438-\u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C",
        B = "\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C",
        C = "\u0441\u0440\u0435\u0434\u043D\u0435\u0440\u0430\u0437\u043C\u0435\u0440\u043D\u044B\u0439 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C",
        D = "\u043F\u043E\u043B\u043D\u043E\u0440\u0430\u0437\u043C\u0435\u0440\u043D\u044B\u0439 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C"
    }
    interface ICar extends IVehicle {
        carcase: CarcaseType;
        classCar: ClassCar;
    }
    class Car extends Vehicle implements ICar {
        private _carcase;
        private _classCar;
        constructor(mark: string, model: string, yearOfRelease: number, VIN_number: number, registrationNumber: number, owner: IOwner, carcase: CarcaseType, classCar: ClassCar);
        get carcase(): CarcaseType;
        set carcase(carcase: CarcaseType);
        get classCar(): ClassCar;
        set classCar(classCar: ClassCar);
        showInfo(): void;
    }
    interface IMotorbike {
        frameType: string;
        forSport: boolean;
    }
    class Motorbike extends Vehicle implements IMotorbike {
        private _frameType;
        private _forSport;
        constructor(mark: string, model: string, yearOfRelease: number, VIN_number: number, registrationNumber: number, owner: IOwner, forSport: boolean, frameType: string);
        get frameType(): string;
        set frameType(frameType: string);
        get forSport(): boolean;
        set forSport(forSport: boolean);
        showInfo(): void;
    }
    interface IVehicleStorage<T extends IVehicle> {
        dateCreate: Date;
        data: T[];
        getAll(): T[];
        save(data: T): void;
    }
    class VehicleStorage<T extends IVehicle> implements IVehicleStorage<T> {
        private readonly _dateCreate;
        private _data;
        constructor();
        get dateCreate(): Date;
        get data(): T[];
        save(data: T): void;
        getAll(): T[];
    }
}
