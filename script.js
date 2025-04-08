document.getElementById("bookForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.querySelector("#title").value.trim();
    const author = document.querySelector("#author").value.trim();
    const isbn = document.querySelector("#isbn").value.trim();

    if (!title || !author || !isbn) {
        alert("Please fill in all fields.");
        return;
    }

    const tableBody = document.querySelector("#book-list tbody");

    // Create a new row
    const newRow = document.createElement("tr");

    // Create table cells
    const titleCell = document.createElement("td");
    const authorCell = document.createElement("td");
    const isbnCell = document.createElement("td");
    const actionCell = document.createElement("td");

    titleCell.textContent = title;
    authorCell.textContent = author;
    isbnCell.textContent = isbn;

    // Create delete button with expected class for Cypress
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete"; // Cypress expects this class

    deleteBtn.addEventListener("click", () => {
        newRow.remove();
    });

    actionCell.appendChild(deleteBtn);

    // Append cells to the row
    newRow.appendChild(titleCell);
    newRow.appendChild(authorCell);
    newRow.appendChild(isbnCell);
    newRow.appendChild(actionCell);

    // Add the row to the table body (insert at top or bottom)
    tableBody.appendChild(newRow);

    // Clear the form
    document.getElementById("bookForm").reset();
});
