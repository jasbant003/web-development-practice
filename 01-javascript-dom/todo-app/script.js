function addTodo() {
    const list = document.getElementById("lists");
    const value = document.getElementById("input").value;

    const li = document.createElement("li");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const p = document.createElement("p");

    div1.classList.add("div1");
    div2.classList.add("div2");

    li.classList.add("items");
    p.textContent = value;

    div1.appendChild(p);

    const button = document.createElement("button");
    button.innerHTML = "DELETE";
    button.addEventListener("click", function () {
        this.parentNode.parentNode.remove();
    })
    button.classList.add("newButton")

    div2.appendChild(button);
    li.appendChild(div1);
    li.appendChild(div2);
    list.appendChild(li);

    document.getElementById("input").value = "";
}