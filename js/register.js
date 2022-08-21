let elForm = document.querySelector(".form__register")
let elFormName = document.querySelector(".user__name")
let elFormEmail = document.querySelector(".user__email")
let elFormPassword = document.querySelector(".user__password")
let elFormIsAdmin = document.querySelector(".user__isAdmin")

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    
    let formName = elFormName.value.trim();
    let formEmail = elFormEmail.value.trim();
    let formPassword = elFormPassword.value.trim();
    let formIsAdmin = elFormIsAdmin.value;
    
    fetch("https://fast-ravine-16741.herokuapp.com/api/users", {
    method: 'POST',
    headers: {
        "Content-Type":"application/json"
    },
    body: JSON.stringify({
        "email":formEmail,
        "password":formPassword,
        "name":formName,
        "isAdmin":true  
    })
})
.then(res => res.json())
.then(data => {
    if (!data.error) {
        window.location.href = "/login.html"
    } else {
        alert(data.error)
    }
})
})