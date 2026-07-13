let user = {
    name: "Rahul",
    address: {
        city: "Mumbai",
        pincode: 400001
    }
};

let userCopy = structuredClone(user);

userCopy.address.pincode = 411001;

console.log("Original:", user);
console.log("Copy:", userCopy);