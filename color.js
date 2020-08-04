var num = 6
var colors;
var pickedColor;
var squ = document.querySelectorAll(".col")
var pickedColor;
var disMsg = document.querySelector("#msg")
var h1 = document.querySelector("h1")
var rgb = document.querySelector("#displayColor")

var btn = document.querySelector("#bttn")
var clickedButn = document.querySelectorAll(".mode")
initial()

function initial() {
    modeButn()
    sequersSet()
    rest()
}

btn.addEventListener("click", function() {
    rest()
})

function modeButn() {
    for (let index = 0; index < clickedButn.length; index++) {
        clickedButn[index].addEventListener("click", function() {
            clickedButn[0].classList.remove("sele")
            clickedButn[1].classList.remove("sele")
            this.classList.add("sele")
            this.textContent == "Easy" ? num = 3 : num = 6
            rest()
        });

    }
}

function sequersSet() {
    for (let index = 0; index < squ.length; index++) {

        squ[index].addEventListener("click", function() {
            var selectedsqu = this.style.backgroundColor
            if (selectedsqu == pickedColor) {
                changColor(pickedColor)
                h1.style.backgroundColor = pickedColor
                disMsg.textContent = "correct"
                btn.textContent = "Play Again?"


            } else {
                this.style.backgroundColor = "black"
                disMsg.textContent = "Try Again"
            }
        })

    }
}






function rest() {
    colors = genarteColors(num)
    pickedColor = randomColor()
    rgb.textContent = pickedColor
    btn.textContent = "New Colors"
    for (let index = 0; index < squ.length; index++) {
        if (colors[index]) {
            squ[index].style.display = "block"
            squ[index].style.backgroundColor = colors[index];
        } else {
            squ[index].style.display = "none"
        }


    }
    h1.style.background = "steelblue"
    disMsg.textContent = ""
}


function changColor(color) {
    for (let index = 0; index < squ.length; index++) {
        squ[index].style.backgroundColor = color

    }
}

function randomColor() {
    var randomNumber = Math.floor(Math.random() * colors.length + 1)
    return colors[randomNumber]
}

function genarteColors(num) {
    var arr = []
    for (let index = 0; index < num; index++) {
        arr.push(rgbColors());

    }
    return arr
}

function rgbColors() {
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")"
}