const employees = []

function Employees(name, jobTitle, salary, status){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status || "Full Time"
    this.printEmployeeForm = () => {
        console.log( `
        ${this.name}
        ${this.jobTitle }
        ${this.salary }
        ${this.status}
        `)
    }
}

const newEmployee1 = new Employees("Bob", "Assistant Manager", "$65,000")
employees.push(newEmployee1.name)
newEmployee1.printEmployeeForm()

const newEmployee2 = new Employees("Todd", "Team Lead", "$35,000", "Part Time")
employees.push(newEmployee2.name)
newEmployee2.printEmployeeForm()

const newEmployee3 = new Employees("Jim", "Entry Level Programmer", "$25,000")
employees.push(newEmployee3.name)
newEmployee3.printEmployeeForm()

console.log(employees)
