var synthBody = document.getElementById("synth-body")
var audio1 = new Audio("../SynthJS/Audio/KICK.wav");

var buttonLight1 = document.getElementById("button1-light")
var buttonLight2 = document.getElementById("button2-light")
var buttonLight3 = document.getElementById("button3-light")
var buttonLight4 = document.getElementById("button4-light")

var buttonLight1a = document.getElementById("button1a-light")
var buttonLight2a = document.getElementById("button2a-light")
var buttonLight3a = document.getElementById("button3a-light")
var buttonLight4a = document.getElementById("button4a-light")

var buttonLight1b = document.getElementById("button1b-light")
var buttonLight2b = document.getElementById("button2b-light")
var buttonLight3b = document.getElementById("button3b-light")
var buttonLight4b = document.getElementById("button4b-light")

var buttonLight1c = document.getElementById("button1c-light")
var buttonLight2c = document.getElementById("button2c-light")
var buttonLight3c = document.getElementById("button3c-light")
var buttonLight4c = document.getElementById("button4c-light")

var selectSpeed = document.getElementById("select")
var a = 300
var b = 2*a
var c = 3*a
var d = 4*a
var e = 2
var f = 3

var btn1clicked = false
function btn1() {
if (btn1clicked == false) {
btn1clicked = true
document.getElementById("button1-onoff").style.backgroundColor = "red"
return btn1clicked}
if (btn1clicked == true) {
btn1clicked = false
document.getElementById("button1-onoff").style.backgroundColor = "green"
return btn1clicked
}
}
var btn1aclicked = false
function btn1a() {
if (btn1aclicked == false) {
btn1aclicked = true
document.getElementById("button1a-onoff").style.backgroundColor = "red"
return btn1aclicked}
if (btn1aclicked == true) {
btn1aclicked = false
document.getElementById("button1a-onoff").style.backgroundColor = "green"
return btn1aclicked
}
}
var btn1bclicked = false
function btn1b() {
if (btn1bclicked == false) {
btn1bclicked = true
document.getElementById("button1b-onoff").style.backgroundColor = "red"
return btn1bclicked}
if (btn1bclicked == true) {
btn1bclicked = false
document.getElementById("button1b-onoff").style.backgroundColor = "green"
return btn1bclicked
}
}
var btn1cclicked = false
function btn1c() {
if (btn1cclicked == false) {
btn1cclicked = true
document.getElementById("button1c-onoff").style.backgroundColor = "red"
return btn1cclicked}
if (btn1cclicked == true) {
btn1cclicked = false
document.getElementById("button1c-onoff").style.backgroundColor = "green"
return btn1cclicked
}
}



var btn2clicked = false
function btn2() {
if (btn2clicked == false) {
btn2clicked = true
document.getElementById("button2-onoff").style.backgroundColor = "red"
return btn2clicked}
if (btn2clicked == true) {
btn2clicked = false
document.getElementById("button2-onoff").style.backgroundColor = "green"
return btn2clicked
}
}
var btn2aclicked = false
function btn2a() {
if (btn2aclicked == false) {
btn2aclicked = true
document.getElementById("button2a-onoff").style.backgroundColor = "red"
return btn2aclicked}
if (btn2aclicked == true) {
btn2aclicked = false
document.getElementById("button2a-onoff").style.backgroundColor = "green"
return btn2aclicked
}
}
var btn2bclicked = false
function btn2b() {
if (btn2bclicked == false) {
btn2bclicked = true
document.getElementById("button2b-onoff").style.backgroundColor = "red"
return btn2bclicked}
if (btn2bclicked == true) {
btn2bclicked = false
document.getElementById("button2b-onoff").style.backgroundColor = "green"
return btn2bclicked
}
}
var btn2cclicked = false
function btn2c() {
if (btn2cclicked == false) {
btn2cclicked = true
document.getElementById("button2c-onoff").style.backgroundColor = "red"
return btn2cclicked}
if (btn2cclicked == true) {
btn2cclicked = false
document.getElementById("button2c-onoff").style.backgroundColor = "green"
return btn2cclicked
}
}

