console.log("Please change your background")
document.querySelector("#btn").addEventListener("click",setInterval(
    function(){
        console.log("Please complete the project");
        let colorName = "#"+Math.floor(Math.random()*10000000).toString(16);
        // console.log(colorName);
        document.body.style.backgroundColor = colorName; 
    },1000
))

 