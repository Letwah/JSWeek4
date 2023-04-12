

///GETTERS AND SETTERS ON OBJECTS

const dog = {
name:"Ronnie", 
breed:"border terrier",
interests:["eating", "walks"],
get dogbio() {
return `${this.name} is a ${this.breed} and his main interests are ${this.interests[0]}.`
    }, 
    set primaryInterest(_interests) {
        console.log("setting primary interests")
        this.interests.unshift(_interests);
    }, 
    get primaryInterest(){
        return this.interests[0];
    }
};

console.log(dog.dogbio);
dog.primaryInterest = "barking"
console.log(dog.dogbio);



///GETTERS AND SETTERS ON Classes

class Person {
    constructor(name) {
        this.name = name;
    }

    set name(value) {
    if (value.lenght > 30 ){

        //add checks or validation
        throw new Error('Name is too long!'); 
    }
         this._name = value;
    }

    get name() {
        return this._name.toUpperCase();
    }
}

const Letty = new Person("Letty");
console.log(Letty.name);
