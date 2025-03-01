function insert_Row() {
    let table = document.querySelector("#sampleTable");

    // Get input values
    let title = document.querySelector(".title").value;
    let author = document.querySelector(".author").value;
    let isbn = document.querySelector(".isbn").value;

    // Check if any field is empty
    if (title.trim() === "" || author.trim() === "" || isbn.trim() === "") {
        alert("Please fill in all fields before adding a book.");
        return;
    }

    // Insert a new row at the top
    let newRow = table.insertRow(1);

    // Insert 3 new cells (Title, Author, ISBN)
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);

    // Assign input values to table cells
    cell1.textContent = title;
    cell2.textContent = author;
    cell3.textContent = isbn;

    // Add a delete button in the last cell
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.style.backgroundColor = "red";
    deleteBtn.style.color = "white";
    deleteBtn.style.border = "none";
    deleteBtn.style.padding = "5px 10px";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.onclick = function () {
        table.deleteRow(newRow.rowIndex);
    };

    cell4.appendChild(deleteBtn);

    // Clear input fields after adding the book
    document.querySelector(".title").value = "";
    document.querySelector(".author").value = "";
    document.querySelector(".isbn").value = "";
}
