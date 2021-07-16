let today = new Date();

document.getElementById("time").innerHTML=today;

// alert(today);


function myFun(){
    var x = document.getElementById("menu");

    if(x.style.display == "block"){
        
         x.style.display = "none";

    }else 
    {     x.style.display = "block";
}
    }
