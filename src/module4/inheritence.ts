class Parent {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  makeSleep(hours: number): string {
    return `This ${this.name} will sleep for ${hours}`;
  }
}

class Student extends Parent {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}

const student1 = new Student('Mr.X',15,'Uganda');
student1.

class Teacher extends Parent {
   designation: string

  constructor(name: string, age: number, address: string, designation: string) {
     super(name,age,address)
     this.designation = designation;
  }

  takeClasses(numOfClass: number): string {
    return `This ${this.name} will take ${numOfClass} class`;
  }
}
