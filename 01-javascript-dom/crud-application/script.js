let row = null;
function submitData(event) {
    event.preventDefault();
    const data = readData();
    if (row === null) {
        addData(data);
    } else {
        updateData(data);
    }
    document.querySelector("form").reset();
    row = null;
}
function readData() {
    let obj = {};
    obj["name"] = document.getElementById("name").value;
    obj["email"] = document.getElementById("email").value;
    obj["phone"] = document.getElementById("phone").value;
    obj["salary"] = document.getElementById("salary").value;
    obj["city"] = document.getElementById("city").value;
    return obj;
}

function addData(obj) {
    const tbody = document.querySelector("tbody");
    const row = tbody.insertRow(-1);
    const cell1 = row.insertCell(0);
    cell1.innerHTML = obj.name;

    const cell2 = row.insertCell(1);
    cell2.innerHTML = obj.email;

    const cell3 = row.insertCell(2);
    cell3.innerHTML = obj.phone;

    const cell4 = row.insertCell(3);
    cell4.innerHTML = obj.salary;

    const cell5 = row.insertCell(4);
    cell5.innerHTML = obj.city;

    const cell6 = row.insertCell(5);
    cell6.innerHTML = `
                <button type="button" onclick=EditData(this)>Edit</button>
                <button type="button" onclick=deleteData(this)>Delete</button>
            `;
}

function deleteData(button) {
    button.parentElement.parentElement.remove();
}

function EditData(button) {
    row = button.closest("tr");
    document.getElementById("name").value = row.cells[0].textContent;
    document.getElementById("email").value = row.cells[1].textContent;
    document.getElementById("phone").value = row.cells[2].textContent;
    document.getElementById("salary").value = row.cells[3].textContent;
    document.getElementById("city").value = row.cells[4].textContent;
}

function updateData(data) {
    row.cells[0].textContent = data.name;
    row.cells[1].textContent = data.email;
    row.cells[2].textContent = data.phone;
    row.cells[3].textContent = data.salary;
    row.cells[4].textContent = data.city;
}