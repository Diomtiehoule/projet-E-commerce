console.log(document)
let button = document.querySelector(".sign")
/*let pass = document.querySelector('#password')
console.log(pass);*/

let Username = document.querySelector('#name')
console.log(name);

let Cpasse = document.querySelector('#password')
console.log(Cpasse);

let email = document.querySelector('#email')
console.log(email);

button.addEventListener("click", function(){
    localStorage.setItem('nom',Username.value)
    localStorage.setItem('motdepasse',Cpasse.value)
    localStorage.setItem('email',email.value)
})
