AOS.init({
    duration: 800, // values from 0 to 3000, with step 50ms
});

let scrollPos = window.scrollY
const header = document.querySelector(".navbar")
const header_height = header.offsetHeight

const add_class_on_scroll = () => header.classList.add("scrolled", "shadow-sm")
const remove_class_on_scroll = () => header.classList.remove("scrolled", "shadow-sm")

window.addEventListener('scroll', function () {
    scrollPos = window.scrollY;
    if (scrollPos >= header_height) {
    add_class_on_scroll()
} else {
    remove_class_on_scroll()
}
    console.log(scrollPos)
})

fetch('data.json')
.then((response) => response.json())
.then((data) => appendData(data));

function appendData(data) {
    let container1 = document.getElementById('+7base');
    let container2 = document.getElementById('+0base');
    let container3 = document.getElementById('surfBoard');
    let container4 = document.getElementById('eBox');
    container1.innerHTML = `${data["index"][0]["+7basePad"]}`;
    container2.innerHTML = `${data["index"][0]["+0basePad"]}`;
    container3.innerHTML = `${data["index"][0]["Ridger Surf board"]}`;
    container4.innerHTML = `${data["index"][0]["Portable equipment box"]}`;
}