var btn3clicked = false
function btn3() {
if (btn3clicked == false) {
btn3clicked = true
document.getElementById("button3-onoff").style.backgroundColor = "red"
return btn3clicked}
if (btn3clicked == true) {
btn3clicked = false
document.getElementById("button3-onoff").style.backgroundColor = "green"
return btn3clicked
}
}
var btn3aclicked = false
function btn3a() {
if (btn3aclicked == false) {
btn3aclicked = true
document.getElementById("button3a-onoff").style.backgroundColor = "red"
return btn3aclicked}
if (btn3aclicked == true) {
btn3aclicked = false
document.getElementById("button3a-onoff").style.backgroundColor = "green"
return btn3aclicked
}
}
var btn3bclicked = false
function btn3b() {
if (btn3bclicked == false) {
btn3bclicked = true
document.getElementById("button3b-onoff").style.backgroundColor = "red"
return btn3bclicked}
if (btn3bclicked == true) {
btn3bclicked = false
document.getElementById("button3b-onoff").style.backgroundColor = "green"
return btn3bclicked
}
}
var btn3cclicked = false
function btn3c() {
if (btn3cclicked == false) {
btn3cclicked = true
document.getElementById("button3c-onoff").style.backgroundColor = "red"
return btn3cclicked}
if (btn3cclicked == true) {
btn3cclicked = false
document.getElementById("button3c-onoff").style.backgroundColor = "green"
return btn3cclicked
}
}



var btn4clicked = false
function btn4() {
if (btn4clicked == false) {
btn4clicked = true
document.getElementById("button4-onoff").style.backgroundColor = "red"
return btn4clicked}
if (btn4clicked == true) {
btn4clicked = false
document.getElementById("button4-onoff").style.backgroundColor = "green"
return btn4clicked
}
}
var btn4aclicked = false
function btn4a() {
if (btn4aclicked == false) {
btn4aclicked = true
document.getElementById("button4a-onoff").style.backgroundColor = "red"
return btn4aclicked}
if (btn4aclicked == true) {
btn4aclicked = false
document.getElementById("button4a-onoff").style.backgroundColor = "green"
return btn4aclicked
}
}
var btn4bclicked = false
function btn4b() {
if (btn4bclicked == false) {
btn4bclicked = true
document.getElementById("button4b-onoff").style.backgroundColor = "red"
return btn4bclicked}
if (btn4bclicked == true) {
btn4bclicked = false
document.getElementById("button4b-onoff").style.backgroundColor = "green"
return btn4bclicked
}
}
var btn4cclicked = false
function btn4c() {
if (btn4cclicked == false) {
btn4cclicked = true
document.getElementById("button4c-onoff").style.backgroundColor = "red"
return btn4cclicked}
if (btn4cclicked == true) {
btn4cclicked = false
document.getElementById("button4c-onoff").style.backgroundColor = "green"
return btn4cclicked
}
}

function play1() {
var audio1 = new Audio("../SynthJS/Audio/RIM.wav")
var audio2 = new Audio("../SynthJS/Audio/KICK.wav")
console.log("tick")
audio1.play()
audio2.play()
}

var light1On = 0
function light1() {
if (light1On == 0) {
document.getElementById("button1-light").style.backgroundColor = "green" 
console.log("1")
light1On = 1
return light1On
}
if (light1On == 1) {
document.getElementById("button1-light").style.backgroundColor = "black" 
console.log("0")
light1On = 0
return light1On
}
}




//SUB-BUTTON LIGHTING/SOUND

