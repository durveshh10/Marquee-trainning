const form = document.getElementById('store');
const res = document.getElementById('res');
const studentList = document.getElementById('studentList');
const userArr = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        email: document.getElementById('email').value
    };

    userArr.push(user);
    console.log(userArr);

    displayUsers();
});

function displayUsers() {
    studentList.innerHTML = ''; 

    userArr.forEach(function(student) {
        studentList.innerHTML += `
            <li>
                Name: ${student.name}, 
                Age: ${student.age}, 
                Email: ${student.email}
            </li>
        `;
    });

    form.reset();
}
