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



const listname = document.querySelector("#listname");
console.log(listname); 


//lager element i html 
const  lihjem = document.createElement("li");
lihjem.classList.add("listitam" )

const liprosjekter = document.createElement("li");
liprosjekter.classList.add("listitam" )

const likontakt = document.createElement("li");
likontakt.classList.add("listitam" )

const  liomoss = document.createElement("li");
liomoss.classList.add("listitam" )



//modifiserer synlig i html
lihjem.textContent = "hjem"
liprosjekter.textContent = "prosjekter"
likontakt.textContent = "kontakt"
liomoss.textContent = 'om oss'

// sendt inn i html
listname.appendChild(lihjem);
listname.appendChild(likontakt);
listname.appendChild(liprosjekter);
listname.appendChild(liomoss)

