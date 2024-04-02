console.log('Hello!');

const hamburgerIcon = document.querySelector("#hamburgerIcon")
console.log(hamburgerIcon)

function hamburgermeny(){
    const nav = document.querySelector("#nav")
    console.log(nav)
    nav.classList.toggle("headerhamburger")
    console.log("clicked")
    
}

hamburgerIcon.addEventListener("click", hamburgermeny)



