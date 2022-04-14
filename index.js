var container = document.querySelector(".container");
var range = document.querySelector("input[type='range']");
var gridRange = document.querySelector(".grid-range");
var reset = document.querySelector("#reset");
function createSqaure(parentElement, numberOfGrid = 2) {
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
            square.classList.add("active");
        })
    })
}

function deleteSqaure() {
    document.querySelectorAll('.box').forEach(e => e.remove());
}


createSqaure(container);

reset.addEventListener("click", (e) => {
    var squares = document.querySelectorAll(".container div").forEach(e => e.classList.remove('active'));
})

range.addEventListener("change", (e) => {
    deleteSqaure();
    createSqaure(container, range.value);
});

range.addEventListener("input", (e) => {
    gridRange.innerHTML = `${range.value} x ${range.value}`;
});




