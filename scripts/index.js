// class MyHeader extends HTMLElement{
//     connectedCallback(){
//         this.innerHTML = `
//         <header>
        
//        <img src="assests\images\logo.png" class="logo" alt="logo" height="200px" width="150px">
//        <button type="button" class="btn btn-light" data-toggle="modal" data-target="#login-button" id="login">Login</button>
        
//         </header>
//         `
      
//         }
// }
// customElements.define('my-header',MyHeader)

// function saveData(){
//     let storageUserInput = document.querySelector('#example-input-name').value
// let storagePasswordInput = document.querySelector('#example-input-password').value
// let buttonLogin = document.querySelector('#login')
// let saveButton = document.querySelector('#LoginBtn')
// localStorage.setItem("username",storageUserInput)
// localStorage.setItem("password",storagePasswordInput)
//  alert("Successfully Loggedin")
//  document.getElementById("login").style.display="none";
//  document.getElementById("logout").style.display="block";
// }
function viewMore(){
    // let newCities = document.querySelector("#New-cities")
    document.getElementById("New-cities").style.display="block"
    document.getElementById("Viewless").style.display="block"
    document.getElementById("Viewmore").style.display="none"
    document.getElementById("New-cities").style.display="flex"
}
function viewLess(){
    document.getElementById("New-cities").style.display="none"
    document.getElementById("Viewless").style.display="none"
    document.getElementById("Viewmore").style.display="block"
}

