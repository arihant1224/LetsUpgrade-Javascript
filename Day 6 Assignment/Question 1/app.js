var userInfo = [
    {
        name: "Arihant Jain",
        age: 19,
        city: "Agra",
        salary: 45000
    },
    {
        name: "Bhavya Jain",
        age: 17,
        city: "Agra",
        salary: 40000
    },
    {
        name: "Sanjay Jain",
        age: 48,
        city: "Agra",
        salary: 150000
    },
    {
        name: "Ashma Jain",
        age: 42,
        city: "Agra",
        salary: 80000
    },
    {
        name: "Monika Jain",
        age: 18,
        city: "Delhi",
        salary:40000
    }
];

var html = "<table>";
for (var i = 0; i < userInfo.length; i++) {
    html+="<tr>";
    html+="<td>"+userInfo[i].name+"</td>";
    html+="<td>"+userInfo[i].age+"</td>";
    html+="<td>"+userInfo[i].city+"</td>";
    html+="<td>"+userInfo[i].salary+"</td>";
    html+="</tr>";
}
html+="</table>";

document.getElementById("box").innerHTML = html;

var form = document.getElementById("form");
var input = document.getElementById("searchInput");
var submit = document.getElementById("submit-btn");
var resultList = document.getElementById("resultList");
var reset = document.getElementById("reset-btn");


submit.addEventListener("click", function(event){
    event.preventDefault();
    if (input.value){
        document.getElementById("heading").style.display = "inline-block";
        for (var i = 0; i < userInfo.length; i++){
            if (input.value === userInfo[i].name || input.value === userInfo[i].city){
                const resultFound = document.createElement("p");
                resultFound.innerHTML = "Name: " + userInfo[i].name + "<br>" + "Age: " + userInfo[i].age + "<br>" + "City: " + userInfo[i].city + "<br>" + "Salary: " + userInfo[i].salary;
                resultList.appendChild(resultFound);
            }
        }
        input.value = '';
    }else{
        alert("Please type something");
    }
});

reset.addEventListener("click", function(event){
    event.preventDefault();
    location.reload();
});