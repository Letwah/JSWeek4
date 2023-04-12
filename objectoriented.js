// Object-Oriented Programming
//Methods/Values for the two

class Person {
  constructor(firstName, secondName) {
    this.firstName = firstName;
    this.secondName = secondName;
  }

  fullName() {
    return this.firstName + " " + this.secondName;
  }

  static createCustomerNumber() {
    //static means  related to original prototype not instance of
    return Math.round(Math.random() * 100000);
  }
}

// const _ins = new Person("dave", "Shillinglaw");
// console.log(_ins.fullName());
console.log(createCustomerNumber());

///   https://slides.com/jmsherry/object-oriented-programming?token=Ai-VtQoe#/0/20

///  https://slides.com/jmsherry/object-oriented-programming?token=Ai-VtQoe#/0/32
