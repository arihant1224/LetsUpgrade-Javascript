var inputArr = ["Arihant", "John Cena", "Roman Reings", "Seth Rollins", "Dean Ambrose", "Bruce", "Tony", "Markus Banner"];

function search(){
    let newArr = [];
    for (var i = 0; i < inputArr.length; i++){
        if (inputArr[i].includes("a")){
            newArr.push(inputArr[i]);
        }
    }
    return console.log(newArr);
}

search();