function timer() {
if (selectSpeed.value == "SLOW") {



setTimeout(function function1(){
setTimeout(function function1() {buttonLight1.style.backgroundColor = "green" 
var audio1 = new Audio("../SynthJS/Audio/RIM.wav")
if (btn1clicked == false) {audio1.play()}
if (btn1clicked == true) {}
}, 0)
setTimeout(function function1() {buttonLight1.style.backgroundColor = "black"}, a)
setTimeout(function function1() {buttonLight2.style.backgroundColor = "green" 
if (btn2clicked == false) {
    var audio1 = new Audio("../SynthJS/Audio/RIM.wav")
    audio1.play()}
if (btn2clicked == true) {}
}, a)
setTimeout(function function1() {buttonLight2.style.backgroundColor = "black" }, b)
setTimeout(function function1() {buttonLight3.style.backgroundColor = "green"
if (btn3clicked == false) {
    var audio1 = new Audio("../SynthJS/Audio/RIM.wav")
    audio1.play()}
if (btn3clicked == true) {}
}, b)
setTimeout(function function1() {buttonLight3.style.backgroundColor = "black" }, c)
setTimeout(function function1() {buttonLight4.style.backgroundColor = "green"
if (btn4clicked == false) {
    var audio1 = new Audio("../SynthJS/Audio/RIM.wav")
    audio1.play()}
if (btn4clicked == true) {}
}, c)
setTimeout(function function1() {buttonLight4.style.backgroundColor = "black" }, d)}, 0)
setTimeout(function function1(){
setTimeout(function function1() {buttonLight1.style.backgroundColor = "green"
if (btn1clicked == false) {
    var audio1 = new Audio("../SynthJS/Audio/RIM.wav")
    audio1.play()}
if (btn1clicked == true) {}
}, 0)
setTimeout(function function1() {buttonLight1.style.backgroundColor = "black" }, a)
setTimeout(function function1() {buttonLight2.style.backgroundColor = "green"
if (btn2clicked == false) {
    var audio1 = new Audio("../SynthJS/Audio/RIM.wav")
    audio1.play()}
if (btn2clicked == true) {}
}, a)
setTimeout(function function1() {buttonLight2.style.backgroundColor = "black" }, b)
setTimeout(function function1() {buttonLight3.style.backgroundColor = "green"
if (btn3clicked == false) {
    var audio1 = new Audio("../SynthJS/Audio/RIM.wav")
    audio1.play()}
if (btn3clicked == true) {}
}, b)
setTimeout(function function1() {buttonLight3.style.backgroundColor = "black" }, c)
setTimeout(function function1() {buttonLight4.style.backgroundColor = "green"
if (btn4clicked == false) {
    var audio1 = new Audio("../SynthJS/Audio/RIM.wav")
    audio1.play()}
if (btn4clicked == true) {}
}, c)
setTimeout(function function1() {buttonLight4.style.backgroundColor = "black" }, d)},d)


setTimeout(function function2(){
setTimeout(function function2() {buttonLight1a.style.backgroundColor = "green" 
var audio1a = new Audio("../SynthJS/Audio/SNARE.wav")
if (btn1aclicked == false) {audio1a.play()}
if (btn1aclicked == true) {}
}, 0)
setTimeout(function function2() {buttonLight1a.style.backgroundColor = "black"}, a)
setTimeout(function function2() {buttonLight2a.style.backgroundColor = "green" 
if (btn2aclicked == false) {
var audio1a = new Audio("../SynthJS/Audio/SNARE.wav")
audio1a.play()}
if (btn2aclicked == true) {}
}, a)
setTimeout(function function2() {buttonLight2a.style.backgroundColor = "black" }, b)
setTimeout(function function2() {buttonLight3a.style.backgroundColor = "green"
if (btn3aclicked == false) {
var audio1a = new Audio("../SynthJS/Audio/SNARE.wav")
audio1a.play()}
if (btn3aclicked == true) {}
}, b)
setTimeout(function function2() {buttonLight3a.style.backgroundColor = "black" }, c)
setTimeout(function function2() {buttonLight4a.style.backgroundColor = "green"
if (btn4aclicked == false) {
var audio1a = new Audio("../SynthJS/Audio/SNARE.wav")
audio1a.play()}
if (btn4aclicked == true) {}
}, c)
setTimeout(function function2() {buttonLight4a.style.backgroundColor = "black" }, d)}, 0)
setTimeout(function function2(){
setTimeout(function function2() {buttonLight1a.style.backgroundColor = "green"
if (btn1aclicked == false) {
var audio1a = new Audio("../SynthJS/Audio/SNARE.wav")
audio1a.play()}
if (btn1aclicked == true) {}
}, 0)
setTimeout(function function2() {buttonLight1a.style.backgroundColor = "black" }, a)
setTimeout(function function2() {buttonLight2a.style.backgroundColor = "green"
if (btn2aclicked == false) {
var audio1a = new Audio("../SynthJS/Audio/SNARE.wav")
audio1a.play()}
if (btn2aclicked == true) {}
}, a)
setTimeout(function function2() {buttonLight2a.style.backgroundColor = "black" }, b)
setTimeout(function function2() {buttonLight3a.style.backgroundColor = "green"
if (btn3aclicked == false) {
var audio1a = new Audio("../SynthJS/Audio/SNARE.wav")
audio1a.play()}
if (btn3aclicked == true) {}
}, b)
setTimeout(function function2() {buttonLight3a.style.backgroundColor = "black" }, c)
setTimeout(function function2() {buttonLight4a.style.backgroundColor = "green"
if (btn4aclicked == false) {
var audio1a = new Audio("../SynthJS/Audio/SNARE.wav")
audio1a.play()}
if (btn4aclicked == true) {}
}, c)
setTimeout(function function2() {buttonLight4a.style.backgroundColor = "black" }, d)},d)


setTimeout(function function2(){
setTimeout(function function2() {buttonLight1b.style.backgroundColor = "green" 
var audio1b = new Audio("../SynthJS/Audio/HH.wav")
if (btn1bclicked == false) {audio1b.play()}
if (btn1bclicked == true) {}
}, 0)
setTimeout(function function2() {buttonLight1b.style.backgroundColor = "black"}, a)
setTimeout(function function2() {buttonLight2b.style.backgroundColor = "green" 
if (btn2bclicked == false) {
var audio1b = new Audio("../SynthJS/Audio/HH.wav")
audio1b.play()}
if (btn2bclicked == true) {}
}, a)
setTimeout(function function2() {buttonLight2b.style.backgroundColor = "black" }, b)
setTimeout(function function2() {buttonLight3b.style.backgroundColor = "green"
if (btn3bclicked == false) {
var audio1b = new Audio("../SynthJS/Audio/HH.wav")
audio1b.play()}
if (btn3bclicked == true) {}
}, b)
setTimeout(function function2() {buttonLight3b.style.backgroundColor = "black" }, c)
setTimeout(function function2() {buttonLight4b.style.backgroundColor = "green"
if (btn4bclicked == false) {
var audio1b = new Audio("../SynthJS/Audio/HH.wav")
audio1b.play()}
if (btn4bclicked == true) {}
}, c)
setTimeout(function function2() {buttonLight4b.style.backgroundColor = "black" }, d)}, 0)
setTimeout(function function2(){
setTimeout(function function2() {buttonLight1b.style.backgroundColor = "green"
if (btn1bclicked == false) {
var audio1b = new Audio("../SynthJS/Audio/HH.wav")
audio1b.play()}
if (btn1bclicked == true) {}
}, 0)
setTimeout(function function2() {buttonLight1b.style.backgroundColor = "black" }, a)
setTimeout(function function2() {buttonLight2b.style.backgroundColor = "green"
if (btn2bclicked == false) {
var audio1b = new Audio("../SynthJS/Audio/HH.wav")
audio1b.play()}
if (btn2bclicked == true) {}
}, a)
setTimeout(function function2() {buttonLight2b.style.backgroundColor = "black" }, b)
setTimeout(function function2() {buttonLight3b.style.backgroundColor = "green"
if (btn3bclicked == false) {
var audio1b = new Audio("../SynthJS/Audio/HH.wav")
audio1b.play()}
if (btn3bclicked == true) {}
}, b)
setTimeout(function function2() {buttonLight3b.style.backgroundColor = "black" }, c)
setTimeout(function function2() {buttonLight4b.style.backgroundColor = "green"
if (btn4bclicked == false) {
var audio1b = new Audio("../SynthJS/Audio/HH.wav")
audio1b.play()}
if (btn4bclicked == true) {}
}, c)
setTimeout(function function2() {buttonLight4b.style.backgroundColor = "black" }, d)},d)



setTimeout(function function2(){
setTimeout(function function2() {buttonLight1c.style.backgroundColor = "green" 
var audio1c = new Audio("../SynthJS/Audio/KICK.wav")
if (btn1cclicked == false) {audio1c.play()}
if (btn1cclicked == true) {}
}, 0)
setTimeout(function function2() {buttonLight1c.style.backgroundColor = "black"}, a)
setTimeout(function function2() {buttonLight2c.style.backgroundColor = "green" 
if (btn2cclicked == false) {
var audio1c = new Audio("../SynthJS/Audio/KICK.wav")
audio1c.play()}
if (btn2cclicked == true) {}
}, a)
setTimeout(function function2() {buttonLight2c.style.backgroundColor = "black" }, b)
setTimeout(function function2() {buttonLight3c.style.backgroundColor = "green"
if (btn3cclicked == false) {
var audio1c = new Audio("../SynthJS/Audio/KICK.wav")
audio1c.play()}
if (btn3cclicked == true) {}
}, b)
setTimeout(function function2() {buttonLight3c.style.backgroundColor = "black" }, c)
setTimeout(function function2() {buttonLight4c.style.backgroundColor = "green"
if (btn4cclicked == false) {
var audio1c = new Audio("../SynthJS/Audio/KICK.wav")
audio1c.play()}
if (btn4cclicked == true) {}
}, c)
setTimeout(function function2() {buttonLight4c.style.backgroundColor = "black" }, d)}, 0)
setTimeout(function function2(){
setTimeout(function function2() {buttonLight1c.style.backgroundColor = "green"
if (btn1cclicked == false) {
var audio1c = new Audio("../SynthJS/Audio/KICK.wav")
audio1c.play()}
if (btn1cclicked == true) {}
}, 0)
setTimeout(function function2() {buttonLight1c.style.backgroundColor = "black" }, a)
setTimeout(function function2() {buttonLight2c.style.backgroundColor = "green"
if (btn2cclicked == false) {
var audio1c = new Audio("../SynthJS/Audio/KICK.wav")
audio1c.play()}
if (btn2cclicked == true) {}
}, a)
setTimeout(function function2() {buttonLight2c.style.backgroundColor = "black" }, b)
setTimeout(function function2() {buttonLight3c.style.backgroundColor = "green"
if (btn3cclicked == false) {
var audio1c = new Audio("../SynthJS/Audio/KICK.wav")
audio1c.play()}
if (btn3cclicked == true) {}
}, b)
setTimeout(function function2() {buttonLight3c.style.backgroundColor = "black" }, c)
setTimeout(function function2() {buttonLight4c.style.backgroundColor = "green"
if (btn4cclicked == false) {
var audio1c = new Audio("../SynthJS/Audio/KICK.wav")
audio1c.play()}
if (btn4cclicked == true) {}
}, c)
setTimeout(function function2() {buttonLight4c.style.backgroundColor = "black" }, d)},d)

} if (selectSpeed.value == "FAST") {

setTimeout(function function1(){
setTimeout(function function1() {buttonLight1.style.backgroundColor = "green" 
var audio1 = new Audio("../SynthJS/Audio/RIM.wav")
if (btn1clicked == false) {audio1.play()}
if (btn1clicked == true) {}
}, 0)
setTimeout(function function1() {buttonLight1.style.backgroundColor = "black"}, a/e)
setTimeout(function function1() {buttonLight2.style.backgroundColor = "green" 
if (btn2clicked == false) {
    var audio1 = new Audio("../SynthJS/Audio/RIM.wav")
    audio1.play()}
if (btn2clicked == true) {}
}, a/e)
setTimeout(function function1() {buttonLight2.style.backgroundColor = "black" }, b/e)
setTimeout(function function1() {buttonLight3.style.backgroundColor = "green"
if (btn3clicked == false) {
    var audio1 = new Audio("../SynthJS/Audio/RIM.wav")
    audio1.play()}
if (btn3clicked == true) {}
}, b/e)
setTimeout(function function1() {buttonLight3.style.backgroundColor = "black" }, c/e)
setTimeout(function function1() {buttonLight4.style.backgroundColor = "green"
if (btn4clicked == false) {
    var audio1 = new Audio("../SynthJS/Audio/RIM.wav")
    audio1.play()}
if (btn4clicked == true) {}
}, c/e)
setTimeout(function function1() {buttonLight4.style.backgroundColor = "black" }, d/e)}, 0)
setTimeout(function function1(){
setTimeout(function function1() {buttonLight1.style.backgroundColor = "green"
if (btn1clicked == false) {
    var audio1 = new Audio("../SynthJS/Audio/RIM.wav")
    audio1.play()}
if (btn1clicked == true) {}
}, 0)
setTimeout(function function1() {buttonLight1.style.backgroundColor = "black" }, a/e)
setTimeout(function function1() {buttonLight2.style.backgroundColor = "green"
if (btn2clicked == false) {
    var audio1 = new Audio("../SynthJS/Audio/RIM.wav")
    audio1.play()}
if (btn2clicked == true) {}
}, a/e)
setTimeout(function function1() {buttonLight2.style.backgroundColor = "black" }, b/e)
setTimeout(function function1() {buttonLight3.style.backgroundColor = "green"
if (btn3clicked == false) {
    var audio1 = new Audio("../SynthJS/Audio/RIM.wav")
    audio1.play()}
if (btn3clicked == true) {}
}, b/e)
setTimeout(function function1() {buttonLight3.style.backgroundColor = "black" }, c/e)
setTimeout(function function1() {buttonLight4.style.backgroundColor = "green"
if (btn4clicked == false) {
    var audio1 = new Audio("../SynthJS/Audio/RIM.wav")
    audio1.play()}
if (btn4clicked == true) {}
}, c/e)
setTimeout(function function1() {buttonLight4.style.backgroundColor = "black" }, d/e)},d/e)


setTimeout(function function2(){
setTimeout(function function2() {buttonLight1a.style.backgroundColor = "green" 
var audio1a = new Audio("../SynthJS/Audio/SNARE.wav")
if (btn1aclicked == false) {audio1a.play()}
if (btn1aclicked == true) {}
}, 0)
setTimeout(function function2() {buttonLight1a.style.backgroundColor = "black"}, a/e)
setTimeout(function function2() {buttonLight2a.style.backgroundColor = "green" 
if (btn2aclicked == false) {
var audio1a = new Audio("../SynthJS/Audio/SNARE.wav")
audio1a.play()}
if (btn2aclicked == true) {}
}, a/e)
setTimeout(function function2() {buttonLight2a.style.backgroundColor = "black" }, b/e)
setTimeout(function function2() {buttonLight3a.style.backgroundColor = "green"
if (btn3aclicked == false) {
var audio1a = new Audio("../SynthJS/Audio/SNARE.wav")
audio1a.play()}
if (btn3aclicked == true) {}
}, b/e)
setTimeout(function function2() {buttonLight3a.style.backgroundColor = "black" }, c/e)
setTimeout(function function2() {buttonLight4a.style.backgroundColor = "green"
if (btn4aclicked == false) {
var audio1a = new Audio("../SynthJS/Audio/SNARE.wav")
audio1a.play()}
if (btn4aclicked == true) {}
}, c/e)
setTimeout(function function2() {buttonLight4a.style.backgroundColor = "black" }, d/e)}, 0)
setTimeout(function function2(){
setTimeout(function function2() {buttonLight1a.style.backgroundColor = "green"
if (btn1aclicked == false) {
var audio1a = new Audio("../SynthJS/Audio/SNARE.wav")
audio1a.play()}
if (btn1aclicked == true) {}
}, 0)
setTimeout(function function2() {buttonLight1a.style.backgroundColor = "black" }, a/e)
setTimeout(function function2() {buttonLight2a.style.backgroundColor = "green"
if (btn2aclicked == false) {
var audio1a = new Audio("../SynthJS/Audio/SNARE.wav")
audio1a.play()}
if (btn2aclicked == true) {}
}, a/e)
setTimeout(function function2() {buttonLight2a.style.backgroundColor = "black" }, b/e)
setTimeout(function function2() {buttonLight3a.style.backgroundColor = "green"
if (btn3aclicked == false) {
var audio1a = new Audio("../SynthJS/Audio/SNARE.wav")
audio1a.play()}
if (btn3aclicked == true) {}
}, b/e)
setTimeout(function function2() {buttonLight3a.style.backgroundColor = "black" }, c/e)
setTimeout(function function2() {buttonLight4a.style.backgroundColor = "green"
if (btn4aclicked == false) {
var audio1a = new Audio("../SynthJS/Audio/SNARE.wav")
audio1a.play()}
if (btn4aclicked == true) {}
}, c/e)
setTimeout(function function2() {buttonLight4a.style.backgroundColor = "black" }, d/e)},d/e)


setTimeout(function function2(){
setTimeout(function function2() {buttonLight1b.style.backgroundColor = "green" 
var audio1b = new Audio("../SynthJS/Audio/HH.wav")
if (btn1bclicked == false) {audio1b.play()}
if (btn1bclicked == true) {}
}, 0)
setTimeout(function function2() {buttonLight1b.style.backgroundColor = "black"}, a/e)
setTimeout(function function2() {buttonLight2b.style.backgroundColor = "green" 
if (btn2bclicked == false) {
var audio1b = new Audio("../SynthJS/Audio/HH.wav")
audio1b.play()}
if (btn2bclicked == true) {}
}, a/e)
setTimeout(function function2() {buttonLight2b.style.backgroundColor = "black" }, b/e)
setTimeout(function function2() {buttonLight3b.style.backgroundColor = "green"
if (btn3bclicked == false) {
var audio1b = new Audio("../SynthJS/Audio/HH.wav")
audio1b.play()}
if (btn3bclicked == true) {}
}, b/e)
setTimeout(function function2() {buttonLight3b.style.backgroundColor = "black" }, c/e)
setTimeout(function function2() {buttonLight4b.style.backgroundColor = "green"
if (btn4bclicked == false) {
var audio1b = new Audio("../SynthJS/Audio/HH.wav")
audio1b.play()}
if (btn4bclicked == true) {}
}, c/e)
setTimeout(function function2() {buttonLight4b.style.backgroundColor = "black" }, d/e)}, 0)
setTimeout(function function2(){
setTimeout(function function2() {buttonLight1b.style.backgroundColor = "green"
if (btn1bclicked == false) {
var audio1b = new Audio("../SynthJS/Audio/HH.wav")
audio1b.play()}
if (btn1bclicked == true) {}
}, 0)
setTimeout(function function2() {buttonLight1b.style.backgroundColor = "black" }, a/e)
setTimeout(function function2() {buttonLight2b.style.backgroundColor = "green"
if (btn2bclicked == false) {
var audio1b = new Audio("../SynthJS/Audio/HH.wav")
audio1b.play()}
if (btn2bclicked == true) {}
}, a/e)
setTimeout(function function2() {buttonLight2b.style.backgroundColor = "black" }, b/e)
setTimeout(function function2() {buttonLight3b.style.backgroundColor = "green"
if (btn3bclicked == false) {
var audio1b = new Audio("../SynthJS/Audio/HH.wav")
audio1b.play()}
if (btn3bclicked == true) {}
}, b/e)
setTimeout(function function2() {buttonLight3b.style.backgroundColor = "black" }, c/e)
setTimeout(function function2() {buttonLight4b.style.backgroundColor = "green"
if (btn4bclicked == false) {
var audio1b = new Audio("../SynthJS/Audio/HH.wav")
audio1b.play()}
if (btn4bclicked == true) {}
}, c/e)
setTimeout(function function2() {buttonLight4b.style.backgroundColor = "black" }, d/e)},d/e)



setTimeout(function function2(){
setTimeout(function function2() {buttonLight1c.style.backgroundColor = "green" 
var audio1c = new Audio("../SynthJS/Audio/KICK.wav")
if (btn1cclicked == false) {audio1c.play()}
if (btn1cclicked == true) {}
}, 0)
setTimeout(function function2() {buttonLight1c.style.backgroundColor = "black"}, a/e)
setTimeout(function function2() {buttonLight2c.style.backgroundColor = "green" 
if (btn2cclicked == false) {
var audio1c = new Audio("../SynthJS/Audio/KICK.wav")
audio1c.play()}
if (btn2cclicked == true) {}
}, a/e)
setTimeout(function function2() {buttonLight2c.style.backgroundColor = "black" }, b/e)
setTimeout(function function2() {buttonLight3c.style.backgroundColor = "green"
if (btn3cclicked == false) {
var audio1c = new Audio("../SynthJS/Audio/KICK.wav")
audio1c.play()}
if (btn3cclicked == true) {}
}, b/e)
setTimeout(function function2() {buttonLight3c.style.backgroundColor = "black" }, c/e)
setTimeout(function function2() {buttonLight4c.style.backgroundColor = "green"
if (btn4cclicked == false) {
var audio1c = new Audio("../SynthJS/Audio/KICK.wav")
audio1c.play()}
if (btn4cclicked == true) {}
}, c/e)
setTimeout(function function2() {buttonLight4c.style.backgroundColor = "black" }, d/e)}, 0)
setTimeout(function function2(){
setTimeout(function function2() {buttonLight1c.style.backgroundColor = "green"
if (btn1cclicked == false) {
var audio1c = new Audio("../SynthJS/Audio/KICK.wav")
audio1c.play()}
if (btn1cclicked == true) {}
}, 0)
setTimeout(function function2() {buttonLight1c.style.backgroundColor = "black" }, a/e)
setTimeout(function function2() {buttonLight2c.style.backgroundColor = "green"
if (btn2cclicked == false) {
var audio1c = new Audio("../SynthJS/Audio/KICK.wav")
audio1c.play()}
if (btn2cclicked == true) {}
}, a/e)
setTimeout(function function2() {buttonLight2c.style.backgroundColor = "black" }, b/e)
setTimeout(function function2() {buttonLight3c.style.backgroundColor = "green"
if (btn3cclicked == false) {
var audio1c = new Audio("../SynthJS/Audio/KICK.wav")
audio1c.play()}
if (btn3cclicked == true) {}
}, b/e)
setTimeout(function function2() {buttonLight3c.style.backgroundColor = "black" }, c/e)
setTimeout(function function2() {buttonLight4c.style.backgroundColor = "green"
if (btn4cclicked == false) {
var audio1c = new Audio("../SynthJS/Audio/KICK.wav")
audio1c.play()}
if (btn4cclicked == true) {}
}, c/e)
setTimeout(function function2() {buttonLight4c.style.backgroundColor = "black" }, d/e)},d/e)
}

}





