let elForm = document.querySelector(".form");
let elLoginInput = document.querySelector(".form__login");
let elPasswordInput = document.querySelector(".form__password");

let login = "umarov"
let password = "abdulaziz"

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    
    let formLogin = elLoginInput.value.trim();
    let formPassword = elPasswordInput.value.trim();
    
    
    fetch("https://fast-ravine-16741.herokuapp.com/api/auth", {
    method: 'POST',
    headers: {
        "Content-Type":"application/json"
    },
    body: JSON.stringify({
        "email":formLogin,
        "password":formPassword
    })
})
.then(res => res.json())
.then(data => {
    if (!data.error) {
        localStorage.setItem("token", data.Authorization);
        console.log(data.Authorization);
        elLoginInput.value = null;
        elPasswordInput.value = null;
        window.location.href = "/index.html"
    } else {
        alert(data.error)
    }
})
})

// function checkIn(loginV, passwordV) {
//     if (loginV == login && passwordV == password) {
//         return true
//     } else {
//        return false
//     }
// }

