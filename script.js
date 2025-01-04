//your JS code here. If required.
const form = document.querySelector('#submit');
const booklist = document.querySelector('#book-list');

form.addEventListner('click',addBook);

function addBook(e){
	e.preventDefault();

	const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;
    return;

const row =document.createElement('tr');
row.innerHTML =` 
	<td>${title}</td>
	<td>${author}</td>
	<td>${isbn}</td>
	<td><button class="delete">Clear</button></td>
	`;
booklist.appendChild(row);

	document.querySelector('#title').value='';
	document.querySelector('#author').value='';
	document.querySelector('#isbn').value='';
}

booklist.addEventListner('click',removeBook);

function removeBook(e) {
	if(e.target.classList.contains('delete')){
		const row= e.target.parentElement.parentElement;
		booklist.removeChild(row);
	}
}

