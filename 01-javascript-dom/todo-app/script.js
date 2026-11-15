function addTodo() {
    let parent = document.getElementById("second-child");
    const value = document.getElementById("input").value;

    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let button = document.createElement("button");

    button.innerText = "delete";
    div2.innerText = value;
    button.classList.add("newButton");

    button.addEventListener("click", function () {
        this.parentNode.remove();
    })

    div1.classList.add("children");
    div1.appendChild(div2);
    div1.appendChild(button);
    parent.appendChild(div1);

    document.getElementById("input").value = "";
}