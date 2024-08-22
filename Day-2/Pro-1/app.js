console.log("I am working")
document.body.style.backgroundColor="grey";
document.querySelector("#userDetail").addEventListener(
    "submit",function(e){
        e.preventDefault();
        let firstName = document.querySelector("#firstName").value
        let lastName = document.querySelector("#lastName").value
        let phone = document.querySelector("#phone").value
        let gender = document.querySelector(".genderOption").value
        let country = document.querySelector(".countrySelect").value

        console.log(firstName,lastName,phone,gender,country);

        
        
    }
    // let firstName = document.querySelector("#firstName")

)
let firstName = document.querySelector("#firstName")

