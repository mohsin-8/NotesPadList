
let title = document.getElementById('title');
let author = document.getElementById('author');
let description = document.getElementById('desc');

const foo = () => {
    let list = document.getElementById('book-list');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${title.value}</td>
        <td>${author.value}</td>
        <td style="word-break: break-all">${description.value}</td>
       <td><a class="btn btn-danger btn-sm delete" onclick="delRows(this)">X</a></td>
       <td><i class="edit fas fa-edit" onclick="editRows(this)"></i></td>
    `;

    list.appendChild(row);
    // console.log(list);

    title.value = "";
    author.value = "";
    description.value = "";
}

const delRows = (e) => {
    // console.log(e);
    e.parentNode.parentNode.remove();
}

const editRows = (e) => {
    // console.log(e.parentNode.parentNode.firstChild.nextSibling.innerHTML);

    let valTitle = e.parentNode.parentNode.firstChild.nextSibling.innerHTML;
    let editNoteTitle = prompt('Edit Title: ', valTitle);
    e.parentNode.parentNode.firstChild.nextSibling.innerHTML = editNoteTitle;

    // console.log(e.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling);
    let valAuthor = e.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling.innerHTML;
    let editNoteAuthor = prompt('Edit Author: ', valAuthor);
    e.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling.innerHTML = editNoteAuthor;

    // console.log(e.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling);

    let valDesc = e.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML;
    let editNoteDesc = prompt('Edit Description: ', valDesc);
    e.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML = editNoteDesc;
}