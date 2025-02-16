export namespace Transport{
    export enum Docs {
        PASSPORT = "Паcпорт" ,
        POLIC = "Полис",
        STUDENCHESKY = "Студенческий"
        }
    export interface IOwner{
        surname: string;
        name: string;
        patronymic: string;
        dataOfBirth: Date;
        document: Docs;
        serieDocument: number;
        numberDocument: number;
    
        showInfo(): void;
    }
    
    export class Owner implements IOwner{
        private _surname: string;
        private _name: string;
        private _patronymic: string;
        private _dataOfBirth: Date;
        private _document: Docs;
        private _serieDocument: number;
        private _numberDocument: number;
    
        constructor(surname: string, name: string, patronymic: string, dataOfBirth: Date, document: Docs, serieDocumnt: number, numberDocument: number) {
            this._surname = surname;
            this._name = name;
            this._dataOfBirth = dataOfBirth;
            this._document = document;
            this._numberDocument = numberDocument;
            this._patronymic = patronymic;
            this._serieDocument = serieDocumnt;
        }
    
    
        get surname(): string {return this._surname;}
        set surname(surname: string) {this._surname = surname;}
    
        get name(): string {return this._name;}
        set name(name: string) {this._name = name;}
    
        get patronymic(): string {return this._patronymic;}
        set patronymic(patronymic: string) {this._patronymic = patronymic;}
    
        get dataOfBirth(): Date {return this._dataOfBirth;}
        set dataOfBirth(dataOfBirth: Date) {this._dataOfBirth = dataOfBirth;}
    
        get document(): Docs {return this._document;}
        set document(document: Docs) {this._document = document}
    
        get serieDocument(): number {return this._serieDocument;}
        set serieDocument(serieDocument: number) {this._serieDocument = serieDocument;}
    
        get numberDocument(): number {return this._numberDocument;}
        set numberDocument(numberDocument: number) {this._numberDocument = numberDocument;}
    
        showInfo(): void {
            console.log(this._surname, this._name, this._dataOfBirth, this._document, this._numberDocument, this._serieDocument, this._patronymic);
        }
    }
    
    export interface IVehicle{
        mark: string;
        model: string;
        yearOfRelease: number;
        VIN_number: number;
        registrationNumber: number;
        owner: IOwner;
        showInfo(): void;
    }
    export class Vehicle implements IVehicle{
        private _mark: string;
        private _model: string;
        private _yearOfRelease: number;
        private _VIN_number: number;
        private _registrationNumber: number;
        private _owner: IOwner;
    
        constructor(mark: string, model: string, yearOfRelease: number, VIN_number: number, registrationNumber: number, owner: IOwner){
            this._mark = mark;
            this._model = model;
            this._yearOfRelease = yearOfRelease;
            this._VIN_number = VIN_number;
            this._registrationNumber = registrationNumber;
            this._owner = owner;
        }
        get mark(): string {return this._mark;}
        set mark(mark: string) {this._mark = mark;}
    
        get model(): string {return this._model;}
        set model(model: string) {this._model = model;}
    
        get yearOfRelease(): number {return this._yearOfRelease;}
        set yearOfRelease(yearOfRelease: number) {this._yearOfRelease = yearOfRelease;}
    
        get VIN_number(): number {return this._VIN_number;}
        set VIN_number(VIN_number: number) {this._VIN_number = VIN_number;}
    
        get registrationNumber(): number {return this._registrationNumber;}
        set registrationNumber(registrationNumber: number) {this._registrationNumber = registrationNumber}
    
        get owner(): IOwner {return this._owner;}
        set owner(owner: IOwner) {this._owner = owner;}
    
        showInfo(): void{
            console.log(this._mark, this._model, this._VIN_number, this._owner, this._registrationNumber, this._yearOfRelease);
        }
    }
    
    export enum CarcaseType {
        UNIVERSAL = "Универсальный",
        KUPE = "Купе",
        SEDAN = "Седан",
        Crossover = "Кроссовер"
    };
    export enum ClassCar {
        A = "Мини-автомобиль",
        B = "Маленький автомобиль",
        C = "среднеразмерный автомобиль",
        D = "полноразмерный автомобиль"
    }
    
    export interface ICar extends IVehicle{
        carcase: CarcaseType;
        classCar: ClassCar;
    }
    export class Car extends Vehicle implements ICar{
    
        private _carcase: CarcaseType;
        private _classCar: ClassCar;
        constructor(mark: string, model: string, yearOfRelease: number, VIN_number: number, registrationNumber: number, owner: IOwner, carcase: CarcaseType, classCar: ClassCar){
            super(mark, model, yearOfRelease, VIN_number, registrationNumber, owner);
            this._carcase = carcase;
            this._classCar = classCar;
        }
        get carcase(): CarcaseType {return this._carcase;}
        set carcase(carcase: CarcaseType) {this._carcase = carcase;}
    
        get classCar(): ClassCar {return this._classCar;}
        set classCar(classCar: ClassCar) {this._classCar = classCar;}
    
        showInfo(){
            console.log(this._carcase, this._classCar, this.mark, this.model, this.yearOfRelease, this.registrationNumber, this.VIN_number);
        }
    }
    
    export interface IMotorbike{
        frameType: string;
        forSport: boolean;
    }
    export class Motorbike extends Vehicle implements IMotorbike {
        private _frameType: string;
        private _forSport: boolean;
        constructor(mark: string, model: string, yearOfRelease: number, VIN_number: number, registrationNumber: number, owner: IOwner, forSport: boolean, frameType: string){
            super(mark, model, yearOfRelease, VIN_number, registrationNumber, owner);
            this._forSport = forSport;
            this._frameType = frameType;
        }
        get frameType(): string {return this._frameType;}
        set frameType(frameType: string) {this._frameType = frameType;}
    
        get forSport(): boolean {return this._forSport;}
        set forSport(forSport: boolean) {this._forSport = forSport;}
    
        showInfo(){
            console.log(this._frameType, this._forSport, this.mark, this.model, this.yearOfRelease, this.registrationNumber, this.VIN_number);
        }
    }
    
    export interface IVehicleStorage<T extends IVehicle>{
        dateCreate: Date;
        data: T[];
        getAll(): T[];
        save(data: T): void;
    }
    
    export class VehicleStorage<T extends IVehicle> implements IVehicleStorage<T>{
        private readonly _dateCreate: Date;
        private _data: T[];
        constructor(){
            this._dateCreate = new Date();
            this._data = [];
        }
    
        get dateCreate(): Date {return this._dateCreate;}
    
        get data(): T[] {return this._data;}
        
        save(data: T): void {
            this._data.push(data);
        }
    
        getAll(): T[] {return this._data;}
    }

}
