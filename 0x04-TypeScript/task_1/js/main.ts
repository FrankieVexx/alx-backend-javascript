//task 1: create teacher interface
interface Teacher {
    firstName: string;
    lastName: string;
    readonly fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
  }
  
  const teacher: Teacher = {
    firstName: "fran",
    lastName: "Code",
    fullTimeEmployee: true,
    yearsOfExperience: 8,
    location: "Toronto",
    contract: true, 
  };
//task 2 extend teacher interface
  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  const director: Directors = {
    firstName: "James",
    lastName: "Oleteigen",
    fullTimeEmployee: true,
    location: "Mombasa",
    numberOfReports: 6
  };
  
  console.log(director.firstName); 
  console.log(director.lastName); 
  console.log(director.numberOfReports); 
  
//task 3 create a print function for teacher interface
  interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
  }

  const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
    const firstInitial = firstName.charAt(0);
    return `${firstInitial}. ${lastName}`;
  };
  
  console.log(printTeacher("Fran", "Code"));

  //task 4 create student class

  interface Student {
    firstName: string;
    lastName: string;
  }
  
  class StudentClass implements Student {
    constructor(public firstName: string, public lastName: string) {}
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }

const student = new StudentClass("John", "Doe");
console.log(student.workOnHomework()); 
console.log(student.displayName()); 

  
  