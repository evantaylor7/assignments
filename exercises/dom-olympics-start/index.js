const h1 = document.createElement("h1")
h1.className = "title"
h1.textContent = "JavaScript Made This!!"
document.getElementById("header").appendChild(h1)

const span = document.createElement("span")
span.className = "name"
span.textContent = "Evan"
document.getElementById("header").appendChild(span)

const subTitle = document.createElement("span")
subTitle.className = "sub-title"
subTitle.textContent = " wrote the JavaScript"
document.getElementById("header").appendChild(subTitle)
