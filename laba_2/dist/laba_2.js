let arr1 = [4, 14, 1345, 14, 1, 4, 14, -124, 2, 0, 45, -34];
function minElem(arr) {
    let min = Number.MAX_VALUE;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log(minElem(arr1));
let arr2 = [[4, 0, 524], [0, 0, 4], [4, 4, 1]];
function countZero(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j] == 0) {
                count++;
            }
        }
    }
    return count;
}
console.log(countZero(arr2));
let tuple = ["cat", "dog", "cow"];
function concatTuple(tuple) {
    let result = "";
    for (let i = 0; i < tuple.length; i++) {
        result += tuple[i];
    }
    return result;
}
console.log(concatTuple(tuple));
var Print;
(function (Print) {
    Print[Print["Matrix"] = 0] = "Matrix";
    Print[Print["Inkjet"] = 1] = "Inkjet";
    Print[Print["Laser"] = 2] = "Laser";
    Print[Print["Sublimation"] = 3] = "Sublimation";
    Print[Print["Thermal"] = 4] = "Thermal";
})(Print || (Print = {}));
;
let p1 = Print.Inkjet;
console.log(p1);
class Pet {
    constructor() {
        this.name = 'Some pet';
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.label = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = 'Barsik';
        this.age = 2;
    }
    speak() {
        return "Miyau!";
    }
}
function informPet(pet) {
    console.log(pet.name, pet.age);
}
class Office {
    constructor(room, label, print) {
        this.room = room;
        this.label = label;
        this.print = print;
    }
}
let off = new Office(510, "PaperCheap", Print.Inkjet);
const jsonOff = JSON.stringify(off);
console.log(jsonOff);
