
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
       <td><a class="btn btn-danger btn-sm delete" id="deleteX" onclick="delRows(this)">X</a></td>
    `;

    list.appendChild(row);
    // console.log(list);

    title.value = "";
    author.value = "";
    description.value = "";
}

const delRows = (e) => {
    e.parentNode.parentNode.remove();
}