function verify(){
    var un=document.getElementById("username").value;
    var pwd=document.getElementById("password").value;
    if(un==="cvr" && pwd==="cvr123"){
        window.location.href="home.html";
    }
    else{
        alert("Please enter valid credentials");
        console.log("Valid credentials aren't entered");
    }
}