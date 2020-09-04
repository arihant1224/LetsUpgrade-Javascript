var inputArr = ["Arihant", "John Cena", "Roman Reings", "Seth Rollins", "Dean Ambrose"];

function searchElement(element){
    if (inputArr.includes(element)){
        let output = "'" + element + "' found";
        return console.log(output);
    }else {
        return console.log("Not Found!");
    }
}

searchElement("Seth Rollins");