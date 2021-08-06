let colorBtn = document.querySelector("#color")
let placeBtn = document.querySelector("#place")
let ritualBtn = document.querySelector("#ritual")

colorBtn.addEventListener("click", () => {
    alert("My favorite color is like salmon but a little bit more orange than pink ya know, Here i will just show you.")
    document.querySelector("body").classList.add("favColor")
    setTimeout(() => {document.querySelector("body").classList.remove("favColor")}, 4000)
})

placeBtn.addEventListener("click", () => {
    alert("My favorite place is the pacific northwest, specifically on the beach. And no I do not get in the water.")
})

ritualBtn.addEventListener("click", () => {
    alert("My ritual is when I need a reset, I put on my headphones, turn the volume up to uncomfortable and I jam.")
})