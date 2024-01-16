const inpDateEl = document.querySelector(".date");
const btnEl = document.getElementById("btn");
const spanEl = document.querySelector("span");

function calculateAge(){
    let givenYear = inpDateEl.value.split("-")[0]
    // let givenMonth = inpDateEl.value.split("-")[1]
    // let givenDay = inpDateEl.value.split("-")[2]

    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    // let Month = currentDate.getMonth() + 1;
    // let Day = currentDate.getDate();

    age = parseInt(currentYear) - parseInt(givenYear)
    
    spanEl.innerText = `Your age is ${age} years old !!`;
}

btnEl.addEventListener("click", () => {
    if (inpDateEl.value === ""){
        window.alert("Provide the date of birth, to calculate the age.");
    }else{
        calculateAge();
    }
});

