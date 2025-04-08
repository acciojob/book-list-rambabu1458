document.getElementById("bookForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing

    let tableBody = document.querySelector("#book-list tbody"); // Target tbody specifically

    // Get input values
    let title = document.querySelector("#title").value.trim();
    let author = document.querySelector("#author").value.trim();
    let isbn = document.querySelector("#isbn").value.trim();

    // Validate inputs
    if (!title || !author || !isbn) {
        alert("Please fill in all fields.");
        return;
    }

    // Insert a new row at the top of tbody
    let newRow = tableBody.insertRow(0);

    // Insert cells and assign values
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);

    cell1.textContent = title;
    cell2.textContent = author;
    cell3.textContent = isbn;

    // Add a delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function () {
        tableBody.deleteRow(newRow.rowIndex - 1); // Adjust index since it's in tbody
    };

    cell4.appendChild(deleteBtn);

    // Clear input fields
    document.getElementById("bookForm").reset();
});
