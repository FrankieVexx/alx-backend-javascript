interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

// student objects
const firstStudent: Student = {
	firstName: "Fran",
	lastName: "Code",
	age:28,
	location: "Toronto"
}

const secondStudent: Student = {
	firstName: "Joy",
	lastName: "Lesley",
	age:23,
	location: "Nairobi"
}

// array of students
const studentsList = [firstStudent, secondStudent];

const table = document.getElementById('studentTable') as HTMLTableElement;

// row for each student 
studentsList.forEach((student) => {
	const row = table.insertRow();
	const firstNameCell = row.insertCell(0);
	const locationCell = row.insertCell(1);

	firstNameCell.innerHTML = student.firstName;
	locationCell.innerHTML = student.location;
})