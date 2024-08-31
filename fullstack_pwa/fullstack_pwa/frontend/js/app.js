const API_URL = 'http://localhost:3000/api/filmes';

document.getElementById('filmeForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const message = document.getElementById('message').value;

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, message })
    });

    const filme = await response.json();
    appendFilme(filme);

    document.getElementById('title').value = '';
    document.getElementById('message').value = '';
});

async function loadFilmes() {
    const response = await fetch(API_URL);
    const filmes = await response.json();
    filmes.forEach(appendFilme);
}

function appendFilme(filme) {
    const li = document.createElement('li');
    li.innerHTML = `
        <strong>${filme.title}</strong>
        <p>${filme.message}</p>
        <button onclick="deleteFilme('${filme._id}')">Deletar</button>
    `;
    document.getElementById('filmesList').appendChild(li);
}

async function deleteFilme(id) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    document.location.reload();
}

loadFilmes();
