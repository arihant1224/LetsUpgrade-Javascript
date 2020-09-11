var arr = [
    {
        name: "Arihant",
        age: 19,
        country: "USA",
        hobbies: ["Painting", "Dancing", "Singing"]
    },
    {
        name: "Manvi",
        age: 18,
        country: "England",
        hobbies: ["Painting", "Singing"]
    },
    {
        name: "Bhavya",
        age: 17,
        country: "India",
        hobbies: ["Painting", "Dancing"]
    },
    {
        name: "Sanjay",
        age: 48,
        country: "India",
        hobbies: ["Dancing", "Sports"]
    },
    {
        name: "Ashma",
        age: 35,
        country: "India",
        hobbies: ["Painting", "Singing", "Dancing"]
    },
    {
        name: "Lucy",
        age: 28,
        country: "Australia",
        hobbies: ["Acting", "Dancing"]
    }
];


function objectAge(){
    let arrAge = arr.filter(arr => arr.age < 30);
    console.log(arrAge);
}

objectAge();

console.log("**********************************************");


function objectCountry(){
    let arrCountry = arr.filter(arr => arr.country === "India");
    console.log(arrCountry);
}

objectCountry();
