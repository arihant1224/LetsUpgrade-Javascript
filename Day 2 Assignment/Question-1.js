function searchChar(input, char){
    if (input.includes(char)){
        let n = input.search(char);
        return console.log(input[n] + ": Index number(" + n + ")");
    }else {
        return console.log("Character not found!");
    }
}

searchChar("Arihant", "t");