//START BUTTON
var OnValue = 0
function On() {
if (OnValue == 1) {OnValue = 0
window.location.reload()
document.getElementById("On").style.backgroundColor = "black"
document.getElementById("On").innerHTML = "OFF"
console.log(OnValue)
return OnValue} 
if (OnValue == 0) {
document.getElementById("On").style.backgroundColor = "blue"
document.getElementById("On").innerHTML = "ON"
if (selectSpeed.value == "SLOW") {
setTimeout(timer, 0)
setInterval(timer,8*a)}
if (selectSpeed.value == "FAST") {
setTimeout(timer, 0)
setInterval(timer,4*a)
}
OnValue = 1
console.log(OnValue)
return OnValue}
}






//DRUM PAD FUNCTIONALITY USING THE L, K, A and D keys
document.addEventListener("keydown", (e) => {
if (e.key === "a") {
var audio1 = new Audio("../SynthJS/Audio/KICK.wav");
audio1.play()
}
})
document.addEventListener("keydown", (e) => {
if (e.key === "d") {
var audio1 = new Audio("../SynthJS/Audio/SNARE.wav");
audio1.play()
}
})

document.addEventListener("keydown", (e) => {
if (e.key === "l") {
var audio1 = new Audio("../SynthJS/Audio/HH.wav");
audio1.play()
}
})
document.addEventListener("keydown", (e) => {
if (e.key === "k") {
var audio1 = new Audio("../SynthJS/Audio/RIM.wav");
audio1.play()
}
})
