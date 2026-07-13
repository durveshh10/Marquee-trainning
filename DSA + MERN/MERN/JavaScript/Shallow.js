let employee = {
    name: "Riya",
    department: "HR"
};

let employeeCopy = {
    ...employee
};

employeeCopy.department = "IT";

console.log("Original:", employee);
console.log("Copy:", employeeCopy);