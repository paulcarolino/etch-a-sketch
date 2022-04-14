var container = document.querySelector(".container");
var range = document.querySelector("input[type='range']");
var gridRange = document.querySelector(".grid-range");
var reset = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".modes-button");
var mode;
function createSqaure(parentElement, numberOfGrid = 2, mode = "normal") {
    var sizeOfSquare = (parentElement.clientWidth / numberOfGrid) - 2;
    for (let i = 0; i < (numberOfGrid * numberOfGrid); i++) {
        var square = document.createElement("div");
        square.style.width = `${sizeOfSquare}px`;
        square.style.height = `${sizeOfSquare}px`;
        square.classList.add('box');
        parentElement.append(square);
    }

    var squares = document.querySelectorAll(".container div");

    squares.forEach(square => {
        square.addEventListener("mouseenter", e => {
            if (mode === "normal") {
                square.style.backgroundColor = "#333"
            }
            else {
                const randomR = Math.floor(Math.random() * 256)
                const randomG = Math.floor(Math.random() * 256)
                const randomB = Math.floor(Math.random() * 256)
                square.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
            }
        })
    })
}

function deleteSqaure() {
    document.querySelectorAll('.box').forEach(e => e.remove());
}


createSqaure(container);

reset.addEventListener("click", (e) => {
    var squares = document.querySelectorAll(".container div").forEach(e => e.style.backgroundColor = "#fefefe");
})

range.addEventListener("change", (e) => {
    deleteSqaure();
    createSqaure(container, range.value, mode);
});

range.addEventListener("input", (e) => {
    gridRange.innerHTML = `${range.value} x ${range.value}`;
});

//Select the 2 button
//Check if the button already has the class of active
//else put active once click to the other and remove to the other one
//
modeButton.forEach(button => {

    button.addEventListener("click", e => {
        mode = button.innerText.toLowerCase();
        deleteSqaure();
        createSqaure(container, range.value, mode);
    });
})


