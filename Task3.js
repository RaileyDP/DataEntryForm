function calculateAge(birthdate){
    var today = new Date();
    var birthDate = new Date(birthdate);
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDifference = today.getMonth() - birthDate.getMonth();
    var submit = document.getElementById("submitBtn");
    var error = document.getElementById("error");

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())){
        age--;
    }
    
    if(age<18 || age>100){
        alert("Age must be between 18 and 100.");
        submit.setAttribute("disabled","");
        error.style.display = "block";
    }
    else{
        submit.removeAttribute("disabled","");
        error.style.display = "none";
    }
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