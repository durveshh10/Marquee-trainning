let user = {
    name: "Rahul",
    address: {
        city: "Mumbai",
        pincode: 400001
    }
};

let userCopy = {
    ...user
};

userCopy.address.city = "Pune";

console.log("Original:", user);
console.log("Copy:", userCopy);