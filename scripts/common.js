function saveData(){
    let storageUserInput = document.querySelector('#example-input-name').value
let storagePasswordInput = document.querySelector('#example-input-password').value
let buttonLogin = document.querySelector('#login')
let saveButton = document.querySelector('#LoginBtn')
localStorage.setItem("username",storageUserInput)
localStorage.setItem("password",storagePasswordInput)
 alert("Successfully Loggedin")
 document.getElementById("login").style.display="none";
 document.getElementById("logout").style.display="block";
}
function logoutCollapse(){
    document.getElementById("logout").style.display="none";
    document.getElementById("login").style.display="block";
    localStorage.clear();
}