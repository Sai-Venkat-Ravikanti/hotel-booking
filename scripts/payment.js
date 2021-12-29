// function paynow(){
//     document.getElementById("Pay-Now").style.display="block"
// }
function loginFunc(){
    var user=document.getElementById("username").value;
    var pass=document.getElementById("password").value;
    if(user=="" || pass==""){
        alert("Username or Password is Missing");
    }
    else{
        localStorage.setItem("username",user);
        localStorage.setItem("password",pass);
        alert("Successfully Logged In");
        document.getElementById("login").style.display="none";
        document.getElementById("logout").style.display="block"
    }
    document.getElementById("payButton").removeAttribute("disabled")

}
function logoutFunc(){
    document.getElementById("login").style.display="block";
    document.getElementById("logout").style.display="none";
    document.getElementById("payButton").setAttribute("disabled", "")
    localStorage.clear();
}
function paynowButt(){
    alert("Hi your Booking is successfull !!")
}