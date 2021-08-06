let whiteCover = document.querySelector("#whiteCover")


document.addEventListener("scroll", () => whiteCover.style.boxShadow = `inset 0px 0px 50px ${window.scrollY/3}px white`)

let title = document.querySelector("h1")
let recBtn = document.querySelector("#recommendation")

recBtn.addEventListener("click", makeRec)

function makeRec() {
    let restaraunts = document.querySelectorAll(".rest")
    let choice = restaraunts[Math.floor(Math.random() * restaraunts.length)]

    title.textContent = choice.textContent
}