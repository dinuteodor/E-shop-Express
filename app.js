console.log ("Hello this is js")

const wrapper = document.querySelector(".sliderWrapper")

console.log (wrapper)

wrapper.style.backgroundColor = "green"

const menuItems = document.querySelectorAll(".menuItem")

menuItems.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        wrapper.style.transform='translateX(${-100 * index}vw)'
    });
})