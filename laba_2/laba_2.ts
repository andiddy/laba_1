let arr1: number[] = [4, 14, 1345, 14, 1, 4, 14, -124, 2, 0, 45, -34];

function minElem(arr: number[]): number{
    let min = Number.MAX_VALUE;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}
console.log(minElem(arr1));

let arr2: number[][] = [[4,0,524],[0,0,4],[4,4,1]];

function countZero(arr: number[][]): number{
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i][j] == 0){
                count++;
            }
        }
    }
    return count;
}
console.log(countZero(arr2));

let tuple: [string, string, string] = ["cat", "dog", "cow"];

function concatTuple(tuple: [string, string, string]): string{
    let result: string = "";
    for(let i = 0; i < tuple.length; i++){
        result += tuple[i];
    }
    return result;
}
console.log(concatTuple(tuple));

enum Print {Matrix, Inkjet, Laser, Sublimation, Thermal};
let p1: Print = Print.Inkjet;
console.log(p1);


class Pet {
    name: string = 'Some pet';
    age: number = -1;
    speak() {
        return "No speak. I am fish!";
    }
}

class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
        return "Yaw-Gaw!";
    }
}

class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
        return "Miyau!";  
    } 
}
function informPet(pet: Pet){
    console.log(pet.name, pet.age);
}

class Office{
    room: Number;
    label: String;
    print: Print;
    constructor(room: number, label: string, print: Print){
        this.room = room;
        this.label = label;
        this.print = print;
    }
}

let off: Office = new Office(510, "PaperCheap", Print.Inkjet);
const jsonOff: string = JSON.stringify(off);
console.log(jsonOff);
