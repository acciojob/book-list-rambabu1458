document.getElementById("bookForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get input values
    const title = document.querySelector("#title").value.trim();
    const author = document.querySelector("#author").value.trim();
    const isbn = document.querySelector("#isbn").value.trim();

    // Validation
    if (!title || !author || !isbn) {
        alert("Please fill in all fields.");
        return;
    }

    // Select the table body
    const tableBody = document.querySelector("#book-list tbody");

    // Create a new row
    const newRow = document.createElement("tr");

    // Create and populate cells
    const cell1 = document.createElement("td");
    cell1.textContent = title;

    const cell2 = document.createElement("td");
    cell2.textContent = author;

    const cell3 = document.createElement("td");
    cell3.textContent = isbn;

    const cell4 = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete";
    deleteBtn.addEventListener("click", function () {
        newRow.remove();
    });
    cell4.appendChild(deleteBtn);

    // Append cells to row
    newRow.appendChild(cell1);
    newRow.appendChild(cell2);
    newRow.appendChild(cell3);
    newRow.appendChild(cell4);

    // Insert new row at the top
    tableBody.insertBefore(newRow, tableBody.firstChild);

    // Reset form fields
    document.getElementById("bookForm").reset();
});
