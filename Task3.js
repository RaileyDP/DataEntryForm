document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    //Variable declaration and instanciation
    var birthdate = document.getElementById("birthday").value;
    var birthDate = new Date(birthdate);
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDifference = today.getMonth() - birthDate.getMonth();
    var country = document.getElementById("countrySelector").value;
    var phone = document.getElementById("phoneNumber").value;
    var errorNotification1 = document.getElementById("errorMessage1");
    var errorNotification2 = document.getElementById("errorMessage2");
    let error = 0;

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())){
        age--;
    }
    
    //Age checker
    if(age<18 || age>100){
        errorNotification1.style.display = "block";
        error++;
    }
    else{
        errorNotification1.style.display = "none";
        if(!(error>=0)){ //It decreases error count if it is not greater than or less than 0; otherwise, nothing happens.
            error--;
        }
    }

    const phoneNumberPrefixes = {
        Germany: "015",
        Germany: "016",
        Germany: "017",
        Indonesia: "08",
        Japan: "080",
        Japan: "090",
        Philippines: "09",
        Singapore: "8",
        Singapore: "9",
        Yemen: "77"
    }

    //Phone number checker based on country
    if(!phone.startsWith(phoneNumberPrefixes[country])){
        errorNotification2.style.display = "block";
        errorNotification2.innerText = (`Phone number must start with ${phoneNumberPrefixes[country]} for ${country}.`);
        error++;
    }
    else{
        errorNotification2.style.display = "none";
        if(!(error>=0)){
            error--;
        }
    }

    //Error checker
    if(error==0){
        alert("Your form has been successfully submitted.");
    }
});
/*
function calculateAge(birthdate){
    
}

function checkBirthDay(){
    var birthdate = document.getElementById("birthday").value;
    calculateAge(birthdate);
}

/*
function checkPhoneNumber(phonenumber){
    var country = document.getElementById("countrySelector").value;
    if(country==="Philipines" && phonenumber[0]!==0 && phonenumber[1]!==9){
        alert("Phone number is not aligned with your country.");
    }
}
*/