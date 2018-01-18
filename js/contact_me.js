// contact form for login

var attempts = 3;

function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if(username=="Formget" && password="form123get"){
        alert("you have successfully logged in");
        window.location("success.html");
        return false;
    }
    else {
        attempts--;
        alert("You are left with "+attempts+" attempts;")
    if(attempts==0){
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submit").disabled = true;
        return false;
    }
    }
}