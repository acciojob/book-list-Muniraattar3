// Select required elements
const form = document.querySelector('#submit');
const bookList = document.querySelector('#book-list');

// Add an event listener for the submit button
form.addEventListener('click', addBook);

// Function to add a book to the table
function addBook(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get input values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    // Check if all fields are filled
    if (title === '' || author === '' || isbn === '') {
        alert('Please fill all fields');
        return;
    }

    // Create a new row
    const row = document.createElement('tr');

    // Add columns (cells) to the row
    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">Clear</button></td>
    `;

    // Append the row to the table body
    bookList.appendChild(row);

    // Clear input fields after submission
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
}

// Add an event listener for delete (clear) buttons
bookList.addEventListener('click', removeBook);

// Function to remove a book row
function removeBook(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this book?')) {
            const row = e.target.parentElement.parentElement; // Get the parent row
            bookList.removeChild(row); // Remove the row from the table body
        }
    }
}
