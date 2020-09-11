const input1 = document.getElementById("input-1");
const input2 = document.getElementById("input-2");

document.getElementById("btn").addEventListener("click", function(){
    input2.value = input1.value;
});