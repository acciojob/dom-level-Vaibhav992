//your JS code here. If required.
const element = document.getElementById("level");

let level = 0;
let current = element;

while (current) {
    current = current.parentElement;
    if (current) {
        level++;
    }
}

alert("The level of the element is: " + level);