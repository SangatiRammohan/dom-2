//creating , appending, removing,cloning, set attributes
let a= document.querySelector("div")
document.body.style.backgroundColor="red"
a.style.backgroundColor="black"
a.style.padding="30px"
a.style.color="white"
let b=document.createElement("img")
b.src="https://content.tupaki.com/en/feeds/2023/08/19/146165-nani.jpg"
// a.appendChild(b)
b.setAttribute=("width","200px")
let c= document.createElement("img")
c.src="https://i.pinimg.com/originals/34/44/48/34444852520aadfc6c3826017e528ceb.jpg"
c.setAttribute=("width","200")
// a.appendChild(c)
a.append(b,c)
a.replaceChild(c,b)
a.removeChild()
let d=a.cloneNode(true)
document.body.appendChild(d)



// set attributes
let ntr =document.createElement("img")
ntr.setAttribute("src","https://i.pinimg.com/originals/34/44/48/34444852520aadfc6c3826017e528ceb.jpg")
ntr.setAttribute("width","200px")
ntr.setAttribute("height","400px")
document.body.append(ntr)
ntr.removeAttribute("height")



//Event Handling
let book =document.querySelector("div")
book.style.backgroundColor="red"
let ptag=document.querySelectorAll("p")
console.log(book.firstChild)
console.log(book.firstElementChild)
console.log(ptag[0].firstChild)

console.log(ptag[0].nextSibling)
console.log(ptag[1].nextElementSibling)
console.log(ptag[0].nodeName)
console.log(ptag[3].nodeType)
console.log(book.childNodes)
console.log(book.nodeName)
console.log(book.nodeType)
console.log(book.localName)
console.log(ptag[0].className)
console.log(book.className)
book.insertAdjacentElement("afterbegin",b)
book.insertAdjacentElement("afterend",c)
book.insertAdjacentElement("beforebegin",c)
book.insertAdjacentElement("beforeend",b)

