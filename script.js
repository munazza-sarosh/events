
function myFunction() {
    alert("Hello! I am an alert box!");
}

function demo(hello) {
    console.log(hello);
    console.log(hello.keyCode);
    console.log(hello.code);
    let minekey = hello.key;
    if (minekey == "Enter") {
        alert("You have pressed Enter key");
    }

}

function escape(Hello) {
    console.log(Hello);
    console.log(Hello.keyCode);
    console.log(Hello.code);
    let key = Hello.key;
    if (key == "Escape") {
        alert("you pressed an escape key");
    }
}
function space(s) {
    console.log(s);
    console.log(s.keyCode);
    console.log(s.code);
    let key = s.key;
    if (key == "Space") {
        alert("you pressed an space key");
    }
}
function letterkey(hii) {
    console.log(hii.key);
    let mykey = hii.key;
    if (mykey === "a" || mykey === "A") {
        let text = "You pressed the 'A' key!";
        document.getElementById("demo_").innerHTML = text;
    }
    else {
        document.getElementById("demo_").innerHTML = "you pressed the wrong key";

    }
}

// on click
document.getElementById("element").onclick = function () { element() };
function element() {
    document.getElementById("element").innerHTML = "YOU CLICKED ME!";
}

// context menu
document.getElementById("contextmenu").oncontextmenu = function () { context() };
function context() {
    document.getElementById("contextmenu").innerHTML = "YOU CLICKED ME!";
}

// double click
document.getElementById("doubleclick").ondblclick = function () { dblclick() };
function dblclick() {
    document.getElementById("doubleclick").innerHTML = "YOU CLICKED ME!";
}

// mouse down
document.getElementById("mousedown").onmousedown = function () { mousedown() };
function mousedown() {
    document.getElementById("mousedown").innerHTML = "YOU CLICKED ME!";
}

// mouse enter
document.getElementById("mouse-enter").onmouseenter = function () { mouse_enter() };
function mouse_enter() {
    document.getElementById("mouse-enter").innerHTML = "YOU CLICKED ME!";
}

// mouse leave
document.getElementById("mouse-leave").onmouseleave = function () { mouseleave() };
function mouseleave() {
    document.getElementById("mouse-leave").innerHTML = "YOU CLICKED ME!";
}

// mouse move
document.getElementById("mouse-move").onmousemove = function () { mousemove() };
function mousemove() {
    document.getElementById("mouse-move").innerHTML = "YOU CLICKED ME!";
}